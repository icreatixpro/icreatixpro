"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

// ============================================
// TYPES & INTERFACES
// ============================================

interface CompressionResult {
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  savingsAmount: number;
  originalDimensions: { width: number; height: number };
  compressedDimensions: { width: number; height: number };
  format: string;
  quality: number;
  processingTime: number;
}

interface CompressionPreset {
  id: number;
  name: string;
  quality: number;
  description: string;
  icon: string;
  color: string;
  bestFor: string;
}

interface CompressionHistory {
  id: string;
  originalName: string;
  originalSize: number;
  compressedSize: number;
  date: Date;
}

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
};

const scaleOnTap = { scale: 0.97 };

// ============================================
// HELPER FUNCTIONS
// ============================================

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
};

const getFileType = (file: File): string => {
  const type = file.type;
  if (type.includes("jpeg") || type.includes("jpg")) return "JPEG";
  if (type.includes("png")) return "PNG";
  if (type.includes("webp")) return "WebP";
  if (type.includes("gif")) return "GIF";
  if (type.includes("svg")) return "SVG";
  return "Image";
};

// ============================================
// COMPRESSION PRESETS
// ============================================

const compressionPresets: CompressionPreset[] = [
  { 
    id: 0, name: "Best Quality", quality: 90, description: "Minimal size reduction", 
    icon: "✨", color: "from-emerald-500/20 to-teal-500/20", bestFor: "Print, photography"
  },
  { 
    id: 1, name: "Web Optimized", quality: 75, description: "Recommended for web", 
    icon: "🌐", color: "from-blue-500/20 to-indigo-500/20", bestFor: "Websites, social media"
  },
  { 
    id: 2, name: "High Compression", quality: 60, description: "Significant reduction", 
    icon: "⚡", color: "from-orange-500/20 to-red-500/20", bestFor: "Email, mobile apps"
  },
  { 
    id: 3, name: "Maximum", quality: 40, description: "Smallest file size", 
    icon: "🚀", color: "from-purple-500/20 to-pink-500/20", bestFor: "Thumbnails, previews"
  }
];

// ============================================
// TOOLTIP COMPONENT
// ============================================

const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#1A394E] text-white text-xs rounded-lg whitespace-nowrap"
          >
            {text}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#1A394E]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ============================================
// STAT CARD COMPONENT
// ============================================

