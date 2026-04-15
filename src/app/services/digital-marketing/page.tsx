// app/services/digital-marketing/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import {
  TrendingUp,
  Zap,
  Target,
  Users,
  BarChart3,
  Globe,
  Mail,
  Search,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Award,
  Shield,
  Rocket,
  Lightbulb,
  PieChart,
  LineChart,
  Smartphone,
  Monitor,
  Tablet,
  Code,
  Palette,
  Megaphone,
  FileText,
  Calendar,
  Download,
  Play,
  ChevronRight,
  Sparkles,
  Heart,
  ThumbsUp
} from "lucide-react";

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const scaleOnHover = {
  whileHover: { scale: 1.05, y: -5 },
  transition: { duration: 0.3 }
};

// ============================================
// COMPONENTS
// ============================================

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#2C727B]/0 to-[#2C727B]/0 group-hover:from-[#2C727B]/5 group-hover:to-[#1A394E]/5 rounded-2xl transition-all duration-300" />
    
    <div className="relative">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-[#1A394E] mb-2">{title}</h3>
      <p className="text-[#1A394E]/60 text-sm leading-relaxed mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-sm text-[#1A394E]/70">
            <CheckCircle className="w-4 h-4 text-[#2C727B] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    viewport={{ once: true }}
    className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50"
  >
    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#2C727B]/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-[#2C727B]" />
    </div>
    <div className="text-3xl font-bold text-[#1A394E]">{value}</div>
    <div className="text-sm text-[#1A394E]/60 mt-1">{label}</div>
  </motion.div>
);

