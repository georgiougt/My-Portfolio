'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Linkedin, Instagram, Github, Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import { smoothScrollToTop } from '@/lib/scroll';
import { site, phoneHref } from '@/lib/site';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { staticRoutes, type Locale } from '@/lib/i18n';
import { t } from '@/lib/ui';

/**
 * Nav targets per locale. The Greek tree uses translated slugs, so the links
 * are looked up rather than built by prefixing "/el" onto the English path.
 */
function navLinks(locale: Locale) {
    const s = t(locale).nav;
    if (locale === 'el') {
        return [
            { href: staticRoutes.about.el, label: s.about },
            { href: staticRoutes.services.el, label: s.services },
            { href: staticRoutes.pricing.el, label: s.pricing },
            { href: staticRoutes.contact.el, label: s.contact },
        ];
    }
    return [
        { href: staticRoutes.about.en, label: s.about },
        { href: staticRoutes.services.en, label: s.services },
        { href: '/portfolio', label: s.projects },
        { href: staticRoutes.pricing.en, label: s.pricing },
        { href: '/blog', label: s.insights },
        { href: staticRoutes.contact.en, label: s.contact },
    ];
}

const socialIcons = {
    facebook: Facebook,
    linkedin: Linkedin,
    instagram: Instagram,
    github: Github,
} as const;

/** Configured social profiles only — placeholders in site.ts are skipped. */
const navSocials = Object.entries(site.socials)
    .filter(([key, url]) => url.startsWith('http') && key in socialIcons)
    .map(([key, url]) => ({
        key,
        url,
        Icon: socialIcons[key as keyof typeof socialIcons],
    }));

export function Navbar({
    locale = 'en',
    altHref,
}: {
    locale?: Locale;
    /** The equivalent page in the other language, for the switcher. */
    altHref?: string;
} = {}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const home = locale === 'el' ? staticRoutes.home.el : staticRoutes.home.en;
    const links = navLinks(locale);

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsMobileMenuOpen(false);
        if (pathname === home) {
            e.preventDefault();
            smoothScrollToTop();
        }
    };

    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-[#071521]/80 backdrop-blur-md transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Brand Logo - Bracketed High-Tech Style [STELLAR REACH] */}
                <Link href={home} onClick={handleHomeClick} className="flex items-center gap-3 group">
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
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side: Social Media Icons & Boxed Phone */}
                <div className="hidden lg:flex items-center gap-4">
                    {/* Only real profiles. The previous links pointed at Facebook,
                        LinkedIn and YouTube's own homepages — sitewide outbound
                        links that identify nobody. */}
                    {navSocials.length > 0 && (
                        <div className="flex items-center gap-2 border-r border-cyan-500/20 pr-4">
                            {navSocials.map(({ key, url, Icon }) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer me"
                                    className="p-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                                    aria-label={`Stellar Reach Solutions on ${key.charAt(0).toUpperCase()}${key.slice(1)}`}
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    )}


                    <LanguageSwitcher locale={locale} href={altHref} className="pr-1" />

                    <a
                        href={phoneHref}
                        className="border border-white/40 hover:border-cyan-400 bg-cyan-950/40 hover:bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold tracking-[0.15em] text-white hover:text-cyan-400 transition-all rounded-xs flex items-center gap-2"
                    >
                        <Phone className="h-3.5 w-3.5 text-cyan-400" />
                        {site.phoneDisplay}
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
                        href={home}
                        className="block text-sm font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2"
                        onClick={handleHomeClick}
                    >
                        {locale === 'el' ? 'Αρχική' : 'Home'}
                    </Link>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block text-sm font-bold uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-400 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <LanguageSwitcher locale={locale} href={altHref} className="py-2 text-sm" />
                    <div className="pt-4 border-t border-cyan-500/20 flex flex-col gap-3">
                        <a
                            href={phoneHref}
                            className="border border-cyan-400/50 bg-cyan-950/40 text-center py-2.5 text-xs font-bold tracking-[0.15em] text-cyan-400 rounded-xs"
                        >
                            CALL {site.phoneDisplay}
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
