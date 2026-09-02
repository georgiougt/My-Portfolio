import type { Metadata } from "next";
import "../globals.css";
import { RootShell } from "@/components/layout/RootShell";
import { alternatesFor, staticRoutes } from "@/lib/i18n";

const siteUrl = "https://stellar-reach-solutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Stellar Reach Solutions | Premium Web Design & SEO Cyprus",
    template: "%s | Stellar Reach Solutions",
  },
  description:
    "Stellar Reach Solutions is a premier web design and development agency in Cyprus. We build fast, modern, and secure websites to grow your business in Limassol and across Cyprus.",
  keywords: [
    "web design Cyprus",
    "web development Cyprus",
    "website design Limassol",
    "web design Nicosia",
    "web design Larnaca",
    "web design Paphos",
    "SEO Cyprus",
    "local SEO Cyprus",
    "ecommerce website Cyprus",
    "Google Ads Cyprus",
    "Next.js development",
    "digital agency Cyprus",
    "Stellar Reach Solutions",
  ],
  authors: [{ name: "George Georgiou" }],
  creator: "Stellar Reach Solutions",
  publisher: "Stellar Reach Solutions",
  applicationName: "Stellar Reach Solutions",
  alternates: {
    canonical: "/",
    languages: alternatesFor({
      en: staticRoutes.home.en,
      el: staticRoutes.home.el,
    }),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["el_CY"],
    url: siteUrl,
    siteName: "Stellar Reach Solutions",
    title: "Stellar Reach Solutions | Premium Web Design & SEO Cyprus",
    description:
      "Stellar Reach Solutions is a premier web design and development agency in Cyprus. We build fast, modern, and secure websites to grow your business in Limassol and across Cyprus.",
    images: [
      {
        url: "/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Stellar Reach Solutions — premium web design and development in Cyprus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellar Reach Solutions | Premium Web Design & SEO Cyprus",
    description:
      "Stellar Reach Solutions is a premier web design and development agency in Cyprus. We build fast, modern, and secure websites.",
    images: ["/hero-banner.jpg"],
  },
  // 👉 Paste the token from Google Search Console → Settings → Ownership
  // verification → HTML tag. Verifying the property is what unlocks the query,
  // indexing and Core Web Vitals data that everything else here is measured by.
  // verification: { google: "PASTE_YOUR_TOKEN_HERE" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="en">{children}</RootShell>;
}
