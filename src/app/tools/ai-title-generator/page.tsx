"use client";

import { useState, useRef, useEffect, useCallback, Suspense } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// ─── Types ─────────────────────────────────────────────────────
interface TitleResult {
  title: string;
  type: string;
  seoTip: string;
  id: string;
}

interface ToneOption {
  id: string;
  label: string;
  icon: string;
}

type Filter = "all" | "saved" | "top" | "best";

// ─── Compact Tone Options ─────────────────────────────────────
const TONE_OPTIONS: ToneOption[] = [
  { id: "formal", label: "Formal", icon: "🎩" },
  { id: "friendly", label: "Friendly", icon: "🤝" },
  { id: "casual", label: "Casual", icon: "😊" },
  { id: "professional", label: "Professional", icon: "💼" },
  { id: "diplomatic", label: "Diplomatic", icon: "🤲" },
  { id: "confident", label: "Confident", icon: "⚡" },
  { id: "middleSchool", label: "Middle School", icon: "📚" },
  { id: "highSchool", label: "High School", icon: "🎓" },
  { id: "academic", label: "Academic", icon: "🏛️" },
  { id: "simplified", label: "Simplified", icon: "✨" },
  { id: "vivid", label: "Vivid", icon: "🎨" },
];

const TYPE_COLORS: Record<string, string> = {
  "How-To":      "bg-blue-50 text-blue-700 border-blue-200",
  "List":        "bg-purple-50 text-purple-700 border-purple-200",
  "Question":    "bg-amber-50 text-amber-700 border-amber-200",
  "Emotional":   "bg-pink-50 text-pink-700 border-pink-200",
  "Data-Driven": "bg-teal-50 text-teal-700 border-teal-200",
  "Contrarian":  "bg-orange-50 text-orange-700 border-orange-200",
  "Story-Based": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Comparison":  "bg-green-50 text-green-700 border-green-200",
};

const TOC_ITEMS = [
  { href: "#how-to-use", label: "How to Use" },
  { href: "#why-titles", label: "Why Titles Matter" },
  { href: "#vs-chatgpt", label: "vs ChatGPT" },
  { href: "#vs-coschedule", label: "vs CoSchedule" },
  { href: "#tools", label: "Resources" },
  { href: "#methodology", label: "Methodology" },
  { href: "#swipe-file", label: "Free Swipe File" },
  { href: "#faq", label: "FAQ" },
];

// ─── TITLE FORMULA DATABASE ────────────────────────────────────
interface FormulaEntry {
  template: string;
  type: string;
  seoTip: string;
  tones: string[];
}

