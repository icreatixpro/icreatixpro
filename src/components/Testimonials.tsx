"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Award, Sparkles, TrendingUp, Users, Clock, Play, Pause, MapPin, CheckCircle2, Zap, Crown, Shield, Briefcase } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "iCreatixPRO transformed our SEO strategy completely. Within 6 months, we saw a 300% increase in organic traffic. Their AI-powered approach is truly game-changing. The team's dedication and expertise exceeded all expectations.",
    rating: 5,
    avatar: "SJ",
    company: "TechStart Inc.",
    metric: "300% Traffic Increase",
    metricIcon: TrendingUp,
    location: "San Francisco, CA",
    projectType: "SEO Strategy",
    result: "Top 3 rankings for 50+ keywords"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The team's AI-powered approach is revolutionary. Best investment we've made for our digital presence. Our ROI has never been better. The transparency and regular reporting keep us aligned with our goals.",
    rating: 5,
    avatar: "MC",
    company: "Digital Dynamics",
    metric: "ROI +245%",
    metricIcon: TrendingUp,
    location: "New York, NY",
    projectType: "PPC Management",
    result: "Reduced CPC by 40%"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Founder, EcoBrands",
    content: "Finally, an SEO agency that delivers real results. Our leads have tripled since working with them. The transparency and reporting are exceptional. They feel like a true partner in our growth.",
    rating: 5,
    avatar: "ED",
    company: "EcoBrands",
    metric: "Leads 3x",
    metricIcon: Users,
    location: "Austin, TX",
    projectType: "Content Marketing",
    result: "Featured in 20+ publications"
  },
  {
    id: 4,
    name: "David Williams",
    role: "VP of Growth",
    content: "Working with iCreatixPRO has been transformative. Their data-driven approach and innovative strategies helped us dominate our niche. The team is responsive, strategic, and truly cares about our success.",
    rating: 5,
    avatar: "DW",
    company: "GrowthLabs",
    metric: "Market Share +65%",
    metricIcon: Shield,
    location: "Chicago, IL",
    projectType: "Full SEO Suite",
    result: "DOMINATED SERP features"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
      }, 6000);
      
      progressRef.current = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 60);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isAutoPlaying, isHovering]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[activeIndex];
  const MetricIcon = currentTestimonial.metricIcon;

  return (
    <section className="py-28 px-4 relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A394E] via-[#1A394E] to-[#2C727B]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-40 w-[800px] h-[800px] bg-[#2C727B]/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-[800px] h-[800px] bg-[#1A394E]/50 rounded-full blur-[150px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2C727B]/10 rounded-full blur-[120px] animate-pulse delay-2000" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M40 40L0 0h80L40 40zm0 40L0 40h80L40 80z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header with Animation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg animate-in fade-in slide-in-from-top-6 duration-700">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-sm uppercase tracking-wider text-white font-semibold">
              Trusted by Industry Leaders
            </span>
            <Zap className="w-4 h-4 text-[#2C727B]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            What Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#2C727B] via-white to-[#2C727B] bg-clip-text text-transparent animate-gradient">
                Clients Say
              </span>
              <svg className="absolute -bottom-3 left-0 w-full" height="6" viewBox="0 0 300 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3 L300 3" stroke="url(#gradient)" strokeWidth="4" strokeDasharray="8 8"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2C727B"/>
                    <stop offset="50%" stopColor="#fff"/>
                    <stop offset="100%" stopColor="#2C727B"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-white/80 text-xl max-w-2xl mx-auto animate-in fade-in duration-700 delay-200">
            Real success stories from businesses that transformed their digital presence
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-12 mt-10">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-[#2C727B] group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-white/60 text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-[#2C727B] group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-white/60 text-sm">Client Retention</div>
            </div>
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-[#2C727B] group-hover:scale-110 transition-transform duration-300">4.9</div>
              <div className="text-white/60 text-sm">Rating (200+ Reviews)</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial Card - Premium Design */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2C727B] via-white/20 to-[#1A394E] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700" />
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2C727B] via-[#2C727B]/50 to-transparent" />
            
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              
              {/* Left Side - Testimonial Content */}
              <div className="space-y-6">
                {/* Quote Mark */}
                <div className="relative">
                  <Quote className="w-16 h-16 text-[#2C727B]/30 absolute -top-4 -left-4" />
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-in zoom-in duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                    <p className="text-white text-xl md:text-2xl leading-relaxed relative z-10">
                      "{currentTestimonial.content}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-full blur-md opacity-50" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {currentTestimonial.avatar}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">{currentTestimonial.name}</h4>
                    <p className="text-[#2C727B] text-sm font-medium">{currentTestimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1 text-white/50 text-xs">
                      <MapPin className="w-3 h-3" />
                      {currentTestimonial.location}
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs">
                    <CheckCircle2 className="w-3 h-3 text-[#2C727B]" />
                    Verified Client
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs">
                    <Briefcase className="w-3 h-3 text-[#2C727B]" />
                    {currentTestimonial.projectType}
                  </div>
                </div>
              </div>

              {/* Right Side - Results & Metrics */}
              <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-6 border border-white/10">
                <h5 className="text-white/70 text-sm uppercase tracking-wider mb-4">Key Achievement</h5>
                
                {/* Main Metric */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#2C727B]/20 to-[#1A394E]/20 border border-[#2C727B]/30 mb-4">
                    <MetricIcon className="w-10 h-10 text-[#2C727B]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {currentTestimonial.metric}
                  </div>
                  <div className="text-white/60 text-sm">from our partnership</div>
                </div>

                {/* Result Card */}
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Result</span>
                  </div>
                  <p className="text-white font-semibold">{currentTestimonial.result}</p>
                </div>

                {/* Company Info */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/50 text-xs">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>

            {/* Bottom Gradient Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2C727B]/50 to-transparent" />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="group w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:translate-x-[-3px] transition-transform" />
            </button>

            {/* Premium Dots Navigation */}
            <div className="flex gap-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(idx);
                    setProgress(0);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className="group relative"
                >
                  <div className={`transition-all duration-500 rounded-full ${
                    idx === activeIndex 
                      ? "w-10 h-2.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] shadow-lg" 
                      : "w-2 h-2 bg-white/40 group-hover:bg-white/60"
                  }`} />
                  {idx === activeIndex && isAutoPlaying && !isHovering && (
                    <div 
                      className="absolute -top-4 left-0 h-0.5 bg-gradient-to-r from-[#2C727B] to-[#1A394E] rounded-full"
                      style={{ width: `${progress}%`, transition: 'width 60ms linear' }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-[3px] transition-transform" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 text-sm hover:text-white transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3 h-3" />
                  Pause Auto-play
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  Resume Auto-play
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
}