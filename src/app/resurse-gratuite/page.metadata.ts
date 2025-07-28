import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Resurse Gratuite | DSMath Center – Subiecte Bac Matematică',
  description:
    'Descarcă sau vizualizează gratuit subiecte de Bacalaureat la matematică, materiale PDF și resurse utile pentru pregătirea examenului.',
  openGraph: {
    title: 'Resurse Gratuite | DSMath Center – Subiecte Bac Matematică',
    description:
      'Descarcă sau vizualizează gratuit subiecte de Bacalaureat la matematică, materiale PDF și resurse utile pentru pregătirea examenului.',
    url: 'https://matebac.com/resurse-gratuite',
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
    canonical: 'https://matebac.com/resurse-gratuite',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
