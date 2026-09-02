import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/effects/Reveal';
import { servicesElOrdered } from '@/lib/services.el';
import { locationsElOrdered } from '@/lib/locations.el';
import { alternatesFor, staticRoutes, serviceBase, locationBase } from '@/lib/i18n';
import { faqSchema, graph, jsonLdProps } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Κατασκευή Ιστοσελίδων Κύπρος',
    description:
        'Κατασκευή ιστοσελίδων, eshop και SEO στην Κύπρο. Γρήγορες, σύγχρονες ιστοσελίδες με Next.js για επιχειρήσεις σε Λεμεσό, Λευκωσία, Λάρνακα και Πάφο.',
    alternates: {
        canonical: staticRoutes.home.el,
        languages: alternatesFor({
            en: staticRoutes.home.en,
            el: staticRoutes.home.el,
        }),
    },
};

const faqs = [
    {
        question: 'Πόσο κοστίζει μια ιστοσελίδα στην Κύπρο;',
        answer:
            'Εξαρτάται από το μέγεθος και την πολυπλοκότητα. Οι απλές εταιρικές ιστοσελίδες ξεκινούν χαμηλότερα, ενώ τα eshop και οι εφαρμογές κοστίζουν περισσότερο. Συμφωνούμε πάντα σταθερή τιμή από την αρχή — χωρίς εκπλήξεις.',
    },
    {
        question: 'Πόσο χρόνο παίρνει η κατασκευή μιας ιστοσελίδας;',
        answer:
            'Οι περισσότερες εταιρικές ιστοσελίδες θέλουν 2–4 εβδομάδες από την έναρξη μέχρι τη δημοσίευση, ανάλογα με το εύρος και το πόσο γρήγορα λαμβάνουμε το περιεχόμενο και τα σχόλιά σας.',
    },
    {
        question: 'Θα δουλεύει η ιστοσελίδα μου στα κινητά;',
        answer:
            'Απολύτως. Κάθε ιστοσελίδα που κατασκευάζουμε σχεδιάζεται πρώτα για κινητό και είναι πλήρως προσαρμοστική, ώστε να λειτουργεί άψογα σε τηλέφωνα, τάμπλετ και υπολογιστές.',
    },
    {
        question: 'Αναλαμβάνετε το SEO ώστε να με βρίσκουν στη Google;',
        answer:
            'Ναι. Κάθε ιστοσελίδα παραδίδεται με στέρεα βάση SEO — γρήγορη φόρτωση, καθαρό κώδικα, σωστούς τίτλους, περιγραφές και δομημένα δεδομένα, καθώς και χάρτη ιστοσελίδας. Για τοπικές επιχειρήσεις βελτιστοποιούμε επιπλέον για την τοπική αναζήτηση.',
    },
    {
        question: 'Σε ποιον ανήκει η ιστοσελίδα όταν ολοκληρωθεί;',
        answer:
            'Σε εσάς — 100%. Με την ολοκλήρωση και εξόφληση του έργου, η ιστοσελίδα και ο κώδικάς της σας ανήκουν. Μπορούμε επίσης να βοηθήσουμε με φιλοξενία, domain και συντήρηση αν το θέλετε.',
    },
];

export default function GreekHome() {
    const schema = graph(faqSchema(faqs), {
        '@type': 'WebPage',
        name: 'Κατασκευή Ιστοσελίδων Κύπρος',
        url: 'https://stellar-reach-solutions.com/el',
        inLanguage: 'el-CY',
    });

    return (
        <main className="flex min-h-screen flex-col bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar locale="el" altHref={staticRoutes.home.en} />

            {/* Hero */}
            <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden pt-28 pb-16 text-center">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/hero-poster.jpg"
                        aria-hidden="true"
                        className="h-full w-full scale-105 object-cover opacity-40 mix-blend-luminosity"
                    >
                        <source src="/hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071521]/90 via-[#071521]/70 to-[#071521]" />
                <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

                <div className="container relative z-10 mx-auto flex flex-col items-center px-4">
                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                        ΟΤΑΝ Η ΤΑΧΥΤΗΤΑ ΜΕΤΡΑΕΙ, ΕΜΠΙΣΤΕΥΤΕΙΤΕ ΤΗ STELLAR REACH
                    </p>
                    <h1 className="mb-8 max-w-5xl font-display text-4xl font-light uppercase leading-tight tracking-[0.12em] text-white sm:text-5xl md:text-6xl">
                        ΚΑΤΑΣΚΕΥΗ <span className="font-extrabold">ΙΣΤΟΣΕΛΙΔΩΝ</span>
                        <span className="mt-2 block text-xl font-bold tracking-[0.3em] text-cyan-400 sm:text-3xl">
                            ΣΤΗΝ ΚΥΠΡΟ
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        Σχεδιάζουμε και κατασκευάζουμε γρήγορες, σύγχρονες ιστοσελίδες και
                        eshop για κυπριακές επιχειρήσεις — με τεχνολογία Next.js, σταθερή
                        τιμή και κώδικα που σας ανήκει.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button asChild variant="gradient" size="lg">
                            <Link href={staticRoutes.contact.el}>Ζητήστε προσφορά</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href={staticRoutes.services.el}>Δείτε τις υπηρεσίες</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="relative z-10 py-24 sm:py-32">
                <div className="container mx-auto px-4">
                    <Reveal className="mx-auto mb-16 max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Τι κάνουμε
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Ό,τι χρειάζεστε για να μεγαλώσετε online
                        </h2>
                        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                            Από την ιστοσελίδα μέχρι τη διαφήμιση που τη γεμίζει — ένας
                            συνεργάτης για σχεδιασμό, διαφήμιση, περιεχόμενο και SEO.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {servicesElOrdered.map(({ service, el }, i) => (
                            <Reveal key={el.slug} delay={(i % 3) * 0.1}>
                                <Card className="group relative h-full p-8 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                                    <h3 className="font-display text-xl font-semibold text-foreground">
                                        <Link
                                            href={`${serviceBase.el}/${el.slug}`}
                                            className="after:absolute after:inset-0 group-hover:text-primary"
                                        >
                                            {el.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {el.metaDescription}
                                    </p>
                                    <p className="mt-4 text-xs uppercase tracking-[0.15em] text-primary">
                                        Από €{service.startingPrice.toLocaleString('el-GR')}
                                    </p>
                                </Card>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="mt-12 text-center">
                        <Link
                            href={staticRoutes.services.el}
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                            Όλες οι υπηρεσίες και οι τιμές
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Cities */}
            <section className="relative z-10 pb-24">
                <div className="container mx-auto px-4">
                    <Reveal className="mx-auto max-w-4xl text-center">
                        <h2 className="font-display text-2xl font-bold sm:text-3xl">
                            Πού δραστηριοποιούμαστε
                        </h2>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Εδρεύουμε στη Λεμεσό και συνεργαζόμαστε με επιχειρήσεις σε όλο το
                            νησί.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            {locationsElOrdered.map(({ el }) => (
                                <Link
                                    key={el.slug}
                                    href={`${locationBase.el}/${el.slug}`}
                                    className="rounded-full border border-border px-5 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                                >
                                    Ιστοσελίδες {el.city}
                                </Link>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10 pb-24 sm:pb-32">
                <div className="container mx-auto px-4">
                    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Συχνές ερωτήσεις
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Απαντήσεις στα βασικά
                        </h2>
                    </Reveal>

                    <Reveal className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                                    <span>{faq.question}</span>
                                    <Check className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-90" />
                                </summary>
                                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </Reveal>
                </div>
            </section>

            <CTA locale="el" />
            <Footer locale="el" />
        </main>
    );
}
