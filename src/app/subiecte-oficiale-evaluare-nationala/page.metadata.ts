import type { Metadata } from "next";

const metadata: Metadata = {
  title:
    "Subiecte Oficiale - Evaluarea Națională | DSMath Center – Meditații Matematică",
  description:
    "Colecție de subiecte oficiale pentru Evaluarea Națională. În curând disponibil pe DSMath Center.",
  openGraph: {
    title:
      "Subiecte Oficiale - Evaluarea Națională | DSMath Center – Meditații Matematică",
    description:
      "Colecție de subiecte oficiale pentru Evaluarea Națională. În curând disponibil pe DSMath Center.",
    url: "https://matebac.com/subiecte-oficiale-evaluare-nationala",
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
    canonical: "https://matebac.com/subiecte-oficiale-evaluare-nationala",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
