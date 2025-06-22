-- Minimal setup - only essential tables and policies
-- Run this in Supabase SQL Editor

-- 1. CLEANUP: Drop old objects if they exist, ensuring a clean slate.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

DROP FUNCTION IF EXISTS public.handle_new_user ();

DROP TABLE IF EXISTS public.user_plans CASCADE;

DROP TABLE IF EXISTS public.profiles CASCADE;

DROP TYPE IF EXISTS public.plan_type_enum;

DROP TYPE IF EXISTS public.plan_status_enum;

-- 2. CUSTOM TYPES: Create ENUM types for better data integrity than plain text.
CREATE TYPE public.plan_type_enum AS ENUM ('free', 'premium');

CREATE TYPE public.plan_status_enum AS ENUM ('active', 'inactive', 'canceled', 'trialing');

-- 3. PROFILES TABLE: Re-create with stricter checks.
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users (id) ON DELETE CASCADE PRIMARY KEY,

-- Email should be unique in the profiles table as well for data consistency.
email TEXT UNIQUE,

-- Names are required and cannot be empty.
first_name TEXT NOT NULL CHECK (
    char_length(trim(first_name)) > 0
),
last_name TEXT NOT NULL CHECK (
    char_length(trim(last_name)) > 0
),

-- CNP (Cod Numeric Personal) - Must be 13 digits and unique.
cnp TEXT UNIQUE NOT NULL CHECK (
    char_length(cnp) = 13
    AND cnp ~ '^[0-9]+$'
),

-- Phone number must be a valid Romanian format (10 digits starting with 07)


phone_number TEXT CHECK (phone_number IS NULL OR phone_number ~ '^07[0-9]{8}$'),
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. USER_PLANS TABLE: Re-create using the new ENUM types.
CREATE TABLE IF NOT EXISTS public.user_plans (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

-- Each user should only have one plan entry.


user_id UUID REFERENCES auth.users (id) ON DELETE CASCADE NOT NULL UNIQUE,
    
    plan_type public.plan_type_enum NOT NULL DEFAULT 'free',
    status public.plan_status_enum NOT NULL DEFAULT 'active',
    
    start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    end_date TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. ROW LEVEL SECURITY (RLS): Enable RLS on the tables.
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.user_plans ENABLE ROW LEVEL SECURITY;

-- 6. RLS POLICIES: Define the access rules for your data.
DO $$
BEGIN
    -- PROFILES POLICIES
    -- Users can view their own profile.
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can view own profile') THEN
        CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
    END IF;
    
    -- Users can update their own profile.
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Users can update own profile') THEN
        CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
    END IF;
    
    -- Client-side inserts into profiles are DISALLOWED. This is handled by a trigger.

    -- USER_PLANS POLICIES
    -- Users can view their own plan.
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_plans' AND policyname = 'Users can view own plan') THEN
        CREATE POLICY "Users can view own plan" ON public.user_plans FOR SELECT USING (auth.uid() = user_id);
    END IF;
    
    -- Plan creation and updates should ideally be handled server-side (e.g., via webhooks after payment).
    -- For now, we will disallow client-side modifications to plans for better security.
END $$;

-- 7. CNP VALIDATION FUNCTION
CREATE OR REPLACE FUNCTION public.is_cnp_valid(cnp TEXT)
RETURNS BOOLEAN AS $$
DECLARE
    s INT;
    aa INT;
    ll INT;
    zz INT;
    an INT;
    c INT;
    suma BIGINT := 0;
    cifra_control INT;
    cheie_control CONSTANT TEXT := '279146358279';
BEGIN
    IF char_length(cnp) != 13 OR cnp !~ '^[0-9]+$' THEN
        RETURN FALSE;
    END IF;

    s := CAST(substring(cnp, 1, 1) AS INT);
    aa := CAST(substring(cnp, 2, 2) AS INT);
    ll := CAST(substring(cnp, 4, 2) AS INT);
    zz := CAST(substring(cnp, 6, 2) AS INT);
    c := CAST(substring(cnp, 13, 1) AS INT);

    IF s IN (1, 2) THEN an := 1900 + aa;
    ELSIF s IN (3, 4) THEN an := 1800 + aa;
    ELSIF s IN (5, 6) THEN an := 2000 + aa;
    ELSE RETURN FALSE;
    END IF;

    -- Check for valid date
    BEGIN
        IF to_date(an || '-' || ll || '-' || zz, 'YYYY-MM-DD') IS NULL THEN
            RETURN FALSE;
        END IF;
    EXCEPTION WHEN others THEN
        RETURN FALSE;
    END;

    -- Check control digit
    FOR i IN 1..12 LOOP
        suma := suma + (CAST(substring(cnp, i, 1) AS INT) * CAST(substring(cheie_control, i, 1) AS INT));
    END LOOP;
    
    cifra_control := suma % 11;
    IF cifra_control = 10 THEN
        cifra_control := 1;
    END IF;

    RETURN cifra_control = c;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 8. DATABASE TRIGGER: Automatically create a profile when a new user signs up.
-- This function is called by the trigger.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    user_cnp TEXT;
BEGIN
  user_cnp := new.raw_user_meta_data->>'cnp';

  -- Validate CNP before inserting profile.
  IF public.is_cnp_valid(user_cnp) = FALSE THEN
    RAISE EXCEPTION 'CNP invalid. Inregistrarea a eșuat.';
  END IF;

  INSERT INTO public.profiles (id, first_name, last_name, email, cnp, phone_number)
  VALUES (
    new.id,
    -- Get user data from the metadata provided during sign-up
    new.raw_user_meta_data->>'first_name',
    new.raw_user_meta_data->>'last_name',
    new.email,
    user_cnp,
    new.raw_user_meta_data->>'phone_number'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- The trigger that fires after a new user is inserted into auth.users.
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 9. Comments explaining the setup
COMMENT ON FUNCTION public.is_cnp_valid (TEXT) IS 'Validează structura, data și cifra de control a unui CNP românesc.';

COMMENT ON FUNCTION public.handle_new_user IS 'Validează CNP-ul și creează un profil pentru un utilizator nou.';

COMMENT ON TRIGGER on_auth_user_created ON auth.users IS 'Când un utilizator nou se înregistrează, validează CNP-ul și creează automat profilul.';

COMMENT ON
TABLE public.profiles IS 'Stores public-facing user profile information.';

COMMENT ON
TABLE public.user_plans IS 'Stores user subscription plan information.';