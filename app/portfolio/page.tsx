import { Navbar } from "@/components/layout/Navbar";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

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
