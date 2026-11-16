import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin, Clapperboard } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rohitha Sunkara (Ruhi)",
  description: "Official Privacy Policy regarding casting inquiries, movie auditions, data handling, and media likeness for Rohitha Sunkara.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-syne py-20 px-6 md:px-16 max-w-4xl mx-auto selection:bg-pink-300 selection:text-pink-950">
      
      {/* Back to Portfolio Link */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-pink-50 border border-pink-200 text-xs uppercase tracking-[0.2em] text-pink-700 hover:text-white hover:bg-pink-600 transition-all font-bold shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-14 pb-8 border-b border-pink-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-12 h-12 rounded-full border-2 border-pink-400 overflow-hidden shadow-md flex-shrink-0">
            <Image
              src="/rohitha/avatar.jpg"
              alt="Rohitha Sunkara"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-pink-600 font-bold block flex items-center gap-1.5">
              <Clapperboard className="w-3.5 h-3.5 text-pink-600" />
              <span>Official Legal Disclosure</span>
            </span>
            <span className="font-abril text-2xl text-gray-950">
              ROHITHA SUNKARA (RUHI)
            </span>
          </div>
        </div>

        <h1 className="font-abril text-4xl sm:text-5xl text-gray-950 font-normal mt-6 mb-3">
          Privacy Policy
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
          Effective 2026 &bull; Casting Inquiries, Auditions &amp; Web Visitors
        </p>
      </div>

      {/* Content Body */}
      <div className="space-y-10 text-sm sm:text-base leading-relaxed text-gray-700 font-normal">
        
        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            1. Overview &amp; Representation Scope
          </h2>
          <p>
            This website represents the official digital portfolio of film actress and high-fashion model <strong>Rohitha Sunkara (Ruhi)</strong> (accessible via <a href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==" className="text-pink-600 underline font-semibold" target="_blank" rel="noreferrer">@hitaa.s</a>). We respect your privacy and are committed to safeguarding all personal information submitted through direct casting requests, audition inquiries, movie roles, and management correspondence.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            2. Information We Collect
          </h2>
          <p>
            When submitting an inquiry through our Direct Casting Desk or contacting management via WhatsApp and email, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><strong>Contact Details:</strong> Name, professional email address, production house / agency affiliation, and contact number.</li>
            <li><strong>Project Scope:</strong> Feature film character arcs, audition schedules, shooting dates, shooting locations (Hyderabad, Pan-India), script synopses, and licensing terms.</li>
            <li><strong>Technical Analytics:</strong> Anonymous, aggregate telemetry to guarantee fast, smooth page delivery and responsive viewing across all devices.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            3. How Information Is Used
          </h2>
          <p>
            All submitted details are strictly utilized to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Verify audition availability and coordinate casting schedules across Hyderabad and Pan-Indian cinema hubs.</li>
            <li>Draft commercial acting agreements, character contracts, and collaboration forms with production houses and directors.</li>
            <li>Deliver official agency comp cards, high-resolution monologue audition reels, and measurement updates.</li>
          </ul>
          <p>
            We <strong>never sell, lease, or monetize</strong> your inquiry information with third-party advertising networks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            4. Media Likeness &amp; Copyright Notice
          </h2>
          <p>
            All film stills, monologue recordings, photographs, and video reels showcased on this portfolio are the intellectual property of Rohitha Sunkara and verified studio collaborators. Downloading, reproducing, or redistributing visual likeness for unauthorized commercial marketing or AI training without explicit written consent is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            5. Contact Casting Desk
          </h2>
          <p>
            For data inquiries, rights requests, or audition booking scheduling, please contact our representation desk directly:
          </p>
          <div className="p-6 rounded-2xl bg-pink-50 border border-pink-200 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Mail className="w-4 h-4 text-pink-600" />
              <span>rohita.sunkara@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <MapPin className="w-4 h-4 text-pink-600" />
              <span>Hyderabad, Telangana, India (Pan-India Cinema Availability)</span>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Return */}
      <div className="mt-16 pt-8 border-t border-pink-200 flex items-center justify-between text-xs text-gray-500 uppercase tracking-widest font-semibold">
        <span>© 2026 Rohitha Sunkara</span>
        <Link href="/" className="hover:text-pink-600 transition-colors">
          Return to Home ↗
        </Link>
      </div>

    </main>
  );
}
