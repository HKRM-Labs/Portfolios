"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Check, Copy, ArrowUpRight, Sparkles, Smartphone, MessageSquare, Clapperboard } from "lucide-react";

export default function InstagramQRCard() {
  const [copied, setCopied] = useState<boolean>(false);
  const instaUrl = "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(instaUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="follow" className="w-full py-24 px-6 md:px-12 bg-white border-t border-b border-pink-200/80 relative overflow-hidden">
      
      {/* Background Soft Pink Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-pink-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto rounded-3xl bg-pink-50/50 border-2 border-pink-200 p-8 sm:p-14 relative z-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official Instagram QR Code (Commanding Size) */}
          <div className="md:col-span-6 flex flex-col items-center justify-center">
            <div className="p-4 sm:p-6 rounded-[2.5rem] bg-white shadow-[0_20px_50px_rgba(244,114,182,0.2)] border-4 border-pink-200 relative group overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px] max-w-full aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/instagram-qr.png"
                  alt="Official Instagram QR Code for @hitaa.s"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-pink-700 font-syne font-bold">
              <Smartphone className="w-4 h-4 text-pink-600" />
              <span>Scan with phone camera to connect</span>
            </div>
          </div>

          {/* Right Column: Narrative & Direct Booking Touchpoints */}
          <div className="md:col-span-6 space-y-6 text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-300 bg-white text-xs uppercase tracking-[0.3em] text-pink-700 font-syne font-bold shadow-sm">
              <Clapperboard className="w-3.5 h-3.5 text-pink-600" />
              <span>Verified Creator &bull; Film Actress</span>
            </div>

            <div>
              <h2 className="font-abril text-4xl sm:text-5xl text-gray-950 font-normal uppercase tracking-tight">
                Connect on <span className="italic font-normal text-pink-600">@hitaa.s</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 font-syne mt-3 max-w-lg leading-relaxed font-medium">
                Direct access for feature film auditions, OTT web series castings, Telugu commercial screen projects, and haute couture runway collaborations.
              </p>
            </div>

            {/* Quick Metrics in Voluptuous Abril */}
            <div className="grid grid-cols-3 gap-6 py-4 border-t border-b border-pink-200 text-center md:text-left font-syne">
              <div>
                <span className="font-abril text-3xl sm:text-4xl text-gray-950 font-normal block">36</span>
                <span className="text-xs uppercase tracking-wider text-pink-600 font-bold">Real Posts</span>
              </div>
              <div>
                <span className="font-abril text-3xl sm:text-4xl text-gray-950 font-normal block">1.8M+</span>
                <span className="text-xs uppercase tracking-wider text-pink-600 font-bold">Reel Views</span>
              </div>
              <div>
                <span className="font-abril text-3xl sm:text-4xl text-gray-950 font-normal block">Open</span>
                <span className="text-xs uppercase tracking-wider text-gray-700 font-bold">Film Roles</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs uppercase tracking-[0.2em] font-bold hover:from-pink-700 hover:to-rose-600 flex items-center gap-2 shadow-md shadow-pink-500/25 transition-all font-syne"
              >
                <Instagram className="w-4 h-4 text-white" />
                <span>Instagram Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919999999999?text=Hi%20Rohitha,%20we%20would%20like%20to%20discuss%20a%20movie%20role%20or%20shoot%20collaboration."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white border border-pink-300 text-gray-900 text-xs uppercase tracking-[0.2em] font-syne font-bold hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-700 transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="px-5 py-3 rounded-full border border-pink-200 bg-white text-pink-700 text-xs uppercase tracking-[0.2em] font-syne font-bold hover:bg-pink-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-pink-600" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
