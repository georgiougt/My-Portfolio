'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
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
];

const categories = ['All', 'Healthcare', 'Services', 'Fintech'];

export function PortfolioGrid() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
                    <span className="text-gradient">Recent Projects</span>
                </h2>

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
                    {filteredProjects.map(project => (
                        <Card key={project.id} className="group overflow-hidden hover:border-primary/50">
                            {/* Project Image */}
                            <div className="aspect-video w-full bg-zinc-800 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                                {project.image && (project.image.endsWith('.jpg') || project.image.endsWith('.png')) ? (
                                    <NextImage
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/20">
                                        Image Placeholder
                                    </div>
                                )}
                            </div>
                            <div className="mt-4 p-4 pt-0">
                                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                                <div className="mt-6 flex gap-4">
                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            Visit Website
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
