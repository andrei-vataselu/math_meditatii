'use client';

import { useUser } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isSignedIn, isLoaded, error } = useUser();
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (isLoaded && !isSignedIn && !redirecting) {
      setRedirecting(true);
      console.log('[ProtectedRoute] Redirecting to sign-in');
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router, redirecting]);

  // Show loading state while auth is initializing
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="text-white text-xl mb-4">
            Se încarcă...
          </div>
          <div className="w-8 h-8 border-2 border-[#FEBFD2] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    );
  }

  // Show error state if there's an auth error
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

  // Show redirecting state
  if (redirecting || (!isSignedIn && isLoaded)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-white text-xl mb-4">
            Redirecționare către pagina de conectare...
          </div>
          <div className="w-8 h-8 border-2 border-[#FEBFD2] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    );
  }

  // Render children if authenticated
  return <>{children}</>;
} 