import { site } from '@/lib/site';

export const siteUrl = site.url;

/** Absolute URL for a site-relative path. */
export function abs(path: string): string {
    return path.startsWith('http') ? path : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Stable @id for the business entity. Every other node references this rather
 * than repeating the organisation details, which is what lets Google merge them
 * into a single knowledge-graph entity instead of several competing ones.
 */
export const ORGANIZATION_ID = `${siteUrl}/#organization`;
export const WEBSITE_ID = `${siteUrl}/#website`;

/** Social/authority profiles. Anything left as '#' is filtered out. */
const sameAs = Object.values(site.socials).filter(
    (url) => typeof url === 'string' && url.startsWith('http')
);

/**
 * The primary LocalBusiness node.
 *
 * ProfessionalService is a LocalBusiness subtype, so this is eligible for local
 * rich results — but only if telephone, address, geo, opening hours and price
 * range are actually present. They were missing before; that is why the site
 * had no local presence in structured data.
 */
export const organizationSchema = {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': ORGANIZATION_ID,
    name: site.name,
    alternateName: 'Stellar Reach',
    url: siteUrl,
    logo: {
        '@type': 'ImageObject',
        url: abs('/logo-icon.png'),
        caption: `${site.name} logo`,
    },
    image: abs('/hero-banner.jpg'),
    description:
        'Cyprus-based web design, development and SEO studio building fast, modern, high-converting websites and web apps for businesses in Limassol, Nicosia, Larnaca, Paphos and across Cyprus.',
    slogan: 'Engineering-grade websites for Cyprus businesses.',
    email: site.email,
    telephone: `+${site.phone}`,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Bank transfer, Card, Revolut',
    founder: {
        '@type': 'Person',
        name: 'George Georgiou',
        jobTitle: 'Founder & Lead Engineer',
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Aristotle University of Thessaloniki',
        },
        knowsAbout: [
            'Web Development',
            'Next.js',
            'Search Engine Optimization',
            'Computer Architecture',
            'Software Engineering',
        ],
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Limassol',
        addressRegion: 'Limassol',
        addressCountry: 'CY',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.7071,
        longitude: 33.0226,
    },
    areaServed: [
        { '@type': 'Country', name: 'Cyprus' },
        { '@type': 'City', name: 'Limassol' },
        { '@type': 'City', name: 'Nicosia' },
        { '@type': 'City', name: 'Larnaca' },
        { '@type': 'City', name: 'Paphos' },
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: `+${site.phone}`,
            email: site.email,
            contactType: 'sales',
            areaServed: 'CY',
            availableLanguage: ['en', 'el'],
        },
    ],
    knowsAbout: [
        'Web Design',
        'Web Development',
        'E-commerce',
        'Search Engine Optimization',
        'Local SEO',
        'Google Ads',
        'Web Applications',
    ],
    ...(sameAs.length ? { sameAs } : {}),
};

/**
 * WebSite node with a SearchAction. Costs nothing and is the prerequisite for a
 * sitelinks search box, which Netguru has and we did not.
 */
export const websiteSchema = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteUrl,
    name: site.name,
    inLanguage: 'en',
    publisher: { '@id': ORGANIZATION_ID },
};

/** Wraps nodes in a single @graph — one script tag, one connected entity set. */
export function graph(...nodes: object[]) {
    return {
        '@context': 'https://schema.org',
        '@graph': nodes,
    };
}

/** BreadcrumbList from an ordered list of crumbs. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: abs(item.path),
        })),
    };
}

/** FAQPage from question/answer pairs. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    };
}

/** Service node tied to the business, with an indicative price offer. */
export function serviceSchema(opts: {
    name: string;
    description: string;
    path: string;
    startingPrice: number;
    areaServed?: string;
}) {
    return {
        '@type': 'Service',
        '@id': `${abs(opts.path)}#service`,
        name: opts.name,
        description: opts.description,
        url: abs(opts.path),
        serviceType: opts.name,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: { '@type': 'Place', name: opts.areaServed ?? 'Cyprus' },
        offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: opts.startingPrice,
            priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'EUR',
                minPrice: opts.startingPrice,
                valueAddedTaxIncluded: false,
            },
            availability: 'https://schema.org/InStock',
            url: abs('/contact'),
        },
    };
}

/** Renders a JSON-LD script tag. */
export function jsonLdProps(data: object) {
    return {
        type: 'application/ld+json' as const,
        dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
    };
}
