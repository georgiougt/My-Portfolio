'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/effects/Reveal';
import NextImage from 'next/image';
import { projects, categories } from '@/lib/projects';

export function PortfolioGrid() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 sm:py-32 bg-transparent relative z-10">
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
                                    <div className="mt-6 flex gap-3">
                                        <Button variant="gradient" size="sm" className="flex-1" asChild>
                                            <Link href={`/projects/${project.slug}`}>
                                                Case Study <span className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
                                            </Link>
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1" asChild>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                Visit Site
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
