'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase, getUserProfile, updateUserProfile, createUserProfile } from '@/lib/supabase'
// import { useRouter } from 'next/navigation'

interface UserProfile {
  id: string
  first_name?: string
  last_name?: string
  email?: string
  phone_number?: string
  created_at?: string
  updated_at?: string
}

interface PlanType {
  status: string;
  plan_type: string;
}

interface AuthContextType {
  user: User | null
  profile: UserProfile | null
  session: Session | null
  loading: boolean
  signOut: () => Promise<void>
  plan: PlanType
  updateProfile: (updates: Partial<{ first_name: string; last_name: string; phone_number: string }>) => Promise<{ error: { message: string } | null }>
  profileError: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [profileError, setProfileError] = useState<string | null>(null)
  // const router = useRouter()

  const updateProfile = async (updates: Partial<{ first_name: string; last_name: string; phone_number: string }>) => {
    if (!user) return { error: { message: 'User not authenticated' } };

    const { data, error } = await updateUserProfile(user.id, updates);

    if (error) {
        return { error };
    }

    if (data) {
        setProfile(data as UserProfile);
    }
    return { error: null };
  }

  const signOut = async () => {
    console.log('[AuthProvider] signOut called');
    await supabase.auth.signOut();
    // Check if session is cleared
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      console.log('[AuthProvider] Session not cleared, forcing localStorage clear and reload');
      localStorage.removeItem('supabase.auth.token');
      window.location.reload();
      return;
    }
    setUser(null);
    setProfile(null);
    setSession(null);
    setLoading(false);
    console.log('[AuthProvider] signOut finished, state cleared');
  }

  useEffect(() => {
    console.log('[AuthProvider] State', { user, profile, session, loading, profileError });
  }, [user, profile, session, loading, profileError]);

  useEffect(() => {
    setLoading(true)

    const fetchSessionAndProfile = async () => {
      const {
        data: { session: currentSession },
        error: sessionError,
      } = await supabase.auth.getSession()

      if (sessionError) {
        console.error('Error fetching session:', sessionError)
        setLoading(false)
        return
      }

      setSession(currentSession)
      const currentUser = currentSession?.user
      setUser(currentUser ?? null)

      if (currentUser) {
        const { data: profileData, error: profileErrorObj } = await getUserProfile(currentUser.id)
        if (profileErrorObj) {
          setProfile(null)
          setProfileError('Profilul nu a putut fi încărcat. Încercăm să-l creăm...')
          const { data: createdProfile } = await createUserProfile(currentUser)
          if (createdProfile) {
            setProfile(createdProfile)
            setProfileError(null);
          } else {
            setProfileError('Eroare la crearea profilului.');
          }
        } else {
          setProfile(profileData)
          setProfileError(null);
        }
      } else {
        setProfile(null)
        setProfileError(null);
      }
      setLoading(false)
    }

    fetchSessionAndProfile()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      setSession(newSession)
      const currentUser = newSession?.user
      setUser(currentUser ?? null)

      if (currentUser) {
        if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
          const { data: profileData, error: profileErrorObj } = await getUserProfile(currentUser.id)
          if (profileErrorObj) {
            setProfile(null)
            setProfileError('Profilul nu a putut fi încărcat. Încercăm să-l creăm...')
            const { data: createdProfile } = await createUserProfile(currentUser)
            if (createdProfile) {
              setProfile(createdProfile)
              setProfileError(null);
            } else {
              setProfileError('Eroare la crearea profilului.');
            }
          } else {
            setProfile(profileData)
            setProfileError(null);
          }
        }
      } else {
        setProfile(null)
        setProfileError(null);
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const value = {
    user,
    profile,
    session,
    loading,
    signOut,
    plan: { status: 'inactive', plan_type: 'free' },
    updateProfile,
    profileError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
 
export function useUser() {
  const { user, profile, loading, profileError } = useAuth()

  const memoizedUser = useMemo(() => {
    if (!user) return null
    return {
      emailAddresses: [{ emailAddress: user.email }],
      firstName: profile?.first_name,
      lastName: profile?.last_name,
      username: user.email?.split('@')[0],
      ...user
    }
  }, [user, profile])

  return {
    isSignedIn: !!user,
    isLoaded: !loading,
    user: memoizedUser,
    profileError,
  }
}