'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ContactForm } from '@/components/sections/ContactForm';
import { Reveal } from '@/components/effects/Reveal';
import { site, whatsappLink } from '@/lib/site';
import { MessageCircle } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

const copy = {
    en: {
        headingA: 'Ready to stand out',
        headingB: 'online?',
        body: "Let's turn your vision into a high-performance digital presence. Tell us about your project and we'll build the foundation.",
        book: 'BOOK A FREE CALL',
        whatsapp: 'WHATSAPP INQUIRY',
        emailPrefix: 'Prefer email? Reach us at',
        emailSuffix: '— we reply within 24 hours.',
        modalTitle: 'Start Your Project',
        modalBody: "Fill out the form below and we'll get back to you to discuss your project.",
    },
    el: {
        headingA: 'Έτοιμοι να ξεχωρίσετε',
        headingB: 'στο διαδίκτυο;',
        body: 'Ας μετατρέψουμε το όραμά σας σε μια ψηφιακή παρουσία υψηλών επιδόσεων. Πείτε μας για το έργο σας και χτίζουμε τα θεμέλια.',
        book: 'ΚΛΕΙΣΤΕ ΔΩΡΕΑΝ ΚΛΗΣΗ',
        whatsapp: 'ΕΡΩΤΗΣΗ ΣΤΟ WHATSAPP',
        emailPrefix: 'Προτιμάτε email; Γράψτε μας στο',
        emailSuffix: '— απαντάμε εντός 24 ωρών.',
        modalTitle: 'Ξεκινήστε το έργο σας',
        modalBody: 'Συμπληρώστε τη φόρμα και επικοινωνούμε μαζί σας για να συζητήσουμε το έργο σας.',
    },
} as const;

export function CTA({ locale = 'en' }: { locale?: Locale } = {}) {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const c = copy[locale];

    return (
        <section className="relative z-10 py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <Reveal className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0A2234] px-6 py-16 text-center sm:px-16 sm:py-24 shadow-2xl">
                    {/* Glow accents */}
                    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
                    <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-500/20 blur-[120px]" />

                    <div className="relative z-10 mx-auto max-w-2xl">
                        <h2 className="font-display text-3xl font-bold tracking-wider sm:text-5xl uppercase text-white">
                            {c.headingA} <span className="text-cyan-400">{c.headingB}</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-base text-slate-300 sm:text-lg font-light leading-relaxed">
                            {c.body}
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            {site.bookingUrl ? (
                                <button
                                    onClick={() => window.open(site.bookingUrl, '_blank')}
                                    className="btn-tech-outline text-xs py-3 px-8"
                                >
                                    {c.book}
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="btn-tech-outline text-xs py-3 px-8"
                                >
                                    {c.book}
                                </button>
                            )}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-tech-outline text-xs py-3 px-8 border-cyan-400/40 text-cyan-400 flex items-center gap-2 hover:bg-cyan-500/20"
                            >
                                <MessageCircle className="h-4 w-4" /> {c.whatsapp}
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-slate-400">
                            {c.emailPrefix}{' '}
                            <a
                                href={`mailto:${site.email}`}
                                className="text-cyan-400 underline-offset-4 hover:underline font-semibold"
                            >
                                {site.email}
                            </a>{' '}
                            {c.emailSuffix}
                        </p>
                    </div>
                </Reveal>
            </div>

            <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title={c.modalTitle}>
                <p className="mb-4 text-left text-sm text-slate-300">
                    {c.modalBody}
                </p>
                <ContactForm showCard={false} />
            </Modal>
        </section>
    );
}
