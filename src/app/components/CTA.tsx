'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Gata să faci un pas înainte?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Începe acum și descoperă cum matematica poate deveni simplă și logică.
        </p>
        <button className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-10 py-4 rounded-full text-xl font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg">
          Cumpără abonamentul acum
        </button>
      </motion.div>
    </section>
  );
} 