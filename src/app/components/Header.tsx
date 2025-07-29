'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <nav className="relative flex justify-between items-center p-6 md:p-8" style={{ background: 'none' }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white"
      >
        <Link href="/" className="hover:text-[#FEBFD2] transition-colors">
          DS Math Center
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
        <Link href="/course-info" className="text-gray-300 hover:text-white transition-colors">Despre curs</Link>
        <Link href="/despre-mine" className="text-gray-300 hover:text-white transition-colors">Despre mine</Link>
        <Link href="/recenzii" className="text-gray-300 hover:text-white transition-colors">Recenzii</Link>
        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Planuri</Link>
        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
      </motion.div>
      <div className="flex items-center space-x-4">
        <MobileMenu />
      </div>
    </nav>
  );
}