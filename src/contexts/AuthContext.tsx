'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useMemo, useCallback } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase, getUserProfile, updateUserProfile, createUserProfile } from '@/lib/supabase'

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

interface AuthState {
  user: User | null
  profile: UserProfile | null
  session: Session | null
  loading: boolean
  error: string | null
  initialized: boolean
}

interface AuthContextType extends AuthState {
  signOut: () => Promise<void>
  plan: PlanType
  updateProfile: (updates: Partial<{ first_name: string; last_name: string; phone_number: string }>) => Promise<{ error: { message: string } | null }>
  clearError: () => void
  refreshProfile: () => Promise<void>
  resetAuth: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    session: null,
    loading: true,
    error: null,
    initialized: false
  })

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }))
  }, [])

  const resetAuth = useCallback(() => {
    console.log('[AuthProvider] Resetting auth state...')
    setState({
      user: null,
      profile: null,
      session: null,
      loading: true,
      error: null,
      initialized: false
    })
  }, [])

  const refreshProfile = useCallback(async () => {
    if (!state.user) return

    try {
      const { data: profileData, error: profileError } = await getUserProfile(state.user.id)
      
      if (profileError) {
        console.error('Profile refresh error:', profileError)
        setState(prev => ({ 
          ...prev, 
          profile: null, 
          error: 'Eroare la încărcarea profilului' 
        }))
        return
      }

      setState(prev => ({ 
        ...prev, 
        profile: profileData, 
        error: null 
      }))
    } catch (error) {
      console.error('Profile refresh failed:', error)
      setState(prev => ({ 
        ...prev, 
        error: 'Eroare la actualizarea profilului' 
      }))
    }
  }, [state.user])

  const updateProfile = useCallback(async (updates: Partial<{ first_name: string; last_name: string; phone_number: string }>) => {
    if (!state.user) {
      return { error: { message: 'User not authenticated' } }
    }

    try {
      const { data, error } = await updateUserProfile(state.user.id, updates)

      if (error) {
        return { error }
      }

      if (data) {
        setState(prev => ({ ...prev, profile: data as UserProfile, error: null }))
      }
      
      return { error: null }
    } catch (error) {
      console.error('Profile update failed:', error)
      return { error: { message: 'Eroare la actualizarea profilului' } }
    }
  }, [state.user])

  const signOut = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }))
      
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        console.error('Sign out error:', error)
        setState(prev => ({ 
          ...prev, 
          loading: false, 
          error: 'Eroare la deconectare' 
        }))
        return
      }

      // Clear all state completely
      setState({
        user: null,
        profile: null,
        session: null,
        loading: false,
        error: null,
        initialized: true
      })

      console.log('[AuthProvider] Sign out successful, state cleared')
    } catch (error) {
      console.error('Sign out failed:', error)
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'Eroare la deconectare' 
      }))
    }
  }, [])

  const loadUserProfile = useCallback(async (user: User) => {
    try {
      const { data: profileData, error: profileError } = await getUserProfile(user.id)
      
      if (profileError) {
        console.log('Profile not found, creating new profile...')
        const { data: createdProfile, error: createError } = await createUserProfile(user)
        
        if (createError) {
          console.error('Profile creation failed:', createError)
          setState(prev => ({ 
            ...prev, 
            profile: null, 
            error: 'Eroare la crearea profilului' 
          }))
          return
        }
        
        setState(prev => ({ 
          ...prev, 
          profile: createdProfile, 
          error: null 
        }))
      } else {
        setState(prev => ({ 
          ...prev, 
          profile: profileData, 
          error: null 
        }))
      }
    } catch (error) {
      console.error('Profile loading failed:', error)
      setState(prev => ({ 
        ...prev, 
        error: 'Eroare la încărcarea profilului' 
      }))
    }
  }, [])

  useEffect(() => {
    let mounted = true

    const initializeAuth = async () => {
      try {
        console.log('[AuthProvider] Initializing auth...')
        
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Session error:', sessionError)
          if (mounted) {
            setState(prev => ({ 
              ...prev, 
              loading: false, 
              error: 'Eroare la încărcarea sesiunii',
              initialized: true 
            }))
          }
          return
        }

        if (mounted) {
          setState(prev => ({ 
            ...prev, 
            session, 
            user: session?.user ?? null,
            loading: false,
            initialized: true 
          }))

          if (session?.user) {
            await loadUserProfile(session.user)
          }
        }
      } catch (error) {
        console.error('Auth initialization failed:', error)
        if (mounted) {
          setState(prev => ({ 
            ...prev, 
            loading: false, 
            error: 'Eroare la inițializarea autentificării',
            initialized: true 
          }))
        }
      }
    }

    initializeAuth()

    return () => {
      mounted = false
    }
  }, [loadUserProfile])

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('[AuthProvider] Auth state change:', event, session?.user?.email)
        
        if (event === 'SIGNED_OUT') {
          // Clear all state when user signs out
          setState({
            user: null,
            profile: null,
            session: null,
            loading: false,
            error: null,
            initialized: true
          })
          console.log('[AuthProvider] User signed out, state cleared')
          return
        }
        
        setState(prev => ({ 
          ...prev, 
          session, 
          user: session?.user ?? null,
          loading: false 
        }))

        if (session?.user) {
          if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
            await loadUserProfile(session.user)
          }
        } else {
          setState(prev => ({ 
            ...prev, 
            profile: null, 
            error: null 
          }))
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [loadUserProfile])

  // Debug logging for state changes
  useEffect(() => {
    console.log('[AuthProvider] State changed:', { 
      user: state.user?.email, 
      profile: state.profile?.first_name, 
      session: !!state.session, 
      loading: state.loading, 
      error: state.error, 
      initialized: state.initialized 
    });

    // Add debug functions to window in development
    if (process.env.NODE_ENV === 'development') {
      (window as any).__AUTH_DEBUG__ = state;
      (window as any).__RESET_AUTH__ = resetAuth;
      (window as any).__CHECK_AUTH_STUCK__ = () => {
        const stuck = state.loading && !state.initialized;
        console.log('[Debug] Auth stuck:', stuck, state);
        return stuck;
      };
    }
  }, [state.user, state.profile, state.session, state.loading, state.error, state.initialized, resetAuth]);

  const contextValue = useMemo(() => ({
    ...state,
    signOut,
    plan: { status: 'inactive', plan_type: 'free' },
    updateProfile,
    clearError,
    refreshProfile,
    resetAuth
  }), [state, signOut, updateProfile, clearError, refreshProfile, resetAuth])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function useUser() {
  const { user, profile, loading, error, initialized } = useAuth()

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

  // Only consider loaded when both initialized and not loading
  const isLoaded = initialized && !loading

  return {
    isSignedIn: !!user,
    isLoaded,
    user: memoizedUser,
    profile,
    error
  }
} 