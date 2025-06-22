'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { signUp } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cnp: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Parolele nu se potrivesc')
      setLoading(false)
      return
    }

    try {
      const { data, error: signUpError } = await signUp(formData)
      if (signUpError) {
        setError(signUpError.message || 'Eroare la crearea contului')
        setLoading(false)
        return
      }
      if (data?.user) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      }
    } catch (err) {
      console.error('Sign up error:', err)
      setError('A apărut o eroare. Te rog să încerci din nou.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl flex justify-center items-center p-4 sm:p-6 border border-white/20"
      >
        <div className="text-center">
          <div className="text-green-400 text-4xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-white mb-2">Cont creat cu succes!</h2>
          <p className="text-gray-300">Ți-am trimis un email de confirmare. Te rog verifică-ți inbox-ul.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20"
    >
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Creează contul tău</h2>
          <p className="text-gray-300">Începe călătoria ta cu matematica</p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                Prenume
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
                placeholder="Prenumele tău"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                Nume
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
                placeholder="Numele tău"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cnp" className="block text-sm font-medium text-gray-300 mb-2">
              CNP
            </label>
            <input
              id="cnp"
              name="cnp"
              type="text"
              value={formData.cnp}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
              placeholder="Codul Numeric Personal"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
              placeholder="Introdu adresa ta de email"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
              Număr de telefon
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
              placeholder="+40 712 345 678"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Parolă
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
              placeholder="Creează o parolă (min. 6 caractere)"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Confirmă parola
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
              placeholder="Confirmă parola"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 py-3 rounded-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Se creează contul...' : 'Creează contul'}
        </button>

        <div className="text-center">
          <p className="text-gray-300 text-sm">
            Ai deja cont?{' '}
            <Link href="/sign-in" className="text-[#FEBFD2] hover:text-[#FAD4E4] font-medium">
              Conectează-te
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  )
}