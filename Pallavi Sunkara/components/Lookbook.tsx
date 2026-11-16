"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Plus, Loader2, Instagram, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EditorialPiece {
  id: string;
  title: string;
  category: "sarees" | "bridal" | "contemporary" | "beauty";
  type: "video" | "image";
  mediaSrc: string;
  posterSrc: string;
  photographer: string;
  styling: string;
  span: string;
  likes: string;
  year: string;
}

export default function Lookbook() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(false);

  const editorialPieces: EditorialPiece[] = [
    {
      id: "piece-1",
      title: "Royal Crimson South Indian Bridal Drape",
      category: "bridal",
      type: "video",
      mediaSrc: "/pallavi/reel_4.mp4",
      posterSrc: "/pallavi/reel_4_thumb.jpg",
      photographer: "Heritage Handloom Production",
      styling: "Bridal Zari & Maang Tikka",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "32.4K",
      year: "2026",
    },
    {
      id: "piece-2",
      title: "Butterfly Hair Artistry & Zari Blouse",
      category: "beauty",
      type: "image",
      mediaSrc: "/pallavi/photo_8.jpg",
      posterSrc: "/pallavi/photo_8.jpg",
      photographer: "Makeover By Sobiya (@makeupbysobiya)",
      styling: "Embroidered Maroon Velvet & Zari",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "18.9K",
      year: "2026",
    },
    {
      id: "piece-3",
      title: "Heritage Gold Silk Saree & Mogra Garland",
      category: "sarees",
      type: "image",
      mediaSrc: "/pallavi/photo_12.jpg",
      posterSrc: "/pallavi/photo_12.jpg",
      photographer: "The Aarna Studio (@the.aarnastudio)",
      styling: "Traditional South Indian Silk Drape",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "19.5K",
      year: "2026",
    },
    {
      id: "piece-4",
      title: "Temple Silk Drape & Emerald Jewels",
      category: "sarees",
      type: "video",
      mediaSrc: "/pallavi/reel_2.mp4",
      posterSrc: "/pallavi/reel_2_thumb.jpg",
      photographer: "MUA Ana Reddy (@anareddy_makeovers)",
      styling: "Soiree Hyderabad (@soiree.hyd)",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "28.3K",
      year: "2026",
    },
    {
      id: "piece-5",
      title: "Poolside Resort Summer Walk",
      category: "contemporary",
      type: "image",
      mediaSrc: "/pallavi/photo_4.jpg",
      posterSrc: "/pallavi/photo_4.jpg",
      photographer: "Casual Resort Shoot",
      styling: "Minimal White Slit Skirt & Black Tank",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "14.2K",
      year: "2026",
    },
    {
      id: "piece-6",
      title: "Wine Sequin Evening Saree",
      category: "sarees",
      type: "image",
      mediaSrc: "/pallavi/photo_10.jpg",
      posterSrc: "/pallavi/photo_10.jpg",
      photographer: "Studio Hyderabad Fashion",
      styling: "Cocktail Glamour Drape",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "16.8K",
      year: "2026",
    },
    {
      id: "piece-7",
      title: "Telugu Feature Screen Test Close-Up",
      category: "beauty",
      type: "image",
      mediaSrc: "/pallavi/photo_17.jpg",
      posterSrc: "/pallavi/photo_17.jpg",
      photographer: "South Cinema Production",
      styling: "Smokey Eyes & Dramatic Expression",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "22.1K",
      year: "2026",
    },
    {
      id: "piece-8",
      title: "Avant-Garde Silver Oxidized Look",
      category: "contemporary",
      type: "video",
      mediaSrc: "/pallavi/reel_3.mp4",
      posterSrc: "/pallavi/reel_3_thumb.jpg",
      photographer: "Creative Studio Production",
      styling: "Forehead Curls & Statement Silver",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "24.6K",
      year: "2026",
    },
    {
      id: "piece-9",
      title: "Golden Sunlight Yellow Saree Candid",
      category: "sarees",
      type: "image",
      mediaSrc: "/pallavi/photo_16.jpg",
      posterSrc: "/pallavi/photo_16.jpg",
      photographer: "Natural Sunlight Outdoor",
      styling: "Festive Silk & Candid Poise",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "17.4K",
      year: "2026",
    },
    {
      id: "piece-10",
      title: "Goa Coastal Ocean & Cliffside Breeze",
      category: "contemporary",
      type: "image",
      mediaSrc: "/pallavi/photo_26.jpg",
      posterSrc: "/pallavi/photo_26.jpg",
      photographer: "Goa Monsoon Vacation Shoot",
      styling: "Coastal Resort Dress",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "20.5K",
      year: "2026",
    },
    {
      id: "piece-11",
      title: "Natural Daylight Beauty Portrait",
      category: "beauty",
      type: "image",
      mediaSrc: "/pallavi/photo_1.jpg",
      posterSrc: "/pallavi/photo_1.jpg",
      photographer: "Portraiture Photography",
      styling: "Minimal Daylight & Candid Smile",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "15.9K",
      year: "2026",
    },
    {
      id: "piece-12",
      title: "Sculpted Glow Makeup Portfolio",
      category: "beauty",
      type: "image",
      mediaSrc: "/pallavi/photo_5.jpg",
      posterSrc: "/pallavi/photo_5.jpg",
      photographer: "Makeup By Sobiya (@makeupbysobiya)",
      styling: "Hyderabad Glam Bridal Makeup",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "25.2K",
      year: "2026",
    },
  ];

  const filteredPieces =
    selectedFilter === "all"
      ? editorialPieces
      : editorialPieces.filter((p) => p.category === selectedFilter);

  const displayedPieces = filteredPieces.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPieces.length;

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, filteredPieces.length));
      setLoading(false);
    }, 400);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setVisibleCount(6);
  };

  return (
    <section id="editorial" className="w-full py-24 px-6 md:px-12 bg-plum-950">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-mauve-300 font-syne block mb-2 font-bold">
            06 / Editorial Lookbook
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl text-champagne-100 font-normal uppercase tracking-tight">
            Curated <span className="italic font-normal text-mauve-300">Campaigns</span>
          </h2>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { label: "All Looks", value: "all" },
            { label: "Heritage Sarees", value: "sarees" },
            { label: "Bridal Couture", value: "bridal" },
            { label: "Screen & Western", value: "contemporary" },
            { label: "Beauty Close-ups", value: "beauty" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleFilterChange(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all font-syne font-semibold ${
                selectedFilter === tab.value
                  ? "bg-champagne-200 text-plum-950 shadow-lg shadow-mauve-500/10"
                  : "bg-plum-900/90 text-champagne-200 hover:text-champagne-100 border border-champagne-300/15 hover:border-mauve-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Unobstructed Images with NO Black Clutter Boxes */}
      <div className="grid grid-cols-12 gap-5">
        <AnimatePresence>
          {displayedPieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl overflow-hidden bg-plum-900 border border-champagne-300/15 group cursor-pointer shadow-2xl hover:border-mauve-400/60 transition-all duration-500 ${piece.span}`}
            >
              {/* Auto-Playing Video or High-Res Photo (Crystal Clear) */}
              {piece.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={piece.posterSrc}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
                >
                  <source src={piece.mediaSrc} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={piece.mediaSrc}
                  alt={piece.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              )}

              {/* Microscopic Transparent Category Pill at Top */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-syne uppercase tracking-[0.2em]">
                <span className="px-3.5 py-1.5 rounded-full bg-plum-950/60 backdrop-blur-md border border-champagne-300/25 text-champagne-100 font-semibold text-[11px]">
                  {piece.category}
                </span>
                <span className="text-champagne-200/90 text-xs font-mono drop-shadow">
                  {piece.year}
                </span>
              </div>

              {/* Minimalist Frosted Glass Pill - Clean Title without Covering Model or Outfit */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="p-3.5 rounded-2xl bg-plum-950/80 backdrop-blur-md border border-champagne-300/20 text-xs font-syne text-champagne-100 flex items-center justify-between shadow-xl">
                  <div className="min-w-0 pr-3">
                    <h3 className="font-semibold text-champagne-100 truncate text-sm">
                      {piece.title}
                    </h3>
                    <span className="text-[10px] text-mauve-300 block truncate mt-0.5">
                      {piece.photographer} • {piece.styling}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-champagne-200 shrink-0">
                    <Heart className="w-3.5 h-3.5 fill-mauve-400 text-mauve-400" />
                    {piece.likes}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Load More for Lookbook */}
      <div className="mt-14 flex flex-col items-center justify-center text-center space-y-4">
        {hasMore ? (
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-10 py-4 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.25em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-all font-syne shadow-2xl shadow-plum-950/80 flex items-center gap-3 disabled:opacity-75"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-plum-950" />
                <span>Loading Next Looks...</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-plum-950" />
                <span>Load More Campaign Looks (+6)</span>
              </>
            )}
          </button>
        ) : (
          <div className="p-6 rounded-2xl bg-plum-900/60 border border-champagne-300/20 max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-mauve-300 font-syne font-bold block">
              Showing All {filteredPieces.length} Curated Looks
            </span>
            <p className="text-sm text-champagne-200/90 font-syne">
              Explore 100+ daily reels, handloom pleat flows, and runway walk footage directly on Instagram.
            </p>
          </div>
        )}
      </div>

    </section>
  );
}