const ProcessStep = ({ number, title, description, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        {number < 5 && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-[#2C727B]/30 hidden md:block" />
        )}
      </div>
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-5 h-5 text-[#2C727B]" />
          <h3 className="text-lg font-semibold text-[#1A394E]">{title}</h3>
        </div>
        <p className="text-[#1A394E]/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, content, rating }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-sm"
  >
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
    <p className="text-[#1A394E]/70 text-sm leading-relaxed mb-4">"{content}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center text-white font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-semibold text-[#1A394E] text-sm">{name}</div>
        <div className="text-xs text-[#1A394E]/50">{role}</div>
      </div>
    </div>
  </motion.div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function DigitalMarketingPage() {
  const [stats, setStats] = useState({
    clients: 0,
    campaigns: 0,
    growth: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        clients: 500,
        campaigns: 2500,
        growth: 300,
        satisfaction: 99
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Digital Marketing Agency | SEO, Social Media & PPC | iCreatixPRO</title>
        <meta
          name="description"
          content="Grow your business with our comprehensive digital marketing services. SEO, social media marketing, PPC, email marketing, and content strategy. Get a free consultation today!"
        />
        <meta name="keywords" content="digital marketing, SEO, social media marketing, PPC, email marketing, content marketing" />
      </Head>

      <main className="min-h-screen bg-[#F8FAFA]">
        
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2C727B]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1A394E]/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-6">
                <Sparkles className="w-3 h-3" />
                Award-Winning Digital Marketing Agency
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A394E] mb-6">
                Grow Your Business With
                <span className="block bg-gradient-to-r from-[#2C727B] to-[#1A394E] bg-clip-text text-transparent">
                  Data-Driven Marketing
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#1A394E]/60 max-w-2xl mx-auto mb-8">
                We help businesses scale with proven digital marketing strategies that drive real results. 
                From SEO to social media, we've got you covered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 text-[#1A394E] font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch Case Study
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* STATS SECTION - FIXED SYNTAX */}
        {/* ============================================ */}
        <section className="py-16 bg-white/40 backdrop-blur-sm border-y border-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard value={stats.clients} label="Happy Clients" icon={Users} delay={0.1} />
              <StatCard value={stats.campaigns} label="Campaigns Launched" icon={Rocket} delay={0.2} />
              <StatCard value={`${stats.growth}%`} label="Avg. Growth" icon={TrendingUp} delay={0.3} />
              <StatCard value={`${stats.satisfaction}%`} label="Client Satisfaction" icon={ThumbsUp} delay={0.4} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SERVICES SECTION */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Comprehensive Digital Marketing Services
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                We offer end-to-end digital marketing solutions tailored to your business goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={Search}
                title="SEO Optimization"
                description="Boost your organic search rankings and drive qualified traffic to your website."
                features={["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"]}
                delay={0.1}
              />
              <ServiceCard
                icon={Facebook}
                title="Social Media Marketing"
                description="Build brand awareness and engage with your audience on major platforms."
                features={["Content Strategy", "Community Management", "Paid Social Ads", "Analytics", "Influencer Marketing"]}
                delay={0.2}
              />
              <ServiceCard
                icon={TrendingUp}
                title="PPC Advertising"
                description="Drive immediate traffic and conversions with targeted paid campaigns."
                features={["Google Ads", "Bing Ads", "Retargeting", "Display Ads", "Shopping Ads"]}
                delay={0.3}
              />
              <ServiceCard
                icon={Mail}
                title="Email Marketing"
                description="Nurture leads and convert customers with personalized email campaigns."
                features={["Newsletters", "Automation", "Segmentation", "A/B Testing", "Analytics"]}
                delay={0.4}
              />
              <ServiceCard
                icon={FileText}
                title="Content Marketing"
                description="Create valuable content that attracts, engages, and converts your audience."
                features={["Blog Posts", "White Papers", "Case Studies", "Infographics", "Video Content"]}
                delay={0.5}
              />
              <ServiceCard
                icon={PieChart}
                title="Analytics & Reporting"
                description="Make data-driven decisions with comprehensive analytics and reporting."
                features={["Custom Dashboards", "ROI Tracking", "Conversion Analysis", "Monthly Reports", "KPI Monitoring"]}
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* HOW IT WORKS SECTION */}
        {/* ============================================ */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                How We Drive Results
              </h2>
              <p className="text-[#1A394E]/60 max-w-2xl mx-auto">
                Our proven 5-step process ensures consistent growth and measurable success
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <ProcessStep number={1} title="Discovery & Strategy" description="We analyze your business, competitors, and target audience to create a customized marketing strategy." icon={Target} delay={0.1} />
              <ProcessStep number={2} title="Implementation" description="Our team executes the strategy across all channels with precision and attention to detail." icon={Rocket} delay={0.2} />
              <ProcessStep number={3} title="Monitoring & Optimization" description="We continuously monitor performance and optimize campaigns for maximum ROI." icon={LineChart} delay={0.3} />
              <ProcessStep number={4} title="Reporting & Insights" description="Receive detailed monthly reports with actionable insights and recommendations." icon={BarChart3} delay={0.4} />
              <ProcessStep number={5} title="Scaling & Growth" description="As we prove results, we scale successful campaigns to drive exponential growth." icon={TrendingUp} delay={0.5} />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHY CHOOSE US SECTION */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">
                  Why Choose iCreatixPRO?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Award, title: "Proven Track Record", desc: "500+ successful campaigns delivered" },
                    { icon: Users, title: "Expert Team", desc: "Certified professionals with 10+ years experience" },
                    { icon: Shield, title: "Data-Driven Approach", desc: "All decisions backed by analytics" },
                    { icon: Heart, title: "Dedicated Support", desc: "24/7 client support and regular updates" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#2C727B]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#2C727B]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A394E]">{item.title}</h3>
                        <p className="text-sm text-[#1A394E]/60">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#2C727B]/10 to-[#1A394E]/10 rounded-3xl p-8 border border-white/50">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                      <Star className="w-3 h-3 fill-teal-700" />
                      Client Testimonials
                    </div>
                  </div>
                  <div className="space-y-4">
                    <TestimonialCard
                      name="Sarah Johnson"
                      role="CEO, TechStart"
                      content="iCreatixPRO transformed our digital presence. Our organic traffic increased by 200% in just 6 months!"
                      rating={5}
                    />
                    <TestimonialCard
                      name="Michael Chen"
                      role="Marketing Director"
                      content="The team's expertise in PPC helped us reduce cost per acquisition by 40% while doubling conversions."
                      rating={5}
                    />
                    <TestimonialCard
                      name="Emily Rodriguez"
                      role="Small Business Owner"
                      content="Finally found a digital marketing agency that actually delivers results. Highly recommend!"
                      rating={5}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* TECHNOLOGIES WE USE */}
        {/* ============================================ */}
        <section className="py-16 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A394E] mb-2">
                Enterprise-Grade Tools & Technologies
              </h2>
              <p className="text-[#1A394E]/60">We use industry-leading platforms to deliver exceptional results</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                "Google Analytics", "SEMrush", "Ahrefs", "HubSpot", "Salesforce",
                "Hootsuite", "Mailchimp", "Hotjar", "Optimizely", "WordPress"
              ].map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 text-[#1A394E]/70 text-sm font-medium hover:shadow-md transition-all"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FAQ SECTION */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#1A394E]/60">
                Everything you need to know about our digital marketing services
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "How long does it take to see results?",
                  a: "While some results can be seen within the first month, significant SEO improvements typically take 3-6 months. PPC campaigns can drive immediate traffic within days."
                },
                {
                  q: "Do you offer custom packages?",
                  a: "Yes! We create customized marketing packages based on your specific business goals, budget, and industry requirements."
                },
                {
                  q: "How do you measure success?",
                  a: "We track key metrics including organic traffic, conversion rates, ROI, lead generation, and revenue growth. You'll receive detailed monthly reports."
                },
                {
                  q: "What industries do you specialize in?",
                  a: "We work with businesses across e-commerce, healthcare, real estate, technology, hospitality, and professional services industries."
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, our contracts are flexible. We offer month-to-month agreements with no long-term commitments required."
                }
              ].map((item, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/50 backdrop-blur-sm rounded-xl border border-white/50 overflow-hidden"
                >
                  <summary className="cursor-pointer p-5 font-semibold text-[#1A394E] flex items-center justify-between list-none">
                    {item.q}
                    <ChevronRight className="w-5 h-5 text-[#2C727B] transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-[#1A394E]/60 text-sm leading-relaxed">
                    {item.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA SECTION */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-r from-[#2C727B] to-[#1A394E]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our digital marketing strategies can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white text-[#1A394E] font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold hover:bg-white/30 transition-all"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}