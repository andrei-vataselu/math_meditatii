"use client";

import { useEffect, useMemo, useState } from "react";
import YearAccordion, {
  getDefaultOpenByGroup,
  matchesSearch,
  normalizeSearchText,
  toggleOpenInGroup,
  type YearPDF,
} from "../components/YearAccordion";

interface YearData {
  [year: number]: YearPDF[];
}

interface SearchableContentProps {
  yearData: YearData;
  title: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
}

export default function SearchableContent({
  yearData,
  title,
  searchPlaceholder = "Caută după an sau nume fișier...",
  emptyMessage = "Nu s-au găsit subiecte.",
}: SearchableContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openByGroup, setOpenByGroup] = useState<Record<string, string | null>>({});

  const filteredYearData = useMemo(() => {
    if (!searchTerm.trim()) return yearData;

    const searchTerms = normalizeSearchText(searchTerm).split(" ").filter(Boolean);
    const filtered: YearData = {};

    Object.entries(yearData).forEach(([year, pdfs]) => {
      const filteredPdfs = pdfs.filter((pdf: YearPDF) => {
        const fullText = `${year} ${pdf.name}`;
        return matchesSearch(fullText, searchTerms);
      });

      if (filteredPdfs.length > 0) {
        filtered[Number(year)] = filteredPdfs;
      }
    });

    return filtered;
  }, [yearData, searchTerm]);

  useEffect(() => {
    const groups = [
      {
        id: "en",
        years: Object.keys(filteredYearData).map(Number),
      },
    ];

    setOpenByGroup(getDefaultOpenByGroup(groups));
  }, [filteredYearData, searchTerm]);

  const toggleYear = (groupId: string, key: string) => {
    setOpenByGroup((current) => toggleOpenInGroup(current, groupId, key));
  };

  const sortedYears = Object.entries(filteredYearData).sort(
    ([yearA], [yearB]) => Number(yearB) - Number(yearA),
  );

  return (
    <main className="relative px-4 sm:px-6 py-8 sm:py-16">
      <div className="w-full max-w-9xl mx-auto lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FEBFD2] focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="min-h-[400px]">
          {sortedYears.length === 0 ? (
            <p className="text-gray-300 text-lg text-center">
              {searchTerm
                ? "Nu s-au găsit rezultate pentru căutarea ta."
                : emptyMessage}
            </p>
          ) : (
            <section className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg">
              <div className="space-y-2">
                {sortedYears.map(([year, pdfs]) => {
                  const accordionKey = `en-${year}`;

                  return (
                    <YearAccordion
                      key={accordionKey}
                      year={year}
                      pdfs={pdfs}
                      isOpen={openByGroup.en === accordionKey}
                      onToggle={() => toggleYear("en", accordionKey)}
                    />
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
