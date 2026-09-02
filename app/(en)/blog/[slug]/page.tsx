import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Reveal } from '@/components/effects/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { posts, getPost, sortedPosts, type Block } from '@/lib/posts';
import { getService } from '@/lib/services';
import { ORGANIZATION_ID, abs, breadcrumbSchema, graph, jsonLdProps } from '@/lib/seo';

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return { title: 'Article Not Found' };

    return {
        title: post.metaTitle ?? post.title,
        description: post.description,
        keywords: post.tags,
        alternates: { canonical: `/blog/${post.slug}` },
        openGraph: {
            type: 'article',
            title: post.title,
            description: post.description,
            url: `/blog/${post.slug}`,
            publishedTime: post.published,
            modifiedTime: post.updated ?? post.published,
            authors: [post.author],
            tags: post.tags,
        },
    };
}

/** Renders one content block. Kept here so heading levels stay consistent. */
function renderBlock(block: Block, i: number) {
    switch (block.type) {
        case 'h2':
            return (
                <h2
                    key={i}
                    className="mt-12 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                    {block.text}
                </h2>
            );
        case 'h3':
            return (
                <h3
                    key={i}
                    className="mt-8 font-display text-lg font-semibold text-foreground"
                >
                    {block.text}
                </h3>
            );
        case 'p':
            return (
                <p key={i} className="mt-5 leading-relaxed text-muted-foreground">
                    {block.text}
                </p>
            );
        case 'ul':
            return (
                <ul key={i} className="mt-5 space-y-3">
                    {block.items.map((item) => (
                        <li
                            key={item}
                            className="relative pl-6 leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            );
        case 'ol':
            return (
                <ol key={i} className="mt-5 list-decimal space-y-3 pl-6 marker:text-primary">
                    {block.items.map((item) => (
                        <li key={item} className="leading-relaxed text-muted-foreground">
                            {item}
                        </li>
                    ))}
                </ol>
            );
        case 'quote':
            return (
                <blockquote
                    key={i}
                    className="mt-8 border-l-2 border-primary pl-6 text-lg font-light italic leading-relaxed text-foreground"
                >
                    {block.text}
                </blockquote>
            );
    }
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Insights', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` },
    ];

    const relatedServices = post.relatedServices
        .map((s) => getService(s))
        .filter((s): s is NonNullable<typeof s> => Boolean(s));

    const moreReading = sortedPosts()
        .filter((p) => p.slug !== post.slug)
        .slice(0, 2);

    const schema = graph(breadcrumbSchema(crumbs), {
        '@type': 'BlogPosting',
        '@id': `${abs(`/blog/${post.slug}`)}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.published,
        dateModified: post.updated ?? post.published,
        inLanguage: 'en',
        wordCount: post.body.reduce(
            (n, b) =>
                n +
                ('text' in b
                    ? b.text.split(/\s+/).length
                    : b.items.join(' ').split(/\s+/).length),
            0
        ),
        keywords: post.tags.join(', '),
        articleSection: post.category,
        author: {
            '@type': 'Person',
            name: post.author,
            url: abs('/about'),
        },
        publisher: { '@id': ORGANIZATION_ID },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': abs(`/blog/${post.slug}`),
        },
    });

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar />

            <article className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-3xl">
                    <Breadcrumbs items={crumbs} />

                    <Reveal>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
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

                        <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                            <span className="text-gradient">{post.title}</span>
                        </h1>

                        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                            {post.description}
                        </p>

                        <p className="mt-6 border-t border-border pt-6 text-sm text-muted-foreground">
                            By{' '}
                            <Link href="/about" className="text-foreground hover:text-primary">
                                {post.author}
                            </Link>
                            {' '}— Founder & Lead Engineer, Stellar Reach Solutions
                        </p>
                    </Reveal>

                    <div className="mt-4">{post.body.map(renderBlock)}</div>

                    {/* Funnel from the article into commercial pages */}
                    <div className="mt-16 rounded-2xl border border-border bg-card p-7">
                        <h2 className="font-display text-lg font-semibold">
                            Services related to this article
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Keeps crawlers moving between articles */}
                    <div className="mt-10">
                        <h2 className="font-display text-lg font-semibold">Keep reading</h2>
                        <ul className="mt-4 space-y-3">
                            {moreReading.map((other) => (
                                <li key={other.slug}>
                                    <Link
                                        href={`/blog/${other.slug}`}
                                        className="text-sm text-primary hover:underline"
                                    >
                                        {other.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>

            <CTA />
            <Footer />
        </main>
    );
}
