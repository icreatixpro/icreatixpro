// app/glossary/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Search, BookOpen, Sparkles, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO & AI Marketing Glossary | Digital Terms Explained | iCreatixPRO",
  description:
    "Explore a complete glossary of SEO, AI marketing, GEO, and digital growth terms explained simply by iCreatixPRO experts. Over 30 key definitions.",
  alternates: {
    canonical: "https://icreatixpro.com/glossary",
  },
  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
},
  openGraph: {
    title: "SEO & AI Marketing Glossary | iCreatixPRO",
    description:
      "Understand SEO, AI, GEO, and digital marketing terms with easy explanations from iCreatixPRO experts.",
    url: "https://icreatixpro.com/glossary",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & AI Marketing Glossary | iCreatixPRO",
    description:
      "Learn SEO and digital marketing terms in simple language – your complete reference guide.",
  },
};

export const revalidate = 86400;

// Glossary terms data
const glossaryTerms = [
  { term: "AI SEO", definition: "The practice of optimizing content for both traditional search engines (Google) and AI-powered platforms (ChatGPT, Perplexity, Gemini) using entity recognition, semantic relevance, and structured data." },
  { term: "Algorithm", definition: "A set of rules search engines use to rank websites. Google uses hundreds of factors including relevance, authority, and user experience." },
  { term: "Backlinks", definition: "Links from other websites pointing to your site. They act as votes of confidence and are a major ranking factor for search engines." },
  { term: "Canonical URL", definition: "The preferred version of a webpage when duplicate content exists. It tells search engines which URL to index and show in results." },
  { term: "ChatGPT SEO", definition: "Optimizing content so that ChatGPT and similar LLMs cite your brand as a source when answering user queries. A key part of GEO (Generative Engine Optimization)." },
  { term: "Core Web Vitals", definition: "A set of metrics measuring real-world user experience: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)." },
  { term: "Crawl Budget", definition: "The number of pages a search engine bot will crawl on your site within a given time. Important for large websites with thousands of pages." },
  { term: "Domain Authority (DA)", definition: "A search engine ranking score predicting how well a website will rank. Higher DA generally means better chances of ranking high." },
  { term: "Entity SEO", definition: "Optimizing content to help search engines understand real-world people, places, and things (entities) and their relationships. Critical for AI search." },
  { term: "Featured Snippet", definition: "A highlighted answer box that appears at the top of Google search results. Winning this gives you 'position zero'." },
  { term: "Generative Engine Optimization (GEO)", definition: "The process of optimizing content to be cited as a source by AI answer engines like ChatGPT, Perplexity, and Gemini. Focuses on entity relevance and prompt-aware structuring." },
  { term: "Google Search Generative Experience (SGE)", definition: "Google's AI-powered search experience that generates direct answers using generative AI, reducing reliance on traditional blue links." },
  { term: "Hreflang", definition: "An HTML attribute that tells Google which language and regional URL to serve to users. Essential for international SEO." },
  { term: "JavaScript SEO", definition: "Optimizing websites built with JavaScript frameworks (React, Next.js, Vue) to ensure search engines can crawl, render, and index content correctly." },
  { term: "Keyword Cannibalization", definition: "When multiple pages on your site target the same keyword, causing them to compete against each other and dilute ranking potential." },
  { term: "Knowledge Graph", definition: "A database used by Google and other search engines to enhance search results with entity-based information, like people, places, and things." },
  { term: "Large Language Model (LLM)", definition: "An AI model trained on vast amounts of text to understand and generate human-like language. Examples: GPT-4, Gemini, Claude." },
  { term: "Local Pack", definition: "The block of three local business listings that appears in Google search results with a map. A key target for local SEO." },
  { term: "LCP (Largest Contentful Paint)", definition: "A Core Web Vital measuring how long it takes for the largest element on a page (image or text block) to load. Good score: under 2.5 seconds." },
  { term: "Meta Description", definition: "A short HTML attribute summarising a page's content. Not a direct ranking factor but influences click-through rates from search results." },
  { term: "Nofollow Link", definition: "A link attribute telling search engines not to pass authority (link juice). Often used for sponsored or user-generated content." },
  { term: "On-Page SEO", definition: "Optimising individual web pages to rank higher, including title tags, headings, content quality, internal links, and images." },
  { term: "Perplexity AI", definition: "An AI-powered answer engine that cites sources. GEO optimization helps your brand appear in Perplexity's responses." },
  { term: "Prompt Engineering", definition: "Crafting input prompts to get desired outputs from AI models. In GEO, it involves predicting what prompts users will ask AI engines." },
  { term: "Schema Markup", definition: "Structured data added to HTML to help search engines understand page content. Enables rich results like star ratings, FAQs, and events." },
  { term: "Semantic Search", definition: "Search engines understanding the intent and contextual meaning of a query rather than just matching keywords." },
  { term: "SERP (Search Engine Results Page)", definition: "The page you see after typing a query into a search engine, including organic results, ads, featured snippets, and AI overviews." },
  { term: "Structured Data", definition: "A standardized format (JSON-LD, Microdata) to provide explicit clues about a page's content. Used for rich snippets and AI understanding." },
  { term: "Technical SEO", definition: "Optimising website infrastructure for crawling, indexing, and rendering. Includes site speed, mobile-friendliness, and HTTPS security." },
  { term: "Topical Authority", definition: "The depth and breadth of content covering a specific subject, signaling to search engines that you are an expert in that niche." },
  { term: "TF-IDF (Term Frequency-Inverse Document Frequency)", definition: "A statistical measure used to evaluate how important a word is to a document within a collection. Helps create relevant content." },
  { term: "Zero-Click Search", definition: "When a user finds the answer directly on the search results page (featured snippet, AI overview) without clicking a link. Growing with SGE." },
];

