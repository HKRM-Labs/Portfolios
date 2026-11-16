import type { Metadata } from "next";
import { Abril_Fatface, Bodoni_Moda, Syne, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bodoni",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
    'https://rohithasunkara.vercel.app')
  ),
  title: "Rohitha Sunkara (Ruhi) | High-Fashion Editorial Model & Film Actress",
  description:
    "Official luxury portfolio of Rohitha Sunkara (@hitaa.s). Indian film actress & fashion model based in Hyderabad. Open for feature films, web series, dramatic screen roles, and haute couture campaigns.",
  keywords: [
    "Rohitha Sunkara",
    "Ruhi",
    "hitaa.s",
    "Rohitha Sunkara actress",
    "Hyderabad actress",
    "open for movie roles",
    "Telugu film actress",
    "Indian fashion model",
    "comp card Rohitha Sunkara",
  ],
  authors: [{ name: "Rohitha Sunkara" }],
  creator: "Rohitha Sunkara",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.svg",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rohithasunkara.vercel.app",
    title: "Rohitha Sunkara (Ruhi) | High-Fashion Editorial Model & Film Actress",
    description:
      "Official portfolio of actress & model Rohitha Sunkara (@hitaa.s). Open for feature films, pan-Indian cinema, and editorial campaigns.",
    siteName: "Rohitha Sunkara",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohitha Sunkara • Official Editorial & Film Portfolio",
      },
      {
        url: "/rohitha/avatar.jpg",
        width: 400,
        height: 400,
        alt: "Rohitha Sunkara Headshot Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohitha Sunkara (Ruhi) | Film Actress & Model",
    description: "Official portfolio of actress Rohitha Sunkara (@hitaa.s). Open for feature films & cinema roles.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rohithasunkara.vercel.app/#model",
        name: "Rohitha Sunkara",
        alternateName: ["Ruhi", "hitaa.s"],
        jobTitle: "Film Actress & Fashion Model",
        gender: "Female",
        url: "https://rohithasunkara.vercel.app/",
        sameAs: [
          "https://www.instagram.com/hitaa.s?psln=MWM3eWw1ZnMxcm4wdA==",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Feature Film Acting",
          "Dramatic Screen Performance",
          "Telugu Cinema",
          "Hindi Cinema",
          "High Fashion Modeling",
          "Runway Direction",
          "Commercial Endorsements",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://rohithasunkara.vercel.app/#webpage",
        url: "https://rohithasunkara.vercel.app/",
        name: "Rohitha Sunkara - Official Portfolio",
        about: { "@id": "https://rohithasunkara.vercel.app/#model" },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${abril.variable} ${bodoni.variable} ${syne.variable} ${cormorant.variable} font-syne bg-white text-gray-900 antialiased selection:bg-pink-300 selection:text-pink-950 film-grain min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
