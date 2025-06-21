'use client';

import { useUser, useAuth } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import FloatingMathSymbols from '../components/FloatingMathSymbols';
import Header from '../components/Header';
import ProtectedRoute from '../components/ProtectedRoute';
import Link from 'next/link';

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
      <h2 className="text-2xl font-bold text-white mb-4">Deblochează Potențialul Maxim</h2>
      <p className="text-gray-300 mb-6">
        Pentru a accesa toate resursele, exercițiile interactive și pentru a programa ședințe, ai nevoie de un abonament.
      </p>
      <Link href="/pricing">
        <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg">
          Vezi Planurile
        </button>
      </Link>
    </div>
  );
}

function DashboardContent() {
  const { user } = useUser();
  const { has } = useAuth();
  const hasActiveSubscription = has && has({ plan: 'meditatie_lunara' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FEBFD2] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#DB0073] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-[#FAD4E4] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <FloatingMathSymbols />
      </div>

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
            {hasActiveSubscription ? <SubscriptionActive /> : <NoSubscription />}
        </motion.div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
} 