"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  FileText,
  Copy,
  Download,
  Sparkles,
  Check,
  Settings,
  Code,
  Loader2,
  AlertCircle,
  Globe,
  Hash,
  Info,
  FileJson,
  FileCode,
} from "lucide-react";

import { formatLLMsTxt } from "@/lib/llm/llms-formatter";
import { trimToTokens } from "@/lib/llm/token-counter";

import type { ExtractedContent, LLMOptions } from "@/types/llm";

export default function LLMGenerator() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const [activeTab, setActiveTab] = useState<"output" | "preview">(
    "output"
  );

  const [options, setOptions] = useState<LLMOptions>({
    includeHeadings: true,
    includeMeta: true,
    includeLinks: true,
    includeImages: false,
    maxTokens: 4000,
  });

  const generateLLMText = async () => {
    if (!url) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("Please enter a valid URL (e.g. https://example.com)");
      return;
    }

    setLoading(true);
    setError("");
    setGeneratedText("");

    try {
      const response = await fetch(
        `/api/fetch-page?url=${encodeURIComponent(url)}`
      );

const data = await response.json();

if (!response.ok) {
  throw new Error(
    data?.error || "Failed to fetch page"
  );
}

const typedData: ExtractedContent = data;

      const trimmedContent = trimToTokens(
        data.content || "",
        options.maxTokens
      );

      const finalData = {
        ...data,
        content: trimmedContent,
      };

      const llmsText = formatLLMsTxt(
        finalData,
        url,
        options
      );

      setGeneratedText(llmsText);
    } catch (err: any) {
      console.error(err);

      setError(
        err.message ||
          "Failed to generate LLM.txt"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!generatedText) {
      setError("Nothing to copy");
      return;
    }

    try {
      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {
        await navigator.clipboard.writeText(
          generatedText
        );
      } else {
        const textArea =
          document.createElement("textarea");

        textArea.value = generatedText;

        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand("copy");

        textArea.remove();
      }

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);

      setError("Failed to copy text");
    }
  };

  const handleDownload = (
    format: "txt" | "md" | "json" | "yaml"
  ) => {
    if (!generatedText) return;

    let content = generatedText;
    let ext = "txt";
    let mime = "text/plain";

    if (format === "json") {
      content = JSON.stringify(
        {
          url,
          llmsText: generatedText,
        },
        null,
        2
      );

      ext = "json";
      mime = "application/json";
    }

    if (format === "yaml") {
      content = `url: ${url}
llmsText: |
  ${generatedText.replace(/\n/g, "\n  ")}`;

      ext = "yaml";
      mime = "text/yaml";
    }

    if (format === "md") {
      ext = "md";
      mime = "text/markdown";
    }

    const blob = new Blob([content], {
      type: mime,
    });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    const domain = url
      ? new URL(url).hostname
      : "page";

    a.download = `llms-${domain}.${ext}`;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    setTimeout(() => {
      URL.revokeObjectURL(a.href);
    }, 100);
  };

  const clearForm = () => {
    setUrl("");
    setGeneratedText("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C727B]/10 mb-4">
            <Sparkles className="w-4 h-4 text-[#2C727B]" />

            <span className="text-sm text-[#2C727B] font-medium">
              Free Tool
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#1A394E] mb-4">
            LLM.txt Generator
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Generate AI-optimized text files for
            ChatGPT, Claude, Gemini, and other
            Large Language Models.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Input */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 md:p-6">
            <h2 className="text-xl font-semibold text-[#1A394E] mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#2C727B]" />

              Enter URL
            </h2>

            <div className="space-y-4">
              <div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setError("");
                  }}
                  placeholder="https://example.com/page"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2C727B] focus:ring-2 focus:ring-[#2C727B]/20 transition-all"
                />

                {error && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />

                    {error}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="border-t border-gray-100 pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4" />

                  Generation Options
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={
                        options.includeHeadings
                      }
                      onChange={(e) =>
                        setOptions({
                          ...options,
                          includeHeadings:
                            e.target.checked,
                        })
                      }
                    />

                    <span className="text-sm text-gray-600">
                      Headings
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.includeMeta}
                      onChange={(e) =>
                        setOptions({
                          ...options,
                          includeMeta:
                            e.target.checked,
                        })
                      }
                    />

                    <span className="text-sm text-gray-600">
                      Meta Info
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options.includeLinks}
                      onChange={(e) =>
                        setOptions({
                          ...options,
                          includeLinks:
                            e.target.checked,
                        })
                      }
                    />

                    <span className="text-sm text-gray-600">
                      Links
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={
                        options.includeImages
                      }
                      onChange={(e) =>
                        setOptions({
                          ...options,
                          includeImages:
                            e.target.checked,
                        })
                      }
                    />

                    <span className="text-sm text-gray-600">
                      Images
                    </span>
                  </label>
                </div>

                <div className="mt-4">
                  <label className="text-sm text-gray-600 block mb-2">
                    Max Tokens:{" "}
                    {options.maxTokens}
                  </label>

                  <input
                    type="range"
                    min="500"
                    max="16000"
                    step="500"
                    value={options.maxTokens}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        maxTokens: parseInt(
                          e.target.value
                        ),
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={generateLLMText}
                  disabled={loading || !url}
                  className="flex-1 py-3 bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate LLM.txt
                    </>
                  )}
                </button>

                {url && (
                  <button
                    onClick={clearForm}
                    className="px-4 py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-400" />

                <span className="text-sm text-gray-300 font-mono">
                  llms.txt
                </span>
              </div>

              <div className="flex gap-2 items-center">
                {/* Tabs */}
                <div className="flex rounded-lg bg-gray-700 p-0.5 mr-2">
                  <button
                    onClick={() =>
                      setActiveTab("output")
                    }
                    className={`px-3 py-1 text-xs rounded-md ${
                      activeTab === "output"
                        ? "bg-gray-600 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    Raw
                  </button>

                  <button
                    onClick={() =>
                      setActiveTab("preview")
                    }
                    className={`px-3 py-1 text-xs rounded-md ${
                      activeTab === "preview"
                        ? "bg-gray-600 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    Preview
                  </button>
                </div>

                {/* Copy */}
                <button
                  onClick={handleCopy}
                  disabled={!generatedText}
                  className="p-1.5 rounded-lg hover:bg-gray-700 disabled:opacity-50"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {/* Download */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setShowDownloadMenu(
                        !showDownloadMenu
                      )
                    }
                    disabled={!generatedText}
                    className="p-1.5 rounded-lg hover:bg-gray-700 disabled:opacity-50"
                  >
                    <Download className="w-4 h-4 text-gray-400" />
                  </button>

                  {showDownloadMenu && (
                    <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                      <button
                        onClick={() => {
                          handleDownload("txt");
                          setShowDownloadMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Download .txt
                      </button>

                      <button
                        onClick={() => {
                          handleDownload("md");
                          setShowDownloadMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                      >
                        <FileCode className="w-3.5 h-3.5" />
                        Download .md
                      </button>

                      <button
                        onClick={() => {
                          handleDownload("json");
                          setShowDownloadMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                      >
                        <FileJson className="w-3.5 h-3.5" />
                        Download .json
                      </button>

                      <button
                        onClick={() => {
                          handleDownload("yaml");
                          setShowDownloadMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                      >
                        <FileCode className="w-3.5 h-3.5" />
                        Download .yaml
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 h-[400px] md:h-[600px] overflow-y-auto">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <Loader2 className="w-8 h-8 animate-spin mb-3 text-[#2C727B]" />

                  <p className="text-sm">
                    Fetching and analyzing...
                  </p>
                </div>
              ) : generatedText ? (
                activeTab === "output" ? (
                  <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">
                    {generatedText}
                  </pre>
                ) : (
                  <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown>
                      {generatedText}
                    </ReactMarkdown>
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
                  <FileText className="w-12 h-12 mb-3 opacity-30" />

                  <p className="text-sm">
                    Generated LLM text will
                    appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 border border-[#2C727B]/10">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-[#2C727B]" />

              <h3 className="font-semibold text-[#1A394E]">
                What is LLM.txt?
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              LLM.txt helps AI systems
              understand website content in a
              structured format for better AI
              indexing and processing.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#2C727B]/5 to-[#1A394E]/5 rounded-2xl p-6 border border-[#2C727B]/10">
            <div className="flex items-center gap-2 mb-3">
              <Hash className="w-5 h-5 text-[#2C727B]" />

              <h3 className="font-semibold text-[#1A394E]">
                Use Cases
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">
                AI SEO
              </span>

              <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">
                AI Crawling
              </span>

              <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">
                Content Structuring
              </span>

              <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600">
                Documentation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}