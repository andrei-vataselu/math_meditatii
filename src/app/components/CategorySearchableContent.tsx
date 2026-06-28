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

interface CategoryData {
  [category: string]: YearData;
}

interface SearchableContentProps {
  categories: CategoryData;
  title: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
}

export default function SearchableContent({
  categories,
  title,
  searchPlaceholder = "Caută după categorie, an sau nume fișier...",
  emptyMessage = "Nu s-au găsit subiecte.",
}: SearchableContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openByGroup, setOpenByGroup] = useState<Record<string, string | null>>({});

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;

    const searchTerms = normalizeSearchText(searchTerm).split(" ").filter(Boolean);
    const filtered: CategoryData = {};

    Object.entries(categories).forEach(([category, yearData]) => {
      const filteredYearData: YearData = {};

      Object.entries(yearData).forEach(([year, pdfs]) => {
        const filteredPdfs = pdfs.filter((pdf: YearPDF) => {
          const fullText = `${category} ${year} ${pdf.name}`;
          return matchesSearch(fullText, searchTerms);
        });

        if (filteredPdfs.length > 0) {
          filteredYearData[Number(year)] = filteredPdfs;
        }
      });

      if (Object.keys(filteredYearData).length > 0) {
        filtered[category] = filteredYearData;
      }
    });

    return filtered;
  }, [categories, searchTerm]);

  useEffect(() => {
    const groups = Object.entries(filteredCategories).map(([category, yearData]) => ({
      id: category,
      years: Object.keys(yearData).map(Number),
    }));

    setOpenByGroup(getDefaultOpenByGroup(groups));
  }, [filteredCategories, searchTerm]);

  const toggleYear = (groupId: string, key: string) => {
    setOpenByGroup((current) => toggleOpenInGroup(current, groupId, key));
  };

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
          {Object.keys(filteredCategories).length === 0 ? (
            <p className="text-gray-300 text-lg text-center">
              {searchTerm
                ? "Nu s-au găsit rezultate pentru căutarea ta."
                : emptyMessage}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 items-start">
              {Object.entries(filteredCategories).map(([category, yearData]) => (
                <section
                  key={category}
                  className="h-fit bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg"
                >
                  <h2 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10">
                    {category}
                  </h2>

                  <div className="space-y-2">
                    {Object.entries(yearData)
                      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                      .map(([year, pdfs]) => {
                        const accordionKey = `${category}-${year}`;

                        return (
                          <YearAccordion
                            key={accordionKey}
                            year={year}
                            pdfs={pdfs}
                            isOpen={openByGroup[category] === accordionKey}
                            onToggle={() => toggleYear(category, accordionKey)}
                          />
                        );
                      })}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
