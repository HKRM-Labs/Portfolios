with open('Pallavi Sankara/components/InstagramQRCard.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Increase QR size in InstagramQRCard
old_qr = '''          {/* Left Column: Authentic Official Instagram QR Code */}
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
          </div>

          {/* Right Column: Narrative & Direct Booking Touchpoints */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">'''

new_qr = '''          {/* Left Column: Authentic Official Instagram QR Code (Enlarged) */}
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
          </div>

          {/* Right Column: Narrative & Direct Booking Touchpoints */}
          <div className="md:col-span-6 space-y-6 text-center md:text-left">'''

text = text.replace(old_qr, new_qr)
with open('Pallavi Sankara/components/InstagramQRCard.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully enlarged QR in InstagramQRCard.tsx')
