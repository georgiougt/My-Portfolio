/**
 * City landing pages.
 *
 * This is the ground a global agency cannot take from us: nobody in Warsaw or
 * London is going to write a genuinely local page about doing business in
 * Paphos. Each entry becomes /web-design/<slug> with real, area-specific copy —
 * thin "city + service" doorway pages get filtered by Google, so every field
 * below should say something that is only true of that city.
 */
export type Location = {
    slug: string;
    /** City name in English. */
    city: string;
    /** Greek name — used in the page copy and hreflang-adjacent signals. */
    cityGreek: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    /** Opening paragraph. Must be specific to this city. */
    intro: string;
    /** What the local market looks like — the part competitors will not write. */
    marketNotes: string[];
    /** Industries that actually matter in this city. */
    industries: string[];
    /** Districts / areas, for long-tail "near me" coverage. */
    areas: string[];
    faqs: { question: string; answer: string }[];
};

export const locations: Location[] = [
    {
        slug: 'limassol',
        city: 'Limassol',
        cityGreek: 'Λεμεσός',
        metaTitle: 'Web Design Limassol',
        metaDescription:
            'Web design and development in Limassol. We build fast, bilingual websites for Limassol businesses — shipping, forex, hospitality, clinics and trades.',
        h1: 'Web Design in Limassol',
        intro:
            'Limassol is the most competitive commercial market in Cyprus, and it shows online: shipping, forex and professional-services firms here already invest in their websites, so a template build no longer clears the bar. We are based in Limassol and build for it — bilingual sites, fast on mobile, structured so both Greek and English searches find you.',
        marketNotes: [
            'The highest concentration of international companies in Cyprus, so English-language search matters as much as Greek here.',
            'Shipping, forex and corporate-services firms set the visual standard — a dated site reads as a small operation next to them.',
            'Tourist-facing businesses in the marina and old town compete on mobile search almost entirely.',
            'Local search volume is the highest on the island, which also means the map pack is worth the most.',
        ],
        industries: [
            'Shipping and maritime services',
            'Forex, fintech and corporate services',
            'Hospitality, restaurants and the marina',
            'Private clinics and medical practices',
            'Construction, property and trades',
        ],
        areas: [
            'Limassol Marina',
            'Old Town and Anexartisias',
            'Germasogeia and Potamos Germasogeias',
            'Agios Athanasios',
            'Mesa Geitonia',
            'Ypsonas',
            'Zakaki',
        ],
        faqs: [
            {
                question: 'Do you meet clients in person in Limassol?',
                answer:
                    'Yes — we are based here, so an initial meeting over coffee is usually the fastest way to scope a project properly. Everything after that can run over email and calls if that suits you better.',
            },
            {
                question: 'Should my Limassol website be in Greek, English, or both?',
                answer:
                    'For most Limassol businesses, both. The city has an unusually large English-speaking market, but Greek-language searches still convert better for local services. We build the site so each language has its own indexable URLs rather than a translate widget, which Google cannot rank.',
            },
            {
                question: 'How do I rank for "near me" searches in Limassol?',
                answer:
                    'Three things, in order: a verified and fully filled Google Business Profile, consistent name, address and phone details across the web, and a steady flow of genuine reviews. The website supports all three but rarely wins the map pack on its own.',
            },
        ],
    },
    {
        slug: 'nicosia',
        city: 'Nicosia',
        cityGreek: 'Λευκωσία',
        metaTitle: 'Web Design Nicosia',
        metaDescription:
            'Web design and development in Nicosia. Websites for Nicosia law firms, accountants, clinics and retailers — built to rank in Greek and English search.',
        h1: 'Web Design in Nicosia',
        intro:
            'Nicosia is the capital and the professional-services centre of Cyprus, which makes it the most credibility-driven market on the island. Law firms, accountants and consultancies here are chosen on how competent they look before anyone picks up a phone. We build sites that carry that weight — and that are found in Greek, which is how most of Nicosia searches.',
        marketNotes: [
            'Greek-language search dominates far more than in Limassol — Greek content is not optional here.',
            'Professional services and government-adjacent business make credibility the primary conversion factor.',
            'The University of Cyprus and CIIM create a steady market for education and student-facing services.',
            'Retail is concentrated in a few corridors, so local map-pack visibility is fiercely contested.',
        ],
        industries: [
            'Law firms and legal services',
            'Accounting, audit and tax advisory',
            'Medical and dental practices',
            'Education and training providers',
            'Retail and hospitality in the city centre',
        ],
        areas: [
            'City centre and Ledra Street',
            'Engomi',
            'Strovolos',
            'Lakatamia',
            'Aglantzia',
            'Latsia',
            'Dali',
        ],
        faqs: [
            {
                question: 'Do you work with Nicosia clients remotely?',
                answer:
                    'Yes. Most of the process is remote regardless of where a client is, and Nicosia is an hour from us if a meeting is genuinely useful. Nothing about the service or the price changes.',
            },
            {
                question: 'Does my Nicosia website need to be in Greek?',
                answer:
                    'For most Nicosia businesses, yes. The Greek-language share of local search is considerably higher here than in Limassol, and a site that only exists in English simply will not appear for the terms your customers actually type.',
            },
            {
                question: 'What matters most for a Nicosia law or accounting firm?',
                answer:
                    'Demonstrated expertise. Individual pages for each practice area, named professionals with real credentials, and clear structured data — this is what Google rewards for professional services, and it is also what makes a prospective client choose you over the firm next door.',
            },
        ],
    },
    {
        slug: 'larnaca',
        city: 'Larnaca',
        cityGreek: 'Λάρνακα',
        metaTitle: 'Web Design Larnaca',
        metaDescription:
            'Web design and development in Larnaca. Fast, mobile-first websites for Larnaca hospitality, tourism, property and local service businesses.',
        h1: 'Web Design in Larnaca',
        intro:
            'Larnaca runs on arrivals — the airport, the port and a tourist season that decides the year for a lot of local businesses. That makes mobile speed and booking flow the whole ballgame: a visitor searching from an airport terminal on patchy data will not wait four seconds for your homepage. We build for that visitor.',
        marketNotes: [
            'Cyprus main airport puts a constant stream of first-time, mobile-only searchers in the city.',
            'Seasonality is sharp — the site has to convert hardest between April and October.',
            'Tourism and hospitality businesses compete with aggregator sites, so direct-booking conversion matters more than raw traffic.',
            'A growing expat and remote-worker population searches almost entirely in English.',
        ],
        industries: [
            'Hotels, apartments and short-term rentals',
            'Restaurants, cafés and beach bars',
            'Car hire and airport transfers',
            'Property sales and management',
            'Local trades and home services',
        ],
        areas: [
            'Finikoudes and the seafront',
            'Mackenzie',
            'City centre',
            'Aradippou',
            'Oroklini',
            'Livadia',
            'Pyla',
        ],
        faqs: [
            {
                question: 'Can you build a booking system for my Larnaca business?',
                answer:
                    'Yes — direct booking, availability calendars and deposit payments, so you are not handing 15–20% of every reservation to an aggregator. For rentals and transfers this usually pays for the whole website within a season.',
            },
            {
                question: 'How important is site speed for tourism businesses?',
                answer:
                    'Critical. A large share of your visitors are on mobile data, often roaming, sometimes standing in an airport. Every second of load time costs conversions, which is exactly why we build on Next.js rather than a plugin-heavy platform.',
            },
            {
                question: 'Should a Larnaca tourism site be in multiple languages?',
                answer:
                    'English first, Greek second, and then whichever markets actually book with you — Russian, Hebrew and Polish are common in Larnaca. Each language gets its own URLs so it can rank independently.',
            },
        ],
    },
    {
        slug: 'paphos',
        city: 'Paphos',
        cityGreek: 'Πάφος',
        metaTitle: 'Web Design Paphos',
        metaDescription:
            'Web design and development in Paphos. Multilingual websites for Paphos tourism, property, healthcare and expat-facing businesses.',
        h1: 'Web Design in Paphos',
        intro:
            'Paphos has the most international customer base in Cyprus relative to its size — a large permanent expat community alongside seasonal tourism. That changes what a website has to do: it needs to work in more than one language, load well for people searching from abroad before they arrive, and make trust obvious to someone who has never heard of you.',
        marketNotes: [
            'A large British, Russian and Northern European resident population searches in its own languages.',
            'Much of the buying decision happens before arrival, so the site is competing internationally, not locally.',
            'Property and relocation services are an unusually large share of the local economy.',
            'Lower local competition than Limassol means well-executed SEO ranks faster here.',
        ],
        industries: [
            'Property sales, rentals and relocation services',
            'Hotels, villas and holiday accommodation',
            'Private healthcare and dental clinics',
            'Restaurants and tourism experiences',
            'Legal and immigration advisory',
        ],
        areas: [
            'Kato Paphos',
            'Coral Bay',
            'Peyia',
            'Chloraka',
            'Tala',
            'Geroskipou',
            'Tombs of the Kings area',
        ],
        faqs: [
            {
                question: 'Can you build a multilingual website for Paphos?',
                answer:
                    'Yes, and it is usually the right call here. We build each language as its own set of indexable URLs with correct hreflang tags, so Google serves the right version to the right country — rather than a browser translate widget, which search engines ignore entirely.',
            },
            {
                question: 'How do I reach customers before they arrive in Cyprus?',
                answer:
                    'By ranking in their country, not just in Cyprus. That means content targeted at pre-arrival searches — "villa rental Coral Bay", "dentist Paphos English speaking" — and hreflang set up so the right language version surfaces in each market.',
            },
            {
                question: 'Is SEO easier in Paphos than Limassol?',
                answer:
                    'Generally, yes. There are fewer businesses competing seriously online, so a properly built site with real content can reach page one considerably faster. The trade-off is smaller search volume, which is why the multilingual and pre-arrival angles matter so much here.',
            },
        ],
    },
];

export function getLocation(slug: string): Location | undefined {
    return locations.find((l) => l.slug === slug);
}
