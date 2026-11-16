"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { 
  Clapperboard, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Volume2, 
  VolumeX, 
  Gem, 
  Film, 
  ArrowRight, 
  ArrowUpRight, 
  Instagram, 
  PhoneCall, 
  Check, 
  Award, 
  Languages, 
  Crown,
  Share2
} from "lucide-react";

interface ActingShowcaseProps {
  onOpenCompCard?: () => void;
}

export default function ActingShowcase({ onOpenCompCard }: ActingShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"dialogue" | "jewelry">("dialogue");
  
  // Video playback states
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState(0);
  const [selectedJewelryIndex, setSelectedJewelryIndex] = useState(0);

  const [isPlayingDialogue, setIsPlayingDialogue] = useState(true);
  const [isMutedDialogue, setIsMutedDialogue] = useState(true);

  const [isPlayingJewelry, setIsPlayingJewelry] = useState(true);
  const [isMutedJewelry, setIsMutedJewelry] = useState(true);

  const dialogueVideoRef = useRef<HTMLVideoElement | null>(null);
  const jewelryVideoRef = useRef<HTMLVideoElement | null>(null);

  const dialogueClips = [
    {
      id: "take-1",
      title: "Screen Audition & Monologue",
      label: "Take 01 • Telugu Monologue",
      src: "/rohitha/reel_2.mp4",
      poster: "/rohitha/reel_2_thumb.jpg",
      desc: "Intimate Close-Up Monologue Delivery • High-Impact Emotional Transition",
      badge: "REC • 24 FPS • SCREEN AUDITION",
    },
    {
      id: "take-2",
      title: "Voice Dubbing Suite & Vocal Cadence",
      label: "Take 02 • Voice Dubbing Studio",
      src: "/rohitha/motion_clip_8.mp4",
      poster: "/rohitha/motion_clip_8_thumb.jpg",
      desc: "Live Studio Mic Vocal Delivery, ADR Cadence & Dialogue Synchronization",
      badge: "ADR • STUDIO MIC • VOCAL TRACK",
    },
    {
      id: "take-3",
      title: "JioHotstar / Star Maa Broadcast Scene",
      label: "Take 03 • JioHotstar Feature",
      src: "/rohitha/film_shoot_1.mp4",
      poster: "/rohitha/film_shoot_1_thumb.jpg",
      desc: "Prajapathi Productions OTT Broadcast Scene with Director Mukesh Prajapathi",
      badge: "OTT • JIOHOTSTAR • STAR MAA",
    },
    {
      id: "take-4",
      title: "Feature Film Directorial Playback",
      label: "Take 04 • Director Video Assist",
      src: "/rohitha/motion_clip_7.mp4",
      poster: "/rohitha/motion_clip_7_thumb.jpg",
      desc: "Live Playback on Cinema Flight-Case Video Assist on Feature Film Set",
      badge: "PLAYBACK • 24 FPS • VIDEO ASSIST",
    },
  ];

  const jewelryClips = [
    {
      id: "jewel-1",
      title: "Disha Fine Jewellers Campaign",
      label: "Campaign 01 • Fine Jewelry Atelier",
      src: "/rohitha/reel_8.mp4",
      poster: "/rohitha/reel_8_thumb.jpg",
      desc: "Slow-motion temple choker, maang tikka, and regal bridal necklace atelier motion.",
      badge: "HAUTE JOAILLERIE • 22K GOLD",
    },
    {
      id: "jewel-2",
      title: "Laal Ishq Regal Bridal Couture",
      label: "Campaign 02 • Laal Ishq Bridal",
      src: "/rohitha/laal_ishq_motion.mp4",
      poster: "/rohitha/laal_ishq_motion_thumb.jpg",
      desc: "Crimson hand-embroidered bridal lehenga with royal temple jewelry motion.",
      badge: "BRIDAL COUTURE • LAAL ISHQ",
    },
    {
      id: "jewel-3",
      title: "Ivory Banarasi Zari Silk Drape",
      label: "Campaign 03 • Heritage Banarasi",
      src: "/rohitha/reel_5.mp4",
      poster: "/rohitha/reel_5_thumb.jpg",
      desc: "Fluid Banarasi silk movements, gold and silver zari drape transitions.",
      badge: "HERITAGE SILK • BANARASI",
    },
  ];

  const toggleDialoguePlay = () => {
    if (dialogueVideoRef.current) {
      if (dialogueVideoRef.current.paused) {
        dialogueVideoRef.current.play();
        setIsPlayingDialogue(true);
      } else {
        dialogueVideoRef.current.pause();
        setIsPlayingDialogue(false);
      }
    }
  };

  const toggleDialogueMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dialogueVideoRef.current) {
      dialogueVideoRef.current.muted = !dialogueVideoRef.current.muted;
      setIsMutedDialogue(dialogueVideoRef.current.muted);
    }
  };

  const toggleJewelryPlay = () => {
    if (jewelryVideoRef.current) {
      if (jewelryVideoRef.current.paused) {
        jewelryVideoRef.current.play();
        setIsPlayingJewelry(true);
      } else {
        jewelryVideoRef.current.pause();
        setIsPlayingJewelry(false);
      }
    }
  };

  const toggleJewelryMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (jewelryVideoRef.current) {
      jewelryVideoRef.current.muted = !jewelryVideoRef.current.muted;
      setIsMutedJewelry(jewelryVideoRef.current.muted);
    }
  };

  return (
    <section id="acting" className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-white via-pink-50/40 to-white border-b border-pink-200/80 overflow-hidden">
      
      {/* Ambient Cinema Lighting Vignettes */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-pink-200/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-rose-200/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-300 text-[11px] font-syne uppercase tracking-[0.2em] text-pink-700 font-bold mb-3 shadow-sm">
          <Clapperboard className="w-3.5 h-3.5 text-pink-600" />
          <span>05 / Film Roles &bull; Acting Repertoire</span>
        </div>

        <h2 className="font-abril text-3xl sm:text-4xl md:text-5xl text-gray-950 font-normal uppercase tracking-tight leading-tight">
          Cinematic <span className="italic text-pink-600">Repertoire</span>
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-gray-600 font-syne font-medium max-w-lg mx-auto">
          Screen monologues, professional voice dubbing, and haute joaillerie atelier motion.
        </p>

        {/* Specialized Dual Pillar Switcher */}
        <div className="mt-6 inline-flex p-1 rounded-full bg-white border border-pink-200 shadow-sm">
          <button
            onClick={() => setActiveTab("dialogue")}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs font-syne font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "dialogue"
                ? "bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-sm"
                : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
            }`}
          >
            <Clapperboard className="w-3.5 h-3.5" />
            <span>01 &bull; Dialogue &amp; Acting</span>
          </button>

          <button
            onClick={() => setActiveTab("jewelry")}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs font-syne font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "jewelry"
                ? "bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-sm"
                : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
            }`}
          >
            <Gem className="w-3.5 h-3.5" />
            <span>02 &bull; Jewelry Motion</span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: CINEMATIC DIALOGUE DELIVERY & SCREEN ACTING */}
      {/* ============================================================== */}
      {activeTab === "dialogue" && (
        <div className="relative z-10 max-w-6xl mx-auto space-y-16 animate-fadeIn">
          
          {/* Main Showcase Grid: 5 Cols Video Frame + 7 Cols Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Monologue Video Player Frame (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div 
                onClick={toggleDialoguePlay}
                className="relative aspect-[9/16] max-w-[420px] mx-auto rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_25px_60px_rgba(244,114,182,0.28)] bg-gray-900 group cursor-pointer select-none"
              >
                <video
                  key={dialogueClips[selectedDialogueIndex].src}
                  ref={dialogueVideoRef}
                  src={dialogueClips[selectedDialogueIndex].src}
                  poster={dialogueClips[selectedDialogueIndex].poster}
                  autoPlay
                  loop
                  muted={isMutedDialogue}
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/40 pointer-events-none" />

                {/* Top Slate Header Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>{dialogueClips[selectedDialogueIndex].badge}</span>
                  </span>

                  <button
                    onClick={toggleDialogueMute}
                    className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-pink-200 flex items-center justify-center text-pink-700 hover:bg-pink-600 hover:text-white transition-colors pointer-events-auto shadow-md"
                    aria-label="Toggle Sound"
                  >
                    {isMutedDialogue ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-pink-600" />}
                  </button>
                </div>

                {/* Play/Pause Center Indicator */}
                {!isPlayingDialogue && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/95 border-2 border-pink-400 flex items-center justify-center text-pink-600 shadow-2xl">
                      <Play className="w-7 h-7 text-pink-600 ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Actor Detail Slate */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 shadow-xl space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-pink-700 font-bold">
                        Scene: {dialogueClips[selectedDialogueIndex].label}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold font-syne">
                        Ruhi
                      </span>
                    </div>
                    <h4 className="font-abril text-lg text-gray-950">Rohitha Sunkara</h4>
                    <p className="text-[11px] text-gray-600 font-syne">
                      {dialogueClips[selectedDialogueIndex].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Multi-Take Switcher for Casting Directors */}
              <div className="max-w-[420px] mx-auto mt-4 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-pink-700 font-bold block">
                  Select Screen Test / Scene Take:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {dialogueClips.map((clip, idx) => (
                    <button
                      key={clip.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDialogueIndex(idx);
                        setIsPlayingDialogue(true);
                      }}
                      className={`px-3 py-2 rounded-xl text-left text-xs font-syne transition-all border ${
                        selectedDialogueIndex === idx
                          ? "bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-500/25"
                          : "bg-white text-gray-800 border-pink-200 hover:border-pink-400 hover:bg-pink-50"
                      }`}
                    >
                      <span className="block font-bold text-[11px] truncate">{clip.label}</span>
                      <span className={`block text-[9px] truncate ${selectedDialogueIndex === idx ? "text-pink-100" : "text-gray-500"}`}>
                        {clip.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating Language Pill */}
              <div className="max-w-[420px] mx-auto mt-2.5 px-4 py-2 rounded-2xl bg-white border border-pink-200 shadow-sm flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-pink-600" />
                  <span className="text-xs font-syne font-bold text-gray-800">
                    Telugu &bull; Hindi &bull; English
                  </span>
                </div>
                <span className="text-[10px] font-syne font-bold text-pink-600 uppercase tracking-wider">
                  Native Fluency
                </span>
              </div>
            </div>

            {/* Right: Screen Acting Disciplines & Narrative Range (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-pink-600 font-bold">
                  Voice &bull; Diction &bull; Screen Presence
                </span>
                <h3 className="font-abril text-2xl sm:text-3xl text-gray-950 uppercase leading-snug">
                  Emotional Range &amp; Diction
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-syne leading-relaxed">
                  Trained vocal delivery and screen presence across feature films, streaming series, and voice dubbing.
                </p>
              </div>

              {/* 4 Specialized Acting Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-pink-200 shadow-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 text-[9px] font-bold font-syne uppercase tracking-wider mb-1">
                    Native Diction
                  </span>
                  <h4 className="font-syne font-bold text-gray-900 text-xs sm:text-sm">Authentic Telugu Dialects</h4>
                  <p className="text-[11px] text-gray-500 font-syne mt-0.5">Coastal Andhra, Telangana &amp; Rayalaseema colloquial nuance.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-pink-200 shadow-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 text-[9px] font-bold font-syne uppercase tracking-wider mb-1">
                    Pan-India
                  </span>
                  <h4 className="font-syne font-bold text-gray-900 text-xs sm:text-sm">Hindi &amp; Urban English</h4>
                  <p className="text-[11px] text-gray-500 font-syne mt-0.5">Contemporary pronunciation for streaming and cinema.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-pink-200 shadow-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 text-[9px] font-bold font-syne uppercase tracking-wider mb-1">
                    Abhinaya
                  </span>
                  <h4 className="font-syne font-bold text-gray-900 text-xs sm:text-sm">Intense Eye &amp; Facial Nuance</h4>
                  <p className="text-[11px] text-gray-500 font-syne mt-0.5">Precision gaze control and subtle emotional transitions.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-pink-200 shadow-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 text-[9px] font-bold font-syne uppercase tracking-wider mb-1">
                    Dynamics
                  </span>
                  <h4 className="font-syne font-bold text-gray-900 text-xs sm:text-sm">Choreography &amp; Delivery</h4>
                  <p className="text-[11px] text-gray-500 font-syne mt-0.5">Rapid script memorization and multi-camera improvisation.</p>
                </div>
              </div>

              {/* Supporting Solo Character Screen Test Stills */}
              <div className="pt-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-pink-700 font-bold block mb-2">
                  Screen Test Stills &bull; Authentic Solo Frames
                </span>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-pink-200 shadow-sm group">
                    <Image
                      src="/rohitha/photo_2.jpg"
                      alt="Screen Test Still - Radiant Protagonist"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] text-white font-syne font-bold">Radiant Protagonist</span>
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-pink-200 shadow-sm group">
                    <Image
                      src="/rohitha/photo_52.jpg"
                      alt="Vintage Screen Frame - Aha Na Pelli Anta"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] text-white font-syne font-bold">Historical Nuance</span>
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-pink-200 shadow-sm group">
                    <Image
                      src="/rohitha/photo_12.jpg"
                      alt="Screen Test Still - Natural Light"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] text-white font-syne font-bold">Sunlight Soliloquy</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Casting Directors */}
              <div className="pt-2 flex flex-row flex-wrap items-center gap-2.5">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Rohitha,%20we%20are%20casting%20for%20a%20feature%20film/series%20and%20would%20like%20to%20review%20your%20audition%20reel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold hover:from-pink-700 hover:to-rose-600 transition-all font-syne shadow-md shadow-pink-500/20 flex items-center justify-center gap-1.5"
                >
                  <Clapperboard className="w-3.5 h-3.5 text-white" />
                  <span>Audition Reel</span>
                </a>

                <a
                  href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white border border-pink-300 text-pink-700 text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold hover:bg-pink-50 transition-all font-syne flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>DM @hitaa.s</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: JEWELRY ATELIER & BRIDAL MOTION */}
      {/* ============================================================== */}
      {activeTab === "jewelry" && (
        <div className="relative z-10 max-w-6xl mx-auto space-y-16 animate-fadeIn">
          
          {/* Main Showcase Grid: 5 Cols Video Frame + 7 Cols Jewelry Strengths */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Jewelry Video Player Frame (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div 
                onClick={toggleJewelryPlay}
                className="relative aspect-[9/16] max-w-[420px] mx-auto rounded-[2.5rem] overflow-hidden border-4 border-amber-200/90 shadow-[0_25px_60px_rgba(251,191,36,0.22)] bg-gray-900 group cursor-pointer select-none"
              >
                <video
                  key={jewelryClips[selectedJewelryIndex].src}
                  ref={jewelryVideoRef}
                  src={jewelryClips[selectedJewelryIndex].src}
                  poster={jewelryClips[selectedJewelryIndex].poster}
                  autoPlay
                  loop
                  muted={isMutedJewelry}
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Shimmering Golden Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35 pointer-events-none" />

                {/* Top Jewelry Campaign Header Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-amber-950/85 backdrop-blur-md border border-amber-400/40 text-amber-200 font-mono text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                    <Gem className="w-3 h-3 text-amber-400" />
                    <span>{jewelryClips[selectedJewelryIndex].badge}</span>
                  </span>

                  <button
                    onClick={toggleJewelryMute}
                    className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-amber-200 flex items-center justify-center text-amber-800 hover:bg-amber-600 hover:text-white transition-colors pointer-events-auto shadow-md"
                    aria-label="Toggle Sound"
                  >
                    {isMutedJewelry ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-600" />}
                  </button>
                </div>

                {/* Play/Pause Center Indicator */}
                {!isPlayingJewelry && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/95 border-2 border-amber-400 flex items-center justify-center text-amber-600 shadow-2xl">
                      <Play className="w-7 h-7 text-amber-600 ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Campaign Detail Slate */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200 shadow-xl space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold">
                        {jewelryClips[selectedJewelryIndex].label}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold font-syne">
                        Atelier
                      </span>
                    </div>
                    <h4 className="font-abril text-lg text-gray-950">
                      {jewelryClips[selectedJewelryIndex].title}
                    </h4>
                    <p className="text-[11px] text-gray-600 font-syne">
                      {jewelryClips[selectedJewelryIndex].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Multi-Campaign Switcher for Jewelry */}
              <div className="max-w-[420px] mx-auto mt-4 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block">
                  Select Atelier Campaign:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {jewelryClips.map((clip, idx) => (
                    <button
                      key={clip.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJewelryIndex(idx);
                        setIsPlayingJewelry(true);
                      }}
                      className={`px-2.5 py-2 rounded-xl text-center text-xs font-syne transition-all border ${
                        selectedJewelryIndex === idx
                          ? "bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-500/25"
                          : "bg-white text-gray-800 border-amber-200 hover:border-amber-400 hover:bg-amber-50"
                      }`}
                    >
                      <span className="block font-bold text-[10px] truncate">{clip.label.split("•")[0]}</span>
                      <span className={`block text-[9px] truncate ${selectedJewelryIndex === idx ? "text-amber-100" : "text-gray-500"}`}>
                        {clip.title.split(" ")[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating Jewelry Badge */}
              <div className="max-w-[420px] mx-auto mt-2.5 px-4 py-2 rounded-2xl bg-white border border-amber-300 shadow-sm flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-syne font-bold text-gray-800">
                    Temple Gold &bull; Polki &bull; Diamonds
                  </span>
                </div>
                <span className="text-[10px] font-syne font-bold text-amber-700 uppercase tracking-wider">
                  22K Certified
                </span>
              </div>
            </div>

            {/* Right: Jewelry Movement Capabilities & Campaign Specs (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-700 font-bold">
                  Light &bull; Posture &bull; Heritage
                </span>
                <h3 className="font-abril text-2xl sm:text-3xl text-gray-950 uppercase leading-snug">
                  Regal Jewelry Poise
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-syne leading-relaxed">
                  Sculpted collarbone posture and trained micro-turns engineered for high-jewelry campaigns.
                </p>
              </div>

              {/* 4 Specialized Jewelry Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-bold font-syne uppercase tracking-wider mb-1">
                    Neckline
                  </span>
                  <h4 className="font-syne font-bold text-gray-900 text-xs sm:text-sm">Choker &amp; Collarbone Poise</h4>
                  <p className="text-[11px] text-gray-500 font-syne mt-0.5">Engineered alignment for close-up jewelry framing.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-bold font-syne uppercase tracking-wider mb-1">
                    Scintillation
                  </span>
                  <h4 className="font-syne font-bold text-gray-900 text-xs sm:text-sm">Gem Light Articulation</h4>
                  <p className="text-[11px] text-gray-500 font-syne mt-0.5">Trained micro-turns catching studio key-lights.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-bold font-syne uppercase tracking-wider mb-1">
                    Bridal
                  </span>
                  <h4 className="font-syne font-bold text-gray-900 text-xs sm:text-sm">Multi-Layered Gold Haarams</h4>
                  <p className="text-[11px] text-gray-500 font-syne mt-0.5">Effortless poise with heavy bridal silk and jewels.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-sm">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-bold font-syne uppercase tracking-wider mb-1">
                    Heritage
                  </span>
                  <h4 className="font-syne font-bold text-gray-900 text-xs sm:text-sm">Sacred Temple Adornments</h4>
                  <p className="text-[11px] text-gray-500 font-syne mt-0.5">Classical dance grounding in traditional bridal grace.</p>
                </div>
              </div>

              {/* Supporting Solo Fine Jewelry Stills */}
              <div className="pt-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-800 font-bold block mb-2">
                  Haute Joaillerie Stills &bull; Solo Campaigns
                </span>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-amber-200 shadow-sm group">
                    <Image
                      src="/rohitha/photo_75.jpg"
                      alt="Temple Headpiece & Sacred Choker"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] text-white font-syne font-bold">Temple Gold Choker</span>
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-amber-200 shadow-sm group">
                    <Image
                      src="/rohitha/photo_83.jpg"
                      alt="Laal Ishq Bridal Jewellery"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] text-white font-syne font-bold">Laal Ishq Bridal</span>
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-amber-200 shadow-sm group">
                    <Image
                      src="/rohitha/photo_76.jpg"
                      alt="Classical Temple Headpiece & Jewels"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] text-white font-syne font-bold">Sacred Nethi Chutti</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Jewelry Brands */}
              <div className="pt-2 flex flex-row flex-wrap items-center gap-2.5">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Rohitha,%20we%20would%20like%20to%20book%20you%20for%20our%20fine%20jewelry%20campaign/trousseau%20collection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold hover:from-amber-700 hover:to-amber-800 transition-all font-syne shadow-md shadow-amber-600/20 flex items-center justify-center gap-1.5"
                >
                  <Gem className="w-3.5 h-3.5 text-white" />
                  <span>Book Campaign</span>
                </a>

                <a
                  href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white border border-amber-300 text-amber-800 text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold hover:bg-amber-50 transition-all font-syne flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Instagram className="w-3.5 h-3.5 text-amber-600" />
                  <span>Inquire @hitaa.s</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* QUICK CASTING & ATELIER CREDENTIALS STRIP */}
      {/* ============================================================== */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 pt-10 border-t border-pink-200/80">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center font-syne">
          
          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-pink-600 font-bold block mb-1">
              Screen Age
            </span>
            <span className="font-abril text-lg text-gray-950">19 &ndash; 25 Yrs</span>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-pink-600 font-bold block mb-1">
              Height
            </span>
            <span className="font-abril text-lg text-gray-950">5&apos;6&quot; / 168 cm</span>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-pink-600 font-bold block mb-1">
              Primary Language
            </span>
            <span className="font-abril text-lg text-gray-950">Telugu (Native)</span>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-pink-600 font-bold block mb-1">
              Secondary Fluency
            </span>
            <span className="font-abril text-lg text-gray-950">Hindi &bull; English</span>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-pink-600 font-bold block mb-1">
              Base Location
            </span>
            <span className="font-abril text-lg text-gray-950">Hyderabad</span>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-pink-600 font-bold block mb-1">
              Availability
            </span>
            <span className="font-abril text-lg text-pink-600">Pan-India &bull; Global</span>
          </div>

        </div>
      </div>

    </section>
  );
}
