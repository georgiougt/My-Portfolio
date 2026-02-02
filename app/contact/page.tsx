import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Contact() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />
            <div className="container mx-auto px-4 pt-32">
                <div className="mx-auto max-w-xl">
                    <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">
                        <span className="text-gradient">Get In Touch</span>
                    </h1>
                    <p className="mb-12 text-center text-muted-foreground">
                        Have a project in mind? Let&apos;s build something amazing together.
                    </p>

                    <Card className="p-8">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full rounded-md border border-border bg-background/50 px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-all"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full" variant="gradient">
                                Send Message
                            </Button>
                        </form>
                    </Card>

                </div>
            </div>
        </main>
    );
}
