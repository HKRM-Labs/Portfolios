"use client";

import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import confetti from "canvas-confetti";

interface StatsCompCardProps {
  onOpenCompCard: () => void;
}

export default function StatsCompCard({ onOpenCompCard }: StatsCompCardProps) {
  const [copied, setCopied] = useState(false);

  const stats = [
    { label: "Height", imperial: "5'7\"", metric: "170 cm" },
    { label: "Discipline", imperial: "Model & Actress", metric: "Couture & Screen" },
    { label: "Bust", imperial: "34B", metric: "86 cm" },
    { label: "Waist", imperial: "26 in", metric: "66 cm" },
    { label: "Hips", imperial: "36 in", metric: "91 cm" },
    { label: "Shoe", imperial: "6 UK / 8 US", metric: "39 EU" },
    { label: "Eyes", imperial: "Dark Brown", metric: "Dark Brown" },
    { label: "Hair", imperial: "Dark Natural", metric: "Natural Waves" },
    { label: "Location", imperial: "Hyd / Knl, IN", metric: "Hyderabad & Kurnool" },
  ];

  const handleCopy = () => {
    const text = `Pallavi Sunkara | Model & Actress Statistics:
Height: 5'7" (170 cm)
Discipline: High-Fashion Model & Screen Actress
Base: Hyderabad / Kurnool, India
Instagram: @pallaviiii124`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTrigger = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FAF3EB", "#F4E5D4", "#E8A2B6", "#D47A95", "#EFA68F"],
    });
    // Direct PDF download trigger
    const link = document.createElement("a");
    link.href = "/Pallavi_Sunkara_Portfolio.pdf";
    link.download = "Pallavi_Sunkara_Editorial_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onOpenCompCard();
  };

  return (
    <section id="comp-card" className="w-full py-24 px-6 md:px-12 bg-plum-950 border-t border-champagne-300/15">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-mauve-300 font-syne block mb-2 font-bold">
            08 / Agency Measurements
          </span>
          <h2 className="font-abril text-4xl sm:text-6xl text-champagne-100 font-normal uppercase tracking-tight">
            Digital <span className="italic font-normal text-mauve-300">Comp Card</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopy}
            className="px-5 py-2.5 rounded-full border border-champagne-300/20 text-champagne-300 text-xs uppercase tracking-[0.2em] hover:border-mauve-400 hover:text-champagne-100 transition-all font-syne font-semibold"
          >
            {copied ? "Copied" : "Copy Measurements"}
          </button>

          <button
            onClick={handleTrigger}
            className="px-7 py-2.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.25em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-colors flex items-center gap-2 font-syne shadow-lg shadow-mauve-500/10"
          >
            <Download className="w-4 h-4 text-plum-950" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Standard Agency Grid */}
      <div className="grid grid-cols-12 gap-4">
        
        {/* Photo 1: Headshot */}
        <div className="col-span-6 sm:col-span-3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-plum-900 border border-champagne-300/15 group shadow-xl">
          <Image
            src="/pallavi/avatar.jpg"
            alt="Pallavi Headshot"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] font-mono text-champagne-100 bg-plum-950/80 px-2.5 py-1 rounded border border-champagne-300/20">
            Portrait
          </div>
        </div>

        {/* Photo 2: Saree Drape */}
        <div className="col-span-6 sm:col-span-3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-plum-900 border border-champagne-300/15 group shadow-xl">
          <Image
            src="/pallavi/photo_8.jpg"
            alt="Traditional Drape"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] font-mono text-champagne-100 bg-plum-950/80 px-2.5 py-1 rounded border border-champagne-300/20">
            Heritage
          </div>
        </div>

        {/* Photo 3: Full Length Silhouette */}
        <div className="col-span-6 sm:col-span-3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-plum-900 border border-champagne-300/15 group shadow-xl">
          <Image
            src="/pallavi/photo_4.jpg"
            alt="Full Length Silhouette"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] font-mono text-champagne-100 bg-plum-950/80 px-2.5 py-1 rounded border border-champagne-300/20">
            Full Look
          </div>
        </div>

        {/* Photo 4: Profile */}
        <div className="col-span-6 sm:col-span-3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-plum-900 border border-champagne-300/15 group shadow-xl">
          <Image
            src="/pallavi/photo_10.jpg"
            alt="Profile View"
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] font-mono text-champagne-100 bg-plum-950/80 px-2.5 py-1 rounded border border-champagne-300/20">
            Profile
          </div>
        </div>

      </div>

      {/* Clean Data Bar */}
      <div className="mt-8 p-8 rounded-2xl bg-plum-900/80 border border-champagne-300/15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 text-center glass-panel shadow-2xl">
        {stats.map((s) => (
          <div key={s.label} className="border-r last:border-r-0 border-champagne-300/10 pr-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-mauve-300 font-syne font-bold block">
              {s.label}
            </span>
            <span className="font-abril text-2xl text-champagne-100 font-normal block mt-1">
              {s.imperial}
            </span>
            <span className="text-xs text-champagne-200/90 font-syne block mt-0.5">
              {s.metric}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
