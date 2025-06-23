import { createClient, User } from '@supabase/supabase-js'
import { z } from 'zod'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

interface SignUpFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

// Sign up a user, profile is created by a trigger
export const signUp = async (formData: SignUpFormData) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber
        }
      }
    });
    
    if (error) {
      console.error('Sign up error:', error)
      return { data: null, error }
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Sign up failed:', error)
    return { data: null, error: { message: 'Eroare la înregistrare' } }
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) {
      console.error('Sign in error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (error) {
    console.error('Sign in failed:', error)
    return { data: null, error: { message: 'Eroare la conectare' } }
  }
}

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('Sign out error:', error)
      return { error }
    }
    
    return { error: null }
  } catch (error) {
    console.error('Sign out failed:', error)
    return { error: { message: 'Eroare la deconectare' } }
  }
}

export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      console.error('Get user error:', error)
      return { user: null, error }
    }
    
    return { user, error: null }
  } catch (error) {
    console.error('Get user failed:', error)
    return { user: null, error: { message: 'Eroare la încărcarea utilizatorului' } }
  }
}

export const getSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Get session error:', error)
      return { session: null, error }
    }
    
    return { session, error: null }
  } catch (error) {
    console.error('Get session failed:', error)
    return { session: null, error: { message: 'Eroare la încărcarea sesiunii' } }
  }
}

// Reset password via email
export const resetPassword = async (email: string) => {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    })
    
    if (error) {
      console.error('Reset password error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (error) {
    console.error('Reset password failed:', error)
    return { data: null, error: { message: 'Eroare la resetarea parolei' } }
  }
}

// Change email functionality
export const changeEmail = async (newEmail: string) => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      email: newEmail
    })
    
    if (error) {
      console.error('Change email error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (error) {
    console.error('Change email failed:', error)
    return { data: null, error: { message: 'Eroare la schimbarea email-ului' } }
  }
}

// Profile helpers - use only the profiles table
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
    
    if (error) {
      console.error('Supabase profile error:', error)
      return { data: null, error }
    }
    
    return { data, error: null };
  } catch (err) {
    console.error('Profile fetch error:', err)
    return { data: null, error: { message: 'Eroare la încărcarea profilului' } }
  }
}

const profileUpdateSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, 'Prenumele este obligatoriu')
    .regex(/^[^0-9]*$/, 'Prenumele nu poate conține cifre'),
  last_name: z
    .string()
    .trim()
    .min(1, 'Numele este obligatoriu')
    .regex(/^[^0-9]*$/, 'Numele nu poate conține cifre'),
  phone_number: z
    .string()
    .min(1, 'Numărul de telefon este obligatoriu')
    .refine(
      (value) => /^07[0-9]{8}$/.test(value),
      'Numărul de telefon trebuie să fie în format românesc (ex. 0712345678)'
    )
})

export const updateUserProfile = async (
  userId: string,
  updates: Partial<{ first_name: string; last_name: string; phone_number: string }>
) => {
  try {
    const validationResult = profileUpdateSchema.partial().safeParse(updates)

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0]
      return { data: null, error: { message: firstError.message } }
    }

    const { data, error } = await supabase
      .from('profiles')
      .update(validationResult.data)
      .eq('id', userId)
      .select()
      .single()
      
    if (error) {
      console.error('Supabase update error:', error)
      return { data: null, error }
    }
    
    return { data, error: null }
  } catch (err) {
    console.error('Profile update error:', err)
    return { data: null, error: { message: 'Eroare la actualizarea profilului' } }
  }
}

// Create a minimal user profile if missing
export const createUserProfile = async (user: User) => {
  if (!user) return { data: null, error: { message: 'User not provided' } };
  
  try {
    const { id, email, user_metadata } = user;
    const first_name = user_metadata?.first_name || 'Prenume';
    const last_name = user_metadata?.last_name || 'Nume';
    const phone_number = user_metadata?.phone_number || '0700000000';
    
    const { data, error } = await supabase.from('profiles').insert([
      { id, email, first_name, last_name, phone_number }
    ]).select().single();
    
    if (error) {
      console.error('Supabase profile create error:', error);
      return { data: null, error };
    }
    
    return { data, error: null };
  } catch (err) {
    console.error('Profile create error:', err);
    return { data: null, error: { message: 'Eroare la crearea profilului' } };
  }
}