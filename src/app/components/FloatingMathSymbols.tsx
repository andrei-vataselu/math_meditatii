'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const symbols = [
  '∑', '∫', 'π', '∞', '√', 'θ', 'Δ', '∇', '±', '×', '÷', '≈', '≠', '≤', '≥', '∈', '∉', '⊂', '⊃', '∪', '∩'
];

const MIN_DISTANCE = 15; 
 
function isColliding(x: number, y: number, existing: Array<{ startX: number, startY: number }>): boolean {
  for (const symbol of existing) {
    const dx = x - symbol.startX;
    const dy = y - symbol.startY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < MIN_DISTANCE) {
      return true;
    }
  }
  return false;
}
 
function generateNewSymbol(
  existingSymbols: Array<{ startX: number, startY: number }>
): { id: string; symbol: string; startX: number; startY: number; moveX: number; moveY: number; duration: number; } | null {
  let attempts = 0;
  while (attempts < 20) {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    if (!isColliding(startX, startY, existingSymbols)) {
      return {
        id: `symbol-${Date.now()}-${Math.random()}`,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        startX,
        startY,
        moveX: (Math.random() - 0.5) * 40,
        moveY: (Math.random() - 0.5) * 40,
        duration: 15 + Math.random() * 10,
      };
    }
    attempts++;
  }
  return null; // Failed to find a non-colliding position
}

export default function FloatingMathSymbols() {
  const [mounted, setMounted] = useState(false);
  const [activeSymbols, setActiveSymbols] = useState<Array<{
    id: string;
    symbol: string;
    startX: number;
    startY: number;
    moveX: number;
    moveY: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    
    // Generate initial symbols without collision
    const initialSymbols: typeof activeSymbols = [];
    for (let i = 0; i < 8; i++) {
      const newSymbol = generateNewSymbol(initialSymbols);
      if (newSymbol) {
        initialSymbols.push(newSymbol);
      }
    }
    setActiveSymbols(initialSymbols);

    // Continuously add new symbols
    const interval = setInterval(() => {
      setActiveSymbols(prev => {
        const newSymbol = generateNewSymbol(prev);
        if (newSymbol) {
          // Keep only the last 12 symbols to prevent too many
          return [...prev, newSymbol].slice(-12);
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeSymbols.map((item) => (
        <motion.div
          key={item.id}
          initial={{ 
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            x: item.moveX,
            y: item.moveY,
            opacity: [0, 0.5, 0.5, 0],
            scale: [0.8, 1.3, 1.3, 0.8]
          }}
          transition={{
            duration: item.duration,
            ease: "easeInOut"
          }}
          onAnimationComplete={() => {
            // Remove symbol when animation completes
            setActiveSymbols(prev => prev.filter(s => s.id !== item.id));
          }}
          className="absolute text-5xl md:text-7xl text-white/50 font-bold"
          style={{
            left: `${item.startX}%`,
            top: `${item.startY}%`
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
} 