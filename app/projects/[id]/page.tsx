import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/effects/Reveal";
import { Check } from "lucide-react";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
    return projects.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = getProject(id);
    if (!project) return { title: "Case Study" };

    return {
        title: `${project.title} — ${project.category} Case Study`,
        description: project.challenge,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title: `${project.title} | Stellar Reach Solutions`,
            description: project.challenge,
            images: [{ url: project.image }],
        },
    };
}

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = getProject(id);
    if (!project) notFound();

    return (
        <main className="min-h-screen bg-transparent text-foreground">
            <Navbar />

            <article className="container mx-auto px-4 pt-32">
                <Button variant="ghost" className="mb-8" asChild>
                    <Link href="/portfolio">← Back to Work</Link>
                </Button>

                {/* Header */}
                <Reveal className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {project.category} · {project.year}
                    </span>
                    <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                        <span className="text-gradient">{project.title}</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                        {project.description}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {project.services.map((service) => (
                            <span
                                key={service}
                                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Button variant="gradient" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Visit Live Website →
                            </a>
                        </Button>
                    </div>
                </Reveal>

                {/* Hero image */}
                <Reveal className="mx-auto mt-14 max-w-4xl">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-2xl">
                        <NextImage
                            src={project.image}
                            alt={`${project.title} website`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </Reveal>

                {/* Challenge / Approach */}
                <div className="mx-auto mt-20 grid max-w-4xl gap-12 md:grid-cols-2">
                    <Reveal>
                        <h2 className="font-display text-2xl font-semibold">The Challenge</h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            {project.challenge}
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-display text-2xl font-semibold">Our Approach</h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            {project.approach}
                        </p>
                    </Reveal>
                </div>

                {/* Deliverables */}
                <Reveal className="mx-auto mt-20 max-w-4xl">
                    <h2 className="font-display text-2xl font-semibold">What We Delivered</h2>
                    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                        {project.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                                    <Check className="h-4 w-4" />
                                </span>
                                <span className="text-foreground/90">{item}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </article>

            <div className="mt-24">
                <CTA />
            </div>
            <Footer />
        </main>
    );
}
