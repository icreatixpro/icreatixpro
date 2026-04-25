"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function FAQItem({ faq, idx }: { faq: { q: string; a: string }; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = `faq-button-${idx}`;
  const panelId = `faq-panel-${idx}`;

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        id={buttonId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 font-semibold text-[#1A394E] flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{faq.q}</span>
        <ChevronRight className={`w-5 h-5 text-[#2C727B] transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`${isOpen ? "block" : "hidden"}`}
      >
        <div className="px-5 pb-5 pt-0 text-[#1A394E]/60 text-sm leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
}