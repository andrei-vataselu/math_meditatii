import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Despre Mine | Denisa Nita – DSMath Center',
  description:
    'Află cine este Denisa Nita, fondatoarea DSMath Center: experiență, educație, rezultate și abordarea în pregătirea la matematică pentru Bacalaureat.',
  openGraph: {
    title: 'Despre Mine | Denisa Nita – DSMath Center',
    description:
      'Află cine este Denisa Nita, fondatoarea DSMath Center: experiență, educație, rezultate și abordarea în pregătirea la matematică pentru Bacalaureat.',
    url: 'https://matebac.com/despre-mine',
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
    type: 'profile',
  },
  alternates: {
    canonical: 'https://matebac.com/despre-mine',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
