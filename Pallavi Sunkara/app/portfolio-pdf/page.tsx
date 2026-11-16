import Image from "next/image";
import { Download, Instagram, Sparkles, Smartphone, Check, Heart, Eye, Film, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Pallavi Sunkara • Official Editorial Portfolio (PDF Edition)",
  description: "Complete print-ready high-fashion portfolio, comp card measurements, and Instagram archive for Pallavi Sunkara.",
};

export default function PortfolioPdfPage() {
  const runwayLooks = [
    {
      id: "look-1",
      category: "Temple Silk Drape",
      subtitle: "Gold Saree & Emerald Choker",
      mediaSrc: "/pallavi/reel_2_thumb.jpg",
      badge: "01 • 9:16 Motion",
    },
    {
      id: "look-2",
      category: "Hair Artistry",
      subtitle: "Butterfly Clips & Zari Blouse",
      mediaSrc: "/pallavi/photo_8.jpg",
      badge: "02 • 4:5 Portrait",
    },
    {
      id: "look-3",
      category: "Royal Bridal Reel",
      subtitle: "Crimson Silk & Maang Tikka",
      mediaSrc: "/pallavi/reel_4_thumb.jpg",
      badge: "03 • 9:16 Motion",
    },
    {
      id: "look-4",
      category: "Heritage Temple Saree",
      subtitle: "Mogra Garland & Gold Jhumkas",
      mediaSrc: "/pallavi/photo_12.jpg",
      badge: "04 • 3:4 Silk",
    },
    {
      id: "look-5",
      category: "Cocktail Couture",
      subtitle: "Wine Sequin Evening Saree",
      mediaSrc: "/pallavi/photo_10.jpg",
      badge: "05 • 3:4 Glamour",
    },
    {
      id: "look-6",
      category: "Avant-Garde Cinema",
      subtitle: "Silver Oxidized Screen Look",
      mediaSrc: "/pallavi/reel_3_thumb.jpg",
      badge: "06 • 9:16 Motion",
    },
  ];

  const lookbookPieces = [
    {
      title: "Royal Crimson South Indian Bridal Drape",
      category: "Bridal Couture",
      mediaSrc: "/pallavi/reel_4_thumb.jpg",
      styling: "Heritage Handloom • Bridal Zari & Maang Tikka",
      year: "2026",
    },
    {
      title: "Butterfly Hair Artistry & Zari Blouse",
      category: "Beauty Artistry",
      mediaSrc: "/pallavi/photo_8.jpg",
      styling: "Makeover By Sobiya • Maroon Velvet & Zari",
      year: "2026",
    },
    {
      title: "Heritage Gold Silk Saree & Mogra Garland",
      category: "Heritage Sarees",
      mediaSrc: "/pallavi/photo_12.jpg",
      styling: "The Aarna Studio • Traditional South Indian Silk",
      year: "2026",
    },
    {
      title: "Temple Silk Drape & Emerald Jewels",
      category: "Heritage Sarees",
      mediaSrc: "/pallavi/reel_2_thumb.jpg",
      styling: "MUA Ana Reddy • Soiree Hyderabad",
      year: "2026",
    },
    {
      title: "Poolside Resort Summer Walk",
      category: "Contemporary",
      mediaSrc: "/pallavi/photo_4.jpg",
      styling: "Resort Collection • White Slit Skirt & Black Tank",
      year: "2026",
    },
    {
      title: "Wine Sequin Evening Saree",
      category: "Heritage Sarees",
      mediaSrc: "/pallavi/photo_10.jpg",
      styling: "Studio Hyderabad Fashion • Cocktail Glamour",
      year: "2026",
    },
    {
      title: "Telugu Feature Screen Test Close-Up",
      category: "Beauty & Screen",
      mediaSrc: "/pallavi/photo_17.jpg",
      styling: "South Cinema Production • Smokey Eyes & Poise",
      year: "2026",
    },
    {
      title: "Avant-Garde Silver Oxidized Look",
      category: "Contemporary",
      mediaSrc: "/pallavi/reel_3_thumb.jpg",
      styling: "Creative Studio • Statement Silver & Curls",
      year: "2026",
    },
    {
      title: "Golden Sunlight Yellow Saree Candid",
      category: "Heritage Sarees",
      mediaSrc: "/pallavi/photo_16.jpg",
      styling: "Natural Sunlight Outdoor • Festive Silk",
      year: "2026",
    },
    {
      title: "Goa Coastal Ocean & Cliffside Breeze",
      category: "Contemporary",
      mediaSrc: "/pallavi/photo_26.jpg",
      styling: "Monsoon Vacation Shoot • Coastal Resort Dress",
      year: "2026",
    },
    {
      title: "Natural Daylight Beauty Portrait",
      category: "Beauty",
      mediaSrc: "/pallavi/photo_1.jpg",
      styling: "Portraiture Photography • Candid Smile",
      year: "2026",
    },
    {
      title: "Sculpted Glow Makeup Portfolio",
      category: "Beauty",
      mediaSrc: "/pallavi/photo_5.jpg",
      styling: "Makeup By Sobiya • Hyderabad Bridal Glam",
      year: "2026",
    },
  ];

  const bentoCluster1 = [
    { type: "reel", title: "Celebration Gala in Golden Studio", tag: "9:16 Reel", mediaSrc: "/pallavi/reel_1_thumb.jpg", span: "col-span-12 sm:col-span-3 row-span-2", objectPos: "object-center" },
    { type: "post", title: "Butterfly Hair Artistry & Zari", tag: "Hair & Zari", mediaSrc: "/pallavi/photo_8.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_20%]" },
    { type: "post", title: "Golden Silk Saree & Jasmine", tag: "Heritage Silk", mediaSrc: "/pallavi/photo_16.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_20%]" },
    { type: "reel", title: "Temple Silk Drape & Emerald Jewels", tag: "9:16 Reel", mediaSrc: "/pallavi/reel_2_thumb.jpg", span: "col-span-12 sm:col-span-3 row-span-2", objectPos: "object-[center_15%]" },
    { type: "post", title: "Poolside Resort Summer Walk", tag: "Resort Casual", mediaSrc: "/pallavi/photo_4.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_25%]" },
    { type: "post", title: "Wine Sequin Evening Saree", tag: "Cocktail Saree", mediaSrc: "/pallavi/photo_10.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_25%]" },
  ];

  const bentoCluster2 = [
    { type: "reel", title: "Avant-Garde Silver Oxidized Look", tag: "9:16 Reel", mediaSrc: "/pallavi/reel_3_thumb.jpg", span: "col-span-12 sm:col-span-3 row-span-2", objectPos: "object-[center_15%]" },
    { type: "post", title: "Natural Daylight Beauty Portrait", tag: "Daylight Poise", mediaSrc: "/pallavi/photo_1.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-center" },
    { type: "post", title: "Cinematic Screen Test Close-Up", tag: "Screen Test", mediaSrc: "/pallavi/photo_17.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-center" },
    { type: "reel", title: "Royal Crimson Bridal Drape", tag: "9:16 Reel", mediaSrc: "/pallavi/reel_4_thumb.jpg", span: "col-span-12 sm:col-span-3 row-span-2", objectPos: "object-[center_15%]" },
    { type: "post", title: "Temple Jewels & Mogra Garland", tag: "Temple Bridal", mediaSrc: "/pallavi/photo_12.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_20%]" },
    { type: "post", title: "Goa Coastal Ocean Editorial", tag: "Coastal Resort", mediaSrc: "/pallavi/photo_26.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_25%]" },
  ];

  const bentoCluster3 = [
    { type: "post", title: "Artisanal South Silk Drape", tag: "Handloom Weave", mediaSrc: "/pallavi/photo_43.jpg", span: "col-span-6 sm:col-span-4", objectPos: "object-[center_20%]" },
    { type: "post", title: "Character Poise Close-Up", tag: "Character Poise", mediaSrc: "/pallavi/photo_46.jpg", span: "col-span-6 sm:col-span-4", objectPos: "object-[center_20%]" },
    { type: "post", title: "Royal Crimson Pallu by Singhanias", tag: "Crimson Silk", mediaSrc: "/pallavi/photo_50.jpg", span: "col-span-6 sm:col-span-4", objectPos: "object-[center_20%]" },
    { type: "post", title: "Editorial Campaign Stride", tag: "Campaign Walk", mediaSrc: "/pallavi/photo_54.jpg", span: "col-span-6 sm:col-span-4", objectPos: "object-[center_25%]" },
    { type: "post", title: "Natural Sunlight Saree Candid", tag: "Sunlight Candid", mediaSrc: "/pallavi/photo_58.jpg", span: "col-span-6 sm:col-span-4", objectPos: "object-center" },
    { type: "post", title: "Hyderabad Atelier Fashion Shoot", tag: "Atelier Saree", mediaSrc: "/pallavi/photo_60.jpg", span: "col-span-6 sm:col-span-4", objectPos: "object-[center_20%]" },
  ];

  const stats = [
    { label: "Height", imperial: "5'7\"", metric: "170 cm" },
    { label: "Discipline", imperial: "Model & Actress", metric: "Couture & Screen" },
    { label: "Bust", imperial: "34B", metric: "86 cm" },
    { label: "Waist", imperial: "26 in", metric: "66 cm" },
    { label: "Hips", imperial: "36 in", metric: "91 cm" },
    { label: "Shoe", imperial: "6 UK / 8 US", metric: "39 EU" },
    { label: "Eyes", imperial: "Dark Brown", metric: "Dark Brown" },
    { label: "Hair", imperial: "Dark Natural", metric: "Natural Waves" },
    { label: "Location", imperial: "Hyd / Knl, IN", metric: "Hyderabad & Kurnool" },
  ];

  return (
    <div className="w-full bg-[#120E12] text-[#FAF3EB] font-syne antialiased selection:bg-[#E8A2B6] selection:text-[#120E12] print:bg-[#120E12]">
      
      {/* 
        ========================================================================
        COVER / SECTION 1: VOGUE STATEMENT HERO
        ========================================================================
      */}
      <section className="relative w-full min-h-[920px] flex flex-col justify-between p-12 overflow-hidden border-b border-[#FAF3EB]/15 bg-gradient-to-b from-[#1C151C] via-[#120E12] to-[#120E12]">
        
        {/* Background Visual Portrait */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none overflow-hidden">
          <Image
            src="/pallavi/reel_1_thumb.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-[center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120E12] via-[#120E12]/80 to-transparent" />
        </div>

        {/* Top Header Strip */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#FAF3EB]/15 pb-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full border-2 border-[#FAF3EB]/40 p-0.5 overflow-hidden">
              <Image
                src="/pallavi/avatar.jpg"
                alt="Pallavi Sunkara"
                fill
                priority
                className="object-cover object-top rounded-full"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#E8A2B6] font-bold block">
                Official Editorial Portfolio • 2026
              </span>
              <span className="font-abril text-2xl text-[#FAF3EB] tracking-wide">
                PALLAVI SUNKARA
              </span>
            </div>
          </div>

          <div className="text-right text-xs uppercase tracking-[0.2em] text-[#FAF3EB]/80 font-mono">
            <span>Height 5&apos;7&quot; (170 cm) • Hyd, India</span>
          </div>
        </div>

        {/* Center Grand Cover Name */}
        <div className="relative z-10 py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C151C] border border-[#FAF3EB]/25 text-xs uppercase tracking-[0.3em] text-[#E8A2B6] font-bold shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#EFA68F]" />
            <span>High-Fashion Model &amp; Commercial Screen Actress</span>
          </div>

          <h1 className="font-abril text-7xl sm:text-8xl md:text-9xl tracking-[0.02em] text-[#FAF3EB] leading-[0.88] uppercase">
            PALLAVI <span className="italic text-[#E8A2B6]">SUNKARA</span>
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#FAF3EB]/90 font-medium max-w-2xl mx-auto">
            Haute Couture • Commercial Screen Acting • Heritage Handloom Drapes
          </p>

          <div className="pt-6 flex items-center justify-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-[#FAF3EB]/70">
            <span>Instagram: @pallaviiii124</span>
            <span>•</span>
            <span>Reach: 175K+ Impressions</span>
            <span>•</span>
            <span>74+ Campaigns</span>
          </div>
        </div>

        {/* Measurements Bar */}
        <div className="relative z-10 p-6 rounded-2xl bg-[#1C151C]/90 border border-[#FAF3EB]/20 grid grid-cols-5 md:grid-cols-9 gap-3 text-center">
          {stats.map((s) => (
            <div key={s.label} className="border-r last:border-r-0 border-[#FAF3EB]/15 pr-2">
              <span className="text-[10px] uppercase tracking-wider text-[#E8A2B6] font-bold block">
                {s.label}
              </span>
              <span className="font-abril text-xl text-[#FAF3EB] block mt-0.5">
                {s.imperial}
              </span>
              <span className="text-[10px] text-[#FAF3EB]/75 block">
                {s.metric}
              </span>
            </div>
          ))}
        </div>

      </section>

      {/* 
        ========================================================================
        SECTION 2: RUNWAY STRIP (ARRANGED IN TWO ROWS IN PDF AS REQUESTED)
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-[#FAF3EB]/15 break-after-page">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#E8A2B6] font-bold block mb-1">
              02 / Curated Runway Looks
            </span>
            <h2 className="font-abril text-4xl sm:text-5xl text-[#FAF3EB] uppercase">
              Runway <span className="italic text-[#E8A2B6]">Sequence</span>
            </h2>
            <p className="text-xs text-[#FAF3EB]/75 mt-1">
              Arranged in two balanced rows across sequence 01 to 06 with uniform 3:4 portrait ratios.
            </p>
          </div>

          <span className="text-xs font-mono text-[#FAF3EB]/60 uppercase tracking-widest">
            Two-Row Editorial Layout
          </span>
        </div>

        {/* 2-ROW GRID (3 COLUMNS X 2 ROWS = 6 CARDS) */}
        <div className="grid grid-cols-3 gap-6">
          {runwayLooks.map((look) => (
            <div
              key={look.id}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#1C151C] border border-[#FAF3EB]/20 shadow-2xl group"
            >
              <Image
                src={look.mediaSrc}
                alt={look.category}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E12]/90 via-transparent to-[#120E12]/40" />
              
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-[#FAF3EB]">
                <span className="px-2.5 py-1 rounded-full bg-[#120E12]/85 border border-[#FAF3EB]/25">
                  {look.badge}
                </span>
                <span className="text-[#E8A2B6]">2026</span>
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#120E12]/90 border border-[#FAF3EB]/20">
                <span className="text-xs font-bold text-[#FAF3EB] block truncate">
                  {look.category}
                </span>
                <span className="text-[10px] text-[#E8A2B6] block truncate mt-0.5">
                  {look.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 3 & 4: ACHIEVEMENTS & KEY STUDIO COLLABORATIONS
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-[#FAF3EB]/15">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E8A2B6] font-bold block mb-1">
            03 / Verified Collaborations
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl text-[#FAF3EB] uppercase">
            Studio <span className="italic text-[#E8A2B6]">Partnerships</span> &amp; Reach
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl bg-[#1C151C] border border-[#FAF3EB]/15">
            <span className="text-xs uppercase text-[#E8A2B6] font-bold block">Instagram Posts</span>
            <span className="font-abril text-4xl text-[#FAF3EB] block mt-2">74+</span>
            <span className="text-xs text-[#FAF3EB]/70 block mt-1">Editorial shoots &amp; sarees</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#1C151C] border border-[#FAF3EB]/15">
            <span className="text-xs uppercase text-[#E8A2B6] font-bold block">Reels Impressions</span>
            <span className="font-abril text-4xl text-[#FAF3EB] block mt-2">175K+</span>
            <span className="text-xs text-[#FAF3EB]/70 block mt-1">Runway &amp; screen reach</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#1C151C] border border-[#FAF3EB]/15">
            <span className="text-xs uppercase text-[#E8A2B6] font-bold block">Discipline</span>
            <span className="font-abril text-4xl text-[#FAF3EB] block mt-2">Couture</span>
            <span className="text-xs text-[#FAF3EB]/70 block mt-1">Runway &amp; Screen Acting</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#1C151C] border border-[#FAF3EB]/15">
            <span className="text-xs uppercase text-[#E8A2B6] font-bold block">Base Location</span>
            <span className="font-abril text-4xl text-[#FAF3EB] block mt-2">Hyd / Knl</span>
            <span className="text-xs text-[#FAF3EB]/70 block mt-1">Hyderabad &amp; Pan-India</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#1C151C]/80 border border-[#FAF3EB]/15">
            <span className="text-xs uppercase tracking-widest text-[#E8A2B6] font-bold block">Frame Us Photography (@__frame__us)</span>
            <p className="text-xs text-[#FAF3EB]/85 mt-1 leading-relaxed">
              Traditional South Indian portrait atelier specializing in cinematic silk saree movement, temple jewelry lighting, and artistic pleat flows.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#1C151C]/80 border border-[#FAF3EB]/15">
            <span className="text-xs uppercase tracking-widest text-[#E8A2B6] font-bold block">The Aarna Studio (@the.aarnastudio)</span>
            <p className="text-xs text-[#FAF3EB]/85 mt-1 leading-relaxed">
              Couture bridal and hair artistry studio crafting regal South Indian bridal makeovers, butterfly clips, and antique gold styling.
            </p>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 5: CURATED LOOKBOOK (ALL 12 ITEMS FULLY EXPANDED, NO LOAD MORE)
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-[#FAF3EB]/15 break-after-page">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#E8A2B6] font-bold block mb-1">
              04 / Editorial Campaigns
            </span>
            <h2 className="font-abril text-4xl sm:text-5xl text-[#FAF3EB] uppercase">
              Curated <span className="italic text-[#E8A2B6]">Campaign</span> Looks (12/12)
            </h2>
            <p className="text-xs text-[#FAF3EB]/75 mt-1">
              Complete catalog across Heritage Sarees, Bridal Couture, Screen Tests, and Beauty Portraits.
            </p>
          </div>

          <span className="text-xs font-mono text-[#FAF3EB]/60 uppercase tracking-widest">
            All 12 Looks Displayed
          </span>
        </div>

        {/* Complete 12-Piece Grid in 3 Columns */}
        <div className="grid grid-cols-3 gap-6">
          {lookbookPieces.map((piece, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#1C151C] border border-[#FAF3EB]/20 shadow-xl"
            >
              <Image
                src={piece.mediaSrc}
                alt={piece.title}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E12]/90 via-transparent to-[#120E12]/30" />

              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-[#FAF3EB]">
                <span className="px-2.5 py-1 rounded-full bg-[#120E12]/85 border border-[#FAF3EB]/25">
                  {piece.category}
                </span>
                <span className="text-[#E8A2B6] font-mono">{piece.year}</span>
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-[#120E12]/95 border border-[#FAF3EB]/20">
                <span className="text-xs font-bold text-[#FAF3EB] block truncate">
                  {piece.title}
                </span>
                <span className="text-[10px] text-[#E8A2B6] block truncate mt-0.5">
                  {piece.styling}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 6: BENTO VAULT (ALL 18 ITEMS FULLY EXPANDED, NO LOAD MORE)
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-[#FAF3EB]/15 break-after-page">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#E8A2B6] font-bold block mb-1">
              05 / Interlocking Bento Vault
            </span>
            <h2 className="font-abril text-4xl sm:text-5xl text-[#FAF3EB] uppercase">
              Curated <span className="italic text-[#E8A2B6]">Bento</span> Archive (18/18)
            </h2>
            <p className="text-xs text-[#FAF3EB]/75 mt-1">
              All 18 verified media items in tailored 1.4fr side reels and 4:5 portrait center cards with zero cropping.
            </p>
          </div>

          <span className="text-xs font-mono text-[#FAF3EB]/60 uppercase tracking-widest">
            All 18 Media Items Displayed
          </span>
        </div>

        {/* Cluster 1 */}
        <div className="space-y-6">
          <div className="grid grid-cols-4 auto-rows-[340px] gap-4">
            {bentoCluster1.map((item, index) => (
              <div
                key={`c1-${index}`}
                className={`relative rounded-2xl overflow-hidden bg-[#1C151C] border border-[#FAF3EB]/20 shadow-xl ${
                  item.type === "reel" ? "col-span-1 row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                <Image
                  src={item.mediaSrc}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.objectPos}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120E12]/90 via-transparent to-[#120E12]/30" />

                <div className="absolute top-3 left-3 text-[10px] uppercase font-bold text-[#FAF3EB] px-2 py-0.5 rounded-full bg-[#120E12]/85 border border-[#FAF3EB]/25">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#120E12]/95 border border-[#FAF3EB]/20">
                  <span className="text-xs font-bold text-[#FAF3EB] block truncate">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cluster 2 */}
          <div className="grid grid-cols-4 auto-rows-[340px] gap-4">
            {bentoCluster2.map((item, index) => (
              <div
                key={`c2-${index}`}
                className={`relative rounded-2xl overflow-hidden bg-[#1C151C] border border-[#FAF3EB]/20 shadow-xl ${
                  item.type === "reel" ? "col-span-1 row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                <Image
                  src={item.mediaSrc}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.objectPos}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120E12]/90 via-transparent to-[#120E12]/30" />

                <div className="absolute top-3 left-3 text-[10px] uppercase font-bold text-[#FAF3EB] px-2 py-0.5 rounded-full bg-[#120E12]/85 border border-[#FAF3EB]/25">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#120E12]/95 border border-[#FAF3EB]/20">
                  <span className="text-xs font-bold text-[#FAF3EB] block truncate">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cluster 3 (Handloom Vault) */}
          <div className="grid grid-cols-3 gap-4">
            {bentoCluster3.map((item, index) => (
              <div
                key={`c3-${index}`}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#1C151C] border border-[#FAF3EB]/20 shadow-xl"
              >
                <Image
                  src={item.mediaSrc}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.objectPos}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120E12]/90 via-transparent to-[#120E12]/30" />

                <div className="absolute top-3 left-3 text-[10px] uppercase font-bold text-[#FAF3EB] px-2 py-0.5 rounded-full bg-[#120E12]/85 border border-[#FAF3EB]/25">
                  {item.tag}
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#120E12]/95 border border-[#FAF3EB]/20">
                  <span className="text-xs font-bold text-[#FAF3EB] block truncate">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 7: DIGITAL COMP CARD (AGENCY MEASUREMENTS)
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-[#FAF3EB]/15">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E8A2B6] font-bold block mb-1">
            06 / Agency Comp Card
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl text-[#FAF3EB] uppercase">
            Official <span className="italic text-[#E8A2B6]">Composite</span> Card
          </h2>
        </div>

        {/* 4-Photo Agency Layout */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#FAF3EB]/20 shadow-lg">
              <Image src="/pallavi/avatar.jpg" alt="Portrait Headshot" fill className="object-cover object-top" />
            </div>
            <span className="text-xs uppercase font-bold text-[#FAF3EB] block text-center">Portrait Headshot</span>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#FAF3EB]/20 shadow-lg">
              <Image src="/pallavi/photo_8.jpg" alt="Heritage Saree" fill className="object-cover object-top" />
            </div>
            <span className="text-xs uppercase font-bold text-[#FAF3EB] block text-center">Heritage Saree</span>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#FAF3EB]/20 shadow-lg">
              <Image src="/pallavi/photo_10.jpg" alt="Profile Glamour" fill className="object-cover object-top" />
            </div>
            <span className="text-xs uppercase font-bold text-[#FAF3EB] block text-center">Profile View</span>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#FAF3EB]/20 shadow-lg">
              <Image src="/pallavi/photo_4.jpg" alt="Full Look Silhouette" fill className="object-cover object-top" />
            </div>
            <span className="text-xs uppercase font-bold text-[#FAF3EB] block text-center">Full Length Look</span>
          </div>
        </div>

        {/* Agency Data Grid */}
        <div className="p-6 rounded-2xl bg-[#1C151C] border border-[#FAF3EB]/20 grid grid-cols-5 md:grid-cols-9 gap-3 text-center">
          {stats.map((s) => (
            <div key={s.label} className="border-r last:border-r-0 border-[#FAF3EB]/15 pr-2">
              <span className="text-[10px] uppercase text-[#E8A2B6] font-bold block">{s.label}</span>
              <span className="font-abril text-xl text-[#FAF3EB] block mt-0.5">{s.imperial}</span>
              <span className="text-[10px] text-[#FAF3EB]/70 block">{s.metric}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 8: OFFICIAL ENLARGED INSTAGRAM QR CODE HUB
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-[#FAF3EB]/15 bg-gradient-to-b from-[#120E12] to-[#1C151C]">
        <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-[#1C151C] border border-[#FAF3EB]/20 grid grid-cols-12 gap-8 items-center shadow-2xl">
          
          {/* Prominently Enlarged Official Instagram QR Code */}
          <div className="col-span-5 flex flex-col items-center">
            <div className="p-5 rounded-3xl bg-white shadow-2xl border-4 border-[#3D1E3D] overflow-hidden">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <Image
                  src="/instagram-qr.png"
                  alt="Official Instagram QR for @pallaviiii124"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <span className="mt-4 text-xs uppercase tracking-wider text-[#FAF3EB]/80 font-bold flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#E8A2B6]" />
              <span>Scan with phone camera to connect</span>
            </span>
          </div>

          {/* Narrative & Direct Contact */}
          <div className="col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#120E12] border border-[#FAF3EB]/25 text-[11px] uppercase tracking-widest text-[#E8A2B6] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#EFA68F]" />
              Official Verified Instagram Hub
            </span>

            <h3 className="font-abril text-4xl text-[#FAF3EB] uppercase">
              Connect on <span className="italic text-[#E8A2B6]">@pallaviiii124</span>
            </h3>

            <p className="text-xs text-[#FAF3EB]/85 leading-relaxed">
              Scan the authentic official QR code to access 74+ real campaign reels, backstage styling, and direct agency casting correspondence.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#FAF3EB]/80">
              <span className="font-bold text-[#E8A2B6]">Link:</span>
              <span className="underline decoration-[#E8A2B6] truncate">
                https://www.instagram.com/pallaviiii124?utm_source=qr&amp;psln=cWY1aWthYTA2NDl2
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FOOTER
        ========================================================================
      */}
      <footer className="w-full py-8 px-12 flex items-center justify-between text-xs text-[#FAF3EB]/60 uppercase tracking-widest">
        <span>© 2026 Pallavi Sunkara • Haute Couture Portfolio</span>
        <span>Curated Agency Editorial Edition</span>
      </footer>

    </div>
  );
}
