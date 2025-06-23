'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const showcaseImages = [
  '/recenzii/img.png',
  '/recenzii/img2.png',
  '/recenzii/img3.png',
  '/recenzii/img4.png',
  '/recenzii/im5.png',
];

export default function FeatureShowcase() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % showcaseImages.length);
    } else if (diff < -50) {
      setCurrent((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
    }
  };

  return (
    <section className="relative py-12 sm:py-20">
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-white/20 relative">
        <div
          className="relative w-full aspect-[16/7] select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={showcaseImages[current]}
                alt={`Feature ${current + 1}`}
                fill
                className="object-contain w-full h-full rounded-3xl bg-black"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
              {/* Overlay gradient for future text */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                {/* <span className="text-white font-semibold text-lg">Aici poți pune text/recenzie</span> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Indicators */}
        <div className="flex justify-center mt-4 gap-3 pb-2">
          {showcaseImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full border-2 border-[#FEBFD2] transition-all duration-300 ${idx === current ? 'bg-[#FEBFD2] scale-110' : 'bg-white/30'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-8 py-3 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 shadow-lg"
          onClick={() => router.push('/recenzii')}
        >
          Vezi mai multe recenzii
        </button>
      </div>
    </section>
  );
} 