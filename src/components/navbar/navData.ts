import {
  TrendingUp,
  Search,
  MapPin,
  DollarSign,
  BarChart3,
  Wrench,
  Brain,
  Settings,
  Sparkles,
  Zap,
  Bot,
  Globe,
  Server,
} from "lucide-react";

export const dropdowns = {
  services: [
    { title: "Digital Marketing", href: "/services/digital-marketing", description: "Complete digital marketing strategies to grow your brand.", icon: TrendingUp },
    { title: "Search Engine Optimization", href: "/services/search-engine-optimization", description: "Rank higher on Google with advanced SEO strategies.", icon: Search },
    { title: "Local SEO", href: "/services/local-seo", description: "Get more local customers with Google Maps ranking.", icon: MapPin },
    { title: "Google Ads", href: "/services/google-ads", description: "Drive instant traffic with high-converting PPC ads.", icon: DollarSign },
    { title: "Meta Ads", href: "/services/meta-ads", description: "Scale sales with Facebook & Instagram advertising.", icon: BarChart3 },
    { title: "Technical SEO", href: "/services/technical-seo", description: "Fix site issues and improve core web vitals.", icon: Wrench },
    // NEW SERVICES
    { title: "AI SEO Services", href: "/services/ai-seo-services", description: "Rank on Google, ChatGPT & AI search engines with GEO optimization.", icon: Bot },
    { title: "GEO Optimization", href: "/services/geo-optimization-services", description: "Get cited inside ChatGPT, Perplexity & Gemini answers.", icon: Globe },
    { title: "SaaS Technical SEO", href: "/services/saas-technical-seo", description: "High-ticket technical SEO for B2B & product-led growth.", icon: Server },
  ],
  tools: [
    { title: "LLM.txt Generator", href: "/tools/llm-generator", icon: Brain, isNew: true },
    { title: "Keyword Density Checker", href: "/tools/keyword-density-checker", icon: Search },
    { title: "Meta Tag Generator", href: "/tools/meta-tag-generator", icon: Settings },
    { title: "ROI Calculator", href: "/tools/roi-calculator", icon: DollarSign },
    { title: "AI Blog Title Generator", href: "/tools/ai-title-generator", icon: Sparkles },
    { title: "Image Compressor", href: "/tools/image-compressor", icon: Zap },
    { title: "Local SEO Audit Tool", href: "/tools/local-seo-audit", icon: MapPin },
  ],
};

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];