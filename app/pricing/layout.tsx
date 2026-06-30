import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing & Packages",
    description:
        "Transparent web design and development pricing from Stellar Reach Solutions. Professional website packages tailored for businesses in Cyprus.",
    alternates: { canonical: "/pricing" },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
