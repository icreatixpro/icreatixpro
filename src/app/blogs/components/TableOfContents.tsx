"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("article h2, article h3"));
    const mapped = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: Number(el.tagName.replace("H", "")),
    }));
    setHeadings(mapped);
    
    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );
    
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  
  if (headings.length === 0) return null;
  
  return (
    <nav className="toc-nav">
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`
              ${heading.level === 3 ? "ml-4" : ""}
              transition-colors duration-200
            `}
          >
            <a
              href={`#${heading.id}`}
              className={`
                block py-1 hover:text-[#2C727B] transition-colors
                ${activeId === heading.id ? "text-[#2C727B] font-medium border-l-2 border-[#2C727B] pl-2" : "text-gray-600"}
              `}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}