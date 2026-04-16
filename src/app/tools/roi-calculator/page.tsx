"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ROILayout from "./layout";
import AdsenseAd from "@/components/AdsenseAd";
import Head from "next/head";
import Link from "next/link";

// --- Animation variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const scaleOnTap = { scale: 0.97 };
const glassHover = { scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" };

// --- Helper functions ---
const formatNumber = (value: string) => {
  const num = parseFloat(value.replace(/,/g, ""));
  if (isNaN(num)) return "";
  return num.toLocaleString("en-US");
};

export default function ROICalculator() {
  const [spend, setSpend] = useState("");
  const [revenue, setRevenue] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"roi" | "insights">("roi");
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const spendInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    spendInputRef.current?.focus();
  }, []);

  const handleSpendChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, "");
    if (raw === "" || /^\d*\.?\d*$/.test(raw)) {
      setSpend(raw);
    }
  };

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, "");
    if (raw === "" || /^\d*\.?\d*$/.test(raw)) {
      setRevenue(raw);
    }
  };

  const calculateROI = () => {
    if (!spend || !revenue) return;
    setLoading(true);

    setTimeout(() => {
      const cost = parseFloat(spend);
      const rev = parseFloat(revenue);
      const profit = rev - cost;
      const roi = (profit / cost) * 100;
      const roiFixed = roi.toFixed(2);
      const roas = (rev / cost).toFixed(2);

      let status = "";
      let statusColor = "";
      let recommendation = "";
      let gradientFrom = "";
      let gradientTo = "";

      if (roi > 50) {
        status = "Exceptional";
        statusColor = "text-emerald-600";
        recommendation = "Scale this campaign aggressively. Your ROI indicates strong product-market fit.";
        gradientFrom = "#2C727B";
        gradientTo = "#1A394E";
      } else if (roi > 20) {
        status = "Strong";
        statusColor = "text-emerald-500";
        recommendation = "Good results! Consider increasing budget by 15-20% for this ad set.";
        gradientFrom = "#2C727B";
        gradientTo = "#689A9A";
      } else if (roi > 0) {
        status = "Moderate";
        statusColor = "text-yellow-600";
        recommendation = "Break-even territory. Optimize ad copy, targeting, or landing page.";
        gradientFrom = "#689A9A";
        gradientTo = "#AEC7C8";
      } else if (roi > -30) {
        status = "Needs Work";
        statusColor = "text-orange-500";
        recommendation = "Pause underperforming ads. Test new creatives and audiences.";
        gradientFrom = "#7C3AED";
        gradientTo = "#6366F1";
      } else {
        status = "Critical";
        statusColor = "text-red-500";
        recommendation = "Stop spending immediately. Reevaluate your entire funnel.";
        gradientFrom = "#ef4444";
        gradientTo = "#dc2626";
      }

      setResult({ profit, roi: roiFixed, roas, status, statusColor, recommendation, gradientFrom, gradientTo });
      setLoading(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") calculateROI();
  };

  const copyResults = () => {
    if (!result) return;
    const text = `ROI Report\n--------------------\nAd Spend: $${formatNumber(spend)}\nRevenue: $${formatNumber(revenue)}\nProfit: $${result.profit.toFixed(2)}\nROI: ${result.roi}%\nROAS: ${result.roas}x\nStatus: ${result.status}\n--------------------\n#iCreatixPRO`;
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const resetForm = () => {
    setSpend("");
    setRevenue("");
    setResult(null);
    spendInputRef.current?.focus();
  };

  const displaySpend = spend ? formatNumber(spend) : "";
  const displayRevenue = revenue ? formatNumber(revenue) : "";

  return (
    <>
      <Head>
        <title>ROI Calculator | Precision Ad Analytics | iCreatixPRO</title>
        <meta name="description" content="Professional ROI calculator for Google Ads, Meta, TikTok & Amazon. Real-time insights, ROAS tracking, and performance recommendations." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <ROILayout title="Ads ROI Calculator">
        <LayoutGroup>
          {/* Hero Section - macOS style with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 p-6 md:p-8 mb-6 backdrop-blur-sm border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-[#007AFF]/5 rounded-full blur-3xl -z-0"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-[#7C3AED]/5 rounded-full blur-3xl -z-0"
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-3 h-3 rounded-full bg-red-500/80" />
                  <motion.div whileHover={{ scale: 1.1 }} className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <motion.div whileHover={{ scale: 1.1 }} className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs font-mono text-[#1A394E]/60 ml-2"
                >
                  roi.icalculator
                </motion.span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent"
              >
                ROI Calculator
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#1A394E]/70 mt-2 max-w-lg"
              >
                Professional ad performance analytics with real-time insights
              </motion.p>
            </div>
          </motion.div>

          {/* Tab Switcher */}
          <div className="flex gap-1 p-1 bg-white/40 backdrop-blur-xl rounded-full border border-white/50 w-fit mb-6">
            {["roi", "insights"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab as any)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white/70 shadow-sm text-[#1A394E]"
                    : "text-[#1A394E]/60 hover:text-[#1A394E]"
                }`}
              >
                {tab === "roi" ? "Calculator" : "Insights"}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "roi" ? (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Input Cards */}
                <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
                  <motion.div variants={fadeInUp} className="group relative">
                    <label className="block text-xs font-medium text-[#1A394E]/60 mb-1.5 ml-1 uppercase tracking-wide">
                      Ad Spend
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2C727B] font-medium">$</span>
                      <motion.input
                        ref={spendInputRef}
                        whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(44,114,123,0.1)" }}
                        type="text"
                        inputMode="decimal"
                        placeholder="0.00"
                        value={displaySpend}
                        onChange={handleSpendChange}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-8 pr-4 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 focus:border-[#2C727B]/40 focus:ring-2 focus:ring-[#2C727B]/20 outline-none text-[#1A394E] placeholder-[#1A394E]/30 transition-all duration-200 text-lg"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="group relative">
                    <label className="block text-xs font-medium text-[#1A394E]/60 mb-1.5 ml-1 uppercase tracking-wide">
                      Revenue Generated
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2C727B] font-medium">$</span>
                      <motion.input
                        whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(44,114,123,0.1)" }}
                        type="text"
                        inputMode="decimal"
                        placeholder="0.00"
                        value={displayRevenue}
                        onChange={handleRevenueChange}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-8 pr-4 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 focus:border-[#2C727B]/40 focus:ring-2 focus:ring-[#2C727B]/20 outline-none text-[#1A394E] placeholder-[#1A394E]/30 transition-all duration-200 text-lg"
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <motion.button
                    whileHover={!(!spend || !revenue || loading) ? scaleOnTap : {}}
                    whileTap={!(!spend || !revenue || loading) ? { scale: 0.97 } : {}}
                    animate={loading ? { opacity: 0.7 } : { opacity: 1 }}
                    onClick={calculateROI}
                    disabled={!spend || !revenue || loading}
                    className={`flex-1 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 shadow-md ${
                      !spend || !revenue || loading
                        ? "bg-gradient-to-r from-[#2C727B]/50 to-[#1A394E]/50 cursor-not-allowed opacity-60"
                        : "bg-gradient-to-r from-[#2C727B] to-[#1A394E] hover:shadow-lg"
                    }`}
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mx-auto"
                      />
                    ) : (
                      "Calculate ROI ->"
                    )}
                  </motion.button>
                  
                  {(spend || revenue) && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetForm}
                      className="px-5 py-3.5 rounded-xl bg-white/40 backdrop-blur-sm border border-white/60 text-[#1A394E]/70 hover:text-[#1A394E] hover:bg-white/60 transition-all duration-200"
                    >
                      ↻
                    </motion.button>
                  )}
                </div>

                {/* Ad Top */}
                <div className="my-6">
                  {/* <AdsenseAd adClient="ca-pub-xxx" adSlot="xxx" /> */}
                </div>

                {/* Loader */}
                <AnimatePresence>
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6"
                    >
                      <div className="flex justify-center py-4">
                        <div className="w-8 h-8 border-2 border-[#2C727B] border-t-transparent rounded-full animate-spin" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Results */}
                <AnimatePresence mode="wait">
                  {!loading && result && (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
                      className="mt-6 space-y-3"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {["profit", "roas"].map((metric, idx) => (
                          <motion.div
                            key={metric}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -2, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                            className="p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                            onHoverStart={() => setHoveredMetric(metric)}
                            onHoverEnd={() => setHoveredMetric(null)}
                          >
                            <p className="text-xs text-[#1A394E]/50 uppercase tracking-wide">
                              {metric === "profit" ? "Profit" : "ROAS"}
                            </p>
                            <motion.p
                              animate={hoveredMetric === metric ? { scale: 1.02 } : { scale: 1 }}
                              className="text-2xl font-semibold text-[#1A394E] mt-1"
                            >
                              {metric === "profit" ? `$${result.profit.toFixed(2)}` : `${result.roas}x`}
                            </motion.p>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -2 }}
                        className="p-5 rounded-xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs text-[#1A394E]/50 uppercase tracking-wide">ROI</p>
                            <motion.p
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              className={`text-3xl font-bold mt-1 ${parseFloat(result.roi) >= 0 ? "text-[#2C727B]" : "text-red-500"}`}
                            >
                              {parseFloat(result.roi) >= 0 ? "+" : ""}{result.roi}%
                            </motion.p>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm"
                          >
                            <p className={`text-sm font-medium ${result.statusColor}`}>
                              {result.status}
                            </p>
                          </motion.div>
                        </div>
                        
                        {/* Animated Progress Bar */}
                        <div className="mt-4 h-1.5 bg-[#AEC7C8]/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(Math.max(parseFloat(result.roi) + 50, 0), 100)}%` }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${result.gradientFrom}, ${result.gradientTo})`
                            }}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-4 rounded-xl bg-[#fff3cd]/30 backdrop-blur-sm border border-[#fff3cd]/60"
                      >
                        <p className="text-sm text-[#1A394E]/80 leading-relaxed">
                          {result.recommendation}
                        </p>
                      </motion.div>

                      {/* Copy Button */}
                      <div className="flex gap-3 pt-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={copyResults}
                          className="flex-1 py-2.5 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 text-[#1A394E]/70 hover:text-[#1A394E] text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          {copySuccess ? "Copied!" : "Copy Report"}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Empty State */}
                {!loading && !result && !spend && !revenue && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-center py-8 rounded-xl bg-white/20 backdrop-blur-sm"
                  >
                    <p className="text-[#1A394E]/40 text-sm">Enter ad spend and revenue to see ROI</p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="insights"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {[
                  {
                    icon: "📊",
                    title: "What is ROI?",
                    content: "Return on Investment (ROI) measures the profitability of your ad campaigns. A positive ROI means your ads are generating more revenue than they cost.",
                    gradient: "from-[#6366F1]/5 to-[#7C3AED]/5",
                    border: "border-[#6366F1]/20"
                  },
                  {
                    icon: "🎯",
                    title: "Industry Benchmarks",
                    content: null,
                    benchmarks: [
                      { label: "E-commerce", value: "15-30% ROI" },
                      { label: "SaaS", value: "30-50% ROI" },
                      { label: "Lead Gen", value: "10-25% ROI" },
                      { label: "Agency", value: "40-60% ROI" }
                    ],
                    gradient: "from-white/40",
                    border: "border-white/50"
                  },
                  {
                    icon: "💡",
                    title: "Pro Tips",
                    tips: [
                      "Track ROI by campaign, ad set, and creative",
                      "Calculate blended ROI across all channels",
                      "Consider customer lifetime value (LTV)",
                      "Run A/B tests to optimize underperformers"
                    ],
                    gradient: "from-[#007AFF]/5",
                    border: "border-[#007AFF]/20"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -2 }}
                    className={`p-5 rounded-xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border ${item.border}`}
                  >
                    <h3 className="font-semibold text-[#1A394E] flex items-center gap-2">
                      <span>{item.icon}</span> {item.title}
                    </h3>
                    {item.content && <p className="text-sm text-[#1A394E]/70 mt-2 leading-relaxed">{item.content}</p>}
                    {item.benchmarks && (
                      <div className="mt-3 space-y-2 text-sm">
                        {item.benchmarks.map((b, i) => (
                          <motion.div
                            key={b.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className="flex justify-between py-1 border-b border-white/40"
                          >
                            <span className="text-[#1A394E]/60">{b.label}</span>
                            <span className="font-medium text-[#2C727B]">{b.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {item.tips && (
                      <ul className="mt-2 space-y-2 text-sm text-[#1A394E]/70">
                        {item.tips.map((tip, i) => (
                          <motion.li
                            key={tip}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            • {tip}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>

        {/* CTA Section */}
        <div className="mt-8">
          <Link href="/contact">
            <button className="w-full py-3 bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Run More Campaign Analysis
            </button>
          </Link>
        </div>

        {/* Mini Blog Grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {[
            { title: "Why ROI Matters", desc: "ROI reveals true profitability beyond surface-level metrics like clicks and impressions." },
            { title: "ROI vs ROAS", desc: "ROI measures profit, ROAS measures revenue per dollar spent. Use both for full picture." }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.4)" }}
              className="p-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/50 transition-all duration-200"
            >
              <h3 className="font-semibold text-[#1A394E] text-sm">{item.title}</h3>
              <p className="text-xs text-[#1A394E]/60 mt-1 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Ad Bottom */}
        <div className="my-6">
          {/* <AdsenseAd adClient="ca-pub-xxx" adSlot="xxx" /> */}
        </div>
      </ROILayout>
    </>
  );
}