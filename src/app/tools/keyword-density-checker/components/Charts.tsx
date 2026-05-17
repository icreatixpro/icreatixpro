"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

interface Props {
  data: any[];
}

export default function Charts({ data }: Props) {
  const topFive = data.slice(0, 5);

  const COLORS = [
    "#2C727B",
    "#689A9A",
    "#E6A157",
    "#2E7D64",
    "#1A394E"
  ];

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="bg-white/80 p-4 rounded-2xl border border-white/50 h-[320px]">
        <h3 className="text-sm font-semibold mb-4 text-[#1A394E]">
          Keyword Density
        </h3>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topFive}>
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="density" fill="#2C727B" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white/80 p-4 rounded-2xl border border-white/50 h-[320px]">
        <h3 className="text-sm font-semibold mb-4 text-[#1A394E]">
          Top Keywords
        </h3>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={topFive}
              dataKey="count"
              nameKey="word"
              outerRadius={90}
              label
            >
              {topFive.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
