'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/effects/Reveal';
import NextImage from 'next/image';

const projects = [
    {
        id: 4,
        title: 'Dr. Savvas Savvoulas',
        description: 'Paediatrician & Family Physician website with appointment booking.',
        category: 'Healthcare',
        image: '/projects/dr-savvas.png',
        link: 'https://georgiougt.github.io/Doctor-Website/',
    },
    {
        id: 5,
        title: 'Neon Wash',
        description: 'Premium car detailing booking platform with dark aesthetic.',
        category: 'Services',
        image: '/projects/neon-wash.png',
        link: 'https://neon-carwash.vercel.app/',
    },
    {
        id: 6,
        title: 'JDM Carwash',
        description: 'Japanese detailed machines. Premium auto detailing in Limassol.',
        category: 'Services',
        image: '/projects/jdm-wash.png',
        link: 'https://jdm-carwash.vercel.app/',
    },
    {
        id: 7,
        title: 'Kintsugi',
        description: 'Financial analytics dashboard with real-time transaction tracking.',
        category: 'Fintech',
        image: '/projects/fintech-dashboard.png',
        link: 'https://fin-tech-dashboard.vercel.app/',
    },
    {
        id: 8,
        title: 'FitCore Gym',
        description: 'Modern gym website with membership plans and class schedules.',
        category: 'Services',
        image: '/projects/fitcore.png',
        link: 'https://fitcore-gym.web.app/',
    },
    {
        id: 9,
        title: 'Pharmacy Petros Petridis',
        description: 'Your Trusted Neighborhood Pharmacy in Limassol. Personalized care and expert guidance.',
        category: 'Healthcare',
        image: '/projects/pharmacy.png',
        link: 'https://georgiougt.github.io/Pharmacy/',
    },
    {
        id: 10,
        title: 'Nerouppos Barber Shop',
        description: 'Sharp Cuts. Clean Fades. Fresh Confidence. Traditional barbering with modern precision.',
        category: 'Services',
        image: '/projects/barber.png',
        link: 'https://georgiougt.github.io/Barber/',
    },
    {
        id: 11,
        title: 'Diamantides Yachting',
        description: 'Exclusive yacht chartering and luxury maritime services in Cyprus, presenting a premium fleet with online booking inquiries.',
        category: 'Services',
        image: '/projects/diamantides.jpg',
        link: 'https://georgiougt.github.io/Diamantides/',
    },
    {
        id: 12,
        title: 'Tofrontistirio',
        description: 'Bespoke tutoring center management and student performance tracking platform, optimizing academic scheduling and learning analytics.',
        category: 'Education',
        image: '/projects/tofrontistirio.png',
        link: 'https://tofrontistirio.com/',
    },
];

const categories = ['All', 'Healthcare', 'Services', 'Fintech', 'Education'];

export function PortfolioGrid() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 sm:py-32 bg-background relative z-10">
            <div className="container mx-auto px-4">
                <Reveal className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Our Work
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        Recent projects we&apos;re proud of
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                        A selection of real businesses we&apos;ve helped launch and grow online.
                    </p>
                </Reveal>

                <div className="mb-10 flex flex-wrap justify-center gap-4">
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, i) => (
                        <Reveal key={project.id} delay={(i % 3) * 0.1} className="h-full">
                        <Card className="group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                            {/* Project Image */}
                            <div className="aspect-video w-full bg-zinc-800 overflow-hidden relative">
                                {project.image && (project.image.endsWith('.jpg') || project.image.endsWith('.png')) ? (
                                    <NextImage
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/20">
                                        Image Placeholder
                                    </div>
                                )}
                                {/* Gradient overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                                {/* Category badge */}
                                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                    {project.category}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="font-display text-xl font-semibold text-foreground">{project.title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                                <div className="mt-6">
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            Visit Website <span className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
