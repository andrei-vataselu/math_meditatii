'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Design from '@/app/components/Design';
import Footer from '@/app/components/Footer';
import SignUpForm from '@/app/components/SignUpForm';
import { useAuthNavigation } from '@/hooks/useAuthNavigation';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import LoadingSpinner from '@/app/components/LoadingSpinner';

export default function SignUpPage() {
  const { isLoading, isNavigating, error } = useAuthNavigation(false);
  const router = useRouter();
  const { user, loading, initialized } = useAuth();

  useEffect(() => {
    if (!loading && initialized && user) {
      router.push("/");
    }
  }, [user, loading, initialized, router]);

  if (loading || isLoading || isNavigating) return <LoadingSpinner />;
  if (!loading && initialized && user) return <LoadingSpinner />;
  // If error is 'No access token provided', show sign-up form, not error boundary

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
              Creează contul tău
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300"
            >
              Începe călătoria ta cu matematica
            </motion.p>
          </div>
          
          <SignUpForm />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 