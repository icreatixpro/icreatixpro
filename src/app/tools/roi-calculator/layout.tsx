import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Calculator for Ads | Google, Meta & PPC Analysis",
  description:
    "Calculate ad ROI, ROAS & profit instantly for Google Ads, Meta, TikTok & PPC campaigns. Free tool with benchmarks, insights and optimization tips.",
  keywords: [
    "ROI calculator",
    "ROAS calculator",
    "Google Ads ROI",
    "Meta Ads ROI",
    "PPC calculator",
    "ad profit calculator",
    "marketing ROI tool",
    "digital ads calculator",
  ],
  // Canonical URL
  alternates: {
    canonical: "/tools/roi-calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Free Ad ROI Calculator | Instantly Calculate ROAS & Profit",
    description:
      "Analyze your ad spend vs revenue and get instant ROI, ROAS & profit insights for Google, Meta & TikTok ads.",
    url: "https://icreatixpro.com/tools/roi-calculator",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Ad ROI Calculator",
    description:
      "Instant ROI, ROAS & profit analysis for your ad campaigns.",
  },
};

export default function ROILayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-[#EEF5F6] min-h-screen w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {title && (
          <header className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1A394E]">
              {title}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Professional marketing ROI & ROAS calculator for performance ads
            </p>
          </header>
        )}

        <main className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}