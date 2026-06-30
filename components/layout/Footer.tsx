import React from 'react';
import Link from 'next/link';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
];

const socials = [
    { label: 'Email', href: 'mailto:georgiougt94@icloud.com', icon: Mail },
    { label: 'GitHub', href: 'https://github.com/georgiougt', icon: Github },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Instagram', href: '#', icon: Instagram },
];

export function Footer() {
    return (
        <footer className="relative z-10 border-t border-border bg-background">
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link href="/" className="font-display text-2xl font-bold text-gradient">
                            Stellar Reach Solutions
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            A Cyprus-based digital studio crafting premium websites and web apps
                            that blend stunning design with high-performance engineering.
                        </p>
                    </div>

                    {/* Nav */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Navigate
                        </h4>
                        <ul className="mt-4 space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-foreground/80 transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Connect
                        </h4>
                        <div className="mt-4 flex gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground/70 transition-all hover:border-primary/50 hover:text-primary"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Stellar Reach Solutions. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Designed &amp; built in Cyprus.
                    </p>
                </div>
            </div>
        </footer>
    );
}
