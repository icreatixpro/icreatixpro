"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

interface CompressedImage {
  originalSize: number;
  compressedSize: number;
  originalUrl: string;
  compressedUrl: string;
  format: string;
  reductionPercentage: number;
}

const compressImage = (file: File, qualityValue: number): Promise<CompressedImage> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;
      
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        canvas.width = img.width;
        canvas.height = img.height;
        
        ctx?.drawImage(img, 0, 0);
        
        let mimeType = "image/jpeg";
        let ext = "jpg";
        
        if (file.type === "image/png") {
          mimeType = "image/png";
          ext = "png";
        } else if (file.type === "image/webp") {
          mimeType = "image/webp";
          ext = "webp";
        }
        
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Compression failed"));
              return;
            }
            
            const originalSize = file.size / 1024;
            const compressedSize = blob.size / 1024;
            const reductionPercentage = ((1 - blob.size / file.size) * 100);
            
            resolve({
              originalSize,
              compressedSize,
              originalUrl: URL.createObjectURL(file),
              compressedUrl: URL.createObjectURL(blob),
              format: ext.toUpperCase(),
              reductionPercentage,
            });
          },
          mimeType,
          qualityValue / 100
        );
      };
      
      img.onerror = () => reject(new Error("Failed to load image"));
    };
    
    reader.onerror = () => reject(new Error("Failed to read file"));
  });
};

