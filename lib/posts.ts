/**
 * Blog / insights content.
 *
 * Kept as structured data rather than MDX so every post is guaranteed to have
 * the fields the Article schema needs (dates, author, description) and so the
 * heading hierarchy is generated consistently — the two things that most often
 * go wrong when posts are hand-written as free-form markup.
 *
 * When this grows past ~20 posts, move it to a headless CMS or MDX files; the
 * Post type below is the contract to keep.
 */
export type Block =
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'ul'; items: string[] }
    | { type: 'ol'; items: string[] }
    | { type: 'quote'; text: string };

export type Post = {
    slug: string;
    title: string;
    /** <title> if it should differ from the H1. */
    metaTitle?: string;
    description: string;
    /** ISO date. */
    published: string;
    /** ISO date — set when you meaningfully revise a post. */
    updated?: string;
    author: string;
    /** Rough read time in minutes. */
    readingMinutes: number;
    category: string;
    tags: string[];
    /** Slugs of services this post should funnel readers towards. */
    relatedServices: string[];
    body: Block[];
};

export const posts: Post[] = [
    {
        slug: 'how-much-does-a-website-cost-in-cyprus',
        title: 'How Much Does a Website Cost in Cyprus in 2026?',
        metaTitle: 'How Much Does a Website Cost in Cyprus? (2026 Prices)',
        description:
            'Real price ranges for websites in Cyprus in 2026 — what a €500 site actually gets you, what drives cost up, and the recurring fees nobody mentions in the quote.',
        published: '2026-08-18',
        author: 'George Georgiou',
        readingMinutes: 8,
        category: 'Pricing',
        tags: ['web design', 'pricing', 'Cyprus'],
        relatedServices: ['web-design', 'web-development', 'ecommerce-development'],
        body: [
            {
                type: 'p',
                text: 'Every quote you receive for a website in Cyprus will be different, and most of them will not explain why. This is the honest version: what the price bands actually are in 2026, what moves a project between them, and which recurring costs tend to appear after the invoice is signed.',
            },
            { type: 'h2', text: 'The three price bands in Cyprus' },
            {
                type: 'p',
                text: 'Ignore the outliers at either end and almost every website project on the island falls into one of three bands.',
            },
            { type: 'h3', text: '€400–€900: template builds' },
            {
                type: 'p',
                text: 'A bought WordPress or Wix theme, your logo and text dropped in, live within a week or two. This is a legitimate option for a business that needs to exist online and nothing more. What you are not getting is a layout designed around your customers, meaningful page speed, or any structure that will help you rank — the theme was built to look good in a demo, not to sell your service.',
            },
            { type: 'h3', text: '€900–€3,000: custom small-business sites' },
            {
                type: 'p',
                text: 'Design drawn for your business, five to fifteen pages, proper technical SEO foundations, real page-speed work. This is where most Cyprus service businesses should be. The cost difference against a template build is largely design time and the engineering that makes the site fast and indexable.',
            },
            { type: 'h3', text: '€3,000–€15,000+: e-commerce and web applications' },
            {
                type: 'p',
                text: 'Online stores with payment gateways and VAT handling, booking systems, client portals, anything with user accounts or an admin dashboard. Cost here scales with functionality, not page count. A ten-page site with a custom booking engine costs far more than a forty-page brochure site.',
            },
            { type: 'h2', text: 'What actually drives the price up' },
            {
                type: 'ul',
                items: [
                    'Number of unique page layouts — not number of pages. Twenty pages using four layouts is cheap; six pages each needing its own design is not.',
                    'Languages. A properly bilingual Greek/English site is roughly 40–60% more than a single-language build, because every page exists twice and both versions need to be indexable.',
                    'Integrations. Payment gateways, CRMs, booking systems and accounting software each add real engineering time.',
                    'Content. If you supply finished text and images, you save money. If the agency writes and photographs everything, expect to add €500–€2,000.',
                    'Custom functionality. Anything a user logs into, anything that calculates, anything that stores data — this is software, and it is priced as software.',
                ],
            },
            { type: 'h2', text: 'The costs that appear after launch' },
            {
                type: 'p',
                text: 'This is where quotes diverge most, and where the cheap option often stops being cheap.',
            },
            {
                type: 'ul',
                items: [
                    'Domain: €10–€20 per year. Unavoidable and trivial.',
                    'Hosting: anywhere from €0 to €40 per month. Modern static and edge-rendered sites cost almost nothing to host; heavy WordPress installs need real servers.',
                    'SSL certificate: should be free. If you are being billed for a basic certificate, question it.',
                    'Maintenance: €50–€200 per month for updates, backups and monitoring. Genuinely worth it for WordPress, where unpatched plugins are the single most common cause of hacked Cyprus sites.',
                    'Content edits: some agencies bill hourly for changing a phone number. Ask about this before signing, not after.',
                ],
            },
            { type: 'h2', text: 'Questions to ask before you sign anything' },
            {
                type: 'ol',
                items: [
                    'Do I own the code and the design files when this is finished?',
                    'What exactly happens if I want to leave — can I take the site with me?',
                    'Is this a template, and if so, which one?',
                    'What will this site score on Google PageSpeed Insights at launch, on mobile?',
                    'Who owns the domain and the hosting account — my name or yours?',
                    'What does it cost to change text or add a page next year?',
                ],
            },
            {
                type: 'quote',
                text: 'If an agency cannot answer question one with a straight "you do", the price is not the problem.',
            },
            { type: 'h2', text: 'What we charge, and why' },
            {
                type: 'p',
                text: 'We start at €800 for design and €1,200 for a built site, quoted as a fixed price before work begins. We build on Next.js rather than WordPress, which means hosting costs are close to zero, there are no plugins to be exploited, and the site loads in well under a second. You own the code. Nothing is rented back to you.',
            },
        ],
    },
    {
        slug: 'local-seo-cyprus-google-map-pack',
        title: 'How to Rank in the Google Map Pack in Cyprus',
        metaTitle: 'Local SEO Cyprus: How to Rank in the Google Map Pack',
        description:
            'A practical guide to ranking in the Google map pack in Limassol, Nicosia, Larnaca and Paphos — Google Business Profile, citations, reviews and the local ranking factors that actually move.',
        published: '2026-08-04',
        author: 'George Georgiou',
        readingMinutes: 9,
        category: 'SEO',
        tags: ['local SEO', 'Google Business Profile', 'Cyprus'],
        relatedServices: ['local-seo', 'seo-services', 'web-design'],
        body: [
            {
                type: 'p',
                text: 'For a local business in Cyprus, the map pack is worth more than every other search result combined. It is the block of three businesses with a map that sits above the normal results, it takes the majority of mobile clicks, and if you are not in it you are effectively invisible for "near me" searches. Here is how it is actually won.',
            },
            { type: 'h2', text: 'What Google uses to pick the three' },
            {
                type: 'p',
                text: 'Google weighs three things: relevance (does your profile match what was searched), distance (how close you are to the searcher) and prominence (how well known and well reviewed you are). You cannot change distance. You can change the other two considerably.',
            },
            { type: 'h2', text: 'Step 1: Fill in the Google Business Profile completely' },
            {
                type: 'p',
                text: 'Most Cyprus businesses claim their profile, add a phone number, and stop. A half-finished profile loses to a complete one almost every time. Complete means:',
            },
            {
                type: 'ul',
                items: [
                    'The correct primary category — this is the single most influential field, and most businesses pick it wrong. "Web designer" and "Website designer" are different categories with different results.',
                    'Every relevant secondary category, but no irrelevant ones.',
                    'Full opening hours, including holiday hours. Cyprus public holidays matter here.',
                    'A description that says what you do and where, written for humans.',
                    'Services and products listed individually, each with its own description.',
                    'Real photos, added regularly. Profiles with recent photos outperform static ones.',
                    'Both Greek and English business names only if you genuinely trade under both — keyword-stuffing the name field is a common Cyprus tactic and it does get profiles suspended.',
                ],
            },
            { type: 'h2', text: 'Step 2: Get your NAP consistent across Cyprus' },
            {
                type: 'p',
                text: 'NAP is name, address and phone number. Google cross-references yours across the web, and inconsistency erodes confidence in your listing. The usual Cyprus problem is the phone number: +357 25 123456, 25123456, and 00357 25 123456 appearing in different places, plus an address written as "Griva Digeni" on one site and "Gr. Digeni" on another.',
            },
            {
                type: 'p',
                text: 'Pick one exact format and use it everywhere: your website footer, your Google profile, your Facebook page, and every Cyprus directory you appear in. Then go and correct the old listings you have forgotten about.',
            },
            { type: 'h2', text: 'Step 3: Reviews, earned properly' },
            {
                type: 'p',
                text: 'Review count and recency both matter, and recency matters more than most people expect — forty reviews from three years ago is a weaker signal than twelve from the last six months. The mechanism that works is unglamorous: a short review link, sent by WhatsApp, at the moment the customer is happiest.',
            },
            {
                type: 'p',
                text: 'Reply to every review, including the bad ones. A calm, specific reply to a one-star review does more for a prospective customer than the review itself does damage. And do not buy reviews — Google is now very good at detecting them in small markets, and Cyprus is a very small market.',
            },
            { type: 'h2', text: 'Step 4: Location pages that say something' },
            {
                type: 'p',
                text: 'If you serve several cities, each one needs its own page — but a page that only swaps the city name into the same paragraph is a doorway page, and Google filters those. A location page earns its place by containing something true only of that location: the districts you cover, the local industries you work with, the specific way that market behaves.',
            },
            { type: 'h2', text: 'Step 5: The on-site work' },
            {
                type: 'ul',
                items: [
                    'LocalBusiness structured data with your address, phone, geo-coordinates and opening hours.',
                    'Your NAP in the footer as real text, never inside an image.',
                    'An embedded Google map on the contact page.',
                    'Fast mobile pages — most local searches are mobile, and speed is a ranking factor.',
                    'Genuinely useful content about your service area, which is what earns the local links that build prominence.',
                ],
            },
            { type: 'h2', text: 'How long it takes' },
            {
                type: 'p',
                text: 'A neglected profile that gets properly completed often moves within two to four weeks. Building prominence — reviews, citations, local links — is a three to six month project. In smaller Cyprus markets like Paphos and Larnaca it moves faster, simply because fewer competitors are doing the work.',
            },
        ],
    },
    {
        slug: 'wordpress-vs-nextjs-cyprus-business',
        title: 'WordPress or Next.js? An Honest Comparison for Cyprus Businesses',
        metaTitle: 'WordPress vs Next.js for Cyprus Businesses',
        description:
            'A straight comparison of WordPress and Next.js for a Cyprus business website — speed, security, hosting costs, SEO and the cases where WordPress is genuinely the better choice.',
        published: '2026-07-21',
        author: 'George Georgiou',
        readingMinutes: 7,
        category: 'Technology',
        tags: ['Next.js', 'WordPress', 'web development'],
        relatedServices: ['web-development', 'web-design', 'website-maintenance'],
        body: [
            {
                type: 'p',
                text: 'We build on Next.js, so treat this as an interested opinion — but an interested opinion that will still tell you when WordPress is the right answer, because sometimes it is.',
            },
            { type: 'h2', text: 'Where Next.js genuinely wins' },
            { type: 'h3', text: 'Speed' },
            {
                type: 'p',
                text: 'A typical Cyprus WordPress site loads in three to six seconds on mobile, mostly because of theme bloat and a dozen plugins each loading their own scripts. A Next.js site ships pre-rendered HTML from an edge network and generally lands under one second. Google uses page experience as a ranking signal, and every additional second costs conversions, so this is not an abstract benefit.',
            },
            { type: 'h3', text: 'Security' },
            {
                type: 'p',
                text: 'The overwhelming majority of hacked small-business sites are compromised through an outdated plugin, not through the core platform. A statically generated site has no admin login exposed to the internet and no plugin surface to exploit. There is simply less to attack.',
            },
            { type: 'h3', text: 'Hosting cost' },
            {
                type: 'p',
                text: 'WordPress needs PHP and a database, so it needs a real server — typically €10–€40 per month in Cyprus, more if you want it to be fast. A Next.js site can be hosted on a global edge network for free or close to it at small-business traffic levels.',
            },
            { type: 'h3', text: 'Control over technical SEO' },
            {
                type: 'p',
                text: 'On WordPress you configure a plugin and hope it emits what you wanted. On Next.js, metadata, canonical tags, structured data and sitemaps are code you write and can verify. When something is wrong, you fix it rather than filing a support ticket.',
            },
            { type: 'h2', text: 'Where WordPress is the better choice' },
            {
                type: 'p',
                text: 'It genuinely is, in these cases:',
            },
            {
                type: 'ul',
                items: [
                    'You publish content constantly and non-technical staff need to do it without any developer involvement. WordPress editing is still the most familiar interface in the world.',
                    'You need a specific plugin ecosystem — complex membership systems, LMS platforms, certain booking tools — and rebuilding it custom is not justified.',
                    'The budget is genuinely under €600 and something imperfect today beats something good in three months.',
                    'You already have an internal team who know WordPress and will maintain it.',
                ],
            },
            {
                type: 'p',
                text: 'The middle path is worth knowing about too: a headless setup where WordPress stays as the editing interface and Next.js renders the site. You keep the familiar editor and gain the speed. It costs more to build than either option alone.',
            },
            { type: 'h2', text: 'The comparison, condensed' },
            {
                type: 'ul',
                items: [
                    'Mobile load time: Next.js typically under 1s; WordPress typically 3–6s.',
                    'Monthly hosting: Next.js €0–€5; WordPress €10–€40.',
                    'Security patching: Next.js occasional dependency updates; WordPress continuous plugin maintenance.',
                    'Non-technical editing: WordPress out of the box; Next.js needs a CMS connected.',
                    'Build cost: WordPress lower; Next.js higher upfront, lower over five years.',
                    'Plugin ecosystem: WordPress vast; Next.js means building what you need.',
                ],
            },
            { type: 'h2', text: 'What we would tell you on a call' },
            {
                type: 'p',
                text: 'If you are a Cyprus service business with a mostly static site — services, portfolio, contact, maybe a blog you update monthly — Next.js will be faster, cheaper to run and easier to rank, and the higher build cost pays back inside two years. If you are running a content operation publishing several times a week with multiple non-technical editors, take WordPress and budget properly for maintenance. Anyone who tells you one platform is correct for every business is selling the one they know.',
            },
        ],
    },
];

export function getPost(slug: string): Post | undefined {
    return posts.find((p) => p.slug === slug);
}

/** Newest first — the order the blog index should render. */
export function sortedPosts(): Post[] {
    return [...posts].sort(
        (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
    );
}
