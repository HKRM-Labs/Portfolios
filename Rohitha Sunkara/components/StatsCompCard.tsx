"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Sparkles, Clapperboard } from "lucide-react";
import confetti from "canvas-confetti";

interface StatsCompCardProps {
  onOpenCompCard: () => void;
}

export default function StatsCompCard({ onOpenCompCard }: StatsCompCardProps) {
  const [copied, setCopied] = useState(false);

  const stats = [
    { label: "Height", imperial: "5'6\"", metric: "168 cm" },
    { label: "Discipline", imperial: "Film Actress", metric: "Cinema & Fashion" },
    { label: "Bust", imperial: "34B", metric: "86 cm" },
    { label: "Waist", imperial: "26 in", metric: "66 cm" },
    { label: "Hips", imperial: "36 in", metric: "91 cm" },
    { label: "Shoe", imperial: "6 UK / 8 US", metric: "39 EU" },
    { label: "Eyes", imperial: "Dark Brown", metric: "Dark Brown" },
    { label: "Languages", imperial: "Telugu / Hindi", metric: "& English" },
    { label: "Location", imperial: "Hyderabad", metric: "Telangana, India" },
  ];

  const handleCopy = () => {
    const text = `Rohitha Sunkara (Ruhi) | Film Actress & Editorial Model
Discipline: Feature Films, OTT Web Series, Haute Couture
Languages: Fluent Telugu (Native), Fluent Hindi, Fluent English
Base: Hyderabad, India
Instagram: @hitaa.s (https://www.instagram.com/hitaa.s)
Status: Open for Feature Film Roles & Commercial Castings`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTrigger = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FFFFFF", "#FCE7F3", "#F472B6", "#DB2777", "#BE185D"],
    });
    onOpenCompCard();
  };

  return (
    <section id="comp-card" className="w-full py-24 px-6 md:px-12 bg-white border-t border-b border-pink-200/80">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-syne block mb-2 font-bold flex items-center gap-1.5">
            <Clapperboard className="w-3.5 h-3.5 text-pink-600" />
            <span>09 / Comp Card</span>
          </span>
          <h2 className="font-abril text-4xl sm:text-6xl text-gray-950 font-normal uppercase tracking-tight">
            Digital <span className="italic font-normal text-pink-600">Comp Card</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={handleCopy}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-pink-200 text-gray-800 text-[11px] sm:text-xs uppercase tracking-[0.16em] hover:border-pink-500 hover:text-pink-600 hover:bg-pink-50 transition-all font-syne font-bold shadow-sm"
          >
            {copied ? "Copied!" : "Copy Specs"}
          </button>

          <button
            onClick={handleTrigger}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold hover:from-pink-700 hover:to-rose-600 transition-colors flex items-center gap-1.5 font-syne shadow-md shadow-pink-500/20"
          >
            <Download className="w-3.5 h-3.5 text-white" />
            <span>Open Comp Card</span>
          </button>
        </div>
      </div>

      {/* Standard Agency Grid in White & Pink */}
      <div className="grid grid-cols-12 gap-4">
        
        {/* Photo 1: Headshot */}
        <div className="col-span-6 sm:col-span-3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-pink-100 border-2 border-pink-200 group shadow-sm hover:border-pink-500 transition-all">
          <Image
            src="/rohitha/photo_2.jpg"
            alt="Rohitha Headshot"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] font-mono text-pink-700 font-bold bg-white/95 px-2.5 py-1 rounded-full border border-pink-200 shadow-sm">
            Headshot
          </div>
        </div>

        {/* Photo 2: Saree Drape */}
        <div className="col-span-6 sm:col-span-3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-pink-100 border-2 border-pink-200 group shadow-sm hover:border-pink-500 transition-all">
          <Image
            src="/rohitha/photo_22.jpg"
            alt="Traditional Drape"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] font-mono text-pink-700 font-bold bg-white/95 px-2.5 py-1 rounded-full border border-pink-200 shadow-sm">
            Heritage Silk
          </div>
        </div>

        {/* Photo 3: Full Length Silhouette */}
        <div className="col-span-6 sm:col-span-3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-pink-100 border-2 border-pink-200 group shadow-sm hover:border-pink-500 transition-all">
          <Image
            src="/rohitha/photo_61.jpg"
            alt="Studio Portrait"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] font-mono text-pink-700 font-bold bg-white/95 px-2.5 py-1 rounded-full border border-pink-200 shadow-sm">
            Couture
          </div>
        </div>

        {/* Photo 4: Profile */}
        <div className="col-span-6 sm:col-span-3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-pink-100 border-2 border-pink-200 group shadow-sm hover:border-pink-500 transition-all">
          <Image
            src="/rohitha/photo_83.jpg"
            alt="Festive Drape"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] font-mono text-pink-700 font-bold bg-white/95 px-2.5 py-1 rounded-full border border-pink-200 shadow-sm">
            Bridal Silk
          </div>
        </div>

      </div>

      {/* Clean Data Bar in White & Pink */}
      <div className="mt-8 p-8 rounded-2xl bg-white border border-pink-200/90 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 text-center glass-panel shadow-sm">
        {stats.map((s) => (
          <div key={s.label} className="border-r last:border-r-0 border-pink-100 pr-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-pink-700 font-syne font-bold block">
              {s.label}
            </span>
            <span className="font-abril text-2xl text-gray-950 font-normal block mt-1">
              {s.imperial}
            </span>
            <span className="text-xs text-gray-600 font-syne block mt-0.5 font-medium">
              {s.metric}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
