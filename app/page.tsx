import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { SpectralWave } from "@/components/effects/SpectralWave";

export const metadata: Metadata = {
  title: "Stellar Reach Solutions | Premium Web Design & SEO Cyprus",
  description:
    "Stellar Reach Solutions is a premier web design and development agency in Cyprus. We design and build fast, modern, and SEO-optimized websites for businesses in Limassol and across Cyprus.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Hero />
      <SpectralWave />
      <Stats />
      <Services />
      <SpectralWave />
      <Process />
      <PortfolioGrid />
      <SpectralWave />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
