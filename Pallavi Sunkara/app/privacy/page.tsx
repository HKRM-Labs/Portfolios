import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pallavi Sunkara",
  description: "Official Privacy Policy regarding casting inquiries, data handling, and media likeness for Pallavi Sunkara.",
};

export default function PrivacyPolicyPage() {
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
              Official Legal Disclosure
            </span>
            <span className="font-abril text-2xl text-champagne-100">
              PALLAVI SUNKARA
            </span>
          </div>
        </div>

        <h1 className="font-abril text-4xl sm:text-5xl text-champagne-100 font-normal mt-6 mb-3">
          Privacy Policy
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] text-champagne-300/70">
          Last Updated: February 2026 • Effective for all casting inquiries &amp; web visitors
        </p>
      </div>

      {/* Content Body */}
      <div className="space-y-10 text-sm sm:text-base leading-relaxed text-champagne-200/90 font-light">
        
        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            1. Overview &amp; Representation Scope
          </h2>
          <p>
            This website represents the official digital portfolio of fashion model and actress <strong>Pallavi Sunkara</strong> (accessible via <a href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2" className="text-mauve-300 underline underline-offset-4" target="_blank" rel="noreferrer">@pallaviiii124</a>). We value your privacy and are committed to safeguarding all personal information submitted through direct casting requests, shoot collaborations, and management correspondence.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            2. Information We Collect
          </h2>
          <p>
            When submitting an inquiry through our Direct Booking Desk or contacting management via WhatsApp and email, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-champagne-300">
            <li><strong>Contact Details:</strong> Name, professional email address, studio/agency affiliation, and phone number.</li>
            <li><strong>Project Scope:</strong> Shoot dates, venue locations, project type (e.g. Heritage Saree, Commercial Acting, Bridal Campaign), moodboard references, and usage licensing terms.</li>
            <li><strong>Technical Analytics:</strong> Anonymous, aggregate telemetry to guarantee fast, smooth page delivery and device responsiveness.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            3. How Information Is Used
          </h2>
          <p>
            All submitted details are strictly utilized to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-champagne-300">
            <li>Verify model availability and coordinate casting schedules across Hyderabad, Pan-India, and global destinations.</li>
            <li>Draft commercial agreements, modeling release forms, and collaboration contracts with production houses and photographers.</li>
            <li>Deliver official agency comp cards, high-resolution lookbook assets, and measurement updates.</li>
          </ul>
          <p>
            We <strong>never sell, lease, or monetize</strong> your inquiry information with third-party advertising networks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            4. Media Likeness &amp; Copyright Notice
          </h2>
          <p>
            All campaign visuals, runway recordings, photographs, and video reels showcased on this portfolio are the intellectual property of Pallavi Sunkara and verified studio collaborators (including <em>Frame Us Photography</em> and <em>The Aarna Studio</em>). Downloading, reproducing, or redistributing visual likeness for unauthorized commercial marketing or AI training without explicit written consent is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-abril text-2xl text-champagne-100 font-normal">
            5. Contact Management Desk
          </h2>
          <p>
            For data inquiries, rights requests, or booking cancellations, please contact our representation desk directly:
          </p>
          <div className="p-6 rounded-2xl bg-plum-900 border border-champagne-300/15 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-champagne-100">
              <Mail className="w-4 h-4 text-mauve-400" />
              <span>bookings.pallavisunkara@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-champagne-100">
              <MapPin className="w-4 h-4 text-mauve-400" />
              <span>Hyderabad, Telangana, India (Pan-India &amp; Global Availability)</span>
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
