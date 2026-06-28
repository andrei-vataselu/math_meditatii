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

const isSimularePdf = (filename: string) => /simul/i.test(filename);

function readPdfsFromBase(
  basePath: string,
  urlPrefix: string,
  filter?: (filename: string) => boolean,
): YearData {
  const yearData: YearData = {};

  if (!existsSync(basePath)) return yearData;

  try {
    const years = readdirSync(basePath);

    for (const year of years) {
      const yearNum = parseInt(year);
      if (isNaN(yearNum)) continue;

      const yearPath = join(basePath, year);
      const files = readdirSync(yearPath);
      const pdfs: YearPDF[] = files
        .filter(
          (file) => file.endsWith(".pdf") && (!filter || filter(file)),
        )
        .map((file) => ({
          name: file,
          path: `${urlPrefix}/${year}/${file}`,
        }));

      if (pdfs.length > 0) {
        yearData[yearNum] = pdfs;
      }
    }
  } catch (error) {
    console.error(`Error reading PDFs from ${basePath}:`, error);
  }

  return yearData;
}

function mergeYearData(...sources: YearData[]): YearData {
  const merged: YearData = {};

  for (const source of sources) {
    for (const [year, pdfs] of Object.entries(source)) {
      const yearNum = Number(year);
      if (!merged[yearNum]) merged[yearNum] = [];

      const existingPaths = new Set(merged[yearNum].map((pdf) => pdf.path));

      for (const pdf of pdfs) {
        if (!existingPaths.has(pdf.path)) {
          merged[yearNum].push(pdf);
          existingPaths.add(pdf.path);
        }
      }
    }
  }

  return merged;
}

function getSimulariPDFsFromFolder(): YearData {
  const dedicated = readPdfsFromBase(
    join(process.cwd(), "public/Simulari judetene/Evaluarea nationala"),
    "/Simulari judetene/Evaluarea nationala",
  );

  const fromOfficialSubjects = readPdfsFromBase(
    join(process.cwd(), "public/Subiecte oficiale/Evaluarea nationala"),
    "/Subiecte oficiale/Evaluarea nationala",
    isSimularePdf,
  );

  return mergeYearData(dedicated, fromOfficialSubjects);
}

export default function SimulariJudeteneEvaluareaNationala() {
  const yearData = getSimulariPDFsFromFolder();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <SearchableContent yearData={yearData} />
    </div>
  );
}
