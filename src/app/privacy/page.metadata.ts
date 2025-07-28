import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Politica de Confidențialitate | DSMath Center',
  description:
    'Citește politica de confidențialitate DSMath Center: ce date colectăm, cum le folosim, drepturile tale și cum protejăm informațiile personale.',
  openGraph: {
    title: 'Politica de Confidențialitate | DSMath Center',
    description:
      'Citește politica de confidențialitate DSMath Center: ce date colectăm, cum le folosim, drepturile tale și cum protejăm informațiile personale.',
    url: 'https://matebac.com/privacy',
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
    canonical: 'https://matebac.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
