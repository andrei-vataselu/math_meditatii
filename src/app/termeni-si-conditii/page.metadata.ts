import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Termeni si Conditii | DSMath Center",
  description:
    "Citeste termenii si conditiile de utilizare a site-ului DSMath Center: drepturi, obligatii, livrare, plati, confidentialitate si contact.",
  keywords: [
    "termeni si conditii",
    "conditii utilizare site",
    "drepturi obligatii cursuri online",
  ],
  openGraph: {
    title: "Termeni si Conditii | DSMath Center",
    description:
      "Citeste termenii si conditiile de utilizare a site-ului DSMath Center: drepturi, obligatii, livrare, plati, confidentialitate si contact.",
    url: "https://matebac.com/termeni-si-conditii",
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
    canonical: "https://matebac.com/termeni-si-conditii",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;