// Group terms by first letter
const groupedTerms: { [key: string]: typeof glossaryTerms } = {};
glossaryTerms.forEach(term => {
  const letter = term.term[0].toUpperCase();
  if (!groupedTerms[letter]) groupedTerms[letter] = [];
  groupedTerms[letter].push(term);
});
const alphabet = Object.keys(groupedTerms).sort();

export default function GlossaryPage() {
  const lastUpdated = "May 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SEO & AI Marketing Glossary",
    url: "https://icreatixpro.com/glossary",
    description:
      "A comprehensive glossary of SEO, AI marketing, GEO, and digital growth terms.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://icreatixpro.com/glossary" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <BookOpen className="w-4 h-4 text-[#2C727B]" />
            <span className="text-sm text-white/90 font-semibold">Reference Library</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            SEO & AI Marketing{" "}
            <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent">
              Glossary
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Clear, practical definitions for over 30 essential terms – from AI SEO to Zero-Click Search.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="glossary-search"
                placeholder="Search terms..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2C727B] focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Alphabet navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white/80 backdrop-blur-sm rounded-full py-3 px-4 shadow-sm sticky top-20 z-10">
            {alphabet.map(letter => (
              <a
                key={letter}
                href={`#section-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-gray-600 hover:bg-[#2C727B] hover:text-white transition-all"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Glossary sections */}
          <div id="glossary-content" className="space-y-10">
            {alphabet.map(letter => (
              <div key={letter} id={`section-${letter}`} className="scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-[#2C727B] text-white rounded-full flex items-center justify-center font-bold">
                    {letter}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#2C727B]/30 to-transparent"></div>
                </div>
                <div className="grid gap-4">
                  {groupedTerms[letter].map((term, idx) => (
                    <div key={idx} className="glossary-term bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                      <h3 className="text-lg font-bold text-[#1A394E]">{term.term}</h3>
                      <p className="text-gray-600 mt-1 leading-relaxed">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          <div id="no-results" className="hidden text-center py-12">
            <p className="text-gray-500">No terms match your search. Try a different keyword.</p>
          </div>

          {/* Related resources CTA */}
          <div className="mt-16 p-6 bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-[#1A394E]">Want to go deeper?</h3>
            <p className="text-gray-600 mt-2">
              Explore our <Link href="/blogs" className="text-[#2C727B] font-semibold hover:underline">SEO blog</Link> for in-depth guides, or{" "}
              <Link href="/contact" className="text-[#2C727B] font-semibold hover:underline">contact our experts</Link> for personalised advice.
            </p>
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
        <p className="mt-4 text-gray-400 text-xs">Last updated: {lastUpdated}</p>
      </div>

      {/* Live search filter script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const searchInput = document.getElementById('glossary-search');
          const terms = document.querySelectorAll('.glossary-term');
          const noResults = document.getElementById('no-results');
          const sections = document.querySelectorAll('[id^="section-"]');

          searchInput?.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            let visibleCount = 0;

            terms.forEach(term => {
              const title = term.querySelector('h3')?.innerText.toLowerCase() || '';
              const description = term.querySelector('p')?.innerText.toLowerCase() || '';
              const isVisible = query === '' || title.includes(query) || description.includes(query);
              term.style.display = isVisible ? '' : 'none';
              if (isVisible) visibleCount++;
            });

            // Hide empty letter sections
            sections.forEach(section => {
              const sectionTerms = section.querySelectorAll('.glossary-term');
              let hasVisible = false;
              sectionTerms.forEach(t => { if (t.style.display !== 'none') hasVisible = true; });
              section.style.display = hasVisible ? '' : 'none';
            });

            noResults.style.display = visibleCount === 0 && query !== '' ? 'block' : 'none';
          });
        `
      }} />
    </main>
  );
}