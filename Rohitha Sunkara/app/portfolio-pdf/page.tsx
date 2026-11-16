import Image from "next/image";
import { Download, Instagram, Sparkles, Smartphone, Check, Heart, Eye, Film, ArrowUpRight, Clapperboard } from "lucide-react";

export const metadata = {
  title: "Rohitha Sunkara (Ruhi) • Official Editorial & Film Portfolio (PDF Edition)",
  description: "Complete print-ready high-fashion portfolio, feature film acting specs, comp card measurements, and Instagram archive for Rohitha Sunkara (@hitaa.s).",
};

export default function PortfolioPdfPage() {
  const runwayLooks = [
    {
      id: "look-1",
      category: "Cinematic Glamour Reel",
      subtitle: "Screen Presence & Dynamic Motion",
      mediaSrc: "/rohitha/reel_2_thumb.jpg",
      badge: "01 • 9:16 Motion",
    },
    {
      id: "look-2",
      category: "Heritage Silk Elegance",
      subtitle: "Traditional South Indian Handlooms",
      mediaSrc: "/rohitha/rohitha_media_03.jpg",
      badge: "02 • 4:5 Portrait",
    },
    {
      id: "look-3",
      category: "Modern Couture Cinema",
      subtitle: "Chic Contemporary Poise & Grace",
      mediaSrc: "/rohitha/reel_3_thumb.jpg",
      badge: "03 • 9:16 Motion",
    },
    {
      id: "look-4",
      category: "Editorial Portraiture",
      subtitle: "High-Contrast Studio Close-Up",
      mediaSrc: "/rohitha/rohitha_media_05.jpg",
      badge: "04 • 3:4 Studio",
    },
    {
      id: "look-5",
      category: "Celebration Festive Drape",
      subtitle: "Rich Embroidered Bridal Silks",
      mediaSrc: "/rohitha/rohitha_media_06.jpg",
      badge: "05 • 3:4 Festive",
    },
    {
      id: "look-6",
      category: "Theatrical Expression Reel",
      subtitle: "Acting Nuance & Film Dynamics",
      mediaSrc: "/rohitha/reel_4_thumb.jpg",
      badge: "06 • 9:16 Motion",
    },
  ];

  const lookbookPieces = [
    {
      title: "Cinematic Screen Monologue & Dramatic Poise",
      category: "Cinema & Film",
      mediaSrc: "/rohitha/rohitha_media_07.jpg",
      styling: "Character Screen Test • Dramatic Monologue Arc",
      year: "2026",
    },
    {
      title: "Heritage South Indian Silk & Zari Weaves",
      category: "Heritage Sarees",
      mediaSrc: "/rohitha/rohitha_media_03.jpg",
      styling: "Traditional Handloom Silk Drape & Jhumkas",
      year: "2026",
    },
    {
      title: "Sculpted High-Contrast Editorial Headshot",
      category: "Portrait Headshot",
      mediaSrc: "/rohitha/rohitha_media_05.jpg",
      styling: "Studio Lighting & Shadow • Modern Glamour",
      year: "2026",
    },
    {
      title: "Festive Embroidered Silk & Royal Poise",
      category: "Bridal & Festive",
      mediaSrc: "/rohitha/rohitha_media_06.jpg",
      styling: "Crimson Silk & Gold Temple Jewels",
      year: "2026",
    },
    {
      title: "Contemporary Chic & Modern Runway Motion",
      category: "Contemporary",
      mediaSrc: "/rohitha/reel_3_thumb.jpg",
      styling: "Avant-Garde Designer Silhouette",
      year: "2026",
    },
    {
      title: "Emotional Arc & Theatrical Gaze",
      category: "Cinema & Film",
      mediaSrc: "/rohitha/rohitha_media_12.jpg",
      styling: "Film Character Screen Test • Dramatic Close-Up",
      year: "2026",
    },
    {
      title: "Urban Radiance & Sunset Golden Hour",
      category: "Contemporary",
      mediaSrc: "/rohitha/rohitha_media_01.jpg",
      styling: "Natural Light Editorial • Everyday Elegance",
      year: "2026",
    },
    {
      title: "Intimate Theatrical Expression & Smile",
      category: "Portrait Headshot",
      mediaSrc: "/rohitha/rohitha_media_02.jpg",
      styling: "Portraiture Photography • Candid Emotion",
      year: "2026",
    },
    {
      title: "Regal Handloom Saree Draped in Grace",
      category: "Heritage Sarees",
      mediaSrc: "/rohitha/rohitha_media_04.jpg",
      styling: "Kanjeevaram Silk & Antique Gold",
      year: "2026",
    },
    {
      title: "High-Fashion Street Silhouette",
      category: "Contemporary",
      mediaSrc: "/rohitha/rohitha_media_08.jpg",
      styling: "Structured Modern Monochrome Walk",
      year: "2026",
    },
    {
      title: "Nuanced Film Audition Still",
      category: "Cinema & Film",
      mediaSrc: "/rohitha/rohitha_media_09.jpg",
      styling: "Character Look Test • Natural Dialog Tone",
      year: "2026",
    },
    {
      title: "Couture Motion & Ramp Energy",
      category: "Contemporary",
      mediaSrc: "/rohitha/rohitha_media_10.jpg",
      styling: "Dynamic Runway Turn & Pleat Swirl",
      year: "2026",
    },
  ];

  const bentoCluster1 = [
    { type: "reel", title: "Viral Screen Charm & Cinema Motion", tag: "1.8M Reel", mediaSrc: "/rohitha/reel_1_thumb.jpg", span: "col-span-12 sm:col-span-3 row-span-2", objectPos: "object-center" },
    { type: "post", title: "Cinematic Close-Up Screen Test", tag: "Character Still", mediaSrc: "/rohitha/rohitha_media_07.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_20%]" },
    { type: "post", title: "South Indian Traditional Silk Weave", tag: "Heritage Silk", mediaSrc: "/rohitha/rohitha_media_03.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_20%]" },
    { type: "reel", title: "Couture Grace & Theatrical Poise", tag: "101K Reel", mediaSrc: "/rohitha/reel_2_thumb.jpg", span: "col-span-12 sm:col-span-3 row-span-2", objectPos: "object-[center_15%]" },
    { type: "post", title: "High-Contrast Studio Portrait", tag: "Headshot", mediaSrc: "/rohitha/rohitha_media_05.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_25%]" },
    { type: "post", title: "Royal Crimson Silk & Gold Jewels", tag: "Festive Silk", mediaSrc: "/rohitha/rohitha_media_06.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_25%]" },
  ];

  const bentoCluster2 = [
    { type: "reel", title: "Contemporary Glamour & Ramp Energy", tag: "33.1K Reel", mediaSrc: "/rohitha/reel_3_thumb.jpg", span: "col-span-12 sm:col-span-3 row-span-2", objectPos: "object-[center_15%]" },
    { type: "post", title: "Screen Audition Gaze & Expression", tag: "Audition Still", mediaSrc: "/rohitha/rohitha_media_09.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-center" },
    { type: "post", title: "Dramatic Monologue Facial Poise", tag: "Cinema Frame", mediaSrc: "/rohitha/rohitha_media_12.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-center" },
    { type: "reel", title: "Heritage Nuance & Theatrical Expression", tag: "27.3K Reel", mediaSrc: "/rohitha/reel_4_thumb.jpg", span: "col-span-12 sm:col-span-3 row-span-2", objectPos: "object-[center_15%]" },
    { type: "post", title: "Sunset Golden Hour Natural Glow", tag: "Natural Light", mediaSrc: "/rohitha/rohitha_media_01.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_20%]" },
    { type: "post", title: "Pure Natural Smile & Charm", tag: "Candid", mediaSrc: "/rohitha/rohitha_media_02.jpg", span: "col-span-6 sm:col-span-3 row-span-1", objectPos: "object-[center_25%]" },
  ];

  const stats = [
    { label: "Height", imperial: "5'6\"", metric: "168 cm" },
    { label: "Discipline", imperial: "Film Actress", metric: "Cinema & Fashion" },
    { label: "Bust", imperial: "34B", metric: "86 cm" },
    { label: "Waist", imperial: "26 in", metric: "66 cm" },
    { label: "Hips", imperial: "36 in", metric: "91 cm" },
    { label: "Shoe", imperial: "6 UK / 8 US", metric: "39 EU" },
    { label: "Eyes", imperial: "Dark Brown", metric: "Dark Brown" },
    { label: "Languages", imperial: "Telugu / Hindi", metric: "& English" },
    { label: "Location", imperial: "Hyderabad", metric: "Telangana, IN" },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-syne antialiased selection:bg-pink-300 selection:text-pink-950 print:bg-white">
      
      {/* 
        ========================================================================
        COVER / SECTION 1: VOGUE STATEMENT HERO
        ========================================================================
      */}
      <section className="relative w-full min-h-[920px] flex flex-col justify-between p-12 overflow-hidden border-b border-pink-200 bg-gradient-to-b from-pink-50/50 via-white to-white">
        
        {/* Background Visual Portrait */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none overflow-hidden">
          <Image
            src="/rohitha/reel_1_thumb.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-[center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        {/* Top Header Strip */}
        <div className="relative z-10 flex items-center justify-between border-b border-pink-200 pb-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full border-2 border-pink-400 p-0.5 overflow-hidden shadow-sm">
              <Image
                src="/rohitha/avatar.jpg"
                alt="Rohitha Sunkara"
                fill
                priority
                className="object-cover object-top rounded-full"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-pink-600 font-bold block flex items-center gap-1.5">
                <Clapperboard className="w-3.5 h-3.5 text-pink-600" />
                <span>Official Film Acting &amp; Editorial Portfolio • 2026</span>
              </span>
              <span className="font-abril text-2xl text-gray-950 tracking-wide">
                ROHITHA SUNKARA (RUHI)
              </span>
            </div>
          </div>

          <div className="text-right text-xs uppercase tracking-[0.2em] text-gray-600 font-mono font-bold">
            <span>Telugu &bull; Hindi &bull; English • Hyderabad, India</span>
          </div>
        </div>

        {/* Center Grand Cover Name */}
        <div className="relative z-10 py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-300 text-xs uppercase tracking-[0.3em] text-pink-700 font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Open for Feature Films, OTT Series &amp; Cinema Roles</span>
          </div>

          <h1 className="font-abril text-7xl sm:text-8xl md:text-9xl tracking-[0.02em] text-gray-950 leading-[0.88] uppercase">
            ROHITHA <span className="italic text-pink-600">SUNKARA</span>
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-gray-700 font-semibold max-w-2xl mx-auto">
            Film Actress • Screen Presence • Haute Couture • Theatrical Range
          </p>

          <div className="pt-6 flex items-center justify-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-gray-600 font-semibold">
            <span>Instagram: @hitaa.s</span>
            <span>•</span>
            <span>Viral Reach: 1.8M+ Views</span>
            <span>•</span>
            <span>Audition-Ready</span>
          </div>
        </div>

        {/* Measurements Bar */}
        <div className="relative z-10 p-6 rounded-2xl bg-white border border-pink-200/90 shadow-sm grid grid-cols-5 md:grid-cols-9 gap-3 text-center">
          {stats.map((s) => (
            <div key={s.label} className="border-r last:border-r-0 border-pink-100 pr-2">
              <span className="text-[10px] uppercase tracking-wider text-pink-700 font-bold block">
                {s.label}
              </span>
              <span className="font-abril text-xl text-gray-950 block mt-0.5">
                {s.imperial}
              </span>
              <span className="text-[10px] text-gray-600 block font-medium">
                {s.metric}
              </span>
            </div>
          ))}
        </div>

      </section>

      {/* 
        ========================================================================
        SECTION 2: RUNWAY STRIP (ARRANGED IN TWO ROWS IN PDF)
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-pink-200 break-after-page bg-pink-50/20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold block mb-1">
              02 / Curated Runway Looks
            </span>
            <h2 className="font-abril text-4xl sm:text-5xl text-gray-950 uppercase">
              Runway <span className="italic text-pink-600">Sequence</span>
            </h2>
            <p className="text-xs text-gray-600 mt-1 font-medium">
              Arranged in two balanced rows across sequence 01 to 06 with uniform 3:4 portrait ratios.
            </p>
          </div>

          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">
            Two-Row Editorial Layout
          </span>
        </div>

        {/* 2-ROW GRID (3 COLUMNS X 2 ROWS = 6 CARDS) */}
        <div className="grid grid-cols-3 gap-6">
          {runwayLooks.map((look) => (
            <div
              key={look.id}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border-2 border-pink-200 shadow-sm group"
            >
              <Image
                src={look.mediaSrc}
                alt={look.category}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
              
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-white">
                <span className="px-2.5 py-1 rounded-full bg-white/95 text-pink-700 border border-pink-200">
                  {look.badge}
                </span>
                <span className="text-pink-300">2026</span>
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-white/95 border border-pink-200">
                <span className="text-xs font-bold text-gray-950 block truncate">
                  {look.category}
                </span>
                <span className="text-[10px] text-pink-600 font-bold block truncate mt-0.5">
                  {look.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 3: FILM ACTING & SCREEN REPERTOIRE (NEW DEDICATED SECTION)
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-pink-200 bg-white">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold block mb-1">
            03 / Feature Film Acting &amp; Movie Roles
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl text-gray-950 uppercase">
            Screen <span className="italic text-pink-600">Repertoire</span> &amp; Capabilities
          </h2>
          <p className="text-xs text-gray-600 mt-1 font-medium">
            Active for feature films, web series, and pan-Indian screen auditions.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl bg-pink-50/60 border border-pink-200">
            <span className="text-xs uppercase text-pink-700 font-bold block">Viral Screen Magnetism</span>
            <span className="font-abril text-4xl text-gray-950 block mt-2">1.8M+</span>
            <span className="text-[11px] text-gray-600 block mt-1">Single Reel Viral Views</span>
          </div>

          <div className="p-6 rounded-2xl bg-pink-50/60 border border-pink-200">
            <span className="text-xs uppercase text-pink-700 font-bold block">Cinema Fluency</span>
            <span className="font-abril text-4xl text-gray-950 block mt-2">3 Lang</span>
            <span className="text-[11px] text-gray-600 block mt-1">Telugu, Hindi &amp; English</span>
          </div>

          <div className="p-6 rounded-2xl bg-pink-50/60 border border-pink-200">
            <span className="text-xs uppercase text-pink-700 font-bold block">Audition Status</span>
            <span className="font-abril text-4xl text-gray-950 block mt-2">Open</span>
            <span className="text-[11px] text-gray-600 block mt-1">Feature Films &amp; OTT</span>
          </div>

          <div className="p-6 rounded-2xl bg-pink-50/60 border border-pink-200">
            <span className="text-xs uppercase text-pink-700 font-bold block">Cinema Hub</span>
            <span className="font-abril text-4xl text-gray-950 block mt-2">Hyd</span>
            <span className="text-[11px] text-gray-600 block mt-1">Hyderabad &amp; Pan-India</span>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 4: FULL-BLEED EDITORIAL LOOKBOOK PIECES
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-pink-200 bg-pink-50/20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold block mb-1">
              04 / Editorial Lookbook
            </span>
            <h2 className="font-abril text-4xl sm:text-5xl text-gray-950 uppercase">
              Curated <span className="italic text-pink-600">Campaigns</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">
            All 12 Campaign Looks
          </span>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {lookbookPieces.map((piece, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border-2 border-pink-200 shadow-sm"
            >
              <Image
                src={piece.mediaSrc}
                alt={piece.title}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
              
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase font-bold text-white">
                <span className="px-2.5 py-1 rounded-full bg-white/95 text-pink-700 border border-pink-200">
                  {piece.category}
                </span>
                <span className="text-pink-300 font-mono">{piece.year}</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 border border-pink-200">
                <span className="text-xs font-bold text-gray-950 block truncate">
                  {piece.title}
                </span>
                <span className="text-[10px] text-pink-600 block truncate mt-0.5 font-semibold">
                  {piece.styling}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 5: SOCIAL BENTO VAULT
        ========================================================================
      */}
      <section className="w-full py-16 px-12 border-b border-pink-200 bg-white">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold block mb-1">
            05 / Social Bento Vault
          </span>
          <h2 className="font-abril text-4xl sm:text-5xl text-gray-950 uppercase">
            Verified <span className="italic text-pink-600">Instagram Media</span>
          </h2>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {bentoCluster1.concat(bentoCluster2).map((item, idx) => (
            <div
              key={idx}
              className="col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border-2 border-pink-200 shadow-sm"
            >
              <Image
                src={item.mediaSrc}
                alt={item.title}
                fill
                className={`object-cover ${item.objectPos}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute top-2.5 left-2.5 text-[9px] uppercase font-bold text-pink-700 px-2 py-0.5 rounded-full bg-white/95 border border-pink-200">
                {item.tag}
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-white/95 text-[10px] font-bold text-gray-950 truncate border border-pink-200">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 6: COMP CARD & OFFICIAL QR
        ========================================================================
      */}
      <section className="w-full py-16 px-12 bg-pink-50/30">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-pink-200 p-8 shadow-sm">
          <div className="text-center space-y-1 pb-6 border-b border-pink-200">
            <h2 className="font-abril text-4xl text-gray-950 uppercase">ROHITHA SUNKARA (RUHI)</h2>
            <p className="text-xs uppercase tracking-[0.25em] text-pink-700 font-bold">
              Feature Films &bull; Web Series &bull; Haute Couture &bull; Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 py-6 border-b border-pink-200">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-pink-200">
              <Image src="/rohitha/rohitha_media_07.jpg" alt="Headshot" fill className="object-cover object-top" />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-pink-200">
              <Image src="/rohitha/rohitha_media_03.jpg" alt="Heritage Saree" fill className="object-cover object-top" />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-pink-200">
              <Image src="/rohitha/rohitha_media_05.jpg" alt="Studio" fill className="object-cover object-top" />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-pink-200">
              <Image src="/rohitha/rohitha_media_06.jpg" alt="Festive" fill className="object-cover object-top" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 text-xs font-syne">
            <div>
              <strong className="text-gray-950 text-base block font-bold">Direct Casting Desk:</strong>
              <span className="text-gray-600 block mt-0.5">Instagram: @hitaa.s &bull; Open for Feature Film Roles</span>
              <span className="text-pink-600 font-bold block mt-0.5">Telugu &bull; Hindi &bull; English</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 relative border-2 border-pink-300 rounded-xl p-1 bg-white">
                <Image src="/instagram-qr.png" alt="Instagram QR" fill className="object-contain" />
              </div>
              <div className="text-right">
                <strong className="text-gray-950 block font-bold">Scan with Camera</strong>
                <span className="text-pink-600 font-mono text-[11px]">@hitaa.s</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 font-syne">
          <span>© 2026 Rohitha Sunkara (Ruhi) • Official Film Acting &amp; Luxury Editorial Portfolio</span>
        </div>
      </section>

    </div>
  );
}
