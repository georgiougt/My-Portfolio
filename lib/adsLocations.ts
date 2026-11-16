/**
 * Google Ads city pages — /google-ads/<slug>.
 *
 * Built because Search Console showed "google ads limassol" and "google ads
 * agency limassol" earning impressions with no page to land on; the generic
 * /services/google-ads page was ranking for them by accident.
 *
 * Deliberately NOT a full service × city matrix. A city only gets an entry
 * here when the paid-search advice for it genuinely differs — different
 * languages, different industries, different targeting traps. If a field below
 * would still be true after swapping the city name, it does not belong on the
 * page: that is exactly the doorway pattern Google filters.
 *
 * No performance figures are quoted. Add real cost-per-lead numbers from your
 * own accounts in `proof` when you have a client's permission to publish them.
 */
export type AdsLocation = {
    /** Matches the slug in lib/locations.ts so the two city pages can link. */
    slug: string;
    city: string;
    cityGreek: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    intro: string;
    /** What the paid-search auction looks like in this city specifically. */
    landscape: string[];
    /** Campaign types that suit the industries actually concentrated here. */
    campaigns: { sector: string; approach: string }[];
    /** How language and spelling split the keyword set in this city. */
    language: {
        summary: string;
        /** Real spelling variants people type — shown as chips. */
        variants: string[];
    };
    /** Targeting and budget mistakes specific to this city. */
    leaks: { title: string; detail: string }[];
    /** Optional published results. Leave empty rather than invent numbers. */
    proof?: { client: string; result: string }[];
    faqs: { question: string; answer: string }[];
};

export const adsLocationBase = '/google-ads';

