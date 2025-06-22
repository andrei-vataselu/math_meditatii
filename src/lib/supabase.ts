import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

interface SignUpFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

// Sign up a user, profile is created by a trigger
export const signUp = async (formData: SignUpFormData) => {
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
  return { data, error };
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

// Reset password via email
export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/profile`
  })
  return { data, error }
}

// Change email functionality
export const changeEmail = async (newEmail: string) => {
  const { data, error } = await supabase.auth.updateUser({
    email: newEmail
  })
  return { data, error }
}

// Profile helpers - use only the profiles table
export const getUserProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
    if (error) {
      console.error('Supabase error:', error)
      return { data: null, error }
    }
    return { data, error: null };
  } catch (err) {
    console.error('Profile fetch error:', err)
    return { data: null, error: { message: 'Eroare la încărcarea profilului' } }
  }
}

export const updateUserProfile = async (userId: string, updates: Partial<{ first_name: string, last_name: string, email: string, phone_number: string }>) => {
  try {
    const { data, error } = await supabase.from('profiles').update(updates).eq('id', userId).single();
    if (error) {
      console.error('Supabase update error:', error)
      return { data: null, error }
    }
    return { data, error: null };
  } catch (err) {
    console.error('Profile update error:', err)
    return { data: null, error: { message: 'Eroare la actualizarea profilului' } }
  }
}