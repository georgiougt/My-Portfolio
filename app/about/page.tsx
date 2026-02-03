import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";

export default function About() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />
            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                        <div className="flex-1">
                            <h1 className="mb-8 text-4xl font-bold md:text-5xl">
                                <span className="text-gradient">About Me</span>
                            </h1>

                            <div className="space-y-6 text-lg text-muted-foreground">
                                <p>
                                    I am an Electrical and Computer Engineer with a strong foundation in both software development and embedded systems.
                                    Holding a Master&apos;s degree from the Aristotle University of Thessaloniki, I have navigated through complex technical landscapes—from developing high-performance C++ applications for telecom giants to teaching advanced computer architecture.
                                </p>
                                <p>
                                    My professional journey is diverse, spanning roles as a Software Developer, Engineering Lecturer, and IT Manager.
                                    Currently, I combine my technical expertise with my creative passion as a Freelance Web Developer, building robust and engaging digital solutions.
                                    I thrive on solving challenging problems, whether they lie in database optimization or crafting pixel-perfect user interfaces.
                                </p>
                            </div>
                        </div>

                        <div className="shrink-0 relative">
                            {/* Profile Image Frame */}
                            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-secondary/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                <Image
                                    src="/profile.jpg"
                                    alt="George Georgiou"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Decorative backdrop */}
                            <div className="absolute inset-0 w-full h-full rounded-2xl bg-primary/10 -z-10 scale-95 translate-x-4 translate-y-4" />
                        </div>
                    </div>

                    <h2 className="mb-6 text-2xl font-bold">Experience</h2>
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
                            <h3 className="text-xl font-semibold">IT & Marketing Manager</h3>
                            <p className="text-sm text-primary">Y. Skembedjis & Sons Group of Companies • Nov 2024 - Present</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-accent border-4 border-background" />
                            <h3 className="text-xl font-semibold">Support Engineer / Project Manager</h3>
                            <p className="text-sm text-primary">DCON IT-AV Solutions • Apr 2024 - Present</p>
                            <p className="mt-2 text-muted-foreground">Freelancing</p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                            <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
                            <p className="text-sm text-primary">Freelance • 2022 - Present</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                            <h3 className="text-xl font-semibold">Experienced Software Developer (C++, SQL)</h3>
                            <p className="text-sm text-primary">Amdocs, Cyprus • July 2023 - April 2024</p>
                            <p className="mt-2 text-muted-foreground">
                                Development for Invoicing Team for Vodafone Italy. Production Incident Handling and Customer Migration.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                            <h3 className="text-xl font-semibold">Junior Software Developer (C++, SQL)</h3>
                            <p className="text-sm text-primary">Amdocs, Cyprus • Dec 2021 - July 2023</p>
                            <p className="mt-2 text-muted-foreground">Development for Invoicing Team for Vodafone Italy.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-accent border-4 border-background" />
                            <h3 className="text-xl font-semibold">Front-End Web Programming</h3>
                            <p className="text-sm text-primary">Google Developer Challenge Scholarship • Nov 2017 - Feb 2018</p>
                        </div>
                    </div>

                    <h2 className="mb-6 mt-12 text-2xl font-bold">Education</h2>
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
