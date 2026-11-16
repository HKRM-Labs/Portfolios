"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface RunwayLook {
  id: string;
  category: string;
  type: "video" | "image";
  mediaSrc: string;
  posterSrc: string;
  subtitle: string;
}

export default function ScrollRunwayFramer() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [maxScroll, setMaxScroll] = useState<number>(1200);

  // Exact pixel distance calculation so Card 1 starts 100% visible and Card 6 finishes 100% visible
  const calculateDistance = useCallback(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const lastCard = track.lastElementChild as HTMLElement | null;
      const containerWidth = track.parentElement?.clientWidth || window.innerWidth;
      const isMobile = window.innerWidth < 640;
      const rightPadding = isMobile ? 32 : 64;

      if (lastCard) {
        const lastCardOffsetRight = lastCard.offsetLeft + lastCard.offsetWidth;
        const needed = Math.max(0, lastCardOffsetRight - containerWidth + rightPadding);
        setMaxScroll(needed);
      } else {
        const needed = Math.max(0, track.scrollWidth - containerWidth + rightPadding);
        setMaxScroll(needed);
      }
    }
  }, []);

  useEffect(() => {
    calculateDistance();

    const timer1 = setTimeout(calculateDistance, 300);
    const timer2 = setTimeout(calculateDistance, 1000);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateDistance();
      });
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", calculateDistance);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", calculateDistance);
    };
  }, [calculateDistance]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.3,
    restDelta: 0.0001,
  });

  const x = useTransform(smoothProgress, [0.03, 0.78, 1.0], [0, -maxScroll, -maxScroll]);

  const looks: RunwayLook[] = [
    {
      id: "look-1",
      category: "Heritage Banarasi Saree",
      subtitle: "Ivory Silk Woven With Gold & Silver Zari",
      type: "video",
      mediaSrc: "/rohitha/reel_5.mp4",
      posterSrc: "/rohitha/reel_5_thumb.jpg",
    },
    {
      id: "look-2",
      category: "Classical Temple Heritage",
      subtitle: "South Indian Temple Jewels & Traditional Silk",
      type: "image",
      mediaSrc: "/rohitha/photo_75.jpg",
      posterSrc: "/rohitha/photo_75.jpg",
    },
    {
      id: "look-3",
      category: "Haute Couture Runway",
      subtitle: "Contemporary Grace & Atelier Poise",
      type: "video",
      mediaSrc: "/rohitha/reel_6.mp4",
      posterSrc: "/rohitha/reel_6_thumb.jpg",
    },
    {
      id: "look-4",
      category: "Royal Bridal Lehanga",
      subtitle: "Laal Ishq Crimson Silk with Heavy Gold Zari",
      type: "image",
      mediaSrc: "/rohitha/photo_83.jpg",
      posterSrc: "/rohitha/photo_83.jpg",
    },
    {
      id: "look-5",
      category: "Modern High Fashion",
      subtitle: "Sleek Black Gown & Structured Silhouette",
      type: "image",
      mediaSrc: "/rohitha/photo_61.jpg",
      posterSrc: "/rohitha/photo_61.jpg",
    },
    {
      id: "look-6",
      category: "Classical Bridal Abhinaya",
      subtitle: "Theatrical Eye Nuance & Sacred Adornments",
      type: "video",
      mediaSrc: "/rohitha/reel_7.mp4",
      posterSrc: "/rohitha/reel_7_thumb.jpg",
    },
  ];

  return (
    <section
      ref={targetRef}
      id="runway"
      className="relative h-[340vh] w-full bg-pink-50/40 border-t border-b border-pink-200/80 overflow-x-clip"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 px-4 sm:px-8 md:px-12 bg-gradient-to-b from-white/90 via-pink-50/30 to-white/90">
        
        {/* Top Minimal Strip */}
        <div className="w-full flex items-center justify-between text-xs uppercase tracking-[0.25em] font-syne text-gray-700 font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-gray-900 font-bold">02 / Runway Motion</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-pink-600 font-bold">
            <span>Rohitha Sunkara</span>
          </div>
        </div>

        {/* Dynamic Horizontal Runway Track with Expanded Grand Card Dimensions */}
        <div className="relative w-full max-w-full my-auto overflow-hidden py-4">
          <motion.div
            ref={trackRef}
            style={{ x, willChange: "transform" }}
            className="flex gap-4 sm:gap-8 items-center pl-2 pr-8 sm:pr-12 w-max"
          >
            {looks.map((look, index) => (
              <div
                key={look.id}
                className="relative flex-shrink-0 w-[82vw] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[480px] max-w-[480px] aspect-[3/4] overflow-hidden bg-white border-2 border-pink-200/90 rounded-[2rem] sm:rounded-[2.2rem] group shadow-[0_15px_45px_rgba(244,114,182,0.18)] hover:border-pink-500 transition-all duration-500"
              >
                {/* Autoplaying Video or High-Res Look */}
                {look.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={look.posterSrc}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={look.mediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={look.mediaSrc}
                    alt={look.category}
                    fill
                    sizes="(max-width: 768px) 360px, (max-width: 1200px) 440px, 480px"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Minimal Top Corner Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-syne text-gray-900 font-bold z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-pink-200 text-pink-700 shadow-sm">
                    0{index + 1} • {look.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-pink-600 text-white text-[10px]">2026</span>
                </div>

                {/* Bottom Minimal Description */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 text-xs font-syne text-gray-900 shadow-sm">
                    <span className="font-bold text-gray-900 block">{look.subtitle}</span>
                  </div>
                </div>

                {/* Subtle Hover Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500/50 rounded-3xl pointer-events-none transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Minimal Progress Bar */}
        <div className="w-full flex items-center justify-between text-xs uppercase tracking-[0.2em] font-syne text-gray-500 pt-2 border-t border-pink-200">
          <span>Scroll to Glide</span>
          <span className="text-pink-600 font-bold">01 — 06</span>
        </div>

      </div>
    </section>
  );
}
