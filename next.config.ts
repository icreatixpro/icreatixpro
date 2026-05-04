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
        hostname: "**.cdn.*", // Fixed pattern
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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

  // =========================
  // SECURITY HEADERS (to fix Best Practices)
  // =========================
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // =========================
  // BUNDLE OPTIMIZATION
  // =========================
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default nextConfig;