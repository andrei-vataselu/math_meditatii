'use client';

import { PricingTable } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ProtectedRoute from '../components/ProtectedRoute';
import Design from '../components/Design';
import Footer from '../components/Footer';

function PricingContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Alege Planul Potrivit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300"
            >
              Deblochează accesul la toate resursele și ședințele.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <PricingTable 
              appearance={{
                elements: {
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'text-white',
                  headerSubtitle: 'text-gray-300',
                  price: 'text-white',
                  priceInterval: 'text-gray-300',
                  planDescription: 'text-gray-300',
                  featureList: 'text-gray-300',
                  featureIcon: 'text-[#FEBFD2]',
                  formButtonPrimary: 'bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300',
                },
                variables: {
                  colorPrimary: '#FEBFD2',
                }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function PricingPage() {
  return (
    <ProtectedRoute>
      <PricingContent />
    </ProtectedRoute>
  );
} 