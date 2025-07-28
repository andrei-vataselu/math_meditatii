import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSMath Center - Meditații Bacalaureat Matematică | Clasa a XII-a",
  description: "Pregătire specializată pentru examenul de Bacalaureat la Matematică, dedicată elevilor de clasa a XII-a. Explicații clare și metode adaptate fiecărui profil: Mate-Info, Științe, Tehnologic și Pedagogic.",
  metadataBase: new URL('https://matebac.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ro': '/',
    },
  },
  openGraph: {
    title: 'DSMath Center - Meditații Bacalaureat Matematică',
    description: 'Pregătire la matematică pentru Bacalaureat, clasa a XII-a. Metode moderne, suport PDF, grupuri pe profil.',
    url: 'https://matebac.com',
    siteName: 'DSMath Center',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'DSMath Center Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSMath Center - Meditații Bacalaureat Matematică',
    description: 'Pregătire la matematică pentru Bacalaureat, clasa a XII-a. Metode moderne, suport PDF, grupuri pe profil.',
    site: '@dsmathcenter',
    images: ['https://matebac.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'DSMath Center',
            url: 'https://matebac.com',
            logo: 'https://matebac.com/logo.svg',
            email: 'denisanita08@gmail.com',
            telephone: '+40731979588',
            sameAs: [
              'https://www.instagram.com/dsmathcenter',
              'https://www.tiktok.com/@dsmathcenter',
              'https://wa.me/40731979588'
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              email: 'denisanita08@gmail.com',
              telephone: '+40731979588',
              contactType: 'customer support',
              availableLanguage: ['Romanian'],
            }],
          }) }}
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
