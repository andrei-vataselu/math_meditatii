import { readdirSync } from "fs";
import { join } from "path";
import Design from "../components/Design";
import Header from "../components/Header";

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
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 py-8 sm:py-16 text-center">
        <div className="w-full max-w-9xl mx-auto lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Subiecte Oficiale - Evaluarea Națională
          </h1>

          {Object.keys(yearData).length === 0 ? (
            <p className="text-gray-300 text-lg">Nu s-au găsit subiecte.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(yearData)
                .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                .map(([year, pdfs]) => (
                  <section
                    key={year}
                    className="bg-white/5 rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-lg"
                  >
                    <h2 className="text-xl font-semibold text-white mb-3">
                      {year}
                    </h2>

                    <div className="space-y-3 text-left">
                      <div className="bg-white/3 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-white">
                            Documente
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
                    </div>
                  </section>
                ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
