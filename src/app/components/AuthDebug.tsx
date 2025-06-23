'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useUser } from '@/contexts/AuthContext'

export default function AuthDebug() {
  const auth = useAuth()
  const user = useUser()

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">Auth Debug</h3>
      <div className="space-y-1">
        <div>User: {auth.user?.email || 'null'}</div>
        <div>Profile: {auth.profile?.first_name || 'null'}</div>
        <div>Session: {auth.session ? 'yes' : 'no'}</div>
        <div>Loading: {auth.loading ? 'yes' : 'no'}</div>
        <div>Initialized: {auth.initialized ? 'yes' : 'no'}</div>
        <div>Error: {auth.error || 'none'}</div>
        <div>isSignedIn: {user.isSignedIn ? 'yes' : 'no'}</div>
        <div>isLoaded: {user.isLoaded ? 'yes' : 'no'}</div>
      </div>
    </div>
  )
} 