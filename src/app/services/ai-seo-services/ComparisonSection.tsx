// app/services/ai-seo-services/ComparisonSection.tsx
export default function ComparisonSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A394E]">
          AI SEO vs Traditional SEO
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-[#1A394E]">🔍 Traditional SEO</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✓ Keyword density focus</li>
              <li>✓ Backlink quantity</li>
              <li>✓ Google-only optimization</li>
              <li>✓ Static SERP ranking</li>
            </ul>
          </div>
          <div className="bg-[#1A394E] p-6 rounded-xl shadow text-white">
            <h3 className="text-2xl font-bold">🤖 AI SEO (GEO)</h3>
            <ul className="mt-4 space-y-2">
              <li>✓ Entity & semantic relevance</li>
              <li>✓ LLM citation optimization</li>
              <li>✓ Multi-engine: Google, ChatGPT, Perplexity</li>
              <li>✓ Dynamic AI ranking factors</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600">
          AI SEO ensures your brand appears in generative answers, not just blue links.
        </p>
      </div>
    </section>
  );
}