"use client";

import { useState, useEffect, useRef, useMemo, memo } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  Users,
  Play,
  Pause,
  MapPin,
  CheckCircle2,
  Zap,
  Crown,
  Shield,
  Briefcase,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "iCreatixPRO transformed our SEO strategy completely. Within 6 months, we saw a massive increase in organic traffic and conversions.",
    rating: 5,
    avatar: "SJ",
    company: "TechStart Inc.",
    metric: "300% Traffic Growth",
    metricIcon: TrendingUp,
    location: "San Francisco, CA",
    projectType: "SEO Strategy",
    result: "Top rankings for competitive keywords",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    content:
      "Their AI-driven SEO system helped us scale faster while lowering acquisition costs significantly.",
    rating: 5,
    avatar: "MC",
    company: "Digital Dynamics",
    metric: "245% ROI",
    metricIcon: TrendingUp,
    location: "New York, NY",
    projectType: "PPC + SEO",
    result: "40% lower CPC",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Founder, EcoBrands",
    content:
      "Finally an agency that actually delivers measurable business growth instead of vanity metrics.",
    rating: 5,
    avatar: "ED",
    company: "EcoBrands",
    metric: "3X Leads",
    metricIcon: Users,
    location: "Austin, TX",
    projectType: "Content Marketing",
    result: "Featured in major publications",
  },
  {
    id: 4,
    name: "David Williams",
    role: "VP of Growth",
    content:
      "Their strategic execution and technical SEO expertise completely changed our organic visibility.",
    rating: 5,
    avatar: "DW",
    company: "GrowthLabs",
    metric: "+65% Market Share",
    metricIcon: Shield,
    location: "Chicago, IL",
    projectType: "Technical SEO",
    result: "Dominated SERP features",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slider
  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, isHovering]);

  // Navigation
  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIndex];
  const MetricIcon = current.metricIcon;

  // ✅ FIXED: deterministic particles (no hydration issue)
  const particles = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        top: `${10 + i * 14}%`,
        left: `${15 + i * 12}%`,
        animationDelay: `${i * 0.7}s`,
      })),
    []
  );

  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#1A394E] to-[#2C727B]" />

      {/* Orbs */}
      <div className="absolute top-0 -left-20 w-[350px] h-[350px] bg-[#2C727B]/20 rounded-full blur-[80px] animate-float-slow" />
      <div className="absolute bottom-0 -right-20 w-[350px] h-[350px] bg-[#1A394E]/30 rounded-full blur-[80px] animate-float-slow" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20 animate-float-slow"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-5">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold uppercase text-white">
              Trusted by Businesses
            </span>
            <Zap className="w-4 h-4 text-[#2C727B]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-white bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
            Real business growth stories powered by SEO, AI, and strategy.
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/60">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white/60">Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm text-white/60">Rating</div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Left */}
              <div>
                <Quote className="w-12 h-12 text-[#2C727B]/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-white text-lg md:text-2xl">
                  "{current.content}"
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold">
                    {current.avatar}
                  </div>

                  <div>
                    <h4 className="text-white font-bold">{current.name}</h4>
                    <p className="text-[#2C727B] text-sm">{current.role}</p>
                    <p className="text-white/50 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {current.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h5 className="text-white/60 text-xs uppercase mb-5">
                  Key Achievement
                </h5>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#2C727B]/10 border border-[#2C727B]/20 flex items-center justify-center mb-5">
                    <MetricIcon className="w-10 h-10 text-[#2C727B]" />
                  </div>

                  <div className="text-4xl font-bold text-white">
                    {current.metric}
                  </div>

                  <p className="text-white/60 text-sm mt-2">
                    achieved with our strategies
                  </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/5 p-4 border border-white/10">
                  <Award className="w-4 h-4 text-yellow-400 mb-2" />
                  <p className="text-white font-medium">
                    {current.result}
                  </p>
                </div>

                <p className="text-white/40 text-xs mt-5">
                  {current.company}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-4 py-2 rounded-full bg-white/5 text-white"
            >
              {isAutoPlaying ? "Pause" : "Play"}
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);