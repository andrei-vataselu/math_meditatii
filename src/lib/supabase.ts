import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Sign up a user and insert into profiles
export async function signUpWithProfile({ email, password, first_name, last_name, phone_number }: { email: string, password: string, first_name: string, last_name: string, phone_number: string }) {
  // Sign up
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password
  });
  if (signUpError) return { data: null, error: signUpError };
  const userId = signUpData?.user?.id;
  if (!userId) return { data: null, error: { message: 'No user id returned from signUp', code: 'NO_USER_ID' } };
  // Insert into profiles
  const { data: profileData, error: profileError } = await supabase.from('profiles').insert([
    { id: userId, first_name, last_name, email, phone_number }
  ]);
  if (profileError) return { data: null, error: profileError };
  return { data: { user: signUpData.user, profile: profileData }, error: null };
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

export const getSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession()
  return { session, error }
}

// Profile helpers - use only the profiles table
export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
  return { data, error };
}

export const updateUserProfile = async (userId: string, updates: Partial<{ first_name: string, last_name: string, email: string, phone_number: string }>) => {
  const { data, error } = await supabase.from('profiles').update(updates).eq('id', userId).single();
  return { data, error };
}