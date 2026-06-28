"use client";

import CategorySearchableContent from "../components/CategorySearchableContent";

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
  return (
    <CategorySearchableContent
      categories={categories}
      title="Simulări Județene Bacalaureat"
      emptyMessage="Nu s-au găsit simulări."
    />
  );
}
