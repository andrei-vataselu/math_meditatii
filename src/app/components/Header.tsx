'use client';

import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <nav className="relative flex justify-between items-center p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white"
      >
        DSMath Center
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
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:block bg-white text-[#DB0073] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Începe acum
        </motion.button>
        <MobileMenu />
      </div>
    </nav>
  );
} 