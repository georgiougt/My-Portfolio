import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
    title: "Our Work & Portfolio",
    description:
        "Browse real websites and web apps built by Stellar Reach Solutions for clients across Cyprus — healthcare, services, fintech, education and more.",
    alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />
            <div className="pt-20">
                <PortfolioGrid />
            </div>
        </main>
    );
}
