import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Prețuri | DSMath Center – Meditații Matematică Bacalaureat',
  description:
    'Alege planul potrivit pentru pregătirea la matematică: plan gratuit sau premium cu acces la toate resursele, ședințe online și suport dedicat.',
  openGraph: {
    title: 'Prețuri | DSMath Center – Meditații Matematică Bacalaureat',
    description:
      'Alege planul potrivit pentru pregătirea la matematică: plan gratuit sau premium cu acces la toate resursele, ședințe online și suport dedicat.',
    url: 'https://matebac.com/pricing',
    siteName: 'DSMath Center',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'DSMath Center Logo, Meditații',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://matebac.com/pricing',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
