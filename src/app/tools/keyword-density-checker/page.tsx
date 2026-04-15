"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  FileText, 
  Search, 
  TrendingUp, 
  AlertCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sparkles,
  Zap,
  Shield,
  Globe,
  ChevronRight,
  Copy,
  CheckCircle,
  XCircle,
  Info,
  Download,
  RefreshCw,
  Moon,
  Sun,
  Eye,
  Hash,
  Percent,
  Award,
  Target,
  BookOpen,
  Lightbulb,
  BarChart,
  PieChart
} from "lucide-react";
import Head from "next/head";

// ============================================
// TYPES & INTERFACES
// ============================================

interface KeywordResult {
  word: string;
  count: number;
  density: number;
  score: number;
  status: "optimal" | "high" | "low";
  positions: number[];
}

interface AnalysisResult {
  keywords: KeywordResult[];
  totalWords: number;
  uniqueWords: number;
  topKeyword: string;
  topDensity: number;
  readingTime: number;
  seoScore: number;
  suggestions: string[];
}

// ============================================
// STOP WORDS (Common words to ignore)
// ============================================

const STOP_WORDS = new Set([
  "a", "an", "and", "the", "of", "to", "in", "for", "on", "with", "by", "at",
  "from", "is", "are", "was", "were", "be", "been", "being", "have", "has",
  "had", "having", "do", "does", "did", "doing", "but", "or", "so", "for",
  "nor", "yet", "i", "you", "he", "she", "it", "we", "they", "them", "their",
  "this", "that", "these", "those", "some", "any", "no", "only", "own", "same",
  "than", "then", "too", "very", "just", "but", "not", "up", "down", "out",
  "into", "through", "during", "before", "after", "above", "below", "between"
]);

// ============================================
// HELPER FUNCTIONS
// ============================================

