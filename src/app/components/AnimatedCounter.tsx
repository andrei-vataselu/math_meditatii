'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  delay?: number;
}

export default function AnimatedCounter({ value, duration = 2, delay = 0 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const numericMatch = value.match(/^(\d+)(.*)$/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const numericValue = parseInt(numericMatch[1]);
    const suffix = numericMatch[2];

    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(numericValue * easeOutQuart);
      
      setDisplayValue(currentValue + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [value, duration, delay, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className="text-3xl md:text-4xl font-bold text-white mb-2"
    >
      {displayValue}
    </motion.div>
  );
} 