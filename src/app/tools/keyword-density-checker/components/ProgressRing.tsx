interface Props {
  value: number;
  size?: number;
  strokeWidth?: number;
}

export default function ProgressRing({
  value,
  size = 80,
  strokeWidth = 6
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const getColor = () => {
    if (value >= 80) return "#10B981";
    if (value >= 60) return "#F59E0B";
    return "#EF4444";
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          strokeWidth={strokeWidth}
          stroke="#E5E7EB"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          strokeWidth={strokeWidth}
          stroke={getColor()}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute text-lg font-bold text-[#1A394E]">
        {value}
      </div>
    </div>
  );
}
