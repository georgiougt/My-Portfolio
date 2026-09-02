import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { alternatesFor, staticRoutes } from '@/lib/i18n';
import { breadcrumbSchema, graph, jsonLdProps } from '@/lib/seo';
import { site, whatsappLink } from '@/lib/site';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Επικοινωνία',
    description:
        'Επικοινωνήστε με τη Stellar Reach Solutions για την ιστοσελίδα ή το eshop σας. Κατασκευή ιστοσελίδων στη Λεμεσό και σε όλη την Κύπρο.',
    alternates: {
        canonical: staticRoutes.contact.el,
        languages: alternatesFor({
            en: staticRoutes.contact.en,
            el: staticRoutes.contact.el,
        }),
    },
};

const crumbs = [
    { name: 'Αρχική', path: staticRoutes.home.el },
    { name: 'Επικοινωνία', path: staticRoutes.contact.el },
];

export default function GreekContact() {
    const schema = graph(breadcrumbSchema(crumbs), {
        '@type': 'ContactPage',
        name: 'Επικοινωνία',
        url: 'https://stellar-reach-solutions.com/el/epikoinonia',
        inLanguage: 'el-CY',
    });

    return (
        <main className="min-h-screen bg-transparent pb-20 text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar locale="el" altHref={staticRoutes.contact.en} />

            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-xl">
                    <Breadcrumbs items={crumbs} />

                    <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">
                        <span className="text-gradient">Ας μιλήσουμε</span>
                    </h1>
                    <p className="mb-10 text-center text-muted-foreground">
                        Έχετε ένα έργο στο μυαλό σας; Πείτε μας τι θέλετε να πετύχετε και
                        απαντάμε εντός 24 ωρών.
                    </p>

                    {/* Direct contact routes, above the form — a lot of Cypriot
                        enquiries come by phone or WhatsApp rather than a form. */}
                    <div className="mb-10 grid gap-3 sm:grid-cols-2">
                        <a
                            href={`tel:+${site.phone}`}
                            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/50"
                        >
                            <Phone className="h-4 w-4 shrink-0 text-primary" />
                            {site.phoneDisplay}
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/50"
                        >
                            <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                            WhatsApp
                        </a>
                        <a
                            href={`mailto:${site.email}`}
                            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/50"
                        >
                            <Mail className="h-4 w-4 shrink-0 text-primary" />
                            {site.email}
                        </a>
                        <span className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 shrink-0 text-primary" />
                            Limassol, Cyprus
                        </span>
                    </div>

                    <ContactForm />
                </div>
            </div>

            <Footer locale="el" />
        </main>
    );
}
