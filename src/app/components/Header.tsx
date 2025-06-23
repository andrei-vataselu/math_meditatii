'use client';

import { motion } from 'framer-motion';
import { useUser } from '@/contexts/AuthContext';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import UserButton from './UserButton';

export default function Header() {
  const { isSignedIn, isLoaded, user, error } = useUser();
  console.log('[Header] Rendered', { isSignedIn, isLoaded, user, error });

  return (
    <nav className="relative flex justify-between items-center p-6 md:p-8" style={{ background: 'none' }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white"
      >
        <Link href="/" className="hover:text-[#FEBFD2] transition-colors">
          DSMath Center
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:flex space-x-8"
      >
        <Link href="/" className="text-gray-300 hover:text-white transition-colors">Acasă</Link>
        <Link href="/resurse-gratuite" className="text-gray-300 hover:text-white transition-colors">Resurse gratuite</Link>
        <Link href="/despre-mine" className="text-gray-300 hover:text-white transition-colors">Despre mine</Link>
        <Link href="/recenzii" className="text-gray-300 hover:text-white transition-colors">Recenzii</Link>
        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Planuri</Link>
        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
      </motion.div>
      
      <div className="flex items-center space-x-4">
        {isLoaded && !error && (
          <>
            {isSignedIn ? (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="hidden md:flex items-center space-x-4"
                >
                  <Link 
                    href="/dashboard"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                  <UserButton />
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:block"
              >
                <Link href="/sign-up">
                  <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-2 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 cursor-pointer">
                    Începe acum
                  </button>
                </Link>
              </motion.div>
            )}
          </>
        )}
        
        {/* Show loading indicator when auth is loading */}
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:block"
          >
            <div className="w-6 h-6 border-2 border-[#FEBFD2] border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        )}
        
        <MobileMenu />
      </div>
    </nav>
  );
}