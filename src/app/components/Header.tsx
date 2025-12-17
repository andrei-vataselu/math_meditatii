"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <nav
      className="relative flex justify-between items-center p-6 md:p-8"
      style={{ background: "none" }}
    >
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
          href="/course-info"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Despre meditații
        </Link>
        <HeaderSubiecte />
        <Link
          href="/pricing"
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

function HeaderSubiecte() {
  const [subOpen, setSubOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        subOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setSubOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSubOpen(false);
      if (e.key === "ArrowDown" && subOpen) {
        e.preventDefault();
        const first = containerRef.current?.querySelector("a");
        (first as HTMLElement | null)?.focus();
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [subOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-haspopup="menu"
        aria-expanded={subOpen}
        onClick={() => setSubOpen((v) => !v)}
        className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
      >
        Subiecte Oficiale
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
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -6 }}
        animate={
          subOpen
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.95, y: -6 }
        }
        transition={{ duration: 0.15 }}
        className={`absolute left-0 mt-2 w-48 bg-white/10 backdrop-blur-lg text-white rounded-2xl border border-white/20 shadow-lg z-40 ${subOpen ? "block" : "hidden"}`}
        role="menu"
      >
        <Link
          href="/subiecte-oficiale-bacalaureat"
          className="block px-4 py-2 text-base hover:bg-white/10 border-b border-white/10 transition-all duration-200 first:rounded-t-2xl last:border-b-0 last:rounded-b-2xl"
        >
          Bacalaureat
        </Link>
        <Link
          href="/subiecte-oficiale-evaluare-nationala"
          className="block px-4 py-2 text-base hover:bg-white/10 border-b border-white/10 transition-all duration-200 first:rounded-t-2xl last:border-b-0 last:rounded-b-2xl"
        >
          Evaluarea Națională
        </Link>
      </motion.div>
    </div>
  );
}
