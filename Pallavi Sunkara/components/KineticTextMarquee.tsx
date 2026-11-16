"use client";

export default function KineticTextMarquee() {
  const row1Words = (
    <span className="font-bodoni text-[12vw] sm:text-[9vw] md:text-[8vw] font-normal uppercase tracking-tight leading-none flex items-center gap-6 sm:gap-8 text-champagne-100">
      <span>HAUTE COUTURE</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
      <span className="italic font-normal text-mauve-300 font-editorial">ACTRESS</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
      <span>RUNWAY MOTION</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
      <span className="text-stroke-champagne">SCREEN PRESENCE</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
      <span className="italic font-normal text-champagne-200">HYDERABAD</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
    </span>
  );

  const row2Words = (
    <span className="font-bodoni text-[12vw] sm:text-[9vw] md:text-[8vw] font-normal uppercase tracking-tight leading-none flex items-center gap-6 sm:gap-8">
      <span className="text-mauve-300 font-abril font-normal">PALLAVI SUNKARA</span>
      <span className="text-champagne-200 text-[6vw] font-mono">•</span>
      <span className="text-stroke-mauve">HERITAGE SILKS</span>
      <span className="text-champagne-200 text-[6vw] font-mono">•</span>
      <span className="italic font-normal text-champagne-100 font-editorial">CINEMATIC POISE</span>
      <span className="text-champagne-200 text-[6vw] font-mono">•</span>
      <span className="text-stroke-apricot">KANJEEVARAM</span>
      <span className="text-champagne-200 text-[6vw] font-mono">•</span>
      <span className="text-champagne-200">AVANT-GARDE</span>
      <span className="text-champagne-200 text-[6vw] font-mono">•</span>
    </span>
  );

  const row3Words = (
    <span className="font-bodoni text-[12vw] sm:text-[9vw] md:text-[8vw] font-normal uppercase tracking-tight leading-none flex items-center gap-6 sm:gap-8 text-champagne-200">
      <span>FRAME US</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
      <span className="text-stroke-champagne">THE AARNA STUDIO</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
      <span className="italic font-normal text-mauve-300 font-editorial">ROYAL BRIDAL</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
      <span className="text-apricot-400 font-abril font-normal">VOGUE AESTHETIC</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
      <span className="text-stroke-mauve">@PALLAVIIII124</span>
      <span className="text-mauve-400 text-[6vw] font-mono">•</span>
    </span>
  );

  return (
    <section 
      id="marquee-strip" 
      className="relative w-full py-12 sm:py-16 md:py-24 bg-plum-950 overflow-hidden border-t border-b border-champagne-300/15 select-none"
    >
      {/* Background Subtle Velvet Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-mauve-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="flex flex-col space-y-3 sm:space-y-5 relative z-10 w-full overflow-hidden">
        
        {/* ROW 1: Gliding Left-to-Right */}
        <div className="overflow-hidden whitespace-nowrap flex w-full">
          <div className="animate-marquee-right flex gap-8 items-center shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <span key={`r1-${i}`}>{row1Words}</span>
            ))}
          </div>
        </div>

        {/* ROW 2: Gliding Right-to-Left (Mauve & Outlined Drama) */}
        <div className="overflow-hidden whitespace-nowrap flex py-1 w-full">
          <div className="animate-marquee-left flex gap-8 items-center shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <span key={`r2-${i}`}>{row2Words}</span>
            ))}
          </div>
        </div>

        {/* ROW 3: Gliding Left-to-Right (Atelier & Studio Credits) */}
        <div className="overflow-hidden whitespace-nowrap flex w-full">
          <div className="animate-marquee-right flex gap-8 items-center shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <span key={`r3-${i}`}>{row3Words}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
