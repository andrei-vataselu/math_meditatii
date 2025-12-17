import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Subiecte Oficiale | DSMath Center – Meditații Bacalaureat Matematică",
  description:
    "Colecție de subiecte oficiale și rezolvări pentru Bacalaureat și Evaluare Națională. În curând disponibil pe DSMath Center.",
  openGraph: {
    title:
      "Subiecte Oficiale | DSMath Center – Meditații Bacalaureat Matematică",
    description:
      "Colecție de subiecte oficiale și rezolvări pentru Bacalaureat și Evaluare Națională. În curând disponibil pe DSMath Center.",
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
