import { ChevronRight } from "lucide-react";

interface Props {
  suggestions: string[];
}

export default function Suggestions({ suggestions }: Props) {
  return (
    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
      <h3 className="text-sm font-semibold text-blue-700 mb-3">
        SEO Recommendations
      </h3>

      <ul className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="text-sm text-blue-700 flex items-start gap-2"
          >
            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}
