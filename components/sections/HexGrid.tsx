'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { ContactForm } from '@/components/sections/ContactForm';

const hexItems = [
    {
        id: 'products',
        title: 'PRODUCTS',
        subtitle: 'Web Apps & E-Commerce',
        image: '/hero-banner.jpg',
        href: '/portfolio',
        row: 'top',
    },
    {
        id: 'services',
        title: 'SERVICES',
        subtitle: 'Web Design & SEO',
        image: '/service-preview-poster.jpg',
        href: '/#services',
        row: 'top',
    },
    {
        id: 'markets',
        title: 'MARKETS',
        subtitle: 'Cyprus & Global',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        href: '/about',
        row: 'top',
    },
    {
        id: 'case-studies',
        title: 'CASE STUDIES',
        subtitle: 'Recent Work',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
        href: '/portfolio',
        row: 'bottom',
    },
    {
        id: 'pricing',
        title: 'PRICING & OFFERS',
        subtitle: 'Flexible Plans',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        href: '/pricing',
        row: 'bottom',
    },
];

export function HexGrid() {
    const [selectedTile, setSelectedTile] = useState<string | null>(null);

    const topRow = hexItems.filter((item) => item.row === 'top');
    const bottomRow = hexItems.filter((item) => item.row === 'bottom');

    return (
        <section id="hex-grid" className="relative z-10 py-16 sm:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Honeycomb Container */}
                <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto">
                    {/* Top Row: 3 Tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-center w-full max-w-5xl">
                        {topRow.map((item) => (
                            <HexTile key={item.id} item={item} index={hexItems.indexOf(item)} onOpenModal={() => setSelectedTile(item.title)} />
                        ))}
                    </div>

                    {/* Bottom Row: 2 Offset Tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center w-full max-w-3xl md:-mt-4">
                        {bottomRow.map((item) => (
                            <HexTile key={item.id} item={item} index={hexItems.indexOf(item)} onOpenModal={() => setSelectedTile(item.title)} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for Tile Inquiries */}
            {selectedTile && (
                <Modal isOpen={!!selectedTile} onClose={() => setSelectedTile(null)} title={selectedTile}>
                    <p className="mb-4 text-sm text-slate-300 text-left">
                        Interested in our {selectedTile.toLowerCase()}? Get in touch with our team today.
                    </p>
                    <ContactForm showCard={false} />
                </Modal>
            )}
        </section>
    );
}

interface HexTileProps {
    item: typeof hexItems[0];
    index: number;
    onOpenModal: () => void;
}

function HexTile({ item, index, onOpenModal }: HexTileProps) {
    return (
        <div className="group relative mx-auto w-full max-w-[290px] aspect-[1/1.1] transition-transform duration-500 hover:scale-105 hover:z-20">
            {/* Ambient Hexagon Outer Glow */}
            <div className="absolute inset-0 hex-clip bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

            {/* Twin glows travelling continuously around the hexagon edge. The SVG
                is stretched to the tile (preserveAspectRatio="none") so its path
                lines up with the hex-clip shape; overflow is left visible so the
                glow isn't cut at the box edge. Staggered per tile via `index`. */}
            <svg
                aria-hidden="true"
                viewBox="0 0 100 110"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full [overflow:visible] [filter:drop-shadow(0_0_4px_rgba(0,242,254,0.55))]"
            >
                <path
                    d="M50,0 L100,27.5 L100,82.5 L50,110 L0,82.5 L0,27.5 Z"
                    pathLength={100}
                    fill="none"
                    stroke="#00F2FE"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="12 38 12 38"
                    className="hex-travel"
                    style={{ animationDelay: `${-index * 0.6}s` }}
                />
            </svg>

            {/* Main Hexagon Inner Container */}
            <div className="relative h-full w-full hex-clip border border-cyan-500/30 bg-[#0A2234] overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <NextImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 290px"
                        className="object-cover opacity-35 transition-transform duration-700 group-hover:scale-115 group-hover:opacity-55"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071521]/70 via-[#0A2234]/80 to-[#071521]/95" />
                </div>

                {/* Hexagon Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.18em] text-white uppercase mb-4 drop-shadow-md">
                        {item.title}
                    </h3>

                    {/* Learn More Tech Outline Button */}
                    <Link
                        href={item.href}
                        className="btn-tech-outline text-[0.65rem] py-1.5 px-4 rounded-xs border-white/50 group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all duration-300"
                    >
                        LEARN MORE
                    </Link>
                </div>

                {/* Subtle Cyan Border Highlight overlay */}
                <div className="absolute inset-0 hex-clip border-2 border-cyan-400/0 group-hover:border-cyan-400/60 pointer-events-none transition-colors duration-300" />
            </div>
        </div>
    );
}
