'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import * as motion from "framer-motion/client"
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { ContactForm } from '@/components/sections/ContactForm';

export function Hero() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 text-center">
            {/* Background Layer 1: Animated GIF */}
            {/* Background Layer 1: Animated Video (Plays Once) */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    playsInline
                    className="h-full w-full object-cover scale-110 origin-top"
                >
                    <source src="/Whisk_qdn3y2m2qgomnjy10smkdtytktoirtlyigzl1iz.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Background Layer 2: Overlay */}
            <div className="absolute inset-0 z-0 bg-black/60" />

            {/* Background Layer 3: Glow (Optional) */}
            <div className="absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] mix-blend-overlay" />

            <div className="container px-4 animation-fade-in-up relative z-10">
                <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-7xl leading-tight">
                    Digital Product <br className="hidden sm:block" />
                    <span className="text-gradient pb-2">Designer</span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 sm:text-xl">
                    Creating pixel-perfect digital experiences that blend thoughtful design with robust engineering
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Button size="lg" variant="gradient" asChild>
                        <Link href="/portfolio">
                            View My Work <span className="ml-2">→</span>
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => setIsContactOpen(true)}
                    >
                        Get Started
                    </Button>
                </div>

                <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Get Started">
                    <p className="mb-4 text-sm text-muted-foreground text-left">
                        Fill out the form below and I'll get back to you to discuss your project.
                    </p>
                    <ContactForm showCard={false} />
                </Modal>
            </div>
        </section>
    );
}
