import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Politica de Cookie-uri | DSMath Center',
  description:
    'Află cum folosește DSMath Center cookie-uri pentru a îmbunătăți experiența pe site. Detalii despre tipuri de cookie-uri, scop și gestionare.',
  openGraph: {
    title: 'Politica de Cookie-uri | DSMath Center',
    description:
      'Află cum folosește DSMath Center cookie-uri pentru a îmbunătăți experiența pe site. Detalii despre tipuri de cookie-uri, scop și gestionare.',
    url: 'https://matebac.com/politica-cookies',
    siteName: 'DSMath Center',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'DSMath Center Logo',
      },
    ],
    locale: 'ro_RO',
    type: 'article',
  },
  alternates: {
    canonical: 'https://matebac.com/politica-cookies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
