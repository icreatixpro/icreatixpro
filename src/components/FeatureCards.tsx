// src/components/FeatureCards.tsx
import { TrendingUp, Mic, Globe } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "AI SEO",
    desc: "Rank with predictive AI systems",
    stat: "+320% Traffic",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Mic,
    title: "AEO",
    desc: "Optimize for AI-generated answers",
    stat: "90% Snippets",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Globe,
    title: "GEO",
    desc: "Grow visibility across AI search engines",
    stat: "50K+ AI Impressions",
    color: "from-purple-500 to-pink-500",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-16">

      {features.map((f, i) => {
        const Icon = f.icon;

        return (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/30 border border-white/30 transition-transform"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}
            >
              <Icon className="text-white w-6 h-6" />
            </div>

            <h3 className="font-semibold text-[#1A394E] text-lg">
              {f.title}
            </h3>

            <p className="text-gray-600 text-sm">{f.desc}</p>

            <span className="text-xs text-[#2C727B] mt-2 block">
              {f.stat}
            </span>
          </div>
        );
      })}

    </div>
  );
}