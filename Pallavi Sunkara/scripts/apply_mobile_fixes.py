# 1. Update Hero.tsx to eliminate duplicate button and ensure clean mobile wrapping
with open('Pallavi Sankara/components/Hero.tsx', 'r', encoding='utf-8') as f:
    hero = f.read()

# Replace the buttons block in Hero.tsx
old_buttons = '''        {/* Crisp Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#runway"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#runway");
            }}
            className="px-8 py-3.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.2em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-all font-syne shadow-xl shadow-plum-950/60"
          >
            Explore Runway
          </a>
          
          <button
            onClick={onOpenCompCard}
            className="px-8 py-3.5 rounded-full bg-plum-950/80 border border-champagne-300/40 text-champagne-100 text-xs uppercase tracking-[0.2em] hover:bg-champagne-200 hover:text-plum-950 transition-all flex items-center gap-2 backdrop-blur-md font-syne font-semibold shadow-lg shadow-plum-950/40"
          >
            <Download className="w-4 h-4 text-mauve-300" />
            <span>Digital Comp Card</span>
          </button>

          <a
            href="/Pallavi_Sunkara_Portfolio.pdf"
            download="Pallavi_Sunkara_Editorial_Portfolio.pdf"
            className="px-7 py-3.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.2em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-all flex items-center gap-2 shadow-xl shadow-plum-950/60 font-syne"
          >
            <Download className="w-4 h-4 text-plum-950" />
            <span>Download PDF Portfolio</span>
          </a>

          <a
            href="/Pallavi_Sunkara_Portfolio.pdf"
            download="Pallavi_Sunkara_Editorial_Portfolio.pdf"
            className="px-7 py-3.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.2em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-all flex items-center gap-2 shadow-xl shadow-plum-950/60 font-syne"
          >
            <Download className="w-4 h-4 text-plum-950" />
            <span>Download PDF Portfolio</span>
          </a>
        </div>'''

new_buttons = '''        {/* Crisp Action Controls - Exactly 3 Clean Buttons, Mobile Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 w-full max-w-2xl px-4 sm:px-0">
          <a
            href="#runway"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#runway");
            }}
            className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.2em] font-bold hover:bg-mauve-400 hover:text-plum-950 transition-all font-syne shadow-xl shadow-plum-950/60"
          >
            Explore Runway
          </a>
          
          <button
            onClick={onOpenCompCard}
            className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-plum-950/80 border border-champagne-300/40 text-champagne-100 text-xs uppercase tracking-[0.2em] hover:bg-champagne-200 hover:text-plum-950 transition-all flex items-center justify-center gap-2 backdrop-blur-md font-syne font-semibold shadow-lg shadow-plum-950/40"
          >
            <Download className="w-4 h-4 text-mauve-300" />
            <span>Digital Comp Card</span>
          </button>

          <a
            href="/Pallavi_Sunkara_Portfolio.pdf"
            download="Pallavi_Sunkara_Editorial_Portfolio.pdf"
            className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-plum-900/90 border border-mauve-400/50 text-champagne-100 text-xs uppercase tracking-[0.2em] font-bold hover:bg-champagne-200 hover:text-plum-950 transition-all flex items-center justify-center gap-2 shadow-xl shadow-plum-950/60 font-syne"
          >
            <Download className="w-4 h-4 text-apricot-400" />
            <span>Download PDF</span>
          </a>
        </div>'''

hero = hero.replace(old_buttons, new_buttons)

with open('Pallavi Sankara/components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(hero)
print('Updated Hero.tsx (removed duplicate button, added mobile responsiveness)')


# 2. Update ReelsShowcase.tsx to increase QR size inside the phone card
with open('Pallavi Sankara/components/ReelsShowcase.tsx', 'r', encoding='utf-8') as f:
    reels = f.read()

old_qr_reels = '''            {/* Authentic Official Instagram QR Code (Enlarged) */}
            <div className="my-auto py-2 flex flex-col items-center text-center">
              <div className="p-3 rounded-2xl bg-white border-2 border-champagne-300/40 shadow-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                  <Image
                    src="/instagram-qr.png"
                    alt="Official Instagram QR for @pallaviiii124"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-syne text-mauve-300">
                <QrCode className="w-3 h-3 text-apricot-400" />
                <span>Scan with phone camera</span>
              </div>
            </div>'''

new_qr_reels = '''            {/* Authentic Official Instagram QR Code (Substantially Enlarged to Fill Phone Screen) */}
            <div className="my-auto py-3 flex flex-col items-center text-center w-full">
              <div className="p-3 sm:p-4 rounded-3xl bg-white border-2 border-champagne-300/40 shadow-2xl group-hover:scale-105 transition-transform duration-300 overflow-hidden w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] max-w-[85%] aspect-square relative flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/instagram-qr.png"
                    alt="Official Instagram QR for @pallaviiii124"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs font-syne text-mauve-300 font-semibold">
                <QrCode className="w-3.5 h-3.5 text-apricot-400" />
                <span>Scan with phone camera</span>
              </div>
            </div>'''

reels = reels.replace(old_qr_reels, new_qr_reels)

with open('Pallavi Sankara/components/ReelsShowcase.tsx', 'w', encoding='utf-8') as f:
    f.write(reels)
print('Updated ReelsShowcase.tsx (enlarged QR size to fill phone screen)')


# 3. Update InstagramQRCard.tsx for large prominent QR card on both desktop and mobile
with open('Pallavi Sankara/components/InstagramQRCard.tsx', 'r', encoding='utf-8') as f:
    qr_card = f.read()

old_qr_card_block = '''          {/* Left Column: Authentic Official Instagram QR Code (Enlarged) */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="p-4 sm:p-6 rounded-3xl bg-white shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-4 border-plum-800/90 relative group overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 lg:w-96 lg:h-96">
                <Image
                  src="/instagram-qr.png"
                  alt="Official Instagram QR Code for @pallaviiii124"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne-200 font-syne font-semibold">
              <Smartphone className="w-4 h-4 text-mauve-400" />
              <span>Scan with phone camera to connect</span>
            </div>
          </div>'''

new_qr_card_block = '''          {/* Left Column: Authentic Official Instagram QR Code (Commanding Size) */}
          <div className="md:col-span-6 flex flex-col items-center justify-center">
            <div className="p-4 sm:p-6 rounded-[2.5rem] bg-white shadow-[0_30px_70px_rgba(0,0,0,0.85)] border-4 border-plum-800/90 relative group overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] max-w-full aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/instagram-qr.png"
                  alt="Official Instagram QR Code for @pallaviiii124"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne-200 font-syne font-semibold">
              <Smartphone className="w-4 h-4 text-mauve-400" />
              <span>Scan with phone camera to connect</span>
            </div>
          </div>'''

qr_card = qr_card.replace(old_qr_card_block, new_qr_card_block)

with open('Pallavi Sankara/components/InstagramQRCard.tsx', 'w', encoding='utf-8') as f:
    f.write(qr_card)
print('Updated InstagramQRCard.tsx (prominently enlarged QR code)')
