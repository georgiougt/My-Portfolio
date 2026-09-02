import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { alternatesFor, staticRoutes } from '@/lib/i18n';
import { breadcrumbSchema, graph, jsonLdProps, abs } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Η Εταιρεία',
    description:
        'Η Stellar Reach Solutions είναι στούντιο κατασκευής ιστοσελίδων στην Κύπρο, ιδρυμένο από τον ηλεκτρολόγο μηχανικό και μηχανικό υπολογιστών Γιώργο Γεωργίου.',
    alternates: {
        canonical: staticRoutes.about.el,
        languages: alternatesFor({
            en: staticRoutes.about.en,
            el: staticRoutes.about.el,
        }),
    },
};

const crumbs = [
    { name: 'Αρχική', path: staticRoutes.home.el },
    { name: 'Η Εταιρεία', path: staticRoutes.about.el },
];

const timeline = [
    {
        role: 'Λέκτορας Μηχανικής',
        org: 'Ευρωπαϊκό Πανεπιστήμιο Κύπρου / Minjiang University Κίνας',
        period: 'Αύγ 2025 – Δεκ 2025',
        detail: 'Προχωρημένη Αρχιτεκτονική Υπολογιστών, Ψηφιακά Συστήματα & Εργαστήριο.',
    },
    {
        role: 'Διεύθυνση IT & Marketing',
        org: 'Y. Skembedjis & Sons Group of Companies',
        period: 'Νοέ 2024 – σήμερα',
        detail: '',
    },
    {
        role: 'Μηχανικός Υποστήριξης & Διαχείριση Έργων',
        org: 'DCON IT-AV Solutions',
        period: 'Απρ 2024 – σήμερα',
        detail: '',
    },
];

export default function GreekAbout() {
    const schema = graph(breadcrumbSchema(crumbs), {
        '@type': 'AboutPage',
        name: 'Η Εταιρεία',
        url: abs(staticRoutes.about.el),
        inLanguage: 'el-CY',
    });

    return (
        <main className="min-h-screen bg-transparent pb-20 text-foreground">
            <script {...jsonLdProps(schema)} />
            <Navbar locale="el" altHref={staticRoutes.about.en} />

            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-5xl">
                    <Breadcrumbs items={crumbs} />

                    <div className="mb-16 flex flex-col items-start gap-12 md:flex-row">
                        <div className="flex-1">
                            <h1 className="mb-8 text-4xl font-bold md:text-5xl">
                                <span className="text-gradient">Η Εταιρεία</span>
                            </h1>

                            <div className="space-y-6 text-lg text-muted-foreground">
                                <p>
                                    Η Stellar Reach Solutions είναι στούντιο ψηφιακών λύσεων
                                    που εξειδικεύεται στην ανάπτυξη λογισμικού κατά παραγγελία,
                                    σε ιστοσελίδες και eshop υψηλών επιδόσεων και σε ψηφιακά
                                    προϊόντα. Μεταφράζουμε σύνθετες επιχειρηματικές ανάγκες σε
                                    καθαρές, σύγχρονες τεχνικές αρχιτεκτονικές.
                                </p>
                                <p>
                                    Ιδρύθηκε από τον Γιώργο Γεωργίου, Ηλεκτρολόγο Μηχανικό και
                                    Μηχανικό Υπολογιστών με μεταπτυχιακό από το Αριστοτέλειο
                                    Πανεπιστήμιο Θεσσαλονίκης. Το υπόβαθρό του εκτείνεται από
                                    τον σχεδιασμό συστημάτων τιμολόγησης πραγματικού χρόνου για
                                    μεγάλες εταιρείες τηλεπικοινωνιών μέχρι τη διδασκαλία
                                    προχωρημένης αρχιτεκτονικής υπολογιστών.
                                </p>
                                <p>
                                    Αυτή η βάση μηχανικής ορίζει τον τρόπο που δουλεύουμε. Δεν
                                    φτιάχνουμε απλώς ιστοσελίδες — χτίζουμε ασφαλή, επεκτάσιμα
                                    και βελτιστοποιημένα ψηφιακά περιουσιακά στοιχεία που
                                    δίνουν στις επιχειρήσεις ισχυρή διαδικτυακή παρουσία.
                                </p>
                            </div>
                        </div>

                        <div className="relative shrink-0">
                            <div className="relative h-80 w-64 overflow-hidden rounded-2xl border-4 border-secondary/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02] md:h-96 md:w-72">
                                <Image
                                    src="/profile.jpg"
                                    alt="Γιώργος Γεωργίου — Ιδρυτής & Επικεφαλής Μηχανικός"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 -z-10 h-full w-full translate-x-4 translate-y-4 scale-95 rounded-2xl bg-primary/10" />
                        </div>
                    </div>

                    <h2 className="mb-6 text-2xl font-bold">Εμπειρία & Πορεία</h2>
                    <div className="relative ml-2 space-y-8 border-l-2 border-border pl-8">
                        {timeline.map((item) => (
                            <div key={item.role} className="relative">
                                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                                <h3 className="text-xl font-semibold">{item.role}</h3>
                                <p className="text-sm text-primary">
                                    {item.org} • {item.period}
                                </p>
                                {item.detail && (
                                    <p className="mt-2 text-muted-foreground">{item.detail}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-sm text-muted-foreground">
                        Δείτε{' '}
                        <Link
                            href={staticRoutes.services.el}
                            className="text-primary hover:underline"
                        >
                            τις υπηρεσίες μας
                        </Link>{' '}
                        ή{' '}
                        <Link
                            href={staticRoutes.contact.el}
                            className="text-primary hover:underline"
                        >
                            επικοινωνήστε μαζί μας
                        </Link>
                        .
                    </p>
                </div>
            </div>

            <CTA locale="el" />
            <Footer locale="el" />
        </main>
    );
}
