import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Subiecte Oficiale Bacalaureat | DSMath Center – Matematică",
  description:
    "Accesează subiecte oficiale la matematică pentru Bacalaureat, organizate pe profiluri și ani, împreună cu bareme și materiale utile de recapitulare.",
  keywords: [
    "subiecte bac matematica",
    "barem bac matematica",
    "subiecte oficiale bacalaureat",
    "mate info tehnologic pedagogic",
    "pregatire bac matematica",
  ],
  openGraph: {
    title: "Subiecte Oficiale Bacalaureat | DSMath Center – Matematică",
    description:
      "Accesează subiecte oficiale la matematică pentru Bacalaureat, organizate pe profiluri și ani, împreună cu bareme și materiale utile de recapitulare.",
    url: "https://matebac.com/subiecte-oficiale-bacalaureat",
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
    canonical: "https://matebac.com/subiecte-oficiale-bacalaureat",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
