import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Simulări Județene Evaluarea Națională | DS Math Center – Matematică",
  description:
    "Simulări județene la matematică pentru Evaluarea Națională, structurate pe ani, cu subiecte și bareme utile pentru pregătirea examenului.",
  keywords: [
    "simulari judetene evaluare nationala",
    "simulare en matematica",
    "subiecte simulare evaluare nationala",
    "barem simulare en matematica",
    "pregatire evaluare nationala",
    "examen clasa a 8 a matematica",
  ],
  openGraph: {
    title: "Simulări Județene Evaluarea Națională | DS Math Center – Matematică",
    description:
      "Simulări județene la matematică pentru Evaluarea Națională, structurate pe ani, cu subiecte și bareme utile pentru pregătirea examenului.",
    url: "https://www.matebac.com/simulari-judetene-evaluarea-nationala",
    siteName: "DS Math Center",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "DS Math Center Logo",
      },
    ],
    locale: "ro_RO",
    type: "article",
  },
  alternates: {
    canonical: "https://www.matebac.com/simulari-judetene-evaluarea-nationala",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
