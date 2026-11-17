import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as fallback. Typically 30–50% smaller than the JPEG/PNG
    // originals, which is the cheapest Core Web Vitals win available.
    formats: ["image/avif", "image/webp"],
    // Long cache on optimised variants — they are content-hashed, so this is safe.
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Strips the "X-Powered-By: Next.js" header. No SEO effect, but it stops
  // advertising the stack and version to anyone scanning.
  poweredByHeader: false,

  // Emits a trailing-slash-free canonical form consistently, so /services and
  // /services/ never both resolve as separate indexable URLs.
  trailingSlash: false,

  async redirects() {
    return [
      {
        // An old URL Google still has on file (reported as a 404 in Search
        // Console). The page lives at /terms.
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Static assets in /public are stable; let browsers and the CDN keep them.
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|mp4|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // The static project sites under /public/sites are hosted on this domain. Keep them
        // out of the index so invented business names, prices and reviews are
        // never served as search results under our domain. Visitors can still
        // open them; the /projects/<slug> pages are what should rank.
        source: "/sites/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
