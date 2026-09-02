import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { alternatesFor, staticRoutes } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Stellar Reach Solutions to discuss your website or web app project. Cyprus-based web design and development for businesses in Limassol and beyond.",
    alternates: {
        canonical: "/contact",
        languages: alternatesFor({
            en: staticRoutes.contact.en,
            el: staticRoutes.contact.el,
        }),
    },
};

export default function Contact() {
    return (
        <main className="min-h-screen bg-transparent text-foreground pb-20">
            <Navbar locale="en" altHref={staticRoutes.contact.el} />
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
