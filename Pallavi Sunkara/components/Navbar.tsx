"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Menu, X, Download } from "lucide-react";
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
    { name: "Motion & QR", href: "#reels" },
    { name: "Campaigns", href: "#editorial" },
    { name: "Bento Vault", href: "#gallery" },
    { name: "Comp Card", href: "#comp-card" },
    { name: "Booking", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-plum-950/92 backdrop-blur-2xl border-b border-champagne-300/15 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Avatar Profile & Name */}
        <Link href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-champagne-300/40 p-0.5 group-hover:border-mauve-400 transition-all duration-300 shadow-lg overflow-hidden flex-shrink-0">
            <Image
              src="/pallavi/avatar.jpg"
              alt="Pallavi Sunkara Profile"
              fill
              sizes="44px"
              priority
              className="object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="font-abril text-xl sm:text-2xl tracking-[0.06em] text-champagne-100 uppercase group-hover:text-mauve-300 transition-colors">
            PALLAVI SUNKARA
          </span>
        </Link>

        {/* Desktop Navigation with Smooth Lenis Momentum Scroll */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase tracking-[0.25em] font-medium text-champagne-300/80 hover:text-champagne-100 hover:text-mauve-300 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Details */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="/Pallavi_Sunkara_Portfolio.pdf"
            download="Pallavi_Sunkara_Editorial_Portfolio.pdf"
            className="px-4 py-2 rounded-full border border-champagne-300/30 text-champagne-100 text-xs uppercase tracking-wider hover:border-mauve-400 hover:text-mauve-300 transition-all font-syne flex items-center gap-1.5 shadow-md"
            title="Download PDF Portfolio"
          >
            <Download className="w-3.5 h-3.5 text-apricot-400" />
            <span className="text-[11px] font-bold">PDF Portfolio</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.25em] hover:bg-mauve-400 hover:text-plum-950 transition-all duration-300 font-syne font-bold shadow-lg"
          >
            Book Castings
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-champagne-100 hover:text-mauve-300 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-8 bg-plum-950/98 backdrop-blur-2xl border-b border-champagne-300/15 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.25em] text-champagne-300/80 hover:text-mauve-300 py-2 border-b border-champagne-300/10 font-mono"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between">
              <a
                href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne-300 font-mono"
              >
                <Instagram className="w-4 h-4 text-mauve-400" />
                <span>@pallaviiii124</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-5 py-2 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.2em] font-syne font-bold"
              >
                Book Castings
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
