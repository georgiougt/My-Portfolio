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
            'The brief was a polished fintech dashboard that turns dense transaction data into something a user can read at a glance and trust.',
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
];

export const categories = ['All', 'Healthcare', 'Services', 'Real Estate', 'Hospitality', 'Corporate', 'Fintech', 'Education'];

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
