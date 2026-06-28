"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <nav className="relative flex justify-between items-center p-6 md:p-8 bg-transparent">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-white"
      >
        <Link href="/" className="hover:text-[#FEBFD2] transition-colors">
          DS Math Center
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:flex space-x-8"
      >
        <Link
          href="/"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Acasă
        </Link>
        <Link
          href="/despre-mine"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Despre mine
        </Link>
        <Link
          href="/despre-meditatii"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Despre meditații
        </Link>
        <HeaderSubiecte />
        <Link
          href="/planuri"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Planuri
        </Link>
        <Link
          href="/resurse-gratuite"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Culegeri BAC
        </Link>
        <Link
          href="/recenzii"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Recenzii
        </Link>
        <Link
          href="/contact"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </motion.div>
      <div className="flex items-center space-x-4">
        <MobileMenu />
      </div>
    </nav>
  );
}

const subiecteMenu = [
  {
    label: "Bacalaureat",
    items: [
      { label: "Subiecte oficiale BAC", href: "/subiecte-oficiale-bacalaureat" },
      { label: "Simulări județene BAC", href: "/simulari-judetene-bacalaureat" },
    ],
  },
  {
    label: "Evaluarea Națională",
    items: [
      {
        label: "Subiecte oficiale EN",
        href: "/subiecte-oficiale-evaluarea-nationala",
      },
      { label: "Simulări județene EN", href: "/simulari-judetene-evaluarea-nationala" },
    ],
  },
] as const;

function HeaderSubiecte() {
  const [subOpen, setSubOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSubOpen(false);
        setHoveredSection(null);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function closeMenu() {
    setSubOpen(false);
    setHoveredSection(null);
  }

  return (
    <div
      className="relative"
      ref={containerRef}
      onMouseEnter={() => setSubOpen(true)}
      onMouseLeave={closeMenu}
    >
      <span
        aria-haspopup="menu"
        aria-expanded={subOpen}
        className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 cursor-default"
      >
        Subiecte BAC / EN
        <svg
          className={`w-3 h-3 transition-transform ${subOpen ? "rotate-180" : "rotate-0"}`}
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
      </span>

      <div
        className={`absolute left-0 top-full pt-2 w-52 z-40 ${subOpen ? "block" : "hidden"}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -6 }}
          animate={
            subOpen
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.95, y: -6 }
          }
          transition={{ duration: 0.15 }}
          className="bg-white/10 backdrop-blur-lg text-white rounded-2xl border border-white/20 shadow-lg"
          role="menu"
        >
        {subiecteMenu.map((section, index) => (
          <div
            key={section.label}
            onMouseEnter={() => setHoveredSection(section.label)}
          >
            <div
              className={`flex items-center justify-between px-4 py-2.5 text-base transition-all duration-200 cursor-default ${
                index === 0 ? "rounded-t-2xl" : ""
              } ${index === subiecteMenu.length - 1 ? "rounded-b-2xl" : "border-b border-white/10"} ${
                hoveredSection === section.label ? "bg-white/10" : "hover:bg-white/10"
              }`}
            >
              <span>{section.label}</span>
              <svg
                className="w-3 h-3 shrink-0 ml-2 opacity-70"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.06-1.06l4.24 4.24a.75.75 0 010 1.06l-4.24 4.24a.75.75 0 01-1.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}

        <div className="absolute left-full top-0 pl-1 w-52 z-50">
          <AnimatePresence mode="wait">
            {hoveredSection && (
              <motion.div
                key={hoveredSection}
                initial={{ opacity: 0, scale: 0.95, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -6 }}
                transition={{ duration: 0.15 }}
                className="bg-white/10 backdrop-blur-lg text-white rounded-2xl border border-white/20 shadow-lg overflow-hidden"
                role="menu"
              >
                {subiecteMenu
                  .find((section) => section.label === hoveredSection)
                  ?.items.map((item, itemIndex, items) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-base hover:bg-white/10 transition-all duration-200 ${
                        itemIndex < items.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
