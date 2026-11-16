"use client";

export default function KineticTextMarquee() {
  const row1Words = (
    <span className="font-bodoni text-[10vw] sm:text-[8vw] md:text-[6.5vw] font-normal uppercase tracking-tight leading-none flex items-center gap-6 sm:gap-8 text-gray-900">
      <span>ROHITHA SUNKARA</span>
      <span className="text-pink-500 text-[4vw] font-mono">•</span>
      <span className="italic font-normal text-pink-600 font-editorial">FILM ACTRESS</span>
      <span className="text-pink-500 text-[4vw] font-mono">•</span>
      <span className="text-stroke-champagne">HAUTE COUTURE</span>
      <span className="text-pink-500 text-[4vw] font-mono">•</span>
      <span className="italic font-normal text-gray-800">HYDERABAD</span>
      <span className="text-pink-500 text-[4vw] font-mono">•</span>
    </span>
  );

  const row2Words = (
    <span className="font-bodoni text-[10vw] sm:text-[8vw] md:text-[6.5vw] font-normal uppercase tracking-tight leading-none flex items-center gap-6 sm:gap-8">
      <span className="text-pink-600 font-abril font-normal">FEATURE FILMS</span>
      <span className="text-pink-400 text-[4vw] font-mono">•</span>
      <span className="text-stroke-mauve">TOLLEWOOD &bull; PAN-INDIA</span>
      <span className="text-pink-400 text-[4vw] font-mono">•</span>
      <span className="italic font-normal text-gray-900 font-editorial">1.8M REACH</span>
      <span className="text-pink-400 text-[4vw] font-mono">•</span>
      <span className="text-stroke-apricot">@HITAA.S</span>
      <span className="text-pink-400 text-[4vw] font-mono">•</span>
    </span>
  );

  return (
    <section 
      id="marquee-strip" 
      className="relative w-full py-10 sm:py-14 bg-white overflow-hidden border-t border-b border-pink-200/80 select-none"
    >
      {/* Background Soft Blush Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-pink-300/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex flex-col space-y-3 sm:space-y-4 relative z-10 w-full overflow-hidden">
        
        {/* ROW 1: Gliding Left-to-Right */}
        <div className="overflow-hidden whitespace-nowrap flex w-full">
          <div className="animate-marquee-right flex gap-8 items-center shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <span key={`r1-${i}`}>{row1Words}</span>
            ))}
          </div>
        </div>

        {/* ROW 2: Gliding Right-to-Left */}
        <div className="overflow-hidden whitespace-nowrap flex py-1 w-full">
          <div className="animate-marquee-left flex gap-8 items-center shrink-0">
            {[1, 2, 3, 4].map((i) => (
              <span key={`r2-${i}`}>{row2Words}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