const StatCard = ({ icon, label, value, subValue, color }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -2 }}
    className={`p-3 rounded-xl bg-gradient-to-br ${color} backdrop-blur-sm border border-white/50`}
  >
    <div className="flex items-center gap-2">
      <div className="text-xl">{icon}</div>
      <div>
        <p className="text-[10px] text-[#1A394E]/60 uppercase">{label}</p>
        <p className="text-base font-bold text-[#1A394E]">{value}</p>
        {subValue && <p className="text-[10px] text-[#1A394E]/50">{subValue}</p>}
      </div>
    </div>
  </motion.div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function ImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [compressedUrl, setCompressedUrl] = useState<string>("");
  const [result, setResult] = useState<CompressionResult | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<number>(1);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<CompressionHistory[]>([]);
  const [processingStep, setProcessingStep] = useState<string>("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<number>(0);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("compression_history");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setHistory(parsed.map((h: any) => ({ ...h, date: new Date(h.date) })));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem("compression_history", JSON.stringify(history.slice(0, 10)));
    }
  }, [history]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (compressedUrl) URL.revokeObjectURL(compressedUrl);
    };
  }, [previewUrl, compressedUrl]);

  const handleFileSelect = useCallback((selectedFile: File) => {
    if (!selectedFile.type.startsWith("image/")) {
      setError("❌ Please select an image file (JPEG, PNG, WebP, GIF)");
      return;
    }
    if (selectedFile.size > 50 * 1024 * 1024) {
      setError("❌ File size must be less than 50MB");
      return;
    }

    setError(null);
    setFile(selectedFile);
    setResult(null);
    setCompressedUrl("");

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    const url = URL.createObjectURL(selectedFile);
    setPreviewUrl(url);
  }, [previewUrl]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) handleFileSelect(droppedFile);
  }, [handleFileSelect]);

  const handleCompress = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    setProcessingStep("📤 Uploading image...");
    startTimeRef.current = Date.now();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("quality", compressionPresets[selectedPreset].quality.toString());

    try {
      setProcessingStep("🔄 Analyzing image data...");
      await new Promise(r => setTimeout(r, 200));

      const res = await fetch("/api/compress-image", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Compression failed");

      setProcessingStep("✨ Optimizing compression...");
      await new Promise(r => setTimeout(r, 200));

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setCompressedUrl(url);

      const processingTime = Date.now() - startTimeRef.current;
      
      const originalSize = parseInt(res.headers.get("X-Original-Size") || "0");
      const compressedSize = parseInt(res.headers.get("X-Compressed-Size") || "0");
      const originalWidth = parseInt(res.headers.get("X-Original-Width") || "0");
      const originalHeight = parseInt(res.headers.get("X-Original-Height") || "0");
      const compressedWidth = parseInt(res.headers.get("X-Compressed-Width") || "0");
      const compressedHeight = parseInt(res.headers.get("X-Compressed-Height") || "0");
      const format = res.headers.get("X-Image-Format") || "JPEG";
      const quality = parseInt(res.headers.get("X-Compression-Quality") || "75");

      const savingsAmount = originalSize - compressedSize;
      const compressionRatio = (savingsAmount / originalSize) * 100;

      setResult({
        originalSize, compressedSize, compressionRatio, savingsAmount,
        originalDimensions: { width: originalWidth, height: originalHeight },
        compressedDimensions: { width: compressedWidth, height: compressedHeight },
        format, quality, processingTime
      });

      setHistory(prev => [{
        id: Date.now().toString(),
        originalName: file.name,
        originalSize,
        compressedSize,
        date: new Date()
      }, ...prev].slice(0, 10));

      setProcessingStep("✅ Complete!");

    } catch (err) {
      console.error(err);
      setError("❌ Failed to compress image. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setProcessingStep(""), 1000);
    }
  };

  const handleDownload = () => {
    if (compressedUrl && file) {
      const extension = result?.format.toLowerCase() || "jpg";
      const link = document.createElement("a");
      link.href = compressedUrl;
      link.download = `compressed-${Date.now()}.${extension}`;
      link.click();
    }
  };

  const handleReset = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    if (compressedUrl) URL.revokeObjectURL(compressedUrl);
    setFile(null);
    setPreviewUrl("");
    setCompressedUrl("");
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const currentPreset = compressionPresets[selectedPreset];

  return (
    <>
      <Head>
        <title>Image Compressor Pro | Free Online Image Optimization | iCreatixPRO</title>
        <meta name="description" content="Free online image compressor. Reduce image size by up to 80% while preserving quality. No upload limits, private processing, instant download." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="min-h-screen max-w-5xl mx-auto px-4 py-6 md:py-10">
        
        {/* Header - macOS Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-[#1A394E]/60">image-compressor-pro</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#2C727B]/20 text-[#2C727B]">AI-Powered</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-700">⚡ Up to 80% Smaller</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#1A394E] to-[#2C727B] bg-clip-text text-transparent">
            Image Compressor Pro
          </h1>
          <p className="text-[#1A394E]/60 text-sm mt-1">
            Reduce file size while preserving quality Free, private, and instant
          </p>
        </motion.div>

        {/* Stats Banner - Quick Trust Builders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-4 gap-2 mb-6"
        >
          <div className="text-center p-2 rounded-lg bg-white/30 backdrop-blur-sm border border-white/50">
            <div className="text-lg font-bold text-[#2C727B]">10K+</div>
            <div className="text-[9px] text-[#1A394E]/50">Images</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white/30 backdrop-blur-sm border border-white/50">
            <div className="text-lg font-bold text-[#2C727B]">500GB+</div>
            <div className="text-[9px] text-[#1A394E]/50">Saved</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white/30 backdrop-blur-sm border border-white/50">
            <div className="text-lg font-bold text-[#2C727B]">&lt;1s</div>
            <div className="text-[9px] text-[#1A394E]/50">Speed</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white/30 backdrop-blur-sm border border-white/50">
            <div className="text-lg font-bold text-[#2C727B]">Free</div>
            <div className="text-[9px] text-[#1A394E]/50">No Signup</div>
          </div>
        </motion.div>

        {/* ============================================ */}
        {/* MAIN DRAG & DROP SECTION - FRONT & CENTER */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative rounded-2xl transition-all duration-200 ${
            dragActive
              ? "bg-[#2C727B]/10 border-2 border-[#2C727B]"
              : "bg-gradient-to-br from-[#2C727B]/5 to-[#1A394E]/5 border-2 border-dashed border-gray-300"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="p-8 md:p-12 text-center">
            {/* Animated Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-6xl mb-4"
            >
              {dragActive ? "📥" : "📸"}
            </motion.div>
            
            <h2 className="text-xl md:text-2xl font-semibold text-[#1A394E] mb-2">
              {dragActive ? "Drop your image here" : "Drag & drop your image here"}
            </h2>
            
            <p className="text-[#1A394E]/50 text-sm mb-4">
              or <span className="text-[#2C727B] font-medium">click to browse</span>
            </p>
            
            {/* Format Badges */}
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-white/50 text-[#1A394E]/70">JPEG</span>
              <span className="px-2 py-1 rounded-full bg-white/50 text-[#1A394E]/70">PNG</span>
              <span className="px-2 py-1 rounded-full bg-white/50 text-[#1A394E]/70">WebP</span>
              <span className="px-2 py-1 rounded-full bg-white/50 text-[#1A394E]/70">GIF</span>
              <span className="px-2 py-1 rounded-full bg-white/50 text-[#1A394E]/70">Up to 50MB</span>
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 rounded-xl bg-red-100/80 backdrop-blur-sm border border-red-200 text-red-700 text-sm text-center"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Tip - Only show when no file */}
        {!file && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-center"
          >
            <p className="text-xs text-[#1A394E]/40">
              💡 Tip: Compressed images load faster and improve SEO rankings
            </p>
          </motion.div>
        )}

        {/* ============================================ */}
        {/* COMPRESSION CONTROLS - Appears after upload */}
        {/* ============================================ */}
        <AnimatePresence>
          {file && !compressedUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 space-y-4"
            >
              {/* Compression Presets */}
              <div>
                <label className="block text-xs font-medium text-[#1A394E]/60 mb-2 flex items-center gap-2">
                  🎯 Compression Level
                  <Tooltip text="Higher quality = larger file. Lower quality = smaller file.">
                    <span className="cursor-help">ⓘ</span>
                  </Tooltip>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {compressionPresets.map((preset) => (
                    <motion.button
                      key={preset.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedPreset(preset.id)}
                      className={`p-2 rounded-xl text-center transition-all ${
                        selectedPreset === preset.id
                          ? `bg-gradient-to-r ${preset.color} border border-[#2C727B]/30 shadow-md`
                          : "bg-white/30 border border-white/50"
                      }`}
                    >
                      <div className="text-lg">{preset.icon}</div>
                      <div className="font-medium text-[#1A394E] text-xs">{preset.name}</div>
                      <div className="text-[9px] text-[#1A394E]/50">{preset.description}</div>
                    </motion.button>
                  ))}
                </div>
                <p className="text-xs text-[#1A394E]/40 mt-2 text-center">
                  💡 {currentPreset.bestFor}
                </p>
              </div>

              {/* Preview & Info */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/50">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/50 flex-shrink-0">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1A394E] truncate">{file?.name}</p>
                  <div className="flex gap-3 text-xs text-[#1A394E]/60 mt-1">
                    <span>{formatFileSize(file?.size || 0)}</span>
                    <span>{getFileType(file!)}</span>
                  </div>
                </div>
                <button onClick={handleReset} className="text-xs text-red-500 hover:text-red-600 px-2">
                  ✕
                </button>
              </div>

              {/* Compress Button */}
              <motion.button
                whileHover={scaleOnTap}
                whileTap={{ scale: 0.97 }}
                onClick={handleCompress}
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#2C727B] to-[#1A394E] hover:shadow-lg transition-all"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{processingStep || "Compressing..."}</span>
                  </div>
                ) : (
                  "⚡ Compress Image"
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================ */}
        {/* RESULTS SECTION */}
        {/* ============================================ */}
        <AnimatePresence>
          {!loading && compressedUrl && result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 space-y-4"
            >
              {/* Success Badge */}
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  ✓ Compression Complete
                </span>
              </div>

              {/* Before/After Comparison */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <p className="text-xs text-[#1A394E]/50 mb-1">Before</p>
                  <div className="rounded-xl overflow-hidden bg-white/20 border border-white/50">
                    <img src={previewUrl} alt="Before" className="w-full h-32 object-contain" />
                  </div>
                  <p className="text-xs text-[#1A394E]/60 mt-1">{formatFileSize(result.originalSize)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[#1A394E]/50 mb-1">After</p>
                  <div className="rounded-xl overflow-hidden bg-white/20 border border-white/50">
                    <img src={compressedUrl} alt="After" className="w-full h-32 object-contain" />
                  </div>
                  <p className="text-xs text-green-600 font-medium mt-1">{formatFileSize(result.compressedSize)}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2">
                <StatCard icon="📊" label="Saved" value={`${result.compressionRatio.toFixed(0)}%`} color="from-green-500/10 to-emerald-500/10" />
                <StatCard icon="💾" label="Reduced" value={formatFileSize(result.savingsAmount)} color="from-blue-500/10 to-indigo-500/10" />
              </div>

              {/* Download Button */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownload}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold flex items-center justify-center gap-2"
                >
                  ⬇️ Download {result.format}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl bg-white/40 border border-white/60 text-[#1A394E]/70 hover:text-[#1A394E]"
                >
                  🔄 New
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================ */}
        {/* EDUCATIONAL SIDEBAR - Bottom Section */}
        {/* ============================================ */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {/* Why Compress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🚀</span>
              <h3 className="font-semibold text-[#1A394E] text-sm">Why Compress?</h3>
            </div>
            <div className="space-y-1 text-xs text-[#1A394E]/60">
              <p>✓ 4x faster page load</p>
              <p>✓ Better SEO rankings</p>
              <p>✓ Save storage space</p>
              <p>✓ Improve user experience</p>
            </div>
          </motion.div>

          {/* Format Guide Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="p-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🎨</span>
              <h3 className="font-semibold text-[#1A394E] text-sm">Format Guide</h3>
            </div>
            <div className="space-y-1 text-xs text-[#1A394E]/60">
              <p>📷 JPEG: Photos & complex images</p>
              <p>🖼️ PNG: Logos & transparency</p>
              <p>🌐 WebP: Best for web (25-35% smaller)</p>
            </div>
          </motion.div>

          {/* Privacy Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🔒</span>
              <h3 className="font-semibold text-[#1A394E] text-sm">Privacy First</h3>
            </div>
            <div className="space-y-1 text-xs text-[#1A394E]/60">
              <p>✓ Processed in memory only</p>
              <p>✓ Never stored on servers</p>
              <p>✓ No third-party APIs</p>
              <p>✓ Auto-deleted after download</p>
            </div>
          </motion.div>
        </div>

        {/* Recent History - Collapsible */}
        {history.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/50"
          >
            <details className="group">
              <summary className="cursor-pointer text-xs font-medium text-[#1A394E]/70 flex items-center gap-2">
                📜 Recent Compressions ({history.length})
              </summary>
              <div className="mt-2 space-y-1 max-h-32 overflow-y-auto">
                {history.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs py-1 border-b border-white/30">
                    <span className="text-[#1A394E]/60 truncate max-w-[150px]">{item.originalName}</span>
                    <span className="text-green-600">
                      {formatFileSize(item.originalSize)} → {formatFileSize(item.compressedSize)}
                    </span>
                  </div>
                ))}
              </div>
            </details>
          </motion.div>
        )}

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/50"
        >
          <h3 className="font-semibold text-[#1A394E] text-sm mb-3 flex items-center gap-2">
            <span>❓</span> Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-xs">
            <details>
              <summary className="cursor-pointer text-[#1A394E]/80 font-medium">Is my image stored on your server?</summary>
              <p className="text-[#1A394E]/60 mt-1 pl-3">No! Images are processed in memory and immediately discarded. We never store any images.</p>
            </details>
            <details>
              <summary className="cursor-pointer text-[#1A394E]/80 font-medium">Will I lose image quality?</summary>
              <p className="text-[#1A394E]/60 mt-1 pl-3">Smart compression preserves visual quality. Use "Best Quality" preset for minimal loss.</p>
            </details>
            <details>
              <summary className="cursor-pointer text-[#1A394E]/80 font-medium">Is this really free?</summary>
              <p className="text-[#1A394E]/60 mt-1 pl-3">Yes! Completely free with no signup, no watermarks, no hidden costs.</p>
            </details>
            <details>
              <summary className="cursor-pointer text-[#1A394E]/80 font-medium">What formats are supported?</summary>
              <p className="text-[#1A394E]/60 mt-1 pl-3">JPEG, PNG, WebP, and GIF up to 50MB.</p>
            </details>
          </div>
        </motion.div>
      </div>
    </>
  );
}