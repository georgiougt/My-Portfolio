import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { HexIcon } from '@/components/ui/HexIcon';
import { Reveal } from '@/components/effects/Reveal';
import { ArrowRight } from 'lucide-react';
import {
    Palette,
    Code2,
    ShoppingCart,
    Search,
    MapPin,
    Target,
    Megaphone,
    PenLine,
    LifeBuoy,
} from 'lucide-react';

/**
 * Homepage service cards. Each one links to its own /services/<slug> landing
 * page — the slugs here must match lib/services.ts, which is the source of
 * truth for the pages themselves. Previously these cards linked nowhere, so
 * nine commercial keywords shared a single "#services" anchor.
 */
const services = [
    {
        slug: 'web-design',
        icon: Palette,
        title: 'Web Design',
        description:
            'Custom, high-performance web design in Cyprus — drawn from scratch around your customers, never a bought template.',
    },
    {
        slug: 'web-development',
        icon: Code2,
        title: 'Web Development',
        description:
            'Next.js and TypeScript builds that load in under a second, cost almost nothing to host, and belong to you.',
    },
    {
        slug: 'ecommerce-development',
        icon: ShoppingCart,
        title: 'E-Commerce',
        description:
            'Online stores with Cyprus payment gateways, correct VAT handling and product pages built to rank and convert.',
    },
    {
        slug: 'seo-services',
        icon: Search,
        title: 'SEO Services',
        description:
            'Technical audits, on-page optimisation and structured data that get you found by customers ready to buy.',
    },
    {
        slug: 'local-seo',
        icon: MapPin,
        title: 'Local SEO',
        description:
            'Google Business Profile, citations and reviews — the work that puts you in the map pack in your city.',
    },
    {
        slug: 'google-ads',
        icon: Target,
        title: 'Google Ads',
        description:
            'Search campaigns built around buying intent, measured on cost per lead rather than cost per click.',
    },
    {
        slug: 'meta-ads',
        icon: Megaphone,
        title: 'Facebook & Instagram Ads',
        description:
            'Scroll-stopping Meta campaigns with creative produced in-house, tracked through to real enquiries.',
    },
    {
        slug: 'content-writing',
        icon: PenLine,
        title: 'Content & Copywriting',
        description:
            'Articles and website copy that answer what your customers actually search for, and keep earning traffic.',
    },
    {
        slug: 'website-maintenance',
        icon: LifeBuoy,
        title: 'Support & Maintenance',
        description:
            'Monitoring, security patching, backups and content updates so the site keeps working and keeps ranking.',
    },
];

export function Services() {
    return (
        <section id="services" className="relative z-10 bg-transparent py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <Reveal className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        What We Do
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything you need to grow online
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                        From a stunning website to the marketing that fills it — we&apos;re your
                        one partner for design, advertising, content and SEO.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <Reveal key={service.slug} delay={(i % 3) * 0.1}>
                                <Card className="group relative h-full p-8 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                                    {/* Hue ramps cyan (185°) → violet (275°) across the nine cards. */}
                                    <HexIcon Icon={Icon} hue={185 + i * 11.25} id={i} />
                                    <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="after:absolute after:inset-0 group-hover:text-primary"
                                        >
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {service.description}
                                    </p>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                                        Learn more
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Card>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                        See all services and pricing
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
