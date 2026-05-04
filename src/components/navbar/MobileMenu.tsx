"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Shield } from "lucide-react";
import { dropdowns } from "./navData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDropdown = (key: string) => {
    setMobileDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] md:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 h-full w-[85vw] max-w-[380px] bg-white shadow-2xl overflow-y-auto overscroll-contain animate-slideInRight">
        {/* Header - Logo only (no duplicate text) */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 p-5 z-10">
          <div className="flex justify-between items-center mb-3">
            <Link href="/" onClick={onClose} className="flex items-center">
              <Image
                src="/logo.png"
                alt="iCreatixPRO"
                width={100}
                height={36}
                className="transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  // Fallback to text only if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement("span");
                    fallback.className = "text-lg font-bold text-gray-800";
                    fallback.innerText = "iCreatixPRO";
                    parent.appendChild(fallback);
                  }
                }}
              />
            </Link>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors active:scale-95 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>
          </div>
          <p className="text-xs text-gray-500">Explore our services and tools</p>
        </div>

        <div className="p-5 flex flex-col gap-2">
          <Link
            href="/"
            className="py-3 px-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-3 px-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            About
          </Link>

          {/* Services dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full flex justify-between items-center py-3 px-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileDropdownOpen.services ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileDropdownOpen.services && (
              <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#2C727B]/20 animate-slideDown">
                {dropdowns.services.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      onClick={onClose}
                    >
                      <Icon className="w-4 h-4 text-[#2C727B]" />
                      <span className="text-sm text-gray-600 flex-1">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Tools dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown("tools")}
              className="w-full flex justify-between items-center py-3 px-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              Tools
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileDropdownOpen.tools ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileDropdownOpen.tools && (
              <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#2C727B]/20 animate-slideDown">
                {dropdowns.tools.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      onClick={onClose}
                    >
                      <Icon className="w-4 h-4 text-[#2C727B]" />
                      <span className="text-sm text-gray-600 flex-1">{item.title}</span>
                      {item.isNew && (
                        <span className="px-1.5 py-0.5 bg-green-100 text-green-600 text-[9px] font-semibold rounded-full">
                          NEW
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/blogs"
            className="py-3 px-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="py-3 px-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link href="/contact" onClick={onClose}>
              <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-md hover:shadow-lg transition-all active:scale-95">
                Get Free Audit
              </button>
            </Link>
          </div>
        </div>

        <div className="p-5 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-[#2C727B]" />
            <p className="text-xs text-gray-500">Secure & Confidential</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}