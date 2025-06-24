"use client";

import { useUser, useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Link from 'next/link';
import Footer from '../components/Footer';
import Design from '../components/Design';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import LoadingSpinner from '../components/LoadingSpinner';

function SubscriptionActive() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Abonament Activ!</h2>
      <p className="text-gray-300 mb-6">
        Felicitări! Ai acces la toate resursele premium și la ședințele de meditații.
      </p>
      <div className="text-left bg-white/5 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-4">Următorii Pași</h3>
        <p className="text-gray-300">Pentru a programa o ședință sau pentru orice întrebări, te rog să mă contactezi:</p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-3">
            <span className="text-[#FEBFD2]">✉️</span>
            <a href="mailto:denisa.stanciu@example.com" className="text-white hover:underline">denisa.stanciiu@example.com</a>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#FEBFD2]">📞</span>
            <a href="tel:+40712345678" className="text-white hover:underline">+40 712 345 678</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NoSubscription() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Nu ai un abonament activ</h2>
      <p className="text-gray-300 mb-6">
        Pentru a accesa resursele premium și a programa ședințe de meditații, te rog să îți activezi un abonament.
      </p>
      <Link href="/pricing">
        <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-8 py-3 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300">
          Vezi planurile disponibile
        </button>
      </Link>
    </div>
  );
}

function DashboardContent() {
  const { user } = useUser();
  const { plan } = useAuth();
  const hasActiveSubscription = plan && plan.status === 'active' && plan.plan_type !== 'free';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="px-6 py-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Bună, {user?.firstName || user?.username || 'elev'}! 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-300"
          >
            {hasActiveSubscription 
              ? "Bine ai revenit în centrul tău de comandă."
              : "Iată o privire de ansamblu asupra platformei."
            }
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {hasActiveSubscription ? (
            <SubscriptionActive />
          ) : (
            <NoSubscription />
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function DashboardPage() {
  const { isAuthenticated, isLoading } = useRequireAuth();

  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return null;

  return <DashboardContent />;
} 