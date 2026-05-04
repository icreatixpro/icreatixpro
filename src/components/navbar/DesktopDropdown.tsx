"use client";

import { ChevronDown, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  title: string;
  href: string;
  description?: string;
  icon: any;
  isNew?: boolean;
}

interface DesktopDropdownProps {
  title: string;
  items: DropdownItem[];
  viewAllLink: string;
  description: string;
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function DesktopDropdown({
  title,
  items,
  viewAllLink,
  description,
  open,
  onMouseEnter,
  onMouseLeave,
}: DesktopDropdownProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isServices = title === "Services";

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="nav-link text-gray-700 hover:text-[#2C727B] transition-colors duration-300 flex items-center gap-1 group"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-all duration-300 ${
            open ? "rotate-180 text-[#2C727B]" : "group-hover:text-[#2C727B]"
          }`}
        />
      </button>

      <div
        className={`absolute top-full left-0 mt-3 w-[520px] rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden transition-all duration-300 transform origin-top ${
          open
            ? "opacity-100 visible translate-y-0 scale-100"
            : "opacity-0 invisible -translate-y-4 scale-95"
        }`}
      >
        <div className="px-5 pt-4 pb-2 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-[#1A394E]">{title}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{description}</p>
        </div>

        <ul
          className={`grid ${
            isServices ? "grid-cols-2" : "grid-cols-1"
          } gap-2 p-4 max-h-[400px] overflow-y-auto custom-scrollbar`}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={`block p-3 rounded-xl transition-all duration-300 ${
                    hoveredItem === item.title
                      ? "bg-gradient-to-r from-[#2C727B]/10 to-[#1A394E]/10 transform translate-x-1 shadow-sm"
                      : "hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        hoveredItem === item.title
                          ? "bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white"
                          : "bg-gray-100 text-[#2C727B]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-gray-800 font-medium text-[14px]">
                          {item.title}
                        </p>
                        {item.isNew && (
                          <span className="px-1.5 py-0.5 bg-green-100 text-green-600 text-[10px] font-semibold rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-gray-500 text-[12px] mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    {hoveredItem === item.title && (
                      <Zap className="w-3 h-3 text-[#2C727B] animate-pulse flex-shrink-0" />
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-4 py-3 bg-gray-50/80 border-t border-gray-100">
          <Link
            href={viewAllLink}
            className="text-xs text-[#2C727B] font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All {title}
            <ChevronDown className="w-3 h-3 -rotate-90" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2c727b;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}