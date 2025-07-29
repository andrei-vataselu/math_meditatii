'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'accepted' && consent !== 'declined') {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
    // Aici poți inițializa servicii de tracking
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
    // Șterge cookie-urile non-esențiale dacă e necesar
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 bg-slate-110 backdrop-blur-sm border-t border-white/10 z-50 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 text-center md:text-left">
        Continuând, ești de acord cu{' '}
          <Link href="/politica-cookies" className="text-[#FEBFD2] hover:underline">
            Politica noastră de utilizare cookie-uri
          </Link>.
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#DB0073] transition-all duration-300 cursor-pointer"
          >
            Refuză
          </button>
          <button
            onClick={handleAccept}
            className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-4 py-2 rounded-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  );
}