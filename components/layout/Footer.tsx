'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Github, Phone, MapPin } from 'lucide-react';
import { services } from '@/lib/services';
import { locations } from '@/lib/locations';
import { site } from '@/lib/site';
import { staticRoutes, serviceBase, locationBase, type Locale } from '@/lib/i18n';
import { servicesEl } from '@/lib/services.el';
import { locationsEl } from '@/lib/locations.el';

/** The five commercial services worth a footer link on every page. */
const footerServices = services.filter((s) =>
    ['web-design', 'web-development', 'seo-services', 'local-seo', 'ecommerce-development'].includes(
        s.slug
    )
);

/**
 * Only render social links that are actually configured. Linking to
 * "https://facebook.com" was pointing every page at Facebook's homepage — a
 * sitewide outbound link that says nothing about us and leaks link equity.
 */
const socialIcons = {
    facebook: Facebook,
    linkedin: Linkedin,
    instagram: Instagram,
    github: Github,
} as const;

const socialLinks = Object.entries(site.socials)
    .filter(([key, url]) => url.startsWith('http') && key in socialIcons)
    .map(([key, url]) => ({
        key,
        url,
        Icon: socialIcons[key as keyof typeof socialIcons],
    }));

export function Footer({ locale = 'en' }: { locale?: Locale } = {}) {
    const el = locale === 'el';
    const r = {
        about: el ? staticRoutes.about.el : staticRoutes.about.en,
        services: el ? staticRoutes.services.el : staticRoutes.services.en,
        pricing: el ? staticRoutes.pricing.el : staticRoutes.pricing.en,
        contact: el ? staticRoutes.contact.el : staticRoutes.contact.en,
    };
    // Service and city slugs differ per language, so the hrefs are looked up
    // rather than built by prefixing the English path.
    const serviceHref = (slug: string) =>
        el
            ? `${serviceBase.el}/${servicesEl[slug]?.slug ?? slug}`
            : `${serviceBase.en}/${slug}`;
    const serviceName = (slug: string, fallback: string) =>
        el ? (servicesEl[slug]?.name ?? fallback) : fallback;
    const locationHref = (slug: string) =>
        el
            ? `${locationBase.el}/${locationsEl[slug]?.slug ?? slug}`
            : `${locationBase.en}/${slug}`;
    const locationCity = (slug: string, fallback: string) =>
        el ? (locationsEl[slug]?.city ?? fallback) : fallback;

    return (
        <footer className="relative z-10 border-t border-cyan-500/20 bg-[#05131E] text-slate-300 text-xs">
            {/* Mission Statement Framed Banner Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="border-t border-b border-cyan-500/25 py-8 px-4 text-center max-w-4xl mx-auto mb-16">
                    <p className="text-sm sm:text-base font-light tracking-wide text-slate-200 leading-relaxed uppercase">
                        {el
                            ? 'Η STELLAR REACH παρέχει μηχανική ιστοσελίδων, εξειδικευμένο λογισμικό, SEO και ψηφιακή στρατηγική σε σύγχρονες επιχειρήσεις και εμπορικές μάρκες σε όλη την Κύπρο και την Ευρώπη.'
                            : 'STELLAR REACH provides web engineering, custom software, SEO, and digital strategy support to modern businesses, growing enterprises, and commercial brands across Cyprus and Europe.'}
                    </p>
                </div>

                {/* 4-Column Directory Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto pb-12">
                    {/* Column 1: ABOUT US */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-4">
                            {el ? 'Η ΕΤΑΙΡΕΙΑ' : 'ABOUT US'}
                        </h4>
                        <ul className="space-y-2.5 text-slate-400">
                            <li><Link href={r.about} className="hover:text-cyan-400 transition-colors">{el ? 'Ποιοι είμαστε' : 'Our Mission & Studio'}</Link></li>
                            <li><Link href="/portfolio" className="hover:text-cyan-400 transition-colors">{el ? 'Έργα μας' : 'Featured Projects'}</Link></li>
                            <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">{el ? 'Άρθρα & Οδηγοί' : 'Insights & Guides'}</Link></li>
                            <li><Link href={r.pricing} className="hover:text-cyan-400 transition-colors">{el ? 'Τιμές & Πακέτα' : 'Pricing & Packages'}</Link></li>
                            <li><Link href={r.contact} className="hover:text-cyan-400 transition-colors">{el ? 'Συνεργαστείτε μαζί μας' : 'Work with Us'}</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: SERVICES */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-4">
                            {el ? 'ΥΠΗΡΕΣΙΕΣ' : 'SERVICES'}
                        </h4>
                        {/* Each link points at its own indexable landing page. These
                            previously all pointed at /#services, which gave Google a
                            single anchor to rank instead of nine pages. */}
                        <ul className="space-y-2.5 text-slate-400">
                            {footerServices.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={serviceHref(service.slug)}
                                        className="hover:text-cyan-400 transition-colors"
                                    >
                                        {serviceName(service.slug, service.name)}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href={r.services} className="hover:text-cyan-400 transition-colors">
                                    {el ? 'Όλες οι υπηρεσίες →' : 'All services →'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: LOCATIONS */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-4">
                            {el ? 'ΠΟΥ ΔΡΑΣΤΗΡΙΟΠΟΙΟΥΜΑΣΤΕ' : 'WHERE WE WORK'}
                        </h4>
                        <ul className="space-y-2.5 text-slate-400">
                            {locations.map((location) => (
                                <li key={location.slug}>
                                    <Link
                                        href={locationHref(location.slug)}
                                        className="hover:text-cyan-400 transition-colors"
                                    >
                                        {el ? 'Ιστοσελίδες ' : 'Web Design '}
                                        {locationCity(location.slug, location.city)}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href={r.pricing} className="hover:text-cyan-400 transition-colors">
                                    {el ? 'Τιμές & Πακέτα' : 'Pricing & Packages'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: CONTACT US */}
                    <div>
                        <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white mb-4">
                            {el ? 'ΕΠΙΚΟΙΝΩΝΙΑ' : 'CONTACT US'}
                        </h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><Link href={r.contact} className="hover:text-cyan-400 transition-colors">{el ? 'Γενικές ερωτήσεις' : 'General Inquiry'}</Link></li>
                            <li><Link href={r.contact} className="hover:text-cyan-400 transition-colors">{el ? 'Ζητήστε προσφορά' : 'Request Custom Quote'}</Link></li>
                            
                            {/* Social Icons — only the profiles that actually exist */}
                            {socialLinks.length > 0 && (
                                <li className="pt-2 flex items-center gap-3">
                                    {socialLinks.map(({ key, url, Icon }) => (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer me"
                                            className="text-slate-300 hover:text-cyan-400 transition-colors"
                                            aria-label={`${site.name} on ${key.charAt(0).toUpperCase()}${key.slice(1)}`}
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    ))}
                                </li>
                            )}

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

                            {/* Address. Deliberately NOT translated: Google
                                cross-references name/address/phone across the web
                                and inconsistent forms weaken the local listing.
                                One canonical spelling everywhere. */}
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
                    {/* Legal pages are English-only for now; the Greek footer
                        links to them with Greek labels rather than 404ing. */}
                    <Link href="/terms" className="hover:text-cyan-400">
                        {el ? 'Όροι Χρήσης' : 'Terms of Use'}
                    </Link>
                    <span>•</span>
                    <Link href="/privacy" className="hover:text-cyan-400">
                        {el ? 'Πολιτική Απορρήτου' : 'Privacy Policy'}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
