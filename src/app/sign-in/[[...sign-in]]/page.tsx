'use client';

import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import FloatingMathSymbols from '../../components/FloatingMathSymbols';
import Header from '../../components/Header';
import Footer from '@/app/components/Footer';
import Design from '@/app/components/Design';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-88px)] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20"
          >
            <SignIn 
              appearance={{
                elements: {
                  header: 'hidden',
                  footer: 'bg-transparent pt-4',
                  footerActionText: 'text-gray-300',
                  formButtonPrimary: 'bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'text-white',
                  headerSubtitle: 'text-gray-300',
                  socialButtonsBlockButton: 'bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300',
                  formFieldInput: 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[#FEBFD2] focus:ring-[#FEBFD2]',
                  formFieldLabel: 'text-gray-300',
                  footerActionLink: 'text-[#FEBFD2] hover:text-[#FAD4E4]',
                  dividerLine: 'bg-white/20',
                  dividerText: 'text-gray-300',
                  formResendCodeLink: 'text-[#FEBFD2] hover:text-[#FAD4E4]',
                  formFieldAction: 'text-[#FEBFD2] hover:text-[#FAD4E4]',
                  identityPreviewText: 'text-gray-300',
                  identityPreviewEditButton: 'text-[#FEBFD2] hover:text-[#FAD4E4]',
                  formFieldShowPasswordButton: 'text-gray-400 hover:text-white',
                  alertText: 'text-red-300',
                  alert: 'bg-red-500/20 border border-red-500/30',
                },
                variables: {
                  colorPrimary: '#FEBFD2',
                  colorText: '#ffffff',
                  colorTextSecondary: '#9ca3af',
                  colorBackground: 'transparent',
                  colorInputBackground: 'rgba(255, 255, 255, 0.1)',
                  colorInputText: '#ffffff',
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