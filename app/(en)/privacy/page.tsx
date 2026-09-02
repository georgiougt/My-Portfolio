import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { site } from '@/lib/site';
import { breadcrumbSchema, graph, jsonLdProps } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'How Stellar Reach Solutions collects, uses and protects your personal data, in line with the GDPR and Cyprus data protection law.',
    alternates: { canonical: '/privacy' },
};

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
];

const LAST_UPDATED = '2 September 2026';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <script {...jsonLdProps(graph(breadcrumbSchema(crumbs)))} />
            <Navbar />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="mx-auto max-w-3xl">
                    <Breadcrumbs items={crumbs} />

                    <h1 className="font-display text-4xl font-bold tracking-tight">
                        <span className="text-gradient">Privacy Policy</span>
                    </h1>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Last updated: {LAST_UPDATED}
                    </p>

                    <div className="mt-10 space-y-8 text-muted-foreground">
                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Who we are
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                {site.name} is a web design and development studio based in
                                Limassol, Cyprus. For the purposes of the General Data
                                Protection Regulation (GDPR) and Cyprus data protection law, we
                                are the data controller for personal data collected through this
                                website. You can reach us at{' '}
                                <a
                                    href={`mailto:${site.email}`}
                                    className="text-primary hover:underline"
                                >
                                    {site.email}
                                </a>
                                {' '}or {site.phoneDisplay}.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                What data we collect
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                We collect only what we need to respond to you and to run the
                                site:
                            </p>
                            <ul className="mt-4 space-y-2 pl-6 list-disc marker:text-primary">
                                <li>
                                    <strong className="text-foreground">
                                        Information you give us.
                                    </strong>{' '}
                                    Your name, email address, phone number and the contents of
                                    your message when you use our contact form, email us, or
                                    message us on WhatsApp.
                                </li>
                                <li>
                                    <strong className="text-foreground">Technical data.</strong>{' '}
                                    Standard server log information such as IP address, browser
                                    type and the pages you visited, collected by our hosting
                                    provider for security and reliability.
                                </li>
                                <li>
                                    <strong className="text-foreground">Analytics data.</strong>{' '}
                                    Aggregated, non-identifying information about how the site is
                                    used, where analytics are enabled.
                                </li>
                            </ul>
                            <p className="mt-4 leading-relaxed">
                                We do not collect payment card details through this website, and
                                we do not knowingly collect data from anyone under 16.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Why we use it, and on what legal basis
                            </h2>
                            <ul className="mt-4 space-y-2 pl-6 list-disc marker:text-primary">
                                <li>
                                    To reply to your enquiry and provide a quote — on the basis of
                                    taking steps at your request before entering a contract.
                                </li>
                                <li>
                                    To deliver and support projects you have engaged us for — on
                                    the basis of performing that contract.
                                </li>
                                <li>
                                    To keep the site secure and functioning — on the basis of our
                                    legitimate interest in running a safe service.
                                </li>
                                <li>
                                    To send you marketing, if you have asked us to — on the basis
                                    of your consent, which you can withdraw at any time.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Who we share it with
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                We do not sell your data. We share it only with service providers
                                who help us operate — our hosting provider, our email provider,
                                and analytics or form-handling services where used. Each is bound
                                by a data processing agreement. Where a provider is outside the
                                EEA, transfers are covered by the European Commission&apos;s
                                Standard Contractual Clauses.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                How long we keep it
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                Enquiries that do not become projects are kept for up to 24
                                months. Records relating to clients are kept for as long as the
                                relationship lasts and then for the period required by Cyprus tax
                                and accounting law. Server logs are retained for a short period by
                                our hosting provider.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Cookies
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                This site uses only the cookies and local storage strictly
                                necessary for it to function — for example, remembering whether
                                you prefer the light or dark theme. If we add analytics or
                                marketing cookies, we will ask for your consent first and update
                                this policy. You can clear or block cookies in your browser
                                settings at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Your rights
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                Under the GDPR you have the right to access your data, correct it,
                                have it deleted, restrict or object to how we use it, and receive
                                it in a portable format. To exercise any of these, email us at{' '}
                                <a
                                    href={`mailto:${site.email}`}
                                    className="text-primary hover:underline"
                                >
                                    {site.email}
                                </a>
                                . We will respond within one month.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                If you believe we have handled your data improperly, you may
                                complain to the Office of the Commissioner for Personal Data
                                Protection of the Republic of Cyprus.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-semibold text-foreground">
                                Changes to this policy
                            </h2>
                            <p className="mt-3 leading-relaxed">
                                We update this policy when our practices change. The date at the
                                top always reflects the current version. Our{' '}
                                <Link href="/terms" className="text-primary hover:underline">
                                    Terms of Use
                                </Link>{' '}
                                cover the rules for using this website.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
