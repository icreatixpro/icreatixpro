// app/services/geo-optimization-services/CTASection.tsx
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#1A394E] to-[#2C727B] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Get Featured in AI Search Results Before Your Competitors Do</h2>
      <p className="mt-3 text-gray-200 max-w-xl mx-auto">Claim your free GEO audit and start dominating AI answers today.</p>
      <div className="mt-6">
        <Link href="https://icreatixpro.com/contact" className="inline-block px-8 py-3 bg-white text-[#1A394E] font-bold rounded-lg shadow hover:shadow-lg transition">Free GEO Audit →</Link>
      </div>
    </section>
  );
}