const cleanText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const analyzeKeywordDensity = (text: string): AnalysisResult => {
  if (!text.trim()) {
    return {
      keywords: [],
      totalWords: 0,
      uniqueWords: 0,
      topKeyword: "",
      topDensity: 0,
      readingTime: 0,
      seoScore: 0,
      suggestions: []
    };
  }

  const cleanedText = cleanText(text);
  const words = cleanedText.split(/\s+/).filter(w => w.length > 0);
  const totalWords = words.length;
  
  // Count word frequencies
  const frequency: Map<string, number> = new Map();
  const positions: Map<string, number[]> = new Map();
  
  words.forEach((word, index) => {
    if (!STOP_WORDS.has(word) && word.length > 2) {
      frequency.set(word, (frequency.get(word) || 0) + 1);
      if (!positions.has(word)) positions.set(word, []);
      positions.get(word)!.push(index);
    }
  });
  
  // Convert to array and sort by frequency
  const keywordResults: KeywordResult[] = Array.from(frequency.entries())
    .map(([word, count]) => {
      const density = (count / totalWords) * 100;
      let status: "optimal" | "high" | "low" = "optimal";
      if (density > 2.5) status = "high";
      else if (density < 1) status = "low";
      
      // Calculate SEO score for this keyword (0-100)
      let score = 70;
      if (density >= 1 && density <= 2.5) score += 20;
      else if (density > 3) score -= 20;
      else if (density < 0.5) score -= 15;
      score = Math.min(100, Math.max(0, score));
      
      return {
        word,
        count,
        density: parseFloat(density.toFixed(2)),
        score,
        status,
        positions: positions.get(word) || []
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);
  
  const uniqueWords = keywordResults.length;
  const topKeyword = keywordResults[0]?.word || "";
  const topDensity = keywordResults[0]?.density || 0;
  const readingTime = calculateReadingTime(text);
  
  // Calculate overall SEO score (0-100)
  let seoScore = 70;
  if (totalWords >= 300 && totalWords <= 2000) seoScore += 10;
  if (uniqueWords >= 20 && uniqueWords <= 100) seoScore += 10;
  if (topDensity >= 1 && topDensity <= 2.5) seoScore += 10;
  else if (topDensity > 3) seoScore -= 15;
  else if (topDensity < 0.5) seoScore -= 10;
  seoScore = Math.min(100, Math.max(0, seoScore));
  
  // Generate suggestions
  const suggestions: string[] = [];
  if (totalWords < 300) suggestions.push("Content is too short. Aim for 500+ words for better SEO.");
  if (topDensity > 2.5) suggestions.push(`Keyword "${topKeyword}" density is high. Consider reducing frequency to avoid keyword stuffing.`);
  if (topDensity < 1 && topDensity > 0) suggestions.push(`Keyword "${topKeyword}" density is low. Use it more naturally throughout your content.`);
  if (uniqueWords < 15) suggestions.push("Limited vocabulary detected. Add more relevant keywords to improve topic coverage.");
  if (uniqueWords > 50 && totalWords < 500) suggestions.push("High keyword diversity with short content. Focus on core topics.");
  if (suggestions.length === 0) suggestions.push("Great job! Your content is well-optimized for SEO.");
  
  return {
    keywords: keywordResults,
    totalWords,
    uniqueWords,
    topKeyword,
    topDensity,
    readingTime,
    seoScore,
    suggestions
  };
};

// ============================================
// COMPONENTS
// ============================================

const StatCard = ({ icon: Icon, label, value, color, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.3 }}
    whileHover={{ y: -2 }}
    className="rounded-xl p-4 bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-[#1A394E]/60 uppercase tracking-wide">{label}</p>
        <p className="text-2xl font-bold text-[#1A394E]">{value}</p>
      </div>
      <div className="p-2 rounded-lg" style={{ background: `${color}15` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
    </div>
  </motion.div>
);

const ProgressRing = ({ value, size = 80, strokeWidth = 6, label }: { value: number; size?: number; strokeWidth?: number; label?: string }) => {
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
        <span className="text-xl font-bold text-[#1A394E]">{value}</span>
        {label && <span className="text-[9px] text-[#1A394E]/50">{label}</span>}
      </div>
    </div>
  );
};

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

// ============================================
// MAIN COMPONENT
// ============================================

export default function KeywordDensityChecker() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [activeTab, setActiveTab] = useState<"table" | "stats">("table");

  const analyzeText = useCallback(() => {
    if (!text.trim()) return;
    
    setLoading(true);
    
    // Simulate processing delay for smooth UX
    setTimeout(() => {
      const analysis = analyzeKeywordDensity(text);
      setResult(analysis);
      setLoading(false);
    }, 500);
  }, [text]);

  const handleReset = () => {
    setText("");
    setResult(null);
  };

  const loadExample = () => {
    const exampleText = `Keyword density is a crucial SEO factor that helps search engines understand your content. 
    Understanding keyword density can dramatically improve your SEO rankings. When you optimize keyword density correctly, 
    your content becomes more relevant to search queries. Many SEO experts recommend maintaining keyword density between 
    1% and 2.5% for primary keywords. However, focusing too much on keyword density can lead to keyword stuffing penalties. 
    The best approach is to write naturally while keeping keyword density in mind. Use your target keyword in headings, 
    first paragraph, and throughout the content organically. Remember that keyword density is just one of many ranking factors.`;
    setText(exampleText);
    setShowExample(false);
  };

  const copyResults = () => {
    if (!result) return;
    const resultText = `📊 Keyword Density Report\n━━━━━━━━━━━━━━━━━━━━━━\n📝 Total Words: ${result.totalWords}\n🔑 Unique Keywords: ${result.uniqueWords}\n⭐ Top Keyword: ${result.topKeyword}\n📈 Top Density: ${result.topDensity}%\n🏆 SEO Score: ${result.seoScore}/100\n⏱️ Reading Time: ${result.readingTime} min\n\n📋 Keyword Breakdown:\n${result.keywords.map(k => `${k.word}: ${k.count} times (${k.density}%)`).join('\n')}\n━━━━━━━━━━━━━━━━━━━━━━\nGenerated by iCreatixPRO Keyword Density Checker`;
    navigator.clipboard.writeText(resultText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const exportResults = () => {
    if (!result) return;
    const exportData = {
      timestamp: new Date().toISOString(),
      totalWords: result.totalWords,
      uniqueWords: result.uniqueWords,
      topKeyword: result.topKeyword,
      topDensity: result.topDensity,
      seoScore: result.seoScore,
      readingTime: result.readingTime,
      keywords: result.keywords,
      suggestions: result.suggestions
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `keyword-density-report-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Clear toast after 3 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      <Head>
        <title>Keyword Density Checker | SEO Content Analyzer | iCreatixPRO</title>
        <meta
          name="description"
          content="Free keyword density checker tool. Analyze your content's keyword frequency, get SEO scores, and optimize for better rankings. AI-powered content analysis."
        />
      </Head>

      <main className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-[#F8FAFA]"
      }`}>
        
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
          
          {/* Header - Minimal macOS Style */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-[#1A394E]/60 ml-2">keyword-density-checker</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#2C727B]/20 text-[#2C727B]">SEO Tool</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-700">AI-Powered</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 hover:bg-white/90 transition-all"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-4">
              <Sparkles className="w-3 h-3" />
              Free SEO Analysis Tool
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A394E] mb-3">
              Keyword Density Checker
            </h1>
            <p className="text-[#1A394E]/60 text-sm max-w-2xl mx-auto">
              Analyze keyword frequency, improve SEO, and optimize your content for better rankings.
              Get instant insights about your content's keyword usage.
            </p>
          </div>

          {/* Main Tool Card */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN - Input Section */}
            <div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 border-b border-white/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#2C727B]" />
                      <h2 className="text-sm font-semibold text-[#1A394E]">Content Input</h2>
                      <Tooltip text="Paste your article, blog post, or any text content here">
                        <Info className="w-3 h-3 text-[#1A394E]/40 cursor-help" />
                      </Tooltip>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowExample(!showExample)}
                        className="text-xs text-[#2C727B] hover:text-[#1A394E] transition-colors"
                      >
                        {showExample ? "Hide Example" : "Show Example"}
                      </button>
                      <button
                        onClick={handleReset}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="📝 Paste your content here... (Article, blog post, or any text)"
                    className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all resize-none"
                    rows={8}
                  />
                  
                  {showExample && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3 rounded-lg bg-teal-50/50 border border-teal-100 text-xs text-[#1A394E]/60"
                    >
                      <p className="font-medium text-teal-700 mb-1">Example Content:</p>
                      <p>"Keyword density is a crucial SEO factor that helps search engines understand your content. Understanding keyword density can dramatically improve your SEO rankings..."</p>
                      <button onClick={loadExample} className="mt-2 text-teal-600 hover:text-teal-700 font-medium">
                        Use this example →
                      </button>
                    </motion.div>
                  )}
                  
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={analyzeText}
                      disabled={!text.trim() || loading}
                      className={`flex-1 py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                        !text.trim() || loading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#2C727B] to-[#1A394E] hover:shadow-lg"
                      }`}
                    >
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Analyzing...</>
                      ) : (
                        <><Search className="w-4 h-4" /> Analyze Keyword Density</>
                      )}
                    </button>
                    {text && (
                      <button
                        onClick={handleReset}
                        className="px-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-[#1A394E]/70 hover:text-[#1A394E] transition-all"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    )}
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

            {/* RIGHT COLUMN - Results Section */}
            <div>
              {!result && !loading && (
                <div className="bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl border border-white/50 p-8 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#2C727B]/10 flex items-center justify-center">
                    <BarChart3 className="w-10 h-10 text-[#2C727B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A394E] mb-2">Ready to Analyze Your Content</h3>
                  <p className="text-sm text-[#1A394E]/60 max-w-md mx-auto">
                    Paste your content on the left and click "Analyze" to get detailed keyword density insights
                  </p>
                  <div className="mt-6 flex gap-3 text-xs text-[#1A394E]/50">
                    <span>✓ Keyword frequency</span>
                    <span>✓ SEO score</span>
                    <span>✓ Density analysis</span>
                  </div>
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-[#2C727B]/20 border-t-[#2C727B] rounded-full animate-spin" />
                    <div>
                      <p className="font-semibold text-[#1A394E]">Analyzing Keyword Density...</p>
                      <p className="text-xs text-[#1A394E]/50 mt-1">Processing your content</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Results Section */}
              <AnimatePresence mode="wait">
                {!loading && result && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    {/* Score Card */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-semibold text-[#1A394E]">SEO Score</h3>
                          <p className="text-xs text-[#1A394E]/50 mt-1">Based on keyword optimization</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <ProgressRing value={result.seoScore} size={70} strokeWidth={6} />
                          <div className="flex gap-2">
                            <button
                              onClick={copyResults}
                              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                            >
                              {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <button
                              onClick={exportResults}
                              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <StatCard icon={FileText} label="Total Words" value={result.totalWords.toLocaleString()} color="#2C727B" delay={0.1} />
                      <StatCard icon={Hash} label="Unique Keywords" value={result.uniqueWords} color="#689A9A" delay={0.15} />
                      <StatCard icon={Target} label="Top Keyword" value={result.topKeyword || "N/A"} color="#E6A157" delay={0.2} />
                      <StatCard icon={Percent} label="Top Density" value={`${result.topDensity}%`} color="#2E7D64" delay={0.25} />
                    </div>

                    {/* Reading Time */}
                    <div className="p-3 rounded-xl bg-gray-50/50 border border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#2C727B]" />
                        <span className="text-xs text-[#1A394E]/60">Estimated Reading Time</span>
                      </div>
                      <span className="text-sm font-semibold text-[#1A394E]">{result.readingTime} min</span>
                    </div>

                    {/* Tab Navigation for Results */}
                    <div className="flex gap-1 p-1 bg-white/40 backdrop-blur-xl rounded-full border border-white/50">
                      {[
                        { id: "table" as const, label: "Keyword Table", icon: BarChart },
                        { id: "stats" as const, label: "Insights", icon: Lightbulb },
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

                    {/* Keyword Table Tab */}
                    {activeTab === "table" && (
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden">
                        <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
                          <table className="w-full">
                            <thead className="sticky top-0 bg-[#1A394E]">
                              <tr>
                                <th className="p-3 text-left text-white text-xs font-medium">#</th>
                                <th className="p-3 text-left text-white text-xs font-medium">Keyword</th>
                                <th className="p-3 text-left text-white text-xs font-medium">Count</th>
                                <th className="p-3 text-left text-white text-xs font-medium">Density</th>
                                <th className="p-3 text-left text-white text-xs font-medium">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {result.keywords.map((item, i) => (
                                <motion.tr
                                  key={item.word}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.02 }}
                                  className="border-b border-gray-100 hover:bg-gray-50/50"
                                >
                                  <td className="p-3 text-xs text-gray-400">{i + 1}</td>
                                  <td className="p-3">
                                    <span className="font-medium text-[#1A394E] text-sm">{item.word}</span>
                                  </td>
                                  <td className="p-3 text-sm text-[#1A394E]/70">{item.count}</td>
                                  <td className="p-3">
                                    <div className="flex items-center gap-2">
                                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div 
                                          className="h-full rounded-full"
                                          style={{ 
                                            width: `${Math.min(item.density * 10, 100)}%`,
                                            background: item.status === "optimal" ? "#10B981" : item.status === "high" ? "#F59E0B" : "#2C727B"
                                          }}
                                        />
                                      </div>
                                      <span className="text-xs font-medium">{item.density}%</span>
                                    </div>
                                  </td>
                                  <td className="p-3">
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                      item.status === "optimal" ? "bg-green-100 text-green-700" :
                                      item.status === "high" ? "bg-yellow-100 text-yellow-700" : "bg-teal-100 text-teal-700"
                                    }`}>
                                      {item.status === "optimal" ? "Optimal" : item.status === "high" ? "Too High" : "Low"}
                                    </span>
                                  </td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Insights Tab */}
                    {activeTab === "stats" && (
                      <div className="space-y-4">
                        {/* Suggestions */}
                        <div className="p-4 rounded-xl bg-blue-50/50 backdrop-blur-sm border border-blue-100">
                          <h4 className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1">
                            <Lightbulb className="w-3 h-3" /> SEO Recommendations
                          </h4>
                          <ul className="space-y-1">
                            {result.suggestions.map((suggestion, i) => (
                              <li key={i} className="text-xs text-blue-600 flex items-start gap-2">
                                <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Density Guide */}
                        <div className="p-4 rounded-xl bg-gray-50/50 backdrop-blur-sm border border-gray-100">
                          <h4 className="text-xs font-semibold text-[#1A394E] mb-2 flex items-center gap-1">
                            <Info className="w-3 h-3" /> Keyword Density Guide
                          </h4>
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="text-[#1A394E]/60">Optimal Range</span>
                              <span className="font-medium text-green-600">1% - 2.5%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[#1A394E]/60">Too Low</span>
                              <span className="font-medium text-teal-600">&lt; 1%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[#1A394E]/60">Too High (Keyword Stuffing)</span>
                              <span className="font-medium text-yellow-600">&gt; 2.5%</span>
                            </div>
                          </div>
                        </div>

                        {/* Top Keywords Chart */}
                        <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                          <h4 className="text-xs font-semibold text-[#1A394E] mb-3 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> Top Keywords by Density
                          </h4>
                          <div className="space-y-2">
                            {result.keywords.slice(0, 5).map((item) => (
                              <div key={item.word}>
                                <div className="flex justify-between text-xs mb-1">
                                  <span className="text-[#1A394E]/70">{item.word}</span>
                                  <span className="font-medium">{item.density}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full rounded-full bg-gradient-to-r from-[#2C727B] to-[#689A9A]"
                                    style={{ width: `${Math.min(item.density * 10, 100)}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Educational Footer */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-[#2C727B]" />
                <h3 className="font-semibold text-[#1A394E] text-sm">What is Keyword Density?</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">Keyword density measures how often a keyword appears in your content compared to total words. It's a crucial SEO factor.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-[#2C727B]" />
                <h3 className="font-semibold text-[#1A394E] text-sm">Ideal Density Range</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">The optimal keyword density range is between 1% to 2.5% for most content strategies. Stay within this range to rank better.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[#2C727B]" />
                <h3 className="font-semibold text-[#1A394E] text-sm">Pro Tip</h3>
              </div>
              <p className="text-xs text-[#1A394E]/60">Use your target keyword in headings, first paragraph, and throughout content naturally. Avoid keyword stuffing at all costs.</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              © 2026 iCreatixPRO — AI-Powered Keyword Density Analysis Tool
            </p>
          </div>
        </div>
      </main>
    </>
  );
}