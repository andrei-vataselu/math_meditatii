import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const layoutTitle = "DS Math Center | Matematică Bac și EN, Pitești";
const layoutDescription =
  "Meditații la matematică pentru Bac și Evaluare Națională, online sau la Pitești. Explicații clare, plan personalizat, resurse gratuite pe site.";

export const metadata: Metadata = {
  title: {
    default: layoutTitle,
    template: "%s | DS Math Center",
  },
  description: layoutDescription,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "meditații matematică",
    "meditatii pitesti",
    "pregatire bac pitesti",
    "meditații bacalaureat",
    "evaluare națională matematică",
    "DS Math Center",
  ],
  alternates: {
    canonical: "/",
    languages: {
      ro: "/",
    },
  },
  openGraph: {
    title: layoutTitle,
    description: layoutDescription,
    url: siteConfig.url,
    siteName: "DS Math Center",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DS Math Center Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: layoutTitle,
    description: layoutDescription,
    site: "@dsmathcenter",
    images: [`${siteConfig.url}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5f0032",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.svg`,
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.tiktok,
        siteConfig.social.whatsapp,
        siteConfig.social.x,
        siteConfig.social.facebook,
        siteConfig.social.linkedin,
        siteConfig.social.youtube,
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: siteConfig.email,
          telephone: siteConfig.phoneE164,
          contactType: "customer support",
          availableLanguage: ["Romanian"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      image: `${siteConfig.url}/logo.svg`,
      url: siteConfig.url,
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
      parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
