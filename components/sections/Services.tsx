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
            'Custom, high-performance web design and development services in Cyprus built with Next.js to impress and convert.',
    },
    {
        icon: Target,
        title: 'Google Ads',
        description:
            'Targeted search and display advertising campaigns in Cyprus that put you in front of local customers ready to buy.',
    },
    {
        icon: Facebook,
        title: 'Facebook Ads',
        description:
            'Scroll-stopping Meta campaigns that build brand awareness and capture qualified local leads.',
    },
    {
        icon: Instagram,
        title: 'Instagram Ads',
        description:
            'Visually-driven Instagram advertising to grow your Cyprus business audience and drive sales.',
    },
    {
        icon: Sparkles,
        title: 'Content Creation',
        description:
            'Eye-catching graphics, photography, and video assets tailored to elevate your brand identity.',
    },
    {
        icon: PenLine,
        title: 'Blog & Content Writing',
        description:
            'SEO-friendly articles and blogs that establish industry authority and pull in steady organic traffic.',
    },
    {
        icon: Search,
        title: 'On-Page SEO Services',
        description:
            'Essential on-page optimization—page titles, meta descriptions, semantic HTML, and core web vitals speed optimization.',
    },
    {
        icon: TrendingUp,
        title: 'Local SEO & Optimization',
        description:
            'Technical SEO audits, keyword targeting, and local optimization in Limassol to outrank your competitors.',
    },
    {
        icon: LifeBuoy,
        title: 'Support & Maintenance',
        description:
            'Ongoing software updates, security monitoring, and regular maintenance to keep your site running smoothly.',
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
