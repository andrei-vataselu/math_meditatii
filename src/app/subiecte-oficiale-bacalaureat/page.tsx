import { readdirSync } from "fs";
import { join } from "path";
import Design from "../components/Design";
import Header from "../components/Header";
import SearchableContent from "./SearchableContent";

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

// Server-side function to read PDFs
function getPDFsFromFolder(): CategoryData {
  const basePath = join(process.cwd(), "public/Subiecte oficiale/Bacalaureat");
  const allData: CategoryData = {};

  const categoriesList = [
    "Matematica Informatica",
    "Stiinte ale naturii",
    "Tehnologic",
    "Pedagogic",
  ];

  for (const category of categoriesList) {
    const categoryPath = join(basePath, category);
    const yearData: YearData = {};

    try {
      const years = readdirSync(categoryPath);

      for (const year of years) {
        const yearNum = parseInt(year);
        if (isNaN(yearNum)) continue;

        const yearPath = join(categoryPath, year);
        const files = readdirSync(yearPath);
        const pdfs: YearPDF[] = files
          .filter((file) => file.endsWith(".pdf"))
          .map((file) => ({
            name: file,
            path: `/Subiecte oficiale/Bacalaureat/${category}/${year}/${file}`,
          }));

        if (pdfs.length > 0) {
          yearData[yearNum] = pdfs;
        }
      }
    } catch (error) {
      console.error(`Error reading ${category}:`, error);
    }

    if (Object.keys(yearData).length > 0) {
      allData[category] = yearData;
    }
  }

  return allData;
}

export default function SubiecteOficialeBac() {
  const categories = getPDFsFromFolder();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <SearchableContent categories={categories} />
    </div>
  );
}
