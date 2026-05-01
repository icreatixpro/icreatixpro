"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown, X, Sparkles, TrendingUp, MapPin, DollarSign, Wrench, BarChart3, Settings, Search, Zap, Shield, Brain } from "lucide-react"
import { useState, useEffect } from "react"

// Dropdown data with icons
const dropdowns = {
  services: [
    { title: "Digital Marketing", href: "/services/digital-marketing", description: "Complete digital marketing strategies to grow your brand.", icon: TrendingUp },
    { title: "Search Engine Optimization", href: "/services/search-engine-optimization", description: "Rank higher on Google with advanced SEO strategies.", icon: Search },
    { title: "Local SEO", href: "/services/local-seo", description: "Get more local customers with Google Maps ranking.", icon: MapPin },
    { title: "Google Ads", href: "/services/google-ads", description: "Drive instant traffic with high-converting PPC ads.", icon: DollarSign },
    { title: "Meta Ads", href: "/services/meta-ads", description: "Scale sales with Facebook & Instagram advertising.", icon: BarChart3 },
    { title: "Technical SEO", href: "/services/technical-seo", description: "Fix site issues and improve core web vitals.", icon: Wrench },
  ],
  tools: [
    { title: "LLM.txt Generator", href: "/tools/llm-generator", icon: Brain, isNew: true },
    { title: "Keyword Density Checker", href: "/tools/keyword-density-checker", icon: Search },
    { title: "Meta Tag Generator", href: "/tools/meta-tag-generator", icon: Settings },
    { title: "ROI Calculator", href: "/tools/roi-calculator", icon: DollarSign },
    { title: "AI Blog Title Generator", href: "/tools/ai-title-generator", icon: Sparkles },
    { title: "Image Compressor", href: "/tools/image-compressor", icon: Zap },
    { title: "Local SEO Audit Tool", href: "/tools/local-seo-audit", icon: MapPin },
  ],
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<{[key: string]: boolean}>({})
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Handle scroll effect with performance optimization
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
        setMobileDropdownOpen({})
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileMenuOpen])

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileDropdownOpen({})
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}>
        <div className={`flex items-center justify-between w-[92%] max-w-6xl px-4 sm:px-6 rounded-2xl transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg py-2" 
            : "bg-white/30 backdrop-blur-2xl border border-white/40 shadow-md py-2"
        }`}>

          {/* LOGO - Left side */}
          <Link href="/" className="flex items-center group flex-shrink-0" onClick={closeMobileMenu}>
            <Image src="/logo.png" alt="iCreatixPRO" width={110} height={40} className="transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* DESKTOP MENU - Hidden on mobile */}
          <div className="hidden md:flex gap-4 lg:gap-8 relative text-[15px] font-medium">
            <Link href="/" className="nav-link relative text-gray-700 hover:text-[#2C727B] transition-colors duration-300 group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="nav-link relative text-gray-700 hover:text-[#2C727B] transition-colors duration-300 group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {Object.keys(dropdowns).map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenMenu(key)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="nav-link text-gray-700 hover:text-[#2C727B] transition-colors duration-300 flex items-center gap-1 group">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${openMenu === key ? "rotate-180 text-[#2C727B]" : "group-hover:text-[#2C727B]"}`} />
                </button>

                {/* Desktop Dropdown */}
                <div className={`absolute top-full left-0 mt-3 w-[520px] rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden transition-all duration-400 transform origin-top ${
                  openMenu === key 
                    ? "opacity-100 visible translate-y-0 scale-100" 
                    : "opacity-0 invisible -translate-y-4 scale-95"
                }`}>
                  <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-[#1A394E]">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {key === "services" ? "Comprehensive digital solutions" : "Free SEO & marketing tools"}
                    </p>
                  </div>
                  
                  <ul className={`grid ${key === "services" ? "grid-cols-2" : "grid-cols-1"} gap-2 p-4 max-h-[400px] overflow-y-auto custom-scrollbar`}>
                    {dropdowns[key as keyof typeof dropdowns].map((item, i) => {
                      const Icon = item.icon
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
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                                hoveredItem === item.title 
                                  ? "bg-gradient-to-br from-[#2C727B] to-[#1A394E] text-white" 
                                  : "bg-gray-100 text-[#2C727B]"
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <p className="text-gray-800 font-medium text-[14px]">{item.title}</p>
                                  {(item as any).isNew && (
                                    <span className="px-1.5 py-0.5 bg-green-100 text-green-600 text-[10px] font-semibold rounded-full">
                                      NEW
                                    </span>
                                  )}
                                </div>
                                {'description' in item && item.description && (
                                  <p className="text-gray-500 text-[12px] mt-0.5 line-clamp-1">{item.description}</p>
                                )}
                              </div>
                              {hoveredItem === item.title && (
                                <Zap className="w-3 h-3 text-[#2C727B] animate-pulse flex-shrink-0" />
                              )}
                            </div>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                  
                  <div className="px-4 py-3 bg-gray-50/80 border-t border-gray-100">
                    <Link href={key === "services" ? "/services" : "/tools"} 
                      className="text-xs text-[#2C727B] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      View All {key.charAt(0).toUpperCase() + key.slice(1)}
                      <ChevronDown className="w-3 h-3 -rotate-90" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/blogs" className="nav-link relative text-gray-700 hover:text-[#2C727B] transition-colors duration-300 group">
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="nav-link relative text-gray-700 hover:text-[#2C727B] transition-colors duration-300 group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Get Free Audit
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON - Right side only */}
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

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" 
            onClick={closeMobileMenu} 
          />
          
          {/* Menu Panel - Slide from right */}
          <div className="absolute right-0 top-0 h-full w-[85vw] max-w-[380px] bg-white shadow-2xl overflow-y-auto overscroll-contain animate-slideInRight">
            {/* Mobile Menu Header - GLASS BLUR EFFECT */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 p-5 z-10">
              <div className="flex justify-between items-center mb-3">
                {/* Logo - normal colors, clean look */}
                <Link href="/" onClick={closeMobileMenu} className="flex items-center">
                  <Image src="/logo.png" alt="iCreatixPRO" width={100} height={36} className="transition-transform duration-300 hover:scale-105" />
                </Link>
                <button 
                  onClick={closeMobileMenu} 
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors active:scale-95 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-gray-700" />
                </button>
              </div>
              <p className="text-xs text-gray-500">Explore our services and tools</p>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-5 flex flex-col gap-2">
              <Link 
                href="/" 
                className="py-3 px-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className="py-3 px-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => toggleMobileDropdown('services')}
                  className="w-full flex justify-between items-center py-3 px-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen.services ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdownOpen.services && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#2C727B]/20 animate-slideDown">
                    {dropdowns.services.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link 
                          key={item.title} 
                          href={item.href} 
                          className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          <Icon className="w-4 h-4 text-[#2C727B]" />
                          <span className="text-sm text-gray-600 flex-1">{item.title}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Tools Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => toggleMobileDropdown('tools')}
                  className="w-full flex justify-between items-center py-3 px-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  Tools
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen.tools ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdownOpen.tools && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#2C727B]/20 animate-slideDown">
                    {dropdowns.tools.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link 
                          key={item.title} 
                          href={item.href} 
                          className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          <Icon className="w-4 h-4 text-[#2C727B]" />
                          <span className="text-sm text-gray-600 flex-1">{item.title}</span>
                          {item.isNew && (
                            <span className="px-1.5 py-0.5 bg-green-100 text-green-600 text-[9px] font-semibold rounded-full">
                              NEW
                            </span>
                          )}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <Link 
                href="/blogs" 
                className="py-3 px-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
              
              <Link 
                href="/contact" 
                className="py-3 px-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              {/* Mobile CTA Button */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/contact" onClick={closeMobileMenu}>
                  <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-md hover:shadow-lg transition-all active:scale-95">
                    Get Free Audit
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-5 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-[#2C727B]" />
                <p className="text-xs text-gray-500">Secure & Confidential</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

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
        
        /* Custom scrollbar for desktop dropdown */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2C727B;
          border-radius: 10px;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .touch-manipulation {
            touch-action: manipulation;
          }
          
          .overscroll-contain {
            overscroll-behavior: contain;
          }
        }
      `}</style>
    </>
  )
}