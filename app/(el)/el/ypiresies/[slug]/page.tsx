import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Plus, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/effects/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { servicesEl, getServiceByGreekSlug } from '@/lib/services.el';
import { locationsElOrdered } from '@/lib/locations.el';
import { alternatesFor, staticRoutes, serviceBase, locationBase } from '@/lib/i18n';
import {
    breadcrumbSchema,
    faqSchema,
    graph,
    jsonLdProps,
    serviceSchema,
} from '@/lib/seo';
import { t } from '@/lib/ui';

const s = t('el');

export function generateStaticParams() {
    return Object.values(servicesEl).map((el) => ({ slug: el.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const found = getServiceByGreekSlug(slug);
    if (!found) return { title: 'Η υπηρεσία δεν βρέθηκε' };
    const { service, el } = found;

    return {
        title: el.metaTitle,
        description: el.metaDescription,
        keywords: [el.primaryKeyword],
        alternates: {
            canonical: `${serviceBase.el}/${el.slug}`,
            // Both directions declared, so the pair is reciprocal — Google
            // ignores hreflang that only points one way.
            languages: alternatesFor({
                en: `${serviceBase.en}/${service.slug}`,
                el: `${serviceBase.el}/${el.slug}`,
            }),
        },
        openGraph: {
            type: 'website',
            locale: 'el_CY',
            title: `${el.metaTitle} | Stellar Reach Solutions`,
            description: el.metaDescription,
            url: `${serviceBase.el}/${el.slug}`,
        },
    };
}

export default async function GreekServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const found = getServiceByGreekSlug(slug);
    if (!found) notFound();
    const { service, el } = found;

    const crumbs = [
        { name: s.breadcrumb.home, path: staticRoutes.home.el },
        { name: s.breadcrumb.services, path: staticRoutes.services.el },
        { name: el.name, path: `${serviceBase.el}/${el.slug}` },
    ];

    // `related` is stored once on the English record; resolve each to its Greek page.
    const related = service.related
        .map((enSlug) => servicesEl[enSlug])
        .filter((x): x is NonNullable<typeof x> => Boolean(x));

    const schema = graph(
        breadcrumbSchema(crumbs),
        {
            ...serviceSchema({
                name: el.name,
                description: el.metaDescription,
                path: `${serviceBase.el}/${el.slug}`,
                startingPrice: service.startingPrice,
            }),
            inLanguage: 'el-CY',
        },
        faqSchema(el.faqs)
    );

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar locale="el" altHref={`${serviceBase.en}/${service.slug}`} />

            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-3xl">
                    <Breadcrumbs items={crumbs} />

                    <Reveal>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            {s.service.eyebrow}
                        </span>
                        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                            <span className="text-gradient">{el.h1}</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            {el.intro}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Button asChild variant="gradient">
                                <Link href={staticRoutes.contact.el}>{s.service.cta}</Link>
                            </Button>
                            <span className="text-sm text-muted-foreground">
                                {s.service.from}{' '}
                                <strong className="text-foreground">
                                    €{service.startingPrice.toLocaleString('el-GR')}
                                </strong>
                            </span>
                        </div>
                    </Reveal>
                </div>

                <Reveal className="mx-auto mt-20 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {s.service.included}
                    </h2>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {el.included.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {s.service.idealFor}
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {el.idealFor.map((item) => (
                            <Card key={item} className="p-5">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Reveal>

                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {el.name} {s.service.faqSuffix}
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
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {s.service.related}
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                href={`${serviceBase.el}/${r.slug}`}
                                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                            >
                                <span className="font-display text-base font-semibold text-foreground group-hover:text-primary">
                                    {r.name}
                                </span>
                                <ArrowRight className="mt-3 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </Reveal>

                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <p className="text-sm text-muted-foreground">
                        {s.service.deliveredAcross(el.name)}{' '}
                        {locationsElOrdered.map(({ el: loc }, i) => (
                            <span key={loc.slug}>
                                <Link
                                    href={`${locationBase.el}/${loc.slug}`}
                                    className="text-primary hover:underline"
                                >
                                    {loc.city}
                                </Link>
                                {i < locationsElOrdered.length - 1 ? ', ' : ''}
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
