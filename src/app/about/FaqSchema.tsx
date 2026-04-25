export default function FaqSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes iCreatixPRO different from other SEO agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build autonomous AI systems that predict algorithm changes, optimize for multimodal search (voice, visual, GenAI), and focus on revenue growth—not just rankings. Our team includes ex-Google engineers and AI researchers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer AI-powered SEO services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we use proprietary machine learning models for predictive keyword intelligence, automated optimization, and real-time rank tracking across search engines including Google, ChatGPT, and Gemini.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries do you specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with SaaS, ecommerce, healthcare, finance, and enterprise clients. Our AI systems adapt to any industry vertical.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to see results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most clients see initial improvements in 30-60 days, with significant revenue growth within 6 months. Our average client ROI is 300%+ in the first year.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide international SEO services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we\'ve helped businesses scale across 15+ countries with multilingual SEO, hreflang optimization, and local search strategies.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}