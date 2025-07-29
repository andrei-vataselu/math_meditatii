import type { Metadata } from 'next';

const metadata: Metadata = {
    title: 'DS Math Center | Meditații Matematică Bacalaureat – Denisa Nita',
    description:
        'Pregătire la matematică pentru Bacalaureat cu Denisa Nita. Cursuri online, explicații clare, resurse gratuite și suport dedicat pentru elevii de clasa a XII-a.',
    openGraph: {
        title: 'DS Math Center | Meditații Matematică Bacalaureat – Denisa Nita',
        description:
            'Pregătire la matematică pentru Bacalaureat cu Denisa Nita. Cursuri online, explicații clare, resurse gratuite și suport dedicat pentru elevii de clasa a XII-a.',
        url: 'https://matebac.com/',
        siteName: 'DS Math Center',
        images: [
            {
                url: '/logo.svg',
                width: 1200,
                height: 630,
                alt: 'DS Math Center Logo',
            },
        ],
        locale: 'ro_RO',
        type: 'website',
    },
    alternates: {
        canonical: 'https://matebac.com/',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default metadata;
