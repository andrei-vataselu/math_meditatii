'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '@/app/components/Footer';
import Design from '@/app/components/Design';
import SignInForm from '@/app/components/SignInForm';
import { useAuthNavigation } from '@/hooks/useAuthNavigation';

export default function SignInPage() {
  const { isLoading, isNavigating, error } = useAuthNavigation(false);

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
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-2 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300"
          >
            Reîncearcă
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-88px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md max-[368px] p-1"
        >
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Bine ai venit!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300"
            >
              Conectează-te pentru a accesa resursele tale
            </motion.p>
          </div>
          
          <SignInForm />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 