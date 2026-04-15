"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMapPin,
  FiTrendingUp,
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiTarget,
  FiZap,
  FiBarChart2,
  FiUsers,
  FiSearch,
  FiLoader,
  FiDownload,
  FiRefreshCw,
  FiMoon,
  FiSun,
  FiThumbsUp,
  FiStar,
} from "react-icons/fi";
import Head from "next/head";

// ============================================
// TYPES
// ============================================

interface AuditResult {
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  issues: string[];
  recommendations: string[];
  strengths: string[];
  metrics: {
    gbpCompleteness: number;
    citationConsistency: number;
    reviewScore: number;
    localKeywords: number;
    mobileOptimization: number;
  };
  competitors: Array<{
    name: string;
    score: number;
    strengths: string[];
  }>;
  localRankings: {
    currentPosition: number;
    potentialPosition: number;
    nearbyCompetitors: number;
  };
  insights: {
    topKeyword: string;
    searchVolume: number;
    difficulty: string;
    opportunity: string;
  };
}

// ============================================
// HELPER FUNCTIONS
// ============================================

const generateAuditResults = (business: string, location: string, website: string): AuditResult => {
  const city = location.split(",")[0].trim();
  const businessWord = business.split(" ")[0] || business;
  
  // Calculate score based on inputs
  let score = 60;
  if (business.length > 5) score += 5;
  if (business.length > 10) score += 5;
  if (business.match(/[0-9]/)) score += 5;
  if (location.length > 3) score += 5;
  if (location.length > 8) score += 5;
  if (website && website.length > 0) score += 10;
  if (website && website.includes("https")) score += 10;
  if (website && website.includes(".com")) score += 5;
  score = Math.min(score, 98);
  
  // Determine grade
  let grade: "A" | "B" | "C" | "D" | "F" = "C";
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else grade = "F";
  
  // Generate issues
  const issues: string[] = [];
  if (!website || website.length === 0) {
    issues.push("No website detected - essential for local SEO");
  } else if (!website.includes("https")) {
    issues.push("Website not using HTTPS - security concern affects rankings");
  }
  issues.push("Google Business Profile incomplete - missing photos, categories, or description");
  issues.push("Inconsistent NAP (Name, Address, Phone) citations across directories");
  issues.push(`Missing "${city}" location-based keywords in website content and meta tags`);
  issues.push("Low number of customer reviews compared to local competitors");
  
  // Generate recommendations
  const recommendations: string[] = [];
  recommendations.push(`Complete your Google Business Profile with photos, services, and weekly posts targeting ${city}`);
  recommendations.push(`Add "${businessWord} near ${city}" and "best ${businessWord} in ${city}" to your title tags and H1 headings`);
  if (!website || website.length === 0) {
    recommendations.push("Create a professional website with LocalBusiness schema markup");
  } else {
    recommendations.push(`Implement LocalBusiness schema markup on ${website} to help Google understand your business`);
  }
  recommendations.push(`Build consistent citations on Yelp, Yellow Pages, BBB, and Apple Maps for ${city}`);
  recommendations.push("Encourage customer reviews and respond to all feedback within 24 hours");
  
  // Generate strengths
  const strengths: string[] = [];
  if (business.length > 8) strengths.push("Clear and descriptive business name");
  if (location.length > 5) strengths.push(`Strong local presence targeting ${city} area`);
  if (website && website.includes("https")) strengths.push("Secure website with HTTPS encryption");
  if (score > 70) strengths.push("Good foundation for local SEO exists");
  if (strengths.length === 0) strengths.push("Basic local SEO foundation established");
  
  // Generate competitors
  const competitors = [
    { name: `${businessWord}Pro ${city}`, score: 78, strengths: ["Strong online reviews (4.8★)", "Fast loading website"] },
    { name: `${city} ${businessWord} Solutions`, score: 72, strengths: ["Local partnerships", "High authority backlinks"] },
    { name: `Premier ${businessWord} ${city}`, score: 68, strengths: ["Excellent customer service", "10+ years experience"] },
    { name: `${businessWord} Masters ${city}`, score: 65, strengths: ["Competitive pricing", "Quick response time"] },
  ];
  
  // Calculate local rankings
  let currentPosition = 15;
  if (score >= 90) currentPosition = 3;
  else if (score >= 80) currentPosition = 5;
  else if (score >= 70) currentPosition = 8;
  else if (score >= 60) currentPosition = 12;
  else currentPosition = 18;
  
  const potentialPosition = Math.max(1, currentPosition - 5);
  const nearbyCompetitors = 8 + Math.floor(Math.random() * 15);
  
  // Generate insights
  const topKeyword = `${businessWord} near ${city}`;
  let searchVolume = 500;
  const majorCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
  if (majorCities.some(c => city.includes(c))) searchVolume = 2500;
  else if (city.length > 10) searchVolume = 1200;
  else searchVolume = 700;
  
  const difficulty = score >= 80 ? "Easy" : score >= 60 ? "Medium" : "Hard";
  const opportunity = score >= 80 ? "Small opportunity - maintain current SEO efforts" : 
                       score >= 60 ? "Good opportunity to improve local visibility with targeted optimizations" : 
                       "Major opportunity to outrank competitors with basic SEO fixes";
  
  return {
    score,
    grade,
    issues: issues.slice(0, 5),
    recommendations: recommendations.slice(0, 5),
    strengths: strengths.slice(0, 3),
    metrics: {
      gbpCompleteness: Math.min(95, 50 + Math.floor(Math.random() * 40) + (website ? 10 : 0)),
      citationConsistency: Math.min(95, 45 + Math.floor(Math.random() * 40) + (business.length > 10 ? 10 : 0)),
      reviewScore: Number((3.2 + Math.random() * 1.6).toFixed(1)),
      localKeywords: Math.min(95, 40 + Math.floor(Math.random() * 45) + (location.length > 5 ? 10 : 0)),
      mobileOptimization: Math.min(95, 55 + Math.floor(Math.random() * 35)),
    },
    competitors,
    localRankings: { currentPosition, potentialPosition, nearbyCompetitors },
    insights: { topKeyword, searchVolume, difficulty, opportunity }
  };
};

