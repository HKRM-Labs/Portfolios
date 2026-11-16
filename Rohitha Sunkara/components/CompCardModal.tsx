"use client";

import Image from "next/image";
import { X, Printer, Instagram, Mail, MapPin, Clapperboard, Sparkles } from "lucide-react";

interface CompCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompCardModal({ isOpen, onClose }: CompCardModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-md overflow-y-auto animate-fade-in font-syne"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border-2 border-pink-200 shadow-2xl p-6 md:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-pink-100">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full border-2 border-pink-400 p-0.5 overflow-hidden flex-shrink-0">
              <Image
                src="/rohitha/avatar.jpg"
                alt="Rohitha Sunkara"
                fill
                className="object-cover object-top rounded-full"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-pink-600 block font-syne font-bold flex items-center gap-1.5">
                <Clapperboard className="w-3 h-3 text-pink-600" />
                <span>Film Actress &bull; Official Composite Card</span>
              </span>
              <span className="font-abril text-xl text-gray-950 font-normal">
                ROHITHA SUNKARA (RUHI)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs uppercase tracking-[0.2em] font-bold hover:from-pink-700 hover:to-rose-600 flex items-center gap-1.5 transition-all font-syne shadow-md shadow-pink-500/20"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-pink-50 text-gray-700 hover:text-pink-600 border border-pink-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Standard A5 / Z-Card Layout in White & Pink */}
        <div id="printable-comp-card" className="bg-pink-50/40 rounded-2xl p-6 border border-pink-200 space-y-6">
          
          <div className="text-center space-y-1 pb-4 border-b border-pink-200">
            <h2 className="font-abril text-3xl sm:text-4xl text-gray-950 font-normal tracking-[0.05em] uppercase">
              ROHITHA SUNKARA
            </h2>
            <p className="text-xs uppercase tracking-[0.28em] text-pink-700 font-syne font-bold">
              Feature Films &bull; Web Series &bull; Haute Couture &bull; Hyderabad
            </p>
          </div>

          {/* 4-Photo Composite Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="space-y-1.5">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-pink-200 shadow-sm bg-white">
                <Image
                  src="/rohitha/photo_2.jpg"
                  alt="Beauty Headshot"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-syne text-gray-800 font-bold block text-center">Headshot</span>
            </div>

            <div className="space-y-1.5">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-pink-200 shadow-sm bg-white">
                <Image
                  src="/rohitha/photo_22.jpg"
                  alt="Traditional Saree Drape"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-syne text-gray-800 font-bold block text-center">Heritage Silk</span>
            </div>

            <div className="space-y-1.5">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-pink-200 shadow-sm bg-white">
                <Image
                  src="/rohitha/photo_61.jpg"
                  alt="Modern Couture Silhouette"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-syne text-gray-800 font-bold block text-center">Couture</span>
            </div>

            <div className="space-y-1.5">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-pink-200 shadow-sm bg-white">
                <Image
                  src="/rohitha/photo_83.jpg"
                  alt="Royal Bridal Silk Drape"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-syne text-gray-800 font-bold block text-center">Bridal Silk</span>
            </div>
          </div>

          {/* Measurements Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 py-4 border-y border-pink-200 text-center font-syne text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-pink-700 font-bold block">Height</span>
              <strong className="text-gray-950 text-sm">5&apos;6&quot; / 168 cm</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-pink-700 font-bold block">Bust</span>
              <strong className="text-gray-950 text-sm">34B / 86 cm</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-pink-700 font-bold block">Waist</span>
              <strong className="text-gray-950 text-sm">26 in / 66 cm</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-pink-700 font-bold block">Hips</span>
              <strong className="text-gray-950 text-sm">36 in / 91 cm</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-pink-700 font-bold block">Eyes / Hair</span>
              <strong className="text-gray-950 text-sm">Dark Brown / Dark</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-pink-700 font-bold block">Languages</span>
              <strong className="text-gray-950 text-sm">Telugu / Hindi / Eng</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-pink-700 font-bold block">Base</span>
              <strong className="text-gray-950 text-sm">Hyderabad, IN</strong>
            </div>
          </div>

          {/* Agency & Direct Castings Details */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs font-syne">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-900 block">
                Direct Casting &amp; Audition Desk
              </span>
              <span className="text-gray-600 block">
                Instagram: <strong>@hitaa.s</strong> &bull; Open for Feature Films
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 relative border border-pink-300 rounded-lg p-1 bg-white">
                <Image
                  src="/instagram-qr.png"
                  alt="QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[11px] text-gray-600">
                <strong className="text-gray-900 block font-bold">Scan to Verify</strong>
                <span>Instagram Profile</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
