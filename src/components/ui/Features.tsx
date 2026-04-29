// components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Rocket, 
  TrendingUp, 
  Target, 
  BarChart,
  Clock,
  Users,
  Globe,
  Smartphone,
  Code,
  Palette
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized websites that load in under 2 seconds for better user experience.",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Enterprise-grade security with SSL, firewalls, and regular backups.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description: "Strategies that grow with your business, from startup to enterprise.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "All decisions backed by analytics and real-time performance data.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach exactly the right audience with advanced targeting options.",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: BarChart,
    title: "Transparent Reporting",
    description: "Detailed monthly reports with clear ROI metrics and insights.",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E] mb-4">
              Features That Set Us Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2C727B] to-[#1A394E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A394E] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}