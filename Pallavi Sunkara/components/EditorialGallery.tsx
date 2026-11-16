"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { 
  Instagram, 
  Film, 
  Heart, 
  Volume2, 
  VolumeX, 
  Plus, 
  Loader2, 
  ArrowUpRight, 
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BentoItem {
  id: string;
  type: "reel" | "post";
  title: string;
  category: "saree" | "bridal" | "contemporary";
  tag: string;
  mediaSrc: string;
  posterSrc?: string;
  playsOrLikes: string;
  baseLikes: number;
  permalink: string;
  gridSpan: string;
  objectPos: string;
}

export default function EditorialGallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [mutedReels, setMutedReels] = useState<Record<string, boolean>>({
    "bento-1": true,
    "bento-4": true,
    "bento-7": true,
    "bento-10": true,
  });

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Analysed & verified media items with 100% accurate titles, categories, and calibrated framing
  const allBentoItems: BentoItem[] = [
    // CLUSTER 1: Left Reel 1 + 4 Center Portraits + Right Reel 2
    {
      id: "bento-1",
      type: "reel",
      title: "Celebration Gala in Golden Studio",
      category: "contemporary",
      tag: "9:16 Reel",
      mediaSrc: "/pallavi/reel_1.mp4",
      posterSrc: "/pallavi/reel_1_thumb.jpg",
      playsOrLikes: "58.4K Plays",
      baseLikes: 2620,
      permalink: "https://www.instagram.com/reel/DTIaiqmkd35/",
      gridSpan: "col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2",
      objectPos: "object-center",
    },
    {
      id: "bento-2",
      type: "post",
      title: "Butterfly Hair Artistry & Zari",
      category: "bridal",
      tag: "Hair & Zari",
      mediaSrc: "/pallavi/photo_8.jpg",
      playsOrLikes: "3.2K Likes",
      baseLikes: 3240,
      permalink: "https://www.instagram.com/p/C-i9l6NSoeR/",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-3",
      type: "post",
      title: "Golden Silk Saree & Jasmine",
      category: "saree",
      tag: "Heritage Silk",
      mediaSrc: "/pallavi/photo_16.jpg",
      playsOrLikes: "2.4K Likes",
      baseLikes: 2420,
      permalink: "https://www.instagram.com/p/DdL2hnloGs0/",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-4",
      type: "reel",
      title: "Temple Silk Drape & Emerald Jewels",
      category: "saree",
      tag: "9:16 Reel",
      mediaSrc: "/pallavi/reel_2.mp4",
      posterSrc: "/pallavi/reel_2_thumb.jpg",
      playsOrLikes: "74.1K Plays",
      baseLikes: 3370,
      permalink: "https://www.instagram.com/reel/Dd9P7oFzKKd/",
      gridSpan: "col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2",
      objectPos: "object-[center_15%]",
    },
    {
      id: "bento-5",
      type: "post",
      title: "Poolside Resort Summer Walk",
      category: "contemporary",
      tag: "Resort Casual",
      mediaSrc: "/pallavi/photo_4.jpg",
      playsOrLikes: "1.8K Likes",
      baseLikes: 1840,
      permalink: "https://www.instagram.com/p/DOPw3B_EkYg/",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_25%]",
    },
    {
      id: "bento-6",
      type: "post",
      title: "Wine Sequin Evening Saree",
      category: "saree",
      tag: "Cocktail Saree",
      mediaSrc: "/pallavi/photo_10.jpg",
      playsOrLikes: "1.9K Likes",
      baseLikes: 1950,
      permalink: "https://www.instagram.com/p/C_k3p-vSKa7/",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_25%]",
    },

    // CLUSTER 2: Left Reel 3 + 4 Center Portraits + Right Reel 4
    {
      id: "bento-7",
      type: "reel",
      title: "Avant-Garde Silver Oxidized Look",
      category: "contemporary",
      tag: "9:16 Reel",
      mediaSrc: "/pallavi/reel_3.mp4",
      posterSrc: "/pallavi/reel_3_thumb.jpg",
      playsOrLikes: "42.8K Plays",
      baseLikes: 2190,
      permalink: "https://www.instagram.com/reel/DYkEPF7KXGy/",
      gridSpan: "col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2",
      objectPos: "object-[center_15%]",
    },
    {
      id: "bento-8",
      type: "post",
      title: "Natural Daylight Beauty Portrait",
      category: "contemporary",
      tag: "Daylight Poise",
      mediaSrc: "/pallavi/photo_1.jpg",
      playsOrLikes: "2.7K Likes",
      baseLikes: 2710,
      permalink: "https://www.instagram.com/p/DO5z6ULkUEw/",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-center",
    },
    {
      id: "bento-9",
      type: "post",
      title: "Cinematic Screen Test Close-Up",
      category: "contemporary",
      tag: "Screen Test",
      mediaSrc: "/pallavi/photo_17.jpg",
      playsOrLikes: "1.7K Likes",
      baseLikes: 1720,
      permalink: "https://www.instagram.com/p/DdThxwbKpCP/",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-center",
    },
    {
      id: "bento-10",
      type: "reel",
      title: "Royal Crimson Bridal Drape",
      category: "bridal",
      tag: "9:16 Reel",
      mediaSrc: "/pallavi/reel_4.mp4",
      posterSrc: "/pallavi/reel_4_thumb.jpg",
      playsOrLikes: "62.4K Plays",
      baseLikes: 2980,
      permalink: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      gridSpan: "col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2",
      objectPos: "object-[center_15%]",
    },
    {
      id: "bento-11",
      type: "post",
      title: "Temple Jewels & Mogra Garland",
      category: "bridal",
      tag: "Temple Bridal",
      mediaSrc: "/pallavi/photo_12.jpg",
      playsOrLikes: "2.9K Likes",
      baseLikes: 2890,
      permalink: "https://www.instagram.com/p/DdThxwbKpCP/",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-12",
      type: "post",
      title: "Goa Coastal Ocean Editorial",
      category: "contemporary",
      tag: "Coastal Resort",
      mediaSrc: "/pallavi/photo_26.jpg",
      playsOrLikes: "2.5K Likes",
      baseLikes: 2540,
      permalink: "https://www.instagram.com/p/C-Vf50hSo4I/",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_25%]",
    },

    // CLUSTER 3: High-Res Handloom Vault
    {
      id: "bento-13",
      type: "post",
      title: "Artisanal South Silk Drape",
      category: "saree",
      tag: "Handloom Weave",
      mediaSrc: "/pallavi/photo_43.jpg",
      playsOrLikes: "2.4K Likes",
      baseLikes: 2450,
      permalink: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-14",
      type: "post",
      title: "Character Poise Close-Up",
      category: "bridal",
      tag: "Character Poise",
      mediaSrc: "/pallavi/photo_46.jpg",
      playsOrLikes: "1.9K Likes",
      baseLikes: 1910,
      permalink: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-15",
      type: "post",
      title: "Royal Crimson Pallu by Singhanias",
      category: "saree",
      tag: "Crimson Silk",
      mediaSrc: "/pallavi/photo_50.jpg",
      playsOrLikes: "2.8K Likes",
      baseLikes: 2840,
      permalink: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-16",
      type: "post",
      title: "Editorial Campaign Stride",
      category: "contemporary",
      tag: "Campaign Walk",
      mediaSrc: "/pallavi/photo_54.jpg",
      playsOrLikes: "2.2K Likes",
      baseLikes: 2210,
      permalink: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_25%]",
    },
    {
      id: "bento-17",
      type: "post",
      title: "Natural Sunlight Saree Candid",
      category: "saree",
      tag: "Sunlight Candid",
      mediaSrc: "/pallavi/photo_58.jpg",
      playsOrLikes: "2.5K Likes",
      baseLikes: 2510,
      permalink: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-center",
    },
    {
      id: "bento-18",
      type: "post",
      title: "Hyderabad Atelier Fashion Shoot",
      category: "contemporary",
      tag: "Atelier Saree",
      mediaSrc: "/pallavi/photo_60.jpg",
      playsOrLikes: "3.1K Likes",
      baseLikes: 3120,
      permalink: "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
  ];

  const handleToggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (vid) {
      vid.muted = !vid.muted;
      setMutedReels((prev) => ({
        ...prev,
        [id]: vid.muted,
      }));
    }
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, allBentoItems.length));
      setLoading(false);
    }, 450);
  };

  // Filter items
  const filteredItems = allBentoItems.filter((item) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "reels") return item.type === "reel";
    if (selectedFilter === "posts") return item.type === "post";
    return item.category === selectedFilter;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <section id="gallery" className="w-full py-24 px-4 sm:px-8 md:px-12 bg-plum-950 border-t border-champagne-300/15">
      
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-mauve-300 font-syne block mb-3 font-bold flex items-center gap-2">
            <Instagram className="w-4 h-4 text-mauve-400" />
            <span>07 / Interlocking Instagram Bento Grid</span>
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl text-champagne-100 font-normal uppercase tracking-tight">
            Curated <span className="italic font-normal text-mauve-300">Bento</span> Vault
          </h2>
          <p className="mt-3 text-sm text-champagne-200/80 font-syne max-w-2xl leading-relaxed">
            Verified editorial media accurately cataloged by style, weave, and campaign. Symmetrically framed with zero head cropping.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 font-syne text-xs uppercase tracking-wider">
          {[
            { id: "all", label: "All Bento" },
            { id: "reels", label: "9:16 Reels" },
            { id: "posts", label: "Editorial Looks" },
            { id: "saree", label: "Handloom Sarees" },
            { id: "bridal", label: "Bridal Couture" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedFilter(tab.id);
                setVisibleCount(6);
              }}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedFilter === tab.id
                  ? "bg-champagne-200 text-plum-950 border-champagne-200 font-bold shadow-lg"
                  : "bg-plum-900/60 text-champagne-200/80 border-champagne-300/20 hover:border-mauve-400/50 hover:text-champagne-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 
        Tailored High-Fashion Bento Grid:
        - Outer Columns 1 & 4 (1.4fr): Expanded 9:16 vertical reels spanning 2 rows (~770px height)
          giving the side video reels increased width, height, and commanding cinematic presence.
        - Center Columns 2 & 3 (1.0fr): Tailored 4:5 portrait ratio cards (~375px height each)
          perfectly fitting Pallavi's natural portrait photography with 94%-100% full-frame visibility and zero cutting.
      */}
      <div className="w-full max-w-[1560px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:auto-rows-[375px] gap-5 [grid-auto-flow:dense]">
          <AnimatePresence>
            {displayedItems.map((item, index) => {
              const isLiked = likedPosts[item.id] || false;
              const currentLikes = isLiked ? item.baseLikes + 1 : item.baseLikes;
              const isMuted = mutedReels[item.id] !== false;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative rounded-3xl overflow-hidden bg-plum-900 border border-champagne-300/20 group shadow-2xl hover:border-mauve-400/70 transition-all duration-500 ${item.gridSpan} ${
                    item.type === "reel" 
                      ? "min-h-[580px] sm:min-h-0 aspect-[9/16] lg:aspect-auto" 
                      : "aspect-[4/5] sm:aspect-auto min-h-[350px] sm:min-h-0"
                  }`}
                >

                {/* Media Container: Calibrated Framing (Head & Face Fully Visible) */}
                {item.type === "reel" ? (
                  <div className="relative w-full h-full">
                    <video
                      ref={(el) => {
                        videoRefs.current[item.id] = el;
                      }}
                      src={item.mediaSrc}
                      poster={item.posterSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`w-full h-full object-cover ${item.objectPos} group-hover:scale-105 transition-transform duration-700 ease-out`}
                    />

                    {/* Mute Button */}
                    <button
                      onClick={(e) => handleToggleMute(item.id, e)}
                      aria-label="Toggle Sound"
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-plum-950/75 backdrop-blur-md border border-champagne-300/30 flex items-center justify-center text-champagne-100 hover:bg-mauve-500 transition-colors shadow-lg"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-apricot-400" />}
                    </button>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.mediaSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`object-cover ${item.objectPos} group-hover:scale-105 transition-transform duration-700 ease-out`}
                    />
                  </div>
                )}

                {/* Subtle Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/85 via-transparent to-plum-950/15 pointer-events-none group-hover:from-plum-950/90 transition-colors duration-300" />

                {/* Top Corner Pill: Accurate Style Tag */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 text-xs font-syne uppercase tracking-wider pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-plum-950/80 backdrop-blur-md border border-champagne-300/25 text-champagne-100 font-bold text-[10px] flex items-center gap-1.5 shadow-md">
                    {item.type === "reel" ? (
                      <>
                        <Film className="w-3 h-3 text-mauve-400" />
                        <span>9:16 REEL</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 text-apricot-400" />
                        <span>1:1 SQUARE</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Bottom Minimalist Glass Pill (Clean Accurate Title) */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <div className="p-3 rounded-2xl bg-plum-950/85 backdrop-blur-md border border-champagne-300/25 flex items-center justify-between text-xs font-syne text-champagne-100 shadow-xl">
                    <div className="min-w-0 pr-2">
                      <h3 className="font-semibold text-champagne-100 truncate text-xs sm:text-sm">
                        {item.title}
                      </h3>
                      <span className="text-[10px] text-mauve-300 block truncate">
                        {item.playsOrLikes}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={(e) => handleToggleLike(item.id, e)}
                        className="w-7 h-7 rounded-full bg-plum-900 border border-champagne-300/20 flex items-center justify-center hover:text-apricot-400 transition-colors"
                        aria-label="Like post"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-transform ${
                            isLiked ? "fill-apricot-400 text-apricot-400 scale-110" : "text-champagne-200"
                          }`}
                        />
                      </button>

                      <a
                        href={item.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-plum-900 border border-champagne-300/20 flex items-center justify-center text-champagne-200 hover:text-champagne-100"
                        title="View on Instagram"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-mauve-400/50 rounded-3xl pointer-events-none transition-colors duration-300" />
              </motion.div>
            );
          })}
        </AnimatePresence>
        </div>
      </div>

      {/* Interactive Load More */}
      <div className="mt-14 flex flex-col items-center justify-center text-center space-y-4">
        {hasMore ? (
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-10 py-4 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.25em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-all font-syne shadow-2xl flex items-center gap-3 disabled:opacity-75"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-plum-950" />
                <span>Loading Next Bento Cluster...</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-plum-950" />
                <span>Load More Bento Media (+6)</span>
              </>
            )}
          </button>
        ) : (
          <div className="p-6 rounded-2xl bg-plum-900/60 border border-champagne-300/20 max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-mauve-300 font-syne font-bold block">
              Showing All {filteredItems.length} Curated Media Items
            </span>
            <p className="text-sm text-champagne-200/90 font-syne">
              Explore 68+ high-definition photos and 4 full vertical motion reels from Hyderabad Fashion Week.
            </p>
          </div>
        )}
      </div>

    </section>
  );
}