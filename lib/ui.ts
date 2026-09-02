import type { Locale } from '@/lib/i18n';

/**
 * UI chrome strings — navigation, buttons, section headings, breadcrumb labels.
 * Page *content* lives in the content files (services.el.ts, locations.el.ts);
 * this is only the furniture around it.
 */
export const ui = {
    en: {
        nav: {
            about: 'ABOUT US',
            services: 'SERVICES',
            projects: 'PROJECTS',
            pricing: 'PRICING',
            insights: 'INSIGHTS',
            contact: 'CONTACT',
        },
        breadcrumb: { home: 'Home', services: 'Services' },
        service: {
            eyebrow: 'Service',
            included: "What's included",
            idealFor: 'Who this is for',
            faqSuffix: '— common questions',
            related: 'Often paired with',
            cta: 'Get a fixed quote',
            from: 'From',
            deliveredAcross: (name: string) => `We deliver ${name} across Cyprus —`,
        },
        location: {
            marketHeading: (city: string) => `What the ${city} market looks like online`,
            industriesHeading: (city: string) => `Industries we build for in ${city}`,
            areasHeading: 'Areas we cover',
            servicesHeading: (city: string) => `Services available in ${city}`,
            faqHeading: (city: string) => `${city} questions`,
            cta: (city: string) => `Talk to us about your ${city} project`,
            alsoWorkIn: 'We also work in',
        },
        hub: {
            eyebrow: 'What we do',
            learnMore: 'Learn more',
            whereWeWork: 'Where we work',
            whereWeWorkSub:
                'We are based in Limassol and work with businesses across the island.',
            webDesignIn: (city: string) => `Web design in ${city}`,
        },
        switcher: 'Ελληνικά',
    },
    el: {
        nav: {
            about: 'Η ΕΤΑΙΡΕΙΑ',
            services: 'ΥΠΗΡΕΣΙΕΣ',
            projects: 'ΕΡΓΑ',
            pricing: 'ΤΙΜΕΣ',
            insights: 'ΑΡΘΡΑ',
            contact: 'ΕΠΙΚΟΙΝΩΝΙΑ',
        },
        breadcrumb: { home: 'Αρχική', services: 'Υπηρεσίες' },
        service: {
            eyebrow: 'Υπηρεσία',
            included: 'Τι περιλαμβάνεται',
            idealFor: 'Σε ποιους απευθύνεται',
            faqSuffix: '— συχνές ερωτήσεις',
            related: 'Συνδυάζεται συχνά με',
            cta: 'Ζητήστε σταθερή προσφορά',
            from: 'Από',
            deliveredAcross: (name: string) =>
                `Παρέχουμε ${name.toLowerCase()} σε όλη την Κύπρο —`,
        },
        location: {
            marketHeading: (city: string) => `Πώς είναι η αγορά ${city} στο διαδίκτυο`,
            industriesHeading: (city: string) => `Κλάδοι για τους οποίους χτίζουμε ${city}`,
            areasHeading: 'Περιοχές που καλύπτουμε',
            servicesHeading: (city: string) => `Υπηρεσίες διαθέσιμες ${city}`,
            faqHeading: (city: string) => `Ερωτήσεις για ${city}`,
            cta: (city: string) => `Μιλήστε μας για το έργο σας ${city}`,
            alsoWorkIn: 'Δραστηριοποιούμαστε επίσης σε',
        },
        hub: {
            eyebrow: 'Τι κάνουμε',
            learnMore: 'Μάθετε περισσότερα',
            whereWeWork: 'Πού δραστηριοποιούμαστε',
            whereWeWorkSub:
                'Εδρεύουμε στη Λεμεσό και συνεργαζόμαστε με επιχειρήσεις σε όλο το νησί.',
            webDesignIn: (city: string) => `Κατασκευή ιστοσελίδων ${city}`,
        },
        switcher: 'English',
    },
} as const;

export function t(locale: Locale) {
    return ui[locale];
}

/**
 * Greek city names need a genitive/locative form in running text
 * ("η αγορά Λεμεσού", "υπηρεσίες στη Λεμεσό"). Nominative reads wrong, so the
 * inflected forms are stored explicitly rather than derived.
 */
export const greekCityForms: Record<
    string,
    { nominative: string; genitive: string; locative: string }
> = {
    lemesos: { nominative: 'Λεμεσός', genitive: 'Λεμεσού', locative: 'στη Λεμεσό' },
    lefkosia: { nominative: 'Λευκωσία', genitive: 'Λευκωσίας', locative: 'στη Λευκωσία' },
    larnaka: { nominative: 'Λάρνακα', genitive: 'Λάρνακας', locative: 'στη Λάρνακα' },
    pafos: { nominative: 'Πάφος', genitive: 'Πάφου', locative: 'στην Πάφο' },
};
