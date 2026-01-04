"use client";
import React from "react";

export default function GoldOfferBanner() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mb-16 sm:mb-12 px-4 sm:px-0 flex justify-center">

      {/* Banner container */}
      <div className="relative z-10 inline-block w-fit bg-gradient-to-r from-[#F7D66E] via-[#F1C24E] to-[#EAA93A] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        {/* Sparkles anchored to the banner edges */}
        <div className="pointer-events-none absolute -inset-x-8 -inset-y-4 z-0">
          {/* Top row */}
          {[
            { left: "10%", size: 18 },
            { left: "20%", size: 22 },
            { left: "35%", size: 20 },
            { left: "50%", size: 18 },
            { left: "65%", size: 22 },
            { left: "80%", size: 20 },
          ].map((p, i) => (
            <svg
              key={`top-${i}`}
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              className="absolute"
              style={{ left: p.left, top: -8, filter: "drop-shadow(0 0 10px rgba(255, 215, 120, 0.95))" }}
            >
              <path d="M12 0l2.5 7 7 2.5-7 2.5-2.5 7-2.5-7-7-2.5 7-2.5L12 0z" fill="rgba(255,240,180,0.95)" />
            </svg>
          ))}
          {/* Bottom row */}
          {[
            { left: "12%", size: 20 },
            { left: "27%", size: 18 },
            { left: "42%", size: 22 },
            { left: "57%", size: 20 },
            { left: "72%", size: 18 },
            { left: "87%", size: 22 },
          ].map((p, i) => (
            <svg
              key={`bottom-${i}`}
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              className="absolute"
              style={{ left: p.left, bottom: -8, filter: "drop-shadow(0 0 10px rgba(255, 215, 120, 0.95))" }}
            >
              <path d="M12 0l2.5 7 7 2.5-7 2.5-2.5 7-2.5-7-7-2.5 7-2.5L12 0z" fill="rgba(255,240,180,0.95)" />
            </svg>
          ))}
          {/* Left column */}
          {[
            { top: "18%", size: 22 },
            { top: "38%", size: 20 },
            { top: "58%", size: 18 },
            { top: "78%", size: 22 },
          ].map((p, i) => (
            <svg
              key={`left-${i}`}
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              className="absolute"
              style={{ left: -10, top: p.top, filter: "drop-shadow(0 0 10px rgba(255, 215, 120, 0.95))" }}
            >
              <path d="M12 0l2.5 7 7 2.5-7 2.5-2.5 7-2.5-7-7-2.5 7-2.5L12 0z" fill="rgba(255,240,180,0.95)" />
            </svg>
          ))}
          {/* Right column */}
          {[
            { top: "22%", size: 18 },
            { top: "42%", size: 22 },
            { top: "62%", size: 20 },
            { top: "82%", size: 18 },
          ].map((p, i) => (
            <svg
              key={`right-${i}`}
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              className="absolute"
              style={{ right: -10, top: p.top, filter: "drop-shadow(0 0 10px rgba(255, 215, 120, 0.95))" }}
            >
              <path d="M12 0l2.5 7 7 2.5-7 2.5-2.5 7-2.5-7-7-2.5 7-2.5L12 0z" fill="rgba(255,240,180,0.95)" />
            </svg>
          ))}
        </div>
        {/* Inner shine / bevel */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative px-5 sm:px-7 py-3 sm:py-5">
          <p className="text-lg sm:text-xl md:text-3xl font-extrabold tracking-wide">
            <span className="text-[#4B0A3A] drop-shadow-sm">OFERTĂ SPECIALĂ!</span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            Primești gratuit un PDF cu
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            formule de matematică la achiziția oricărei culegeri!
          </p>

          {/* PDF gift badge image */}
          <div className="absolute -right-10 sm:-right-12 md:-right-14 -top-10 sm:-top-12 md:-top-16 z-20">
            <img
              src="/pdf_image.png"
              alt="PDF cadou"
              className="w-36 sm:w-44 md:w-52 drop-shadow-2xl rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
