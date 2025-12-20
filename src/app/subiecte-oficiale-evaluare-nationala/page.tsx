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

// Server-side function to read PDFs
function getPDFsFromFolder(): YearData {
  const basePath = join(
    process.cwd(),
    "public/Subiecte oficiale/Evaluarea nationala"
  );
  const yearData: YearData = {};

  try {
    const years = readdirSync(basePath);

    for (const year of years) {
      const yearNum = parseInt(year);
      if (isNaN(yearNum)) continue;

      const yearPath = join(basePath, year);
      const files = readdirSync(yearPath);
      const pdfs: YearPDF[] = files
        .filter((file) => file.endsWith(".pdf"))
        .map((file) => ({
          name: file,
          path: `/Subiecte oficiale/Evaluarea nationala/${year}/${file}`,
        }));

      if (pdfs.length > 0) {
        yearData[yearNum] = pdfs;
      }
    }
  } catch (error) {
    console.error("Error reading PDFs:", error);
  }

  return yearData;
}

export default function SubiecteOficialeEvaluareNationala() {
  const yearData = getPDFsFromFolder();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <SearchableContent yearData={yearData} />
    </div>
  );
}