// app/services/ai-seo-services/TrustExpansionSection.tsx
export default function TrustExpansionSection() {
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">
          Our SEO Methodology & Tools
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-3">🛠️ Tools We Use</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Ahrefs, SEMrush, GSC</li>
              <li>✓ BrightEdge & STAT for SERP tracking</li>
              <li>✓ SurferSEO & Frase for AI content</li>
              <li>✓ Custom LLM monitoring dashboards</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">📊 Reporting & Compliance</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ White-hat, Google-approved methods</li>
              <li>✓ Bi-weekly performance reports</li>
              <li>✓ AI visibility scorecards</li>
              <li>✓ 24/7 access to live dashboards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}