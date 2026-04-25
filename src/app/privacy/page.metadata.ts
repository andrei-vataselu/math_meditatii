import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Politica de Confidentialitate | DSMath Center",
  description:
    "Citeste politica de confidentialitate DSMath Center: ce date colectam, cum le folosim, drepturile tale si cum protejam informatiile personale.",
  keywords: [
    "politica confidentialitate",
    "gdpr dsmath center",
    "date personale meditatii",
  ],
  openGraph: {
    title: "Politica de Confidentialitate | DSMath Center",
    description:
      "Citeste politica de confidentialitate DSMath Center: ce date colectam, cum le folosim, drepturile tale si cum protejam informatiile personale.",
    url: "https://matebac.com/privacy",
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
    canonical: "https://matebac.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;

