import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";

export default function About() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />
            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-3xl">
                    <h1 className="mb-8 text-4xl font-bold md:text-5xl">
                        <span className="text-gradient">About Me</span>
                    </h1>

                    <div className="mb-12 space-y-6 text-lg text-muted-foreground">
                        <p>
                            I am a digital product designer with a passion for creating immersive web experiences.
                            My work sits at the intersection of design and engineering, ensuring that every pixel
                            is not only beautiful but also performant and accessible.
                        </p>
                        <p>
                            With over 5 years of experience, I have worked with startups and enterprises to build
                            interfaces that users love.
                        </p>
                        <div className="pt-4">
                            <Button variant="outline" asChild>
                                <a href="#" download>Download CV</a>
                            </Button>
                        </div>
                    </div>

                    <h2 className="mb-6 text-2xl font-bold">Experience</h2>
                    <div className="space-y-8 border-l-2 border-border pl-8 relative ml-2">
                        {/* Timeline Items */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                            <h3 className="text-xl font-semibold">Senior Product Designer</h3>
                            <p className="text-sm text-primary">TechFlow Inc. • 2023 - Present</p>
                            <p className="mt-2 text-muted-foreground">Leading the design system initiative and core product UI overhaul.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                            <h3 className="text-xl font-semibold">UI/UX Designer</h3>
                            <p className="text-sm text-primary">Creative Studio • 2021 - 2023</p>
                            <p className="mt-2 text-muted-foreground">Designed marketing sites and web apps for various clients.</p>
                        </div>
                    </div>

                    <h2 className="mb-6 mt-12 text-2xl font-bold">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {['Figma', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Motion Design', 'UI/UX'].map(skill => (
                            <span key={skill} className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium hover:bg-secondary/20 hover:text-primary cursor-default border border-border transition-colors text-foreground">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
