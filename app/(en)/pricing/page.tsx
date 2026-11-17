import type { Metadata } from "next";
import Link from "next/link";
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
            {/* Links the pricing page to the pricing article, which had no
                internal links pointing at it apart from the blog index. */}
            <section className="container mx-auto px-4 pb-24">
                <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-7 text-center">
                    <h2 className="font-display text-lg font-semibold">
                        Comparing quotes from other agencies?
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Our guide breaks down the real price bands for websites in Cyprus,
                        what pushes a quote up, and the fees that appear after launch.
                    </p>
                    <Link
                        href="/blog/how-much-does-a-website-cost-in-cyprus"
                        className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                    >
                        How much does a website cost in Cyprus?
                    </Link>
                </div>
            </section>
        </main>
    );
}
