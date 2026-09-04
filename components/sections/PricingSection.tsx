'use client';

import { Button } from "@/components/ui/Button";
import { Check, X, Phone } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/sections/ContactForm";
import { useState } from "react";
import { phoneHref } from "@/lib/site";

/**
 * Rendered both on /pricing (where it owns the page) and on the homepage
 * (where the Hero owns the H1). Two H1s on one page splits the topical signal,
 * so the heading level is passed in rather than hardcoded.
 */
export function PricingSection({
    as: Heading = 'h1',
}: {
    as?: 'h1' | 'h2';
}) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="container mx-auto px-4 py-24 sm:py-32">
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center mb-16">
                <Heading className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                    <span className="text-gradient">Pricing & Offers</span>
                </Heading>
                <p className="text-lg leading-8 text-muted-foreground mb-12">
                    Professional web solutions tailored for your business needs.
                </p>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-black/10">
                    {/* Was a 7.2MB animated GIF. The same 8 seconds as H.264 is
                        194KB — a 97% reduction with no visible difference. */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster="/service-preview-poster.jpg"
                        aria-label="Preview of websites built by Stellar Reach Solutions"
                        className="h-full w-full object-cover"
                    >
                        <source src="/service-preview.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Website vs No Website Comparison */}
            <div className="mx-auto max-w-5xl mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why You Need a <span className="text-gradient">Website</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* No Website */}
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <X className="w-24 h-24 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                            <X className="w-6 h-6" /> Without a Website
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-red-500/50 flex-none" />
                                <span><strong>Limited Availability:</strong> Business is closed when you are.</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-red-500/50 flex-none" />
                                <span><strong>Local Only:</strong> Limited reach to people walking by.</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-red-500/50 flex-none" />
                                <span><strong>Credibility Gap:</strong> Customers may doubt legitimacy without online proof.</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-red-500/50 flex-none" />
                                <span><strong>Manual Processes:</strong> Booking and inquiries require your phone time.</span>
                            </li>
                        </ul>
                    </div>

                    {/* With Website */}
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Check className="w-24 h-24 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                            <Check className="w-6 h-6" /> With a Website
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-foreground">
                                <Check className="w-5 h-5 text-green-500 flex-none" />
                                <span><strong>Appearance on Google & Google Maps:</strong> Be visible to customers searching online.</span>
                            </li>
                            <li className="flex gap-3 text-foreground">
                                <Check className="w-5 h-5 text-green-500 flex-none" />
                                <span><strong>Professional Image:</strong> Build trust with a modern digital presence.</span>
                            </li>
                            <li className="flex gap-3 text-foreground">
                                <Check className="w-5 h-5 text-green-500 flex-none" />
                                <span><strong>Increase in calls and visits:</strong> Convert online traffic into real customers.</span>
                            </li>
                            <li className="flex gap-3 text-foreground">
                                <Check className="w-5 h-5 text-green-500 flex-none" />
                                <span><strong>Appearance to tourists searching online:</strong> Capture the market of visitors in your area.</span>
                            </li>
                            <li className="flex gap-3 text-foreground">
                                <Check className="w-5 h-5 text-green-500 flex-none" />
                                <span><strong>Full ownership of the website:</strong> You own your digital asset, not a platform.</span>
                            </li>
                            <li className="flex gap-3 text-foreground">
                                <Check className="w-5 h-5 text-green-500 flex-none" />
                                <span><strong>No commitments, no large upfront payments:</strong> Flexible terms that scale with you.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pricing Grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
                {/* One-Page Website Offer */}
                <div className="rounded-3xl p-8 ring-1 ring-primary/20 bg-card/50 backdrop-blur-sm shadow-xl relative overflow-hidden flex flex-col justify-between">
                    <div>
                        <div className="absolute top-0 right-0 -mt-2 -mr-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground text-center mb-2">One-Page Offer</h3>
                        <p className="text-center text-muted-foreground mb-6 min-h-[40px]">Perfect for establishing your online presence quickly and professionally</p>

                        <div className="flex items-baseline justify-center gap-x-2 h-[60px] items-center">
                            <span className="text-5xl font-bold tracking-tight text-foreground">€30</span>
                            <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                        </div>

                        <div className="mt-4 text-center text-sm text-muted-foreground">
                            (Starting price)
                        </div>

                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                            <li className="flex gap-x-3 text-foreground">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Free professional landing page *
                            </li>
                            <li className="flex gap-x-3 text-foreground">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Ultra-reliable hosting included
                            </li>
                            <li className="flex gap-x-3 text-foreground">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                High-performance optimization
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Mobile-responsive layout
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Basic SEO setup
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                SSL Security Certificate
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="mt-4 text-xs text-muted-foreground text-center mb-6">
                            * Terms and conditions apply.
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button
                                className="animated-edge w-full whitespace-nowrap bg-gradient-brand hover:opacity-90 transition-opacity"
                                size="lg"
                                onClick={() => setIsContactOpen(true)}
                            >
                                Get Started
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="animated-edge w-full gap-2 whitespace-nowrap"
                                asChild
                            >
                                <a href={phoneHref}>
                                    <Phone className="h-4 w-4" />
                                    Call Us
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 5-Page Website Offer */}
                <div className="rounded-3xl p-8 ring-2 ring-primary bg-card/65 backdrop-blur-sm shadow-2xl relative flex flex-col justify-between border border-primary/20">
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 -mt-2 -mr-8 w-32 h-32 bg-secondary/35 rounded-full blur-3xl"></div>
                    </div>
                    <div>
                        <div className="absolute top-0 right-4 translate-y-[-50%] bg-primary text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
                            Most Popular
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground text-center mb-2">5-Page Offer</h3>
                        <p className="text-center text-muted-foreground mb-6 min-h-[40px]">Perfect for growing businesses needing a comprehensive and robust site</p>

                        <div className="flex items-baseline justify-center gap-x-2 h-[60px] items-center">
                            <span className="text-5xl font-bold tracking-tight text-foreground">€40</span>
                            <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                        </div>

                        <div className="mt-4 text-center text-sm text-muted-foreground">
                            (Starting price)
                        </div>

                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                            <li className="flex gap-x-3 text-foreground font-semibold">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Up to 5 professional pages *
                            </li>
                            <li className="flex gap-x-3 text-foreground">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Free bespoke website creation
                            </li>
                            <li className="flex gap-x-3 text-foreground">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                High-speed hosting & backup system
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Advanced SEO & Google Indexing
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Custom domain connectivity
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                SSL Security & priority support
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="mt-4 text-xs text-muted-foreground text-center mb-6">
                            * Terms and conditions apply.
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button
                                className="animated-edge w-full whitespace-nowrap bg-gradient-brand hover:opacity-90 transition-opacity"
                                size="lg"
                                onClick={() => setIsContactOpen(true)}
                            >
                                Get Started
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="animated-edge w-full gap-2 whitespace-nowrap"
                                asChild
                            >
                                <a href={phoneHref}>
                                    <Phone className="h-4 w-4" />
                                    Call Us
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Custom Website Offer */}
                <div className="rounded-3xl p-8 ring-1 ring-primary/20 bg-card/50 backdrop-blur-sm shadow-xl relative overflow-hidden flex flex-col justify-between">
                    <div>
                        <div className="absolute top-0 right-0 -mt-2 -mr-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground text-center mb-2">Custom Offer</h3>
                        <p className="text-center text-muted-foreground mb-6 min-h-[40px]">Tailored enterprise software, custom dashboards, and premium digital systems</p>

                        <div className="flex items-baseline justify-center gap-x-2 h-[60px] items-center">
                            <span className="text-4xl font-bold tracking-tight text-gradient">Let&apos;s Talk</span>
                        </div>

                        <div className="mt-4 text-center text-sm text-muted-foreground">
                            Designed around your business
                        </div>

                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                            <li className="flex gap-x-3 text-foreground font-semibold">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Unlimited pages & workflows
                            </li>
                            <li className="flex gap-x-3 text-foreground">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Bespoke UI/UX design & motion systems
                            </li>
                            <li className="flex gap-x-3 text-foreground">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Complex database & API integrations
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                E-commerce or dedicated portals
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Highly scalable & cloud-native setup
                            </li>
                            <li className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                Dedicated support SLA options
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="mt-4 text-xs text-muted-foreground text-center mb-6">
                            Fully customized scope and quotes.
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button
                                className="animated-edge w-full whitespace-nowrap bg-gradient-brand hover:opacity-90 transition-opacity"
                                size="lg"
                                onClick={() => setIsContactOpen(true)}
                            >
                                Get in Touch
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="animated-edge w-full gap-2 whitespace-nowrap"
                                asChild
                            >
                                <a href={phoneHref}>
                                    <Phone className="h-4 w-4" />
                                    Call Us
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Get Started">
                <p className="mb-4 text-sm text-muted-foreground">
                    Fill out the form below and our team will get back to you to discuss your project.
                </p>
                <ContactForm showCard={false} />
            </Modal>
        </div>
    );
}
