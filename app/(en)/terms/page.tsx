import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { site } from '@/lib/site';
import { breadcrumbSchema, graph, jsonLdProps } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Terms of Use',
    description:
        'The terms governing use of the Stellar Reach Solutions website, including intellectual property, acceptable use and limitation of liability under Cyprus law.',
    alternates: { canonical: '/terms' },
};

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Terms of Use', path: '/terms' },
];

const LAST_UPDATED = '2 September 2026';

export default function TermsOfUse() {
    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(graph(breadcrumbSchema(crumbs)))} />
            <Navbar />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="mx-auto max-w-3xl">
                    <Breadcrumbs items={crumbs} />

                    <h1 className="font-display text-4xl font-bold tracking-tight">
                        <span className="text-gradient">Terms of Use</span>
                    </h1>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Last updated: {LAST_UPDATED}
                    </p>

                    <div className="mt-10 space-y-8 text-muted-foreground">
                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Agreement
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                By using this website you agree to these terms. If you do not
                                agree with them, please do not use the site. These terms cover use
                                of the website only — work we carry out for clients is governed by
                                a separate written proposal and agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Intellectual property
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                All content on this site — text, design, code, graphics and the{' '}
                                {site.name} name and logo — belongs to us or our licensors. You may
                                view and share it, but you may not copy, republish or reuse it
                                commercially without our written permission.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                Client work shown in our portfolio remains the property of the
                                respective clients and is displayed with their knowledge as
                                examples of our work.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Acceptable use
                            </h2>
                            <p className="mt-3 leading-relaxed">You agree not to:</p>
                            <ul className="mt-4 space-y-2 pl-6 list-disc marker:text-primary">
                                <li>Use the site for any unlawful purpose.</li>
                                <li>
                                    Attempt to gain unauthorised access to the site, its servers or
                                    any connected system.
                                </li>
                                <li>
                                    Introduce malware, or attempt to disrupt or overload the
                                    service.
                                </li>
                                <li>
                                    Scrape or harvest content or contact details for bulk marketing.
                                </li>
                                <li>
                                    Submit false information or another person&apos;s details through
                                    our contact form.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Quotes, prices and content accuracy
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                Prices shown on this site are indicative starting points, not
                                offers. A binding price is only the one set out in a written quote
                                we send you for your specific project. We work to keep the site
                                accurate and current, but we do not warrant that every statement
                                on it is complete or error-free, and nothing here constitutes
                                professional advice for your particular situation.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                External links
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                This site links to third-party websites we do not control. We are
                                not responsible for their content, availability or privacy
                                practices, and a link is not an endorsement.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Limitation of liability
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                To the fullest extent permitted by law, we are not liable for any
                                indirect or consequential loss arising from your use of, or
                                inability to use, this website. Nothing in these terms excludes
                                liability that cannot lawfully be excluded, including liability
                                for death or personal injury caused by negligence, or for fraud.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Governing law
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                These terms are governed by the laws of the Republic of Cyprus,
                                and the courts of Cyprus have exclusive jurisdiction over any
                                dispute arising from them.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Contact
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                Questions about these terms can be sent to{' '}
                                <a
                                    href={`mailto:${site.email}`}
                                    className="text-primary hover:underline"
                                >
                                    {site.email}
                                </a>
                                . See also our{' '}
                                <Link href="/privacy" className="text-primary hover:underline">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
