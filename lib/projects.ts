export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    category: string;
    image: string;
    link: string;
    year: string;
    services: string[];
    /** The client's situation / problem we set out to solve. */
    challenge: string;
    /** How we approached the design & build. */
    approach: string;
    /** What was delivered. Edit freely; add real metrics where you have them. */
    deliverables: string[];
};

/**
 * Single source of truth for portfolio projects + case studies.
 * The case-study copy below is editable marketing copy derived from each
 * project — refine it and add real results/metrics where you have them.
 */
export const projects: Project[] = [
    {
        id: 4,
        slug: 'dr-savvas-savvoulas',
        title: 'Dr. Savvas Savvoulas',
        description: 'Paediatrician & Family Physician website with appointment booking.',
        category: 'Healthcare',
        image: '/projects/dr-savvas.png',
        link: 'https://georgiougt.github.io/Doctor-Website/',
        year: '2024',
        services: ['Web Design', 'Web Development', 'Appointment Booking'],
        challenge:
            'A respected paediatrician needed a calm, trustworthy online presence that reassured parents and made it effortless to request an appointment without phone-tag.',
        approach:
            'We designed a clean, friendly interface with clear service information and a simple booking flow, prioritising readability and a warm, professional tone that fits a family practice.',
        deliverables: [
            'Mobile-first responsive design',
            'Online appointment request flow',
            'Clear services & information architecture',
            'Fast, accessible pages',
        ],
    },
    {
        id: 5,
        slug: 'neon-wash',
        title: 'Neon Wash',
        description: 'Premium car detailing booking platform with dark aesthetic.',
        category: 'Services',
        image: '/projects/neon-wash.png',
        link: 'https://neon-carwash.vercel.app/',
        year: '2024',
        services: ['Web Design', 'Web Development', 'Booking System'],
        challenge:
            'A premium detailing brand wanted a website that felt as high-end as its service and let customers book a slot online instead of over the phone.',
        approach:
            'We leaned into a bold dark aesthetic with neon accents to signal premium quality, then built a streamlined booking experience that converts visitors into reservations.',
        deliverables: [
            'Striking dark, premium brand design',
            'Online booking platform',
            'Service & pricing presentation',
            'Optimised for mobile conversions',
        ],
    },
    {
        id: 6,
        slug: 'jdm-carwash',
        title: 'JDM Carwash',
        description: 'Japanese detailed machines. Premium auto detailing in Limassol.',
        category: 'Services',
        image: '/projects/jdm-wash.png',
        link: 'https://jdm-carwash.vercel.app/',
        year: '2024',
        services: ['Web Design', 'Web Development', 'Branding'],
        challenge:
            'A Limassol detailing studio with a strong JDM identity needed a site that captured its enthusiast culture while still booking everyday customers.',
        approach:
            'We built a bold, image-led design around the JDM theme, with clear calls-to-action and a booking path that works for both enthusiasts and first-time visitors.',
        deliverables: [
            'Bold themed brand experience',
            'Booking & enquiry flow',
            'Local SEO foundations',
            'Responsive across devices',
        ],
    },
    {
        id: 7,
        slug: 'kintsugi',
        title: 'Kintsugi',
        description: 'Financial analytics dashboard with real-time transaction tracking.',
        category: 'Fintech',
        image: '/projects/fintech-dashboard.png',
        link: 'https://fin-tech-dashboard.vercel.app/',
        year: '2025',
        services: ['Web App Development', 'UI/UX Design', 'Data Visualisation'],
        challenge:
            'The goal was a polished fintech dashboard that turns dense transaction data into something a user can read at a glance and trust.',
        approach:
            'We designed a clear information hierarchy with real-time data views and clean charts, focusing on legibility, performance and a confident, modern UI.',
        deliverables: [
            'Real-time analytics dashboard',
            'Interactive data visualisations',
            'Component-driven UI system',
            'Responsive web-app layout',
        ],
    },
    {
        id: 8,
        slug: 'fitcore-gym',
        title: 'FitCore Gym',
        description: 'Modern gym website with membership plans and class schedules.',
        category: 'Services',
        image: '/projects/fitcore.png',
        link: 'https://fitcore-gym.web.app/',
        year: '2024',
        services: ['Web Design', 'Web Development'],
        challenge:
            'A modern gym needed a high-energy site that showcased membership tiers and class schedules and pushed visitors to sign up.',
        approach:
            'We built an energetic, conversion-focused design with clear membership comparison, schedule visibility and prominent join CTAs throughout.',
        deliverables: [
            'Membership plans & comparison',
            'Class schedule presentation',
            'Conversion-focused CTAs',
            'Mobile-first responsive design',
        ],
    },
    {
        id: 9,
        slug: 'pharmacy-petros-petridis',
        title: 'Pharmacy Petros Petridis',
        description:
            'Your Trusted Neighborhood Pharmacy in Limassol. Personalized care and expert guidance.',
        category: 'Healthcare',
        image: '/projects/pharmacy.png',
        link: 'https://georgiougt.github.io/Pharmacy/',
        year: '2024',
        services: ['Web Design', 'Web Development', 'Local SEO'],
        challenge:
            'A trusted neighbourhood pharmacy in Limassol wanted an online presence that reflected its personal care and helped locals find and reach it.',
        approach:
            'We created a warm, reassuring design with clear services, opening hours and contact details, backed by local SEO so nearby customers can find it easily.',
        deliverables: [
            'Welcoming, trust-led design',
            'Services & contact information',
            'Local SEO optimisation',
            'Fully responsive layout',
        ],
    },
    {
        id: 10,
        slug: 'nerouppos-barber-shop',
        title: 'Nerouppos Barber Shop',
        description:
            'Sharp Cuts. Clean Fades. Fresh Confidence. Traditional barbering with modern precision.',
        category: 'Services',
        image: '/projects/barber.png',
        link: 'https://georgiougt.github.io/Barber/',
        year: '2024',
        services: ['Web Design', 'Web Development', 'Branding'],
        challenge:
            'A barbershop blending tradition with modern precision needed a site that looked the part and made booking a cut simple.',
        approach:
            'We crafted a confident, masculine brand design with strong imagery and a frictionless path to book an appointment or find the shop.',
        deliverables: [
            'Confident brand-led design',
            'Booking & location flow',
            'Gallery of work',
            'Mobile-first responsive build',
        ],
    },
    {
        id: 11,
        slug: 'diamantides-yachting',
        title: 'Diamantides Yachting',
        description:
            'Exclusive yacht chartering and luxury maritime services in Cyprus, presenting a premium fleet with online booking inquiries.',
        category: 'Services',
        image: '/projects/diamantides.jpg',
        link: 'https://georgiougt.github.io/Diamantides/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Luxury Branding'],
        challenge:
            'A luxury yacht charter business needed a website as premium as its fleet, presenting vessels beautifully and capturing high-value booking enquiries.',
        approach:
            'We built an elegant, image-forward experience with a refined typographic system and a clear enquiry flow designed for an affluent, international audience.',
        deliverables: [
            'Premium luxury brand design',
            'Fleet showcase & galleries',
            'Online booking enquiries',
            'Responsive, fast-loading pages',
        ],
    },
    {
        id: 12,
        slug: 'tofrontistirio',
        title: 'Tofrontistirio',
        description:
            'Bespoke tutoring center management and student performance tracking platform, optimizing academic scheduling and learning analytics.',
        category: 'Education',
        image: '/projects/tofrontistirio.png',
        link: 'https://tofrontistirio.com/',
        year: '2025',
        services: ['Web App Development', 'UI/UX Design', 'Platform Engineering'],
        challenge:
            'A tutoring centre needed more than a website — a platform to manage scheduling and track student performance, replacing scattered manual processes.',
        approach:
            'We designed and engineered a bespoke management platform with clean dashboards for scheduling and learning analytics, built to scale with the business.',
        deliverables: [
            'Custom management platform',
            'Scheduling & analytics dashboards',
            'Student performance tracking',
            'Scalable, maintainable architecture',
        ],
    },
    {
        id: 13,
        slug: 'maison-de-beaute',
        title: 'Maison de Beauté',
        description: 'Haute coiffure, Japanese head spa, Russian manicures, and bespoke aesthetics atelier in Limassol.',
        category: 'Services',
        image: '/projects/beauty-salon.png',
        link: 'https://georgiougt.github.io/Beauty-Salon/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'VIP Appointment Booking', 'Luxury Branding'],
        challenge:
            'A high-end beauty and aesthetics sanctuary needed a serene digital presence reflecting its private studio atmosphere and enabling VIP clients to explore bespoke treatments and reserve appointments seamlessly.',
        approach:
            'We crafted an editorial luxury experience featuring warm minimalist aesthetics, detailed treatment menus for Japanese head spa and Russian manicures, an atelier lookbook, and a streamlined reservation inquiry flow.',
        deliverables: [
            'Editorial luxury brand aesthetic',
            'Interactive treatment menu & lookbook',
            'VIP appointment reservation flow',
            'Mobile-first responsive architecture',
        ],
    },
    {
        id: 14,
        slug: 'veloce-auto-exchange',
        title: 'Veloce Auto Exchange',
        description: 'Exotic supercar and luxury automotive exchange platform with certified multi-point inspection.',
        category: 'Services',
        image: '/projects/car-marketplace.png',
        link: 'https://georgiougt.github.io/Car-Marketplace/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Marketplace UI', 'Inventory Showcase'],
        challenge:
            'A premier Mediterranean supercar showroom required a state-of-the-art exchange platform to showcase multi-million-euro exotics and classics with verified provenance, escrow protection, and private consignment inquiries.',
        approach:
            'We engineered a stealth-dark, high-performance automotive showroom with interactive telemetry specs, provenance verification indicators, concierge delivery information, and discreet viewing inquiry gates.',
        deliverables: [
            'High-octane supercar digital showroom',
            'Detailed technical specs & chassis verification',
            'Private consignment & viewing workflows',
            'Fully responsive across all display formats',
        ],
    },
    {
        id: 15,
        slug: 'origin-artisan-roasters',
        title: 'Origin Artisan Roasters',
        description: 'Single-origin specialty coffee roastery and tasting bar celebrating direct-trade micro-lots.',
        category: 'Hospitality',
        image: '/projects/coffee-roastery.png',
        link: 'https://georgiougt.github.io/Coffee-Roastery/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Menu Architecture', 'Brand Storytelling'],
        challenge:
            'An artisanal micro-roastery needed an evocative digital destination to showcase direct-trade single-origin harvests, educate coffee connoisseurs on flavor profiles and roast profiles, and drive tasting bar reservations.',
        approach:
            'We designed a tactile, warm aesthetic with sensory origin profiles, elevation and processing details, roasting science storytelling, and an integrated reservation flow for tasting flights.',
        deliverables: [
            'Sensory single-origin coffee catalog',
            'Roasting science & micro-lot storytelling',
            'Tasting flight reservation experience',
            'Mobile-optimized fluid typography and layout',
        ],
    },
    {
        id: 16,
        slug: 'aura-dental-studio',
        title: 'Aura Dental Studio',
        description: 'Aesthetic & implant dentistry clinic specializing in Swiss porcelain veneers and anxiety-free care.',
        category: 'Healthcare',
        image: '/projects/dentist-office.png',
        link: 'https://georgiougt.github.io/Dentist-Office/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Patient Onboarding', 'Healthcare SEO'],
        challenge:
            'An aesthetic dental clinic wanted to eliminate patient anxiety and showcase world-class cosmetic transformations—such as biocompatible implants and porcelain veneers—in a reassuring, modern format.',
        approach:
            'We developed an architectural, serene website emphasizing anxiety-free sensory suites, before-and-after smile portfolios, transparent procedure breakdowns, and a friendly online consultation request form.',
        deliverables: [
            'Serene, trust-building dental clinic UI',
            'Cosmetic procedure showcase & smile gallery',
            'Frictionless online consultation scheduler',
            'Local healthcare SEO architecture',
        ],
    },
    {
        id: 17,
        slug: 'vanguard-cardiovascular',
        title: 'Vanguard Cardiovascular & Longevity',
        description: 'Precision heart health and preventative longevity institute using AI CT angiography and advanced lipidomics.',
        category: 'Healthcare',
        image: '/projects/doctor-cardiology.png',
        link: 'https://georgiougt.github.io/Doctor-Cardiology/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Clinical UI/UX', 'Patient Intake'],
        challenge:
            'A cutting-edge cardiology and longevity institute needed to communicate advanced preventative diagnostics—including photon-counting coronary CT and ApoB sub-fractionation—clearly to health-conscious individuals.',
        approach:
            'We built a precision clinical interface presenting diagnostic programs, physician qualifications, physiological biomarker tracking, and a secure cardiovascular screening intake portal.',
        deliverables: [
            'Clinical diagnostic program architecture',
            'Physician credentials & technology showcase',
            'Confidential screening intake workflow',
            'Accessible, high-performance responsive layout',
        ],
    },
    {
        id: 18,
        slug: 'lumiere-dermatology',
        title: 'Lumière Dermatology',
        description: 'Advanced medical and aesthetic dermatology clinic providing laser resurfacing and collagen therapies.',
        category: 'Healthcare',
        image: '/projects/doctor-dermatology.png',
        link: 'https://georgiougt.github.io/Doctor-Dermatology/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Medical Aesthetics UI', 'Appointment Booking'],
        challenge:
            'A medical aesthetics dermatology clinic wanted to unify medical skin health with luxury cosmetic procedures, demonstrating scientific rigor alongside a welcoming patient atmosphere.',
        approach:
            'We created a luminous, editorial-grade clinical design with intuitive categorisation for laser resurfacing, medical mole mapping, and injectables, paired with easy private consultation booking.',
        deliverables: [
            'Refined aesthetic dermatology design',
            'Comprehensive clinical treatment directory',
            'Private consultation booking workflow',
            'Responsive layout optimized for conversion',
        ],
    },
    {
        id: 19,
        slug: 'apex-orthopedics',
        title: 'Apex Orthopedics & Spine Center',
        description: 'Robotic joint reconstruction, sports medicine surgery, and ultra-endoscopic spine rehabilitation.',
        category: 'Healthcare',
        image: '/projects/doctor-orthopedics.png',
        link: 'https://georgiougt.github.io/Doctor-Orthopedics/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Fast-Track Booking', 'Sports Medicine UI'],
        challenge:
            'A premier orthopedic and spine surgery group required a platform highlighting robotic surgical precision, accelerated recovery pathways, and rapid clinical evaluations for competitive athletes and patients.',
        approach:
            'We created a high-energy clinical web experience detailing robotic joint arthroplasty, endoscopic spine options, recovery timelines, and a fast-track triage appointment scheduler.',
        deliverables: [
            'High-performance orthopedic center portal',
            'Specialized surgical program breakdowns',
            'Fast-track sports triage intake system',
            'Cross-device responsive experience',
        ],
    },
    {
        id: 20,
        slug: 'vance-and-sterling',
        title: 'Vance & Sterling',
        description: 'Corporate law, cross-border M&A, private wealth counsel, and commercial litigation.',
        category: 'Corporate',
        image: '/projects/law-firm.png',
        link: 'https://georgiougt.github.io/Law-Firm/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Corporate Identity', 'Confidential Inquiries'],
        challenge:
            'A top-tier commercial law firm advising international corporations and family offices required a distinguished web presence projecting institutional authority, confidentiality, and global cross-border capabilities.',
        approach:
            'We crafted a stately, dark-navy and warm-gold design with comprehensive practice area overviews, partner credentials, corporate transaction milestones, and confidential case evaluation inquiries.',
        deliverables: [
            'Stately corporate legal brand identity',
            'Practice area guides & transactional scope',
            'Confidential case evaluation request portal',
            'Ultra-fast, accessible corporate architecture',
        ],
    },
    {
        id: 21,
        slug: 'aura-prime-estates',
        title: 'Aura Prime Estates',
        description: 'Ultra-luxury Mediterranean seafront villas, architectural icons, and private marina penthouses.',
        category: 'Real Estate',
        image: '/projects/real-estate.png',
        link: 'https://georgiougt.github.io/Real-Estate/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Luxury Real Estate UI', 'Property Showcase'],
        challenge:
            'An ultra-prime Mediterranean real estate advisory handling architectural trophy properties needed an immersive showcase worthy of international high-net-worth investors and family offices.',
        approach:
            'We built an editorial property showcase featuring cinema-grade visuals, architectural specifications, location amenities, and a discreet VIP viewing request flow.',
        deliverables: [
            'Architectural luxury estate showcase',
            'Curated villa & penthouse specification sheets',
            'Discreet VIP viewing inquiry system',
            'Fluid, high-resolution responsive layout',
        ],
    },
    {
        id: 22,
        slug: 'cellar-1888',
        title: 'Cellar 1888',
        description: 'Intimate natural wine cellar, rare vintage Grand Crus, vinyl acoustics, and artisan tapas in Limassol.',
        category: 'Hospitality',
        image: '/projects/wine-bar.png',
        link: 'https://georgiougt.github.io/Wine-Bar/',
        year: '2025',
        services: ['Web Design', 'Web Development', 'Table Reservations', 'Sommelier Menu Architecture'],
        challenge:
            'A subterranean natural wine and vinyl bar in Limassol Old Town needed a digital home capturing its moody candlelit atmosphere, rare bottle list, and rotating sommelier tasting flights.',
        approach:
            'We engineered an atmospheric, candlelit web experience with warm ember accents, live cellar catalog highlights, tasting flights, and a seamless evening table reservation flow.',
        deliverables: [
            'Candlelight & vinyl nocturnal brand aesthetic',
            'Curated natural wine and tasting flight menu',
            'Integrated evening table booking platform',
            'Mobile-first responsive design',
        ],
    },

    // Projects 23–37 are static sites hosted from /public/sites/<folder> on
    // this domain rather than on a separate host. Those URLs are sent with a
    // noindex header (see next.config.ts); the /projects/<slug> pages are the
    // ones meant to rank. Their forms are front-end only.
    {
        id: 23,
        slug: 'aurel-restaurant',
        title: 'Aurel',
        description: 'Wood-fire kitchen and wine room, built around the tasting menu and the table request.',
        category: 'Hospitality',
        image: '/projects/aurel.jpg',
        link: '/sites/restaurant/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Restaurant websites tend to bury the two things a guest wants — what is on the menu this week and how to get a table — under a slideshow. The goal was a fine-dining site that answers both within one scroll.',
        approach:
            'A charcoal, bone and copper palette with a serif display face carries the mood, while the structure stays plain: the story, the seasonal plates, then the table. Motion is limited to slow reveals so the food photography does the work.',
        deliverables: [
            'Editorial dark design with a serif and sans pairing',
            'Seasonal menu section with tabbed courses',
            'Table request form with inline confirmation',
            'Lightweight static build with no framework',
        ],
    },
    {
        id: 24,
        slug: 'meridian-automobiles',
        title: 'Meridian',
        description: 'Independent dealer in performance and collector cars, with a deliberately short inventory.',
        category: 'Services',
        image: '/projects/meridian.jpg',
        link: '/sites/car-dealership/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Most dealership sites are a search box over hundreds of listings. The goal here was the opposite: a specialist with six cars, where each one has to feel inspected and worth the journey to see it.',
        approach:
            'Graphite and chalk with a single signal-lime accent, a condensed grotesque for headlines and a monospaced face for the figures. Each car gets a specification sheet rather than a sales paragraph, and the only call to action is a private viewing.',
        deliverables: [
            'Curated inventory with per-car specification sheets',
            'Sourcing, finance and delivery services section',
            'Private viewing request form',
            'Technical, monospaced data styling throughout',
        ],
    },
    {
        id: 25,
        slug: 'morrow-coffee',
        title: 'Morrow',
        description: 'Neighbourhood coffee roaster and bakery, covering the café menu, beans for home and a subscription.',
        category: 'Hospitality',
        image: '/projects/morrow.jpg',
        link: '/sites/coffee-shop/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'A roaster-café is three businesses on one page: somewhere to sit, a shop for beans, and a subscription. The goal was a site where each of the three is easy to find without the page feeling like a catalogue.',
        approach:
            'Oat cream, espresso and terracotta with a soft serif give it the warmth of the room itself. The page moves from the menu to the farmers to the beans, with the roasting process told as a short sequence instead of a wall of text.',
        deliverables: [
            'Café menu, origin stories and bean shop sections',
            'From-cherry-to-cup process sequence',
            'Two-location details with opening hours',
            'Bean subscription sign-up form',
        ],
    },
    {
        id: 26,
        slug: 'solstice-travel',
        title: 'Solstice',
        description: 'Tailor-made travel studio that sells conversations with a planner, not packaged tours.',
        category: 'Hospitality',
        image: '/projects/solstice.jpg',
        link: '/sites/travel-agency/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'A bespoke travel designer cannot compete with booking engines on price or choice. The goal was a site that makes the planner the product, and makes starting a conversation feel easier than running a search.',
        approach:
            'Sand, deep teal and amber with an elegant serif for headlines. Destinations are shown as places the team keeps returning to, one journey is told in full as a worked example, and the enquiry form asks where your mind keeps wandering rather than for dates and a budget.',
        deliverables: [
            'Destination showcase with filterable regions',
            'Three-step planning process section',
            'Featured itinerary told as a full story',
            'Traveller stories and open-ended enquiry form',
        ],
    },
    {
        id: 27,
        slug: 'arden-vale-estates',
        title: 'Arden Vale',
        description: 'Estate agency dealing in architecturally significant homes, on and off the market.',
        category: 'Real Estate',
        image: '/projects/arden-vale.jpg',
        link: '/sites/real-estate/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Property portals flatten every home into the same grid of thumbnails. The goal was an agency site where a small number of houses are presented with the care of an architecture magazine.',
        approach:
            'Limestone, forest green and brass with a refined display face. Listings are few and large, one house is given a full feature, and the advisory side of the business is put ahead of the listings, where a portal would never put it.',
        deliverables: [
            'Current listings with key facts per home',
            'Full-width feature on a single property',
            'Sales, acquisition and off-market advisory sections',
            'Private viewing request form',
        ],
    },
    {
        id: 28,
        slug: 'lumen-dental',
        title: 'Lumen',
        description: 'Modern dental studio, written for patients who would rather not be there.',
        category: 'Healthcare',
        image: '/projects/lumen.jpg',
        link: '/sites/dental-clinic/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'People put off the dentist out of nerves and fear of the bill. The goal was a clinic site that deals with both honestly: what it will feel like, and what it will cost, before anyone picks up the phone.',
        approach:
            'Mist white, petrol and aqua keep it clinical without feeling cold. A section speaks directly to anxious patients, treatment results can be compared side by side, the fees are published on the page, and the team is shown as people rather than qualifications.',
        deliverables: [
            'Treatment overview across general, cosmetic and orthodontic care',
            'Dedicated section for nervous patients',
            'Before-and-after comparison and published fee guide',
            'Team profiles and appointment request form',
        ],
    },
    {
        id: 29,
        slug: 'hale-and-mercer',
        title: 'Hale & Mercer',
        description: 'Independent law firm advising companies, founders and families.',
        category: 'Corporate',
        image: '/projects/hale-mercer.jpg',
        link: '/sites/law-firm/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Law firm websites tend to list every practice area in the same grave tone and say nothing a client can use. The goal was a firm that sounds like a senior lawyer talking plainly across a table.',
        approach:
            'Ivory, ink navy and claret with a classical serif, set with generous margins like a well-made document. Six disciplines are explained in terms of the business problem behind them, partners are presented as the people you will actually deal with, and insights are kept short.',
        deliverables: [
            'Six practice areas explained in plain language',
            'Partner profiles with direct contact',
            'Short-form briefings section',
            'Confidential enquiry form',
        ],
    },
    {
        id: 30,
        slug: 'tempo-strength-club',
        title: 'Tempo',
        description: 'Coach-led strength and conditioning club with small classes and a free first week.',
        category: 'Services',
        image: '/projects/tempo.jpg',
        link: '/sites/fitness-studio/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Gym sites sell a transformation and hide the timetable and the price. The goal was a club that shows exactly what happens this week and what it costs, and trusts that to be enough.',
        approach:
            'Concrete, black and cobalt with a heavy condensed display face give it the feel of the gym floor. The four ways to train are set out side by side, the weekly timetable is on the page, and membership is one simple table.',
        deliverables: [
            'Four training programmes compared side by side',
            'Weekly class timetable',
            'Facility tour and plain membership pricing',
            'Free first-week sign-up form',
        ],
    },
    {
        id: 31,
        slug: 'blackwood-and-sons',
        title: 'Blackwood & Sons',
        description: 'Third-generation traditional barbershop taking appointments and walk-ins.',
        category: 'Services',
        image: '/projects/blackwood-sons.jpg',
        link: '/sites/barbershop/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'A barbershop with sixty years behind it should not look like a booking app. The goal was a site with the character of the shop itself that still gets someone into a chair in two taps.',
        approach:
            'Bottle green, parchment and mustard with an old-style serif, written in the first person by the owner. The services and prices come first, the history of the room second, and the six barbers are introduced by name.',
        deliverables: [
            'Service and price list',
            'Shop history told in the owner\'s voice',
            'Profiles of the six barbers',
            'Appointment request form with walk-in hours',
        ],
    },
    {
        id: 32,
        slug: 'juniper-veterinary',
        title: 'Juniper',
        description: 'Neighbourhood veterinary clinic for dogs, cats and small pets, open seven days a week.',
        category: 'Healthcare',
        image: '/projects/juniper.jpg',
        link: '/sites/veterinary-clinic/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Choosing a vet is an anxious decision made on behalf of someone who cannot speak. The goal was a clinic site that reassures the owner first and explains the medicine second.',
        approach:
            'Cream, plum and coral with a friendly rounded type family keep it warm without becoming childish. A first visit is walked through step by step, the vets are introduced as people who like the job, and stories from the waiting room stand in for star ratings.',
        deliverables: [
            'Full service list under one roof',
            'Step-by-step guide to a first visit',
            'Vet profiles and client stories',
            'New patient registration form',
        ],
    },
    {
        id: 33,
        slug: 'stillwater-bathhouse',
        title: 'Stillwater',
        description: 'City bathhouse and spa with thermal pools, sauna and treatments in a phone-free space.',
        category: 'Services',
        image: '/projects/stillwater.jpg',
        link: '/sites/spa/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Spa sites usually sell luxury. The goal was a bathhouse that sells a habit instead — warm, cold, rest, repeat — and a site calm enough to feel like the first ten minutes of a visit.',
        approach:
            'Linen, bark and clay with a quiet display serif and a great deal of empty space. The thermal circuit is explained as a simple sequence, treatments are listed without superlatives, and the page is as slow as the motion budget allows.',
        deliverables: [
            'Thermal circuit explained step by step',
            'Massage and facial treatment menu',
            'Single visits and membership options',
            'Visit booking request form',
        ],
    },
    {
        id: 34,
        slug: 'norde-interiors',
        title: 'Norde',
        description: 'Residential interior design studio, led by the work and very little else.',
        category: 'Services',
        image: '/projects/norde.jpg',
        link: '/sites/interior-design/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'A design studio is judged on its taste before a word is read. The goal was a site that gets out of the way of the photographs and still explains how a project actually runs.',
        approach:
            'Paper, soot and olive with one oversized grotesque headline and almost no decoration. Selected projects carry the page, the process is set out in numbered stages, and the enquiry form asks about the home rather than the budget.',
        deliverables: [
            'Selected work gallery with project filters',
            'Numbered project process from first sketch to install',
            'Studio introduction',
            'New project enquiry form',
        ],
    },
    {
        id: 35,
        slug: 'elise-marlow-photography',
        title: 'Elise Marlow',
        description: 'Wedding photographer working in natural light, with all-inclusive pricing on the page.',
        category: 'Services',
        image: '/projects/elise-marlow.jpg',
        link: '/sites/photographer/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Couples compare dozens of wedding photographers in an evening, and most sites hide the price until an email exchange. The goal was a portfolio with a clear voice and nothing held back.',
        approach:
            'Paper, ink and blush with a high-contrast display serif, written in the first person. Three weddings are told as stories, a second gallery is given to the in-between moments, and the packages are published in full.',
        deliverables: [
            'Three featured weddings told as stories',
            'Gallery of candid, unposed moments',
            'All-inclusive package pricing',
            'Date availability enquiry form',
        ],
    },
    {
        id: 36,
        slug: 'ironside-plumbing',
        title: 'Ironside',
        description: 'Local plumbing and heating company, built to turn an emergency search into a call-back.',
        category: 'Services',
        image: '/projects/ironside.jpg',
        link: '/sites/plumbing/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Someone with a burst pipe is on a phone, stressed, and will call the first trade that looks trustworthy. The goal was a site that gets that person to a call-back request without scrolling.',
        approach:
            'White, slate and safety orange with a condensed industrial typeface. The call-back form sits in the hero beside the phone number, the price promise is stated before the services, and the areas covered and customer reviews follow for anyone who wants to check first.',
        deliverables: [
            'Call-back form and click-to-call in the first screen',
            'Emergency, boiler and bathroom service sections',
            'Three-step process and areas covered',
            'Customer review section',
        ],
    },
    {
        id: 37,
        slug: 'wild-fern-florist',
        title: 'Wild Fern',
        description: 'Neighbourhood flower studio with seasonal bouquets, weekly subscriptions and wedding flowers.',
        category: 'Services',
        image: '/projects/wild-fern.jpg',
        link: '/sites/florist/index.html',
        year: '2026',
        services: ['Web Design', 'Web Development', 'Brand Identity'],
        challenge:
            'Online florists show a hundred near-identical arrangements. The goal was a studio that offers four bouquets a season and makes that short list feel like the reason to buy.',
        approach:
            'Cream, petal and berry with an expressive serif and plenty of room around the flowers. The four seasonal bouquets lead, the Friday subscription and wedding work follow, and the page ends with an invitation to visit the shop.',
        deliverables: [
            'Four seasonal bouquets with same-day delivery details',
            'Weekly flower subscription section',
            'Wedding and event flowers section',
            'Order enquiry form and shop details',
        ],
    },
];

export const categories = ['All', 'Healthcare', 'Services', 'Real Estate', 'Hospitality', 'Corporate', 'Fintech', 'Education'];

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
