import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />
            <div className="container mx-auto px-4 pt-32">
                <Button variant="ghost" className="mb-8" asChild>
                    <a href="/portfolio">← Back to Projects</a>
                </Button>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-gradient">Neon Commerce (Project {id})</h1>
                        <div className="flex flex-wrap gap-2">
                            {['Next.js', 'Tailwind', 'Stripe', 'Framer Motion'].map(tag => (
                                <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed">
                            A futuristic e-commerce platform built for high-performance digital fashion brands.
                            The goal was to create an immersive shopping experience that feels like a native app.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button variant="gradient">View Live Demo</Button>
                            <Button variant="outline">View Source</Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Carousel Placeholder */}
                        <Card className="aspect-video w-full bg-zinc-800 flex items-center justify-center border-white/10 text-white/40">
                            Main Screenshot
                        </Card>
                        <div className="grid grid-cols-3 gap-4">
                            <Card className="aspect-video w-full bg-zinc-800 flex items-center justify-center border-white/10 text-xs text-white/40">
                                Shot 2
                            </Card>
                            <Card className="aspect-video w-full bg-zinc-800 flex items-center justify-center border-white/10 text-xs text-white/40">
                                Shot 3
                            </Card>
                            <Card className="aspect-video w-full bg-zinc-800 flex items-center justify-center border-white/10 text-xs text-white/40">
                                Shot 4
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
