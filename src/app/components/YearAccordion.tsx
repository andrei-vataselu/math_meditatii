"use client";

import { AnimatePresence, motion } from "framer-motion";

export interface YearPDF {
  name: string;
  path: string;
}

interface YearAccordionProps {
  year: string | number;
  pdfs: YearPDF[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function YearAccordion({
  year,
  pdfs,
  isOpen,
  onToggle,
}: YearAccordionProps) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 overflow-hidden transition-colors hover:border-white/25">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors ${
          isOpen ? "bg-white/10" : "hover:bg-white/10"
        }`}
      >
        <span className="font-medium text-white">{year}</span>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-gray-400">
            {pdfs.length} PDF{pdfs.length === 1 ? "" : "-uri"}
          </span>
          <svg
            className={`w-4 h-4 text-[#FEBFD2] transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
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
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="px-4 pb-4 pt-2 space-y-2 border-t border-white/10 max-h-80 overflow-y-auto">
              {pdfs.map((pdf, index) => (
                <li key={`${pdf.path}-${index}`}>
                  <a
                    href={pdf.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FEBFD2] hover:text-white hover:underline text-sm break-words flex items-start gap-2 transition-colors"
                  >
                    <span className="shrink-0 mt-0.5">📄</span>
                    {pdf.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function getDefaultOpenByGroup(
  groups: { id: string; years: number[] }[],
): Record<string, string | null> {
  const openByGroup: Record<string, string | null> = {};

  for (const group of groups) {
    const sortedYears = [...group.years].sort((a, b) => b - a);

    if (sortedYears.length > 0) {
      openByGroup[group.id] = `${group.id}-${sortedYears[0]}`;
    }
  }

  return openByGroup;
}

export function toggleOpenInGroup(
  current: Record<string, string | null>,
  groupId: string,
  key: string,
): Record<string, string | null> {
  return {
    ...current,
    [groupId]: current[groupId] === key ? null : key,
  };
}

export function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .replace(/\.pdf$/i, "")
    .replace(/[^a-z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchesSearch(text: string, searchTerms: string[]): boolean {
  const normalized = normalizeSearchText(text);
  return searchTerms.every((term) => normalized.includes(term));
}
