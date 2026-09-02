import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { alternatesFor, staticRoutes } from "@/lib/i18n";
import { PricingSection } from "@/components/sections/PricingSection";

export const metadata: Metadata = {
    title: "Pricing & Packages",
    description:
        "Transparent pricing and flexible monthly packages for premium web design and custom software development in Cyprus. Start with zero upfront costs.",
    alternates: {
        canonical: "/pricing",
        languages: alternatesFor({
            en: staticRoutes.pricing.en,
            el: staticRoutes.pricing.el,
        }),
    },
};

export default function PricingPage() {
    return (
        <main className="flex min-h-screen flex-col bg-transparent text-foreground">
            <Navbar locale="en" altHref={staticRoutes.pricing.el} />
            <PricingSection />
        </main>
    );
}
