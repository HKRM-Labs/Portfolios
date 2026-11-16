"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { 
  Play, 
  Volume2, 
  VolumeX, 
  Heart, 
  MessageCircle, 
  Share2, 
  ArrowUpRight, 
  Film, 
  Check, 
  Instagram, 
  QrCode, 
  Sparkles,
  Clapperboard
} from "lucide-react";

interface ReelItem {
  id: string;
  title: string;
  videoSrc: string;
  posterSrc: string;
  plays: string;
  likes: number;
  comments: number;
  audio: string;
  location: string;
  permalink: string;
  category?: "dialogue" | "jewelry";
  badge?: string;
}

export default function ReelsShowcase() {
  const [playingState, setPlayingState] = useState<Record<string, boolean>>({
    "reel-5": true,
    "reel-7": true,
    "reel-6": true,
    "reel-2": true,
    "reel-8": true,
    "clip-dubbing": true,
    "clip-director": true,
    "clip-jiohotstar": true,
    "clip-laal-ishq": true,
  });
  const [mutedState, setMutedState] = useState<Record<string, boolean>>({
    "reel-5": true,
    "reel-7": true,
    "reel-6": true,
    "reel-2": true,
    "reel-8": true,
    "clip-dubbing": true,
    "clip-director": true,
    "clip-jiohotstar": true,
    "clip-laal-ishq": true,
  });
  const [likedState, setLikedState] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [qrCopied, setQrCopied] = useState(false);
  const [showAllReels, setShowAllReels] = useState(true);
  const [archiveFilter, setArchiveFilter] = useState<"all" | "dialogue" | "jewelry">("all");

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const featuredReels: ReelItem[] = [
    {
      id: "reel-5",
      title: "Ivory Banarasi Heritage Saree Drape",
      videoSrc: "/rohitha/reel_5.mp4",
      posterSrc: "/rohitha/reel_5_thumb.jpg",
      plays: "27.3K",
      likes: 1240,
      comments: 64,
      audio: "Traditional Weaves • @hitaa.s",
      location: "Heritage Silk Sanctuary",
      permalink: "https://www.instagram.com/reel/DVlyOqlE6vU/",
    },
    {
      id: "reel-7",
      title: "Classical Grace & South Indian Bridal Poise",
      videoSrc: "/rohitha/reel_7.mp4",
      posterSrc: "/rohitha/reel_7_thumb.jpg",
      plays: "22.4K",
      likes: 980,
      comments: 48,
      audio: "Temple Veena & Chants • @hitaa.s",
      location: "Classical Dance Stage",
      permalink: "https://www.instagram.com/reel/DPk_AqHCao4/",
    },
    {
      id: "reel-6",
      title: "Haute Couture Walk & Runway Poise",
      videoSrc: "/rohitha/reel_6.mp4",
      posterSrc: "/rohitha/reel_6_thumb.jpg",
      plays: "19.8K",
      likes: 820,
      comments: 36,
      audio: "Runway Ambience • @hitaa.s",
      location: "Haute Couture Runway",
      permalink: "https://www.instagram.com/reel/DU21i3NDea4/",
    },
  ];

  const archiveReels: ReelItem[] = [
    {
      id: "reel-2",
      title: "Expressive Close-Up Screen Test",
      category: "dialogue",
      badge: "Screen Test • Dialogue",
      videoSrc: "/rohitha/reel_2.mp4",
      posterSrc: "/rohitha/reel_2_thumb.jpg",
      plays: "25.4K",
      likes: 919,
      comments: 31,
      audio: "Original Dialogue Delivery • @hitaa.s",
      location: "Atelier Studio Hyderabad",
      permalink: "https://www.instagram.com/reel/DYsLcSRBTr5/",
    },
    {
      id: "clip-dubbing",
      title: "Voice Dubbing Suite & Vocal Cadence",
      category: "dialogue",
      badge: "ADR Dubbing Studio",
      videoSrc: "/rohitha/motion_clip_8.mp4",
      posterSrc: "/rohitha/motion_clip_8_thumb.jpg",
      plays: "21.8K",
      likes: 874,
      comments: 42,
      audio: "Studio Mic ADR Track • @hitaa.s",
      location: "Sound Dubbing Suite",
      permalink: "https://www.instagram.com/p/DbXs5U0GVXV/",
    },
    {
      id: "clip-jiohotstar",
      title: "JioHotstar & Star Maa Broadcast Scene",
      category: "dialogue",
      badge: "JioHotstar / Star Maa",
      videoSrc: "/rohitha/film_shoot_1.mp4",
      posterSrc: "/rohitha/film_shoot_1_thumb.jpg",
      plays: "31.2K",
      likes: 1280,
      comments: 54,
      audio: "Prajapathi Productions • JioHotstar",
      location: "JioHotstar OTT Production",
      permalink: "https://www.instagram.com/p/DZR2XBAmdW3/",
    },
    {
      id: "clip-director",
      title: "Feature Film Directorial Playback",
      category: "dialogue",
      badge: "Director Playback",
      videoSrc: "/rohitha/motion_clip_7.mp4",
      posterSrc: "/rohitha/motion_clip_7_thumb.jpg",
      plays: "19.3K",
      likes: 812,
      comments: 35,
      audio: "Director Playback • @mukeshprajapathi",
      location: "Cinema Production Floor",
      permalink: "https://www.instagram.com/p/DbXs5U0GVXV/",
    },
    {
      id: "reel-8",
      title: "Disha Fine Jewellers Campaign Showcase",
      category: "jewelry",
      badge: "Haute Joaillerie",
      videoSrc: "/rohitha/reel_8.mp4",
      posterSrc: "/rohitha/reel_8_thumb.jpg",
      plays: "16.2K",
      likes: 645,
      comments: 28,
      audio: "Luxury Atelier Campaign • @hitaa.s",
      location: "Fine Jewelry Atelier",
      permalink: "https://www.instagram.com/reel/DO0pz1eiTRo/",
    },
    {
      id: "clip-laal-ishq",
      title: "Laal Ishq Bridal & Temple Jewelry Motion",
      category: "jewelry",
      badge: "Bridal Couture",
      videoSrc: "/rohitha/laal_ishq_motion.mp4",
      posterSrc: "/rohitha/laal_ishq_motion_thumb.jpg",
      plays: "26.7K",
      likes: 1045,
      comments: 46,
      audio: "Laal Ishq Classical Symphony • @hitaa.s",
      location: "Heritage Bridal Courtyard",
      permalink: "https://www.instagram.com/p/DMVoRyrTMGO/",
    },
  ];

  const handleTogglePlay = (id: string) => {
    const vid = videoRefs.current[id];
    if (vid) {
      if (vid.paused) {
        vid.play();
        setPlayingState((prev) => ({ ...prev, [id]: true }));
      } else {
        vid.pause();
        setPlayingState((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  const handleToggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (vid) {
      vid.muted = !vid.muted;
      setMutedState((prev) => ({ ...prev, [id]: vid.muted }));
    }
  };

  const handleToggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = async (reel: ReelItem, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(reel.permalink);
      setCopiedId(reel.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      window.open(reel.permalink, "_blank");
    }
  };

  const handleCopyProfile = async () => {
    const url = "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==";
    try {
      await navigator.clipboard.writeText(url);
      setQrCopied(true);
      setTimeout(() => setQrCopied(false), 2500);
    } catch {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="reels" className="relative w-full py-24 px-6 md:px-12 bg-white border-b border-pink-200/80">
      
      {/* Background Subtle Blush Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-pink-100/60 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-syne uppercase tracking-[0.25em] text-pink-700 font-bold mb-2 shadow-sm">
            <Film className="w-3.5 h-3.5 text-pink-600" />
            <span>06 / Viral Reels</span>
          </div>

          <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl text-gray-950 font-normal uppercase tracking-tight">
            Haute Couture <span className="italic font-normal text-pink-600">Reels</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-syne uppercase tracking-[0.2em] text-pink-600 font-bold">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span>@hitaa.s &bull; Official Reels</span>
        </div>
      </div>

      {/* 4-Column Grid: 3 Interactive Featured Reels + 1 Instagram QR Card */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {featuredReels.map((reel, index) => {
          const isPlaying = playingState[reel.id] ?? true;
          const isMuted = mutedState[reel.id] ?? true;
          const isLiked = likedState[reel.id] ?? false;
          const currentLikes = isLiked ? reel.likes + 1 : reel.likes;

          return (
            <div
              key={reel.id}
              className="relative w-full aspect-[9/16] rounded-[2.4rem] p-2 bg-gradient-to-b from-pink-200/80 via-pink-100/40 to-white border-2 border-pink-200/90 shadow-[0_15px_40px_rgba(244,114,182,0.15)] group transition-transform duration-500 hover:scale-[1.02]"
            >
              <div
                onClick={() => handleTogglePlay(reel.id)}
                className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-900 cursor-pointer select-none"
              >
                <video
                  ref={(el) => {
                    videoRefs.current[reel.id] = el;
                  }}
                  src={reel.videoSrc}
                  poster={reel.posterSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35 pointer-events-none" />

                {/* Top Phone Header Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 text-pink-700 font-syne text-[10px] uppercase font-bold flex items-center gap-1.5 shadow-md">
                    <Film className="w-3 h-3 text-pink-600" />
                    <span>0{index + 1} • {reel.plays} views</span>
                  </span>

                  {/* Sound Toggle Button */}
                  <button
                    onClick={(e) => handleToggleMute(reel.id, e)}
                    className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 flex items-center justify-center text-pink-700 hover:bg-pink-600 hover:text-white transition-colors pointer-events-auto shadow-md"
                    aria-label="Toggle Sound"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-pink-600" />}
                  </button>
                </div>

                {/* Play/Pause Center Indicator */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/90 border border-pink-300 flex items-center justify-center text-pink-600 shadow-2xl">
                      <Play className="w-6 h-6 text-pink-600 ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Info Pill */}
                <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none">
                  <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 text-xs font-syne text-gray-900 space-y-1.5 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900 truncate text-xs sm:text-sm">
                        {reel.title}
                      </span>
                      <span className="text-[10px] text-pink-600 font-mono font-bold shrink-0">
                        9:16
                      </span>
                    </div>

                    <span className="text-[10px] text-gray-600 block truncate font-medium">
                      {reel.location}
                    </span>

                    <div className="flex items-center justify-between pt-1.5 border-t border-pink-100 pointer-events-auto">
                      <button
                        onClick={(e) => handleToggleLike(reel.id, e)}
                        className="flex items-center gap-1.5 text-gray-700 hover:text-pink-600 transition-colors font-medium"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-transform ${
                            isLiked ? "fill-pink-600 text-pink-600 scale-110" : "text-gray-600"
                          }`}
                        />
                        <span className="font-mono text-[11px]">{currentLikes.toLocaleString()}</span>
                      </button>

                      <div className="flex items-center gap-1.5 text-gray-600">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="font-mono text-[11px]">{reel.comments}</span>
                      </div>

                      <button
                        onClick={(e) => handleShare(reel, e)}
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                        title="Copy Link"
                      >
                        {copiedId === reel.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Share2 className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <a
                        href={reel.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
                        title="View on Instagram"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* CARD 4: INSTAGRAM QR & PROFILE CARD (Matches Phone Silhouette in White & Pink) */}
        <div className="relative w-full aspect-[9/16] rounded-[2.4rem] p-2 bg-gradient-to-b from-pink-300/80 via-pink-200/50 to-white border-2 border-pink-300 shadow-[0_15px_40px_rgba(244,114,182,0.18)] group transition-transform duration-500 hover:scale-[1.02] flex flex-col">
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white p-5 flex flex-col justify-between backdrop-blur-xl border border-pink-100">
            
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-pink-200/40 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Identity Bar */}
            <div className="flex items-center gap-3 pb-3 border-b border-pink-200">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-400 shadow-md shrink-0">
                <Image
                  src="/rohitha/avatar.jpg"
                  alt="Rohitha Sunkara"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-syne font-bold text-gray-950 text-sm truncate">
                    Rohitha Sunkara
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                </div>
                <p className="text-[11px] font-mono font-bold text-pink-600">@hitaa.s</p>
                <span className="text-[10px] uppercase tracking-wider text-gray-600 font-syne block font-semibold">
                  Ruhi &bull; Film Actress &amp; Model
                </span>
              </div>
            </div>

            {/* Live Real Verified Instagram Stats */}
            <div className="grid grid-cols-3 gap-1 py-3 border-b border-pink-200 text-center font-syne">
              <div>
                <span className="font-abril text-xl text-gray-950 block">36</span>
                <span className="text-[9px] uppercase tracking-wider text-pink-600 font-bold">Posts</span>
              </div>
              <div className="border-x border-pink-200">
                <span className="font-abril text-xl text-gray-950 block">1.8K</span>
                <span className="text-[9px] uppercase tracking-wider text-pink-600 font-bold">Followers</span>
              </div>
              <div>
                <span className="font-abril text-xl text-gray-950 block">333</span>
                <span className="text-[9px] uppercase tracking-wider text-pink-600 font-bold">Following</span>
              </div>
            </div>

            {/* Official Instagram QR Code (Enlarged Screen-Filling Size in White & Pink) */}
            <div className="my-auto py-1 flex flex-col items-center text-center w-full">
              <div className="p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-pink-50 border-2 border-pink-300 shadow-md group-hover:scale-[1.03] transition-transform duration-300 overflow-hidden w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] max-w-[88%] aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/instagram-qr.png"
                    alt="Official Instagram QR for @hitaa.s"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-[11px] font-syne text-pink-700 font-semibold">
                <QrCode className="w-3.5 h-3.5 text-pink-600" />
                <span>Scan with phone camera</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <a
                href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs uppercase tracking-wider font-bold hover:from-pink-700 hover:to-rose-600 transition-all font-syne flex items-center justify-center gap-2 shadow-md shadow-pink-500/20"
              >
                <Instagram className="w-3.5 h-3.5 text-white" />
                <span>Open Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyProfile}
                className="w-full py-2 rounded-xl bg-pink-50 border border-pink-200 text-pink-700 text-[11px] uppercase tracking-wider font-syne font-bold hover:bg-pink-100 transition-colors flex items-center justify-center gap-1.5"
              >
                {qrCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <span>Copy Profile URL</span>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Complete Motion Archive: Screen Tests & Fine Jewelry Campaigns */}
      <div className="relative z-10 mt-16 pt-12 border-t border-pink-200/80">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 border border-pink-300 text-xs font-mono uppercase tracking-[0.2em] text-pink-700 font-bold mb-2 shadow-sm">
              <Clapperboard className="w-3.5 h-3.5 text-pink-600" />
              <span>Screen Tests &bull; Fine Jewelry</span>
            </div>
            <h3 className="font-abril text-2xl sm:text-3xl md:text-4xl text-gray-950 font-normal uppercase leading-tight">
              Dialogue Delivery &amp; Jewelry Atelier Motion
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 font-syne max-w-xl">
              Screen tests, voice dubbing suite sessions, OTT features, and fine jewelry motion.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Category Filter Pills */}
            <div className="inline-flex flex-wrap p-1 rounded-full bg-pink-50 border border-pink-200 gap-1">
              <button
                onClick={() => setArchiveFilter("all")}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-syne font-bold uppercase tracking-wider transition-all ${
                  archiveFilter === "all"
                    ? "bg-pink-600 text-white shadow-sm"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                All Motion ({archiveReels.length})
              </button>
              <button
                onClick={() => setArchiveFilter("dialogue")}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-syne font-bold uppercase tracking-wider transition-all ${
                  archiveFilter === "dialogue"
                    ? "bg-pink-600 text-white shadow-sm"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                Dialogue ({archiveReels.filter(r => r.category === "dialogue").length})
              </button>
              <button
                onClick={() => setArchiveFilter("jewelry")}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-syne font-bold uppercase tracking-wider transition-all ${
                  archiveFilter === "jewelry"
                    ? "bg-pink-600 text-white shadow-sm"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                Jewelry ({archiveReels.filter(r => r.category === "jewelry").length})
              </button>
            </div>

            <button
              onClick={() => setShowAllReels(!showAllReels)}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-pink-300 text-pink-700 font-syne text-[10px] sm:text-xs uppercase tracking-wider font-bold hover:bg-pink-50 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>{showAllReels ? "Collapse" : "Expand All"}</span>
              <Film className="w-3.5 h-3.5 text-pink-600" />
            </button>
          </div>
        </div>

        {showAllReels && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 sm:gap-7 items-stretch">
            {archiveReels
              .filter((reel) => archiveFilter === "all" || reel.category === archiveFilter)
              .map((reel, index) => {
                const isPlaying = playingState[reel.id] ?? true;
                const isMuted = mutedState[reel.id] ?? true;
                const isLiked = likedState[reel.id] ?? false;
                const currentLikes = isLiked ? reel.likes + 1 : reel.likes;

                return (
                  <div
                    key={reel.id}
                    className="relative w-full aspect-[9/16] rounded-[2rem] p-1.5 bg-gradient-to-b from-pink-200/60 via-pink-100/30 to-white border border-pink-200 shadow-[0_10px_25px_rgba(244,114,182,0.12)] group transition-transform duration-500 hover:scale-[1.02]"
                  >
                    <div
                      onClick={() => handleTogglePlay(reel.id)}
                      className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-gray-900 cursor-pointer select-none"
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[reel.id] = el;
                        }}
                        src={reel.videoSrc}
                        poster={reel.posterSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Edge Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35 pointer-events-none" />

                      {/* Top Phone Header Bar */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-pink-200 text-pink-700 font-syne text-[9px] uppercase font-bold flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                          <span>{reel.badge || `0${index + 4}`}</span>
                          <span className="text-gray-300">•</span>
                          <span>{reel.plays}</span>
                        </span>

                        <button
                          onClick={(e) => handleToggleMute(reel.id, e)}
                          className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 flex items-center justify-center text-pink-700 hover:bg-pink-600 hover:text-white transition-colors pointer-events-auto shadow-sm"
                          aria-label="Toggle Sound"
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-pink-600" />}
                        </button>
                      </div>

                      {/* Play/Pause Center Indicator */}
                      {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 pointer-events-none">
                          <div className="w-12 h-12 rounded-full bg-white/90 border border-pink-300 flex items-center justify-center text-pink-600 shadow-xl">
                            <Play className="w-5 h-5 text-pink-600 ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Bottom Info Pill */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 pointer-events-none">
                        <div className="p-3 rounded-xl bg-white/95 backdrop-blur-md border border-pink-200 text-[11px] font-syne text-gray-900 space-y-1.5 shadow-lg">
                          <span className="font-bold text-gray-900 truncate block text-xs">
                            {reel.title}
                          </span>

                          <div className="flex items-center justify-between text-[10px] text-gray-500">
                            <span className="truncate max-w-[150px]">{reel.audio}</span>
                            <span className="text-pink-600 font-semibold">{reel.location}</span>
                          </div>

                          <div className="flex items-center justify-between pt-1.5 border-t border-pink-100 pointer-events-auto">
                            <button
                              onClick={(e) => handleToggleLike(reel.id, e)}
                              className="flex items-center gap-1.5 text-gray-700 hover:text-pink-600 transition-colors font-medium"
                            >
                              <Heart
                                className={`w-3.5 h-3.5 transition-transform ${
                                  isLiked ? "fill-pink-600 text-pink-600 scale-110" : "text-gray-500"
                                }`}
                              />
                              <span className="font-mono text-[10px] font-semibold">{currentLikes.toLocaleString()}</span>
                            </button>

                            <a
                              href={reel.permalink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
                              title="View on Instagram"
                            >
                              <span>Watch</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

    </section>
  );
}
