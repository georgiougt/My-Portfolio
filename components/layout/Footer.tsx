'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative z-10 border-t border-cyan-500/20 bg-[#05131E] text-slate-300 text-xs">
            {/* Mission Statement Framed Banner Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="border-t border-b border-cyan-500/25 py-8 px-4 text-center max-w-4xl mx-auto mb-16">
                    <p className="text-sm sm:text-base font-light tracking-wide text-slate-200 leading-relaxed uppercase">
                        STELLAR REACH provides web engineering, custom software, SEO, and digital strategy support to modern businesses, growing enterprises, and commercial brands across Cyprus and Europe.
                    </p>
                </div>

                {/* 4-Column Directory Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto pb-12">
                    {/* Column 1: ABOUT US */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-4">
                            ABOUT US
                        </h4>
                        <ul className="space-y-2.5 text-slate-400">
                            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">Our Mission & Studio</Link></li>
                            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">Speed to Market</Link></li>
                            <li><Link href="/portfolio" className="hover:text-cyan-400 transition-colors">Featured Projects</Link></li>
                            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">Client Testimonials</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Work with Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: SERVICES */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-4">
                            SERVICES
                        </h4>
                        <ul className="space-y-2.5 text-slate-400">
                            <li><Link href="/#services" className="hover:text-cyan-400 transition-colors">Custom Web Design</Link></li>
                            <li><Link href="/#services" className="hover:text-cyan-400 transition-colors">Next.js Web Development</Link></li>
                            <li><Link href="/#services" className="hover:text-cyan-400 transition-colors">On-Page & Local SEO</Link></li>
                            <li><Link href="/#services" className="hover:text-cyan-400 transition-colors">Performance Ads (Google & Meta)</Link></li>
                            <li><Link href="/#services" className="hover:text-cyan-400 transition-colors">Maintenance & Support</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: PRODUCTS */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-4">
                            PRODUCTS
                        </h4>
                        <ul className="space-y-2.5 text-slate-400">
                            <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">One-Page Landing Offer</Link></li>
                            <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">5-Page Business Suite</Link></li>
                            <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Custom E-Commerce Portals</Link></li>
                            <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Enterprise Web Applications</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: CONTACT US */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-4">
                            CONTACT US
                        </h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">General Inquiry</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Request Custom Quote</Link></li>
                            
                            {/* Social Icons */}
                            <li className="pt-2 flex items-center gap-3">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors" aria-label="Facebook">
                                    <Facebook className="h-4 w-4" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                                    <Linkedin className="h-4 w-4" />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors" aria-label="YouTube">
                                    <Youtube className="h-4 w-4" />
                                </a>
                            </li>

                            {/* Boxed Phone Number */}
                            <li className="pt-1">
                                <a
                                    href="tel:+35799717717"
                                    className="inline-flex items-center gap-2 border border-white/30 hover:border-cyan-400 bg-cyan-950/40 px-3 py-1.5 font-bold tracking-[0.15em] text-white hover:text-cyan-400 transition-colors rounded-xs text-[0.7rem]"
                                >
                                    <Phone className="h-3.5 w-3.5 text-cyan-400" />
                                    +357 99 717717
                                </a>
                            </li>

                            {/* Address */}
                            <li className="flex items-center gap-2 text-[0.7rem] text-slate-400 pt-1">
                                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                                Limassol, Cyprus
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="border-t border-cyan-500/15 pt-8 pb-24 sm:pb-0 text-center text-[0.7rem] text-slate-500 space-x-2">
                    <span>© Copyright {new Date().getFullYear()} Stellar Reach Solutions. All Rights Reserved.</span>
                    <span>•</span>
                    <Link href="/privacy" className="hover:text-cyan-400">Terms of Use</Link>
                    <span>•</span>
                    <Link href="/privacy" className="hover:text-cyan-400">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
