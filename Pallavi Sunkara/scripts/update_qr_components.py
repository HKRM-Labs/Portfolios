with open('components/InstagramQRCard.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_block = '''          {/* Left Column: High-Res SVG QR Code */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="p-5 rounded-3xl bg-white shadow-2xl border-4 border-plum-800 relative group">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <Image
                  src="/instagram-qr.svg"
                  alt="Scan Instagram QR Code for @pallaviiii124"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Center Monogram Stamp on QR */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-plum-950 border-2 border-champagne-200 p-1 flex items-center justify-center shadow-2xl">
                  <Instagram className="w-6 h-6 text-mauve-400" />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne-200 font-syne font-semibold">
              <Smartphone className="w-4 h-4 text-mauve-400" />
              <span>Scan with phone camera to connect</span>
            </div>
          </div>'''

new_block = '''          {/* Left Column: Authentic Official Instagram QR Code */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="p-3 sm:p-4 rounded-3xl bg-white shadow-2xl border-4 border-plum-800/80 relative group overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
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

text = text.replace(old_block, new_block)
with open('components/InstagramQRCard.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Updated InstagramQRCard.tsx')


# Now update ReelsShowcase.tsx
with open('components/ReelsShowcase.tsx', 'r', encoding='utf-8') as f:
    reels_text = f.read()

start_svg = reels_text.find('{/* Precision SVG QR Code */}')
end_svg = reels_text.find('{/* Action Buttons */}')

if start_svg != -1 and end_svg != -1:
    new_qr_section = '''{/* Authentic Official Instagram QR Code */}
            <div className="my-auto py-2 flex flex-col items-center text-center">
              <div className="p-2.5 rounded-2xl bg-white border-2 border-champagne-300/40 shadow-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36">
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
            </div>

            '''
    reels_text = reels_text[:start_svg] + new_qr_section + reels_text[end_svg:]
    with open('components/ReelsShowcase.tsx', 'w', encoding='utf-8') as f:
        f.write(reels_text)
    print('Updated ReelsShowcase.tsx')
else:
    print('ERROR: markers not found in ReelsShowcase.tsx')
