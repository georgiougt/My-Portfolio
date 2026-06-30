import React from 'react';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/effects/Reveal';
import {
    Palette,
    Target,
    Facebook,
    Instagram,
    Sparkles,
    PenLine,
    Search,
    TrendingUp,
    LifeBuoy,
} from 'lucide-react';

const services = [
    {
        icon: Palette,
        title: 'Web Design & Development',
        description:
            'Custom, high-performance websites and web apps designed to impress and built to convert.',
    },
    {
        icon: Target,
        title: 'Google Ads',
        description:
            'Targeted Search & Display campaigns that put you in front of customers ready to buy.',
    },
    {
        icon: Facebook,
        title: 'Facebook Ads',
        description:
            'Scroll-stopping Meta campaigns that build awareness and bring in qualified leads.',
    },
    {
        icon: Instagram,
        title: 'Instagram Ads',
        description:
            'Visually-driven Instagram advertising that grows your audience and drives sales.',
    },
    {
        icon: Sparkles,
        title: 'Content Creation',
        description:
            'Eye-catching graphics, photos and video tailored to your brand and your channels.',
    },
    {
        icon: PenLine,
        title: 'Blog Writing',
        description:
            'SEO-friendly articles that build authority and pull in steady organic traffic.',
    },
    {
        icon: Search,
        title: 'Basic SEO',
        description:
            'On-page essentials — titles, meta, structure and speed — so Google can find you.',
    },
    {
        icon: TrendingUp,
        title: 'Advanced SEO',
        description:
            'Technical SEO, content strategy and local optimisation to climb the rankings.',
    },
    {
        icon: LifeBuoy,
        title: 'Support & Maintenance',
        description:
            'Ongoing updates, monitoring and improvements to keep everything running smoothly.',
    },
];

export function Services() {
    return (
        <section id="services" className="relative z-10 bg-background py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <Reveal className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        What We Do
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything you need to grow online
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                        From a stunning website to the marketing that fills it — we&apos;re your
                        one partner for design, advertising, content and SEO.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <Reveal key={service.title} delay={(i % 3) * 0.1}>
                                <Card className="group h-full p-8 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
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
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
