import { KeywordResult } from "../utils/analyzer";

interface Props {
  keywords: KeywordResult[];
}

export default function KeywordTable({ keywords }: Props) {
  return (
    <div className="bg-white/80 rounded-2xl border border-white/50 overflow-hidden">
      <div className="overflow-x-auto max-h-[450px] overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-[#1A394E]">
            <tr>
              <th className="p-3 text-left text-white text-xs">#</th>
              <th className="p-3 text-left text-white text-xs">Keyword</th>
              <th className="p-3 text-left text-white text-xs">Count</th>
              <th className="p-3 text-left text-white text-xs">Density</th>
            </tr>
          </thead>

          <tbody>
            {keywords.map((item, index) => (
              <tr
                key={item.word}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-3 text-xs text-gray-400">
                  {index + 1}
                </td>

                <td className="p-3 font-medium text-[#1A394E] text-sm">
                  {item.word}
                </td>

                <td className="p-3 text-sm text-[#1A394E]/70">
                  {item.count}
                </td>

                <td className="p-3 text-sm">
                  {item.density}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
