"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Plus, Loader2, Instagram, ArrowUpRight, Clapperboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EditorialPiece {
  id: string;
  title: string;
  category: "cinema" | "sarees" | "contemporary" | "portraits";
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
      title: "Cinematic Screen Test & Dramatic Poise",
      category: "cinema",
      type: "image",
      mediaSrc: "/rohitha/photo_2.jpg",
      posterSrc: "/rohitha/photo_2.jpg",
      photographer: "Cinema Screen Test Studio",
      styling: "Theatrical Expression & Monologue Arc",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "42.8K",
      year: "2026",
    },
    {
      id: "piece-2",
      title: "Classical Bharatanatyam Temple Silk & Mudra",
      category: "sarees",
      type: "image",
      mediaSrc: "/rohitha/photo_75.jpg",
      posterSrc: "/rohitha/photo_75.jpg",
      photographer: "Classical Dance Photography",
      styling: "South Indian Temple Jewels & Traditional Silk",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "38.4K",
      year: "2026",
    },
    {
      id: "piece-3",
      title: "Laal Ishq Royal Crimson Bridal Lehanga",
      category: "sarees",
      type: "image",
      mediaSrc: "/rohitha/photo_83.jpg",
      posterSrc: "/rohitha/photo_83.jpg",
      photographer: "Bridal Atelier Collective",
      styling: "Crimson Silk with Heavy Gold Zari & Matha Patti",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "45.1K",
      year: "2026",
    },
    {
      id: "piece-4",
      title: "Aha Na Pelli Anta Vintage Bridal Headshot",
      category: "portraits",
      type: "image",
      mediaSrc: "/rohitha/photo_52.jpg",
      posterSrc: "/rohitha/photo_52.jpg",
      photographer: "Vintage Film Portraiture",
      styling: "South Indian Maang Tikka & Bridal Adornment",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "39.5K",
      year: "2026",
    },
    {
      id: "piece-5",
      title: "Haute Couture Elegance Runway Walk",
      category: "contemporary",
      type: "video",
      mediaSrc: "/rohitha/reel_6.mp4",
      posterSrc: "/rohitha/reel_6_thumb.jpg",
      photographer: "Runway Motion Stage",
      styling: "Haute Couture Atelier Silhouette",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "33.1K",
      year: "2026",
    },
    {
      id: "piece-6",
      title: "Classical Temple Headpiece & Jewels Close-Up",
      category: "portraits",
      type: "image",
      mediaSrc: "/rohitha/photo_76.jpg",
      posterSrc: "/rohitha/photo_76.jpg",
      photographer: "Heritage Craft Photography",
      styling: "Sacred Temple Adornments & Alta Delivery",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "36.7K",
      year: "2026",
    },
    {
      id: "piece-7",
      title: "Sleek Modern Black Gown & Leather Jacket",
      category: "contemporary",
      type: "image",
      mediaSrc: "/rohitha/photo_61.jpg",
      posterSrc: "/rohitha/photo_61.jpg",
      photographer: "Urban Vogue Magazine",
      styling: "Structured Modern Silhouette & Leather Contrast",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "31.9K",
      year: "2026",
    },
    {
      id: "piece-8",
      title: "Ivory Banarasi Silk Saree Standing Drape",
      category: "sarees",
      type: "image",
      mediaSrc: "/rohitha/photo_22.jpg",
      posterSrc: "/rohitha/photo_22.jpg",
      photographer: "Atelier Handlooms Hyderabad",
      styling: "Ivory Silk Woven with Gold & Silver Zari",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "34.3K",
      year: "2026",
    },
    {
      id: "piece-9",
      title: "Rich Green Brocade Silk Saree",
      category: "sarees",
      type: "image",
      mediaSrc: "/rohitha/photo_27.jpg",
      posterSrc: "/rohitha/photo_27.jpg",
      photographer: "Brocade Textile Atelier",
      styling: "Sharp, Confident & Glamorous Silk Drape",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "31.2K",
      year: "2026",
    },
    {
      id: "piece-10",
      title: "Retro 1960s Vintage Glamour",
      category: "contemporary",
      type: "image",
      mediaSrc: "/rohitha/photo_55.jpg",
      posterSrc: "/rohitha/photo_55.jpg",
      photographer: "Vintage Cinema Magazine",
      styling: "Retro Print & Sculpted Hairstyle",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "29.8K",
      year: "2026",
    },
    {
      id: "piece-11",
      title: "Golden Hour Sunlight & Floral Adornment",
      category: "portraits",
      type: "image",
      mediaSrc: "/rohitha/photo_12.jpg",
      posterSrc: "/rohitha/photo_12.jpg",
      photographer: "Natural Light Studio",
      styling: "Warm Radiance with Pink Blossom in Hair",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "27.4K",
      year: "2026",
    },
    {
      id: "piece-12",
      title: "Emerald Green Sequined Saree in Nature",
      category: "sarees",
      type: "image",
      mediaSrc: "/rohitha/photo_68.jpg",
      posterSrc: "/rohitha/photo_68.jpg",
      photographer: "Outdoor Couture Collective",
      styling: "Lush Emerald Silk Saree with Sequin Work",
      span: "col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/5]",
      likes: "32.6K",
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
    <section id="editorial" className="w-full py-24 px-6 md:px-12 bg-pink-50/30 border-b border-pink-200/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-syne block mb-2 font-bold">
            07 / Curated Looks
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl text-gray-950 font-normal uppercase tracking-tight">
            Curated <span className="italic font-normal text-pink-600">Campaigns</span> &amp; Stills
          </h2>
        </div>

        {/* Minimalist Filter Tabs in White & Pink */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {[
            { label: "All Looks", value: "all" },
            { label: "Cinema", value: "cinema" },
            { label: "Sarees", value: "sarees" },
            { label: "Couture", value: "contemporary" },
            { label: "Portraits", value: "portraits" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleFilterChange(tab.value)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.16em] transition-all font-syne font-bold ${
                selectedFilter === tab.value
                  ? "bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md shadow-pink-500/25"
                  : "bg-white text-gray-700 hover:text-pink-600 border border-pink-200 hover:border-pink-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Unobstructed Images with High-Fashion Framing */}
      <div className="grid grid-cols-12 gap-5">
        <AnimatePresence>
          {displayedPieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl overflow-hidden bg-white border-2 border-pink-200/90 group cursor-pointer shadow-sm hover:shadow-xl hover:border-pink-500 transition-all duration-500 ${piece.span}`}
            >
              {/* Auto-Playing Video or High-Res Photo */}
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

              {/* Category Pill at Top */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-syne uppercase tracking-[0.2em]">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-pink-200 text-pink-700 font-bold text-[11px] shadow-sm">
                  {piece.category}
                </span>
                <span className="text-gray-900 font-bold text-xs font-mono drop-shadow-sm px-2.5 py-1 rounded-full bg-white/80">
                  {piece.year}
                </span>
              </div>

              {/* Minimalist Frosted Glass Pill at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 text-xs font-syne text-gray-900 flex items-center justify-between shadow-md">
                  <div className="min-w-0 pr-3">
                    <h3 className="font-bold text-gray-950 truncate text-sm">
                      {piece.title}
                    </h3>
                    <span className="text-[10px] text-pink-600 block truncate mt-0.5 font-semibold">
                      {piece.photographer} • {piece.styling}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-gray-700 font-bold shrink-0">
                    <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
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
            className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs uppercase tracking-[0.25em] font-bold hover:from-pink-700 hover:to-rose-600 transition-all font-syne shadow-lg shadow-pink-500/25 flex items-center gap-3 disabled:opacity-75"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Loading Next Looks...</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-white" />
                <span>Load More Campaign Looks (+6)</span>
              </>
            )}
          </button>
        ) : (
          <div className="p-6 rounded-2xl bg-white border border-pink-200 max-w-xl mx-auto space-y-2 shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] text-pink-600 font-syne font-bold block">
              Showing All {filteredPieces.length} Curated Campaign Looks
            </span>
            <p className="text-sm text-gray-600 font-syne font-medium">
              Explore 36+ daily reels, handloom pleat flows, and screen acting footage directly on Instagram @hitaa.s.
            </p>
          </div>
        )}
      </div>

    </section>
  );
}
