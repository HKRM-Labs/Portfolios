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
        // Precise immutable offset from track start to the right edge of Card 6
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

  // Inertial spring smoothing for butter-smooth gliding across scroll wheel clicks
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.3,
    restDelta: 0.0001,
  });

  // Hold at progress 0 -> 0.03 (Card 1 steady), glide to -maxScroll by 0.78, and hold until 1.0 (Card 6 completely framed before unpinning)
  const x = useTransform(smoothProgress, [0.03, 0.78, 1.0], [0, -maxScroll, -maxScroll]);

  // All looks have the EXACT SAME UNIFORM FIXED RATIO (3:4 Portrait) with accurate titles and top framing
  const looks: RunwayLook[] = [
    {
      id: "look-1",
      category: "Temple Silk Drape",
      subtitle: "Gold Saree & Emerald Choker",
      type: "video",
      mediaSrc: "/pallavi/reel_2.mp4",
      posterSrc: "/pallavi/reel_2_thumb.jpg",
    },
    {
      id: "look-2",
      category: "Hair Artistry",
      subtitle: "Butterfly Clips & Zari Blouse",
      type: "image",
      mediaSrc: "/pallavi/photo_8.jpg",
      posterSrc: "/pallavi/photo_8.jpg",
    },
    {
      id: "look-3",
      category: "Royal Bridal Reel",
      subtitle: "Crimson Silk & Maang Tikka",
      type: "video",
      mediaSrc: "/pallavi/reel_4.mp4",
      posterSrc: "/pallavi/reel_4_thumb.jpg",
    },
    {
      id: "look-4",
      category: "Heritage Temple Saree",
      subtitle: "Mogra Garland & Gold Jhumkas",
      type: "image",
      mediaSrc: "/pallavi/photo_12.jpg",
      posterSrc: "/pallavi/photo_12.jpg",
    },
    {
      id: "look-5",
      category: "Cocktail Couture",
      subtitle: "Wine Sequin Evening Saree",
      type: "image",
      mediaSrc: "/pallavi/photo_10.jpg",
      posterSrc: "/pallavi/photo_10.jpg",
    },
    {
      id: "look-6",
      category: "Avant-Garde Cinema",
      subtitle: "Silver Oxidized Screen Look",
      type: "video",
      mediaSrc: "/pallavi/reel_3.mp4",
      posterSrc: "/pallavi/reel_3_thumb.jpg",
    },
  ];

  return (
    <section
      ref={targetRef}
      id="runway"
      className="relative h-[340vh] w-full bg-plum-950 border-t border-b border-champagne-300/15"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 px-4 sm:px-8 md:px-12">
        
        {/* Top Minimal Strip */}
        <div className="w-full flex items-center justify-between text-xs uppercase tracking-[0.25em] font-syne text-champagne-300/90 font-medium">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-mauve-400 animate-pulse" />
            <span className="text-champagne-100 font-bold">02 / Runway Strip • Grand 3:4 Motion Stage</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-champagne-300/80">
            <span>Scroll vertically to glide sequence 01 to 06</span>
            <span>•</span>
            <span className="text-mauve-300 font-bold">Pallavi Sunkara</span>
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
                className="relative flex-shrink-0 w-[82vw] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[480px] max-w-[480px] aspect-[3/4] overflow-hidden bg-plum-900 border border-champagne-300/20 rounded-[2rem] sm:rounded-[2.2rem] group shadow-[0_25px_60px_rgba(0,0,0,0.85)] hover:border-mauve-400 transition-all duration-500"
              >
                {/* Autoplaying Video or High-Res Look (Cleanly framed in 3:4) */}
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
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-syne text-champagne-100 font-semibold z-10">
                  <span className="px-3 py-1 rounded-full bg-plum-950/75 backdrop-blur-md border border-champagne-300/30 text-champagne-100">
                    0{index + 1} • {look.category}
                  </span>
                  <span className="text-mauve-300 text-xs">2026</span>
                </div>

                {/* Bottom Minimal Description */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="px-3.5 py-2 rounded-2xl bg-plum-950/80 backdrop-blur-md border border-champagne-300/20 text-xs font-syne text-champagne-100">
                    <span className="font-semibold block">{look.subtitle}</span>
                  </div>
                </div>

                {/* Subtle Hover Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-mauve-400/40 rounded-3xl pointer-events-none transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Minimal Progress Bar */}
        <div className="w-full flex items-center justify-between text-xs uppercase tracking-[0.2em] font-syne text-champagne-300/70 pt-2 border-t border-champagne-300/15">
          <span>Scroll down ⤸ to glide sequence</span>
          <span className="text-champagne-100 font-semibold">Sequence 01 to 06</span>
        </div>

      </div>
    </section>
  );
}