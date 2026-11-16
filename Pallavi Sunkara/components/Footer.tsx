"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowUp, MessageSquare, Mail, Download } from "lucide-react";
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
    <footer className="w-full py-16 px-6 md:px-12 bg-plum-950 border-t border-champagne-300/15 text-champagne-200/90 font-syne text-xs">
      
      {/* Top Row: Brand & Back to Top */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-champagne-300/15">
        
        {/* Brand with Profile Avatar */}
        <Link href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-full border-2 border-champagne-300/40 p-0.5 group-hover:border-mauve-400 transition-all duration-300 shadow-lg overflow-hidden flex-shrink-0">
            <Image
              src="/pallavi/avatar.jpg"
              alt="Pallavi Sunkara"
              fill
              sizes="44px"
              className="object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="font-abril text-2xl tracking-[0.06em] text-champagne-100 uppercase font-normal block group-hover:text-mauve-300 transition-colors">
              PALLAVI SUNKARA
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-mauve-300 font-semibold block">
              High-Fashion Model &amp; Actress
            </span>
          </div>
        </Link>

        {/* Section Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.2em]">
          {[
            { label: "Editorial", href: "#editorial" },
            { label: "Runway", href: "#runway" },
            { label: "9:16 Reels", href: "#reels" },
            { label: "Insta Bento", href: "#gallery" },
            { label: "Comp Card", href: "#comp-card" },
            { label: "Instagram QR", href: "#follow" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(item.href);
              }}
              className="hover:text-mauve-300 transition-colors cursor-pointer font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Direct Contact Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="/Pallavi_Sunkara_Portfolio.pdf"
            download="Pallavi_Sunkara_Editorial_Portfolio.pdf"
            aria-label="Download PDF Portfolio"
            className="p-2.5 rounded-full border border-champagne-300/30 hover:border-apricot-400 text-champagne-200 hover:text-apricot-300 transition-colors"
            title="Download PDF Portfolio"
          >
            <Download className="w-4 h-4 text-apricot-400" />
          </a>
          <a
            href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-full border border-champagne-300/30 hover:border-mauve-400 text-champagne-200 hover:text-mauve-300 transition-colors"
          >
            <Instagram className="w-4 h-4 text-mauve-400" />
          </a>

          <a
            href="https://wa.me/919999999999?text=Hi%20Pallavi,%20we%20would%20like%20to%20collaborate."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Casting Desk"
            className="p-2.5 rounded-full border border-champagne-300/30 hover:border-emerald-400 text-champagne-200 hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
          </a>

          <button
            onClick={() => handleScrollTo(0)}
            className="p-2.5 rounded-full border border-champagne-300/30 hover:border-mauve-400 text-champagne-100 hover:text-mauve-300 transition-colors cursor-pointer ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-mauve-400" />
          </button>
        </div>

      </div>

      {/* Bottom Row: Legal Pages, SEO Disclosures & Rights */}
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.15em] text-champagne-300/70">
        <div>
          © 2026 Pallavi Sunkara • Official Luxury Editorial &amp; Screen Portfolio. All rights reserved.
        </div>

        {/* Legal Policy Links for SEO & Compliance */}
        <div className="flex items-center gap-6 text-[11px] font-semibold text-champagne-300">
          <Link href="/privacy" className="hover:text-mauve-300 transition-colors underline underline-offset-4">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-mauve-300 transition-colors underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>

    </footer>
  );
}
