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
import { services, getService } from '@/lib/services';
import { locations } from '@/lib/locations';
import {
    breadcrumbSchema,
    faqSchema,
    graph,
    jsonLdProps,
    serviceSchema,
} from '@/lib/seo';
import { alternatesFor, serviceBase } from '@/lib/i18n';
import { greekSlugFor } from '@/lib/services.el';

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) return { title: 'Service Not Found' };

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        keywords: [service.primaryKeyword],
        alternates: {
            canonical: `/services/${service.slug}`,
            // Only declared when a Greek counterpart actually exists — a
            // hreflang pair pointing at a 404 is worse than none.
            languages: (() => {
                const el = greekSlugFor(service.slug);
                return el
                    ? alternatesFor({
                          en: `${serviceBase.en}/${service.slug}`,
                          el: `${serviceBase.el}/${el}`,
                      })
                    : undefined;
            })(),
        },
        openGraph: {
            type: 'website',
            title: `${service.metaTitle} | Stellar Reach Solutions`,
            description: service.metaDescription,
            url: `/services/${service.slug}`,
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) notFound();

    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.name, path: `/services/${service.slug}` },
    ];

    const related = service.related
        .map((s) => getService(s))
        .filter((s): s is NonNullable<typeof s> => Boolean(s));

    const schema = graph(
        breadcrumbSchema(crumbs),
        serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
            startingPrice: service.startingPrice,
        }),
        faqSchema(service.faqs)
    );

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar
                locale="en"
                altHref={
                    greekSlugFor(service.slug)
                        ? `${serviceBase.el}/${greekSlugFor(service.slug)}`
                        : undefined
                }
            />

            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-3xl">
                    <Breadcrumbs items={crumbs} />

                    <Reveal>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Service
                        </span>
                        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                            <span className="text-gradient">{service.h1}</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            {service.intro}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Button asChild variant="gradient">
                                <Link href="/contact">Get a fixed quote</Link>
                            </Button>
                            <span className="text-sm text-muted-foreground">
                                From{' '}
                                <strong className="text-foreground">
                                    €{service.startingPrice.toLocaleString('en-GB')}
                                </strong>
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* What's included */}
                <Reveal className="mx-auto mt-20 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        What&apos;s included
                    </h2>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.included.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Who it's for */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Who this is for
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {service.idealFor.map((item) => (
                            <Card key={item} className="p-5">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Reveal>

                {/* FAQs — matched by FAQPage structured data above */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        {service.name} — common questions
                    </h2>
                    <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                        {service.faqs.map((faq) => (
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

                {/* Related services — internal linking between commercial pages */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">
                        Often paired with
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/services/${r.slug}`}
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

                {/* City links — spreads authority into the location pages */}
                <Reveal className="mx-auto mt-16 max-w-3xl">
                    <p className="text-sm text-muted-foreground">
                        We deliver {service.name.toLowerCase()} across Cyprus —{' '}
                        {locations.map((location, i) => (
                            <span key={location.slug}>
                                <Link
                                    href={`/web-design/${location.slug}`}
                                    className="text-primary hover:underline"
                                >
                                    {location.city}
                                </Link>
                                {i < locations.length - 1 ? ', ' : ''}
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
