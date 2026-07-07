import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

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
    "web designer Cyprus",
    "web development Limassol",
    "custom websites Cyprus",
    "ecommerce website Cyprus",
    "web app development",
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
  },
  openGraph: {
    type: "website",
    locale: "en_US",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Stellar Reach Solutions",
  image: `${siteUrl}/hero-banner.jpg`,
  "@id": siteUrl,
  url: siteUrl,
  email: "georgiougt94@icloud.com",
  description:
    "Cyprus-based web design and development studio building fast, modern, high-converting websites and web apps for businesses in Limassol and across Cyprus.",
  founder: {
    "@type": "Person",
    name: "George Georgiou",
  },
  areaServed: [
    { "@type": "City", name: "Limassol" },
    { "@type": "Country", name: "Cyprus" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Limassol",
    addressCountry: "CY",
  },
  knowsAbout: [
    "Web Design",
    "Web Development",
    "E-commerce",
    "Web Applications",
    "SEO",
  ],
  sameAs: ["https://github.com/georgiougt"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorGlow />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
