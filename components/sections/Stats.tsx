import React from 'react';

const stats = [
    { value: '40+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '8+', label: 'Industries Served' },
    { value: 'Cyprus', label: 'Based & Trusted' },
];

export function Stats() {
    return (
        <section className="relative z-10 border-y border-border bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center px-4 py-10 text-center md:py-14"
                        >
                            <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                                {stat.value}
                            </span>
                            <span className="mt-2 text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
