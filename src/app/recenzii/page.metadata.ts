import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Recenzii | DSMath Center – Păreri Elevi Meditații',
  description:
    'Vezi recenzii și păreri reale de la elevii care au participat la meditațiile de matematică cu Denisa Nita pentru Bacalaureat.',
  openGraph: {
    title: 'Recenzii | DSMath Center – Păreri Elevi Meditații',
    description:
      'Vezi recenzii și păreri reale de la elevii care au participat la meditațiile de matematică cu Denisa Nita pentru Bacalaureat.',
    url: 'https://matebac.com/recenzii',
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
    canonical: 'https://matebac.com/recenzii',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
