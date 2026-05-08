// app/services/ai-seo-services/TrustSection.tsx
export default function TrustSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A394E]">
          AI SEO Agency for Global Brands
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          We combine Generative Engine Optimization (GEO) with technical SEO to boost visibility on Google, ChatGPT, Perplexity, and Gemini.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#F9FAFB] rounded-xl text-center">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-bold text-xl">Certified AI SEO Experts</h3>
            <p className="text-gray-600 mt-2">Google & AI search certified team.</p>
          </div>
          <div className="p-6 bg-[#F9FAFB] rounded-xl text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-bold text-xl">Global Reach</h3>
            <p className="text-gray-600 mt-2">Proven results in USA, UK, UAE, Europe.</p>
          </div>
          <div className="p-6 bg-[#F9FAFB] rounded-xl text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-bold text-xl">Transparent Reporting</h3>
            <p className="text-gray-600 mt-2">Real-time AI ranking dashboards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}