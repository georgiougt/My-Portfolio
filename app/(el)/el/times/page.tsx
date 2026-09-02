import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/effects/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { servicesElOrdered } from '@/lib/services.el';
import { alternatesFor, staticRoutes, serviceBase } from '@/lib/i18n';
import { abs, breadcrumbSchema, graph, jsonLdProps } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Τιμές & Πακέτα',
    description:
        'Διαφανείς τιμές για κατασκευή ιστοσελίδων, eshop και SEO στην Κύπρο. Σταθερή τιμή που συμφωνείται πριν ξεκινήσει η δουλειά — χωρίς κρυφές χρεώσεις.',
    alternates: {
        canonical: staticRoutes.pricing.el,
        languages: alternatesFor({
            en: staticRoutes.pricing.en,
            el: staticRoutes.pricing.el,
        }),
    },
};

const crumbs = [
    { name: 'Αρχική', path: staticRoutes.home.el },
    { name: 'Τιμές', path: staticRoutes.pricing.el },
];

const principles = [
    'Σταθερή τιμή, συμφωνημένη πριν ξεκινήσει η δουλειά',
    'Χωρίς κρυφές χρεώσεις και χωρίς δέσμευση σε μηνιαία συνδρομή',
    'Ο κώδικας και ο σχεδιασμός σας ανήκουν με την ολοκλήρωση',
    'Πρώτος χρόνος φιλοξενίας σε δίκτυο edge, χωρίς επιπλέον κόστος',
    'Δύο γύροι αλλαγών στον σχεδιασμό, περιλαμβάνονται',
    'Δωρεάν εκτίμηση και πρόταση, χωρίς υποχρέωση',
];

export default function GreekPricing() {
    const schema = graph(breadcrumbSchema(crumbs), {
        '@type': 'OfferCatalog',
        name: 'Τιμές & Πακέτα',
        url: abs(staticRoutes.pricing.el),
        inLanguage: 'el-CY',
        itemListElement: servicesElOrdered.map(({ service, el }) => ({
            '@type': 'Offer',
            name: el.name,
            url: abs(`${serviceBase.el}/${el.slug}`),
            priceCurrency: 'EUR',
            price: service.startingPrice,
            availability: 'https://schema.org/InStock',
        })),
    });

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar locale="el" altHref={staticRoutes.pricing.en} />

            <div className="container mx-auto px-4 pt-32">
                <Breadcrumbs items={crumbs} />

                <Reveal className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Τιμές
                    </span>
                    <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        <span className="text-gradient">Τιμές & Πακέτα</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                        Οι τιμές παρακάτω είναι ενδεικτικές αφετηρίες ανά υπηρεσία. Η τελική
                        τιμή δίνεται γραπτώς μετά από μια σύντομη συζήτηση για το έργο σας —
                        και δεν αλλάζει μετά.
                    </p>
                </Reveal>

                <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesElOrdered.map(({ service, el }, i) => (
                        <Reveal key={el.slug} delay={i * 0.05}>
                            <Card className="group relative flex h-full flex-col p-6 hover:border-primary/50">
                                <h2 className="font-display text-lg font-semibold text-foreground">
                                    <Link
                                        href={`${serviceBase.el}/${el.slug}`}
                                        className="after:absolute after:inset-0 hover:text-primary"
                                    >
                                        {el.name}
                                    </Link>
                                </h2>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {el.metaDescription}
                                </p>
                                <p className="mt-5 font-display text-2xl font-bold text-foreground">
                                    από €{service.startingPrice.toLocaleString('el-GR')}
                                </p>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mx-auto mt-20 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Πώς τιμολογούμε
                    </h2>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {principles.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10">
                        <Button asChild variant="gradient">
                            <Link href={staticRoutes.contact.el}>
                                Ζητήστε σταθερή προσφορά
                            </Link>
                        </Button>
                    </div>
                </Reveal>
            </div>

            <CTA locale="el" />
            <Footer locale="el" />
        </main>
    );
}
