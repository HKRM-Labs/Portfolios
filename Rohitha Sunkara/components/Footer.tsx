"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUp, MessageSquare, Clapperboard } from "lucide-react";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  const handleScrollTo = (targetId: string | number) => {
    if (lenis) {
      lenis.scrollTo(targetId, {
        offset: 0,
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      if (typeof targetId === "number") {
        window.scrollTo({ top: targetId, behavior: "smooth" });
      } else {
        const el = document.querySelector(targetId);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full py-16 px-6 md:px-12 bg-white border-t border-pink-200/80 text-gray-700 font-syne text-xs">
      
      {/* Top Row: Brand & Back to Top */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-pink-100">
        
        {/* Brand with Profile Avatar */}
        <Link href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-full border-2 border-pink-300 p-0.5 group-hover:border-pink-500 transition-all duration-300 shadow-sm overflow-hidden flex-shrink-0">
            <Image
              src="/rohitha/avatar.jpg"
              alt="Rohitha Sunkara"
              fill
              sizes="44px"
              className="object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="font-abril text-2xl tracking-[0.05em] text-gray-950 uppercase font-normal block group-hover:text-pink-600 transition-colors">
              ROHITHA SUNKARA
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-pink-600 font-bold block">
              Ruhi &bull; Film Actress &amp; Model
            </span>
          </div>
        </Link>

        {/* Section Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-7 text-xs uppercase tracking-[0.2em]">
          {[
            { label: "Runway", href: "#runway" },
            { label: "Film Roles", href: "#acting" },
            { label: "9:16 Reels", href: "#reels" },
            { label: "Lookbook", href: "#editorial" },
            { label: "Insta Bento", href: "#gallery" },
            { label: "Comp Card", href: "#comp-card" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(item.href);
              }}
              className="hover:text-pink-600 transition-colors cursor-pointer font-bold"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Direct Contact Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-full border border-pink-200 hover:border-pink-500 text-gray-800 hover:text-pink-600 transition-colors shadow-sm hover:bg-pink-50"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
          </a>

          <a
            href="https://wa.me/919999999999?text=Hi%20Rohitha,%20we%20would%20like%20to%20collaborate."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Casting Desk"
            className="p-2.5 rounded-full border border-pink-200 hover:border-emerald-500 text-gray-800 hover:text-emerald-600 transition-colors shadow-sm hover:bg-emerald-50"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
          </a>

          <button
            onClick={() => handleScrollTo(0)}
            className="p-2.5 rounded-full border border-pink-200 hover:border-pink-500 text-gray-900 hover:text-pink-600 transition-colors cursor-pointer ml-2 shadow-sm hover:bg-pink-50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-pink-600" />
          </button>
        </div>

      </div>

      {/* Bottom Row: Legal Pages, SEO Disclosures & Rights */}
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.15em] text-gray-600">
        <div>
          © 2026 Rohitha Sunkara &bull; Film Actress &amp; Model. All rights reserved.
        </div>

        {/* Legal Policy Links */}
        <div className="flex items-center gap-6 text-[11px] font-bold text-gray-700">
          <Link href="/privacy" className="hover:text-pink-600 transition-colors underline underline-offset-4">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-pink-600 transition-colors underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>

    </footer>
  );
}
