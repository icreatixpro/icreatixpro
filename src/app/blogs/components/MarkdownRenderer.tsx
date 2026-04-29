import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer({ content }: any) {
  return (
    <ReactMarkdown
      components={{
        blockquote({ children }) {
          return (
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6 rounded">
              {children}
            </div>
          );
        },

        table({ children }) {
          return (
            <div className="overflow-x-auto my-8">
              <table className="table-auto w-full border">
                {children}
              </table>
            </div>
          );
        },

        th({ children }) {
          return (
            <th className="border px-4 py-2 bg-gray-100 text-left">
              {children}
            </th>
          );
        },

        td({ children }) {
          return (
            <td className="border px-4 py-2">
              {children}
            </td>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}