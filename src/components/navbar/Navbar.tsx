"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import DesktopDropdown from "./DesktopDropdown";
import MobileMenu from "./MobileMenu";
import { dropdowns } from "./navData";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 h-16">
        <div
          className={`flex items-center justify-between w-[92%] max-w-6xl px-4 sm:px-6 h-full rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg"
              : "bg-white/30 backdrop-blur-2xl border border-white/40 shadow-md"
          }`}
        >
          {/* Logo only */}
          <Link href="/" className="flex items-center group flex-shrink-0">
          <Image
            src="/logo.png"
            alt="iCreatixPRO"
            width={110}
            height={40}
            priority
            className="w-auto h-auto transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                const fallbackSpan = document.createElement("span");
                fallbackSpan.className = "text-xl font-bold text-gray-800";
                fallbackSpan.innerText = "iCreatixPRO";
                parent.appendChild(fallbackSpan);
              }
            }}
          />
          </Link>

          {/* Desktop navigation - custom order: Home, About, Services, Tools, Blogs, Contact */}
          <div className="hidden md:flex gap-4 lg:gap-8 relative text-[15px] font-medium">
            {/* Home */}
            <Link
              href="/"
              className="nav-link relative text-gray-700 hover:text-[#2C727B] transition-colors duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="nav-link relative text-gray-700 hover:text-[#2C727B] transition-colors duration-300 group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <DesktopDropdown
              title="Services"
              items={dropdowns.services}
              viewAllLink="/services"
              description="Comprehensive digital solutions"
              open={openMenu === "services"}
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            />

            {/* Tools Dropdown */}
            <DesktopDropdown
              title="Tools"
              items={dropdowns.tools}
              viewAllLink="/tools"
              description="Free SEO & marketing tools"
              open={openMenu === "tools"}
              onMouseEnter={() => setOpenMenu("tools")}
              onMouseLeave={() => setOpenMenu(null)}
            />

            {/* Blogs */}
            <Link
              href="/blogs"
              className="nav-link relative text-gray-700 hover:text-[#2C727B] transition-colors duration-300 group"
            >
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="nav-link relative text-gray-700 hover:text-[#2C727B] transition-colors duration-300 group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Get Free Audit
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 flex items-center justify-center text-gray-800 hover:bg-white/70 transition-all duration-300 active:scale-95"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}