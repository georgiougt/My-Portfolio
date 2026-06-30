'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ContactForm } from '@/components/sections/ContactForm';
import { Reveal } from '@/components/effects/Reveal';

export function CTA() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section className="relative z-10 bg-background py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-16 sm:py-24">
                    {/* Glow accents */}
                    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
                    <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-[120px]" />

                    <div className="relative z-10 mx-auto max-w-2xl">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
                            Ready to stand out <span className="text-gradient">online?</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                            Let&apos;s turn your idea into a digital experience your customers
                            won&apos;t forget. Tell us about your project and we&apos;ll take it from there.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button size="lg" variant="gradient" onClick={() => setIsContactOpen(true)}>
                                Start Your Project
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="/portfolio">View Our Work</a>
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </div>

            <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Start Your Project">
                <p className="mb-4 text-left text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you to discuss your project.
                </p>
                <ContactForm showCard={false} />
            </Modal>
        </section>
    );
}
