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
  Sparkles,
  Clapperboard
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BentoItem {
  id: string;
  type: "reel" | "post";
  title: string;
  category: "cinema" | "saree" | "contemporary";
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

  const allBentoItems: BentoItem[] = [
    // CLUSTER 1: Heritage Banarasi & Classical Temple Silks (Shuffled from Bottom to Top)
    {
      id: "bento-1",
      type: "reel",
      title: "Ivory Banarasi Silk & Zari Motion",
      category: "saree",
      tag: "Banarasi Silk",
      mediaSrc: "/rohitha/reel_5.mp4",
      posterSrc: "/rohitha/reel_5_thumb.jpg",
      playsOrLikes: "27.3K Plays",
      baseLikes: 1240,
      permalink: "https://www.instagram.com/reel/DVlyOqlE6vU/",
      gridSpan: "col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2",
      objectPos: "object-center",
    },
    {
      id: "bento-2",
      type: "post",
      title: "Classical Bharatanatyam Temple Silk",
      category: "saree",
      tag: "Temple Silk",
      mediaSrc: "/rohitha/photo_75.jpg",
      playsOrLikes: "4.8K Likes",
      baseLikes: 4820,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-top",
    },
    {
      id: "bento-3",
      type: "post",
      title: "Laal Ishq Crimson Bridal Embroidery",
      category: "saree",
      tag: "Royal Bridal",
      mediaSrc: "/rohitha/photo_83.jpg",
      playsOrLikes: "3.6K Likes",
      baseLikes: 3640,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-4",
      type: "reel",
      title: "South Indian Classical & Bridal Grace",
      category: "cinema",
      tag: "Classical Grace",
      mediaSrc: "/rohitha/reel_7.mp4",
      posterSrc: "/rohitha/reel_7_thumb.jpg",
      playsOrLikes: "22.4K Plays",
      baseLikes: 980,
      permalink: "https://www.instagram.com/reel/DPk_AqHCao4/",
      gridSpan: "col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2",
      objectPos: "object-center",
    },
    {
      id: "bento-5",
      type: "post",
      title: "Cinematic Screen Test Close-Up",
      category: "cinema",
      tag: "Screen Test",
      mediaSrc: "/rohitha/photo_2.jpg",
      playsOrLikes: "4.1K Likes",
      baseLikes: 4120,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-6",
      type: "post",
      title: "Vintage South Indian Bridal Expression",
      category: "cinema",
      tag: "Character Still",
      mediaSrc: "/rohitha/photo_52.jpg",
      playsOrLikes: "5.3K Likes",
      baseLikes: 5310,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-top",
    },

    // CLUSTER 2: Haute Couture Walk & Modern Evening Silhouettes
    {
      id: "bento-7",
      type: "reel",
      title: "Haute Couture Walk & Atelier Poise",
      category: "contemporary",
      tag: "Runway Walk",
      mediaSrc: "/rohitha/reel_6.mp4",
      posterSrc: "/rohitha/reel_6_thumb.jpg",
      playsOrLikes: "19.8K Plays",
      baseLikes: 820,
      permalink: "https://www.instagram.com/reel/DU21i3NDea4/",
      gridSpan: "col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2",
      objectPos: "object-center",
    },
    {
      id: "bento-8",
      type: "post",
      title: "Sleek Black Gown & Leather Jacket",
      category: "contemporary",
      tag: "Modern Couture",
      mediaSrc: "/rohitha/photo_61.jpg",
      playsOrLikes: "3.2K Likes",
      baseLikes: 3250,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-9",
      type: "post",
      title: "Modern Evening Gown Silhouette",
      category: "contemporary",
      tag: "Couture Gown",
      mediaSrc: "/rohitha/photo_58.jpg",
      playsOrLikes: "3.7K Likes",
      baseLikes: 3740,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-10",
      type: "reel",
      title: "Expressive Screen Monologue Close-Up",
      category: "cinema",
      tag: "Monologue",
      mediaSrc: "/rohitha/reel_2.mp4",
      posterSrc: "/rohitha/reel_2_thumb.jpg",
      playsOrLikes: "25.4K Plays",
      baseLikes: 919,
      permalink: "https://www.instagram.com/reel/DYsLcSRBTr5/",
      gridSpan: "col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2",
      objectPos: "object-center",
    },
    {
      id: "bento-11",
      type: "post",
      title: "Ivory Banarasi Silk Standing Drape",
      category: "saree",
      tag: "Banarasi Silk",
      mediaSrc: "/rohitha/photo_22.jpg",
      playsOrLikes: "3.9K Likes",
      baseLikes: 3950,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-12",
      type: "post",
      title: "Rich Green Brocade Silk Saree",
      category: "saree",
      tag: "Brocade Silk",
      mediaSrc: "/rohitha/photo_27.jpg",
      playsOrLikes: "3.8K Likes",
      baseLikes: 3820,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },

    // CLUSTER 3: Temple Jewels, Bridal Profiles & Vintage Atelier
    {
      id: "bento-13",
      type: "post",
      title: "South Indian Temple Headpiece & Jewels",
      category: "saree",
      tag: "Temple Jewels",
      mediaSrc: "/rohitha/photo_76.jpg",
      playsOrLikes: "4.5K Likes",
      baseLikes: 4520,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-top",
    },
    {
      id: "bento-14",
      type: "post",
      title: "Laal Ishq Royal Bridal Side Profile",
      category: "saree",
      tag: "Bridal Profile",
      mediaSrc: "/rohitha/photo_84.jpg",
      playsOrLikes: "3.1K Likes",
      baseLikes: 3120,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-15",
      type: "post",
      title: "Emerald Green Sequined Saree in Nature",
      category: "saree",
      tag: "Emerald Drape",
      mediaSrc: "/rohitha/photo_68.jpg",
      playsOrLikes: "3.4K Likes",
      baseLikes: 3410,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-16",
      type: "post",
      title: "Retro 1960s Vintage Glamour",
      category: "contemporary",
      tag: "Retro Glamour",
      mediaSrc: "/rohitha/photo_55.jpg",
      playsOrLikes: "2.8K Likes",
      baseLikes: 2840,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-17",
      type: "post",
      title: "Vintage 1920s Ruffled Gown",
      category: "contemporary",
      tag: "1920s Vintage",
      mediaSrc: "/rohitha/photo_71.jpg",
      playsOrLikes: "3.9K Likes",
      baseLikes: 3950,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
      gridSpan: "col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      objectPos: "object-[center_20%]",
    },
    {
      id: "bento-18",
      type: "post",
      title: "Golden Hour Warm Sunlight & Adornment",
      category: "cinema",
      tag: "Natural Glow",
      mediaSrc: "/rohitha/photo_12.jpg",
      playsOrLikes: "5.1K Likes",
      baseLikes: 5120,
      permalink: "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
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
    <section id="gallery" className="w-full py-24 px-4 sm:px-8 md:px-12 bg-white border-t border-b border-pink-200/80">
      
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-syne block mb-2 font-bold flex items-center gap-1.5">
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>08 / Bento Vault</span>
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl text-gray-950 font-normal uppercase tracking-tight">
            Curated <span className="italic font-normal text-pink-600">Bento</span> Vault
          </h2>
        </div>

        {/* Filter Pills in White & Pink */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-syne text-[10px] sm:text-xs uppercase tracking-wider">
          {[
            { id: "all", label: "All" },
            { id: "cinema", label: "Screen & Acting" },
            { id: "reels", label: "Reels" },
            { id: "saree", label: "Sarees" },
            { id: "contemporary", label: "Couture" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedFilter(tab.id);
                setVisibleCount(6);
              }}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 font-bold ${
                selectedFilter === tab.id
                  ? "bg-gradient-to-r from-pink-600 to-rose-500 text-white border-transparent shadow-md shadow-pink-500/20"
                  : "bg-pink-50 text-gray-700 border-pink-200 hover:border-pink-400 hover:text-pink-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tailored High-Fashion Bento Grid */}
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
                  className={`relative rounded-3xl overflow-hidden bg-white border-2 border-pink-200/90 group shadow-sm hover:shadow-xl hover:border-pink-500 transition-all duration-500 ${item.gridSpan} ${
                    item.type === "reel" 
                      ? "min-h-[580px] sm:min-h-0 aspect-[9/16] lg:aspect-auto" 
                      : "aspect-[4/5] sm:aspect-auto min-h-[350px] sm:min-h-0"
                  }`}
                >

                {/* Media Container */}
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
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 flex items-center justify-center text-pink-700 hover:bg-pink-600 hover:text-white transition-colors shadow-md"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-pink-600" />}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none group-hover:from-black/90 transition-colors duration-300" />

                {/* Top Corner Pill */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 text-xs font-syne uppercase tracking-wider pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-pink-200 text-pink-700 font-bold text-[10px] flex items-center gap-1.5 shadow-md">
                    {item.type === "reel" ? (
                      <>
                        <Film className="w-3 h-3 text-pink-600" />
                        <span>9:16 REEL</span>
                      </>
                    ) : item.category === "cinema" ? (
                      <>
                        <Clapperboard className="w-3 h-3 text-pink-600" />
                        <span>CINEMA</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 text-pink-600" />
                        <span>EDITORIAL</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Bottom Minimalist Glass Pill */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 flex items-center justify-between text-xs font-syne text-gray-900 shadow-md">
                    <div className="min-w-0 pr-2">
                      <h3 className="font-bold text-gray-950 truncate text-xs sm:text-sm">
                        {item.title}
                      </h3>
                      <span className="text-[10px] text-pink-600 block truncate font-semibold">
                        {item.playsOrLikes}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={(e) => handleToggleLike(item.id, e)}
                        className="w-7 h-7 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center hover:bg-pink-100 transition-colors"
                        title="Like Post"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-transform ${
                            isLiked ? "fill-pink-600 text-pink-600 scale-110" : "text-gray-600"
                          }`}
                        />
                      </button>

                      <a
                        href={item.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
                        title="View on Instagram"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <div className="mt-14 flex flex-col items-center justify-center text-center space-y-4">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs uppercase tracking-[0.25em] font-bold hover:from-pink-700 hover:to-rose-600 transition-all font-syne shadow-lg shadow-pink-500/25 flex items-center gap-3 disabled:opacity-75"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Loading Next Bento Looks...</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 text-white" />
                  <span>Load More Bento Media (+6)</span>
                </>
              )}
            </button>
          ) : (
            <div className="p-6 rounded-2xl bg-pink-50/60 border border-pink-200 max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-pink-600 font-syne font-bold block">
                Showing All {filteredItems.length} Bento Vault Looks
              </span>
              <p className="text-sm text-gray-600 font-syne font-medium">
                Watch full reels and new lookbook campaigns directly on @hitaa.s Instagram.
              </p>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
