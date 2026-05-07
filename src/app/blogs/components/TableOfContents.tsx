"use client";

import { useEffect, useState } from "react";

interface TocItem {
  text: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Create intersection observer for tracking visible sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 0,
      }
    );

    // Observe all headings
    const headings = items.map((item) => document.getElementById(item.id));
    headings.forEach((heading) => {
      if (heading) observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => {
        if (heading) observer.unobserve(heading);
      });
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => {
          const isActive = activeId === item.id;
          return (
            <li key={i} className={item.level === 3 ? "ml-4" : ""}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`
                  group flex items-start text-sm py-1.5 px-2 -mx-2 rounded transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                  }
                `}
              >
                <span className="flex-shrink-0 w-5 h-5 mr-2 mt-0.5">
                  <svg
                    className={`w-full h-full transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-blue-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="flex-1 leading-relaxed">{item.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
      
      {/* Progress indicator */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>Reading Progress</span>
          <span id="toc-progress-text">0%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            id="toc-progress-bar"
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-300 rounded-full"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </nav>
  );
}