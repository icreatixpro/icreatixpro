"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";

// ─── Brand tokens ────────────────────────────────────────────────────────────
const C = {
  teal:   "#2C727B",
  navy:   "#1A394E",
  mid:    "#689A9A",
  pale:   "#AEC7C8",
  paleBg: "#EEF5F6",
  accent: "#0FA3B1",
  gold:   "#E8A838",
  danger: "#E05252",
  warn:   "#E8973A",
  ok:     "#27A96B",
} as const;

// ─── Types ───────────────────────────────────────────────────────────────────
interface Currency { symbol: string; code: string; }
interface Platform  { id: string; label: string; }
interface Benchmark { label: string; roi: string; roas: string; color: string; }
interface Status    { label: string; color: string; bg: string; rec: string; }

interface HistoryEntry {
  id:       number;
  platform: string;
  spend:    number;
  revenue:  number;
  profit:   number;
  roi:      number;
  roas:     number;
  status:   Status;
  currency: string;
  time:     string;
}

interface ChartDatum {
  name:       string;
  value:      number;
  displayVal: string;
  fill:       string;
}

interface TooltipProps {
  active?:  boolean;
  payload?: Array<{ name: string; payload: ChartDatum }>;
}

// ─── Static data ─────────────────────────────────────────────────────────────
const CURRENCIES: Currency[] = [
  { symbol: "$", code: "USD" },
  { symbol: "£", code: "GBP" },
  { symbol: "€", code: "EUR" },
  { symbol: "₹", code: "INR" },
];

const PLATFORMS: Platform[] = [
  { id: "google", label: "Google Ads" },
  { id: "meta",   label: "Meta Ads"   },
  { id: "tiktok", label: "TikTok Ads" },
  { id: "amazon", label: "Amazon PPC" },
  { id: "other",  label: "Other"      },
];

const BENCHMARKS: Benchmark[] = [
  { label: "E-commerce", roi: "15–30%", roas: "3–5x",  color: C.teal   },
  { label: "SaaS",       roi: "30–50%", roas: "5–8x",  color: C.navy   },
  { label: "Lead Gen",   roi: "10–25%", roas: "2–4x",  color: C.mid    },
  { label: "Agency",     roi: "40–60%", roas: "6–10x", color: C.accent },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "How do I calculate ROI for Google Ads?",
    a: "ROI = ((Revenue − Ad Spend) ÷ Ad Spend) × 100. Enter your spend and revenue above for an instant result with actionable recommendations.",
  },
  {
    q: "What is the difference between ROI and ROAS?",
    a: "ROI measures net profit as a percentage of spend. ROAS measures gross revenue per dollar spent — no costs deducted. Use ROI to judge true profitability; ROAS to compare campaign efficiency.",
  },
  {
    q: "What is a good ROAS for Facebook Ads?",
    a: "A 4x ROAS (400%) is the common benchmark. The right ROAS depends on your margins — high-margin products can be profitable at 2x; low-margin products may need 8x.",
  },
  {
    q: "What is a good ROI for digital ads?",
    a: "Most e-commerce advertisers target 15–30% ROI. SaaS companies often achieve 30–50%. Below 0% means you are losing money and should pause to optimise.",
  },
  {
    q: "Is this ROI calculator free?",
    a: "100% free with no sign-up required. Enter your ad spend and revenue to get ROI, ROAS, profit and an actionable recommendation instantly.",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getStatus(roi: number): Status {
  if (roi > 50)  return { label: "Exceptional 🚀", color: C.ok,     bg: "#E8FBF2", rec: "Scale aggressively. Your ROI signals strong product-market fit. Increase budget by 30–40% on top performers." };
  if (roi > 20)  return { label: "Strong 💪",       color: C.teal,   bg: "#EEF5F6", rec: "Great results! Consider increasing budget 15–20% on this ad set while monitoring frequency carefully." };
  if (roi > 0)   return { label: "Moderate ⚡",     color: C.gold,   bg: "#FEF6E8", rec: "Break-even territory. Optimise your ad creative, audience targeting or landing page before scaling." };
  if (roi > -30) return { label: "Needs Work ⚠️",  color: C.warn,   bg: "#FEF3E8", rec: "Pause underperforming ads. Test 3–5 new creatives and tighten your audience before restarting spend." };
  return                 { label: "Critical 🚨",    color: C.danger, bg: "#FEF0F0", rec: "Stop spending immediately. Reevaluate your entire funnel — landing page, offer, and targeting." };
}

// ─── Sub-components ───────────────────────────────────────────────────────────
interface InputProps {
  id:          string;
  label:       string;
  sym:         string;
  value:       string;
  onChange:    (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?:  (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
function InputField({ id, label, sym, value, onChange, onKeyDown }: InputProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor={id} style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.navy, opacity: 0.55, marginBottom: 6 }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.teal, fontWeight: 700, fontSize: 16, pointerEvents: "none" }}>
          {sym}
        </span>
        <input
          id={id}
          aria-label={label}
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          style={{
            width: "100%", padding: "14px 14px 14px 32px",
            borderRadius: 12, border: `1.5px solid ${C.pale}`,
            background: "#fff", fontSize: 18, fontWeight: 600,
            color: C.navy, outline: "none", transition: "border-color .2s, box-shadow .2s",
            boxSizing: "border-box", fontFamily: "'DM Mono', monospace",
          }}
          onFocus={e => { e.target.style.borderColor = C.teal; e.target.style.boxShadow = `0 0 0 3px ${C.pale}55`; }}
          onBlur={e  => { e.target.style.borderColor = C.pale; e.target.style.boxShadow = "none"; }}
        />
      </div>
    </div>
  );
}

