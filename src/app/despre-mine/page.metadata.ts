import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Despre Mine | Denisa Nita - DSMath Center",
  description:
    "Afla cine este Denisa Nita, fondatoarea DSMath Center: experienta, educatie, rezultate si abordarea in pregatirea la matematica pentru Bacalaureat.",
  keywords: [
    "denisa nita",
    "profesor matematica pitesti",
    "despre dsmath center",
    "experienta meditatii matematica",
  ],
  openGraph: {
    title: "Despre Mine | Denisa Nita - DSMath Center",
    description:
      "Afla cine este Denisa Nita, fondatoarea DSMath Center: experienta, educatie, rezultate si abordarea in pregatirea la matematica pentru Bacalaureat.",
    url: "https://matebac.com/despre-mine",
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
    type: "profile",
  },
  alternates: {
    canonical: "https://matebac.com/despre-mine",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;

