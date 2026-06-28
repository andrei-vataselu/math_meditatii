"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const whatsappConsultationUrl = `${siteConfig.social.whatsapp}?text=${encodeURIComponent(
  "Salut! Vreau o ședință gratuită la DS Math Center.",
)}`;

export default function CTA() {
  const mapsUrl = "https://maps.app.goo.gl/4FnRJYZC1sXRP7hX9";
  const mapSectionTitle = "Ne putem vedea și fizic";
  const mapSectionDescription =
    "Dacă preferi întâlnirile față în față, te așteptăm la locația noastră din Pitești.";
  const pinLabel = "Meditații la Matematică";
  /**
   * Use the exact Plus Code from your Google Maps listing for precise pin:
   * VV5G+63 Pitești, Romania
   */
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22626.152148343797!2d24.8458254!3d44.8568179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2bd1f6a5114df%3A0x896e3112a313700b!2sMedita%C8%9Bii%20la%20Matematic%C4%83%20-%20Pite%C8%99ti!5e0!3m2!1sen!2sro!4v1777150559817!5m2!1sen!2sro";
  const locationLine =
    "Bulevardul I. C. Brătianu 24, 110003 Pitești, România";

  return (
    <section id="contact" className="relative py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Te pregătești de EN sau BAC? Hai să-l luăm împreună!
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Descoperă cum matematica poate fi înțeleasă ușor și aplicată cu
          încredere la examen.
        </p>
        <a
          href={whatsappConsultationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-10 py-4 rounded-full text-xl font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
        >
          Programează o ședință de consultanță gratuită
        </a>

        <div className="mt-12 md:mt-16 pt-2 mx-auto w-full max-w-4xl">
          <div className="mb-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {mapSectionTitle}
            </h3>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              {mapSectionDescription}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6">
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
                {pinLabel} — {locationLine}
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/20 min-h-[280px] sm:min-h-[360px] md:min-h-[420px]">
            <iframe
              title={`Locație ${pinLabel} pe Google Maps`}
              src={mapsEmbedUrl}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px]"
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
        </div>
      </motion.div>
    </section>
  );
}
