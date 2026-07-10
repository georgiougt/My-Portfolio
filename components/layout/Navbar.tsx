'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Close mobile menu when route changes
    // actually, Link components will trigger a route change, but we might need to close it manually if not fully automatic in Next.js app router without page reload.
    // simpler to just onClick={() => setIsMobileMenuOpen(false)} on links.

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
            <div className="container mx-auto px-6 py-3 relative">
                {/* Desktop Layout (grouped tightly in the center, with name below) */}
                <div className="hidden md:flex flex-col items-center justify-center gap-2 py-1">
                    <div className="flex items-center justify-center gap-10">
                        <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">Work</Link>
                        <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
                        
                        <Link href="/" className="flex items-center mx-4 shrink-0">
                            <Image 
                                src="/logo-icon.png" 
                                alt="Stellar Reach Solutions Logo Icon" 
                                width={80} 
                                height={80} 
                                className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-200" 
                                priority
                            />
                        </Link>
                        
                        <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
                        <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
                    </div>
                    {/* Centered text in a straight line below options */}
                    <Link href="/" className="text-xs font-bold tracking-[0.22em] pl-[0.22em] text-foreground/80 hover:text-primary transition-colors uppercase leading-none">
                        Stellar Reach Solutions
                    </Link>
                </div>

                {/* Absolute Theme Toggle on the right side for desktop */}
                {mounted && (
                    <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                )}

                {/* Mobile Layout (logo icon + text on the left, controls on the right) */}
                <div className="flex md:hidden items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5">
                        <Image 
                            src="/logo-icon.png" 
                            alt="Stellar Reach Solutions Logo" 
                            width={80} 
                            height={80} 
                            className="h-8 w-auto object-contain" 
                            priority
                        />
                        <span className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/95">
                            Stellar Reach
                        </span>
                    </Link>
                    
                    <div className="flex items-center gap-2">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                        <Link
                            href="/"
                            className="text-lg font-medium hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-lg font-medium hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Work
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-medium hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-lg font-medium hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="text-lg font-medium hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
