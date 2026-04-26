import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Politica de Confidențialitate | DS Math Center",
  description:
    "GDPR: DS MATH CENTER S.R.L. — date colectate, temei legal, drepturi, durată, cookie-uri și localStorage pentru banner. Actualizare 17.04.2026.",
  keywords: [
    "politica confidentialitate",
    "gdpr dsmath center",
    "date personale meditatii",
  ],
  openGraph: {
    title: "Politica de Confidențialitate | DS Math Center",
    description:
      "GDPR: DS MATH CENTER S.R.L. — date colectate, temei legal, drepturi, durată, cookie-uri și localStorage pentru banner. Actualizare 17.04.2026.",
    url: "https://www.matebac.com/privacy",
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
    canonical: "https://www.matebac.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;

