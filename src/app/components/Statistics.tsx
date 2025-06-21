'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { number: "50K+", label: "Elevi activi", icon: "👥" },
  { number: "95%", label: "Rată de succes", icon: "📈" },
  { number: "150+", label: "Localități", icon: "🌍" },
  { number: "24/7", label: "Asistență", icon: "🛟" }
];

export default function Statistics() {
  return (
    <section className="relative py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Rezultate excelente</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Zeci de elevi au obținut rezultate remarcabile și mai multă încredere în ei înșiși.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <AnimatedCounter value={stat.number} duration={2.5} delay={index * 0.2} />
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 