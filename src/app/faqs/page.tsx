// app/faqs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Search, ArrowRight, Sparkles, ChevronDown, 
  Cpu, Globe, Users, BarChart3, Shield, HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs | SEO, AI & Digital Growth Answers | iCreatixPRO",
  description:
    "Find answers to common questions about AI SEO, GEO optimization, SaaS marketing, and digital growth strategies from our experts.",
  alternates: {
    canonical: "https://icreatixpro.com/faqs/",
  },
  openGraph: {
    title: "FAQs | SEO, AI & Digital Growth Answers | iCreatixPRO",
    description:
      "Get expert answers to frequently asked questions about AI SEO, GEO optimization, and website growth strategies.",
    url: "https://icreatixpro.com/faqs/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | iCreatixPRO",
    description:
      "Expert answers to common SEO, AI marketing, and digital growth questions.",
  },
};

export const revalidate = 86400;

// FAQ Data Structure
const faqCategories = [
  {
    name: "AI SEO & GEO",
    icon: Cpu,
    questions: [
      {
        q: "What is AI SEO, and how is it different from traditional SEO?",
        a: "AI SEO optimizes your content for both traditional search engines AND AI-powered platforms like ChatGPT, Perplexity, and Google SGE. While traditional SEO focuses on keywords and backlinks, AI SEO emphasizes entity recognition, semantic relevance, and structured data that LLMs understand. We do both – you need both strategies to dominate modern search.",
      },
      {
        q: "What is Generative Engine Optimization (GEO)?",
        a: "GEO (Generative Engine Optimization) is the process of optimizing your content so it gets cited as a source by LLMs like ChatGPT, Gemini, and Perplexity. It focuses on entity SEO, knowledge graph optimization, and prompt-aware content structuring. When an AI answers a question, GEO helps ensure your brand is the one being referenced.",
      },
      {
        q: "How long does it take to see AI citations?",
        a: "Most clients see initial AI citations within 2-4 months. Full GEO impact typically takes 4-6 months, depending on your domain authority, content quality, and competition.",
      },
    ],
  },
  {
    name: "SaaS & Technical SEO",
    icon: BarChart3,
    questions: [
      {
        q: "What makes SaaS Technical SEO different?",
        a: "SaaS Technical SEO focuses on product-led architectures, JavaScript frameworks (React, Next.js, Vue), faceted navigation, dynamic product pages, and international setups. Unlike standard SEO, SaaS SEO requires advanced crawl budget management, Core Web Vitals optimization for dynamic content, and structured data for software applications.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "Typically, SEO results appear within 3-6 months for established websites. New websites may take 6-12 months. Factors include competition, domain age, content quality, and technical health. We provide transparent monthly reporting so you can track progress.",
      },
      {
        q: "Does schema markup really help with rankings?",
        a: "Yes – schema markup helps search engines understand your content context. For AI SEO, schema is critical. It helps LLMs extract entities, relationships, and key information. We implement FAQ, Product, SoftwareApp, Organization, and Article schemas based on your needs.",
      },
    ],
  },
  {
    name: "Local SEO & PPC",
    icon: Globe,
    questions: [
      {
        q: "What is Local SEO and why does it matter?",
        a: "Local SEO optimizes your online presence to attract more business from relevant local searches. It includes Google Business Profile optimization, local citations, review management, and local content. For businesses with physical locations, it's essential for appearing in map packs and 'near me' searches.",
      },
      {
        q: "How do Google Ads and Meta Ads work together?",
        a: "Google Ads capture high-intent search traffic (people actively looking for your services). Meta Ads (Facebook/Instagram) build brand awareness and retarget interested users. We combine both for a full-funnel approach: awareness → consideration → conversion.",
      },
    ],
  },
  {
    name: "General & Pricing",
    icon: Users,
    questions: [
      {
        q: "What services does iCreatixPRO offer?",
        a: "We specialize in AI SEO, GEO optimization, SaaS Technical SEO, local SEO, Google Ads, Meta Ads, content marketing, email marketing, and web development. We also offer free SEO tools and ebooks to help you grow.",
      },
      {
        q: "Do you offer custom packages?",
        a: "Yes – every client receives a custom package based on their goals, industry, and budget. We don't believe in one-size-fits-all. Contact us for a free consultation and custom quote.",
      },
      {
        q: "How do I get started?",
        a: "Simply contact us via our contact page. We'll schedule a free strategy call to understand your goals, audit your current presence, and propose a tailored growth plan.",
      },
    ],
  },
];

export default function FAQsPage() {
  const lastUpdated = "May 2026";

  // Build FAQ Schema dynamically from the structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap(category =>
      category.questions.map(q => ({
        "@type": "Question",
        name: q.q,
        acceptedAnswer: { "@type": "Answer", text: q.a },
      }))
    ),
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <HelpCircle className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Got Questions?</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Find answers to common questions about AI SEO, GEO optimization, SaaS marketing, and our services.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="faq-search"
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C727B] focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                Know
              </span>
            </h2>
            <p className="mt-4 text-gray-600">
              Browse by category or use the search bar above to find specific answers.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, catIdx) => {
              const CategoryIcon = category.icon;
              return (
                <div key={catIdx} className="faq-category" data-category={category.name}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-[#2C727B]/10">
                      <CategoryIcon className="w-6 h-6 text-[#2C727B]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1A394E]">{category.name}</h2>
                  </div>
                  <div className="space-y-4">
                    {category.questions.map((faq, idx) => (
                      <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <summary className="flex cursor-pointer list-none p-5 font-semibold text-[#1A394E] hover:bg-gray-50 transition-colors">
                          <span className="flex-1">{faq.q}</span>
                          <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still Have Questions? CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-[#1A394E]">Still have questions?</h3>
            <p className="text-gray-600 mt-2">
              We're here to help. Reach out to our team for personalised assistance.
            </p>
            <Link href="/contact">
              <button className="mt-4 px-6 py-2.5 bg-[#2C727B] text-white font-semibold rounded-full shadow-md hover:bg-[#1A394E] transition-all inline-flex items-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer internal links (only approved URLs) */}
      <div className="text-center pb-12 text-sm text-gray-400">
        <Link href="/" className="hover:text-[#2C727B] transition-colors">Home</Link>
        <span className="mx-2">|</span>
        <Link href="/about" className="hover:text-[#2C727B] transition-colors">About</Link>
        <span className="mx-2">|</span>
        <Link href="/services" className="hover:text-[#2C727B] transition-colors">Services</Link>
        <span className="mx-2">|</span>
        <Link href="/contact" className="hover:text-[#2C727B] transition-colors">Contact</Link>
        <span className="mx-2">|</span>
        <Link href="/blogs" className="hover:text-[#2C727B] transition-colors">Blog</Link>
      </div>

      {/* Simple search filter script (works without external libraries) */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('faq-search')?.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.faq-category').forEach(category => {
              const questions = category.querySelectorAll('details');
              let visibleCount = 0;
              questions.forEach(q => {
                const text = q.querySelector('summary span:first-child')?.innerText.toLowerCase() || '';
                if (term === '' || text.includes(term)) {
                  q.style.display = '';
                  visibleCount++;
                } else {
                  q.style.display = 'none';
                }
              });
              category.style.display = visibleCount === 0 && term !== '' ? 'none' : '';
            });
          });
        `
      }} />
    </main>
  );
}