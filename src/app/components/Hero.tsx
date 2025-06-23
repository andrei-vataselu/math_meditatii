'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Pregătire la Matematică
          <span className="block bg-gradient-to-r from-[#DB0073] to-[#FEBFD2] bg-clip-text text-transparent">
            alături de Denisa
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Meditații pentru clasele V–XII și pregătire pentru examenul de Bacalaureat. Explicații clare și metode adaptate fiecărui elev.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {isLoaded && (
            <>
              {isSignedIn ? (
                <Link href="/dashboard">
                  <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                    Accesează Dashboard
                  </button>
                </Link>
              ) : (
                <Link href="/sign-up">
                  <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                    Programează o ședință
                  </button>
                </Link>
              )}
            </>
          )}
          <Link href="/resurse-gratuite">
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#DB0073] transition-all duration-300 cursor-pointer">
              Vezi resurse gratuite
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
} 