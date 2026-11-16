with open('Pallavi Sankara/components/Navbar.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Add Download import
if 'Download' not in text:
    text = text.replace(
        'import { Instagram, Menu, X } from "lucide-react";',
        'import { Instagram, Menu, X, Download } from "lucide-react";'
    )

old_actions = '''        {/* Right Details */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne-300 hover:text-mauve-300 transition-colors font-mono"
          >
            <Instagram className="w-4 h-4 text-mauve-400" />
            <span>@pallaviiii124</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-6 py-2.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.25em] hover:bg-mauve-400 hover:text-plum-950 transition-all duration-300 font-syne font-bold shadow-lg"
          >
            Book Castings
          </a>
        </div>'''

new_actions = '''        {/* Right Details */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="/Pallavi_Sunkara_Portfolio.pdf"
            download="Pallavi_Sunkara_Editorial_Portfolio.pdf"
            className="px-4 py-2 rounded-full border border-champagne-300/30 text-champagne-100 text-xs uppercase tracking-wider hover:border-mauve-400 hover:text-mauve-300 transition-all font-syne flex items-center gap-1.5 shadow-md"
            title="Download PDF Portfolio"
          >
            <Download className="w-3.5 h-3.5 text-apricot-400" />
            <span className="text-[11px] font-bold">PDF Portfolio</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2.5 rounded-full bg-champagne-200 text-plum-950 text-xs uppercase tracking-[0.25em] hover:bg-mauve-400 hover:text-plum-950 transition-all duration-300 font-syne font-bold shadow-lg"
          >
            Book Castings
          </a>
        </div>'''

text = text.replace(old_actions, new_actions)
with open('Pallavi Sankara/components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Updated Navbar.tsx')


# Footer.tsx
with open('Pallavi Sankara/components/Footer.tsx', 'r', encoding='utf-8') as f:
    footer_text = f.read()

if 'Download' not in footer_text:
    footer_text = footer_text.replace(
        'import { Instagram, ArrowUp, Mail, MessageSquare, Heart } from "lucide-react";',
        'import { Instagram, ArrowUp, Mail, MessageSquare, Heart, Download } from "lucide-react";'
    )

old_footer_icons = '''        {/* Direct Contact Icons & Back to Top */}
        <div className="flex items-center gap-3">'''

new_footer_icons = '''        {/* Direct Contact Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="/Pallavi_Sunkara_Portfolio.pdf"
            download="Pallavi_Sunkara_Editorial_Portfolio.pdf"
            aria-label="Download PDF Portfolio"
            className="p-2.5 rounded-full border border-champagne-300/30 hover:border-apricot-400 text-champagne-200 hover:text-apricot-300 transition-colors"
            title="Download PDF Portfolio"
          >
            <Download className="w-4 h-4 text-apricot-400" />
          </a>'''

footer_text = footer_text.replace(old_footer_icons, new_footer_icons)
with open('Pallavi Sankara/components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(footer_text)
print('Updated Footer.tsx')
