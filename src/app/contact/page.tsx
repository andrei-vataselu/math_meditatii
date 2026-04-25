"use client"
import Design from '../components/Design';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

export default function Contact() {
  const mapsUrl = "https://maps.app.goo.gl/4FnRJYZC1sXRP7hX9";
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22626.152148343797!2d24.8458254!3d44.8568179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2bd1f6a5114df%3A0x896e3112a313700b!2sMedita%C8%9Bii%20la%20Matematic%C4%83%20-%20Pite%C8%99ti!5e0!3m2!1sen!2sro!4v1777150559817!5m2!1sen!2sro";

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

        <div className="w-full max-w-5xl mx-auto mt-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-3 text-left mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#FEBFD2]/20 text-[#FEBFD2] flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
            </span>
            <div>
              <p className="text-white font-semibold leading-tight">Locație</p>
              <p className="text-gray-300 text-sm sm:text-base leading-snug">
                Meditații la Matematică — Bulevardul I. C. Brătianu 24, 110003 Pitești, România
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/20 min-h-[360px] sm:min-h-[480px]">
            <iframe
              title="Locație Meditații la Matematică pe Google Maps"
              src={mapsEmbedUrl}
              width="100%"
              height="520"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full min-h-[360px] sm:min-h-[480px]"
            />
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[#FEBFD2] hover:text-[#FAD4E4] text-sm font-medium transition-colors"
          >
            Deschide în Google Maps
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
} 