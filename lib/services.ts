/**
 * Single source of truth for service landing pages.
 *
 * Each entry becomes an indexable /services/<slug> page with its own title,
 * description, H1, FAQ block and Service structured data. This is the main
 * organic-search surface of the site: one page per commercial keyword rather
 * than a single "#services" anchor that Google cannot rank separately.
 */
export type Service = {
    slug: string;
    /** Short label used in nav, footer and cards. */
    name: string;
    /** <title> — the site-name template is appended automatically. */
    metaTitle: string;
    metaDescription: string;
    /** The visible H1. Contains the primary keyword naturally. */
    h1: string;
    /** One-paragraph intro, shown under the H1. */
    intro: string;
    /** Primary keyword this page targets, for your own tracking. */
    primaryKeyword: string;
    /** Supporting terms — used in the body copy and the "what's included" list. */
    included: string[];
    /** "Who this is for" — helps the page rank for buyer-intent long tails. */
    idealFor: string[];
    /** Page-specific FAQs. Also emitted as FAQPage structured data. */
    faqs: { question: string; answer: string }[];
    /** Slugs of related services, for internal linking. */
    related: string[];
    /** Indicative starting price in EUR, used for Offer structured data. */
    startingPrice: number;
};

export const services: Service[] = [
    {
        slug: 'web-design',
        name: 'Web Design',
        metaTitle: 'Web Design Cyprus',
        metaDescription:
            'Custom web design in Cyprus for businesses that want to look credible and convert. Bespoke, mobile-first designs built around your customers — not a template.',
        h1: 'Web Design in Cyprus',
        intro:
            'We design websites that make Cyprus businesses look like the serious operation they are. Every layout is drawn from scratch around your customers, your services and the way people actually buy in your market — no recycled themes, no generic stock layouts.',
        primaryKeyword: 'web design Cyprus',
        included: [
            'Bespoke design concepts — never a bought template',
            'Mobile-first layouts, because most Cyprus traffic is on a phone',
            'A clear conversion path on every page (call, WhatsApp, form)',
            'Brand-consistent typography, colour and imagery',
            'Accessible contrast and keyboard navigation',
            'Design handover in Figma, yours to keep',
        ],
        idealFor: [
            'Businesses whose current site looks dated next to competitors',
            'New companies that need to launch looking established',
            'Clinics, law firms and professional services where trust decides the sale',
        ],
        faqs: [
            {
                question: 'How much does web design cost in Cyprus?',
                answer:
                    'Most small-business designs land between €800 and €2,500 depending on how many unique page layouts you need. Larger sites and e-commerce cost more. We quote a fixed price before we start, so the number you agree is the number you pay.',
            },
            {
                question: 'Do you use templates or design from scratch?',
                answer:
                    'From scratch. Templates are why so many local sites look identical. We design each layout around your actual services and customers, which is also what lets us build the page structure search engines can read properly.',
            },
            {
                question: 'Will I see the design before you build it?',
                answer:
                    'Yes. You approve the design in Figma before a single line of code is written, and two rounds of revisions are included. Nothing goes to build until you are happy with it.',
            },
        ],
        related: ['web-development', 'ecommerce-development', 'seo-services'],
        startingPrice: 800,
    },
    {
        slug: 'web-development',
        name: 'Web Development',
        metaTitle: 'Next.js Web Development Cyprus',
        metaDescription:
            'Next.js web development in Cyprus. Fast, secure, search-engine-friendly websites and web apps engineered by a qualified computer engineer, not assembled from plugins.',
        h1: 'Web Development in Cyprus',
        intro:
            'We build websites the way software is meant to be built — with Next.js, TypeScript and a real engineering process. That means pages that load in under a second, code you actually own, and none of the plugin sprawl that makes WordPress sites slow, fragile and expensive to fix.',
        primaryKeyword: 'web development Cyprus',
        included: [
            'Next.js and TypeScript — the stack behind Nike, TikTok and Notion',
            'Server-rendered pages so Google indexes everything instantly',
            'Core Web Vitals tuned before launch, not after',
            'Hosting on a global edge network, included in the first year',
            'Version-controlled code, handed to you at the end',
            'Contact forms, bookings and integrations wired up properly',
        ],
        idealFor: [
            'Businesses replacing a slow WordPress site',
            'Companies needing custom functionality an off-the-shelf builder cannot do',
            'Anyone who has been quoted a monthly fee just to edit their own text',
        ],
        faqs: [
            {
                question: 'Why Next.js instead of WordPress?',
                answer:
                    'Speed, security and cost. A Next.js site typically loads several times faster than an equivalent WordPress build, has no plugin vulnerabilities to patch, and costs almost nothing to host. Since Google uses page speed as a ranking signal, that gap shows up directly in your search position.',
            },
            {
                question: 'Can I edit the content myself afterwards?',
                answer:
                    'Yes. We can connect a headless CMS so you edit text and images from a simple dashboard, no developer needed. If you would rather we handle updates, that is covered by a support plan.',
            },
            {
                question: 'How long does development take?',
                answer:
                    'A business website is typically 2–4 weeks from approved design to launch. Web applications and e-commerce take longer — we give you a dated timeline before starting and tell you immediately if anything threatens it.',
            },
        ],
        related: ['web-design', 'ecommerce-development', 'website-maintenance'],
        startingPrice: 1200,
    },
    {
        slug: 'seo-services',
        name: 'SEO Services',
        metaTitle: 'SEO Services Cyprus',
        metaDescription:
            'SEO services in Cyprus that get you found by customers ready to buy. Technical audits, on-page optimisation and content built for Cyprus search intent.',
        h1: 'SEO Services in Cyprus',
        intro:
            'Ranking in Cyprus is a different game to ranking globally. The search volumes are smaller, the competition is thinner, and the businesses that win are the ones that cover their subject properly. We do the technical work, the on-page work and the content plan that gets you there.',
        primaryKeyword: 'SEO services Cyprus',
        included: [
            'Full technical audit — crawlability, indexation, Core Web Vitals',
            'Keyword research grounded in real Cyprus search demand',
            'Title, meta and heading optimisation across every page',
            'Structured data so you qualify for rich results',
            'Internal linking that spreads authority to your money pages',
            'Monthly reporting in plain English, not a 40-page PDF',
        ],
        idealFor: [
            'Businesses invisible beyond page two for their own service terms',
            'Sites that were built pretty but never built to rank',
            'Companies paying for ads because organic traffic never arrived',
        ],
        faqs: [
            {
                question: 'How long does SEO take to work in Cyprus?',
                answer:
                    'Technical fixes can move rankings within weeks. Competitive terms like "web design Cyprus" typically take three to six months of consistent work. Anyone promising page one in 30 days is either targeting terms nobody searches or is about to get you penalised.',
            },
            {
                question: 'Do you guarantee first-page rankings?',
                answer:
                    'No, and neither should anyone else — Google does not sell guarantees. What we do guarantee is the work: the audit, the fixes, the content and the reporting, all documented so you can see exactly what changed and what it moved.',
            },
            {
                question: 'Can you do SEO on a site you did not build?',
                answer:
                    'Yes. We audit what you have, fix what is fixable, and tell you honestly if the platform itself is the ceiling. Sometimes the fastest SEO win is a rebuild — we will say so rather than bill you monthly to work around it.',
            },
        ],
        related: ['local-seo', 'content-writing', 'web-development'],
        startingPrice: 350,
    },
    {
        slug: 'local-seo',
        name: 'Local SEO',
        metaTitle: 'Local SEO Cyprus | Map Pack',
        metaDescription:
            'Local SEO for Cyprus businesses. Rank in the Google map pack in Limassol, Nicosia, Larnaca and Paphos so nearby customers find you first.',
        h1: 'Local SEO for Cyprus Businesses',
        intro:
            'When someone in Limassol searches "dentist near me", three businesses appear in the map pack and everyone else is invisible. Local SEO is the work that puts you in those three — a properly built Google Business Profile, consistent citations across Cyprus directories, and location pages that actually say something.',
        primaryKeyword: 'local SEO Cyprus',
        included: [
            'Google Business Profile setup, verification and optimisation',
            'Citation building across Cyprus business directories',
            'NAP consistency audit — name, address, phone, everywhere',
            'LocalBusiness structured data on your site',
            'Review generation strategy that does not annoy customers',
            'Location landing pages for each area you serve',
        ],
        idealFor: [
            'Clinics, salons, garages, restaurants and trades',
            'Businesses with a physical location or a defined service area',
            'Anyone whose competitors appear on the map and they do not',
        ],
        faqs: [
            {
                question: 'What is the Google map pack?',
                answer:
                    'The block of three local businesses with a map that appears above the normal results for location-based searches. It captures the majority of clicks on mobile, which is where most "near me" searches happen. Getting into it is usually the highest-return SEO work a local business can do.',
            },
            {
                question: 'Do I need a physical address in Cyprus?',
                answer:
                    'For the map pack, yes — Google verifies a real address, though you can hide it publicly if you serve customers at their location rather than yours. Without one you can still rank in normal organic results for location terms, which we optimise for either way.',
            },
            {
                question: 'How do you get more Google reviews?',
                answer:
                    'We set up a short review link and the right moment to send it — usually straight after you have delivered something the customer is happy about. We never buy reviews; Google detects them and the penalty costs far more than the reviews were worth.',
            },
        ],
        related: ['seo-services', 'web-design', 'google-ads'],
        startingPrice: 250,
    },
    {
        slug: 'ecommerce-development',
        name: 'E-Commerce Development',
        metaTitle: 'E-Commerce Development Cyprus',
        metaDescription:
            'E-commerce websites for Cyprus businesses. Fast online stores with local payment gateways, VAT handling and product pages built to rank and convert.',
        h1: 'E-Commerce Website Development in Cyprus',
        intro:
            'An online store lives or dies on two numbers: how fast it loads and how many visitors reach checkout. We build stores that load instantly, handle Cyprus VAT and local payment providers correctly, and have product pages structured so Google can show your prices and stock directly in search results.',
        primaryKeyword: 'ecommerce website Cyprus',
        included: [
            'Product, category and checkout flows designed for conversion',
            'Local payment gateway integration (JCC, Viva, Stripe, Revolut)',
            'Cyprus VAT and shipping rules configured correctly',
            'Product structured data for rich results in Google',
            'Inventory, order and customer management dashboard',
            'Abandoned-cart recovery and email integration',
        ],
        idealFor: [
            'Retailers moving from a physical shop to online sales',
            'Brands currently selling only through Instagram DMs',
            'Stores on a slow platform losing customers at checkout',
        ],
        faqs: [
            {
                question: 'Which payment methods work in Cyprus?',
                answer:
                    'We typically integrate JCC or Viva Wallet for local card payments, plus Stripe or Revolut Business for international customers. We can also add bank transfer and cash on delivery, which still convert well for parts of the Cyprus market.',
            },
            {
                question: 'Can you migrate my existing store?',
                answer:
                    'Yes — products, customers, orders and, critically, your URLs. We map every old URL to its new equivalent with 301 redirects so you keep the rankings you already earned. Migrations that skip this step are the most common way stores lose traffic overnight.',
            },
            {
                question: 'How do you handle VAT?',
                answer:
                    'Cyprus VAT is configured at product level with the correct rates, and EU cross-border rules are applied automatically based on the customer country. Invoices are generated with the details your accountant needs.',
            },
        ],
        related: ['web-development', 'seo-services', 'website-maintenance'],
        startingPrice: 2500,
    },
    {
        slug: 'google-ads',
        name: 'Google Ads',
        metaTitle: 'Google Ads Management Cyprus',
        metaDescription:
            'Google Ads management for Cyprus businesses. Search campaigns targeted at local buyers, built to lower cost per lead rather than burn budget on clicks.',
        h1: 'Google Ads Management in Cyprus',
        intro:
            'Google Ads works in Cyprus precisely because the market is small — cost per click is a fraction of what agencies in London or Berlin pay. The catch is that a badly structured account burns that advantage in a week. We build campaigns around buying intent, not vanity impressions.',
        primaryKeyword: 'Google Ads Cyprus',
        included: [
            'Keyword and competitor research for your local market',
            'Campaign structure built around buying intent, not broad reach',
            'Landing pages designed to convert the traffic you pay for',
            'Conversion tracking wired to real leads, not page views',
            'Negative keyword lists that stop wasted spend',
            'Monthly reporting on cost per lead, not cost per click',
        ],
        idealFor: [
            'Businesses that need leads this month, not in six months',
            'Services with a clear, high-value customer enquiry',
            'Companies testing a new offer before investing in SEO',
        ],
        faqs: [
            {
                question: 'What budget do I need for Google Ads in Cyprus?',
                answer:
                    'Most local campaigns become meaningful at around €300–€500 per month in ad spend. Below that there is not enough data to optimise. Cyprus click costs are low enough that this buys real volume in most service categories.',
            },
            {
                question: 'Should I do Google Ads or SEO?',
                answer:
                    'Ads for speed, SEO for cost. Ads produce leads the day they switch on but stop the day you stop paying; SEO takes months but keeps working. Most businesses we work with run ads while SEO builds, then reduce ad spend as organic traffic takes over.',
            },
            {
                question: 'Do you charge a percentage of ad spend?',
                answer:
                    'No. We charge a flat management fee, so we have no incentive to push your budget higher than it needs to be. Your ad spend goes to Google in full.',
            },
        ],
        related: ['meta-ads', 'local-seo', 'web-design'],
        startingPrice: 300,
    },
    {
        slug: 'meta-ads',
        name: 'Facebook & Instagram Ads',
        metaTitle: 'Facebook & Instagram Ads Cyprus',
        metaDescription:
            'Facebook and Instagram ads management in Cyprus. Creative and targeting built for local audiences, measured on leads and sales rather than likes.',
        h1: 'Facebook & Instagram Ads in Cyprus',
        intro:
            'Meta ads reach people who were not searching for you yet — which is most of your market. In Cyprus, where audience sizes are small enough that you can genuinely reach everyone who matters, the difference between profitable and wasteful is entirely down to creative and targeting discipline.',
        primaryKeyword: 'Facebook ads Cyprus',
        included: [
            'Audience research and lookalike building from your customer data',
            'Ad creative — graphics, short video and copy — produced in-house',
            'Meta Pixel and Conversions API set up correctly',
            'Retargeting sequences for visitors who did not convert',
            'Continuous creative testing, not one ad left running for months',
            'Reporting tied to sales and enquiries',
        ],
        idealFor: [
            'Visual businesses — beauty, hospitality, retail, fitness, property',
            'Brands launching a new product or location',
            'Businesses with an existing customer list to build lookalikes from',
        ],
        faqs: [
            {
                question: 'Do Facebook ads still work in Cyprus?',
                answer:
                    'Yes, particularly for visual and impulse-led categories. Cyprus audiences are small, so frequency climbs quickly and creative fatigue is the main risk — which is why we rotate creative continuously rather than leaving one ad running until it stops working.',
            },
            {
                question: 'Do you make the ad creative?',
                answer:
                    'Yes. Graphics, short-form video and copy are produced in-house and included in the management fee. If you have brand assets we work within them; if you do not, we build a simple set for you.',
            },
            {
                question: 'How do you measure results?',
                answer:
                    'On leads, bookings or sales — tracked through the Meta Pixel and the Conversions API so results survive iOS tracking restrictions. Reach and engagement are reported, but they are not what we optimise towards.',
            },
        ],
        related: ['google-ads', 'content-writing', 'local-seo'],
        startingPrice: 300,
    },
    {
        slug: 'content-writing',
        name: 'Content & Copywriting',
        metaTitle: 'SEO Content Writing Cyprus',
        metaDescription:
            'SEO content writing for Cyprus businesses. Articles and website copy that answer real customer questions, build authority and bring in steady organic traffic.',
        h1: 'SEO Content & Copywriting',
        intro:
            'Content is how you rank for the hundreds of questions your customers ask before they are ready to buy. We write pages and articles that answer those questions properly — specific to Cyprus, useful enough to be read by a human, and structured so Google can quote them.',
        primaryKeyword: 'SEO content writing Cyprus',
        included: [
            'Keyword and question research from real search data',
            'Website copy that states what you do without the marketing fog',
            'Long-form articles built to rank and to be genuinely useful',
            'Heading structure and internal links planned per article',
            'Content refreshes for pages that have slipped in rankings',
            'A publishing calendar you can actually keep up with',
        ],
        idealFor: [
            'Businesses whose site has five pages and nothing to rank with',
            'Professional services competing on expertise',
            'Companies that want to stop paying for every visitor',
        ],
        faqs: [
            {
                question: 'How often should I publish?',
                answer:
                    'Consistency beats volume. One genuinely thorough article a month, sustained for a year, outperforms twelve thin posts published in one week and then abandoned. We would rather write you six excellent pages than sixty forgettable ones.',
            },
            {
                question: 'Do you use AI to write the content?',
                answer:
                    'We use it as a research and drafting aid, but every page is written, verified and edited by a person who knows your business. Unedited AI output reads like everyone else and, more practically, gets facts about your services wrong.',
            },
            {
                question: 'Will content actually bring me customers?',
                answer:
                    'It brings you people who are researching, not people ready to buy today — which is why it works alongside ads rather than instead of them. The compounding effect is the point: an article written this year is still bringing in traffic in three years.',
            },
        ],
        related: ['seo-services', 'meta-ads', 'local-seo'],
        startingPrice: 200,
    },
    {
        slug: 'website-maintenance',
        name: 'Website Maintenance',
        metaTitle: 'Website Maintenance Cyprus',
        metaDescription:
            'Website maintenance and support in Cyprus. Security monitoring, updates, backups and performance checks so your site keeps working and keeps ranking.',
        h1: 'Website Maintenance & Support in Cyprus',
        intro:
            'A website is not a thing you finish; it is a thing you run. Dependencies age, forms silently break, hosting changes, and Core Web Vitals drift. We keep yours monitored, updated and fast, and we fix things before you find out from a customer.',
        primaryKeyword: 'website maintenance Cyprus',
        included: [
            'Uptime monitoring with alerts before your customers notice',
            'Security patching and dependency updates',
            'Automated off-site backups with tested restores',
            'Monthly Core Web Vitals and broken-link checks',
            'Content updates — text, images, prices, opening hours',
            'A named person who answers, not a ticket queue',
        ],
        idealFor: [
            'Businesses without an in-house technical person',
            'Sites where a broken contact form means lost revenue',
            'Anyone whose last developer disappeared',
        ],
        faqs: [
            {
                question: 'What happens if my site goes down?',
                answer:
                    'We are alerted automatically, usually before you are. Depending on your plan we begin work within a few hours during business days, and same-day on priority plans. Backups mean the worst case is restoring yesterday, not rebuilding.',
            },
            {
                question: 'Do you maintain sites you did not build?',
                answer:
                    'Yes, once we have audited it. We will tell you upfront if the existing build has problems that make it expensive to support, and what it would cost to fix versus rebuild.',
            },
            {
                question: 'Is hosting included?',
                answer:
                    'For sites we build, the first year of edge hosting is included and thereafter it is a small annual cost — usually far below traditional Cyprus hosting. For existing sites we can either manage your current host or migrate you.',
            },
        ],
        related: ['web-development', 'seo-services', 'web-design'],
        startingPrice: 90,
    },
];

export function getService(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
