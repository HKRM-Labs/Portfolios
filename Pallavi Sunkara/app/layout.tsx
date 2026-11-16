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
        "@id": "https://pallavisunkara.com/#model",
        "name": "Pallavi Sunkara",
        "alternateName": "pallaviiii124",
        "jobTitle": "Fashion Model & Actress",
        "gender": "Female",
        "url": "https://pallavisunkara.com/",
        "sameAs": [
          "https://www.instagram.com/pallaviiii124?utm_source=qr&psln=cWY1aWthYTA2NDl2"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        },
        "knowsAbout": [
          "High Fashion Modeling",
          "Heritage South Indian Handlooms",
          "Bridal Campaigns",
          "Screen Acting",
          "Runway Direction"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://pallavisunkara.com/#webpage",
        "url": "https://pallavisunkara.com/",
        "name": "Pallavi Sunkara — Official Portfolio",
        "about": {
          "@id": "https://pallavisunkara.com/#model"
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${abril.variable} ${bodoni.variable} ${syne.variable} ${cormorant.variable} font-syne bg-plum-950 text-foreground antialiased selection:bg-mauve-400 selection:text-plum-950 film-grain `}
      >
        {children}
      </body>
    </html>
  );
}
