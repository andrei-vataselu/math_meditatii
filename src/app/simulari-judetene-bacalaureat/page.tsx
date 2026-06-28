import { existsSync, readdirSync } from "fs";
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

const categoriesList = [
  "Matematica Informatica",
  "Stiinte ale naturii",
  "Tehnologic",
  "Pedagogic",
] as const;

const isSimularePdf = (filename: string) => /simul/i.test(filename);

function readPdfsFromBase(
  basePath: string,
  urlPrefix: string,
  filter?: (filename: string) => boolean,
): CategoryData {
  const allData: CategoryData = {};

  if (!existsSync(basePath)) return allData;

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
          .filter(
            (file) =>
              file.endsWith(".pdf") && (!filter || filter(file)),
          )
          .map((file) => ({
            name: file,
            path: `${urlPrefix}/${category}/${year}/${file}`,
          }));

        if (pdfs.length > 0) {
          yearData[yearNum] = pdfs;
        }
      }
    } catch (error) {
      console.error(`Error reading ${category} from ${basePath}:`, error);
    }

    if (Object.keys(yearData).length > 0) {
      allData[category] = yearData;
    }
  }

  return allData;
}

function mergeCategoryData(...sources: CategoryData[]): CategoryData {
  const merged: CategoryData = {};

  for (const source of sources) {
    for (const [category, yearData] of Object.entries(source)) {
      if (!merged[category]) merged[category] = {};

      for (const [year, pdfs] of Object.entries(yearData)) {
        const yearNum = Number(year);
        if (!merged[category][yearNum]) merged[category][yearNum] = [];

        const existingPaths = new Set(
          merged[category][yearNum].map((pdf) => pdf.path),
        );

        for (const pdf of pdfs) {
          if (!existingPaths.has(pdf.path)) {
            merged[category][yearNum].push(pdf);
            existingPaths.add(pdf.path);
          }
        }
      }
    }
  }

  return merged;
}

function getSimulariPDFsFromFolder(): CategoryData {
  const dedicated = readPdfsFromBase(
    join(process.cwd(), "public/Simulari judetene/Bacalaureat"),
    "/Simulari judetene/Bacalaureat",
  );

  const fromOfficialSubjects = readPdfsFromBase(
    join(process.cwd(), "public/Subiecte oficiale/Bacalaureat"),
    "/Subiecte oficiale/Bacalaureat",
    isSimularePdf,
  );

  return mergeCategoryData(dedicated, fromOfficialSubjects);
}

export default function SimulariJudeteneBacalaureat() {
  const categories = getSimulariPDFsFromFolder();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <SearchableContent categories={categories} />
    </div>
  );
}
