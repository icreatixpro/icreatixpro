export default function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate an LLM.txt File",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter URL",
        text: "Paste the webpage URL into the generator.",
      },
      {
        "@type": "HowToStep",
        name: "Generate",
        text: "Click Generate to extract and structure content.",
      },
      {
        "@type": "HowToStep",
        name: "Download",
        text: "Copy or download the generated llms.txt file.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}