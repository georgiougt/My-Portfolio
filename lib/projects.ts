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
];

export const categories = ['All', 'Healthcare', 'Services', 'Fintech', 'Education'];

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
