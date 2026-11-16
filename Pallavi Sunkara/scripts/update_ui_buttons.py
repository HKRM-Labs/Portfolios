with open('Pallavi Sankara/components/ReelsShowcase.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    '<div className="relative w-32 h-32 sm:w-36 sm:h-36">',
    '<div className="relative w-36 h-36 sm:w-44 sm:h-44">'
)
with open('Pallavi Sankara/components/ReelsShowcase.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Updated ReelsShowcase.tsx QR size')

# Update Hero.tsx to add Download PDF button
with open('Pallavi Sankara/components/Hero.tsx', 'r', encoding='utf-8') as f:
    hero_text = f.read()

old_hero_btn = '''          <button
            onClick={onOpenCompCard}
            className="px-8 py-3.5 rounded-full bg-plum-950/80 border border-champagne-300/40 text-champagne-100 text-xs uppercase tracking-[0.2em] hover:bg-champagne-200 hover:text-plum-950 transition-all flex items-center gap-2 backdrop-blur-md font-syne font-semibold shadow-lg shadow-plum-950/40"
          >
            <Download className="w-4 h-4 text-mauve-300" />
            <span>Digital Comp Card</span>
          </button>'''

new_hero_btn = '''          <button
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
          </a>'''

hero_text = hero_text.replace(old_hero_btn, new_hero_btn)
with open('Pallavi Sankara/components/Hero.tsx', 'w', encoding='utf-8') as f:
    f.write(hero_text)
print('Updated Hero.tsx with PDF download button')

# Update StatsCompCard.tsx
with open('Pallavi Sankara/components/StatsCompCard.tsx', 'r', encoding='utf-8') as f:
    stats_text = f.read()

old_trigger = '''  const handleTrigger = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FAF3EB", "#F4E5D4", "#E8A2B6", "#D47A95", "#EFA68F"],
    });
    onOpenCompCard();
  };'''

new_trigger = '''  const handleTrigger = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FAF3EB", "#F4E5D4", "#E8A2B6", "#D47A95", "#EFA68F"],
    });
    // Direct PDF download trigger
    const link = document.createElement("a");
    link.href = "/Pallavi_Sunkara_Portfolio.pdf";
    link.download = "Pallavi_Sunkara_Editorial_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onOpenCompCard();
  };'''

stats_text = stats_text.replace(old_trigger, new_trigger)
with open('Pallavi Sankara/components/StatsCompCard.tsx', 'w', encoding='utf-8') as f:
    f.write(stats_text)
print('Updated StatsCompCard.tsx to download PDF')
