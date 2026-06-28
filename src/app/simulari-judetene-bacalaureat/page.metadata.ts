import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Simulări Județene Bacalaureat | DS Math Center – Matematică",
  description:
    "Simulări județene la matematică pentru Bacalaureat, organizate pe profiluri și ani, cu subiecte și bareme utile pentru pregătirea examenului.",
  keywords: [
    "simulari judetene bac",
    "simulare bac matematica",
    "subiecte simulare bacalaureat",
    "barem simulare bac matematica",
    "mate info tehnologic pedagogic",
    "pregatire bac matematica",
  ],
  openGraph: {
    title: "Simulări Județene Bacalaureat | DS Math Center – Matematică",
    description:
      "Simulări județene la matematică pentru Bacalaureat, organizate pe profiluri și ani, cu subiecte și bareme utile pentru pregătirea examenului.",
    url: "https://www.matebac.com/simulari-judetene-bacalaureat",
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
    canonical: "https://www.matebac.com/simulari-judetene-bacalaureat",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
