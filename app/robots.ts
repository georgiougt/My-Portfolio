import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                // Only API routes are blocked. /_next/ must stay crawlable: it
                // serves the CSS, JavaScript and optimised images Google needs
                // to render the pages, and blocking it meant every page was
                // rendered unstyled with its images missing.
                disallow: ["/api/"],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
