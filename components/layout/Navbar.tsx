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
            <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between md:grid md:grid-cols-3">
                {/* Desktop Left Menu Links */}
                <div className="hidden md:flex items-center gap-8 justify-start">
                    <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">Work</Link>
                    <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
                </div>

                {/* Center Logo */}
                <div className="flex justify-start md:justify-center items-center">
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/logo.png" 
                            alt="Stellar Reach Solutions Logo" 
                            width={160} 
                            height={48} 
                            className="h-9 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-200" 
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Right Menu Links + Theme Toggle */}
                <div className="hidden md:flex items-center gap-8 justify-end">
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
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
                </div>

                {/* Mobile Menu Toggle & Theme Toggle */}
                <div className="flex md:hidden items-center gap-4 ml-auto">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            aria-label="Toggle theme"
                            className="mr-2"
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
