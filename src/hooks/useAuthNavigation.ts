import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export function useAuthNavigation(requireAuth: boolean = false) {
  const { user, loading, initialized, error, resetAuth } = useAuth()
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)
  const lastStateRef = useRef({ user, loading, initialized })

  // Detect stuck states
  useEffect(() => {
    const currentState = { user, loading, initialized }
    const lastState = lastStateRef.current
    
    // If we're stuck in a loading state for too long, reset
    if (lastState.loading && !loading && !initialized) {
      console.log('[useAuthNavigation] Detected stuck state, resetting auth...')
      resetAuth()
    }
    
    lastStateRef.current = currentState
  }, [user, loading, initialized, resetAuth])

  useEffect(() => {
    if (!initialized) return

    if (requireAuth && !user && !loading) {
      setIsNavigating(true)
      console.log('[useAuthNavigation] Redirecting to sign-in (requireAuth=true, user=null)')
      router.push('/sign-in')
    }
    // Removed automatic redirect to dashboard for authenticated users on public pages
    // This allows users to access public pages even when signed in
  }, [user, loading, initialized, requireAuth, router])

  // Reset navigation state when auth state changes
  useEffect(() => {
    if (initialized && !loading) {
      setIsNavigating(false)
    }
  }, [initialized, loading])

  return {
    isAuthenticated: !!user,
    isLoading: (loading || !initialized) && !(user === null && !loading && initialized),
    isNavigating,
    error,
    user
  }
} 