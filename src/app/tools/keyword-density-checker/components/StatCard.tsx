import { motion } from "framer-motion";

export default function StatCard({
  icon: Icon,
  label,
  value,
  color,
  delay = 0
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="rounded-xl p-4 bg-white/80 border border-white/50 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-[#1A394E]/60 uppercase tracking-wide">
            {label}
          </p>
          <p className="text-2xl font-bold text-[#1A394E]">
            {value}
          </p>
        </div>

        <div
          className="p-2 rounded-lg"
          style={{ background: `${color}15` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>
    </motion.div>
  );
}
