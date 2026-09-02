'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Linkedin, Youtube, Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import { smoothScrollToId, smoothScrollToTop } from '@/lib/scroll';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // For links that point at a section on the homepage: if we're already on the
    // homepage, intercept and ease-scroll to it instead of doing an instant jump.
    // Off the homepage, let the Link navigate normally (then the browser jumps).
    const handleSectionClick =
        (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
            setIsMobileMenuOpen(false);
            if (pathname === '/') {
                e.preventDefault();
                smoothScrollToId(id);
            }
        };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsMobileMenuOpen(false);
        if (pathname === '/') {
            e.preventDefault();
            smoothScrollToTop();
        }
    };

    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-[#071521]/80 backdrop-blur-md transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand Logo - Bracketed High-Tech Style [STELLAR REACH] */}
                <Link href="/" onClick={handleHomeClick} className="flex items-center gap-3 group">
                    <Image
                        src="/logo-icon.png"
                        alt="Stellar Reach Logo"
                        width={36}
                        height={36}
                        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                    <span className="font-display text-lg sm:text-xl font-bold tracking-[0.15em] text-white">
                        <span className="text-cyan-400 font-normal mr-0.5">[</span>
                        STELLAR REACH
                        <span className="text-cyan-400 font-normal ml-0.5">]</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/about"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                        ABOUT US
                    </Link>
                    <Link
                        href="/#services"
                        onClick={handleSectionClick('services')}
                        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                        SERVICES
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                        PROJECTS
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                        PRICING
                    </Link>
                    <Link
                        href="/contact"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                        CONTACT
                    </Link>
                </div>

                {/* Right Side: Social Media Icons & Boxed Phone */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-2 border-r border-cyan-500/20 pr-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-4 w-4" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube className="h-4 w-4" />
                        </a>
                    </div>
                    
                    <a
                        href="tel:+35799717717"
                        className="border border-white/40 hover:border-cyan-400 bg-cyan-950/40 hover:bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold tracking-[0.15em] text-white hover:text-cyan-400 transition-all rounded-xs flex items-center gap-2"
                    >
                        <Phone className="h-3.5 w-3.5 text-cyan-400" />
                        +357 99 717717
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white hover:text-cyan-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </nav>

        {/* Mobile Menu Overlay — full-screen, opaque so page content never bleeds through.
            Rendered outside <nav> because the navbar's backdrop-blur makes it a containing
            block for fixed descendants, which would otherwise clip this overlay. */}
        {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto bg-[#071521] px-6 pt-24 pb-10 space-y-4">
                    <Link
                        href="/"
                        className="block text-sm font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2"
                        onClick={handleHomeClick}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block text-sm font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/#services"
                        className="block text-sm font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2"
                        onClick={handleSectionClick('services')}
                    >
                        Services
                    </Link>
                    <Link
                        href="/portfolio"
                        className="block text-sm font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/pricing"
                        className="block text-sm font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/contact"
                        className="block text-sm font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <div className="pt-4 border-t border-cyan-500/20 flex flex-col gap-3">
                        <a
                            href="tel:+35799717717"
                            className="border border-cyan-400/50 bg-cyan-950/40 text-center py-2.5 text-xs font-bold tracking-[0.15em] text-cyan-400 rounded-xs"
                        >
                            CALL +357 99 717717
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
