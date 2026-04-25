"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Design from "../components/Design";

const siteMapSections = [
  {
    title: "Informatii Site",
    links: [
      { href: "/", label: "Acasa" },
      { href: "/despre-mine", label: "Despre mine" },
      { href: "/despre-meditatii", label: "Despre meditatii" },
      { href: "/planuri", label: "Planuri" },
      { href: "/resurse-gratuite", label: "Culegeri BAC" },
      { href: "/recenzii", label: "Recenzii" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Subiecte Oficiale",
    links: [
      { href: "/subiecte-oficiale-bacalaureat", label: "Bacalaureat" },
      {
        href: "/subiecte-oficiale-evaluare-nationala",
        label: "Evaluarea Nationala",
      },
    ],
  },
  {
    title: "Informatii Legale",
    links: [
      { href: "/termeni-si-conditii", label: "Termeni si conditii" },
      { href: "/privacy", label: "Politica de confidentialitate" },
      { href: "/politica-cookies", label: "Politica de utilizare cookie-uri" },
      { href: "/sitemap.xml", label: "Sitemap XML" },
      { href: "/robots.txt", label: "Robots" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />

      <main className="relative px-4 sm:px-6 py-10 sm:py-16">
        <section className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
             Site Map
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Navighează rapid prin toate paginile importante ale site-ului.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {siteMapSections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-gray-200 hover:text-[#FEBFD2] transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
