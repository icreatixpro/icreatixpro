"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef, memo } from "react";
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

  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-6">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#1A394E] to-[#2C727B]" />

      {/* Reduced Blur Orbs */}
      <div className="absolute top-0 -left-20 w-[350px] h-[350px] bg-[#2C727B]/20 rounded-full blur-[80px] animate-float-slow" />

      <div className="absolute bottom-0 -right-20 w-[350px] h-[350px] bg-[#1A394E]/30 rounded-full blur-[80px] animate-float-slow" />

      {/* Reduced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20 animate-float-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-5">
            <Crown className="w-4 h-4 text-yellow-400" />

            <span className="text-sm font-semibold tracking-wide uppercase text-white">
              Trusted by Businesses
            </span>

            <Zap className="w-4 h-4 text-[#2C727B]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#2C727B] to-white bg-clip-text text-transparent animate-gradient">
              Clients Say
            </span>
          </h2>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-lg">
            Real business growth stories powered by SEO, AI, and strategic
            execution.
          </p>

          {/* Stats */}
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
              <div className="text-sm text-white/60">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Left Side */}
              <div>
                <Quote className="w-12 h-12 text-[#2C727B]/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-white text-lg md:text-2xl leading-relaxed">
                  "{current.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold">
                    {current.avatar}
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {current.name}
                    </h4>

                    <p className="text-[#2C727B] text-sm">
                      {current.role}
                    </p>

                    <div className="flex items-center gap-1 mt-1 text-white/50 text-xs">
                      <MapPin className="w-3 h-3" />
                      {current.location}
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs">
                    <CheckCircle2 className="w-3 h-3 text-[#2C727B]" />
                    Verified Client
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs">
                    <Briefcase className="w-3 h-3 text-[#2C727B]" />
                    {current.projectType}
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h5 className="text-white/60 text-xs uppercase tracking-wider mb-5">
                  Key Achievement
                </h5>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#2C727B]/10 border border-[#2C727B]/20 flex items-center justify-center mb-5">
                    <MetricIcon className="w-10 h-10 text-[#2C727B]" />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {current.metric}
                  </div>

                  <p className="text-white/60 text-sm mt-2">
                    achieved with our strategies
                  </p>
                </div>

                {/* Result */}
                <div className="mt-8 rounded-xl bg-white/5 p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-yellow-400" />

                    <span className="text-xs uppercase tracking-wide text-white/70">
                      Result
                    </span>
                  </div>

                  <p className="text-white font-medium">
                    {current.result}
                  </p>
                </div>

                <div className="mt-5 pt-5 border-t border-white/10">
                  <p className="text-white/40 text-xs">
                    {current.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? "w-8 h-2 bg-[#2C727B]"
                      : "w-2 h-2 bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Auto Play Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white transition"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Resume
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);