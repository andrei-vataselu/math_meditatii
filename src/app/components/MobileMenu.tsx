'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/contexts/AuthContext';
import Link from 'next/link';
import UserButton from './UserButton';
import Design from './Design';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, isLoaded, error } = useUser();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = [
    { href: '/resurse-gratuite', label: 'Resurse gratuite' },
    { href: '/despre-mine', label: 'Despre mine' },
    { href: '/recenzii', label: 'Recenzii' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block mb-1"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block mb-1"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block"
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom right, #0f172a, #5f0032, #0f172a)'
            }}
            onClick={() => setIsOpen(false)}
          >
            <Design/>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0  p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Meniu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-xl text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {isLoaded && !error && (
                  <>
                    {isSignedIn ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="pt-4 border-t border-white/20"
                        >
                          <Link 
                            href="/dashboard"
                            className="block text-xl text-gray-300 hover:text-white transition-colors mb-4"
                            onClick={() => setIsOpen(false)}
                          >
                            Dashboard
                          </Link>
                          <div className="flex items-center justify-between">
                            <span className="text-xl text-gray-300">Contul tău</span>
                            <UserButton />
                          </div>
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="pt-4 border-t border-white/20"
                        >
                          <Link href="/sign-up">
                            <button 
                              className="w-full bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-3 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              Începe acum
                            </button>
                          </Link>
                        </motion.div>
                      </>
                    )}
                  </>
                )}

                {/* Show loading indicator when auth is loading */}
                {!isLoaded && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="pt-4 border-t border-white/20"
                  >
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-[#FEBFD2] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </motion.div>
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 