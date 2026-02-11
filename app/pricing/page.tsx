import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Check, X, Phone } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/sections/ContactForm";
import { useState } from "react";

export default function PricingPage() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            <Navbar />

            <div className="container mx-auto px-4 py-24 sm:py-32">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                        <span className="text-gradient">Pricing & Offers</span>
                    </h1>
                    <p className="text-lg leading-8 text-muted-foreground">
                        Professional web solutions tailored for your business needs.
                    </p>
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

                {/* Small Business Offer */}
                <div className="mx-auto max-w-lg rounded-3xl p-8 ring-1 ring-primary/20 bg-card/50 backdrop-blur-sm shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-2 -mr-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-2 -ml-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>

                    <h3 className="text-2xl font-bold tracking-tight text-foreground text-center mb-2">Small Business Offer</h3>
                    <p className="text-center text-muted-foreground mb-6">Perfect for establishing your online presence</p>

                    <div className="flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-foreground">€30</span>
                        <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                    </div>

                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        (Starting price)
                    </div>

                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                        <li className="flex gap-x-3 text-foreground">
                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                            Free landing page creation *
                        </li>
                        <li className="flex gap-x-3 text-foreground">
                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                            Only pay for hosting & maintenance
                        </li>
                        <li className="flex gap-x-3">
                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                            Mobile-responsive design
                        </li>
                        <li className="flex gap-x-3">
                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                            Basic SEO optimization
                        </li>
                        <li className="flex gap-x-3">
                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                            SSL Security Certificate
                        </li>
                    </ul>
                    <div className="mt-2 text-xs text-muted-foreground text-center">
                        * Terms and conditions apply.
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            className="flex-1 bg-gradient-brand hover:opacity-90 transition-opacity"
                            size="lg"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="flex-1 gap-2"
                            asChild
                        >
                            <a href="tel:+35799999999">
                                <Phone className="h-4 w-4" />
                                Call Us
                            </a>
                        </Button>
                    </div>
                </div>

                <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Get Started">
                    <p className="mb-4 text-sm text-muted-foreground">
                        Fill out the form below and I'll get back to you to discuss your project.
                    </p>
                    <ContactForm showCard={false} />
                </Modal>

            </div>
        </main>
    );
}
