import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Plus, Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/effects/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { adsLocations, adsLocationBase, getAdsLocation } from '@/lib/adsLocations';
import { getLocation } from '@/lib/locations';
import { getService } from '@/lib/services';
import {
    ORGANIZATION_ID,
    abs,
    breadcrumbSchema,
    faqSchema,
    graph,
    jsonLdProps,
} from '@/lib/seo';

/** Only the cities in lib/adsLocations.ts exist — anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
    return adsLocations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const location = getAdsLocation(city);
    if (!location) return { title: 'Location Not Found' };

    const path = `${adsLocationBase}/${location.slug}`;

    return {
        title: location.metaTitle,
        description: location.metaDescription,
        keywords: [
            `Google Ads ${location.city}`,
            `Google Ads agency ${location.city}`,
            `Google Ads management ${location.city}`,
            `PPC ${location.city}`,
        ],
        // English-only for now, so no hreflang: a pair pointing at a Greek URL
        // that does not exist is worse than declaring nothing.
        alternates: { canonical: path },
        openGraph: {
            type: 'website',
            title: `${location.metaTitle} | Stellar Reach Solutions`,
            description: location.metaDescription,
            url: path,
        },
    };
}

export default async function AdsLocationPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const location = getAdsLocation(city);
    if (!location) notFound();

    const path = `${adsLocationBase}/${location.slug}`;
    const service = getService('google-ads');
    const webDesignCity = getLocation(location.slug);
    const others = adsLocations.filter((l) => l.slug !== location.slug);

    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Google Ads', path: '/services/google-ads' },
        { name: location.city, path },
    ];

    const schema = graph(
        breadcrumbSchema(crumbs),
        {
            '@type': 'Service',
            '@id': `${abs(path)}#service`,
            name: `Google Ads Management in ${location.city}`,
            description: location.metaDescription,
            url: abs(path),
            serviceType: 'Google Ads Management',
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
            <Navbar locale="en" />

            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-3xl">
                    <Breadcrumbs items={crumbs} />

                    <Reveal>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            <MapPin className="h-3.5 w-3.5" />
                            Google Ads · {location.city} · {location.cityGreek}
                        </span>
                        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                            <span className="text-gradient">{location.h1}</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            {location.intro}
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Button asChild variant="gradient">
                                <Link href="/contact">
                                    Talk to us about Google Ads in {location.city}
                                </Link>
                            </Button>
                            {service && (
                                <span className="text-sm text-muted-foreground">
                                    Management from{' '}
                                    <strong className="text-foreground">
                                        €{service.startingPrice.toLocaleString('en-GB')}
                                    </strong>{' '}
                                    · flat fee, not a share of your spend
                                </span>
                            )}
                        </div>
                    </Reveal>
                </div>

                {/* The local auction — what makes this city different to advertise in. */}
                <Reveal className="mx-auto mt-20 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        How {location.city} searches — and what it means for your ads
                    </h2>
                    <ul className="mt-6 space-y-4">
                        {location.landscape.map((note) => (
                            <li key={note} className="flex items-start gap-3">
                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                    {note}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Campaigns by sector */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Google Ads campaigns we build for {location.city} businesses
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {location.campaigns.map((campaign) => (
                            <Card key={campaign.sector} className="p-5">
                                <h3 className="font-display text-base font-semibold text-foreground">
                                    {campaign.sector}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {campaign.approach}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Reveal>

                {/* Language and spelling — the part a non-local agency gets wrong. */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        The keywords {location.city} actually types
                    </h2>
                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                        {location.language.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {location.language.variants.map((variant) => (
                            <span
                                key={variant}
                                className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
                            >
                                {variant}
                            </span>
                        ))}
                    </div>
                </Reveal>

                {/* Where budget leaks */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Where {location.city} ad budgets leak
                    </h2>
                    <div className="mt-6 space-y-4">
                        {location.leaks.map((leak) => (
                            <div
                                key={leak.title}
                                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                            >
                                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <div>
                                    <h3 className="font-display text-base font-semibold text-foreground">
                                        {leak.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {leak.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Published results — rendered only when real ones exist. */}
                {location.proof && location.proof.length > 0 && (
                    <Reveal className="mx-auto mt-16 max-w-3xl">
                        <h2 className="font-display text-2xl font-bold sm:text-3xl">
                            Results in {location.city}
                        </h2>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {location.proof.map((item) => (
                                <Card key={item.client} className="p-5">
                                    <h3 className="font-display text-base font-semibold text-foreground">
                                        {item.client}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {item.result}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </Reveal>
                )}

                {/* FAQs — matched by FAQPage structured data above */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Google Ads in {location.city} — common questions
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

                {/* Related pages — ties the city page into the service and location trees */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Goes further with
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        <Link
                            href="/services/google-ads"
                            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                        >
                            <span className="font-display text-base font-semibold text-foreground group-hover:text-primary">
                                Google Ads management in Cyprus
                            </span>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                What is included, and how we report.
                            </p>
                            <ArrowRight className="mt-3 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                        </Link>
                        {webDesignCity && (
                            <Link
                                href={`/web-design/${webDesignCity.slug}`}
                                className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                            >
                                <span className="font-display text-base font-semibold text-foreground group-hover:text-primary">
                                    Web design in {webDesignCity.city}
                                </span>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    Landing pages that convert the clicks you pay for.
                                </p>
                                <ArrowRight className="mt-3 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                            </Link>
                        )}
                        <Link
                            href="/services/local-seo"
                            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                        >
                            <span className="font-display text-base font-semibold text-foreground group-hover:text-primary">
                                Local SEO and the map pack
                            </span>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                The free listings that sit beside your ads.
                            </p>
                            <ArrowRight className="mt-3 h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Reveal>

                {/* Sibling cities */}
                {others.length > 0 && (
                    <Reveal className="mx-auto mt-16 max-w-3xl">
                        <p className="text-sm text-muted-foreground">
                            We also manage Google Ads in{' '}
                            {others.map((other, i) => (
                                <span key={other.slug}>
                                    <Link
                                        href={`${adsLocationBase}/${other.slug}`}
                                        className="text-primary hover:underline"
                                    >
                                        {other.city}
                                    </Link>
                                    {i < others.length - 1 ? ', ' : ''}
                                </span>
                            ))}{' '}
                            and for businesses across Cyprus.
                        </p>
                    </Reveal>
                )}
            </div>

            <CTA />
            <Footer />
        </main>
    );
}
