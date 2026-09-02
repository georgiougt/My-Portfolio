import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/effects/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { servicesElOrdered } from '@/lib/services.el';
import { locationsElOrdered } from '@/lib/locations.el';
import { alternatesFor, staticRoutes, serviceBase, locationBase } from '@/lib/i18n';
import { abs, breadcrumbSchema, graph, jsonLdProps } from '@/lib/seo';
import { t } from '@/lib/ui';

const s = t('el');

export const metadata: Metadata = {
    title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων & SEO',
    description:
        'Σχεδιασμός και κατασκευή ιστοσελίδων, eshop, SEO, τοπικό SEO, Google και Meta ads, περιεχόμενο και συντήρηση για επιχειρήσεις σε όλη την Κύπρο. Σταθερές τιμές.',
    alternates: {
        canonical: staticRoutes.services.el,
        languages: alternatesFor({
            en: staticRoutes.services.en,
            el: staticRoutes.services.el,
        }),
    },
    openGraph: {
        type: 'website',
        locale: 'el_CY',
        title: 'Υπηρεσίες | Stellar Reach Solutions',
        description:
            'Κατασκευή ιστοσελίδων, eshop, SEO και διαφήμιση για επιχειρήσεις σε όλη την Κύπρο.',
        url: staticRoutes.services.el,
    },
};

const crumbs = [
    { name: s.breadcrumb.home, path: staticRoutes.home.el },
    { name: s.breadcrumb.services, path: staticRoutes.services.el },
];

export default function GreekServicesIndex() {
    const schema = graph(breadcrumbSchema(crumbs), {
        '@type': 'CollectionPage',
        name: 'Υπηρεσίες',
        url: abs(staticRoutes.services.el),
        inLanguage: 'el-CY',
        description:
            'Κατασκευή ιστοσελίδων, eshop, SEO και διαφήμιση για επιχειρήσεις σε όλη την Κύπρο.',
        hasPart: servicesElOrdered.map(({ el }) => ({
            '@type': 'Service',
            name: el.name,
            url: abs(`${serviceBase.el}/${el.slug}`),
        })),
    });

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar locale="el" altHref={staticRoutes.services.en} />

            <div className="container mx-auto px-4 pt-32">
                <Breadcrumbs items={crumbs} />

                <Reveal className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {s.hub.eyebrow}
                    </span>
                    <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        <span className="text-gradient">
                            Κατασκευή Ιστοσελίδων & SEO στην Κύπρο
                        </span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                        Εννέα υπηρεσίες, ένα στούντιο, και σταθερή τιμή που συμφωνείται πριν
                        ξεκινήσει οτιδήποτε. Οι περισσότερες κυπριακές επιχειρήσεις
                        χρειάζονται δύο ή τρεις από αυτές — διαλέξτε όσες λύνουν το δικό σας
                        πρόβλημα.
                    </p>
                </Reveal>

                <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesElOrdered.map(({ service, el }, i) => (
                        <Reveal key={el.slug} delay={i * 0.05}>
                            <Card className="group relative h-full p-6 hover:border-primary/50">
                                <h2 className="font-display text-xl font-semibold text-foreground">
                                    <Link
                                        href={`${serviceBase.el}/${el.slug}`}
                                        className="after:absolute after:inset-0 hover:text-primary"
                                    >
                                        {el.name}
                                    </Link>
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {el.metaDescription}
                                </p>
                                <p className="mt-5 text-xs uppercase tracking-[0.15em] text-primary">
                                    {s.service.from} €{service.startingPrice.toLocaleString('el-GR')}
                                </p>
                                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                                    {s.hub.learnMore}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mx-auto mt-20 max-w-4xl text-center">
                    <h2 className="font-display text-2xl font-bold">{s.hub.whereWeWork}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">
                        {s.hub.whereWeWorkSub}
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {locationsElOrdered.map(({ el }) => (
                            <Link
                                key={el.slug}
                                href={`${locationBase.el}/${el.slug}`}
                                className="rounded-full border border-border px-5 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                            >
                                {s.hub.webDesignIn(el.city)}
                            </Link>
                        ))}
                    </div>
                </Reveal>
            </div>

            <CTA locale="el" />
            <Footer locale="el" />
        </main>
    );
}
