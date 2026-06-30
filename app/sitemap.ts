import type { MetadataRoute } from "next";

const siteUrl = "https://stellar-reach-solutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/portfolio", "/about", "/pricing", "/contact"];
    const lastModified = new Date();

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
