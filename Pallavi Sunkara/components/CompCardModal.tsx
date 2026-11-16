"use client";

import Image from "next/image";
import { X, Printer, Instagram, Mail, MapPin } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-plum-950/95 backdrop-blur-2xl overflow-y-auto animate-fade-in font-syne"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-plum-900 rounded-2xl overflow-hidden border border-champagne-300/20 shadow-2xl p-6 md:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-champagne-300/15">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full border border-champagne-300/40 p-0.5 overflow-hidden flex-shrink-0">
              <Image
                src="/pallavi/avatar.jpg"
                alt="Pallavi Sunkara"
                fill
                className="object-cover object-top rounded-full"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-mauve-300 block font-syne font-bold">
                Official Agency Composite Card
              </span>
              <span className="font-abril text-xl text-champagne-100 font-normal">
                PALLAVI SUNKARA
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.2em] font-bold hover:bg-mauve-400 hover:text-plum-950 flex items-center gap-1.5 transition-all font-syne"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-plum-950 text-champagne-200 hover:text-white border border-champagne-300/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Standard A5 / Z-Card Layout */}
        <div id="printable-comp-card" className="bg-plum-950 rounded-xl p-6 border border-champagne-300/15 space-y-6">
          
          <div className="text-center space-y-1 pb-4 border-b border-champagne-300/15">
            <h2 className="font-abril text-3xl sm:text-4xl text-champagne-100 font-normal tracking-[0.05em] uppercase">
              PALLAVI SUNKARA
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-mauve-300 font-syne font-bold">
              Fashion • Traditional Handlooms • Screen Acting • Hyderabad
            </p>
          </div>

          {/* 4-Photo Composite Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="space-y-1">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-champagne-300/20">
                <Image
                  src="/pallavi/avatar.jpg"
                  alt="Beauty Headshot"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-syne text-champagne-200 font-semibold block text-center">Headshot</span>
            </div>

            <div className="space-y-1">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-champagne-300/20">
                <Image
                  src="/pallavi/photo_8.jpg"
                  alt="Traditional Saree Drape"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-syne text-champagne-200 font-semibold block text-center">Heritage Silk</span>
            </div>

            <div className="space-y-1">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-champagne-300/20">
                <Image
                  src="/pallavi/photo_10.jpg"
                  alt="Profile View"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-syne text-champagne-200 font-semibold block text-center">Profile</span>
            </div>

            <div className="space-y-1">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-champagne-300/20">
                <Image
                  src="/pallavi/photo_4.jpg"
                  alt="Full Length Silhouette"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-syne text-champagne-200 font-semibold block text-center">Full Body</span>
            </div>
          </div>

          {/* Measurements & Agency Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-champagne-300/15">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-mauve-300 font-syne block font-bold">
                Official Agency Statistics
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-syne">
                <div>
                  <span className="text-champagne-300/70 block text-[10px] uppercase font-semibold">Height</span>
                  <span className="text-champagne-100 font-medium">5&apos;7&quot; • 170 cm</span>
                </div>
                <div>
                  <span className="text-champagne-300/70 block text-[10px] uppercase font-semibold">Bust</span>
                  <span className="text-champagne-100 font-medium">34B • 86 cm</span>
                </div>
                <div>
                  <span className="text-champagne-300/70 block text-[10px] uppercase font-semibold">Waist</span>
                  <span className="text-champagne-100 font-medium">26 in • 66 cm</span>
                </div>
                <div>
                  <span className="text-champagne-300/70 block text-[10px] uppercase font-semibold">Hips</span>
                  <span className="text-champagne-100 font-medium">36 in • 91 cm</span>
                </div>
                <div>
                  <span className="text-champagne-300/70 block text-[10px] uppercase font-semibold">Shoes</span>
                  <span className="text-champagne-100 font-medium">6 UK • 39 EU</span>
                </div>
                <div>
                  <span className="text-champagne-300/70 block text-[10px] uppercase font-semibold">Eyes &amp; Hair</span>
                  <span className="text-champagne-100 font-medium">Dark Hazel / Brown</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-mauve-300 font-syne block font-bold">
                Direct Representation &amp; Booking
              </span>
              <div className="space-y-2 text-xs font-syne text-champagne-200">
                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-mauve-400" />
                  <a
                    href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-mauve-300 font-medium"
                  >
                    @pallaviiii124
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-mauve-400" />
                  <span>bookings.pallavisunkara@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-mauve-400" />
                  <span>Hyderabad, Telangana, India (Pan-India &amp; Global)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
