import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Resurse Gratuite | DSMath Center - Subiecte Bac Matematica",
  description:
    "Descarca sau vizualizeaza gratuit subiecte de Bacalaureat la matematica, materiale PDF si resurse utile pentru pregatirea examenului in Pitesti si la nivel national.",
  keywords: [
    "resurse gratuite matematica",
    "subiecte bac pdf",
    "materiale matematica bacalaureat",
    "culegeri bac",
  ],
  openGraph: {
    title: "Resurse Gratuite | DSMath Center - Subiecte Bac Matematica",
    description:
      "Descarca sau vizualizeaza gratuit subiecte de Bacalaureat la matematica, materiale PDF si resurse utile pentru pregatirea examenului in Pitesti si la nivel national.",
    url: "https://matebac.com/resurse-gratuite",
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
    canonical: "https://matebac.com/resurse-gratuite",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;


