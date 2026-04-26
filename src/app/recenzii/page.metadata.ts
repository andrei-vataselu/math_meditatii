import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Recenzii | DSMath Center - Pareri Elevi Meditatii",
  description:
    "Vezi recenzii si pareri reale de la elevii care au participat la meditatiile de matematica cu Denisa Nita, inclusiv elevi din Pitesti, pentru Bacalaureat.",
  keywords: [
    "recenzii meditatii matematica",
    "pareri elevi bac matematica",
    "testimoniale dsmath center",
  ],
  openGraph: {
    title: "Recenzii | DSMath Center - Pareri Elevi Meditatii",
    description:
      "Vezi recenzii si pareri reale de la elevii care au participat la meditatiile de matematica cu Denisa Nita, inclusiv elevi din Pitesti, pentru Bacalaureat.",
    url: "https://www.matebac.com/recenzii",
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
    canonical: "https://www.matebac.com/recenzii",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;


