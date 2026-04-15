import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icreatixpro.com"),

  title: {
    default: "AI SEO, AEO & GEO Services for Business Growth",
    template: "%s | iCreatixPRO",
  },

  description:
    "AI-powered SEO, AEO and GEO services to boost rankings, drive organic traffic, and grow your business visibility in search results.",

  keywords: [
    "AI SEO agency",
    "SEO services",
    "AEO optimization",
    "GEO SEO",
    "technical SEO",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "iCreatixPRO",
    description:
      "AI-powered SEO and digital growth systems for modern businesses.",
    url: "https://icreatixpro.com",
    siteName: "iCreatixPRO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "iCreatixPRO",
    description:
      "AI SEO agency helping businesses grow with scalable strategies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
>
        {/* 🔥 GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute w-[600px] h-[600px] bg-[var(--primary-color)] opacity-20 blur-[150px] rounded-full top-[-150px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-[var(--accent-color)] opacity-20 blur-[150px] rounded-full bottom-[-120px] right-[-120px]" />
        </div>

        {/* 🔥 Navbar */}
        <Navbar />

        {/* 🔥 Page Content */}
        <main className="pt-16 px-6 max-w-7xl mx-auto">
          {children}
        </main>

        {/* 🔥 Footer */}
        <Footer />

        {/* 🔥 GLOBAL SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "iCreatixPRO",
              url: "https://icreatixpro.com",
              logo: "https://icreatixpro.com/logo.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
