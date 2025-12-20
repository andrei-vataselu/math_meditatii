"use client";

import { useState, useMemo } from "react";

interface YearPDF {
  name: string;
  path: string;
}

interface YearData {
  [year: number]: YearPDF[];
}

interface CategoryData {
  [category: string]: YearData;
}

interface SearchableContentProps {
  categories: CategoryData;
}

export default function SearchableContent({ categories }: SearchableContentProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Helper function to normalize text for fuzzy search
  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/\.pdf$/i, '') // Remove .pdf extension
      .replace(/[^a-z0-9]/g, ' ') // Replace special chars with spaces
      .replace(/\s+/g, ' ') // Collapse multiple spaces
      .trim();
  };

  // Helper function to check if text matches search terms
  const matchesSearch = (text: string, searchTerms: string[]): boolean => {
    const normalized = normalizeText(text);
    return searchTerms.every(term => normalized.includes(term));
  };

  // Filter categories based on search term
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;

    // Split search into individual terms and normalize
    const searchTerms = normalizeText(searchTerm).split(' ').filter(Boolean);
    const filtered: CategoryData = {};

    Object.entries(categories).forEach(([category, yearData]) => {
      const filteredYearData: YearData = {};

      Object.entries(yearData).forEach(([year, pdfs]) => {
        const filteredPdfs = pdfs.filter((pdf: YearPDF) => {
          // Combine all searchable text: category + year + filename
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

  return (
    <main className="relative px-4 sm:px-6 py-8 sm:py-16">
      <div className="w-full max-w-9xl mx-auto lg:px-8">
        {/* Fixed Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Subiecte Oficiale Bacalaureat
          </h1>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Caută după categorie, an sau nume fișier..."
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

        {/* Results Section */}
        <div className="min-h-[400px]">
          {Object.keys(filteredCategories).length === 0 ? (
            <p className="text-gray-300 text-lg text-center">
              {searchTerm
                ? "Nu s-au găsit rezultate pentru căutarea ta."
                : "Nu s-au găsit subiecte."}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {Object.entries(filteredCategories).map(([category, yearData]) => (
              <section
                key={category}
                className="bg-white/5 rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-lg"
              >
                <h2 className="text-xl font-semibold text-white mb-3">
                  {category}
                </h2>

                <div className="space-y-3 text-left">
                  {Object.entries(yearData)
                    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                    .map(([year, pdfs]) => (
                      <div
                        key={year}
                        className="bg-white/3 rounded-lg p-3 sm:p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-white">
                            {year}
                          </span>
                          <span className="text-xs text-gray-400">
                            {pdfs.length} PDF
                          </span>
                        </div>

                        <ul className="mt-2 space-y-2">
                          {pdfs.map((pdf: YearPDF, index: number) => (
                            <li key={index}>
                              <a
                                href={pdf.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FEBFD2] hover:underline text-sm break-words flex items-center gap-2"
                              >
                                <span>📄</span>
                                {pdf.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
