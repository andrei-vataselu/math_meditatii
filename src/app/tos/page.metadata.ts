import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Termeni și Condiții | DSMath Center',
  description:
    'Citește termenii și condițiile de utilizare a site-ului DSMath Center: drepturi, obligații, livrare, plăți, confidențialitate și contact.',
  openGraph: {
    title: 'Termeni și Condiții | DSMath Center',
    description:
      'Citește termenii și condițiile de utilizare a site-ului DSMath Center: drepturi, obligații, livrare, plăți, confidențialitate și contact.',
    url: 'https://matebac.com/tos',
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
    canonical: 'https://matebac.com/tos',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
