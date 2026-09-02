'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { ContactForm } from '@/components/sections/ContactForm';
import { smoothScrollToId } from '@/lib/scroll';

export function Hero() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    // Eased scroll to the next section — smoother than the browser's instant
    // anchor jump. Falls back to the default jump if the target isn't present.
    const scrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!document.getElementById('hex-grid')) return;
        e.preventDefault();
        smoothScrollToId('hex-grid');
    };

    return (
        <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-28 pb-16 text-center">
            {/* Background Layer 1: Animated Video */}
            <div className="absolute inset-0 z-0">
                {/* 805KB, 1280w, faststart — down from a 3.8MB source that blocked
                    the hero on every page load. The poster paints immediately so
                    there is no empty frame while the video buffers. */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/hero-poster.jpg"
                    aria-hidden="true"
                    className="h-full w-full object-cover scale-105 opacity-40 mix-blend-luminosity"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Background Layer 2: Deep Cyan Gradient & Ambient Grid Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071521]/90 via-[#071521]/70 to-[#071521]" />
            <div className="absolute left-1/2 top-1/3 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
                {/* Uppercase Small Tagline */}
                <p className="mb-6 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-cyan-400">
                    WHEN SPEED TO MARKET MATTERS, TRUST STELLAR REACH
                </p>

                {/* Main Highlight Headline */}
                <h1 className="mb-8 font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.15em] text-white leading-tight uppercase max-w-5xl">
                    DIGITAL <span className="font-extrabold text-white">SOLUTIONS</span>
                    <span className="block text-xl sm:text-3xl font-bold tracking-[0.35em] text-cyan-400 mt-2">
                        EXPERTISE
                    </span>
                </h1>

                {/* Outline Action Button */}
                <div className="mt-4 mb-12">
                    <button
                        onClick={() => setIsContactOpen(true)}
                        className="btn-tech-outline group relative overflow-hidden"
                    >
                        LEARN MORE
                    </button>
                </div>

                {/* Down Arrow Chevron Scroll Indicator */}
                <a
                    href="#hex-grid"
                    onClick={scrollToNext}
                    className="inline-flex items-center justify-center p-2 text-cyan-400 hover:text-white transition-colors animate-bounce mt-4"
                    aria-label="Scroll to features"
                >
                    <ChevronDown className="h-7 w-7 stroke-[1.5]" />
                </a>

                {/* Modal Contact Form */}
                <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Get Started">
                    <p className="mb-4 text-sm text-slate-300 text-left">
                        Fill out the form below and we'll reach out to discuss your project requirements.
                    </p>
                    <ContactForm showCard={false} />
                </Modal>
            </div>
        </section>
    );
}
