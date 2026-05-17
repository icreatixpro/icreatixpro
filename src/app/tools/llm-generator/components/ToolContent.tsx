import Link from "next/link";

export default function ToolContent() {
  return (
    <section className="mt-20 space-y-12">

      {/* What is LLM.txt */}
      <div>
        <h2 className="text-3xl font-bold text-[#1A394E] mb-4">
          What is an LLM.txt File?
        </h2>

        <p className="text-gray-600 leading-8">
          An LLM.txt file is a structured AI-friendly text format designed
          to help Large Language Models like ChatGPT, Claude, Gemini, and
          Perplexity better understand website content.
        </p>

        <p className="text-gray-600 leading-8 mt-4">
          It organizes metadata, headings, internal links, page content,
          entities, and semantic information into a machine-readable format
          optimized for AI systems and AI search engines.
        </p>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-3xl font-bold text-[#1A394E] mb-4">
          Benefits of Using an LLM.txt Generator
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>✔ Improve AI readability of your website</li>
          <li>✔ Optimize content for ChatGPT and AI crawlers</li>
          <li>✔ Create structured semantic content</li>
          <li>✔ Improve AI SEO and discoverability</li>
          <li>✔ Extract clean website content instantly</li>
          <li>✔ Generate AI-ready documentation</li>
        </ul>
      </div>

      {/* AI SEO */}
      <div>
        <h2 className="text-3xl font-bold text-[#1A394E] mb-4">
          LLM.txt and AI SEO
        </h2>

        <p className="text-gray-600 leading-8">
          AI SEO is becoming increasingly important as search engines and
          AI assistants rely more on structured and semantic content.
          LLM.txt files help AI systems interpret webpages more accurately,
          improving visibility in AI-generated answers and conversational search.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-2xl p-8 text-white">

        <h2 className="text-3xl font-bold mb-4">
          Need Professional AI SEO Services?
        </h2>

        <p className="text-white/90 mb-6 leading-7">
          iCreatixPRO helps businesses optimize their websites for
          AI search engines, ChatGPT visibility, semantic SEO,
          and modern search algorithms.
        </p>

        <div className="flex flex-wrap gap-4">

          <Link
            href="https://icreatixpro.com/contact"
            className="px-6 py-3 bg-white text-[#1A394E] rounded-xl font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>

          <Link
            href="https://icreatixpro.com/about"
            className="px-6 py-3 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            About iCreatixPRO
          </Link>

        </div>
      </div>

    </section>
  );
}