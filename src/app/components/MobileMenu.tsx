"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Design from "./Design";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSubiecte, setExpandedSubiecte] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setExpandedSubiecte(false);
  }, [isOpen]);

  const menuItems = [
    { href: "/", label: "Acasă" },
    { href: "/despre-mine", label: "Despre mine" },
    { href: "/course-info", label: "Despre meditații" },
    {
      label: "Subiecte Oficiale",
      sub: [
        { href: "/subiecte-oficiale-bacalaureat", label: "Bacalaureat" },
        {
          href: "/subiecte-oficiale-evaluare-nationala",
          label: "Evaluarea Națională",
        },
      ],
    },
    { href: "/pricing", label: "Planuri" },
    { href: "/resurse-gratuite", label: "Resurse gratuite" },
    { href: "/recenzii", label: "Recenzii" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block mb-1"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block mb-1"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block"
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-hidden"
            style={{
              background:
                "linear-gradient(to bottom right, #0f172a, #5f0032, #0f172a)",
            }}
            onClick={() => setIsOpen(false)}
          >
            <Design />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0  p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Meniu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={(item as any).href ?? item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {(item as any).sub ? (
                      <div>
                        <button
                          onClick={() => setExpandedSubiecte((v) => !v)}
                          className="w-full flex items-center justify-between text-xl text-gray-300 font-semibold"
                          aria-expanded={expandedSubiecte}
                          aria-controls="mobile-subiecte"
                        >
                          {item.label}
                          <svg
                            className={`w-5 h-5 transform transition-transform ${expandedSubiecte ? "rotate-180" : ""}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {expandedSubiecte && (
                          <div
                            id="mobile-subiecte"
                            className="pl-4 mt-2 space-y-2"
                          >
                            {(item as any).sub.map((s: any) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="block text-lg text-gray-300 hover:text-white transition-colors"
                                onClick={() => {
                                  setIsOpen(false);
                                  setExpandedSubiecte(false);
                                }}
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={(item as any).href}
                        className="block text-xl text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
