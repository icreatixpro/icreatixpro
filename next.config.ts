import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // =========================
  // PERFORMANCE BOOST
  // =========================
  reactStrictMode: true,
  swcMinify: true,
  compress: true,

  // =========================
  // IMAGES OPTIMIZATION
  // =========================
  images: {
    formats: ["image/avif", "image/webp"],

    // ⚡ SAFE remote patterns (better than **)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.*",
      },
    ],
  },

  // =========================
  // SEO CONTROL (IMPORTANT)
  // =========================
  trailingSlash: false, // ⚠️ recommended for SEO consistency

  // =========================
  // DEPLOYMENT OPTIMIZATION
  // =========================
  output: "standalone",

  // =========================
  // OPTIONAL (BEST PRACTICE)
  // =========================
  poweredByHeader: false,
}

export default nextConfig