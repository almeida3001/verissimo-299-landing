import type { Metadata } from "next";
import { Cormorant, Josefin_Sans, Outfit, Italiana } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verissimo-299-landing.vercel.app"),
  title: "Veríssimo Residence | Apenas 6 apartamentos na Barra da Tijuca",
  description:
    "Apenas 6 apartamentos assinados pelo Studio R Arquitetura na Av. Érico Veríssimo, 299. A poucos passos da Praia do Pepê. Pré-lançamento 2027.",
  keywords: [
    "Veríssimo Residence",
    "apartamento Barra da Tijuca",
    "lançamento imobiliário Barra",
    "Studio R Arquitetura",
    "boutique residencial Rio de Janeiro",
    "Absoluto Engenharia",
    "Praia do Pepê",
    "Av. Érico Veríssimo",
    "Av. Olegário Maciel",
    "apartamento 2 quartos Barra",
    "cobertura Barra da Tijuca",
  ],
  alternates: {
    canonical: "https://verissimo-299-landing.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://verissimo-299-landing.vercel.app",
    siteName: "Veríssimo Residence",
    title: "Veríssimo Residence | Apenas 6 apartamentos na Barra da Tijuca",
    description:
      "Boutique residencial assinado pelo Studio R Arquitetura. Apenas 6 unidades, a poucos passos da Praia do Pepê. Pré-lançamento 2027.",
    images: [
      {
        url: "/images/fachada-frontal.png",
        width: 1200,
        height: 630,
        alt: "Fachada do Veríssimo Residence — Barra da Tijuca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veríssimo Residence | 6 apartamentos na Barra da Tijuca",
    description:
      "Boutique residencial assinado pelo Studio R. Pré-lançamento 2027.",
    images: ["/images/fachada-frontal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: "Veríssimo Residence",
  description:
    "Boutique residencial com apenas 6 apartamentos, assinado pelo Studio R Arquitetura & Interiores. Av. Érico Veríssimo, 299 — Barra da Tijuca.",
  url: "https://verissimo-299-landing.vercel.app",
  image: "https://verissimo-299-landing.vercel.app/images/fachada-frontal.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Érico Veríssimo, 299",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    postalCode: "22621-180",
    addressCountry: "BR",
  },
  containsPlace: {
    "@type": "Apartment",
    numberOfRooms: 2,
    floorLevel: "T+3",
  },
  numberOfRooms: 2,
  yearBuilt: "2027",
  provider: {
    "@type": "Organization",
    name: "Absoluto Engenharia",
    url: "https://absoluto-engenharia.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${italiana.variable} ${outfit.variable} ${josefin.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-josefin bg-bg text-cream">
        {children}
      </body>
    </html>
  );
}
