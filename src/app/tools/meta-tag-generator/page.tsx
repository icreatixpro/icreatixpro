"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiTrendingUp,
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiEye,
  FiCode,
  FiSliders,
  FiTarget,
  FiZap,
  FiShield,
  FiCpu,
  FiShare2,
  FiDownload,
  FiCopy,
  FiRefreshCw,
  FiMoon,
  FiSun,
  FiEdit2,
  FiSearch,
  FiBarChart2,
} from "react-icons/fi";
import Head from "next/head";

// =========================
// UTILITIES
// =========================
const getPixelWidth = (text: string, font: string = "500 14px 'Inter', system-ui") => {
  if (typeof window === "undefined") return 0;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return 0;
  context.font = font;
  return context.measureText(text).width;
};

const formatSlug = (input: string) => {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const copyToClipboard = async (text: string, setCopied: (value: boolean) => void) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

// =========================
// CUSTOM HOOKS
// =========================
const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// =========================
// TOOLTIP COMPONENT
// =========================
const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#1A394E] text-white text-xs rounded-lg whitespace-nowrap"
          >
            {text}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#1A394E]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// =========================
// STAT CARD COMPONENT
// =========================
const StatCard = ({ icon, label, value, subValue, color, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
    whileHover={{ y: -2 }}
    className={`p-3 rounded-xl bg-gradient-to-br ${color} backdrop-blur-sm border border-white/50`}
  >
    <div className="flex items-center gap-2">
      <div className="text-lg">{icon}</div>
      <div>
        <p className="text-[10px] text-[#1A394E]/60 uppercase">{label}</p>
        <p className="text-base font-bold text-[#1A394E]">{value}</p>
        {subValue && <p className="text-[10px] text-[#1A394E]/50">{subValue}</p>}
      </div>
    </div>
  </motion.div>
);

// =========================
// PROGRESS RING
// =========================
const ProgressRing = ({ value, size = 60, strokeWidth = 4, color = "#2C727B" }: { value: number; size?: number; strokeWidth?: number; color?: string }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        className="text-gray-200"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="transition-all duration-700 ease-out"
        strokeWidth={strokeWidth}
        stroke={color}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

// =========================
// MAIN COMPONENT
// =========================
export default function SEOMetadataOptimizer() {
  const [title, setTitle] = useLocalStorage("seo-title", "");
  const [description, setDescription] = useLocalStorage("seo-description", "");
  const [slug, setSlug] = useLocalStorage("seo-slug", "");
  const [activeTab, setActiveTab] = useState<"editor" | "analysis">("editor");
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Optimized calculations
  const titleStats = useMemo(() => {
    const length = title.length;
    const pixels = getPixelWidth(title);
    const isOptimized = length >= 50 && length <= 55;
    const score = isOptimized ? 100 : Math.min(100, Math.max(0, (length / 55) * 100));
    const status = isOptimized ? "excellent" : length > 55 ? "warning" : "poor";
    const recommendation = isOptimized 
      ? "Perfect! Your title is optimally sized." 
      : length > 55 
      ? `Reduce by ${length - 55} characters` 
      : `Add ${55 - length} more characters`;
    return { length, pixels, isOptimized, score, status, recommendation };
  }, [title]);

  const descriptionStats = useMemo(() => {
    const length = description.length;
    const isOptimized = length >= 150 && length <= 155;
    const score = isOptimized ? 100 : Math.min(100, Math.max(0, (length / 155) * 100));
    const status = isOptimized ? "excellent" : length > 155 ? "warning" : "poor";
    const recommendation = isOptimized 
      ? "Perfect! Your description is optimally sized." 
      : length > 155 
      ? `Reduce by ${length - 155} characters` 
      : `Add ${155 - length} more characters`;
    return { length, isOptimized, score, status, recommendation };
  }, [description]);

  const overallScore = useMemo(() => {
    return Math.round((titleStats.score + descriptionStats.score) / 2);
  }, [titleStats.score, descriptionStats.score]);

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(formatSlug(e.target.value));
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const handleValidate = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setToast({ 
      message: `SEO Score: ${overallScore}%`, 
      type: overallScore >= 80 ? "success" : overallScore >= 50 ? "info" : "error" 
    });
    setIsLoading(false);
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setSlug("");
    setToast({ message: "All fields reset", type: "info" });
  };

  const handleCopyTitle = () => {
    copyToClipboard(title, setCopied);
    setToast({ message: "Title copied!", type: "success" });
  };

  const handleCopyDescription = () => {
    copyToClipboard(description, setCopied);
    setToast({ message: "Description copied!", type: "success" });
  };

  const getKeywordDensity = (text: string) => {
    if (!text) return [];
    const words = text.toLowerCase().split(/\s+/);
    const freq: Record<string, number> = {};
    words.forEach(word => {
      if (word.length > 3) {
        freq[word] = (freq[word] || 0) + 1;
      }
    });
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };

  const keywords = useMemo(() => getKeywordDensity(title + " " + description), [title, description]);

  // Toast Component
  const ToastMessage = () => (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg ${
            toast.type === "success" ? "bg-green-500 text-white" :
            toast.type === "error" ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {toast.type === "success" ? <FiCheckCircle /> : toast.type === "error" ? <FiAlertCircle /> : <FiInfo />}
          <span className="text-sm">{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <Head>
        <title>SEO Metadata Optimizer | iCreatixPRO</title>
        <meta name="description" content="Optimize your meta titles and descriptions for better SEO rankings. Real-time preview, character counter, and SEO scoring." />
      </Head>

      <main className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-[#F8FAFA]"
      }`}>
        
        <ToastMessage />

        <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
          
          {/* ============================================ */}
          {/* MINIMAL HEADER - NO LARGE BRANDING */}
          {/* ============================================ */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-[#1A394E]/60 ml-2">seo-optimizer</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#2C727B]/20 text-[#2C727B]">AI-Powered</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 hover:bg-white/90 transition-all"
            >
              {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
          </div>

          {/* ============================================ */}
          {/* MAIN TITLE - CLEAR & CONCISE */}
          {/* ============================================ */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A394E]">
              SEO Metadata Optimizer
            </h1>
            <p className="text-[#1A394E]/60 text-sm mt-2">
              Optimize your titles & descriptions for higher search rankings
            </p>
          </div>

          {/* ============================================ */}
          {/* QUICK STATS - AT A GLANCE */}
          {/* ============================================ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <StatCard icon="🎯" label="Overall Score" value={`${overallScore}%`} color="from-teal-500/10 to-teal-400/10" delay={0.1} />
            <StatCard icon="📝" label="Title" value={`${titleStats.length}/55`} subValue={titleStats.isOptimized ? "✅ Optimal" : "⚠️ Adjust"} color="from-blue-500/10 to-indigo-400/10" delay={0.15} />
            <StatCard icon="📄" label="Description" value={`${descriptionStats.length}/155`} subValue={descriptionStats.isOptimized ? "✅ Optimal" : "⚠️ Adjust"} color="from-purple-500/10 to-pink-400/10" delay={0.2} />
            <StatCard icon="🔑" label="Keywords" value={keywords.length.toString()} subValue="Detected" color="from-green-500/10 to-emerald-400/10" delay={0.25} />
          </div>

          {/* ============================================ */}
          {/* MAIN TOOL SECTION - DRAG & DROP STYLE INPUT */}
          {/* ============================================ */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN - INPUT SECTION (PRIMARY ACTION) */}
            <div className="space-y-5">
              
              {/* Title Input - Primary */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-[#1A394E] flex items-center gap-2">
                    <FiEye className="w-4 h-4 text-[#2C727B]" />
                    Meta Title
                    <Tooltip text="50-55 characters is optimal for Google SERP display">
                      <span className="cursor-help text-[#1A394E]/40 text-xs">ⓘ</span>
                    </Tooltip>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                      titleStats.status === "excellent" ? "bg-green-100 text-green-700" :
                      titleStats.status === "warning" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                    }`}>
                      {titleStats.length}/55
                    </span>
                    <button onClick={handleCopyTitle} className="p-1 hover:bg-gray-100 rounded-lg transition">
                      <FiCopy className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value.slice(0, 70))}
                  placeholder="e.g., 10 Best SEO Tools for 2026 | Expert Review"
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all text-[#1A394E] placeholder:text-gray-400"
                />
                
                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-[#1A394E]/50 mb-1">
                    <span>Optimization</span>
                    <span>{Math.round(titleStats.score)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${titleStats.score}%` }}
                      className={`h-full rounded-full transition-all ${
                        titleStats.score >= 80 ? "bg-green-500" :
                        titleStats.score >= 50 ? "bg-yellow-500" : "bg-red-500"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-[#1A394E]/50 mt-2">{titleStats.recommendation}</p>
                </div>
              </div>

              {/* Slug Input */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-5 shadow-sm">
                <label className="text-sm font-semibold text-[#1A394E] flex items-center gap-2 mb-3">
                  <FiSliders className="w-4 h-4 text-[#2C727B]" />
                  URL Slug
                  <Tooltip text="Clean URLs help search engines understand your page">
                    <span className="cursor-help text-[#1A394E]/40 text-xs">ⓘ</span>
                  </Tooltip>
                </label>
                <div className="flex items-center bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#2C727B] transition-colors">
                  <span className="text-gray-400 text-sm">icreatixpro.com/</span>
                  <input
                    type="text"
                    value={slug}
                    onChange={handleSlugChange}
                    placeholder="your-page-slug"
                    className="bg-transparent outline-none ml-1 w-full text-[#2C727B] font-medium text-sm"
                  />
                </div>
              </div>

              {/* Description Input */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-[#1A394E] flex items-center gap-2">
                    <FiInfo className="w-4 h-4 text-[#2C727B]" />
                    Meta Description
                    <Tooltip text="150-155 characters maximizes CTR in search results">
                      <span className="cursor-help text-[#1A394E]/40 text-xs">ⓘ</span>
                    </Tooltip>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                      descriptionStats.status === "excellent" ? "bg-green-100 text-green-700" :
                      descriptionStats.status === "warning" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                    }`}>
                      {descriptionStats.length}/155
                    </span>
                    <button onClick={handleCopyDescription} className="p-1 hover:bg-gray-100 rounded-lg transition">
                      <FiCopy className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value.slice(0, 200))}
                  placeholder="Write a compelling description that encourages clicks from search results..."
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all resize-none text-[#1A394E] placeholder:text-gray-400"
                />
                
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-[#1A394E]/50 mb-1">
                    <span>Optimization</span>
                    <span>{Math.round(descriptionStats.score)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${descriptionStats.score}%` }}
                      className={`h-full rounded-full transition-all ${
                        descriptionStats.score >= 80 ? "bg-green-500" :
                        descriptionStats.score >= 50 ? "bg-yellow-500" : "bg-red-500"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-[#1A394E]/50 mt-2">{descriptionStats.recommendation}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleValidate}
                  disabled={isLoading}
                  className="flex-1 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#2C727B] to-[#1A394E] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <><FiRefreshCw className="w-4 h-4 animate-spin" /> Analyzing...</>
                  ) : (
                    <><FiCheckCircle className="w-4 h-4" /> Validate SEO</>
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E]/70 hover:text-[#1A394E] transition-all"
                >
                  <FiRefreshCw className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* ============================================ */}
            {/* RIGHT COLUMN - LIVE PREVIEW (REAL-TIME FEEDBACK) */}
            {/* ============================================ */}
            <div className="space-y-5">
              
              {/* SERP Preview Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-gray-50/50 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <FiSearch className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs font-medium text-gray-500">Google SERP Preview</span>
                  </div>
                </div>
                <div className="p-5">
                  {/* Favicon & URL */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">iC</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">icreatixpro.com</span>
                      <span className="text-xs text-green-700 ml-1">› {slug || "..."}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-teal-600 font-medium hover:underline cursor-pointer text-lg leading-tight">
                    {title || "Your optimized meta title will appear here"}
                  </h3>
                  
                  {/* Meta info */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span>Apr 9, 2026</span>
                    <span>•</span>
                    <span>4 min read</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {description || "Your meta description will appear here. Write a compelling summary to increase click-through rates from search results."}
                  </p>
                </div>
              </div>

              {/* Keywords Detected Card */}
              {keywords.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <FiBarChart2 className="w-4 h-4 text-[#2C727B]" />
                    <h3 className="text-sm font-semibold text-[#1A394E]">Detected Keywords</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map(([word, count]) => (
                      <span key={word} className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-xs font-medium">
                        {word} <span className="text-teal-400">({count})</span>
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[#1A394E]/50 mt-3">
                    💡 Include your primary keyword in the first 60 characters of title
                  </p>
                </div>
              )}

              {/* Score Circle */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A394E]">SEO Score</h3>
                    <p className="text-xs text-[#1A394E]/50 mt-1">Based on industry standards</p>
                  </div>
                  <div className="relative">
                    <ProgressRing value={overallScore} size={70} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-lg font-bold ${getScoreColor(overallScore)}`}>
                        {overallScore}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* EDUCATIONAL FOOTER - HELPFUL TIPS */}
          {/* ============================================ */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📊</span>
                <h3 className="font-semibold text-[#1A394E] text-sm">Title Optimization</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">Keep titles between 50-55 characters and include your primary keyword near the beginning for best results.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🎯</span>
                <h3 className="font-semibold text-[#1A394E] text-sm">Description Best Practices</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">Use 150-155 characters, include a call-to-action, and highlight unique value propositions.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🚀</span>
                <h3 className="font-semibold text-[#1A394E] text-sm">Pro Tip</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">Titles with numbers, power words, and emotional triggers get 40% higher CTR.</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              © 2026 iCreatixPRO — Real-time SEO optimization tool
            </p>
          </div>
        </div>
      </main>
    </>
  );
}