import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense, lazy } from "react";
import "./globals.css";
import NProgressBar from "@/components/NProgressBar";
import Footer from "@/components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// 🔥 LAZY LOAD NAVBAR (reduces initial JS)
const Navbar = lazy(() => import("@/components/navbar"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icreatixpro.com"),
  title: "AI SEO Agency | AEO, GEO & Digital Growth Experts",
  description:
    "Rank higher in Google and AI search with AI-powered SEO, AEO and GEO services designed to increase traffic, leads, conversions, and long-term growth.",
  keywords: [
    "AI SEO agency",
    "AI SEO services",
    "AEO optimization services",
    "Generative Engine Optimization",
    "GEO SEO services",
    "SEO agency for Google ranking",
  ],
  robots: {
    index: true,
    follow: true,
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

        {/* 🚀 NON-BLOCKING GTM */}
        <Script
          id="gtm"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MN22Z8R2');
          `}
        </Script>

        {/* GTM NOSCRIPT */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MN22Z8R2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* GA4 NON-BLOCKING */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DYT83YMFXV"
          strategy="afterInteractive"
        />

        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DYT83YMFXV', {
              send_page_view: true
            });
          `}
        </Script>

        {/* 🔥 PERFORMANCE FIXED BACKGROUND (LESS BLUR = BETTER INP) */}
        <div className="fixed inset-0 -z-20 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-[var(--primary-color)] opacity-15 blur-[100px] rounded-full top-[-120px] left-[-120px]" />
          <div className="absolute w-[400px] h-[400px] bg-[var(--accent-color)] opacity-15 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />
        </div>

        {/* PROGRESS BAR (KEEP) */}
        <Suspense fallback={null}>
          <NProgressBar />
        </Suspense>

        {/* NAVBAR (lazy loaded) */}
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>

        {/* MAIN */}
        <main className="pt-0 px-6 max-w-7xl mx-auto">
          {children}
        </main>

        {/* FOOTER (can stay static) */}
        <Footer />

        <SpeedInsights />
        <Analytics />

        {/* ORGANIZATION SCHEMA */}
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

        {/* WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "iCreatixPRO",
              url: "https://icreatixpro.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://icreatixpro.com/search?q={query}",
                "query-input": "required name=query",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}