import {
  Gauge,
  FileText,
  Code,
  AlertCircle,
  Zap,
  Search,
  Server,
  Link2,
  Smartphone,
  Award,
  Users,
  Shield,
  Heart,
  TrendingUp,
  Target,
  Eye,
  Activity,
} from "lucide-react";

// Stats Data
export const stats = [
  { value: "89%", label: "Speed Improvement", icon: Gauge },
  { value: "15K+", label: "Pages Indexed", icon: FileText },
  { value: "100%", label: "Schema Coverage", icon: Code },
  { value: "0", label: "Crawl Errors", icon: AlertCircle },
];

// Services Data
export const servicesList = [
  { icon: Zap, title: "Site Speed Optimization", description: "Improve loading times and Core Web Vitals for better rankings and user experience.", features: ["Image Optimization", "Caching Implementation", "CSS/JS Minification", "CDN Setup", "Server Response Time"], link: "/services/technical-seo", ctaText: "Improve site speed" },
  { icon: Search, title: "Crawl Budget Analysis", description: "Optimize how search engines crawl and index your website for maximum efficiency.", features: ["Crawl Error Fixes", "Robots.txt Optimization", "XML Sitemaps", "Internal Linking", "Orphan Page Discovery"], link: "/services/technical-seo", ctaText: "Fix crawl issues" },
  { icon: Code, title: "Schema Markup Implementation", description: "Add structured data to enable rich snippets and enhanced search results.", features: ["Organization Schema", "LocalBusiness Schema", "Product Schema", "FAQ Schema", "Article Schema"], link: "/services/technical-seo", ctaText: "Implement schema" },
  { icon: Smartphone, title: "Mobile Optimization", description: "Ensure your website delivers an exceptional experience on all mobile devices.", features: ["Responsive Design", "Mobile Usability", "Viewport Configuration", "Touch-friendly Navigation", "Mobile Speed"], link: "/services/technical-seo", ctaText: "Optimize mobile" },
  { icon: Link2, title: "Canonical & Redirects", description: "Fix duplicate content issues and implement proper redirect strategies.", features: ["Canonical Tags", "301 Redirects", "WWW vs Non-WWW", "Trailing Slash Consistency", "URL Parameter Handling"], link: "/services/search-engine-optimization", ctaText: "Fix redirect chains" },
  { icon: Server, title: "JavaScript SEO", description: "Optimize JavaScript-heavy websites for search engine crawling and indexing.", features: ["Rendering Optimization", "Dynamic Content", "Lazy Loading", "Pre-rendering", "Hydration Fixes"], link: "/services/technical-seo", ctaText: "Optimize JS SEO" },
];

// Pricing Plans
export const plans = [
  { title: "Technical SEO Audit", price: "$2,499", features: ["Site Speed Analysis", "Crawlability Review", "Schema Audit", "Mobile Testing", "Canonical Check", "Detailed Report (50+ pages)"], isPopular: false },
  { title: "Technical SEO Management", price: "$1,500", features: ["Ongoing Monitoring", "Monthly Fixes", "Core Web Vitals Optimization", "Schema Implementation", "Crawl Budget Management", "Weekly Reports"], isPopular: true },
  { title: "Enterprise Technical SEO", price: "Custom", features: ["Full Infrastructure Audit", "JavaScript SEO", "International SEO", "API Integration", "Custom Development Support", "Dedicated Technical SEO Lead"], isPopular: false },
];

// Reasons to Choose
export const reasons = [
  { icon: Award, title: "Technical SEO Experts", desc: "Specialized in infrastructure optimization" },
  { icon: Users, title: "Certified Team", desc: "Google-certified technical SEO specialists" },
  { icon: Shield, title: "Data-Driven", desc: "All fixes based on real crawl data" },
  { icon: Heart, title: "Transparent Reporting", desc: "Real-time technical health dashboards" },
];

// Testimonials
export const testimonialsData = [
  { name: "Mark Anderson", role: "CTO, TechFlow", content: "Our Core Web Vitals improved dramatically. Site speed went from 45 to 89 on mobile!", rating: 5, result: "44pt speed gain" },
  { name: "Sarah Williams", role: "SEO Director", content: "They fixed our crawl budget issues and indexed 15K+ pages in 30 days.", rating: 5, result: "15K+ pages indexed" },
  { name: "David Chen", role: "Head of Digital", content: "Finally found a technical SEO agency that understands schema. Our rich snippets are now live!", rating: 5, result: "Rich snippets live" },
];

// Tools
export const tools = [
  "Google Search Console", "Screaming Frog", "Ahrefs", "SEMrush", "PageSpeed Insights",
  "GTmetrix", "WebPageTest", "Lighthouse", "DeepCrawl", "Botify",
];

// Core Web Vitals Data
export const coreWebVitalsData = [
  { metric: "LCP (Largest Contentful Paint)", good: "<2.5s", needsImprovement: "2.5-4s", poor: ">4s" },
  { metric: "INP (Interaction to Next Paint)", good: "<200ms", needsImprovement: "200-500ms", poor: ">500ms" },
  { metric: "CLS (Cumulative Layout Shift)", good: "<0.1", needsImprovement: "0.1-0.25", poor: ">0.25" },
];

// FAQs
export const faqs = [
  { q: "What is technical SEO and why is it important?", a: "Technical SEO optimizes your website's infrastructure so search engines can crawl, index, and render your pages efficiently. Without solid technical SEO, even great content won't rank." },
  { q: "How long does technical SEO take to show results?", a: "Technical SEO improvements can show results within 2-4 weeks. Fixing crawl errors, indexation issues, and site speed can lead to immediate ranking improvements." },
  { q: "What are Core Web Vitals?", a: "Core Web Vitals are Google's page experience metrics measuring LCP, INP, and CLS. They are ranking factors that affect user experience and search visibility." },
  { q: "How do you fix slow site speed?", a: "We optimize images, implement caching, minify CSS/JS, use CDN, reduce server response time, and eliminate render-blocking resources." },
  { q: "What is crawl budget optimization?", a: "Crawl budget optimization ensures Googlebot crawls your most important pages efficiently by fixing crawl errors, optimizing robots.txt, and improving internal linking." },
  { q: "Do you implement schema markup?", a: "Yes! We implement schema markup including Organization, LocalBusiness, Product, FAQ, Article, and custom schemas to enable rich snippets." },
  { q: "What's the difference between technical SEO and on-page SEO?", a: "Technical SEO focuses on site infrastructure (speed, crawlability, indexation). On-page SEO focuses on content and meta tags. Both are essential." },
  { q: "How much do technical SEO services cost?", a: "Technical SEO audits start at $2,500. Ongoing technical SEO management starts at $1,500/month for comprehensive monitoring and optimization." },
];