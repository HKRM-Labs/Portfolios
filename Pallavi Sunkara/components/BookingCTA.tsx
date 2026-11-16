"use client";

import { useState } from "react";
import { Send, Instagram, MessageSquare, Download, CheckCircle2 } from "lucide-react";
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
    projectType: "Heritage Handloom / Saree",
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
      colors: ["#FAF3EB", "#F4E5D4", "#E8A2B6", "#D47A95", "#EFA68F"],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        projectType: "Heritage Handloom / Saree",
        shootDate: "",
        location: "Hyderabad",
        notes: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-12 bg-plum-950 border-t border-champagne-300/15">
      
      {/* Header */}
      <div className="mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-mauve-300 font-syne block mb-2 font-bold">
          09 / Representation &amp; Direct Castings
        </span>
        <h2 className="font-abril text-4xl sm:text-6xl text-champagne-100 font-normal uppercase tracking-tight">
          Direct <span className="italic font-normal text-mauve-300">Booking Desk</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Instant Channels */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Instagram Direct DM */}
          <a
            href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-plum-900 border border-champagne-300/15 hover:border-mauve-400 transition-all block group shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-champagne-300/70 font-syne">
                Official Instagram
              </span>
              <Instagram className="w-5 h-5 text-mauve-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-abril text-3xl text-champagne-100 group-hover:text-mauve-200 transition-colors font-normal">
              @pallaviiii124
            </div>
            <span className="text-xs text-champagne-200 font-syne block mt-2 font-medium">
              Direct Message for instant availability ↗
            </span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/919999999999?text=Hi%20Pallavi,%20we%20would%20like%20to%20discuss%20a%20shoot%20collaboration."
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-plum-900 border border-champagne-300/15 hover:border-emerald-400/60 transition-all block group shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.25em] text-champagne-300/70 font-syne">
                WhatsApp Casting Desk
              </span>
              <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-abril text-3xl text-champagne-100 group-hover:text-emerald-300 transition-colors font-normal">
              Instant Scheduling
            </div>
            <span className="text-xs text-emerald-400 font-syne block mt-2 font-medium">
              Connect with management desk directly ↗
            </span>
          </a>

          {/* Download Comp Card */}
          <button
            onClick={onOpenCompCard}
            className="w-full p-6 rounded-2xl border border-champagne-300/20 bg-plum-900 hover:bg-champagne-200 hover:text-plum-950 transition-all flex items-center justify-between text-xs uppercase tracking-[0.2em] font-syne group"
          >
            <span className="font-semibold text-champagne-100 group-hover:text-plum-950 transition-colors">
              Download Official Comp Card (PDF)
            </span>
            <Download className="w-4 h-4 text-mauve-300 group-hover:text-plum-950 transition-colors" />
          </button>

        </div>

        {/* Right Column: Casting Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-plum-900/90 border border-champagne-300/15 glass-panel shadow-2xl">
          {submitted ? (
            <div className="py-14 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
              <h3 className="font-abril text-3xl text-champagne-100">
                Inquiry Logged
              </h3>
              <p className="text-sm text-champagne-200 font-syne">
                Management will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-mauve-300 font-syne block mb-1.5 font-semibold">
                    Your Name / Contact
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-plum-950 border border-champagne-300/20 text-champagne-100 placeholder:text-champagne-400/40 text-sm font-syne focus:border-mauve-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-mauve-300 font-syne block mb-1.5 font-semibold">
                    Brand / Agency / Studio
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company or Studio"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-plum-950 border border-champagne-300/20 text-champagne-100 placeholder:text-champagne-400/40 text-sm font-syne focus:border-mauve-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-mauve-300 font-syne block mb-1.5 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-plum-950 border border-champagne-300/20 text-champagne-100 placeholder:text-champagne-400/40 text-xs font-syne focus:border-mauve-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-mauve-300 font-syne block mb-1.5 font-semibold">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-plum-950 border border-champagne-300/20 text-champagne-100 text-xs font-syne focus:border-mauve-400 focus:outline-none transition-colors"
                  >
                    <option className="bg-plum-950 text-champagne-100">Heritage Handloom / Saree</option>
                    <option className="bg-plum-950 text-champagne-100">Bridal Campaign &amp; Jewels</option>
                    <option className="bg-plum-950 text-champagne-100">Runway / Ramp Walk</option>
                    <option className="bg-plum-950 text-champagne-100">Screen / Commercial Acting</option>
                    <option className="bg-plum-950 text-champagne-100">Editorial Lookbook</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-mauve-300 font-syne block mb-1.5 font-semibold">
                    Target Shoot Date
                  </label>
                  <input
                    type="date"
                    value={formData.shootDate}
                    onChange={(e) => setFormData({ ...formData, shootDate: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl bg-plum-950 border border-champagne-300/20 text-champagne-100 text-xs font-syne focus:border-mauve-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-mauve-300 font-syne block mb-1.5 font-semibold">
                  Scope &amp; Moodboard Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Number of looks, venue, usage rights..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-plum-950 border border-champagne-300/20 text-champagne-100 placeholder:text-champagne-400/40 text-sm font-syne focus:border-mauve-400 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.25em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-all font-syne shadow-xl shadow-mauve-500/15"
              >
                Submit Casting Request
              </button>
            </form>
          )}
        </div>

      </div>

    </section>
  );
}
