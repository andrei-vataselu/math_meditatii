"use client";

import YearSearchableContent from "../components/YearSearchableContent";

interface YearPDF {
  name: string;
  path: string;
}

interface YearData {
  [year: number]: YearPDF[];
}

interface SearchableContentProps {
  yearData: YearData;
}

export default function SearchableContent({ yearData }: SearchableContentProps) {
  return (
    <YearSearchableContent
      yearData={yearData}
      title="Simulări Județene Evaluarea Națională"
      emptyMessage="Nu s-au găsit simulări."
    />
  );
}
