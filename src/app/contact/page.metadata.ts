import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Contact | DSMath Center – Meditații Bacalaureat Matematică',
  description:
    'Află detalii Contactul intensiv de matematică pentru Bacalaureat: structură, beneficii, program, înscriere și suport oferit de Denisa Nita.',
  openGraph: {
    title: 'Contact | DSMath Center – Meditații Bacalaureat Matematică',
    description:
      'Află detalii Contactul intensiv de matematică pentru Bacalaureat: structură, beneficii, program, înscriere și suport oferit de Denisa Nita.',
    url: 'https://matebac.com/course-info',
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
    canonical: 'https://matebac.com/course-info',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
