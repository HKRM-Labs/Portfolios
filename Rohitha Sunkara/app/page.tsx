"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollRunwayFramer from "@/components/ScrollRunwayFramer";
import KineticTextMarquee from "@/components/KineticTextMarquee";
import AchievementsMatrix from "@/components/AchievementsMatrix";
import ActingShowcase from "@/components/ActingShowcase";
import ReelsShowcase from "@/components/ReelsShowcase";
import Lookbook from "@/components/Lookbook";
import EditorialGallery from "@/components/EditorialGallery";
import StatsCompCard from "@/components/StatsCompCard";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import CompCardModal from "@/components/CompCardModal";
import SmoothScroll from "@/components/SmoothScroll";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  const [isCompCardOpen, setIsCompCardOpen] = useState(false);

  return (
    <SmoothScroll>
      <main className="relative w-full min-h-screen bg-white text-gray-900 selection:bg-pink-300 selection:text-pink-950 overflow-x-clip">
        {/* Minimal High-Fashion Navigation */}
        <Navbar />

        {/* Section 01: Vogue/Didone Hero Statement in White & Pink */}
        <Hero onOpenCompCard={() => setIsCompCardOpen(true)} />

        {/* Section 02: Scroll-Linked Motion Runway (Uniform 3:4 Ratio Cards Glide 01 to 06) */}
        <ScrollRunwayFramer />

        {/* Section 03: Kinetic Text Marquee (3 Bi-Directional High-Fashion Strips: Right, Left, Right) */}
        <KineticTextMarquee />

        {/* Section 04: Key Screen Metrics, Reach & Verified Studios */}
        <SectionTransition>
          <AchievementsMatrix />
        </SectionTransition>

        {/* Section 05: Dedicated Cinematic Acting Showcase & Film Roles (NEW!) */}
        <SectionTransition>
          <ActingShowcase />
        </SectionTransition>

        {/* Section 06: Dedicated 9:16 Cinematic Reels Showcase (1.8M Viral Reach) & Integrated Instagram QR Hub */}
        <SectionTransition>
          <div id="follow">
            <ReelsShowcase />
          </div>
        </SectionTransition>

        {/* Section 07: Full-Bleed Editorial Campaign Looks with Interactive Load More */}
        <SectionTransition>
          <Lookbook />
        </SectionTransition>

        {/* Section 08: Curated Instagram Bento Grid & 1:1 Square Posts with Load More */}
        <SectionTransition>
          <EditorialGallery />
        </SectionTransition>

        {/* Section 09: Agency Model & Film Actress Comp Card */}
        <SectionTransition>
          <StatsCompCard onOpenCompCard={() => setIsCompCardOpen(true)} />
        </SectionTransition>

        {/* Section 10: Direct Casting Desk with WhatsApp & Instagram DM */}
        <SectionTransition>
          <BookingCTA onOpenCompCard={() => setIsCompCardOpen(true)} />
        </SectionTransition>

        {/* Minimalist Footer */}
        <Footer />

        {/* Printable High-Resolution Comp Card Modal */}
        <CompCardModal
          isOpen={isCompCardOpen}
          onClose={() => setIsCompCardOpen(false)}
        />
      </main>
    </SmoothScroll>
  );
}
