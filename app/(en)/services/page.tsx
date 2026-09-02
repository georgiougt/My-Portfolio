import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/effects/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import { breadcrumbSchema, graph, jsonLdProps } from '@/lib/seo';
import { alternatesFor, staticRoutes } from '@/lib/i18n';

export const metadata: Metadata = {
    title: 'Services | Web Design & SEO Cyprus',
    description:
        'Web design, Next.js development, e-commerce, SEO, local SEO, Google and Meta ads, content and maintenance for businesses across Cyprus. Fixed prices, no retainer traps.',
    alternates: {
        canonical: '/services',
        languages: alternatesFor({
            en: staticRoutes.services.en,
            el: staticRoutes.services.el,
        }),
    },
    openGraph: {
        title: 'Services | Stellar Reach Solutions',
        description:
            'Web design, development, e-commerce, SEO and advertising for businesses across Cyprus.',
        url: '/services',
    },
};

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
];

export default function ServicesIndex() {
    const schema = graph(
        breadcrumbSchema(crumbs),
        {
            '@type': 'CollectionPage',
            name: 'Services',
            url: 'https://stellar-reach-solutions.com/services',
            description:
                'Web design, development, e-commerce, SEO and advertising services for businesses across Cyprus.',
            hasPart: services.map((s) => ({
                '@type': 'Service',
                name: s.name,
                url: `https://stellar-reach-solutions.com/services/${s.slug}`,
            })),
        }
    );

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar locale="en" altHref={staticRoutes.services.el} />

            <div className="container mx-auto px-4 pt-32">
                <Breadcrumbs items={crumbs} />

                <Reveal className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        What we do
                    </span>
                    <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        <span className="text-gradient">Web Design, Development & SEO in Cyprus</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                        Nine services, one studio, and a fixed price agreed before anything
                        starts. Most Cyprus businesses need two or three of these — pick the
                        ones that solve your problem and ignore the rest.
                    </p>
                </Reveal>

                <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <Reveal key={service.slug} delay={i * 0.05}>
                            {/* `relative` is load-bearing: the heading link below uses
                                after:absolute/after:inset-0 to make the whole card
                                clickable, and without a positioned ancestor that overlay
                                sizes to the page instead of the card. */}
                            <Card className="group relative h-full p-6 hover:border-primary/50">
                                <h2 className="font-display text-xl font-semibold text-foreground">
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="after:absolute after:inset-0 hover:text-primary"
                                    >
                                        {service.name}
                                    </Link>
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {service.metaDescription}
                                </p>
                                <p className="mt-5 text-xs uppercase tracking-[0.15em] text-primary">
                                    From €{service.startingPrice.toLocaleString('en-GB')}
                                </p>
                                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                                    Learn more
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                {/* Location links. Deliberately placed on the services hub so every
                    city page is one click from a well-linked page. */}
                <Reveal className="mx-auto mt-20 max-w-4xl text-center">
                    <h2 className="font-display text-2xl font-bold">Where we work</h2>
                    <p className="mt-3 text-sm text-muted-foreground">
                        We are based in Limassol and work with businesses across the island.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {locations.map((location) => (
                            <Link
                                key={location.slug}
                                href={`/web-design/${location.slug}`}
                                className="rounded-full border border-border px-5 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                            >
                                Web design in {location.city}
                            </Link>
                        ))}
                    </div>
                </Reveal>
            </div>

            <CTA />
            <Footer />
        </main>
    );
}
