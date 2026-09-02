import React from 'react';
import Link from 'next/link';
import { Languages } from 'lucide-react';
import { localeName, otherLocale, type Locale } from '@/lib/i18n';

/**
 * Language switcher.
 *
 * Takes the explicit target path rather than deriving it from the current URL:
 * the two trees use translated slugs (/services/web-design ↔
 * /el/ypiresies/schediasmos-istoselidon), so there is no rule that maps one to
 * the other. Each page passes its own counterpart, which also guarantees the
 * switcher and the hreflang tags can never disagree.
 *
 * Pages with no counterpart (the blog, portfolio, legal pages) pass no target
 * and the switcher points at the other language's homepage instead — sending
 * someone to a 404 is worse than sending them to the front door.
 */
export function LanguageSwitcher({
    locale,
    href,
    className = '',
}: {
    locale: Locale;
    href?: string;
    className?: string;
}) {
    const target = otherLocale(locale);
    const fallback = target === 'el' ? '/el' : '/';

    return (
        <Link
            href={href ?? fallback}
            hrefLang={target === 'el' ? 'el-CY' : 'en'}
            lang={target === 'el' ? 'el' : 'en'}
            aria-label={`Switch language to ${localeName[target]}`}
            className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-slate-200 transition-colors hover:text-cyan-400 ${className}`}
        >
            <Languages aria-hidden="true" className="h-4 w-4" />
            {target === 'el' ? 'ΕΛ' : 'EN'}
        </Link>
    );
}
