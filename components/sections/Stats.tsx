import React from 'react';
import { CountUp } from '@/components/effects/CountUp';
import { Reveal } from '@/components/effects/Reveal';

type Stat = {
    value?: number;
    suffix?: string;
    text?: string;
    label: string;
};

const stats: Stat[] = [
    { value: 40, suffix: '+', label: 'Projects Delivered' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
    { value: 8, suffix: '+', label: 'Industries Served' },
    { text: 'Cyprus', label: 'Based & Trusted' },
];

export function Stats() {
    return (
        <section className="relative z-10 border-y border-border bg-transparent">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <Reveal
                            key={stat.label}
                            delay={i * 0.1}
                            className="flex flex-col items-center justify-center px-4 py-10 text-center md:py-14"
                        >
                            <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                                {stat.text ? (
                                    stat.text
                                ) : (
                                    <CountUp value={stat.value!} suffix={stat.suffix} />
                                )}
                            </span>
                            <span className="mt-2 text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                                {stat.label}
                            </span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