export const adsLocations: AdsLocation[] = [
    {
        slug: 'limassol',
        city: 'Limassol',
        cityGreek: 'Λεμεσός',
        metaTitle: 'Google Ads Agency Limassol',
        metaDescription:
            'Google Ads management in Limassol by a Limassol-based team. Greek, English and Russian campaigns built around local buying intent, on a flat fee — not a percentage of your spend.',
        h1: 'Google Ads Management in Limassol',
        intro:
            'Limassol is the hardest place in Cyprus to run Google Ads cheaply and the easiest place to run them badly. More businesses bid here than anywhere else on the island, the audience searches in three languages, and many of the people typing "Limassol" into Google are not in Limassol at all. We are based here, and we build accounts around how this city actually searches.',
        landscape: [
            'Limassol has the densest concentration of advertisers in Cyprus, so the same keyword usually costs more here than in Larnaca or Paphos. Account structure matters more when every wasted click is a more expensive one.',
            'The city searches in Greek, English and Russian. One mixed ad group serving one ad to all three audiences underperforms three small ad groups that each answer in the language of the search.',
            'Limassol is a destination as well as a city: tourists, people relocating and overseas property buyers all search for it from abroad. Whether that traffic is gold or waste depends entirely on what you sell.',
            'International companies headquartered here recruit and sell globally, so "Limassol" campaigns often sit alongside campaigns that should not be geo-targeted to Cyprus at all. Mixing the two in one campaign blurs every number in the account.',
        ],
        campaigns: [
            {
                sector: 'Clinics, dentists and private practices',
                approach:
                    'Search campaigns per treatment rather than per clinic, with call extensions during opening hours and separate Greek and English ad groups. Patients search for the procedure, not for "clinic".',
            },
            {
                sector: 'Restaurants, bars and marina hospitality',
                approach:
                    'Tightly radius-targeted search and Maps ads that lean on your Google Business Profile, weighted towards evenings and weekends, plus English campaigns that reach visitors before they land.',
            },
            {
                sector: 'Property, relocation and corporate services',
                approach:
                    'Deliberately international targeting — the buyer is usually still abroad — with enquiry forms that qualify budget and timeline, so the sales team is not fed tyre-kickers.',
            },
            {
                sector: 'Regulated financial firms',
                approach:
                    'Google restricts advertising for many financial products and requires advertiser certification before those ads can run. We plan campaigns around that approval process rather than discovering it after launch.',
            },
            {
                sector: 'Trades, garages and home services',
                approach:
                    'Local, phone-first campaigns limited to the districts you actually drive to, with negative keywords that strip out job-seekers, DIY searches and suppliers.',
            },
        ],
        language: {
            summary:
                'People here spell the same city four ways, and each spelling signals a different customer. "Λεμεσός" and "Lemesos" are locals; "Limassol" is locals, expats and people abroad; "Лимассол" is the Russian-speaking community. Many Greek speakers also type Greek in Latin characters, so a dentist needs "odontiatros lemesos" as well as "οδοντίατρος Λεμεσός". We build the keyword list from all of them and write each ad in the language of the search.',
            variants: [
                'Limassol',
                'Lemesos',
                'Λεμεσός',
                'Λεμεσό',
                'Лимассол',
                'near me',
                'κοντά μου',
            ],
        },
        leaks: [
            {
                title: 'Paying for people who are only interested in Limassol',
                detail:
                    'Google\'s default location setting includes people "interested in" your target area, not only people in it. For a Limassol dentist that means clicks from someone abroad reading about moving to Cyprus. We switch local-service campaigns to presence-only — and leave the wider setting on, on purpose, for hotels and property.',
            },
            {
                title: 'Targeting the Greek language and missing Greek speakers',
                detail:
                    'Plenty of Greek-speaking Cypriots use phones and browsers set to English. A campaign restricted to "Greek" can miss them. We keep language targeting broad and let the keyword decide which ad is shown.',
            },
            {
                title: 'One radius around the whole city',
                detail:
                    'A wide circle around Limassol sweeps in villages a restaurant will never draw customers from, and thins out budget where it matters. Germasogeia, the tourist strip, the centre and Ypsonas behave differently, so we bid on them differently.',
            },
            {
                title: 'Sending paid clicks to the homepage',
                detail:
                    'In an auction this crowded, the landing page decides whether a click was worth it. Each campaign gets a page that repeats the search, shows the price or the next step, and puts the phone number where a thumb can reach it.',
            },
        ],
        faqs: [
            {
                question: 'How much does Google Ads cost in Limassol?',
                answer:
                    'There are two costs: what you pay Google and what you pay us. Most local campaigns need around €300–€500 a month in ad spend before there is enough data to optimise, and competitive Limassol categories often need more. Our management fee is flat and agreed up front, so it does not rise when your budget does.',
            },
            {
                question: 'Should my Limassol ads run in Greek, English or Russian?',
                answer:
                    'Whichever your customers type, which for most Limassol businesses is at least two of the three. We start from the search terms rather than assumptions, give each language its own ad group and landing page, and move budget towards the one producing enquiries.',
            },
            {
                question: 'Can we meet in person in Limassol?',
                answer:
                    'Yes. We are based in Limassol, so a first meeting in person is easy and usually the quickest way to understand a business. After that, reporting and changes run over email and calls unless you prefer otherwise.',
            },
            {
                question: 'Do you take over existing Google Ads accounts?',
                answer:
                    'Yes, and we would rather keep your account history than start a new one. We audit it first, show you where spend is going, and tell you plainly if the account is already in good shape and does not need us.',
            },
            {
                question: 'Who owns the Google Ads account?',
                answer:
                    'You do. The account is created under your business and billed to your card, and we are added as a manager. If we stop working together, you keep the account, the data and every campaign in it.',
            },
        ],
    },
    {
        slug: 'nicosia',
        city: 'Nicosia',
        cityGreek: 'Λευκωσία',
        metaTitle: 'Google Ads Agency Nicosia',
        metaDescription:
            'Google Ads management for Nicosia businesses. Greek-first search campaigns for law firms, accountants, clinics, colleges and retailers, on a flat management fee.',
        h1: 'Google Ads Management in Nicosia',
        intro:
            'Nicosia does not search like the coast. There is no tourist season to chase and far less English: this is a capital of offices, practices, ministries and universities, where people search in Greek for a professional they can trust. Google Ads here is less about volume and more about being the credible answer to a small number of valuable searches.',
        landscape: [
            'Greek is the working language of search in Nicosia. An English-only campaign that performs in Limassol will miss most of the market here.',
            'Professional services dominate — law, audit, tax, banking, insurance. Enquiries are worth a lot and arrive slowly, so campaigns have to be judged on the quality of the lead rather than the count.',
            'Greater Nicosia is several municipalities, not one city. Someone in Strovolos or Lakatamia searches for a service near home, and "Nicosia" may not appear in the query at all.',
            'The universities bring a large student population, including many international students who search in English and decide months before they arrive.',
            'Demand is steady across the year with one real dip: much of the city switches off around mid-August, and business-to-business searches fall with it.',
        ],
        campaigns: [
            {
                sector: 'Law firms and legal services',
                approach:
                    'One campaign per practice area, never a single "lawyer Nicosia" bucket. Someone searching for an immigration lawyer and someone searching for a divorce lawyer need different ads, pages and follow-up.',
            },
            {
                sector: 'Accounting, audit and tax advisory',
                approach:
                    'Search campaigns timed around the tax calendar, with landing pages that name the service and the people who deliver it. In this market, credentials on the page convert better than offers.',
            },
            {
                sector: 'Medical, dental and aesthetic practices',
                approach:
                    'Treatment-level keywords in Greek first, targeted to the suburbs your patients actually travel from, with call tracking so bookings taken at the front desk are counted as conversions.',
            },
            {
                sector: 'Colleges, tutoring and training providers',
                approach:
                    'Two separate efforts: Greek campaigns for local parents and students, and English campaigns aimed at applicants abroad, scheduled around intake deadlines rather than run flat all year.',
            },
            {
                sector: 'Retail and showrooms',
                approach:
                    'Maps visibility for people already out shopping, with search campaigns limited to the catchment that will realistically drive to you.',
            },
        ],
        language: {
            summary:
                'The capital has three names in everyday search: "Λευκωσία", its Latin spelling "Lefkosia", and "Nicosia". Locals mostly use the first two. Many also type Greek in Latin characters — "dikigoros lefkosia" as well as "δικηγόρος Λευκωσία" — and plenty never type the city at all, searching by suburb instead. A keyword list built only around the word "Nicosia" misses a large part of the people who live here.',
            variants: [
                'Λευκωσία',
                'Lefkosia',
                'Nicosia',
                'Στρόβολος',
                'Strovolos',
                'Έγκωμη',
                'Λακατάμια',
                'Λατσιά',
            ],
        },
        leaks: [
            {
                title: 'A radius drawn around the city centre',
                detail:
                    'Nicosia is a divided city. A circle around the centre reaches across the buffer zone and covers areas most local businesses cannot serve. We target by municipality and district, and exclude what you cannot reach, instead of drawing a circle.',
            },
            {
                title: 'Running the Limassol playbook',
                detail:
                    'English-first ads, tourist-season pacing and "interest in this location" targeting all make sense on the coast. In Nicosia they spend the budget on the wrong people. Campaign structures copied from a coastal account rarely survive contact with this market.',
            },
            {
                title: 'Counting form fills as success',
                detail:
                    'For a law or accounting firm, ten enquiries can be worth less than one. We track which keywords produce clients rather than contacts, and cut the ones that only produce price-shoppers.',
            },
            {
                title: 'Assuming a nine-to-six day',
                detail:
                    'A large part of the city works public-sector and bank hours, which do not match a typical ad schedule. We test schedules against when your enquiries actually arrive instead of guessing.',
            },
        ],
        faqs: [
            {
                question: 'Do you manage Google Ads for Nicosia businesses from Limassol?',
                answer:
                    'Yes. Campaign management is remote by nature — the work happens in the account, the reporting happens on calls — and Nicosia is about an hour from us when a meeting in person is useful. The service and the price are the same as for a Limassol client.',
            },
            {
                question: 'Should my Nicosia campaigns be in Greek?',
                answer:
                    'For almost every local service, Greek first. We usually add English as a second, smaller campaign and watch whether it earns its budget. The exceptions are businesses selling to international students, expats or overseas clients, where English leads.',
            },
            {
                question: 'What budget does a Nicosia professional-services firm need?',
                answer:
                    'Most local campaigns need around €300–€500 a month in ad spend before there is enough data to optimise. Legal and financial keywords are among the more contested, so a firm advertising several practice areas should expect to start higher or begin with one area and expand.',
            },
            {
                question: 'Can Google Ads work for a business outside the city centre?',
                answer:
                    'Often better than for one inside it. Suburbs such as Strovolos, Lakatamia, Latsia and Aglantzia have their own local search demand and fewer advertisers bidding on it. We build campaigns around the suburb names as well as the city.',
            },
            {
                question: 'Do you charge a percentage of ad spend?',
                answer:
                    'No. We charge a flat management fee, so we have no reason to push your budget higher than it needs to be. Your ad spend is billed by Google directly to you.',
            },
        ],
    },
];

export function getAdsLocation(slug: string): AdsLocation | undefined {
    return adsLocations.find((l) => l.slug === slug);
}
