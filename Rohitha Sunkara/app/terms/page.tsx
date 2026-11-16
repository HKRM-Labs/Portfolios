import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin, Clapperboard } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rohitha Sunkara (Ruhi)",
  description: "Official Terms and Conditions for casting calls, feature film agreements, commercial modeling representation, and likeness rights for Rohitha Sunkara.",
};

export default function TermsPage() {
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
              <span>Official Engagement Terms</span>
            </span>
            <span className="font-abril text-2xl text-gray-950">
              ROHITHA SUNKARA (RUHI)
            </span>
          </div>
        </div>

        <h1 className="font-abril text-4xl sm:text-5xl text-gray-950 font-normal mt-6 mb-3">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
          Effective 2026 &bull; Film Auditions, Screen Engagements &amp; Brand Contracts
        </p>
      </div>

      {/* Content Body */}
      <div className="space-y-10 text-sm sm:text-base leading-relaxed text-gray-700 font-normal">
        
        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing this portfolio or submitting casting inquiries for <strong>Rohitha Sunkara (Ruhi)</strong>, you agree to comply with and be bound by the following terms of engagement. These terms govern all booking desk interactions, feature film auditions, modeling shoots, runway assignments, and brand endorsements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            2. Casting &amp; Audition Confirmations
          </h2>
          <p>
            All professional engagements, film auditions, and campaign dates are subject to formal confirmation by Rohitha Sunkara&apos;s management desk:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><strong>Option Holds:</strong> First-option date holds are valid for 72 hours and must be confirmed via written contract or call sheet.</li>
            <li><strong>Screen Contracts:</strong> Feature film agreements and multi-episode OTT commitments require formal signing of standard industry talent contracts.</li>
            <li><strong>Travel &amp; Logistics:</strong> For projects outside Hyderabad (Pan-India or International), round-trip business/standard transit, lodging, and per diem must be provided by the production.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            3. Likeness, Licensing &amp; Usage Rights
          </h2>
          <p>
            Image and video rights are granted solely according to the agreed contract terms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li><strong>Moral Rights &amp; Credit:</strong> Editorial publications and film promotional assets must credit <em>Rohitha Sunkara</em> (<a href="https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==" className="text-pink-600 underline font-semibold" target="_blank" rel="noreferrer">@hitaa.s</a>) alongside production partners.</li>
            <li><strong>Prohibited Use:</strong> The unauthorized scraping, alteration, or feeding of Rohitha Sunkara&apos;s face or likeness into generative AI models is strictly prohibited and subject to legal prosecution.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-gray-950 font-normal">
            4. Direct Inquiries
          </h2>
          <p>
            For legal inquiries or talent contract discussions, contact the management desk:
          </p>
          <div className="p-6 rounded-2xl bg-pink-50 border border-pink-200 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Mail className="w-4 h-4 text-pink-600" />
              <span>rohita.sunkara@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <MapPin className="w-4 h-4 text-pink-600" />
              <span>Hyderabad, Telangana, India</span>
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
