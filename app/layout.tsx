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
  title: "Veríssimo 299 | Boutique Residencial na Barra da Tijuca",
  description:
    "Boutique residencial a poucos metros da praia da Barra da Tijuca. Térreo + 3 pavimentos assinados pelo Studio R Arquitetura. Apartamentos de 2 quartos e coberturas com varandas amplas.",
  keywords: [
    "Veríssimo 299",
    "apartamento Barra da Tijuca",
    "lançamento imobiliário Barra",
    "Studio R Arquitetura",
    "boutique residencial Rio de Janeiro",
    "Absoluto Engenharia",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Veríssimo 299 | Boutique Residencial na Barra da Tijuca",
    description: "Boutique residencial a poucos metros da praia da Barra da Tijuca.",
    images: [{ url: "/images/fachada-frontal.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${italiana.variable} ${outfit.variable} ${josefin.variable}`}
    >
      <body className="font-josefin bg-bg text-cream">
        {children}
      </body>
    </html>
  );
}
