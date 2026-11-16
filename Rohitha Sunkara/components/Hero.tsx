"use client";

import { useState, useRef } from "react";
import { ArrowDown, Download, Instagram, Volume2, VolumeX, Sparkles, Clapperboard } from "lucide-react";
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
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-8 px-6 md:px-12 overflow-hidden bg-white">
      
      {/* 
        Full-Screen Background Video of Rohitha:
        Crystal-clear cinematic playback with 100% visibility
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/rohitha/reel_5_thumb.jpg"
          className="w-full h-full object-cover object-[center_20%] scale-100 transition-all duration-700 opacity-100"
        >
          <source src="/rohitha/reel_5.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top Bar: Film Casting Status Badge & Sound Toggle */}
      <div className="relative z-10 w-full flex items-center justify-between pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 text-xs font-syne text-gray-900 font-semibold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-pink-700 font-bold">Open for Films</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-600 text-[11px]">Hyderabad</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            aria-label="Toggle Hero Video Sound"
            className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 text-xs font-syne text-gray-800 flex items-center gap-1.5 hover:bg-pink-50 transition-colors shadow-sm"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-pink-600" />
                <span className="hidden sm:inline text-[11px] uppercase tracking-wider font-semibold">Sound Off</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-pink-600" />
                <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-pink-700 font-bold">Sound On</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Center Editorial Cover Statement */}
      <div className="relative z-10 w-full my-auto py-8 flex flex-col items-center text-center">
        
        {/* Voluptuous Abril Curves Display Name */}
        <h1 className="font-abril text-[14vw] sm:text-[11vw] md:text-[9.5vw] font-normal tracking-[0.01em] text-gray-950 leading-[0.88] select-none uppercase drop-shadow-[0_4px_12px_rgba(255,255,255,0.8)]">
          ROHITHA <span className="italic font-normal text-pink-600">SUNKARA</span>
        </h1>

        {/* Clean Minimal Sub-Headline */}
        <p className="mt-2.5 sm:mt-3 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-pink-200/50 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-gray-900 font-syne font-bold shadow-sm">
          Film Actress &bull; Haute Couture
        </p>

        {/* Crisp Minimal Action Controls - Compact & Beautiful on Mobile */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3.5 mt-6 sm:mt-8 w-full max-w-lg px-2">
          <a
            href="#acting"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#acting");
            }}
            className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold hover:from-pink-700 hover:to-rose-600 transition-all font-syne shadow-md shadow-pink-500/25 flex items-center justify-center gap-1.5"
          >
            <Clapperboard className="w-3.5 h-3.5 text-white" />
            <span>Film Roles</span>
          </a>
          
          <button
            onClick={onOpenCompCard}
            className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/95 border border-pink-300 text-pink-700 text-[11px] sm:text-xs uppercase tracking-[0.16em] hover:bg-pink-50 hover:border-pink-500 transition-all flex items-center justify-center gap-1.5 backdrop-blur-md font-syne font-bold shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-pink-600" />
            <span>Comp Card</span>
          </button>

          <a
            href="#reels"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#reels");
            }}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-pink-50/90 border border-pink-200 text-gray-800 text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold hover:bg-pink-100 transition-all flex items-center justify-center gap-1.5 shadow-sm font-syne"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Reels</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar: Live Social Ticker & Scroll Anchor */}
      <div className="relative z-10 w-full flex items-end justify-between border-t border-pink-200/60 pt-3 text-xs text-gray-700 font-syne">
        <a
          href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-200/60 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gray-800 hover:text-pink-600 transition-colors font-semibold shadow-sm"
        >
          <Instagram className="w-3.5 h-3.5 text-pink-600" />
          <span>@hitaa.s</span>
        </a>

        <a
          href="#runway"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#runway");
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-200/60 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-pink-600 hover:text-pink-800 transition-colors cursor-pointer font-bold shadow-sm"
        >
          <span>Runway</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-pink-600" />
        </a>
      </div>
    </section>
  );
}
