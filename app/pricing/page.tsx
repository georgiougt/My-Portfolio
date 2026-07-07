import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { PricingSection } from "@/components/sections/PricingSection";

export const metadata: Metadata = {
    title: "Pricing & Packages",
    description:
        "Transparent pricing and flexible monthly packages for premium web design and custom software development in Cyprus. Start with zero upfront costs.",
    alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            <Navbar />
            <PricingSection />
        </main>
    );
}
