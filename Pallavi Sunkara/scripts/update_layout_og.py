p = 'app/layout.tsx'
with open(p, 'r', encoding='utf-8') as f:
    c = f.read()

target = '''export const metadata: Metadata = {
  title: "Pallavi Sunkara | High-Fashion Editorial Model & Actress",
  description:
    "Official luxury portfolio of Pallavi Sunkara (@pallaviiii124). Indian fashion model & actress based in Hyderabad, specializing in heritage handlooms, bridal couture, screen performance, and runway direction.",
  keywords: [
    "Pallavi Sunkara",
    "pallaviiii124",
    "Hyderabad fashion model",
    "Indian actress portfolio",
    "handloom saree model",
    "Frame Us model",
    "The Aarna Studio",
    "comp card Pallavi Sunkara",
  ],
  authors: [{ name: "Pallavi Sunkara" }],
  creator: "Pallavi Sunkara",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pallavisunkara.com",
    title: "Pallavi Sunkara | Fashion Model & Actress",
    description:
      "Official portfolio of model & actress Pallavi Sunkara (@pallaviiii124). Heritage handloom drapes, runway motion, and agency comp card.",
    siteName: "Pallavi Sunkara",
    images: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pallavi Sunkara Editorial Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallavi Sunkara | Editorial Model Portfolio",
    description: "Official portfolio of model Pallavi Sunkara (@pallaviiii124).",
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};'''

replacement = '''export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
    'https://pallavisunkara.com')
  ),
  title: "Pallavi Sunkara | High-Fashion Editorial Model & Actress",
  description:
    "Official luxury portfolio of Pallavi Sunkara (@pallaviiii124). Indian fashion model & actress based in Hyderabad, specializing in heritage handlooms, bridal couture, screen performance, and runway direction.",
  keywords: [
    "Pallavi Sunkara",
    "pallaviiii124",
    "Hyderabad fashion model",
    "Indian actress portfolio",
    "handloom saree model",
    "Frame Us model",
    "The Aarna Studio",
    "comp card Pallavi Sunkara",
  ],
  authors: [{ name: "Pallavi Sunkara" }],
  creator: "Pallavi Sunkara",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pallavisunkara.com",
    title: "Pallavi Sunkara | High-Fashion Editorial Model & Actress",
    description:
      "Official portfolio of model & actress Pallavi Sunkara (@pallaviiii124). Heritage handloom drapes, runway motion, and agency comp card.",
    siteName: "Pallavi Sunkara",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pallavi Sunkara • Official Editorial Portfolio",
      },
      {
        url: "/pallavi/avatar.jpg",
        width: 1080,
        height: 1080,
        alt: "Pallavi Sunkara Headshot Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallavi Sunkara | Fashion Model & Actress",
    description: "Official portfolio of model Pallavi Sunkara (@pallaviiii124).",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};'''

c_norm = c.replace('\r\n', '\n')
t_norm = target.replace('\r\n', '\n')
r_norm = replacement.replace('\r\n', '\n')

if t_norm in c_norm:
    c_norm = c_norm.replace(t_norm, r_norm, 1)
    with open(p, 'w', encoding='utf-8', newline='\n') as f:
        f.write(c_norm)
    print('SUCCESS: Updated app/layout.tsx metadata with Pallavi Sunkara OpenGraph image!')
else:
    print('Target not found in app/layout.tsx')
