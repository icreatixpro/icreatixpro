"use client";

import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<any[]>([]);

  useEffect(() => {
    // Wait for DOM to be fully loaded
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    
    const mapped = elements.map((el: any) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName,
    }));
    
    setHeadings(mapped);
  }, []);

  // Don't render if no headings found
  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="p-4 rounded-xl border bg-white sticky top-24">
      <h3 className="font-semibold mb-3 text-sm">On this page</h3>
      <ul className="space-y-2 text-sm">
        {headings.map((h, i) => (
          <li key={i} className={h.level === "H3" ? "ml-4 text-gray-500" : ""}>
            <a href={`#${h.id}`} className="hover:text-[#2C727B] transition-colors">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}