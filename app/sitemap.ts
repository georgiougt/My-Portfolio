import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { posts } from "@/lib/posts";
import { servicesEl } from "@/lib/services.el";
import { locationsEl } from "@/lib/locations.el";
import { siteUrl } from "@/lib/seo";
import { staticRoutes, serviceBase, locationBase, hreflangTag } from "@/lib/i18n";

type Entry = MetadataRoute.Sitemap[number];

const abs = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

/**
 * A bilingual pair: both URLs are listed, and each carries xhtml:link
 * alternates pointing at the other plus x-default. Google wants the hreflang
 * set reciprocal, and declaring it in the sitemap as well as in the page head
 * is belt-and-braces — it is the only signal that survives if a page's head is
 * ever cached stale.
 */
function pair(
    enPath: string,
    elPath: string,
    opts: { priority: number; changeFrequency: Entry["changeFrequency"]; lastModified?: Date }
): Entry[] {
    const languages = {
        [hreflangTag.en]: abs(enPath),
        [hreflangTag.el]: abs(elPath),
        "x-default": abs(enPath),
    };
    const common = {
        lastModified: opts.lastModified ?? new Date(),
        changeFrequency: opts.changeFrequency,
        priority: opts.priority,
        alternates: { languages },
    };
    return [
        { url: abs(enPath), ...common },
        { url: abs(elPath), ...common },
    ];
}

/** Single-language URL — no alternates, because no counterpart exists. */
function single(
    path: string,
    opts: { priority: number; changeFrequency: Entry["changeFrequency"]; lastModified?: Date }
): Entry {
    return {
        url: abs(path),
        lastModified: opts.lastModified ?? new Date(),
        changeFrequency: opts.changeFrequency,
        priority: opts.priority,
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
    const bilingualCore: Entry[] = [
        ...pair(staticRoutes.home.en, staticRoutes.home.el, {
            priority: 1,
            changeFrequency: "weekly",
        }),
        ...pair(staticRoutes.services.en, staticRoutes.services.el, {
            priority: 0.9,
            changeFrequency: "monthly",
        }),
        ...pair(staticRoutes.pricing.en, staticRoutes.pricing.el, {
            priority: 0.8,
            changeFrequency: "monthly",
        }),
        ...pair(staticRoutes.contact.en, staticRoutes.contact.el, {
            priority: 0.8,
            changeFrequency: "monthly",
        }),
        ...pair(staticRoutes.about.en, staticRoutes.about.el, {
            priority: 0.7,
            changeFrequency: "monthly",
        }),
    ];

    const serviceEntries: Entry[] = services.flatMap((s) => {
        const el = servicesEl[s.slug];
        const enPath = `${serviceBase.en}/${s.slug}`;
        if (!el) {
            return [single(enPath, { priority: 0.9, changeFrequency: "monthly" })];
        }
        return pair(enPath, `${serviceBase.el}/${el.slug}`, {
            priority: 0.9,
            changeFrequency: "monthly",
        });
    });

    const locationEntries: Entry[] = locations.flatMap((l) => {
        const el = locationsEl[l.slug];
        const enPath = `${locationBase.en}/${l.slug}`;
        if (!el) {
            return [single(enPath, { priority: 0.85, changeFrequency: "monthly" })];
        }
        return pair(enPath, `${locationBase.el}/${el.slug}`, {
            priority: 0.85,
            changeFrequency: "monthly",
        });
    });

    // English-only sections. No hreflang until Greek versions exist.
    const englishOnly: Entry[] = [
        single("/portfolio", { priority: 0.8, changeFrequency: "monthly" }),
        single("/blog", { priority: 0.8, changeFrequency: "weekly" }),
        ...posts.map((p) =>
            single(`/blog/${p.slug}`, {
                priority: 0.7,
                changeFrequency: "monthly",
                lastModified: new Date(p.updated ?? p.published),
            })
        ),
        ...projects.map((p) =>
            single(`/projects/${p.slug}`, { priority: 0.6, changeFrequency: "yearly" })
        ),
        single("/privacy", { priority: 0.2, changeFrequency: "yearly" }),
        single("/terms", { priority: 0.2, changeFrequency: "yearly" }),
    ];

    return [...bilingualCore, ...serviceEntries, ...locationEntries, ...englishOnly];
}
