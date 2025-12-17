"use client";
import Design from "../components/Design";
import Header from "../components/Header";

export default function SubiecteOficialeEvaluareNationala() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      {/* Page content follows site design: header, background and centered container */}
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 py-8 sm:py-16 text-center">
        <div className="w-full max-w-9xl mx-auto lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Subiecte Oficiale - Evaluarea Națională
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/** Year Card */}
            {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
              <section
                key={year}
                className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {year}
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  Subiecte oficiale Evaluarea Națională (mock data).
                </p>

                <div className="space-y-3 text-left">
                  {/** Mock PDF links */}
                  <div className="bg-white/3 rounded-lg p-3 sm:p-4">
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="text-[#FEBFD2] hover:underline flex items-center gap-2"
                          href="#"
                        >
                          <span className="text-lg">📄</span>
                          Subiecte EN {year} - Matematică (PDF)
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-[#FEBFD2] hover:underline flex items-center gap-2"
                          href="#"
                        >
                          <span className="text-lg">📄</span>
                          Rezolvări EN {year} - Matematică (PDF)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
