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
  Music2,
  Check,
  Instagram,
  QrCode,
  Sparkles
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
}

export default function ReelsShowcase() {
  const [playingState, setPlayingState] = useState<Record<string, boolean>>({
    "reel-1": true,
    "reel-2": true,
    "reel-3": true,
  });
  const [mutedState, setMutedState] = useState<Record<string, boolean>>({
    "reel-1": true,
    "reel-2": true,
    "reel-3": true,
  });
  const [likedState, setLikedState] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [qrCopied, setQrCopied] = useState(false);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const reels: ReelItem[] = [
    {
      id: "reel-1",
      title: "Celebration Gala & Poise",
      videoSrc: "/pallavi/reel_1.mp4",
      posterSrc: "/pallavi/reel_1_thumb.jpg",
      plays: "58.4K",
      likes: 2620,
      comments: 39,
      audio: "Golden Celebration • @pallaviiii124",
      location: "Golden Studio Production",
      permalink: "https://www.instagram.com/reel/DTIaiqmkd35/",
    },
    {
      id: "reel-2",
      title: "Temple Silk Drape & Emerald Jewels",
      videoSrc: "/pallavi/reel_2.mp4",
      posterSrc: "/pallavi/reel_2_thumb.jpg",
      plays: "74.1K",
      likes: 3370,
      comments: 51,
      audio: "MUA @anareddy_makeovers",
      location: "Soiree Hyderabad",
      permalink: "https://www.instagram.com/reel/Dd9P7oFzKKd/",
    },
    {
      id: "reel-3",
      title: "Avant-Garde Silver Oxidized Look",
      videoSrc: "/pallavi/reel_3.mp4",
      posterSrc: "/pallavi/reel_3_thumb.jpg",
      plays: "42.8K",
      likes: 2190,
      comments: 34,
      audio: "Forehead Curls • @pallaviiii124",
      location: "Hyderabad Cinema Studios",
      permalink: "https://www.instagram.com/reel/DYkEPF7KXGy/",
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

  const handleShare = (reel: ReelItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(reel.permalink);
      setCopiedId(reel.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleCopyProfile = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText("https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2");
      setQrCopied(true);
      setTimeout(() => setQrCopied(false), 2000);
    }
  };

  return (
    <section id="reels" style={{ contain: "paint" }} className="relative w-full py-24 px-4 sm:px-8 md:px-12 bg-plum-950 border-t border-b border-champagne-300/15 overflow-hidden">
      
      {/* Background Ambient Glows to eliminate any feeling of emptiness */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-mauve-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[600px] h-[350px] bg-apricot-400/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-mauve-300 font-syne block mb-2.5 font-bold flex items-center gap-2">
            <Film className="w-4 h-4 text-mauve-400" />
            <span>05 / 9:16 Motion Cinema &amp; Verified Social Vault</span>
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl text-champagne-100 font-normal uppercase tracking-tight">
            Runways &amp; <span className="italic font-normal text-mauve-300">Screen Reels</span>
          </h2>
          <p className="mt-3 text-sm text-champagne-200/80 font-syne max-w-2xl leading-relaxed">
            Direct 9:16 vertical runway walks, camera screen tests, and verified social metrics for <span className="text-champagne-100 font-semibold">Pallavi Sunkara</span>.
          </p>
        </div>

        {/* Live Impressions Pill */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-syne">
          <div className="px-4 py-2 rounded-full bg-plum-900/90 border border-champagne-300/25 text-champagne-100 flex items-center gap-2.5 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-mauve-400 animate-pulse" />
            <span className="font-mono font-bold text-apricot-400">175K+</span>
            <span className="text-champagne-300/90 uppercase tracking-wider text-[11px]">Reels Impressions</span>
          </div>

          <a
            href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-champagne-200 text-plum-950 font-bold uppercase tracking-wider text-[11px] hover:bg-mauve-400 transition-colors flex items-center gap-1.5 shadow-lg"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@pallaviiii124</span>
          </a>
        </div>
      </div>

      {/* 
        Full 4-Card Balanced Showcase:
        - Columns 1, 2, 3: Three native 9:16 vertical motion smartphone reels
        - Column 4: Premium companion Instagram QR Hub Card
        - Fits screen edge-to-edge with zero empty voids!
      */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* REELS 1, 2, 3 */}
        {reels.map((reel, index) => {
          const isPlaying = playingState[reel.id] !== false;
          const isMuted = mutedState[reel.id] !== false;
          const isLiked = likedState[reel.id] || false;
          const currentLikes = isLiked ? reel.likes + 1 : reel.likes;

          return (
            <div
              key={reel.id}
              className="relative w-full aspect-[9/16] rounded-[2.4rem] p-2 bg-gradient-to-b from-champagne-300/35 via-mauve-400/20 to-plum-950 border border-champagne-300/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-transform duration-500 hover:scale-[1.02] flex flex-col"
            >
              {/* Inner Smartphone Screen */}
              <div 
                onClick={() => handleTogglePlay(reel.id)}
                className="relative w-full h-full rounded-[2rem] overflow-hidden bg-plum-900 cursor-pointer"
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
                  className="w-full h-full object-cover object-[center_15%]"
                />

                {/* Subtle Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/95 via-plum-950/15 to-plum-950/40 pointer-events-none" />

                {/* Top Phone Header Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-plum-950/80 backdrop-blur-md border border-champagne-300/25 text-champagne-100 font-syne text-[10px] uppercase font-bold flex items-center gap-1.5 shadow-md">
                    <Film className="w-3 h-3 text-mauve-400" />
                    <span>0{index + 1} • {reel.plays}</span>
                  </span>

                  {/* Sound Toggle Button */}
                  <button
                    onClick={(e) => handleToggleMute(reel.id, e)}
                    className="w-8 h-8 rounded-full bg-plum-950/80 backdrop-blur-md border border-champagne-300/30 flex items-center justify-center text-champagne-100 hover:bg-mauve-500 transition-colors pointer-events-auto shadow-md"
                    aria-label="Toggle Sound"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-apricot-400" />}
                  </button>
                </div>

                {/* Play/Pause Center Indicator */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-plum-950/35 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-plum-950/85 border border-champagne-300/40 flex items-center justify-center text-champagne-100 shadow-2xl">
                      <Play className="w-6 h-6 text-champagne-100 ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Info Pill */}
                <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none">
                  <div className="p-3 rounded-2xl bg-plum-950/85 backdrop-blur-md border border-champagne-300/20 text-xs font-syne text-champagne-100 space-y-1 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-champagne-100 truncate text-xs sm:text-sm">
                        {reel.title}
                      </span>
                      <span className="text-[10px] text-mauve-300 font-mono shrink-0">
                        9:16
                      </span>
                    </div>

                    <span className="text-[10px] text-champagne-300/70 block truncate">
                      {reel.location}
                    </span>

                    <div className="flex items-center justify-between pt-1.5 border-t border-champagne-300/15 pointer-events-auto">
                      <button
                        onClick={(e) => handleToggleLike(reel.id, e)}
                        className="flex items-center gap-1.5 hover:text-apricot-400 transition-colors"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-transform ${
                            isLiked ? "fill-apricot-400 text-apricot-400 scale-110" : "text-champagne-200"
                          }`}
                        />
                        <span className="font-mono text-[11px]">{currentLikes}</span>
                      </button>

                      <div className="flex items-center gap-1.5 text-champagne-300/80">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="font-mono text-[11px]">{reel.comments}</span>
                      </div>

                      <button
                        onClick={(e) => handleShare(reel, e)}
                        className="text-champagne-300/80 hover:text-champagne-100 transition-colors"
                        title="Copy Link"
                      >
                        {copiedId === reel.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Share2 className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <a
                        href={reel.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-full bg-plum-900 border border-champagne-300/25 flex items-center justify-center text-champagne-200 hover:text-champagne-100"
                        title="View on Instagram"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* CARD 4: INSTAGRAM QR & PROFILE CARD (Matches Phone Silhouette) */}
        <div className="relative w-full aspect-[9/16] rounded-[2.4rem] p-2 bg-gradient-to-b from-champagne-300/35 via-mauve-400/20 to-plum-950 border border-champagne-300/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-transform duration-500 hover:scale-[1.02] flex flex-col">
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-plum-900/90 p-5 flex flex-col justify-between backdrop-blur-xl">
            
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-mauve-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Identity Bar */}
            <div className="flex items-center gap-3 pb-3 border-b border-champagne-300/15">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-champagne-300/40 shadow-lg shrink-0">
                <Image
                  src="/pallavi/avatar.jpg"
                  alt="Pallavi Sunkara"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-syne font-bold text-champagne-100 text-sm truncate">
                    Pallavi Sunkara
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-mauve-400 shrink-0" />
                </div>
                <p className="text-[11px] font-mono text-mauve-300">@pallaviiii124</p>
                <span className="text-[10px] uppercase tracking-wider text-champagne-300/80 font-syne block">
                  5&apos;7&quot; (170 cm) • Model &amp; Actress
                </span>
              </div>
            </div>

            {/* Live Real Verified Instagram Stats */}
            <div className="grid grid-cols-3 gap-1 py-3 border-b border-champagne-300/15 text-center font-syne">
              <div>
                <span className="font-abril text-xl text-champagne-100 block">74</span>
                <span className="text-[9px] uppercase tracking-wider text-mauve-300">Posts</span>
              </div>
              <div className="border-x border-champagne-300/15">
                <span className="font-abril text-xl text-champagne-100 block">1.2K</span>
                <span className="text-[9px] uppercase tracking-wider text-mauve-300">Followers</span>
              </div>
              <div>
                <span className="font-abril text-xl text-champagne-100 block">194</span>
                <span className="text-[9px] uppercase tracking-wider text-mauve-300">Following</span>
              </div>
            </div>

            {/* Authentic Official Instagram QR Code (Enlarged Screen-Filling Size) */}
            <div className="my-auto py-1 flex flex-col items-center text-center w-full">
              <div className="p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-white border-2 border-champagne-300/40 shadow-2xl group-hover:scale-[1.03] transition-transform duration-300 overflow-hidden w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] max-w-[88%] aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/instagram-qr.png"
                    alt="Official Instagram QR for @pallaviiii124"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-[11px] font-syne text-mauve-300">
                <QrCode className="w-3.5 h-3.5 text-apricot-400" />
                <span>Scan with phone camera</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <a
                href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-champagne-200 text-plum-950 text-xs uppercase tracking-wider font-bold hover:bg-mauve-400 transition-all font-syne flex items-center justify-center gap-2 shadow-lg"
              >
                <Instagram className="w-3.5 h-3.5 text-plum-950" />
                <span>Open Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyProfile}
                className="w-full py-2 rounded-xl bg-plum-950/60 border border-champagne-300/20 text-champagne-200 text-[11px] uppercase tracking-wider font-syne hover:border-mauve-400 hover:text-champagne-100 transition-colors flex items-center justify-center gap-1.5"
              >
                {qrCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
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

    </section>
  );
}