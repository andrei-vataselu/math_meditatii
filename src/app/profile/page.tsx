"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { resetPassword } from '@/lib/supabase'
import Header from '../components/Header'
import Design from '../components/Design'
import { useAuthNavigation } from '@/hooks/useAuthNavigation'
import { z } from 'zod'
import { useRequireAuth } from '@/hooks/useRequireAuth'
import { useRouter } from 'next/navigation'

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

function ProfileContent() {
  const { isAuthenticated, isLoading } = useRequireAuth()
  const { user, profile, updateProfile, plan } = useAuth()
  
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
    if (user && profile) {
      setFormData({
        firstName: profile?.first_name || '',
        lastName: profile?.last_name || '',
        email: user.email || '',
        phoneNumber: profile?.phone_number || ''
      })
    }
  }, [user, profile])

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

  if (isLoading) return <div>Se încarcă...</div>;
  if (!isAuthenticated) return null;

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
          <div className="mb-8 bg-white/10 border border-white/20 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-white mb-2">Planul tău actual</h2>
            <div className="text-gray-300">
              {plan?.plan_type === 'free' && 'Plan Gratuit (activ)'}
              {plan?.plan_type === 'premium' && plan.status === 'active' && 'Plan Premium (activ)'}
              {plan?.plan_type === 'pro' && plan.status === 'active' && 'Plan Pro (activ)'}
              {plan?.status !== 'active' && plan?.plan_type !== 'free' && (
                <>Plan {plan?.plan_type} (inactiv)</>
              )}
            </div>
            {(plan as { end_date?: string })?.end_date && (
              <div className="text-gray-400 text-sm mt-1">
                Valabil până la: {new Date((plan as { end_date?: string }).end_date!).toISOString().slice(0, 10)}
              </div>
            )}
            {plan?.plan_type === 'free' && (
              <a href="/pricing">
                <button className="mt-4 bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-2 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300">
                  Upgradează la plan premium
                </button>
              </a>
            )}
          </div>
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
                  disabled
                  className="w-full bg-white/5 border border-white/10 text-gray-400 rounded-lg px-4 py-3 cursor-not-allowed"
                  placeholder="Email-ul tău"
                />
                <p className="text-gray-400 text-xs mt-1">Email-ul nu poate fi modificat</p>
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
                  placeholder="0712345678"
                />
                {errors?.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber[0]}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-3 rounded-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Se salvează...' : 'Salvează modificările'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Resetare parolă</h2>
              <p className="text-gray-300 text-sm mb-4">
                Dacă ai uitat parola, poți solicita un email de resetare.
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
                  className="bg-red-500/20 border border-red-500/30 text-red-300 px-6 py-3 rounded-lg font-semibold hover:bg-red-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

function ReloadButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.refresh()}
      className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-2 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300"
    >
      Reîncarcă
    </button>
  );
}

export default function ProfilePage() {
  const { isLoading, isNavigating, error } = useAuthNavigation(true);

  // Show loading state
  if (isLoading || isNavigating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="text-white text-xl mb-4">
            {isNavigating ? 'Redirecționare...' : 'Se încarcă...'}
          </div>
          <div className="w-8 h-8 border-2 border-[#FEBFD2] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-6"
        >
          <div className="text-red-300 text-lg mb-4">
            Eroare de autentificare
          </div>
          <div className="text-gray-300 text-sm mb-6">
            {error}
          </div>
          <ReloadButton />
        </motion.div>
      </div>
    );
  }

  return <ProfileContent />;
} 