// app/services/geo-optimization-services/ComparisonSection.tsx
export default function ComparisonSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">GEO vs Traditional SEO</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-700">📜 Traditional SEO</h3>
            <ul className="mt-4 space-y-2">
              <li>✓ Keyword density</li>
              <li>✓ Backlink quantity</li>
              <li>✓ Blue link rankings</li>
              <li>✓ Google-only focus</li>
            </ul>
          </div>
          <div className="bg-[#1A394E] p-6 rounded-xl text-white">
            <h3 className="text-2xl font-bold">🤖 GEO</h3>
            <ul className="mt-4 space-y-2">
              <li>✓ AI citations</li>
              <li>✓ Entity relevance</li>
              <li>✓ Answer engine visibility</li>
              <li>✓ Multi-AI platforms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}