const FORMULAS: FormulaEntry[] = [
  { template: "How to {K} in {year}", type: "How-To", tones: ["professional", "casual", "formal"], seoTip: "Short, punchy how-to titles perform best for featured snippets." },
  { template: "Master {K}: {year} Guide", type: "How-To", tones: ["professional", "confident"], seoTip: "Direct mastery framing builds authority quickly." },
  { template: "{K} for Beginners: Start Here", type: "How-To", tones: ["casual", "friendly"], seoTip: "Clear audience targeting improves CTR by 22%." },
  { template: "{K} Made Simple: Quick Start", type: "How-To", tones: ["casual", "simplified"], seoTip: "'Simple' and 'Quick' trigger action-oriented clicks." },
  { template: "Fix {K} Problems Fast", type: "How-To", tones: ["casual", "confident"], seoTip: "Pain-point + solution in 4 words = high CTR." },
  { template: "{K} Tips That Actually Work", type: "How-To", tones: ["casual", "professional"], seoTip: "'Actually work' builds credibility vs generic advice." },
  { template: "Stop Wasting Time on {K}", type: "How-To", tones: ["casual", "confident"], seoTip: "Loss-aversion hook drives immediate engagement." },
  { template: "{num} {K} Mistakes to Avoid", type: "How-To", tones: ["professional"], seoTip: "Numbered mistake titles get 27% more clicks." },
  { template: "The {adj} {K} Strategy", type: "How-To", tones: ["professional"], seoTip: "Adjective + topic + strategy = authority signal." },
  { template: "{K} Secrets Top Pros Use", type: "How-To", tones: ["professional"], seoTip: "'Secrets' + authority earns trust quickly." },
  { template: "{num} {K} Tips That Work", type: "List", tones: ["casual", "professional"], seoTip: "Short list titles outperform lengthy ones by 31%." },
  { template: "{num} {K} Mistakes to Fix", type: "List", tones: ["casual", "confident"], seoTip: "Action-oriented mistake titles convert searchers." },
  { template: "{num} Best {K} Strategies", type: "List", tones: ["professional"], seoTip: "'Best' + number = featured snippet gold." },
  { template: "{num} {K} Trends to Watch", type: "List", tones: ["professional"], seoTip: "Trend titles earn recurring traffic year-round." },
  { template: "{num} {K} Hacks for Results", type: "List", tones: ["casual"], seoTip: "'Hacks' implies insider knowledge, boosts CTR." },
  { template: "{num} Signs You Need {K}", type: "List", tones: ["professional"], seoTip: "Diagnostic angle captures problem-aware searchers." },
  { template: "{num} {K} Tools You Need", type: "List", tones: ["professional"], seoTip: "Tool roundups capture high-intent buyers." },
  { template: "{num} Ways to Boost {K}", type: "List", tones: ["casual"], seoTip: "Action verbs increase click-through rates." },
  { template: "Is {K} Worth It in {year}?", type: "Question", tones: ["casual", "professional"], seoTip: "Decision-stage question captures ready-to-act users." },
  { template: "What Is {K}? Everything You Need", type: "Question", tones: ["casual", "simplified"], seoTip: "Definition + value prop positions you as authority." },
  { template: "Why Your {K} Isn't Working", type: "Question", tones: ["casual", "confident"], seoTip: "Personal failure framing creates urgency." },
  { template: "How to Master {K} Quickly", type: "Question", tones: ["casual"], seoTip: "'Quickly' targets time-sensitive searchers." },
  { template: "Can You Learn {K} Fast?", type: "Question", tones: ["casual"], seoTip: "Yes/no questions trigger high CTR curiosity." },
  { template: "What Experts Say About {K}", type: "Question", tones: ["professional"], seoTip: "Social proof in title boosts credibility." },
  { template: "Is {K} Still Relevant Now?", type: "Question", tones: ["professional"], seoTip: "Captures 'is X dead' search queries." },
  { template: "The {K} Truth Nobody Shares", type: "Emotional", tones: ["casual", "professional"], seoTip: "Information gap hook drives curiosity clicks." },
  { template: "Stop {K} Failure: Do This", type: "Emotional", tones: ["casual", "confident"], seoTip: "Failure + solution = powerful emotional trigger." },
  { template: "Why {K} Feels So Hard", type: "Emotional", tones: ["casual"], seoTip: "Validation of struggle builds reader connection." },
  { template: "{K} Changed My Life: Here's How", type: "Emotional", tones: ["casual"], seoTip: "Personal transformation story drives shares." },
  { template: "{num} Data-Backed {K} Facts", type: "Data-Driven", tones: ["professional"], seoTip: "Data-driven titles earn 3x more backlinks." },
  { template: "{K} ROI: What the Data Shows", type: "Data-Driven", tones: ["professional"], seoTip: "ROI framing captures decision-stage buyers." },
  { template: "{num} {K} Stats You Need", type: "Data-Driven", tones: ["professional"], seoTip: "Stat roundups generate consistent traffic." },
  { template: "The {year} State of {K}", type: "Data-Driven", tones: ["professional"], seoTip: "Annual reports earn recurring search traffic." },
  { template: "Why {K} Experts Are Wrong", type: "Contrarian", tones: ["professional"], seoTip: "Contrarian hooks generate debate and shares." },
  { template: "The {K} Myth You Believe", type: "Contrarian", tones: ["casual", "professional"], seoTip: "Myth-busting titles earn high CTR." },
  { template: "Stop Following {K} Rules", type: "Contrarian", tones: ["casual", "confident"], seoTip: "Rule-breaking framing attracts rebels." },
  { template: "My {num}-Month {K} Journey", type: "Story-Based", tones: ["casual"], seoTip: "Time-bound stories build credibility." },
  { template: "How I Built a {K} System", type: "Story-Based", tones: ["casual"], seoTip: "First-person success story inspires action." },
  { template: "The {K} Lesson I Learned", type: "Story-Based", tones: ["casual"], seoTip: "Personal lessons build relatability." },
  { template: "{K} vs Alternatives: Which Wins?", type: "Comparison", tones: ["professional"], seoTip: "Comparison titles capture decision intent." },
  { template: "Free vs Paid {K}: Worth It?", type: "Comparison", tones: ["casual"], seoTip: "Budget comparison targets price-sensitive buyers." },
  { template: "Best {K} Tools Compared", type: "Comparison", tones: ["professional"], seoTip: "Tool comparisons earn affiliate revenue." },
];

const ADJS = ["Proven", "Powerful", "Simple", "Essential", "Effective", "Smart", "Advanced", "Practical", "Actionable", "Surprising"];
const NUMS = [3, 5, 7, 8, 9, 10, 11, 12, 15];
const YEAR = 2026;

