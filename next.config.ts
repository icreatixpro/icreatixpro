import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // =========================
  // PERFORMANCE BOOST
  // =========================
  reactStrictMode: true,
  compress: true,

  // =========================
  // IMAGES OPTIMIZATION
  // =========================
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.*", // ⚠️ fix below explained
      },
    ],
  },

  // =========================
  // SEO CONTROL
  // =========================
  trailingSlash: false,

  // =========================
  // DEPLOYMENT
  // =========================
  output: "standalone",

  // =========================
  // BEST PRACTICE
  // =========================
  poweredByHeader: false,
};

export default nextConfig;