import type { Metadata } from "next";

const metadata: Metadata = {
  title:
    "Subiecte Oficiale Evaluarea Națională | DSMath Center – Matematică",
  description:
    "Accesează subiecte oficiale la matematică pentru Evaluarea Națională, structurate pe ani, cu bareme și resurse utile pentru pregătirea examenului.",
  keywords: [
    "subiecte evaluare nationala matematica",
    "barem evaluare nationala",
    "subiecte oficiale en",
    "pregatire evaluare nationala",
    "examen clasa a 8 a matematica",
  ],
  openGraph: {
    title:
      "Subiecte Oficiale Evaluarea Națională | DSMath Center – Matematică",
    description:
      "Accesează subiecte oficiale la matematică pentru Evaluarea Națională, structurate pe ani, cu bareme și resurse utile pentru pregătirea examenului.",
    url: "https://www.matebac.com/subiecte-oficiale-evaluarea-nationala",
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
    canonical: "https://www.matebac.com/subiecte-oficiale-evaluarea-nationala",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
