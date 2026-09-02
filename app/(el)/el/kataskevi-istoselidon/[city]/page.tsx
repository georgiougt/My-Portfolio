import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Plus, Check } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/effects/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { locationsEl, getLocationByGreekSlug } from '@/lib/locations.el';
import { servicesElOrdered } from '@/lib/services.el';
import { alternatesFor, staticRoutes, serviceBase, locationBase } from '@/lib/i18n';
import {
    ORGANIZATION_ID,
    abs,
    breadcrumbSchema,
    faqSchema,
    graph,
    jsonLdProps,
} from '@/lib/seo';
import { t, greekCityForms } from '@/lib/ui';

const s = t('el');

export function generateStaticParams() {
    return Object.values(locationsEl).map((el) => ({ city: el.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const found = getLocationByGreekSlug(city);
    if (!found) return { title: 'Η περιοχή δεν βρέθηκε' };
    const { location, el } = found;

    return {
        title: el.metaTitle,
        description: el.metaDescription,
        keywords: [
            `κατασκευή ιστοσελίδων ${el.city}`,
            `σχεδιασμός ιστοσελίδων ${el.city}`,
            `SEO ${el.city}`,
        ],
        alternates: {
            canonical: `${locationBase.el}/${el.slug}`,
            languages: alternatesFor({
                en: `${locationBase.en}/${location.slug}`,
                el: `${locationBase.el}/${el.slug}`,
            }),
        },
        openGraph: {
            type: 'website',
            locale: 'el_CY',
            title: `${el.metaTitle} | Stellar Reach Solutions`,
            description: el.metaDescription,
            url: `${locationBase.el}/${el.slug}`,
        },
    };
}

export default async function GreekLocationPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const found = getLocationByGreekSlug(city);
    if (!found) notFound();
    const { location, el } = found;

    // Greek inflects place names in running text, so headings use the genitive
    // or locative form rather than the nominative.
    const forms = greekCityForms[el.slug];
    const genitive = forms?.genitive ?? el.city;
    const locative = forms?.locative ?? el.city;

    const crumbs = [
        { name: s.breadcrumb.home, path: staticRoutes.home.el },
        { name: s.breadcrumb.services, path: staticRoutes.services.el },
        { name: `Ιστοσελίδες ${el.city}`, path: `${locationBase.el}/${el.slug}` },
    ];

    const others = Object.values(locationsEl).filter((l) => l.slug !== el.slug);

    const schema = graph(
        breadcrumbSchema(crumbs),
        {
            '@type': 'Service',
            '@id': `${abs(`${locationBase.el}/${el.slug}`)}#service`,
            name: `Κατασκευή ιστοσελίδων ${locative}`,
            description: el.metaDescription,
            url: abs(`${locationBase.el}/${el.slug}`),
            serviceType: 'Κατασκευή Ιστοσελίδων',
            inLanguage: 'el-CY',
            provider: { '@id': ORGANIZATION_ID },
            areaServed: {
                '@type': 'City',
                name: el.city,
                alternateName: location.city,
                containedInPlace: { '@type': 'Country', name: 'Κύπρος' },
            },
        },
        faqSchema(el.faqs)
    );

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar locale="el" altHref={`${locationBase.en}/${location.slug}`} />

            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-3xl">
                    <Breadcrumbs items={crumbs} />

                    <Reveal>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            <MapPin className="h-3.5 w-3.5" />
                            {el.city} · {location.city}
                        </span>
                        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                            <span className="text-gradient">{el.h1}</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            {el.intro}
                        </p>
                        <div className="mt-8">
                            <Button asChild variant="gradient">
                                <Link href={staticRoutes.contact.el}>
                                    {s.location.cta(locative)}
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>

                <Reveal className="mx-auto mt-20 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {s.location.marketHeading(genitive)}
                    </h2>
                    <ul className="mt-6 space-y-4">
                        {el.marketNotes.map((note) => (
                            <li key={note} className="flex items-start gap-3">
                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                    {note}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {s.location.industriesHeading(locative)}
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {el.industries.map((industry) => (
                            <Card key={industry} className="p-5">
                                <p className="text-sm text-muted-foreground">{industry}</p>
                            </Card>
                        ))}
                    </div>
                </Reveal>

                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {s.location.areasHeading}
                    </h2>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {el.areas.map((area) => (
                            <span
                                key={area}
                                className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </Reveal>

                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {s.location.servicesHeading(locative)}
                    </h2>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {servicesElOrdered.map(({ el: svc }) => (
                            <Link
                                key={svc.slug}
                                href={`${serviceBase.el}/${svc.slug}`}
                                className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/50 hover:text-primary"
                            >
                                {svc.name}
                            </Link>
                        ))}
                    </div>
                </Reveal>

                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {s.location.faqHeading(genitive)}
                    </h2>
                    <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                        {el.faqs.map((faq) => (
                            <details key={faq.question} className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base font-medium">{faq.question}</h3>
                                    <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
                                </summary>
                                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </Reveal>

                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <p className="text-sm text-muted-foreground">
                        {s.location.alsoWorkIn}{' '}
                        {others.map((other, i) => (
                            <span key={other.slug}>
                                <Link
                                    href={`${locationBase.el}/${other.slug}`}
                                    className="text-primary hover:underline"
                                >
                                    {greekCityForms[other.slug]?.genitive ?? other.city}
                                </Link>
                                {i < others.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                        .
                    </p>
                </Reveal>
            </div>

            <CTA locale="el" />
            <Footer locale="el" />
        </main>
    );
}
