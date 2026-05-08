// app/services/ai-seo-services/ServicesSection.tsx
export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A394E]">
          AI Search Optimization Services
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Complete suite of AI SEO services for Google and generative engines.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-xl text-[#1A394E]">Technical AI SEO</h3>
            <p className="text-gray-600 mt-2">Core Web Vitals, schema markup, AI crawler optimization.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-xl text-[#1A394E]">GEO Optimization</h3>
            <p className="text-gray-600 mt-2">Rank on ChatGPT, Perplexity, Gemini with prompt-aware content.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-xl text-[#1A394E]">Content for AI Engines</h3>
            <p className="text-gray-600 mt-2">Entity-based, NLP-optimized content for LLM citation.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-xl text-[#1A394E]">AI Visibility Strategy</h3>
            <p className="text-gray-600 mt-2">Multi-channel dominance: Google SGE, Bing AI, and more.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-xl text-[#1A394E]">Topical Authority Building</h3>
            <p className="text-gray-600 mt-2">Pillar-cluster models for AI knowledge graph ranking.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-bold text-xl text-[#1A394E]">AI SEO Consultant</h3>
            <p className="text-gray-600 mt-2">Expert guidance for in-house teams on AI ranking factors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}