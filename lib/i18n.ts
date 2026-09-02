/**
 * Bilingual routing.
 *
 * English lives at the root (`/services/web-design`) because those URLs are
 * already indexed and moving them would throw away the rankings they have.
 * Greek is purely additive under `/el` with translated slugs, so nothing
 * existing changes.
 *
 * Each locale gets its own root layout via the `(en)` / `(el)` route groups,
 * which is what allows a real <html lang="el"> rather than a nested wrapper.
 */
export const locales = ['en', 'el'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** BCP-47 tags for hreflang. el-CY rather than plain el: this is Cypriot Greek. */
export const hreflangTag: Record<Locale, string> = {
    en: 'en',
    el: 'el-CY',
};

export const localeLabel: Record<Locale, string> = {
    en: 'EN',
    el: 'ΕΛ',
};

/** Full language name, used in the switcher's aria-label. */
export const localeName: Record<Locale, string> = {
    en: 'English',
    el: 'Ελληνικά',
};

/**
 * Static pages that exist in both languages. Anything not listed here is
 * single-language and must NOT emit hreflang — declaring a pair that 404s is
 * worse than declaring nothing.
 */
export const staticRoutes = {
    home: { en: '/', el: '/el' },
    services: { en: '/services', el: '/el/ypiresies' },
    about: { en: '/about', el: '/el/etaireia' },
    contact: { en: '/contact', el: '/el/epikoinonia' },
    pricing: { en: '/pricing', el: '/el/times' },
} as const;

export type StaticRouteKey = keyof typeof staticRoutes;

/** Path prefixes for the two dynamic trees. */
export const serviceBase: Record<Locale, string> = {
    en: '/services',
    el: '/el/ypiresies',
};

export const locationBase: Record<Locale, string> = {
    en: '/web-design',
    el: '/el/kataskevi-istoselidon',
};

/** English-only sections. Listed so it is explicit that they are not yet translated. */
export const englishOnlyRoutes = ['/blog', '/portfolio', '/projects', '/privacy', '/terms'];

/**
 * Builds the `alternates` block for Next metadata.
 *
 * Pass the canonical path for the current locale plus the equivalent path in
 * the other locale. Both directions are emitted, plus x-default pointing at
 * English — Google requires the set to be reciprocal and self-referential.
 */
export function alternatesFor(paths: Partial<Record<Locale, string>>) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
        const path = paths[locale];
        if (path) languages[hreflangTag[locale]] = path;
    }
    if (paths.en) languages['x-default'] = paths.en;
    return languages;
}

/** The other locale — used by the language switcher. */
export function otherLocale(locale: Locale): Locale {
    return locale === 'en' ? 'el' : 'en';
}
