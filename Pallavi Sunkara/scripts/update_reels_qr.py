path = 'Pallavi Sankara/components/ReelsShowcase.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

target = '''            {/* Authentic Official Instagram QR Code */}
            <div className="my-auto py-2 flex flex-col items-center text-center">
              <div className="p-2.5 rounded-2xl bg-white border-2 border-champagne-300/40 shadow-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
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

replacement = '''            {/* Authentic Official Instagram QR Code (Enlarged Screen-Filling Size) */}
            <div className="my-auto py-1 flex flex-col items-center text-center w-full">
              <div className="p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-white border-2 border-champagne-300/40 shadow-2xl group-hover:scale-[1.03] transition-transform duration-300 overflow-hidden w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] max-w-[88%] aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/instagram-qr.png"
                    alt="Official Instagram QR for @pallaviiii124"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-[11px] font-syne text-mauve-300">
                <QrCode className="w-3.5 h-3.5 text-apricot-400" />
                <span>Scan with phone camera</span>
              </div>
            </div>'''

# Normalize CRLF and LF
content_normalized = content.replace('\r\n', '\n')
target_normalized = target.replace('\r\n', '\n')
replacement_normalized = replacement.replace('\r\n', '\n')

if target_normalized in content_normalized:
    content_normalized = content_normalized.replace(target_normalized, replacement_normalized, 1)
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content_normalized)
    print('SUCCESS: Updated ReelsShowcase QR code!')
else:
    print('Target still not found. Let us check matching lines.')
