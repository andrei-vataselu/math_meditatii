"use client"
import Design from '../components/Design';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-2 sm:px-6 py-8 sm:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">Contactează-ne direct pe una dintre platformele de mai jos:</p>
        <div className="w-full max-w-xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-10 border border-white/20 shadow-2xl flex flex-col gap-4 sm:gap-6 items-center">
          <a href="mailto:denisanita08@gmail.com" className="flex items-center gap-3 sm:gap-4 w-full p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-colors text-white text-base sm:text-lg font-medium break-words">
            <span className="bg-[#FEBFD2] bg-opacity-30 p-2 sm:p-3 rounded-full"><FaEnvelope size={22} /></span>
            <span className="break-words text-left">denisanita08@gmail.com</span>
          </a>
          <a href="tel:+40731979588" className="flex items-center gap-3 sm:gap-4 w-full p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-colors text-white text-base sm:text-lg font-medium break-words">
            <span className="bg-[#FAD4E4] bg-opacity-30 p-2 sm:p-3 rounded-full"><FaPhoneAlt size={22} /></span>
            <span className="break-words text-left">0731 979 588</span>
          </a>
          <a href="https://wa.me/40731979588" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 w-full p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-colors text-white text-base sm:text-lg font-medium break-words">
            <span className="bg-[#25D366] bg-opacity-30 p-2 sm:p-3 rounded-full"><FaWhatsapp size={22} /></span>
            <span className="break-words text-left">WhatsApp (mesaj direct)</span>
          </a>
          <a href="https://www.instagram.com/dsmathcenter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 w-full p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-colors text-white text-base sm:text-lg font-medium break-words">
            <span className="bg-[#C13584] bg-opacity-30 p-2 sm:p-3 rounded-full"><FaInstagram size={22} /></span>
            <span className="break-words text-left">Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@dsmathcenter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 w-full p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-colors text-white text-base sm:text-lg font-medium break-words">
            <span className="bg-[#000000] bg-opacity-30 p-2 sm:p-3 rounded-full"><AiFillTikTok size={24} /></span>
            <span className="break-words text-left">TikTok</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
} 