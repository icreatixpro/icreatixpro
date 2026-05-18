import type { Metadata } from "next";

import LLMGenerator from "./LLMGenerator";

import ToolContent from "./components/ToolContent";
import FAQSection from "./components/FAQSection";

import FAQSchema from "./components/FAQSchema";
import HowToSchema from "./components/HowToSchema";
import ToolSchema from "./components/ToolSchema";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title:
    "Free LLM.txt Generator Tool for AI SEO & ChatGPT Optimization | iCreatixPRO",

  description:
    "Generate AI-friendly llms.txt files for ChatGPT, Claude, Gemini, Perplexity, and other large language models. Optimize your website for AI SEO and semantic search.",

  keywords: [
    "llms.txt",
    "LLM.txt generator",
    "AI SEO tool",
    "ChatGPT SEO",
    "AI optimization",
    "Claude SEO",
    "Gemini SEO",
    "AI crawler optimization",
    "semantic SEO",
    "AI-friendly content",
    "LLM optimization",
    "AI search optimization",
    "machine-readable content",
    "AI content extraction",
    "Perplexity SEO",
  ],

  authors: [
    {
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
  ],

  creator: "iCreatixPRO",

  publisher: "iCreatixPRO",

  metadataBase: new URL("https://icreatixpro.com"),

  alternates: {
    canonical:
      "https://icreatixpro.com/tools/llm-generator",
  },

  openGraph: {
    title:
      "Free LLM.txt Generator Tool for AI SEO",

    description:
      "Generate AI-friendly llms.txt files optimized for ChatGPT, Claude, Gemini, and AI search engines.",

    url:
      "https://icreatixpro.com/tools/llm-generator",

    siteName: "iCreatixPRO",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/og/llm-generator.png",
        width: 1200,
        height: 630,
        alt: "LLM.txt Generator Tool by iCreatixPRO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Free LLM.txt Generator Tool",

    description:
      "Generate AI-friendly llms.txt files for AI SEO and semantic optimization.",

    images: ["/og/llm-generator.png"],
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

  category: "SEO Tools",
};

export default function Page() {
  return (
    <>
      {/* Structured Data */}
      <FAQSchema />
      <HowToSchema />
      <ToolSchema />

      {/* Main Tool */}
      <LLMGenerator />

      {/* SEO Content */}
      <ToolContent />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}