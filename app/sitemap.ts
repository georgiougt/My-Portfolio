import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const siteUrl = "https://stellar-reach-solutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const routes = ["", "/portfolio", "/about", "/pricing", "/contact"].map(
        (route) => ({
            url: `${siteUrl}${route}`,
            lastModified,
            changeFrequency: (route === "" ? "weekly" : "monthly") as
                | "weekly"
                | "monthly",
            priority: route === "" ? 1 : 0.8,
        })
    );

    const projectRoutes = projects.map((p) => ({
        url: `${siteUrl}/projects/${p.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, ...projectRoutes];
}
