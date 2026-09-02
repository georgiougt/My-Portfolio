import React from 'react';
import { Inter, Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CursorGlow } from '@/components/effects/CursorGlow';
import { Starfield } from '@/components/effects/Starfield';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { graph, jsonLdProps, organizationSchema, websiteSchema } from '@/lib/seo';
import type { Locale } from '@/lib/i18n';

// Greek needs the greek subset or the font falls back mid-page.
const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin', 'greek'],
});

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
});

/**
 * Site-wide entity graph. Rendered on every page so the Organization and
 * WebSite nodes are always available for page-level nodes (Service,
 * BlogPosting, BreadcrumbList) to reference by @id.
 */
const siteJsonLd = graph(organizationSchema, websiteSchema);

/**
 * The shared <html>/<body> shell.
 *
 * There are two root layouts — one per locale route group — because only a
 * root layout can set <html lang>. Everything inside them is identical, so it
 * lives here rather than being duplicated and drifting.
 */
export function RootShell({
    locale,
    children,
}: {
    locale: Locale;
    children: React.ReactNode;
}) {
    return (
        <html lang={locale === 'el' ? 'el-CY' : 'en'} suppressHydrationWarning>
            <body
                className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
            >
                <script {...jsonLdProps(siteJsonLd)} />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Starfield />
                    <CursorGlow />
                    {children}
                    <WhatsAppButton />
                </ThemeProvider>
            </body>
        </html>
    );
}