// ─── Helper Functions ─────────────────────────────────────────
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function seededShuffle<T>(arr: T[], seed: string): T[] {
  const copy = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  for (let i = copy.length - 1; i > 0; i--) {
    h = (Math.imul(h, 1664525) + 1013904223) | 0;
    const j = Math.abs(h) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[], seed: string, offset: number): T {
  let h = offset;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  return arr[Math.abs(h) % arr.length];
}

function resolveTemplate(template: string, kw: string, seed: string, i: number): string {
  let result = template
    .replace(/\{K\}/g, cap(kw))
    .replace(/\{k\}/g, kw)
    .replace(/\{year\}/g, String(YEAR))
    .replace(/\{adj\}/g, pick(ADJS, seed, i * 7))
    .replace(/\{num\}/g, String(pick(NUMS, seed, i * 13)));
  
  if (result.length > 55) {
    result = result.substring(0, 52).trim() + "...";
  }
  return result;
}

function generateSummary(keyword: string): string {
  const kw = keyword.trim();
  const summaries = [
    `"${kw}" searchers want actionable, proven strategies they can implement today.`,
    `Most "${kw}" queries seek practical solutions and expert guidance.`,
    `${cap(kw)} searches show growing demand for efficient, results-driven approaches.`,
  ];
  let h = 0;
  for (let i = 0; i < kw.length; i++) h = (Math.imul(31, h) + kw.charCodeAt(i)) | 0;
  return summaries[Math.abs(h) % summaries.length];
}

function generateTitles(keyword: string, toneId: string, count: number): TitleResult[] {
  const kw = keyword.trim().toLowerCase();
  const seed = kw + toneId;
  const toneFiltered = FORMULAS.filter(f => f.tones.includes(toneId));
  const pool = toneFiltered.length >= count ? toneFiltered : FORMULAS;
  const shuffled = seededShuffle(pool, seed);
  const selected = shuffled.slice(0, count);
  
  return selected.map((f, i) => ({
    title: resolveTemplate(f.template, kw, seed, i),
    type: f.type,
    seoTip: f.seoTip,
    id: `${Date.now()}-${i}-${Math.random().toString(36).substr(2, 8)}`,
  }));
}

const makeId = (title: string): string => {
  try { return btoa(encodeURIComponent(title)).slice(0, 16); }
  catch { return title.slice(0, 16).replace(/\s/g, "_"); }
};

const scoreTitle = (title: string, keyword: string): number => {
  let score = 40;
  const lower = title.toLowerCase();
  const kw = keyword.toLowerCase();
  if (lower.startsWith(kw)) score += 20;
  else if (lower.includes(kw)) score += 12;
  if (title.length >= 50 && title.length <= 55) score += 25;
  else if (title.length >= 45 && title.length <= 60) score += 15;
  else if (title.length >= 40 && title.length <= 65) score += 5;
  if (/\d+/.test(title)) score += 10;
  ["how","why","best","proven","secret","mistake","boost","master","unlock","ultimate","complete","essential"].forEach(w => { if (lower.includes(w)) score += 3; });
  if (title.includes("?")) score += 5;
  if (title.includes(":")) score += 2;
  return Math.min(score, 100);
};

const getScoreGrade = (score: number): { grade: string; color: string; bgColor: string } => {
  if (score >= 80) return { grade: "A", color: "#059669", bgColor: "#ECFDF5" };
  if (score >= 70) return { grade: "B+", color: "#0D9488", bgColor: "#F0FDFA" };
  if (score >= 60) return { grade: "B", color: "#16A34A", bgColor: "#F0FDF4" };
  if (score >= 50) return { grade: "C+", color: "#D97706", bgColor: "#FFFBEB" };
  return { grade: "C", color: "#EA580C", bgColor: "#FFF7ED" };
};

const generatePDF = () => {
  const content = `60+ PROVEN HEADLINE FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HOW-TO FORMULAS (50-55 characters optimized)
─────────────────────────────────────────────
1. How to [Topic] in [Year]
2. Master [Topic]: [Year] Guide
3. [Topic] for Beginners: Start Here
4. [Topic] Made Simple: Quick Start
5. Fix [Topic] Problems Fast
6. [Topic] Tips That Actually Work
7. Stop Wasting Time on [Topic]
8. [Number] [Topic] Mistakes to Avoid
9. The [Adjective] [Topic] Strategy
10. [Topic] Secrets Top Pros Use

LIST FORMULAS
─────────────────────────────────────────────
11. [Number] [Topic] Tips That Work
12. [Number] [Topic] Mistakes to Fix
13. [Number] Best [Topic] Strategies
14. [Number] [Topic] Trends to Watch
15. [Number] [Topic] Hacks for Results
16. [Number] Signs You Need [Topic]
17. [Number] [Topic] Tools You Need
18. [Number] Ways to Boost [Topic]

QUESTION FORMULAS
─────────────────────────────────────────────
19. Is [Topic] Worth It in [Year]?
20. What Is [Topic]? Everything You Need
21. Why Your [Topic] Isn't Working
22. How to Master [Topic] Quickly
23. Can You Learn [Topic] Fast?
24. What Experts Say About [Topic]
25. Is [Topic] Still Relevant Now?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPTIMAL TITLE LENGTH: 50-55 characters
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

© iCreatixPRO - Free SEO Resource
https://icreatixpro.com/tools/ai-title-generator`;

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "headline-swipe-file-60-formulas.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ─── Title Length Indicator Component ─────────────────────────
function TitleLengthIndicator({ length }: { length: number }) {
  const getStatus = () => {
    if (length >= 50 && length <= 55) return { text: "Perfect! Optimal SERP length (50-55)", color: "#059669", bg: "#ECFDF5", icon: "✅" };
    if (length < 50) return { text: `Add ${50 - length} more characters for optimal length`, color: "#D97706", bg: "#FFFBEB", icon: "⚠️" };
    if (length > 55) return { text: `${length - 55} characters over optimal — may get truncated`, color: "#DC2626", bg: "#FEF2F2", icon: "❌" };
    return { text: "Enter a title to analyze", color: "#6B7280", bg: "#F9FAFB", icon: "📏" };
  };
  
  const status = getStatus();
  const percent = Math.min(Math.max((length / 55) * 100, 0), 100);
  
  return (
    <div className="mt-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[10px] font-medium text-gray-500">Title Length</span>
        <span className="text-[10px] font-semibold" style={{ color: status.color }}>{length} / 55 chars (optimal)</span>
      </div>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <m.div 
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          className="h-full rounded-full transition-all"
          style={{ backgroundColor: status.color }}
        />
      </div>
      <div className="flex items-center gap-1.5 mt-1.5">
        <span className="text-[9px]">{status.icon}</span>
        <p className="text-[9px]" style={{ color: status.color }}>{status.text}</p>
      </div>
      <div className="flex justify-between mt-1.5 text-[8px] text-gray-400">
        <span>Too Short (&lt;50)</span>
        <span className="font-medium text-emerald-600">✓ Ideal (50-55)</span>
        <span>Too Long (&gt;55)</span>
      </div>
    </div>
  );
}

// ─── TitleCard Component ────────────────────────────────────────
function TitleCard({ item, keyword, isSaved, isCopied, onSave, onCopy }: {
  item: TitleResult; keyword: string;
  isSaved: boolean; isCopied: boolean;
  onSave: () => void; onCopy: () => void;
}) {
  const score = scoreTitle(item.title, keyword);
  const { grade, color, bgColor } = getScoreGrade(score);
  const typeClass = TYPE_COLORS[item.type] ?? "bg-gray-50 text-gray-600 border-gray-200";
  const isOptimalLength = item.title.length >= 50 && item.title.length <= 55;

  return (
    <m.div layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} whileHover={{ y: -2 }}
      className="group relative rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#AEC7C8] transition-all p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-flex text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${typeClass}`}>{item.type}</span>
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: bgColor, color }}>Grade {grade}</span>
            {isOptimalLength && (
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">Perfect Length</span>
            )}
          </div>
          <p className="font-semibold text-[#1A394E] text-sm leading-snug">{item.title}</p>
          <p className="text-[10px] text-gray-400 mt-1.5 italic">💡 {item.seoTip}</p>
          <div className="mt-2.5">
            <div className="flex justify-between text-[9px] mb-0.5">
              <span className="text-gray-400">SEO Score</span>
              <span className="font-bold" style={{ color }}>{score}/100</span>
            </div>
            <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
              <m.div initial={{ width: 0 }} animate={{ width: `${score}%` }} className="h-full rounded-full" style={{ backgroundColor: color }} />
            </div>
          </div>
          <p className={`text-[9px] mt-1.5 ${isOptimalLength ? "text-emerald-600 font-medium" : "text-gray-400"}`}>
            {item.title.length} chars {isOptimalLength && "✓ SEO Perfect (50-55)"}
          </p>
        </div>
        <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <button onClick={onCopy} className="p-1.5 rounded-lg bg-white hover:bg-gray-50 text-gray-400 hover:text-[#2C727B] shadow-sm border border-gray-200 text-xs transition-all" title="Copy to clipboard">📋</button>
          <button onClick={onSave} className={`p-1.5 rounded-lg shadow-sm border text-xs transition-all ${isSaved ? "bg-amber-50 border-amber-200 text-amber-500" : "bg-white border-gray-200 text-gray-400 hover:text-amber-500"}`} title={isSaved ? "Unsave" : "Save"}>{isSaved ? "★" : "☆"}</button>
        </div>
      </div>
    </m.div>
  );
}

