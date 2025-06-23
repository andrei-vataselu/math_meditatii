'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function UserButton() {
  const { user, profile, signOut, error } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  
  console.log('[UserButton] Rendered', { user, profile, signingOut, error });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSignOut = async () => {
    try {
      setSigningOut(true)
      setIsOpen(false)
      console.log('[UserButton] Starting sign out...')
      
      await signOut()
      
      // Don't navigate immediately, let the auth state change handle it
      console.log('[UserButton] Sign out completed successfully')
    } catch (error) {
      console.error('[UserButton] Sign out failed:', error)
    } finally {
      setSigningOut(false)
    }
  }

  const getInitials = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase()
    }
    if (profile?.first_name) {
      return profile.first_name[0].toUpperCase()
    }
    if (user?.email) {
      return user.email[0].toUpperCase()
    }
    return 'U'
  }

  const getDisplayName = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name} ${profile.last_name}`
    }
    if (profile?.first_name) {
      return profile.first_name
    }
    return user?.email || 'User'
  }

  // Don't render if there's an error
  if (error) {
    return null
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] rounded-full text-gray-800 font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FEBFD2] focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-label="User menu"
      >
        {getInitials()}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg z-50"
          >
            <div className="p-4 border-b border-white/20">
              <p className="text-white font-medium">{getDisplayName()}</p>
              <p className="text-gray-300 text-sm">{user?.email}</p>
              {profile?.phone_number && (
                <p className="text-gray-300 text-sm mt-1">{profile.phone_number}</p>
              )}
            </div>
            
            <div className="p-2">
              <button
                onClick={() => {
                  setIsOpen(false)
                  router.push('/dashboard')
                }}
                className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                Dashboard
              </button>
              
              <button
                onClick={() => {
                  setIsOpen(false)
                  router.push('/profile')
                }}
                className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                Profil
              </button>
              
              <button
                onClick={() => {
                  setIsOpen(false)
                  router.push('/pricing')
                }}
                className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                Planuri
              </button>
            </div>
            
            <div className="p-2 border-t border-white/20">
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className="w-full text-left px-3 py-2 text-red-300 hover:text-red-200 hover:bg-red-500/10 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {signingOut ? 'Deconectare...' : 'Deconectează-te'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 