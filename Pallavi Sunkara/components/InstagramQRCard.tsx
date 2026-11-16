"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Check, Copy, ArrowUpRight, Sparkles, Smartphone, MessageSquare, Mail } from "lucide-react";

export default function InstagramQRCard() {
  const [copied, setCopied] = useState<boolean>(false);
  const instaUrl = "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(instaUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-plum-950 border-t border-b border-champagne-300/15 relative overflow-hidden">
      
      {/* Background Soft Plum Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-mauve-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto rounded-3xl bg-plum-900/90 border border-champagne-300/15 glass-panel p-8 sm:p-14 relative z-10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Authentic Official Instagram QR Code (Commanding Size) */}
          <div className="md:col-span-6 flex flex-col items-center justify-center">
            <div className="p-4 sm:p-6 rounded-[2.5rem] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.85)] border-4 border-plum-800/90 relative group overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] max-w-full aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/instagram-qr.png"
                  alt="Official Instagram QR Code for @pallaviiii124"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne-200 font-syne font-semibold">
              <Smartphone className="w-4 h-4 text-mauve-400" />
              <span>Scan with phone camera to connect</span>
            </div>
          </div>

          {/* Right Column: Narrative & Direct Booking Touchpoints */}
          <div className="md:col-span-6 space-y-6 text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne-300/30 bg-plum-950 text-xs uppercase tracking-[0.3em] text-mauve-300 font-syne font-bold">
              <Sparkles className="w-3.5 h-3.5 text-mauve-400" />
              <span>Verified Creator &amp; Actress</span>
            </div>

            <div>
              <h2 className="font-abril text-4xl sm:text-5xl text-champagne-100 font-normal uppercase tracking-tight">
                Connect on <span className="italic font-normal text-mauve-300">@pallaviiii124</span>
              </h2>
              <p className="text-sm sm:text-base text-champagne-200/90 font-syne mt-3 max-w-lg leading-relaxed">
                Direct access for fashion campaigns, heritage handloom collaborations, Telugu commercial acting, and high-fashion runway bookings.
              </p>
            </div>

            {/* Quick Metrics in Voluptuous Abril */}
            <div className="grid grid-cols-3 gap-6 py-4 border-t border-b border-champagne-300/15 text-center md:text-left font-syne">
              <div>
                <span className="font-abril text-3xl sm:text-4xl text-champagne-100 font-normal block">74+</span>
                <span className="text-xs uppercase tracking-wider text-mauve-400 font-semibold">Real Posts</span>
              </div>
              <div>
                <span className="font-abril text-3xl sm:text-4xl text-champagne-100 font-normal block">120K+</span>
                <span className="text-xs uppercase tracking-wider text-mauve-400 font-semibold">Reels Reach</span>
              </div>
              <div>
                <span className="font-abril text-3xl sm:text-4xl text-champagne-100 font-normal block">Direct</span>
                <span className="text-xs uppercase tracking-wider text-champagne-300 font-semibold">Availability</span>
              </div>
            </div>

            {/* Action Buttons: Multi-Channel Instant Contact */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.2em] font-bold hover:bg-mauve-400 hover:text-plum-950 flex items-center gap-2 shadow-xl shadow-mauve-500/10 transition-all font-syne"
              >
                <Instagram className="w-4 h-4 text-plum-950" />
                <span>Instagram Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919999999999?text=Hi%20Pallavi,%20we%20would%20like%20to%20collaborate%20on%20a%20shoot."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-plum-950 border border-emerald-400/40 text-emerald-300 text-xs uppercase tracking-[0.2em] font-syne font-bold hover:bg-emerald-500 hover:text-black transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="px-6 py-3 rounded-full border border-champagne-300/30 text-champagne-200 text-xs uppercase tracking-[0.2em] font-syne hover:border-mauve-400 hover:text-champagne-100 transition-all flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-mauve-300" />}
                <span>{copied ? "Link Copied" : "Copy Profile Link"}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