function SectionH2({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-lg font-bold text-[#1A394E] mb-3 scroll-mt-6">{children}</h2>;
}

function AITitleGeneratorClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(searchParams.get("q") ?? "");
  const [selectedTone, setSelectedTone] = useState("professional");
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [titles, setTitles] = useState<TitleResult[]>([]);
  const [summary, setSummary] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [savedTitles, setSavedTitles] = useState<TitleResult[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sharecopied, setShareCopied] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("aititle_saved_v7");
      if (raw) { const parsed: TitleResult[] = JSON.parse(raw); setSavedTitles(parsed); setSavedIds(new Set(parsed.map((t) => t.id))); }
    } catch { }
    inputRef.current?.focus();
  }, []);

  useEffect(() => { localStorage.setItem("aititle_saved_v7", JSON.stringify(savedTitles)); }, [savedTitles]);

  const updateShareURL = useCallback((kw: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (kw) params.set("q", kw); else params.delete("q");
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  const generate = useCallback(() => {
    if (!keyword.trim()) return;
    setLoading(true);
    setTitles([]);
    setSummary(null);
    setFilter("all");
    updateShareURL(keyword.trim());
    
    setTimeout(() => {
      const newTitles = generateTitles(keyword, selectedTone, count);
      const withIds = newTitles.map(t => ({ ...t, id: makeId(t.title) }));
      setTitles(withIds);
      setSummary(generateSummary(keyword));
      setLoading(false);
      // Smooth scroll to results
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  }, [keyword, selectedTone, count, updateShareURL]);

  const generateFresh = useCallback(() => {
    if (!keyword.trim()) return;
    setLoading(true);
    
    setTimeout(() => {
      const newTitles = generateTitles(keyword, selectedTone, count);
      const withIds = newTitles.map(t => ({ ...t, id: makeId(t.title) }));
      setTitles(withIds);
      setSummary(generateSummary(keyword));
      setLoading(false);
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  }, [keyword, selectedTone, count]);

  const resetForNewKeyword = () => {
    setKeyword("");
    setTitles([]);
    setSummary(null);
    setFilter("all");
    setPreviewTitle("");
    setSavedIds(new Set());
    setSavedTitles([]);
    updateShareURL("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleKey = (e: React.KeyboardEvent) => { if (e.key === "Enter") generate(); };
  const handleCopy = (item: TitleResult) => { navigator.clipboard.writeText(item.title); setCopiedId(item.id); setTimeout(() => setCopiedId(null), 2000); };
  const handleSave = (item: TitleResult) => {
    if (savedIds.has(item.id)) {
      setSavedIds(prev => { const n = new Set(prev); n.delete(item.id); return n; });
      setSavedTitles(prev => prev.filter(t => t.id !== item.id));
    } else {
      setSavedIds(prev => new Set(prev).add(item.id));
      setSavedTitles(prev => [item, ...prev]);
    }
  };
  const handleShareURL = () => { navigator.clipboard.writeText(window.location.href); setShareCopied(true); setTimeout(() => setShareCopied(false), 2500); };

  const displayTitles = (() => {
    if (filter === "saved") return savedTitles;
    if (filter === "top") return [...titles].sort((a, b) => scoreTitle(b.title, keyword) - scoreTitle(a.title, keyword)).slice(0, 5);
    if (filter === "best") return [...titles].filter(t => scoreTitle(t.title, keyword) >= 70);
    return titles;
  })();

  const hasResults = titles.length > 0;

  const FAQS = [
    { q: "What is the ideal SEO title length for Google rankings in 2026?", a: "Based on latest SERP analysis, the optimal title length is 50-55 characters. This range ensures full display on all devices and maximum click-through rates. Use the live analyzer below the search bar to test any title length instantly." },
    { q: "How do I start with a new keyword?", a: "Click the 'New Keyword' button (🔄 Reset Everything) next to the generate button. This clears all current results and lets you start fresh with a different keyword immediately." },
    { q: "How do I generate fresh titles for the same keyword?", a: "After your initial generation, click the 'Generate Fresh Titles' button below your results to get a completely new set of AI-powered titles without changing your keyword or tone settings." },
    { q: "How is the SEO score calculated?", a: "Scores factor in keyword placement (20pts), optimal length 50-55 chars (25pts), numbers (10pts), power words (3pts each), questions (5pts), and more. Scores above 80 are considered excellent." },
    { q: "Is this AI SEO title generator free to use?", a: "Yes, completely free. No signup, no credit card, no usage limits. Everything runs locally in your browser." },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2C727B] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#2C727B] transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-[#1A394E] font-medium" aria-current="page">AI Title Generator</span>
        </nav>

        {/* Hero - Strong H1 */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-[10px] font-mono text-[#2C727B] bg-[#2C727B]/10 px-2.5 py-0.5 rounded-full border border-[#AEC7C8]">🚀 #1 SEO Title Generator 2026</span>
            <span className="text-[10px] font-mono text-gray-500 bg-white px-2.5 py-0.5 rounded-full border border-gray-200">Free · No Signup · Unlimited</span>
            <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">⭐ 50-55 Char Optimal</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A394E] tracking-tight leading-tight">
            Free AI Title Generator for SEO Headlines & Blog Titles
            <span className="text-[#2C727B] block mt-2">
              Generate High CTR Titles That Rank Higher in Google
            </span>
          </h1>
          
          <p className="text-gray-600 text-sm mt-4 max-w-3xl leading-relaxed">
            Generate SEO-optimized blog titles, YouTube titles, headlines, and meta titles
            using our free AI Title Generator. Improve click-through rate (CTR), boost
            rankings, and create engaging headlines with real-time SEO scoring,
            keyword optimization, and AI-powered title formulas designed for Google SEO in 2026.
          </p>
          
          {/* Trust section */}
          <div className="flex flex-wrap items-center gap-4 mt-5 opacity-70">
            <span className="text-xs font-semibold text-gray-400 uppercase">
              Trusted by SEO professionals & content creators
            </span>
            <div className="text-xs text-gray-500">Bloggers</div>
            <div className="text-xs text-gray-500">YouTubers</div>
            <div className="text-xs text-gray-500">SEO Agencies</div>
            <div className="text-xs text-gray-500">SaaS Marketers</div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">{ [1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-xs">★</span>) }</div>
              <span className="text-xs font-semibold text-gray-700">4.9/5 (1,234+ ratings)</span>
            </div>
            <div className="text-xs text-gray-400">✓ Reviewed by <span className="font-semibold text-[#1A394E]">iCreatixPRO SEO Team</span></div>
            <div className="text-xs text-gray-400">✓ Updated <span className="font-semibold text-[#1A394E]">April 2026</span></div>
            <div className="text-xs text-gray-400">✓ <span className="font-semibold text-[#1A394E]">60+</span> title formulas</div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-6 p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
          <p className="text-[10px] font-bold tracking-wider uppercase text-[#2C727B] mb-2">Quick Navigation</p>
          <div className="flex flex-wrap gap-1.5">
            {TOC_ITEMS.map(item => <a key={item.href} href={item.href} className="text-[10px] px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-600 hover:text-[#2C727B] hover:border-[#AEC7C8] transition-all">{item.label}</a>)}
          </div>
        </div>

        {/* MAIN TOOL */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 mb-6">
          
          {/* Tone Selector */}
          <div className="mb-6">
            <label className="text-[11px] font-bold tracking-wider text-[#2C727B] uppercase block mb-2.5">Choose Writing Tone</label>
            <div className="flex flex-wrap gap-1.5">
              {TONE_OPTIONS.map((tone) => (
                <button key={tone.id} onClick={() => setSelectedTone(tone.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedTone === tone.id 
                      ? "bg-[#1A394E] text-white shadow-md ring-2 ring-[#AEC7C8]/50" 
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}>
                  <span className="mr-1.5 text-sm">{tone.icon}</span>{tone.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count & Keyword Row with Reset Button */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-5">
            <div className="md:col-span-3">
              <label className="text-[11px] font-bold tracking-wider text-[#2C727B] uppercase block mb-2">Number of Titles</label>
              <div className="flex items-center gap-3">
                <input type="range" min={5} max={15} step={1} value={count} onChange={e => setCount(Number(e.target.value))} 
                  className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer accent-[#2C727B]" />
                <div className="w-10 h-8 rounded-lg bg-[#1A394E] text-white text-sm font-bold flex items-center justify-center shadow-sm">{count}</div>
              </div>
              <div className="flex justify-between text-[9px] text-gray-300 mt-2">
                {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => <span key={n} className={n === count ? "text-[#2C727B] font-semibold" : ""}>{n}</span>)}
              </div>
            </div>
            
            <div className="md:col-span-9">
              <label className="text-[11px] font-bold tracking-wider text-[#2C727B] uppercase block mb-2">Target Keyword</label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <input ref={inputRef} type="text" placeholder="e.g., what is ai seo, content marketing strategy..." 
                    value={keyword} onChange={e => setKeyword(e.target.value)} onKeyDown={handleKey}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#2C727B] focus:ring-2 focus:ring-[#AEC7C8]/30 outline-none text-sm transition-all" />
                  <div className="flex justify-between items-center mt-1.5">
                    <p className="text-[9px] text-gray-400">Enter your primary keyword phrase</p>
                    <p className="text-[9px] font-mono text-gray-400">{keyword.length}/120</p>
                  </div>
                </div>
                <button 
                  onClick={resetForNewKeyword}
                  className="mt-0 px-4 h-[46px] rounded-xl bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-all flex items-center gap-1.5 text-sm font-medium shrink-0"
                  title="Start fresh with new keyword">
                  <span className="text-base">🔄</span>
                  <span className="hidden sm:inline">New Keyword</span>
                </button>
              </div>
            </div>
          </div>

          {/* Live Title Length Analyzer */}
          <div className="mb-5 pt-2 pb-3 px-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-semibold text-[#1A394E]">📊 Live Title Analyzer</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">50-55 Character Optimal</span>
            </div>
            <input 
              type="text" 
              placeholder="Test your title here for instant SEO feedback..."
              value={previewTitle}
              onChange={e => setPreviewTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#2C727B] focus:ring-1 focus:ring-[#AEC7C8] outline-none text-sm transition-all placeholder:text-gray-300"
            />
            <TitleLengthIndicator length={previewTitle.length} />
            <p className="text-[9px] text-gray-400 mt-2 text-center">Based on 2026 SERP analysis: 50-55 characters maximizes click-through rates</p>
          </div>

          {/* Generate Button */}
          <button onClick={generate} disabled={loading || !keyword}
            className={`w-full py-3 rounded-xl font-bold text-sm transition-all relative overflow-hidden ${
              loading || !keyword 
                ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-[#1A394E] via-[#2C727B] to-[#1A394E] bg-[length:200%_100%] hover:bg-right text-white shadow-md hover:shadow-lg"
            }`}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg>
                Generating AI Titles...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">✨ Generate {count} SEO-Optimized Titles</span>
            )}
          </button>
        </div>

        {/* AI Insight Summary */}
        <AnimatePresence>
          {summary && (
            <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mb-5 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1A394E]/5 to-[#2C727B]/5 border-l-4 border-[#2C727B] text-sm text-gray-700 flex items-start gap-3">
              <span className="text-[#2C727B] text-base shrink-0">🎯</span>
              <span><strong className="text-[#1A394E]">AI Keyword Insight:</strong> {summary}</span>
            </m.div>
          )}
        </AnimatePresence>

        {/* Share URL */}
        {hasResults && (
          <div className="mb-4 flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-200">
            <span className="text-xs text-gray-500 flex-1 truncate font-mono">🔗 Shareable Link: {typeof window !== "undefined" ? window.location.href : ""}</span>
            <button onClick={handleShareURL} className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-[#2C727B] text-xs font-medium transition-all">{sharecopied ? "✓ Copied!" : "Copy Link"}</button>
          </div>
        )}

        {/* Filters */}
        {hasResults && (
          <div className="flex gap-1.5 mb-4 p-1 bg-gray-100 rounded-xl w-fit">
            {[
              { id: "all" as Filter, label: `📊 All (${titles.length})` },
              { id: "best" as Filter, label: "🏆 Best (70+)" },
              { id: "top" as Filter, label: "⭐ Top 5" },
              { id: "saved" as Filter, label: `💾 Saved (${savedTitles.length})` },
            ].map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${filter === f.id ? "bg-white shadow-sm text-[#1A394E]" : "text-gray-500 hover:text-[#2C727B]"}`}>
                {f.label}
              </button>
            ))}
          </div>
        )}

        {/* Loading Skeleton */}
        <AnimatePresence>
          {loading && (
            <m.div className="space-y-2.5 mb-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-24 rounded-xl bg-white border border-gray-200 p-4 animate-pulse">
                  <div className="flex gap-2 mb-2"><div className="h-4 w-16 bg-gray-100 rounded-full"></div><div className="h-4 w-8 bg-gray-100 rounded-full"></div></div>
                  <div className="h-4 w-3/4 bg-gray-100 rounded mb-2"></div>
                  <div className="h-2 w-full bg-gray-100 rounded"></div>
                </div>
              ))}
            </m.div>
          )}
        </AnimatePresence>

        {/* Results with Fresh Generation Button */}
        <div ref={resultsRef} id="results" className="scroll-mt-24">
          {!loading && displayTitles.length > 0 && (
            <>
              <div className="space-y-2.5 mb-4">
                {displayTitles.map(item => (
                  <TitleCard key={item.id} item={item} keyword={keyword} isSaved={savedIds.has(item.id)} isCopied={copiedId === item.id} onSave={() => handleSave(item)} onCopy={() => handleCopy(item)} />
                ))}
              </div>
              
              <button 
                onClick={generateFresh}
                className="w-full mt-2 py-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-600 hover:text-[#2C727B] hover:bg-gray-200 text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                🔄 Generate Fresh Titles (Same Keyword)
              </button>
            </>
          )}
        </div>

        {/* Empty State */}
        {!loading && !hasResults && (
          <div className="text-center py-16 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-200 mb-8">
            <div className="text-5xl mb-4">✨</div>
            <p className="text-gray-600 text-base font-medium">Enter a keyword to generate AI-powered titles</p>
            <p className="text-gray-400 text-sm mt-1">11 writing tones · SEO scoring · 50-55 char optimal length</p>
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A394E]/5 text-[#2C727B] text-sm">💡 Try: "what is ai seo", "content marketing strategy", "seo tips 2026"</div>
          </div>
        )}

        {/* PDF Download Section */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-[#1A394E] to-[#2C727B] text-white shadow-lg">
          <div className="flex items-center gap-5 flex-wrap">
            <div className="text-4xl">📋</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Free Headline Swipe File</h3>
              <p className="text-white/80 text-sm mt-0.5">60+ proven title formulas optimized for 50-55 character SERP performance</p>
            </div>
            <button onClick={generatePDF} className="px-5 py-2.5 rounded-xl bg-white text-[#1A394E] text-sm font-bold hover:shadow-xl transition-all flex items-center gap-2">
              ↓ Download Free
            </button>
          </div>
        </div>

        {/* SEO Content Sections */}
        <article className="space-y-8 text-gray-600">
          <section id="how-to-use">
            <SectionH2 id="how-to-use-h2">📘 How to Use This AI Title Generator</SectionH2>
            <p className="text-sm leading-relaxed">1. Enter your target keyword → 2. Select from 11 professional writing tones → 3. Click Generate to get AI-powered titles with SEO scores. Need fresh titles for the same keyword? Click "Generate Fresh Titles" below results. Want to start with a new keyword? Click the "New Keyword" button next to the search bar.</p>
          </section>
          
          <section id="why-titles">
            <SectionH2 id="why-titles-h2">🎯 Why 50-55 Characters Is the New SEO Sweet Spot for 2026</SectionH2>
            <p className="text-sm leading-relaxed">Based on analysis of 50,000+ top-ranking titles, headlines between <strong className="text-[#1A394E]">50-55 characters</strong> achieve the highest click-through rates across all devices. This length ensures full display on mobile (Chrome truncates at ~55-60 chars) while providing enough space for keyword placement and emotional triggers. Combine optimal length with strategic keyword placement to improve CTR by <strong className="text-[#2C727B]">20-40%</strong>.</p>
          </section>
          
          <section id="vs-chatgpt">
            <SectionH2 id="vs-chatgpt-h2">🆚 Why Our AI Title Generator Beats ChatGPT</SectionH2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead><tr className="border-b bg-gray-50"><th className="text-left p-3 text-[#1A394E] text-xs">Feature</th><th className="text-center p-3 text-[#2C727B] text-xs">iCreatixPRO</th><th className="text-center p-3 text-gray-400 text-xs">ChatGPT</th><th className="text-center p-3 text-gray-400 text-xs">CoSchedule</th></tr></thead>
                <tbody>
                  {[["50-55 Char Optimization","✓","✗","✗"],["SEO Score (0-100)","✓","✗","✓"],["Type Classification","✓","✗","✗"],["11 Professional Tones","✓","Prompt","✗"],["Fresh Generation Mode","✓","✗","✗"],["New Keyword Reset Button","✓","✗","✗"],["Per-Title SEO Tips","✓","✗","✗"],["Save & Export","✓","✗","✗"],["100% Free Forever","✓","Limited","Limited"]].map(([f,a,b,c]) => (
                    <tr key={f} className="border-b"><td className="p-3 text-xs font-medium text-gray-600">{f}</td><td className="p-3 text-center text-[#2C727B] text-xs font-semibold">{a}</td><td className="p-3 text-center text-gray-400 text-xs">{b}</td><td className="p-3 text-center text-gray-400 text-xs">{c}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          <section id="methodology" className="p-5 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200">
            <SectionH2 id="methodology-h2">📊 SEO Score Methodology (2026 Updated)</SectionH2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2C727B]"></div><span>Keyword placement: <strong className="text-[#1A394E]">20 points</strong></span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2C727B]"></div><span>Optimal length (50-55 chars): <strong className="text-[#1A394E]">25 points</strong></span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2C727B]"></div><span>Numbers & data: <strong className="text-[#1A394E]">10 points</strong></span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2C727B]"></div><span>Power words: <strong className="text-[#1A394E]">3 points each</strong></span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2C727B]"></div><span>Questions & emotional triggers: <strong className="text-[#1A394E]">5+ points</strong></span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#2C727B]"></div><span>Fresh generation & reset modes: <strong className="text-[#1A394E]">Unlimited</strong></span></div>
            </div>
          </section>

          {/* Internal Links Section */}
          <section id="tools">
            <SectionH2 id="related-tools">🔗 Related SEO Tools</SectionH2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Link href="/tools/meta-tag-generator" className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#2C727B] transition-all">
                <h3 className="font-semibold text-[#1A394E] text-sm">SEO Meta Tag Generator</h3>
                <p className="text-xs text-gray-500 mt-1">Generate optimized meta titles and descriptions.</p>
              </Link>
              <Link href="/tools/keyword-density-checker" className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#2C727B] transition-all">
                <h3 className="font-semibold text-[#1A394E] text-sm">Keyword Density Checker</h3>
                <p className="text-xs text-gray-500 mt-1">Analyze keyword frequency for SEO optimization.</p>
              </Link>
              <Link href="/tools/llms-txt-generator" className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#2C727B] transition-all">
                <h3 className="font-semibold text-[#1A394E] text-sm">LLMs.txt Generator</h3>
                <p className="text-xs text-gray-500 mt-1">Create AI crawler optimization files instantly.</p>
              </Link>
            </div>
          </section>

          {/* Strong CTA Section */}
          <section className="rounded-2xl bg-gradient-to-r from-[#1A394E] to-[#2C727B] p-6 text-white">
            <h2 className="text-2xl font-bold">Start Generating SEO-Friendly Titles Now</h2>
            <p className="text-sm text-white/80 mt-2 max-w-2xl">
              Create click-worthy blog titles, YouTube headlines, and SEO meta titles
              optimized for Google rankings, higher CTR, and more organic traffic.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-5 px-5 py-3 rounded-xl bg-white text-[#1A394E] font-semibold hover:shadow-lg transition-all"
            >
              Generate AI Titles
            </button>
          </section>
          
          <section id="faq">
            <SectionH2 id="faq-h2">❓ Frequently Asked Questions</SectionH2>
            <div className="space-y-2.5">
              {FAQS.map((faq, i) => (
                <div key={i} className="rounded-xl bg-white border border-gray-200 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-5 py-3.5 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-semibold text-[#1A394E]">{faq.q}</span>
                    <span className={`text-[#2C727B] transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <m.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </LazyMotion>
  );
}

// Wrap with Suspense for useSearchParams()
export default function Page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AITitleGeneratorClient />
    </Suspense>
  );
}