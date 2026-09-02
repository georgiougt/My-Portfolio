import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/effects/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { sortedPosts } from '@/lib/posts';
import { ORGANIZATION_ID, abs, breadcrumbSchema, graph, jsonLdProps } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Insights | Web Design & SEO Cyprus',
    description:
        'Practical, Cyprus-specific advice on web design, development and SEO — real prices, real ranking factors, and straight answers about what works in this market.',
    alternates: { canonical: '/blog' },
    openGraph: {
        title: 'Insights | Stellar Reach Solutions',
        description:
            'Practical, Cyprus-specific advice on web design, development and SEO.',
        url: '/blog',
    },
};

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/blog' },
];

export default function BlogIndex() {
    const all = sortedPosts();

    const schema = graph(breadcrumbSchema(crumbs), {
        '@type': 'Blog',
        '@id': `${abs('/blog')}#blog`,
        name: 'Stellar Reach Insights',
        description:
            'Practical, Cyprus-specific advice on web design, development and SEO.',
        url: abs('/blog'),
        publisher: { '@id': ORGANIZATION_ID },
        blogPost: all.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.published,
            url: abs(`/blog/${post.slug}`),
            author: { '@type': 'Person', name: post.author },
        })),
    });

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar />

            <div className="container mx-auto px-4 pt-32">
                <Breadcrumbs items={crumbs} />

                <Reveal className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Insights
                    </span>
                    <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        <span className="text-gradient">Straight answers about the Cyprus market</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                        What things actually cost here, what actually ranks here, and which
                        advice from international agencies does not apply to an island of a
                        million people.
                    </p>
                </Reveal>

                <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
                    {all.map((post, i) => (
                        <Reveal key={post.slug} delay={i * 0.06}>
                            <Card className="group relative h-full p-7 hover:border-primary/50">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="font-semibold uppercase tracking-[0.15em] text-primary">
                                        {post.category}
                                    </span>
                                    <span aria-hidden="true">·</span>
                                    <time dateTime={post.published}>
                                        {new Date(post.published).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </time>
                                    <span aria-hidden="true">·</span>
                                    <span>{post.readingMinutes} min read</span>
                                </div>

                                <h2 className="mt-4 font-display text-xl font-semibold leading-snug">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="after:absolute after:inset-0 hover:text-primary"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {post.description}
                                </p>

                                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                                    Read article
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>

            <CTA />
            <Footer />
        </main>
    );
}