interface MetricCardProps { label: string; value: string; sub?: string; accent?: string; }
function MetricCard({ label, value, sub, accent }: MetricCardProps) {
  return (
    <div style={{ background: "#fff", border: `1.5px solid ${C.pale}`, borderRadius: 14, padding: "14px 16px", flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.navy, opacity: 0.45, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: accent ?? C.navy, letterSpacing: "-0.02em", fontFamily: "'DM Mono', monospace" }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: C.mid, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function CustomTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: C.navy, borderRadius: 8, padding: "8px 12px", color: "#fff", fontSize: 13, fontWeight: 600 }}>
      {payload[0].name}: <span style={{ color: C.pale }}>{payload[0].payload.displayVal}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, marginTop: 28 }}>
      <div style={{ width: 3, height: 18, background: `linear-gradient(180deg,${C.teal},${C.accent})`, borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ fontSize: 15, fontWeight: 700, color: C.navy, letterSpacing: "-0.01em", margin: 0 }}>{children}</h2>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {FAQS.map((f, i) => (
          <div key={i} style={{ border: `1.5px solid ${open === i ? C.pale : "#E8EEEF"}`, borderRadius: 12, overflow: "hidden", transition: "border-color .2s" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", textAlign: "left", padding: "14px 16px", background: open === i ? C.paleBg : "#fff", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: C.navy, lineHeight: 1.4 }}>{f.q}</span>
              <span style={{ color: C.teal, fontSize: 18, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s", display: "inline-block" }}>+</span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: "hidden" }}>
                  <div style={{ padding: "0 16px 14px", fontSize: 13.5, color: C.navy, opacity: 0.72, lineHeight: 1.65 }}>{f.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main page component ──────────────────────────────────────────────────────
export default function ROICalculator() {
  const [spend,    setSpend]    = useState<string>("");
  const [revenue,  setRevenue]  = useState<string>("");
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[0]);
  const [platform, setPlatform] = useState<string>("google");
  const [loading,  setLoading]  = useState<boolean>(false);
  const [result,   setResult]   = useState<HistoryEntry | null>(null);
  const [history,  setHistory]  = useState<HistoryEntry[]>([]);
  const [tab,      setTab]      = useState<"calculator" | "history" | "benchmarks">("calculator");
  const [copied,   setCopied]   = useState<boolean>(false);

  const sym = currency.symbol;

  // Pre-fill from URL params (shareable links)
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      if (p.get("spend"))   setSpend(p.get("spend")!);
      if (p.get("revenue")) setRevenue(p.get("revenue")!);
    } catch (_) {}
  }, []);

  const handleInput =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/,/g, "");
      if (raw === "" || /^\d*\.?\d*$/.test(raw)) setter(raw);
    };

  const calculate = useCallback(() => {
    const cost = parseFloat(spend);
    const rev  = parseFloat(revenue);
    if (!cost || !rev || isNaN(cost) || isNaN(rev)) return;
    setLoading(true);

    setTimeout(() => {
      const profit = rev - cost;
      const roi    = (profit / cost) * 100;
      const roas   = rev / cost;
      const status = getStatus(roi);
      const platformLabel = PLATFORMS.find(p => p.id === platform)?.label ?? "Ads";

      const entry: HistoryEntry = {
        id: Date.now(), platform: platformLabel,
        spend: cost, revenue: rev, profit, roi, roas,
        status, currency: sym,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setResult(entry);
      setHistory(prev => [entry, ...prev].slice(0, 5));
      setLoading(false);
    }, 500);
  }, [spend, revenue, platform, sym]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") calculate();
  };

  const copyReport = () => {
    if (!result) return;
    const text = [
      `📊 Ad ROI Report — ${result.platform}`,
      `────────────────────`,
      `Ad Spend:  ${sym}${result.spend.toLocaleString()}`,
      `Revenue:   ${sym}${result.revenue.toLocaleString()}`,
      `Profit:    ${sym}${result.profit.toFixed(2)}`,
      `ROI:       ${result.roi.toFixed(2)}%`,
      `ROAS:      ${result.roas.toFixed(2)}x`,
      `Status:    ${result.status.label}`,
      `────────────────────`,
      `via iCreatixPRO ROI Calculator`,
    ].join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLink = () => {
    const url = `${window.location.origin}${window.location.pathname}?spend=${spend}&revenue=${revenue}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => { setSpend(""); setRevenue(""); setResult(null); };

  const chartData: ChartDatum[] = result
    ? [
        { name: "Ad Spend", value: result.spend,               displayVal: `${sym}${result.spend.toLocaleString()}`,               fill: C.pale   },
        { name: "Revenue",  value: result.revenue,              displayVal: `${sym}${result.revenue.toLocaleString()}`,              fill: C.teal   },
        { name: "Profit",   value: Math.max(result.profit, 0),  displayVal: `${sym}${result.profit.toFixed(2)}`,                    fill: result.profit >= 0 ? C.ok : C.danger },
      ]
    : [];

  const canCalc = !!spend && !!revenue && !loading;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.paleBg, minHeight: "100vh", paddingBottom: 60 }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* ── Header banner ── */}
      <div style={{ background: `linear-gradient(135deg,${C.navy} 0%,${C.teal} 100%)`, padding: "36px 24px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -20, left: -20, width: 120, height: 120, border: "1px solid rgba(255,255,255,0.06)", borderRadius: "50%" }} />

        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12, letterSpacing: "0.04em" }}>
            iCreatixPRO → Tools → <span style={{ color: C.pale }}>ROI Calculator</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: C.pale, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Free Tool
                </div>
                <div style={{ background: "rgba(39,169,107,0.2)", border: "1px solid rgba(39,169,107,0.35)", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "#6EE6A9" }}>
                  ★ 4.8 · 10k+ users
                </div>
              </div>
              <h1 style={{ fontSize: "clamp(22px,5vw,32px)", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                Free Ad ROI Calculator for Google Ads, Meta & PPC Campaigns
              </h1>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 8, lineHeight: 1.5 }}>
                Calculate ROI, ROAS & profit instantly for Google Ads, Meta Ads,
              TikTok Ads & Amazon PPC campaigns with advanced marketing performance &amp; profit analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Card ── */}
      <div
  style={{
    maxWidth: 1100,
    margin: "-32px auto 0",
    padding: "0 20px",
    position: "relative",
    zIndex: 10,
  }}
>
        <div style={{ background: "#fff", borderRadius: 20, border: `1.5px solid ${C.pale}`, overflow: "hidden", boxShadow: "0 4px 32px rgba(26,57,78,0.08)" }}>

          {/* Tab bar */}
          <div style={{ display: "flex", borderBottom: `1.5px solid ${C.paleBg}`, background: "#FAFBFB" }}>
            {(["calculator", "history", "benchmarks"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1, padding: "14px 8px", border: "none", background: "transparent",
                  fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .2s",
                  color: tab === t ? C.teal : C.navy,
                  borderBottom: tab === t ? `2px solid ${C.teal}` : "2px solid transparent",
                  letterSpacing: "0.01em",
                }}
              >
                {t === "calculator" ? "Calculator" : t === "history" ? `History${history.length ? ` (${history.length})` : ""}` : "Benchmarks"}
              </button>
            ))}
          </div>

          <div style={{ padding: 24 }}>
            <AnimatePresence mode="wait">

              {/* ──── CALCULATOR ──── */}
              {tab === "calculator" && (
                <motion.div key="calc" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>

                  {/* Platform pills */}
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.navy, opacity: 0.55, marginBottom: 8 }}>Ad Platform</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {PLATFORMS.map(p => (
                        <button
                          key={p.id}
                          onClick={() => setPlatform(p.id)}
                          style={{
                            padding: "6px 12px", borderRadius: 8,
                            border: `1.5px solid ${platform === p.id ? C.teal : C.pale}`,
                            background: platform === p.id ? C.paleBg : "#fff",
                            color: platform === p.id ? C.teal : C.navy,
                            fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all .15s",
                          }}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Currency + spend + revenue */}
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                    <div style={{ width: 80 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.navy, opacity: 0.55, marginBottom: 6 }}>Currency</div>
                      <select
                        value={currency.code}
                        onChange={e => setCurrency(CURRENCIES.find(c => c.code === e.target.value) ?? CURRENCIES[0])}
                        style={{ width: "100%", padding: "14px 8px", borderRadius: 12, border: `1.5px solid ${C.pale}`, background: "#fff", fontSize: 14, fontWeight: 600, color: C.navy, outline: "none", cursor: "pointer" }}
                      >
                        {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>)}
                      </select>
                    </div>
                    <div style={{ flex: 1 }}>
                      <InputField id="spend"   label="Ad Spend"           sym={sym} value={spend   ? Number(spend).toLocaleString()   : ""} onChange={handleInput(setSpend)}   onKeyDown={handleKeyDown} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <InputField id="revenue" label="Revenue Generated"  sym={sym} value={revenue ? Number(revenue).toLocaleString() : ""} onChange={handleInput(setRevenue)} onKeyDown={handleKeyDown} />
                    </div>
                  </div>

                  {/* Formula hint */}
                  <div style={{ fontSize: 11.5, color: C.mid, background: C.paleBg, border: `1px solid ${C.pale}`, borderRadius: 8, padding: "7px 12px", marginBottom: 18, fontFamily: "'DM Mono', monospace", letterSpacing: "0.02em" }}>
                    ROI = ((Revenue − Spend) ÷ Spend) × 100 &nbsp;·&nbsp; ROAS = Revenue ÷ Spend
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      onClick={calculate}
                      disabled={!canCalc}
                      style={{
                        flex: 1, padding: "15px 0", borderRadius: 12, border: "none",
                        background: canCalc ? `linear-gradient(135deg,${C.teal},${C.navy})` : C.pale,
                        color: "#fff", fontSize: 15, fontWeight: 700,
                        cursor: canCalc ? "pointer" : "not-allowed",
                        letterSpacing: "0.01em", transition: "all .2s",
                        boxShadow: canCalc ? `0 4px 16px ${C.teal}44` : "none",
                      }}
                    >
                      {loading ? "Calculating…" : "Calculate ROI →"}
                    </button>
                    {(spend || revenue) && (
                      <button
                        onClick={reset}
                        aria-label="Reset"
                        style={{ padding: "15px 18px", borderRadius: 12, border: `1.5px solid ${C.pale}`, background: "#fff", color: C.navy, fontSize: 18, cursor: "pointer" }}
                      >↻</button>
                    )}
                  </div>

                  {/* ── Results ── */}
                  <AnimatePresence>
                    {result && !loading && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, type: "spring", stiffness: 300, damping: 26 }}>

                        {/* Status banner */}
                        <div style={{ marginTop: 24, background: result.status.bg, border: `1.5px solid ${result.status.color}22`, borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                          <div>
                            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: result.status.color, marginBottom: 4 }}>Campaign Status</div>
                            <div style={{ fontSize: 18, fontWeight: 700, color: result.status.color }}>{result.status.label}</div>
                          </div>
                          <div style={{ fontSize: 32, fontWeight: 800, color: result.status.color, letterSpacing: "-0.03em", fontFamily: "'DM Mono', monospace" }}>
                            {result.roi >= 0 ? "+" : ""}{result.roi.toFixed(1)}%
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div style={{ margin: "10px 0 16px" }}>
                          <div style={{ height: 6, background: C.paleBg, borderRadius: 99, overflow: "hidden" }}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(Math.max(result.roi + 50, 0), 100)}%` }}
                              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                              style={{ height: "100%", borderRadius: 99, background: `linear-gradient(90deg,${C.teal},${C.accent})` }}
                            />
                          </div>
                        </div>

                        {/* Metric cards */}
                        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                          <MetricCard label="ROAS"       value={`${result.roas.toFixed(2)}x`}     sub="revenue per $1 spent"   accent={C.teal} />
                          <MetricCard label="Net Profit"  value={`${sym}${Math.abs(result.profit).toLocaleString("en-US",{ minimumFractionDigits:2,maximumFractionDigits:2 })}`} sub={result.profit >= 0 ? "earned after spend" : "net loss"} accent={result.profit >= 0 ? C.ok : C.danger} />
                          <MetricCard label="Platform"    value={result.platform}                   sub={currency.code}          accent={C.navy} />
                        </div>

                        {/* Bar chart */}
                        <div style={{ background: C.paleBg, borderRadius: 14, padding: "16px 8px 8px", marginBottom: 12 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.navy, opacity: 0.45, marginLeft: 8, marginBottom: 8 }}>Breakdown</div>
                          <ResponsiveContainer width="100%" height={140}>
                            <BarChart data={chartData} barCategoryGap="30%" margin={{ top: 0, right: 8, left: -10, bottom: 0 }}>
                              <XAxis dataKey="name" tick={{ fontSize: 11, fill: C.navy, fontFamily: "'DM Sans'" }} axisLine={false} tickLine={false} />
                              <YAxis tick={{ fontSize: 10, fill: C.navy, fontFamily: "'DM Mono'" }} axisLine={false} tickLine={false} tickFormatter={v => `${sym}${v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}`} />
                              <Tooltip content={<CustomTooltip />} cursor={{ fill: `${C.pale}33` }} />
                              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                {chartData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>

                        {/* Recommendation */}
                        <div style={{ background: "#FFFBF2", border: "1.5px solid #F5E5B0", borderRadius: 12, padding: "12px 16px", marginBottom: 14 }}>
                          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.gold, marginBottom: 4 }}>💡 Recommendation</div>
                          <div style={{ fontSize: 13.5, color: C.navy, lineHeight: 1.6, opacity: 0.85 }}>{result.status.rec}</div>
                        </div>

                        {/* Copy / Share */}
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={copyReport} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${C.pale}`, background: "#fff", color: C.navy, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                            {copied ? "✓ Copied!" : "📋 Copy Report"}
                          </button>
                          <button onClick={shareLink} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1.5px solid ${C.pale}`, background: "#fff", color: C.navy, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                            🔗 Share Link
                          </button>
                        </div>

                        {/* CTA 1 — post result */}
                        <div style={{ marginTop: 18, background: `linear-gradient(135deg,${C.navy},${C.teal})`, borderRadius: 14, padding: "18px 20px", textAlign: "center" }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                            {result.roi < 20 ? "📉 Struggling with ad ROI?" : "📈 Want to scale faster?"}
                          </div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
                            Get a free campaign audit from our certified ad experts.
                          </div>
                          <button style={{ padding: "9px 22px", borderRadius: 9, background: "#fff", color: C.navy, fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer" }}>
                            Book Free Audit →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Empty state */}
                  {!result && !loading && (
                    <div style={{ marginTop: 24, textAlign: "center", padding: "28px 0", color: C.mid, fontSize: 13 }}>
                      <div style={{ fontSize: 28, marginBottom: 8 }}>📊</div>
                      Enter your ad spend and revenue above to see your ROI analysis
                    </div>
                  )}
                </motion.div>
              )}

              {/* ──── HISTORY ──── */}
              {tab === "history" && (
                <motion.div key="hist" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <SectionTitle>Calculation History</SectionTitle>
                  {history.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "40px 0", color: C.mid, fontSize: 13 }}>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>🕐</div>
                      No calculations yet. Run the calculator to see history here.
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {history.map((h, i) => (
                        <motion.div key={h.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                          style={{ background: "#fff", border: `1.5px solid ${C.pale}`, borderRadius: 14, padding: "14px 16px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                            <div>
                              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{h.platform}</div>
                              <div style={{ fontSize: 11, color: C.mid }}>{h.time}</div>
                            </div>
                            <div style={{ fontSize: 18, fontWeight: 800, color: h.status.color, fontFamily: "'DM Mono', monospace" }}>
                              {h.roi >= 0 ? "+" : ""}{h.roi.toFixed(1)}%
                            </div>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                            {[
                              { l: "Spend",   v: `${h.currency}${h.spend.toLocaleString()}` },
                              { l: "Revenue", v: `${h.currency}${h.revenue.toLocaleString()}` },
                              { l: "ROAS",    v: `${h.roas.toFixed(2)}x` },
                            ].map(m => (
                              <div key={m.l} style={{ background: C.paleBg, borderRadius: 8, padding: "8px 10px" }}>
                                <div style={{ fontSize: 10, color: C.mid, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>{m.l}</div>
                                <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginTop: 2, fontFamily: "'DM Mono', monospace" }}>{m.v}</div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* ──── BENCHMARKS ──── */}
              {tab === "benchmarks" && (
                <motion.div key="bench" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <SectionTitle>Industry ROI Benchmarks 2025</SectionTitle>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                    {BENCHMARKS.map((b, i) => (
                      <motion.div key={b.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                        style={{ background: "#fff", border: `1.5px solid ${C.pale}`, borderRadius: 14, padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{ width: 4, height: 40, background: b.color, borderRadius: 2 }} />
                          <div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{b.label}</div>
                            <div style={{ fontSize: 12, color: C.mid, marginTop: 2 }}>Typical range</div>
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: b.color }}>{b.roi} ROI</div>
                          <div style={{ fontSize: 12, color: C.mid, marginTop: 2 }}>{b.roas} ROAS</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div style={{ background: C.paleBg, borderRadius: 14, padding: "16px 18px" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 8 }}>📌 Pro Tips</div>
                    {[
                      "Track ROI by campaign, ad set AND creative separately",
                      "Calculate blended ROI across all channels monthly",
                      "Factor in customer lifetime value (LTV), not just first-purchase revenue",
                      "A/B test creatives before scaling — one winning creative can 3x your ROI",
                    ].map((tip, i) => (
                      <div key={i} style={{ fontSize: 12.5, color: C.navy, opacity: 0.75, lineHeight: 1.6, paddingLeft: 14, position: "relative", marginBottom: 4 }}>
                        <span style={{ position: "absolute", left: 0, color: C.teal }}>·</span>{tip}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

              {/* ── FAQ card ── */}
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          border: `1.5px solid ${C.pale}`,
          padding: 24,
          marginTop: 16,
          boxShadow: "0 2px 16px rgba(26,57,78,0.05)",
        }}
      >
        <FAQ />

        <div
          style={{
            marginTop: 24,
            borderTop: `1.5px solid ${C.paleBg}`,
            paddingTop: 20,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: C.navy,
              marginBottom: 6,
            }}
          >
            Want Better ROI From Your Ad Campaigns?
          </div>
<div
  style={{
    marginTop: 18,
    fontSize: 13,
    lineHeight: 1.8,
    color: C.navy,
    opacity: 0.78,
  }}
>
  Our free ROI calculator helps marketers, agencies, eCommerce brands and
  advertisers measure advertising profitability across Google Ads, Meta Ads,
  Facebook Ads, TikTok Ads and Amazon PPC campaigns. Instantly calculate ROI,
  ROAS, profit margin and ad performance metrics to optimise your paid
  marketing strategy and improve campaign profitability.

  <div style={{ marginTop: 14 }}>
    Learn more about{" "}
    <a
      href="https://icreatixpro.com/"
      style={{
        color: C.teal,
        fontWeight: 600,
        textDecoration: "none",
      }}
    >
      iCreatixPRO
    </a>{" "}
    and explore more{" "}
    <a
      href="https://icreatixpro.com/tools"
      style={{
        color: C.teal,
        fontWeight: 600,
        textDecoration: "none",
      }}
    >
      free SEO & marketing tools
    </a>{" "}
    or discover our{" "}
    <a
      href="https://icreatixpro.com/services"
      style={{
        color: C.teal,
        fontWeight: 600,
        textDecoration: "none",
      }}
    >
      digital marketing services
    </a>
    .
  </div>
</div>
          <div
            style={{
              fontSize: 13,
              color: C.mid,
              marginBottom: 14,
              lineHeight: 1.6,
            }}
          >
            Improve Google Ads, Meta Ads, TikTok Ads & Amazon PPC performance with a
            free campaign growth audit from iCreatixPRO.
          </div>

          <a
            href="https://icreatixpro.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 28px",
              borderRadius: 12,
              background: `linear-gradient(135deg,${C.teal},${C.navy})`,
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: `0 6px 18px ${C.teal}44`,
            }}
          >
            Get Free PPC Audit →
          </a>
        </div>
      </div>

        <div style={{ textAlign: "center", padding: "20px 0", fontSize: 11.5, color: C.mid }}>
          © iCreatixPRO · Free Ad ROI Calculator · No sign-up required
        </div>
      </div>
    </div>
  );
}