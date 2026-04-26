import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Termeni și Condiții | DS Math Center",
  description:
    "Termeni DS MATH CENTER S.R.L. pentru matebac.com: servicii, plată, livrare digitală, retragere OUG 34/2014, proprietate intelectuală, litigii. 17.04.2026.",
  keywords: [
    "termeni si conditii",
    "conditii utilizare site",
    "drepturi obligatii cursuri online",
  ],
  openGraph: {
    title: "Termeni și Condiții | DS Math Center",
    description:
      "Termeni DS MATH CENTER S.R.L. pentru matebac.com: servicii, plată, livrare digitală, retragere OUG 34/2014, proprietate intelectuală, litigii. 17.04.2026.",
    url: "https://matebac.com/termeni-si-conditii",
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
    canonical: "https://matebac.com/termeni-si-conditii",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;

