'use client';

import { motion } from 'framer-motion';
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <nav className="relative flex justify-between items-center p-6 md:p-8">
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
        <a href="#features" className="text-gray-300 hover:text-white transition-colors">Beneficii</a>
        <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Tarife</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </motion.div>
      <div className="flex items-center space-x-4">
        {isLoaded && (
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
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: 'w-8 h-8',
                        userButtonTrigger: 'focus:shadow-none',
                      }
                    }}
                  />
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
        <MobileMenu />
      </div>
    </nav>
  );
} 