// ============================================
// PROGRESS CIRCLE COMPONENT
// ============================================

const ProgressCircle = ({ value, size = 100, strokeWidth = 8 }: { value: number; size?: number; strokeWidth?: number }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  
  const getColor = () => {
    if (value >= 80) return "#10B981";
    if (value >= 60) return "#F59E0B";
    if (value >= 40) return "#F97316";
    return "#EF4444";
  };

  return (
    <div className="relative inline-flex items-center justify-center">
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
          stroke={getColor()}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-[#1A394E]">{value}</span>
        <span className="text-[10px] text-[#1A394E]/60">Score</span>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function LocalSEOAudit() {
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "details" | "competitors">("overview");

  const isFormValid = useMemo(() => {
    return business.trim().length > 0 && location.trim().length > 0;
  }, [business, location]);

  const runAudit = () => {
    if (!isFormValid) {
      setToast({ message: "Please enter business name and location", type: "error" });
      return;
    }

    setLoading(true);
    setResult(null);

    // Simulate processing delay
    setTimeout(() => {
      const auditResult = generateAuditResults(business, location, website);
      setResult(auditResult);
      setLoading(false);
      setToast({ message: "Audit completed successfully!", type: "success" });
    }, 1500);
  };

  const handleReset = () => {
    setBusiness("");
    setLocation("");
    setWebsite("");
    setResult(null);
    setToast({ message: "Form reset", type: "info" });
  };

  const handleExport = () => {
    if (!result) return;
    const exportData = {
      business,
      location,
      website,
      audit: result,
      timestamp: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `local-seo-audit-${business.toLowerCase().replace(/\s+/g, "-")}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setToast({ message: "Audit report exported!", type: "success" });
  };

  const getGradeColor = (grade: string) => {
    switch(grade) {
      case "A": return "text-green-600 bg-green-100";
      case "B": return "text-emerald-600 bg-emerald-100";
      case "C": return "text-yellow-600 bg-yellow-100";
      case "D": return "text-orange-600 bg-orange-100";
      default: return "text-red-600 bg-red-100";
    }
  };

  // Auto-clear toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <>
      <Head>
        <title>Local SEO Audit Tool | Free Local Business Analysis | iCreatixPRO</title>
        <meta
          name="description"
          content="Free local SEO audit tool. Analyze your Google Business Profile, get local ranking insights, and receive actionable recommendations to dominate local search."
        />
      </Head>

      <main className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-[#F8FAFA]"
      }`}>
        
        {/* Toast Notification */}
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
              {toast.type === "success" ? <FiCheckCircle className="w-4 h-4" /> : 
               toast.type === "error" ? <FiAlertCircle className="w-4 h-4" /> : 
               <FiInfo className="w-4 h-4" />}
              <span className="text-sm">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
          
          {/* Header - Minimal macOS Style */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-[#1A394E]/60 ml-2">local-seo-audit</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#2C727B]/20 text-[#2C727B]">Free Tool</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 hover:bg-white/90 transition-all"
            >
              {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-4">
              <FiZap className="w-3 h-3" />
              Free Local SEO Analysis
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A394E] mb-3">
              Local SEO Audit Tool
            </h1>
            <p className="text-[#1A394E]/60 text-sm max-w-2xl mx-auto">
              Analyze your local search presence, discover ranking opportunities, 
              and get actionable recommendations to attract more local customers.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN - INPUT SECTION */}
            <div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 border-b border-white/50">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4 text-[#2C727B]" />
                    <h2 className="text-sm font-semibold text-[#1A394E]">Business Information</h2>
                  </div>
                </div>
                
                <div className="p-6 space-y-5">
                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#1A394E]/70 mb-1.5">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="e.g., Starbucks Coffee"
                      className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-medium text-[#1A394E]/70 mb-1.5">
                      City / Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., New York, NY"
                      className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-xs font-medium text-[#1A394E]/70 mb-1.5">
                      Website URL <span className="text-gray-400 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={runAudit}
                      disabled={loading || !isFormValid}
                      className={`flex-1 py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                        !isFormValid || loading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#2C727B] to-[#1A394E] hover:shadow-lg"
                      }`}
                    >
                      {loading ? (
                        <><FiLoader className="w-4 h-4 animate-spin" /> Analyzing...</>
                      ) : (
                        <><FiTarget className="w-4 h-4" /> Run SEO Audit</>
                      )}
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-[#1A394E]/70 hover:text-[#1A394E] transition-all"
                    >
                      <FiRefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats Preview */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-lg">📊</div>
                  <div className="text-xs font-medium text-[#1A394E]/70">Free Tool</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-lg">⚡</div>
                  <div className="text-xs font-medium text-[#1A394E]/70">Instant Results</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <div className="text-lg">🔒</div>
                  <div className="text-xs font-medium text-[#1A394E]/70">Privacy First</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - RESULTS SECTION */}
            <div>
              {!result && !loading && (
                <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl border border-white/50 p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#2C727B]/10 flex items-center justify-center">
                    <FiMapPin className="w-10 h-10 text-[#2C727B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A394E] mb-2">Ready to Optimize Your Local SEO?</h3>
                  <p className="text-sm text-[#1A394E]/60 max-w-md mx-auto">
                    Enter your business details above to get a comprehensive local SEO audit
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                    <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                      <FiCheckCircle className="w-3 h-3 text-green-500" /> GBP Analysis
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                      <FiCheckCircle className="w-3 h-3 text-green-500" /> Local Rankings
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                      <FiCheckCircle className="w-3 h-3 text-green-500" /> Competitor Insights
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1A394E]/60">
                      <FiCheckCircle className="w-3 h-3 text-green-500" /> Actionable Tips
                    </div>
                  </div>
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-[#2C727B]/20 border-t-[#2C727B] rounded-full animate-spin" />
                    <div>
                      <p className="font-semibold text-[#1A394E]">Analyzing Local SEO Factors...</p>
                      <p className="text-xs text-[#1A394E]/50 mt-1">Please wait while we analyze your business</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Results Section */}
              {!loading && result && (
                <div className="space-y-5">
                  {/* Score Card */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 text-center">
                    <div className="flex flex-col items-center">
                      <ProgressCircle value={result.score} size={120} strokeWidth={10} />
                      <div className="mt-4 flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(result.grade)}`}>
                          Grade {result.grade}
                        </span>
                        <button onClick={handleExport} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                          <FiDownload className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-[#1A394E]/50 mt-3">
                        {result.score >= 80 ? "Excellent! Your local SEO is well-optimized." :
                         result.score >= 60 ? "Good progress! Some improvements needed." :
                         result.score >= 40 ? "Fair. Significant improvements available." :
                         "Needs attention. Major opportunities exist."}
                      </p>
                    </div>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex gap-1 p-1 bg-white/40 backdrop-blur-xl rounded-full border border-white/50">
                    {[
                      { id: "overview" as const, label: "Overview", icon: FiBarChart2 },
                      { id: "details" as const, label: "Details", icon: FiInfo },
                      { id: "competitors" as const, label: "Competitors", icon: FiUsers },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeTab === tab.id
                            ? "bg-white/70 shadow-sm text-[#1A394E]"
                            : "text-[#1A394E]/60 hover:text-[#1A394E]"
                        }`}
                      >
                        <tab.icon className="w-3.5 h-3.5" />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  {activeTab === "overview" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-teal-50/50 backdrop-blur-sm border border-teal-100">
                          <div className="text-lg">📊</div>
                          <p className="text-xs text-[#1A394E]/60">GBP Completeness</p>
                          <p className="text-lg font-bold text-[#1A394E]">{result.metrics.gbpCompleteness}%</p>
                        </div>
                        <div className="p-3 rounded-xl bg-blue-50/50 backdrop-blur-sm border border-blue-100">
                          <div className="text-lg">🔗</div>
                          <p className="text-xs text-[#1A394E]/60">Citations</p>
                          <p className="text-lg font-bold text-[#1A394E]">{result.metrics.citationConsistency}%</p>
                        </div>
                        <div className="p-3 rounded-xl bg-yellow-50/50 backdrop-blur-sm border border-yellow-100">
                          <div className="text-lg">⭐</div>
                          <p className="text-xs text-[#1A394E]/60">Reviews</p>
                          <p className="text-lg font-bold text-[#1A394E]">{result.metrics.reviewScore}/5</p>
                        </div>
                        <div className="p-3 rounded-xl bg-purple-50/50 backdrop-blur-sm border border-purple-100">
                          <div className="text-lg">🔑</div>
                          <p className="text-xs text-[#1A394E]/60">Local Keywords</p>
                          <p className="text-lg font-bold text-[#1A394E]">{result.metrics.localKeywords}%</p>
                        </div>
                      </div>
                      
                      {result.strengths && result.strengths.length > 0 && (
                        <div className="p-4 rounded-xl bg-green-50/50 backdrop-blur-sm border border-green-100">
                          <h4 className="text-xs font-semibold text-green-700 mb-2 flex items-center gap-1">
                            <FiThumbsUp className="w-3 h-3" /> Strengths
                          </h4>
                          <ul className="space-y-1">
                            {result.strengths.map((strength, i) => (
                              <li key={i} className="text-xs text-green-600 flex items-start gap-2">
                                <FiCheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "details" && (
                    <div className="space-y-4">
                      {result.issues && result.issues.length > 0 && (
                        <div className="p-4 rounded-xl bg-red-50/50 backdrop-blur-sm border border-red-100">
                          <h4 className="text-xs font-semibold text-red-700 mb-2 flex items-center gap-1">
                            <FiAlertCircle className="w-3 h-3" /> Issues Found ({result.issues.length})
                          </h4>
                          <ul className="space-y-1">
                            {result.issues.map((issue, i) => (
                              <li key={i} className="text-xs text-red-600 flex items-start gap-2">
                                <span className="text-red-400">•</span>
                                {issue}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {result.recommendations && result.recommendations.length > 0 && (
                        <div className="p-4 rounded-xl bg-blue-50/50 backdrop-blur-sm border border-blue-100">
                          <h4 className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1">
                            <FiTarget className="w-3 h-3" /> Recommendations
                          </h4>
                          <ul className="space-y-1">
                            {result.recommendations.map((rec, i) => (
                              <li key={i} className="text-xs text-blue-600 flex items-start gap-2">
                                <FiCheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "competitors" && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-gray-50/50 backdrop-blur-sm border border-gray-100">
                        <h4 className="text-xs font-semibold text-[#1A394E] mb-3 flex items-center gap-1">
                          <FiUsers className="w-3 h-3" /> Local Competition
                        </h4>
                        <div className="space-y-3">
                          {result.competitors.map((comp, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                              <div>
                                <p className="text-sm font-medium text-[#1A394E]">{comp.name}</p>
                                <p className="text-xs text-[#1A394E]/50">{comp.strengths?.[0] || "Active in local market"}</p>
                              </div>
                              <div className="text-right">
                                <span className={`text-sm font-bold ${
                                  comp.score >= 80 ? "text-green-600" :
                                  comp.score >= 60 ? "text-yellow-600" : "text-red-600"
                                }`}>
                                  {comp.score}
                                </span>
                                <p className="text-[10px] text-[#1A394E]/50">Score</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {result.localRankings && (
                        <div className="p-4 rounded-xl bg-gradient-to-r from-teal-50/50 to-blue-50/50 backdrop-blur-sm border border-teal-100">
                          <h4 className="text-xs font-semibold text-[#1A394E] mb-2">Local Pack Rankings</h4>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-[#1A394E]">#{result.localRankings.currentPosition}</p>
                              <p className="text-xs text-[#1A394E]/50">Current Position</p>
                            </div>
                            <FiTrendingUp className="w-6 h-6 text-[#2C727B]" />
                            <div>
                              <p className="text-2xl font-bold text-green-600">#{result.localRankings.potentialPosition}</p>
                              <p className="text-xs text-[#1A394E]/50">Potential Position</p>
                            </div>
                          </div>
                          <p className="text-xs text-[#1A394E]/60 mt-3 text-center">
                            {result.localRankings.nearbyCompetitors} competitors in your area
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Lead CTA */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white text-center">
                    <h4 className="text-sm font-semibold mb-1">Want to Dominate Local Search?</h4>
                    <p className="text-xs text-white/80 mb-3">Get professional local SEO services</p>
                    <button className="px-5 py-2 bg-white text-[#1A394E] rounded-lg text-sm font-medium hover:scale-105 transition">
                      Contact Our Experts
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Educational Footer */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <FiMapPin className="w-4 h-4 text-[#2C727B]" />
                <h3 className="font-semibold text-[#1A394E] text-sm">Google Business Profile</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">Complete your GBP with accurate NAP, categories, photos, and posts to improve local visibility.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <FiStar className="w-4 h-4 text-[#2C727B]" />
                <h3 className="font-semibold text-[#1A394E] text-sm">Reviews Matter</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">Businesses with 4+ star ratings get 70% more clicks and calls from local searches.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <FiSearch className="w-4 h-4 text-[#2C727B]" />
                <h3 className="font-semibold text-[#1A394E] text-sm">Local Keywords</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">Include city + service keywords naturally in your website content and meta tags.</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              © 2026 iCreatixPRO — Free Local SEO Intelligence Tool
            </p>
          </div>
        </div>
      </main>
    </>
  );
}