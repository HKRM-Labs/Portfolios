import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pallavi Sunkara",
  description: "Official Terms and Conditions for booking, commercial modeling representation, likeness rights, and usage contracts for Pallavi Sunkara.",
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-plum-950 text-champagne-100 font-syne py-20 px-6 md:px-16 max-w-4xl mx-auto selection:bg-mauve-400 selection:text-plum-950">
      
      {/* Back to Portfolio Link */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-plum-900 border border-champagne-300/20 text-xs uppercase tracking-[0.2em] text-champagne-200 hover:text-white hover:border-mauve-400 transition-all font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-14 pb-8 border-b border-champagne-300/15">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-12 h-12 rounded-full border-2 border-champagne-300/40 overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/pallavi/avatar.jpg"
              alt="Pallavi Sunkara"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-mauve-300 font-bold block">
              Official Legal Terms
            </span>
            <span className="font-abril text-2xl text-champagne-100">
              PALLAVI SUNKARA
            </span>
          </div>
        </div>

        <h1 className="font-abril text-4xl sm:text-5xl text-champagne-100 font-normal mt-6 mb-3">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] text-champagne-300/70">
          Effective Date: February 2026 • Governing all shoot contracts, booking inquiries, and creative partnerships
        </p>
      </div>

      {/* Content Body */}
      <div className="space-y-10 text-sm sm:text-base leading-relaxed text-champagne-200/90 font-light">
        
        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing this portfolio or submitting casting inquiries for <strong>Pallavi Sunkara</strong>, you agree to comply with and be bound by the following terms of engagement. These terms govern all booking desk interactions, modeling shoots, runway assignments, and brand endorsements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            2. Casting &amp; Booking Protocols
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-champagne-300">
            <li><strong>Official Booking Inquiries:</strong> All casting requests must specify shoot date(s), call times, location, outfit counts, wardrobe styling provisions, and usage rights.</li>
            <li><strong>Confirmation &amp; Contracts:</strong> Dates are held only upon written confirmation from management and execution of an agreed standard model release contract.</li>
            <li><strong>Safe Working Environment:</strong> Production houses must provide professional changing facilities, security, and compliant shoot environments at all times.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            3. Intellectual Property &amp; Image Rights
          </h2>
          <p>
            All campaign imagery, video reels, and artistic outputs featured on this website remain protected under Indian and international copyright treaties.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-champagne-300">
            <li><strong>Usage Rights:</strong> Commercial usage rights granted to brands apply strictly to the agreed channels, durations, and geographical territories stipulated in individual shoot contracts.</li>
            <li><strong>Moral Rights &amp; Credit:</strong> Editorial publications must credit <em>Pallavi Sunkara</em> (<a href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2" className="text-mauve-300 underline" target="_blank" rel="noreferrer">@pallaviiii124</a>) alongside production partners.</li>
            <li><strong>Prohibited Use:</strong> The unauthorized scraping, alteration, or feeding of Pallavi Sunkara&apos;s face or likeness into generative AI models is strictly prohibited and subject to legal prosecution.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            4. Rescheduling &amp; Cancellations
          </h2>
          <p>
            Cancellations or date alterations require minimum 72 hours advance written notice to allow management to reallocate shoot calendars. Force majeure situations will be rescheduled mutually in good faith.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            5. Jurisdiction &amp; Legal Inquiries
          </h2>
          <p>
            Any disputes arising in connection with these terms or modeling collaborations shall be governed by the laws of Telangana, India, with exclusive jurisdiction in the courts of Hyderabad.
          </p>
          <div className="p-6 rounded-2xl bg-plum-900 border border-champagne-300/15 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-champagne-100">
              <Mail className="w-4 h-4 text-mauve-400" />
              <span>bookings.pallavisunkara@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-champagne-100">
              <MapPin className="w-4 h-4 text-mauve-400" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Return */}
      <div className="mt-16 pt-8 border-t border-champagne-300/15 flex items-center justify-between text-xs text-champagne-300/60 uppercase tracking-widest">
        <span>© 2026 Pallavi Sunkara</span>
        <Link href="/" className="hover:text-mauve-300 transition-colors">
          Return to Home ↗
        </Link>
      </div>

    </main>
  );
}
