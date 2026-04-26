import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Despre Curs | DSMath Center - Meditatii Bacalaureat Matematica",
  description:
    "Afla detalii despre cursul intensiv de matematica pentru Bacalaureat oferit de Denisa Nita, cu pregatire online si optiune de intalniri in Pitesti: structura, beneficii, program si inscriere.",
  keywords: [
    "despre meditatii matematica",
    "meditatii pitesti",
    "curs matematica pitesti",
    "curs bac matematica",
    "pregatire evaluare nationala",
    "sedinte online matematica",
  ],
  openGraph: {
    title: "Despre Curs | DSMath Center - Meditatii Bacalaureat Matematica",
    description:
      "Afla detalii despre cursul intensiv de matematica pentru Bacalaureat oferit de Denisa Nita, cu pregatire online si optiune de intalniri in Pitesti: structura, beneficii, program si inscriere.",
    url: "https://www.matebac.com/despre-meditatii",
    siteName: "DSMath Center",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "DSMath Center Logo",
      },
    ],
    locale: "ro_RO",
    type: "article",
  },
  alternates: {
    canonical: "https://www.matebac.com/despre-meditatii",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
