"use client";

import { useState } from "react";
import { Send, Instagram, MessageSquare, Download, CheckCircle2, Clapperboard, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingCTAProps {
  onOpenCompCard: () => void;
}

export default function BookingCTA({ onOpenCompCard }: BookingCTAProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "Feature Film (Lead / Pivotal Role)",
    shootDate: "",
    location: "Hyderabad",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#FFFFFF", "#FCE7F3", "#F472B6", "#DB2777", "#BE185D"],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        projectType: "Feature Film (Lead / Pivotal Role)",
        shootDate: "",
        location: "Hyderabad",
        notes: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-12 bg-pink-50/30 border-t border-pink-200/80">
      
      {/* Header */}
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-syne block mb-2 font-bold flex items-center gap-1.5">
          <Clapperboard className="w-3.5 h-3.5 text-pink-600" />
          <span>10 / Direct Casting</span>
        </span>
        <h2 className="font-abril text-4xl sm:text-6xl text-gray-950 font-normal uppercase tracking-tight">
          Direct <span className="italic font-normal text-pink-600">Casting Desk</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Instant Channels in White & Pink */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Instagram Direct DM */}
          <a
            href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-pink-200 hover:border-pink-500 transition-all block group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500 font-syne font-semibold">
                Official Instagram
              </span>
              <Instagram className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-abril text-3xl text-gray-950 group-hover:text-pink-600 transition-colors font-normal">
              @hitaa.s
            </div>
            <span className="text-xs text-pink-700 font-syne block mt-2 font-bold">
              Direct message for casting inquiries ↗
            </span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/919999999999?text=Hi%20Rohitha,%20we%20would%20like%20to%20discuss%20a%20movie%20role%20or%20campaign%20collaboration."
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-pink-200 hover:border-emerald-500 transition-all block group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500 font-syne font-semibold">
                Casting WhatsApp
              </span>
              <MessageSquare className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-abril text-3xl text-gray-950 group-hover:text-emerald-600 transition-colors font-normal">
              Direct Inquiries
            </div>
            <span className="text-xs text-emerald-600 font-syne block mt-2 font-bold">
              Audition inquiries &amp; screen tests ↗
            </span>
          </a>

          {/* Download Comp Card */}
          <button
            onClick={onOpenCompCard}
            className="w-full p-4 sm:p-5 rounded-2xl border-2 border-pink-200 bg-white hover:bg-pink-50 hover:border-pink-500 transition-all flex items-center justify-between text-xs uppercase tracking-[0.16em] font-syne group shadow-sm font-bold"
          >
            <span className="text-gray-900 group-hover:text-pink-700 transition-colors">
              Digital Comp Card
            </span>
            <Download className="w-4 h-4 text-pink-600 group-hover:text-pink-700 transition-colors" />
          </button>

        </div>

        {/* Right Column: Casting Form in White & Pink */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-white border-2 border-pink-200 shadow-sm">
          {submitted ? (
            <div className="py-14 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="font-abril text-3xl text-gray-950">
                Audition Inquiry Logged
              </h3>
              <p className="text-sm text-gray-600 font-syne font-medium">
                Rohitha&apos;s management desk will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-pink-700 font-syne block mb-1.5 font-bold">
                    Casting Director / Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-pink-50/50 border border-pink-200 text-gray-900 placeholder:text-gray-400 text-sm font-syne focus:border-pink-500 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-pink-700 font-syne block mb-1.5 font-bold">
                    Production House / Studio / Agency
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Banner or Production Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-pink-50/50 border border-pink-200 text-gray-900 placeholder:text-gray-400 text-sm font-syne focus:border-pink-500 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-pink-700 font-syne block mb-1.5 font-bold">
                    Official Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="casting@production.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-pink-50/50 border border-pink-200 text-gray-900 placeholder:text-gray-400 text-xs font-syne focus:border-pink-500 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-pink-700 font-syne block mb-1.5 font-bold">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-pink-50/50 border border-pink-200 text-gray-900 text-xs font-syne focus:border-pink-500 focus:bg-white focus:outline-none transition-colors"
                  >
                    <option>Feature Film (Lead / Pivotal Role)</option>
                    <option>OTT Web Series &amp; Originals</option>
                    <option>Pan-Indian Multi-lingual Cinema</option>
                    <option>Commercial Ad Film &amp; Endorsement</option>
                    <option>Haute Couture Runway / Lookbook</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-pink-700 font-syne block mb-1.5 font-bold">
                    Shoot / Audition Date
                  </label>
                  <input
                    type="date"
                    value={formData.shootDate}
                    onChange={(e) => setFormData({ ...formData, shootDate: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-pink-50/50 border border-pink-200 text-gray-900 text-xs font-syne focus:border-pink-500 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-pink-700 font-syne block mb-1.5 font-bold">
                  Character Brief &amp; Script Overview
                </label>
                <textarea
                  rows={3}
                  placeholder="Character arc, languages required, schedule, shooting locations..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-pink-50/50 border border-pink-200 text-gray-900 placeholder:text-gray-400 text-sm font-syne focus:border-pink-500 focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold hover:from-pink-700 hover:to-rose-600 transition-all font-syne shadow-md shadow-pink-500/20"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>

      </div>

    </section>
  );
}
