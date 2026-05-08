// app/services/saas-technical-seo/WhoThisIsForSection.tsx
export default function WhoThisIsForSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1A394E]">Perfect for High-Ticket SaaS & B2B</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-[#F9FAFB] rounded-lg">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-bold text-xl">SaaS Startups</h3>
            <p className="text-gray-600 text-sm">Seed to Series B – scale organic acquisition.</p>
          </div>
          <div className="p-5 bg-[#F9FAFB] rounded-lg">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-bold text-xl">B2B Platforms</h3>
            <p className="text-gray-600 text-sm">Enterprise SEO for complex product structures.</p>
          </div>
          <div className="p-5 bg-[#F9FAFB] rounded-lg">
            <div className="text-3xl mb-2">📦</div>
            <h3 className="font-bold text-xl">Product-Led Companies</h3>
            <p className="text-gray-600 text-sm">Drive signups through organic product discovery.</p>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <strong>Not for local businesses or basic ecommerce</strong> – we focus exclusively on scalable B2B growth.
        </div>
      </div>
    </section>
  );
}