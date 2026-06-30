import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Stellar Reach Solutions | Web Design & Development in Cyprus",
  description:
    "Stellar Reach Solutions designs and builds premium websites and web apps for businesses in Cyprus. Stunning design, high-performance engineering, and SEO built in.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <PortfolioGrid />
      <CTA />
      <Footer />
    </main>
  );
}
