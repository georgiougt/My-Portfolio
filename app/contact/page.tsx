import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";

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

                    <ContactForm />

                </div>
            </div>
        </main>
    );
}
