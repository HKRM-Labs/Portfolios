"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Menu, X, Clapperboard, Download } from "lucide-react";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(href, {
          offset: 0,
          duration: 1.3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Runway", href: "#runway" },
    { name: "Film Roles", href: "#acting", highlight: true },
    { name: "9:16 Reels", href: "#reels" },
    { name: "Lookbook", href: "#editorial" },
    { name: "Social Vault", href: "#gallery" },
    { name: "Comp Card", href: "#comp-card" },
    { name: "Castings", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-white/95 backdrop-blur-2xl border-b border-pink-200/70 shadow-[0_4px_20px_rgba(244,114,182,0.12)]"
          : "py-5 bg-white/70 backdrop-blur-md border-b border-pink-100/60"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Avatar Profile & Name */}
        <Link href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-pink-300 p-0.5 group-hover:border-pink-500 transition-all duration-300 shadow-sm overflow-hidden flex-shrink-0">
            <Image
              src="/rohitha/avatar.jpg"
              alt="Rohitha Sunkara Profile"
              fill
              sizes="44px"
              priority
              className="object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-abril text-xl sm:text-2xl tracking-[0.05em] text-gray-900 uppercase group-hover:text-pink-600 transition-colors">
              ROHITHA SUNKARA
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-pink-600 font-syne -mt-1">
              Ruhi • Film Actress & Model
            </span>
          </div>
        </Link>

        {/* Desktop Navigation with Smooth Lenis Momentum Scroll */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs uppercase tracking-[0.22em] font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                link.highlight
                  ? "text-pink-600 hover:text-pink-800 bg-pink-50 px-3 py-1.5 rounded-full border border-pink-200"
                  : "text-gray-700 hover:text-pink-600"
              }`}
            >
              {link.highlight && <Clapperboard className="w-3.5 h-3.5 text-pink-600" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Details */}
        <div className="hidden sm:flex items-center gap-3.5">
          <a
            href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA=="
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-full border border-pink-200 text-gray-800 text-xs font-semibold hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span className="text-[11px] font-mono tracking-wider">@hitaa.s</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs uppercase tracking-[0.2em] hover:from-pink-700 hover:to-rose-600 transition-all duration-300 font-syne font-bold shadow-md shadow-pink-500/20"
          >
            Book Auditions
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-800 hover:text-pink-600 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-8 bg-white/98 backdrop-blur-2xl border-b border-pink-200 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.22em] font-semibold py-2.5 border-b border-pink-100 flex items-center justify-between ${
                  link.highlight ? "text-pink-600 font-bold" : "text-gray-800"
                }`}
              >
                <span>{link.name}</span>
                {link.highlight && <span className="text-[10px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Open For Roles</span>}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between">
              <a
                href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-pink-600 font-mono"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>@hitaa.s</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs uppercase tracking-[0.18em] font-syne font-bold"
              >
                Book Auditions
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
