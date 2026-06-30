import React from 'react';
import { Reveal } from '@/components/effects/Reveal';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Discovery',
        description:
            'We start by understanding your business, goals and audience, then map out exactly what your site needs to achieve.',
    },
    {
        icon: PenTool,
        title: 'Design',
        description:
            'We craft a distinctive, on-brand design and share it with you early — refining together until it feels right.',
    },
    {
        icon: Code2,
        title: 'Build',
        description:
            'We engineer your site with clean, modern code — fast, responsive, accessible and SEO-ready from day one.',
    },
    {
        icon: Rocket,
        title: 'Launch & Support',
        description:
            'We handle the launch, make sure everything performs, and stay on hand to help you grow afterwards.',
    },
];

export function Process() {
    return (
        <section id="process" className="relative z-10 bg-background py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <Reveal className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        How We Work
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        A simple, proven process
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                        From first conversation to launch day, you always know what&apos;s
                        happening next — no jargon, no surprises.
                    </p>
                </Reveal>

                <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <Reveal key={step.title} delay={i * 0.1} className="relative">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-lg shadow-primary/20">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                        <span className="font-display text-4xl font-bold text-border">
                                            0{i + 1}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
