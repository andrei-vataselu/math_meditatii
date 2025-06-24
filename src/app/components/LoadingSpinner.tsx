"use client";

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#FEBFD2] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white text-lg font-semibold tracking-wide">Se încarcă...</div>
      </div>
    </div>
  );
} 