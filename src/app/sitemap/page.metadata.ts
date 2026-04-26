import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Site Map | DSMath Center",
  description:
    "Harta site-ului DSMath Center cu toate paginile importante: informatii despre meditatii, planuri, subiecte oficiale, resurse si pagini legale.",
  keywords: [
    "site map",
    "sitemap dsmath center",
    "harta site meditatii matematica",
    "pagini dsmath center",
  ],
  openGraph: {
    title: "Site Map | DSMath Center",
    description:
      "Harta site-ului DSMath Center cu toate paginile importante: informatii despre meditatii, planuri, subiecte oficiale, resurse si pagini legale.",
    url: "https://www.matebac.com/sitemap",
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
    type: "website",
  },
  alternates: {
    canonical: "https://www.matebac.com/sitemap",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
