import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { alternatesFor, staticRoutes } from "@/lib/i18n";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Stellar Reach Solutions is a Cyprus-based web design and development studio founded by engineer George Georgiou, crafting secure, scalable, high-performance websites and web apps.",
    alternates: {
        canonical: "/about",
        languages: alternatesFor({
            en: staticRoutes.about.en,
            el: staticRoutes.about.el,
        }),
    },
};

export default function About() {
    return (
        <main className="min-h-screen bg-transparent text-foreground pb-20">
            <Navbar locale="en" altHref={staticRoutes.about.el} />
            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                        <div className="flex-1">
                            <h1 className="mb-8 text-4xl font-bold md:text-5xl">
                                <span className="text-gradient">About Us</span>
                            </h1>

                            <div className="space-y-6 text-lg text-muted-foreground">
                                <p>
                                    Stellar Reach Solutions is a premier digital solutions agency specializing in bespoke software development, high-performance web applications, and digital products. We translate complex business requirements into seamless, elegant, and modern technical architectures.
                                </p>
                                <p>
                                    The agency was founded by George Georgiou, an Electrical and Computer Engineer with a Master&apos;s degree from the Aristotle University of Thessaloniki. George has a diverse and extensive background—ranging from designing enterprise-grade, real-time invoicing engines for major telecommunication firms to lecturing advanced computer architecture.
                                </p>
                                <p>
                                    This deep engineering foundation defines our company DNA. At Stellar Reach Solutions, we don&apos;t just build websites; we craft secure, scalable, and highly optimized digital assets that empower businesses to command a powerful online presence and grow effortlessly.
                                </p>
                            </div>
                        </div>

                        <div className="shrink-0 relative">
                            {/* Profile Image Frame */}
                            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-secondary/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                <Image
                                    src="/profile.jpg"
                                    alt="George Georgiou - Founder & Lead Engineer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Decorative backdrop */}
                            <div className="absolute inset-0 w-full h-full rounded-2xl bg-primary/10 -z-10 scale-95 translate-x-4 translate-y-4" />
                        </div>
                    </div>

                    <h2 className="mb-6 text-2xl font-bold">Our Track Record & Experience</h2>
                    <div className="space-y-8 border-l-2 border-border pl-8 relative ml-2">
                        {/* Timeline Items */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                            <h3 className="text-xl font-semibold">Engineering Lecturer</h3>
                            <p className="text-sm text-primary">European University Of Cyprus / Minjiang University China • Aug 2025 - Dec 2025</p>
                            <p className="mt-2 text-muted-foreground">Advanced Computer Architecture, Digital Systems & Lab.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                            <h3 className="text-xl font-semibold">IT & Marketing Management</h3>
                            <p className="text-sm text-primary">Y. Skembedjis & Sons Group of Companies • Nov 2024 - Present</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-accent border-4 border-background" />
                            <h3 className="text-xl font-semibold">Support Engineering & Project Management</h3>
                            <p className="text-sm text-primary">DCON IT-AV Solutions • Apr 2024 - Present</p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                            <h3 className="text-xl font-semibold">Bespoke Web Development & Consultancy</h3>
                            <p className="text-sm text-primary">Freelance Agency Operations • 2022 - Present</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                            <h3 className="text-xl font-semibold">Enterprise Software Engineering (C++, SQL)</h3>
                            <p className="text-sm text-primary">Amdocs, Cyprus • July 2023 - April 2024</p>
                            <p className="mt-2 text-muted-foreground">
                                High-performance telecom billing and invoicing development, data migrations, and production incident response.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                            <h3 className="text-xl font-semibold">Systems & Database Engineering</h3>
                            <p className="text-sm text-primary">Amdocs, Cyprus • Dec 2021 - July 2023</p>
                            <p className="mt-2 text-muted-foreground">Software development for major telecommunications platforms.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-accent border-4 border-background" />
                            <h3 className="text-xl font-semibold">Advanced Front-End Systems</h3>
                            <p className="text-sm text-primary">Google Developer Challenge Scholarship • Nov 2017 - Feb 2018</p>
                        </div>
                    </div>

                    <h2 className="mb-6 mt-12 text-2xl font-bold">Academic Foundation</h2>
                    <div className="space-y-4">
                        <div className="rounded-lg border border-border bg-card p-6">
                            <h3 className="text-xl font-semibold">Aristotle University Of Thessaloniki</h3>
                            <p className="text-sm text-primary">Master of Science in Electronics (Integrated Masters) • Oct 2014 - Dec 2021</p>
                            <p className="mt-2 text-muted-foreground">
                                Electrical Engineering and Computer Engineering. <br />
                                Specialized in Software Engineering, Embedded Systems, Algorithms and Data Structures. <br />
                                <strong>Thesis:</strong> Lung Monitoring Device
                            </p>
                        </div>
                    </div>

                    <h2 className="mb-6 mt-12 text-2xl font-bold">Skills</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Programming Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Python', 'C', 'C++', 'Java', 'C#', 'GoLang', 'JavaScript', 'PHP', 'HTML'].map(skill => (
                                    <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium border border-border text-foreground">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Web Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma', 'Motion Design', 'UI/UX'].map(skill => (
                                    <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium border border-border text-foreground">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tools & Platforms</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Git', 'Docker', 'Jenkins', 'Kubernetes'].map(skill => (
                                    <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium border border-border text-foreground">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Databases</h3>
                            <div className="flex flex-wrap gap-2">
                                {['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'].map(skill => (
                                    <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium border border-border text-foreground">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Other Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Agile/Scrum', 'TDD', 'CI/CD', 'Windows', 'Linux'].map(skill => (
                                    <span key={skill} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium border border-border text-foreground">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