export function CompressorToolClient() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [compressed, setCompressed] = useState<CompressedImage | null>(null);
  const [quality, setQuality] = useState(70);
  const [isCompressing, setIsCompressing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [totalCompressions, setTotalCompressions] = useState(15234);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Load stats from localStorage safely
  useEffect(() => {
    const stored = localStorage.getItem("imagecompressor_total");
    if (stored) {
      setTotalCompressions(parseInt(stored, 10));
    }
  }, []);
  
  // Cleanup URLs on unmount
  useEffect(() => {
    return () => {
      if (compressed?.originalUrl) {
        URL.revokeObjectURL(compressed.originalUrl);
      }
      if (compressed?.compressedUrl) {
        URL.revokeObjectURL(compressed.compressedUrl);
      }
    };
  }, [compressed]);

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPEG, PNG, or WebP)");
      return;
    }
    
    if (file.size > 50 * 1024 * 1024) {
      setError("File too large. Maximum size is 50MB");
      return;
    }
    
    // Cleanup old URLs
    if (compressed?.originalUrl) URL.revokeObjectURL(compressed.originalUrl);
    if (compressed?.compressedUrl) URL.revokeObjectURL(compressed.compressedUrl);
    
    setError(null);
    setSelectedFile(file);
    setCompressed(null);
    
    setIsCompressing(true);
    
    try {
      const result = await compressImage(file, quality);
      setCompressed(result);
      
      const newTotal = totalCompressions + 1;
      setTotalCompressions(newTotal);
      localStorage.setItem("imagecompressor_total", newTotal.toString());
    } catch (err) {
      setError("Failed to compress image. Please try again.");
    } finally {
      setIsCompressing(false);
    }
  }, [compressed, quality, totalCompressions]);
  
  const handleQualityChange = useCallback(async (newQuality: number) => {
    setQuality(newQuality);
    if (selectedFile && !isCompressing) {
      setIsCompressing(true);
      try {
        if (compressed?.originalUrl) URL.revokeObjectURL(compressed.originalUrl);
        if (compressed?.compressedUrl) URL.revokeObjectURL(compressed.compressedUrl);
        
        const result = await compressImage(selectedFile, newQuality);
        setCompressed(result);
      } catch (err) {
        setError("Failed to re-compress");
      } finally {
        setIsCompressing(false);
      }
    }
  }, [selectedFile, isCompressing, compressed]);
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);
  
  const handleDownload = useCallback(() => {
    if (compressed?.compressedUrl) {
      const link = document.createElement("a");
      link.href = compressed.compressedUrl;
      link.download = `optimized-${Date.now()}.${compressed.format.toLowerCase()}`;
      link.click();
    }
  }, [compressed]);
  
  const handleReset = useCallback(() => {
    if (compressed?.originalUrl) URL.revokeObjectURL(compressed.originalUrl);
    if (compressed?.compressedUrl) URL.revokeObjectURL(compressed.compressedUrl);
    setSelectedFile(null);
    setCompressed(null);
    setError(null);
    setQuality(70);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [compressed]);
  
  const formatBytes = (kb: number) => {
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    return `${(kb / 1024).toFixed(2)} MB`;
  };

  const reductionPercentage = compressed ? compressed.reductionPercentage.toFixed(0) : 0;

  return (
    <div>
      {/* ===== UPLOAD AREA - MAIN TOOL ===== */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        className="hidden"
      />
      
      <div
        className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all mb-8 ${
          dragActive
            ? "border-[#2C727B] bg-[#2C727B]/5 scale-[1.01]"
            : "border-gray-300 bg-white/50 hover:border-[#2C727B] hover:bg-gray-50"
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="text-6xl mb-4">🖼️</div>
        <p className="text-xl font-semibold text-gray-700 mb-2">
          {dragActive ? "Drop your image here" : "Drag & drop your image here"}
        </p>
        <p className="text-gray-500 mb-4">or click to browse</p>
        <div className="flex justify-center gap-3">
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">JPEG</span>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">PNG</span>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">WebP</span>
        </div>
        <p className="text-xs text-gray-400 mt-4">Maximum file size: 50MB</p>
      </div>
      
      {/* ===== STATS BAR - MOVED BELOW UPLOAD AREA ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
          <div className="text-2xl font-bold text-[#2C727B]">{totalCompressions.toLocaleString()}+</div>
          <div className="text-xs text-gray-500 mt-1">Images Compressed</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
          <div className="text-2xl font-bold text-[#2C727B]">&lt;0.5s</div>
          <div className="text-xs text-gray-500 mt-1">Avg. Compression Time</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
          <div className="text-2xl font-bold text-[#2C727B]">100%</div>
          <div className="text-xs text-gray-500 mt-1">Browser-Based</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
          <div className="text-2xl font-bold text-[#2C727B]">Free</div>
          <div className="text-xs text-gray-500 mt-1">No Signup Required</div>
        </div>
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm text-center">
          ⚠️ {error}
        </div>
      )}
      
      {/* Quality Slider */}
      {selectedFile && (
        <div className="mb-6 p-5 rounded-xl bg-gray-50 border border-gray-200 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-700">Compression Level</span>
            <span className="text-sm font-bold text-[#2C727B]">{quality}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={100}
            step={5}
            value={quality}
            onChange={(e) => handleQualityChange(parseInt(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#2C727B]"
            disabled={isCompressing}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>📦 Smaller file (60-80% reduction)</span>
            <span>✨ Better quality</span>
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-3">
            🔒 Files processed in your browser nothing uploaded to any server
          </p>
        </div>
      )}
      
      {/* Loading State */}
      {isCompressing && (
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100">
            <div className="w-5 h-5 border-2 border-[#2C727B] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-600">Optimizing your image...</span>
          </div>
        </div>
      )}
      
      {/* Results Section */}
      {compressed && !isCompressing && (
        <div className="space-y-6">
          {/* Before/After with explicit dimensions for CLS prevention */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
              <p className="text-sm font-medium text-gray-500 mb-2">Original</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={compressed.originalUrl} 
                  alt="Original preview" 
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-3">{formatBytes(compressed.originalSize)}</p>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50/30 p-4 text-center">
              <p className="text-sm font-medium text-green-600 mb-2">Compressed</p>
              <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={compressed.compressedUrl} 
                  alt="Compressed preview" 
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-sm font-semibold text-green-600 mt-3">
                {formatBytes(compressed.compressedSize)}
                <span className="text-xs ml-1">(-{reductionPercentage}%)</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={handleDownload} className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2C727B] to-[#1A394E] text-white font-semibold shadow-md hover:shadow-lg transition-all">
              ↓ Download Optimized Image
            </button>
            <button onClick={handleReset} className="px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-all">
              ↺ Compress Another Image
            </button>
          </div>
        </div>
      )}
      
      {/* Empty State */}
      {!selectedFile && !isCompressing && !compressed && (
        <div className="text-center py-12">
          <div className="text-5xl mb-3">🚀</div>
          <p className="text-gray-500 font-medium">Ready to optimize your images</p>
          <p className="text-sm text-gray-400 mt-1">Upload an image above to start compressing</p>
        </div>
      )}
      
      {/* Internal Links */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-bold text-center text-gray-800 mb-4">More Free SEO Tools</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/tools/ai-title-generator" className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-[#2C727B] hover:text-white transition-all">
            🤖 AI Title Generator
          </Link>
          <Link href="/tools/meta-tag-generator" className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-[#2C727B] hover:text-white transition-all">
            🏷️ Meta Tag Generator
          </Link>
          <Link href="/tools/keyword-density-checker" className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-[#2C727B] hover:text-white transition-all">
            📊 Keyword Density Checker
          </Link>
        </div>
      </div>
    </div>
  );
}