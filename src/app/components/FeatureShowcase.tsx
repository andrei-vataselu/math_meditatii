'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
}

export default function FeatureShowcase({ features }: FeatureShowcaseProps) {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className={`w-24 h-24 bg-gradient-to-r ${features[currentFeature].color} rounded-3xl flex items-center justify-center text-5xl mx-auto`}>
                {features[currentFeature].icon}
              </div>
              <h3 className="text-3xl font-bold text-white">{features[currentFeature].title}</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">{features[currentFeature].description}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 