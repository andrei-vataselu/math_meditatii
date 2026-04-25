import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Preturi | DSMath Center - Meditatii Matematica Bacalaureat",
  description:
    "Alege planul potrivit pentru pregatirea la matematica in Pitesti si online: plan gratuit sau premium cu acces la resurse, sedinte si suport dedicat.",
  keywords: [
    "pret meditatii matematica",
    "pret meditatii matematica pitesti",
    "planuri meditatii pitesti",
    "planuri dsmath center",
    "abonament bac matematica",
    "resurse gratuite matematica",
  ],
  openGraph: {
    title: "Preturi | DSMath Center - Meditatii Matematica Bacalaureat",
    description:
      "Alege planul potrivit pentru pregatirea la matematica in Pitesti si online: plan gratuit sau premium cu acces la resurse, sedinte si suport dedicat.",
    url: "https://matebac.com/planuri",
    siteName: "DSMath Center",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "DSMath Center Logo, Meditatii",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  alternates: {
    canonical: "https://matebac.com/planuri",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
