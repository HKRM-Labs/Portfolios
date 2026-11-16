"use client";

import { useState, useRef } from "react";
import { ArrowDown, Download, Instagram, Volume2, VolumeX, Sparkles } from "lucide-react";
import { useLenis } from "lenis/react";

interface HeroProps {
  onOpenCompCard: () => void;
}

export default function Hero({ onOpenCompCard }: HeroProps) {
  const lenis = useLenis();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleScrollTo = (targetId: string) => {
    if (lenis) {
      lenis.scrollTo(targetId, {
        offset: 0,
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const el = document.querySelector(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 overflow-hidden bg-plum-950">
      
      {/* 
        Full-Screen Background Video:
        Positioned with object-[center_15%] / object-[center_18%] so Pallavi's head, face, eyes, and walk 
        are shifted up into the sweet spot without being cropped or obscured!
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/pallavi/reel_1_thumb.jpg"
          className="w-full h-full object-cover object-[center_18%] sm:object-[center_15%] scale-100 transition-all duration-700"
        >
          <source src="/pallavi/reel_1.mp4" type="video/mp4" />
        </video>

        {/* 
          Soft Vignette Overlay:
          Darkens top for navbar legibility and bottom for contrast, leaving the center crystal clear
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-transparent to-plum-950/50 pointer-events-none" />
        
        {/* Subtle radial focus vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-plum-950/60 pointer-events-none" />
      </div>

      {/* Top Bar: Minimal Status Badge & Sound Toggle */}
      <div className="relative z-10 w-full flex items-center justify-between pt-2">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-plum-950/75 backdrop-blur-md border border-champagne-300/25 text-xs font-syne text-champagne-100 font-medium shadow-md">
          <span className="w-2 h-2 rounded-full bg-mauve-400 animate-pulse" />
          <span>Actress &amp; Fashion Model • Hyderabad</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            aria-label="Toggle Hero Video Sound"
            className="px-3.5 py-1.5 rounded-full bg-plum-950/75 backdrop-blur-md border border-champagne-300/30 text-xs font-syne text-champagne-100 flex items-center gap-2 hover:bg-mauve-500 transition-colors shadow-md"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-champagne-200" />
                <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Unmute Video</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-apricot-400" />
                <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-apricot-300">Sound Playing</span>
              </>
            )}
          </button>

          <div className="hidden md:flex items-center gap-4 text-xs font-syne uppercase tracking-[0.2em] text-champagne-200/90 drop-shadow">
            <span>Height 5&apos;7&quot; (170 cm)</span>
            <span>•</span>
            <span>Hyd &amp; Pan-India</span>
          </div>
        </div>
      </div>

      {/* Center Editorial Cover Statement */}
      <div className="relative z-10 w-full my-auto py-12 flex flex-col items-center text-center">
        
        {/* Voluptuous Abril Curves Display Name */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum-950/70 border border-champagne-300/20 text-xs font-syne uppercase tracking-[0.25em] text-mauve-300 font-semibold mb-6 backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-apricot-400" />
          <span>Vogue Portfolio • 2026</span>
        </div>

        <h1 className="font-abril text-[14vw] sm:text-[12vw] md:text-[10vw] font-normal tracking-[0.01em] text-champagne-100 leading-[0.88] select-none uppercase drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]">
          PALLAVI <span className="italic font-normal text-mauve-300">SUNKARA</span>
        </h1>

        {/* Clean Sub-Headline */}
        <p className="mt-6 text-sm sm:text-base uppercase tracking-[0.28em] text-champagne-100 font-syne font-medium max-w-2xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          Haute Couture • Commercial Screen Acting • Heritage Drapes
        </p>

        {/* Verified Quick Stats Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 text-xs font-syne text-champagne-100">
          <span className="px-3.5 py-1.5 rounded-xl bg-plum-950/75 border border-champagne-300/25 backdrop-blur-md shadow-md">
            Height: <strong className="text-mauve-300">5&apos;7&quot; (170 cm)</strong>
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-plum-950/75 border border-champagne-300/25 backdrop-blur-md shadow-md">
            Discipline: <strong className="text-mauve-300">Model &amp; Actress</strong>
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-plum-950/75 border border-champagne-300/25 backdrop-blur-md shadow-md">
            Base: <strong className="text-mauve-300">Hyd / Knl</strong>
          </span>
        </div>

        {/* Crisp Action Controls - Exactly 3 Clean Buttons, Mobile Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 w-full max-w-2xl px-4 sm:px-0">
          <a
            href="#runway"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#runway");
            }}
            className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.2em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-all font-syne shadow-xl shadow-plum-950/60"
          >
            Explore Runway
          </a>
          
          <button
            onClick={onOpenCompCard}
            className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-plum-950/80 border border-champagne-300/40 text-champagne-100 text-xs uppercase tracking-[0.2em] hover:bg-champagne-200 hover:text-plum-950 transition-all flex items-center justify-center gap-2 backdrop-blur-md font-syne font-semibold shadow-lg shadow-plum-950/40"
          >
            <Download className="w-4 h-4 text-mauve-300" />
            <span>Digital Comp Card</span>
          </button>

          <a
            href="/Pallavi_Sunkara_Portfolio.pdf"
            download="Pallavi_Sunkara_Editorial_Portfolio.pdf"
            className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-plum-900/90 border border-mauve-400/50 text-champagne-100 text-xs uppercase tracking-[0.2em] font-bold hover:bg-champagne-200 hover:text-plum-950 transition-all flex items-center justify-center gap-2 shadow-xl shadow-plum-950/60 font-syne"
          >
            <Download className="w-4 h-4 text-apricot-400" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar: Live Social Ticker & Scroll Anchor */}
      <div className="relative z-10 w-full flex items-end justify-between border-t border-champagne-300/15 pt-4 text-xs text-champagne-300/80 font-syne">
        <a
          href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne-200 hover:text-mauve-300 transition-colors drop-shadow"
        >
          <Instagram className="w-4 h-4 text-mauve-400" />
          <span>@pallaviiii124 • Verified Profile</span>
        </a>

        <a
          href="#runway"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#runway");
          }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-200 hover:text-mauve-300 transition-colors cursor-pointer drop-shadow"
        >
          <span>Scroll Runway</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-mauve-400" />
        </a>
      </div>
    </section>
  );
}