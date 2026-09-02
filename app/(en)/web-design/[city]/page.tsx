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
import { locations, getLocation } from '@/lib/locations';
import { services } from '@/lib/services';
import {
    ORGANIZATION_ID,
    abs,
    breadcrumbSchema,
    faqSchema,
    graph,
    jsonLdProps,
} from '@/lib/seo';
import { alternatesFor, locationBase } from '@/lib/i18n';
import { greekLocationSlugFor } from '@/lib/locations.el';

export function generateStaticParams() {
    return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const location = getLocation(city);
    if (!location) return { title: 'Location Not Found' };

    return {
        title: location.metaTitle,
        description: location.metaDescription,
        keywords: [
            `web design ${location.city}`,
            `web development ${location.city}`,
            `website design ${location.city}`,
            `SEO ${location.city}`,
        ],
        alternates: {
            canonical: `/web-design/${location.slug}`,
            languages: (() => {
                const el = greekLocationSlugFor(location.slug);
                return el
                    ? alternatesFor({
                          en: `${locationBase.en}/${location.slug}`,
                          el: `${locationBase.el}/${el}`,
                      })
                    : undefined;
            })(),
        },
        openGraph: {
            type: 'website',
            title: `${location.metaTitle} | Stellar Reach Solutions`,
            description: location.metaDescription,
            url: `/web-design/${location.slug}`,
        },
    };
}

export default async function LocationPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const location = getLocation(city);
    if (!location) notFound();

    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: `Web Design ${location.city}`, path: `/web-design/${location.slug}` },
    ];

    const others = locations.filter((l) => l.slug !== location.slug);

    const schema = graph(
        breadcrumbSchema(crumbs),
        {
            '@type': 'Service',
            '@id': `${abs(`/web-design/${location.slug}`)}#service`,
            name: `Web Design in ${location.city}`,
            description: location.metaDescription,
            url: abs(`/web-design/${location.slug}`),
            serviceType: 'Web Design',
            provider: { '@id': ORGANIZATION_ID },
            areaServed: {
                '@type': 'City',
                name: location.city,
                alternateName: location.cityGreek,
                containedInPlace: { '@type': 'Country', name: 'Cyprus' },
            },
        },
        faqSchema(location.faqs)
    );

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar
                locale="en"
                altHref={
                    greekLocationSlugFor(location.slug)
                        ? `${locationBase.el}/${greekLocationSlugFor(location.slug)}`
                        : undefined
                }
            />

            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-3xl">
                    <Breadcrumbs items={crumbs} />

                    <Reveal>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            <MapPin className="h-3.5 w-3.5" />
                            {location.city} · {location.cityGreek}
                        </span>
                        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                            <span className="text-gradient">{location.h1}</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            {location.intro}
                        </p>
                        <div className="mt-8">
                            <Button asChild variant="gradient">
                                <Link href="/contact">
                                    Talk to us about your {location.city} project
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>

                {/* Market notes — the genuinely local content that separates this
                    from a doorway page. */}
                <Reveal className="mx-auto mt-20 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        What the {location.city} market looks like online
                    </h2>
                    <ul className="mt-6 space-y-4">
                        {location.marketNotes.map((note) => (
                            <li key={note} className="flex items-start gap-3">
                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                    {note}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Industries */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Industries we build for in {location.city}
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {location.industries.map((industry) => (
                            <Card key={industry} className="p-5">
                                <p className="text-sm text-muted-foreground">{industry}</p>
                            </Card>
                        ))}
                    </div>
                </Reveal>

                {/* Areas — long-tail "near me" coverage */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Areas we cover
                    </h2>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {location.areas.map((area) => (
                            <span
                                key={area}
                                className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </Reveal>

                {/* Services available here — links every city page to every service */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Services available in {location.city}
                    </h2>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/50 hover:text-primary"
                            >
                                {service.name}
                            </Link>
                        ))}
                    </div>
                </Reveal>

                {/* FAQs */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {location.city} questions
                    </h2>
                    <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                        {location.faqs.map((faq) => (
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

                {/* Sibling cities */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <p className="text-sm text-muted-foreground">
                        We also work in{' '}
                        {others.map((other, i) => (
                            <span key={other.slug}>
                                <Link
                                    href={`/web-design/${other.slug}`}
                                    className="text-primary hover:underline"
                                >
                                    {other.city}
                                </Link>
                                {i < others.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                        .
                    </p>
                </Reveal>
            </div>

            <CTA />
            <Footer />
        </main>
    );
}
