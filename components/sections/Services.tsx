import React from 'react';
import { Card } from '@/components/ui/Card';
import { Palette, Code2, Smartphone, Rocket } from 'lucide-react';

const services = [
    {
        icon: Palette,
        title: 'Web Design',
        description: 'Distinctive, brand-led interfaces crafted to make a striking first impression and build trust instantly.',
    },
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Fast, accessible, future-proof sites and web apps engineered with modern frameworks and clean code.',
    },
    {
        icon: Smartphone,
        title: 'Responsive & Mobile',
        description: 'Pixel-perfect experiences that feel effortless on every screen, from widescreen desktops to phones.',
    },
    {
        icon: Rocket,
        title: 'Launch & Growth',
        description: 'SEO, performance tuning, and ongoing support to get you live and keep you climbing the rankings.',
    },
];

export function Services() {
    return (
        <section id="services" className="relative z-10 bg-background py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        What We Do
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything you need to stand out online
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                        We blend stunning design with high-performance engineering to deliver
                        digital products that look incredible and convert.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={service.title}
                                className="group p-8 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {service.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
