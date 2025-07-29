'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Design from '../components/Design';

function CookiesContent() {
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
              className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
            Politica de Cookie-uri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 mb-6"
            >
              Ultima actualizare: 29.07.2025
            </motion.p>
          </div>

          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.6}}
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">Politica de Cookie-uri</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Site-ul <strong>www.matebac.com</strong> nu folosește cookie-uri de urmărire sau analiză (ex: Google Analytics, Facebook Pixel, YouTube embed etc.).
                Singurele date colectate sunt cele transmise automat de browser către server (ex: IP, user-agent), necesare funcționării tehnice a site-ului.
              </p>
              <p className="mb-6 text-gray-300 ml-5">
                Pentru contact, utilizăm link direct către WhatsApp. Orice interacțiune cu WhatsApp se supune politicii de confidențialitate WhatsApp/Meta.
              </p>
              <p className="mb-6 text-gray-300 ml-5">
                Nu folosim cookie-uri de marketing, publicitate sau profilare.
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 mt-8">Date de identificare</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300 ml-5">
                <li><strong>Nume:</strong> Denisa Nita</li>
                <li><strong>Tip firmă:</strong> SRL</li>
                <li><strong>CUI:</strong> 51249651</li>
                <li><strong>Email:</strong> denisanita08@gmail.com</li>
                <li><strong>Telefon/WhatsApp:</strong> 0731 979 588</li>
              </ul>
              <div className="text-sm text-gray-400 mt-8">
                <p>
                  Prin continuarea utilizării site-ului www.matebac.com, sunteți de acord cu această Politică de Cookie-uri.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function CookiesPage() {
  return (
    <CookiesContent />
  );
}