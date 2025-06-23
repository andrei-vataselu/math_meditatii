'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { resetPassword } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Design from '../components/Design'
import { z } from 'zod'

const profileSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'Prenumele este obligatoriu')
    .regex(/^[^0-9]*$/, 'Prenumele nu poate conține cifre'),
  lastName: z
    .string()
    .trim()
    .min(1, 'Numele este obligatoriu')
    .regex(/^[^0-9]*$/, 'Numele nu poate conține cifre'),
  email: z.string().email('Adresa de email este invalidă'),
  phoneNumber: z
    .string()
    .min(1, 'Numărul de telefon este obligatoriu')
    .refine(
      (value) => /^07[0-9]{8}$/.test(value),
      'Numărul de telefon trebuie să fie în format românesc (ex. 0712345678)'
    )
})

export default function ProfilePage() {
  const { user, profile, loading: authLoading, updateProfile } = useAuth()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [errors, setErrors] = useState<z.ZodError['formErrors']['fieldErrors'] | null>(null)
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState('')

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push('/sign-in')
      } else {
        setFormData({
          firstName: profile?.first_name || '',
          lastName: profile?.last_name || '',
          email: user.email || '',
          phoneNumber: profile?.phone_number || ''
        })
      }
    }
  }, [user, profile, authLoading, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setLoading(true)
    setError('')
    setSuccess('')
    setErrors(null)

    const validationResult = profileSchema.safeParse(formData)

    if (!validationResult.success) {
      setErrors(validationResult.error.formErrors.fieldErrors)
      setLoading(false)
      return
    }

    try {
      const { error: updateError } = await updateProfile({
        first_name: validationResult.data.firstName,
        last_name: validationResult.data.lastName,
        phone_number: validationResult.data.phoneNumber
      })

      if (updateError) {
        throw updateError
      }
      
      setSuccess('Profilul a fost actualizat cu succes!')

    } catch (err) {
      console.error('Profile update error:', err)
      const error = err as Error
      setError(error.message || 'Eroare la actualizarea profilului')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !user.email) {
      setError('Email-ul utilizatorului nu a fost găsit.')
      setPasswordLoading(false)
      return
    }

    setPasswordLoading(true)
    setError('')
    setPasswordSuccess('')

    try {
      const { error } = await resetPassword(user.email)
      if (error) {
        setError(error.message)
      } else {
        setPasswordSuccess('Email-ul de resetare a fost trimis! Vei fi deconectat de pe toate dispozitivele.')
      }
    } catch (err) {
      console.error('Password reset error:', err)
      setError('Eroare la trimiterea email-ului de resetare')
    } finally {
      setPasswordLoading(false)
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
        <Design />
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white">Se încarcă...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h1 className="text-3xl font-bold text-white mb-6">Profilul meu</h1>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 mb-4">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-green-300 text-sm">{success}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  {errors?.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName[0]}</p>}
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
                  {errors?.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName[0]}</p>}
                </div>
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
                  placeholder="Adresa ta de email"
                />
                {errors?.email && <p className="text-red-400 text-xs mt-1">{errors.email[0]}</p>}
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
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#FEBFD2] focus:ring-[#FEBFD2] focus:outline-none transition-colors"
                  placeholder="0712 345 678"
                />
                {errors?.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber[0]}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 py-3 rounded-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Se salvează...' : 'Salvează modificările'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/20">
              <h2 className="text-xl font-bold text-white mb-4">Schimbă parola</h2>
              <p className="text-gray-300 text-sm mb-4">
                Vei primi un email cu instrucțiuni pentru resetarea parolei. Vei fi deconectat de pe toate dispozitivele.
              </p>

            {passwordSuccess && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-green-300 text-sm">{passwordSuccess}</p>
              </div>
            )}

            <form onSubmit={handlePasswordReset}>
              <button
                type="submit"
                disabled={passwordLoading}
                className="w-full bg-gradient-to-r from-red-400 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-red-500 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {passwordLoading ? 'Se trimite...' : 'Trimite email de resetare'}
              </button>
            </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 