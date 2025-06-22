'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { resetPassword } from '@/lib/supabase'
import Link from 'next/link'
import Header from '../components/Header'
import Design from '../components/Design'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = await resetPassword(email)
      
      if (error) {
        setError(error.message)
      } else {
        setSuccess(true)
      }
    } catch {
      setError('A apărut o eroare. Te rog să încerci din nou.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
        <Design />
        <Header />
        <div className="flex items-center justify-center p-4 min-h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl flex justify-center items-center p-4 sm:p-6 border border-white/20 max-w-md w-full"
          >
            <div className="text-center">
              <div className="text-green-400 text-4xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-white mb-2">Email trimis!</h2>
              <p className="text-gray-300 mb-6">
                Ți-am trimis un email cu instrucțiuni pentru resetarea parolei. 
                Te rog verifică-ți inbox-ul și urmează link-ul din email.
              </p>
              <Link 
                href="/sign-in"
                className="text-[#FEBFD2] hover:text-[#FAD4E4] font-medium"
              >
                Înapoi la conectare
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="flex items-center justify-center p-4 min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl flex justify-center items-center p-4 sm:p-6 border border-white/20 max-w-md w-full"
        >
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Ai uitat parola?</h2>
              <p className="text-gray-300">
                Introdu adresa ta de email și ți-om trimite instrucțiuni pentru resetarea parolei.
              </p>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
                placeholder="Introdu adresa ta de email"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 py-3 rounded-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Se trimite...' : 'Trimite email de resetare'}
            </button>

            <div className="text-center">
              <Link 
                href="/sign-in"
                className="text-[#FEBFD2] hover:text-[#FAD4E4] font-medium"
              >
                Înapoi la conectare
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 