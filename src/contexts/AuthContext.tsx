'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase, getUserProfile, updateUserProfile } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

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
    await supabase.auth.signOut()
    router.push('/sign-in')
  }

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
        const { data: profileData, error: profileError } = await getUserProfile(currentUser.id)
        if (profileError) {
          console.error('Error fetching profile:', profileError)
          setProfile(null)
        } else {
          setProfile(profileData)
        }
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
          const { data: profileData, error: profileError } = await getUserProfile(currentUser.id)
          if (profileError) {
            setProfile(null)
          } else {
            setProfile(profileData)
          }
        }
      } else {
        setProfile(null)
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
  const { user, profile, loading } = useAuth()

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
    user: memoizedUser
  }
}