import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HexGrid } from "@/components/sections/HexGrid";
import { Services } from "@/components/sections/Services";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Stellar Reach Solutions | High-Tech Web Engineering & SEO Cyprus",
  description:
    "Stellar Reach Solutions is a premier web design and development agency in Cyprus. We design and build fast, modern, and SEO-optimized websites for businesses in Limassol and across Cyprus.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent text-foreground">
      <Navbar />
      <Hero />
      <HexGrid />
      <Services />
      <PortfolioGrid />
      <PricingSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
