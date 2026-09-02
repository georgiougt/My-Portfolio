import type { Metadata } from "next";
import "../globals.css";
import { RootShell } from "@/components/layout/RootShell";
import { alternatesFor, staticRoutes } from "@/lib/i18n";

const siteUrl = "https://stellar-reach-solutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stellar Reach Solutions | Κατασκευή Ιστοσελίδων & SEO Κύπρος",
    template: "%s | Stellar Reach Solutions",
  },
  description:
    "Η Stellar Reach Solutions είναι εταιρεία κατασκευής ιστοσελίδων και SEO στην Κύπρο. Φτιάχνουμε γρήγορες, σύγχρονες και ασφαλείς ιστοσελίδες για επιχειρήσεις στη Λεμεσό και σε όλη την Κύπρο.",
  keywords: [
    "κατασκευή ιστοσελίδων Κύπρος",
    "σχεδιασμός ιστοσελίδων Κύπρος",
    "κατασκευή ιστοσελίδων Λεμεσός",
    "κατασκευή ιστοσελίδων Λευκωσία",
    "SEO Κύπρος",
    "τοπικό SEO Κύπρος",
    "κατασκευή eshop Κύπρος",
    "Google Ads Κύπρος",
    "διαφήμιση Facebook Κύπρος",
    "εταιρεία ιστοσελίδων Κύπρος",
  ],
  authors: [{ name: "George Georgiou" }],
  creator: "Stellar Reach Solutions",
  publisher: "Stellar Reach Solutions",
  applicationName: "Stellar Reach Solutions",
  alternates: {
    canonical: staticRoutes.home.el,
    languages: alternatesFor({
      en: staticRoutes.home.en,
      el: staticRoutes.home.el,
    }),
  },
  openGraph: {
    type: "website",
    locale: "el_CY",
    alternateLocale: ["en_US"],
    url: `${siteUrl}${staticRoutes.home.el}`,
    siteName: "Stellar Reach Solutions",
    title: "Stellar Reach Solutions | Κατασκευή Ιστοσελίδων & SEO Κύπρος",
    description:
      "Εταιρεία κατασκευής ιστοσελίδων και SEO στην Κύπρο. Γρήγορες, σύγχρονες ιστοσελίδες για επιχειρήσεις στη Λεμεσό και σε όλη την Κύπρο.",
    images: [
      {
        url: "/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Stellar Reach Solutions — κατασκευή ιστοσελίδων στην Κύπρο",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellar Reach Solutions | Κατασκευή Ιστοσελίδων & SEO Κύπρος",
    description:
      "Εταιρεία κατασκευής ιστοσελίδων και SEO στην Κύπρο.",
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

export default function GreekRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="el">{children}</RootShell>;
}
