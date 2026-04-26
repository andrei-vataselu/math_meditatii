import type { Metadata } from "next";

const titleText = "Meditații matematică Bac, Pitești | DS Math Center";
const description =
  "Meditații matematică Bac și EN cu Denisa Niță, DS Math Center — Pitești sau online, plan personalizat, resurse gratuite. Consultație gratuită pe WhatsApp.";

const metadata: Metadata = {
  title: { absolute: titleText },
  description,
  keywords: [
    "meditații matematică",
    "meditații matematică Pitești",
    "pregătire bac matematică",
    "Denisa Niță",
    "DS Math Center",
    "evaluare națională matematică",
    "bacalaureat matematică",
  ],
  openGraph: {
    title: titleText,
    description,
    url: "https://www.matebac.com/",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titleText,
    description,
    site: "@dsmathcenter",
    images: ["https://www.matebac.com/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
