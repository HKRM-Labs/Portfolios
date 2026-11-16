"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollRunwayFramer from "@/components/ScrollRunwayFramer";
import KineticTextMarquee from "@/components/KineticTextMarquee";
import AchievementsMatrix from "@/components/AchievementsMatrix";
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
      <main className="relative w-full min-h-screen bg-plum-950 text-foreground selection:bg-mauve-400 selection:text-plum-950">
        {/* Minimal High-Fashion Navigation */}
        <Navbar />

        {/* Section 1: Vogue/Didone Hero Statement with Full-Screen Shifted Up Motion Video */}
        <Hero onOpenCompCard={() => setIsCompCardOpen(true)} />

        {/* Section 2: Scroll-Linked Motion Runway (Uniform 3:4 Ratio Cards Glide 01 to 06) */}
        <ScrollRunwayFramer />

        {/* Section 3: Kinetic Text Marquee (3 Bi-Directional High-Fashion Strips: Right, Left, Right) */}
        <KineticTextMarquee />

        {/* Section 4: Key Collaborations, Reach & Verified Studios */}
        <SectionTransition>
          <AchievementsMatrix />
        </SectionTransition>

        {/* Section 4: Dedicated 9:16 Cinematic Reels Showcase & Integrated Instagram QR Hub */}
        <SectionTransition>
          <div id="follow">
            <ReelsShowcase />
          </div>
        </SectionTransition>

        {/* Section 5: Full-Bleed Editorial Campaign Looks with Interactive Load More */}
        <SectionTransition>
          <Lookbook />
        </SectionTransition>

        {/* Section 6: Curated Instagram Bento Grid & 1:1 Square Posts with Load More */}
        <SectionTransition>
          <EditorialGallery />
        </SectionTransition>

        {/* Section 7: Agency Model & Actress Comp Card */}
        <SectionTransition>
          <StatsCompCard onOpenCompCard={() => setIsCompCardOpen(true)} />
        </SectionTransition>

        {/* Section 8: Direct Booking Desk with WhatsApp & Instagram DM */}
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