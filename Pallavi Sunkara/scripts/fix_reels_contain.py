p = 'Pallavi Sankara/components/ReelsShowcase.tsx'
with open(p, 'r', encoding='utf-8') as f:
    c = f.read()

target = '<section id="reels" className="relative w-full py-24 px-4 sm:px-8 md:px-12 bg-plum-950 border-t border-b border-champagne-300/15 overflow-hidden">'
replacement = '<section id="reels" style={{ contain: "paint" }} className="relative w-full py-24 px-4 sm:px-8 md:px-12 bg-plum-950 border-t border-b border-champagne-300/15 overflow-hidden">'

if target in c:
    c = c.replace(target, replacement, 1)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(c)
    print('SUCCESS: Updated ReelsShowcase contain paint')
else:
    print('Target not found in ReelsShowcase')
