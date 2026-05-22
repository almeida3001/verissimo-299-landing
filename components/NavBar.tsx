"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Projeto",     href: "#empreendimento" },
  { label: "Galeria",     href: "#galeria" },
  { label: "Planta",      href: "#planta" },
  { label: "Localização", href: "#localizacao" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 transition-shadow duration-500 ${
          scrolled ? "shadow-2xl shadow-black/50" : ""
        }`}
        style={{
          background: "rgba(36, 30, 22, 0.55)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow:
            "inset 0 1px 0 rgba(217, 205, 184, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.25), 0 8px 32px rgba(0, 0, 0, 0.35)",
        }}
      >
        {/* Subtle inner gradient overlay for liquid feel */}
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(217, 205, 184, 0.06) 0%, transparent 50%, rgba(0, 0, 0, 0.15) 100%)",
          }}
        />

        {/* Logo — Nome Veríssimo */}
        <a
          href="#"
          className="relative flex items-center px-4 py-1.5 group"
        >
          <span className="font-outfit font-extralight text-sm text-cream tracking-tight">
            Veríssimo
            <span className="font-cormorant italic text-sand/80 ml-1">299</span>
          </span>
        </a>

        {/* Subtle divider */}
        <span className="hidden sm:block w-px h-4 bg-cream/10 mx-1" />

        {/* Nav links */}
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative font-josefin text-[10px] sm:text-[11px] tracking-w2 uppercase rounded-full px-3 sm:px-3.5 py-2 text-cream/55 hover:text-cream hover:bg-cream/5 transition-all duration-300"
          >
            {l.label}
          </a>
        ))}

        {/* Subtle divider */}
        <span className="hidden sm:block w-px h-4 bg-cream/10 mx-1" />

        {/* CTA pill — sand glow */}
        <a
          href="#interesse"
          className="group relative inline-flex items-center gap-1.5 font-josefin text-[10px] sm:text-[11px] tracking-w2 uppercase rounded-full px-4 sm:px-5 py-2 text-bg bg-sand hover:bg-cream transition-all duration-400"
        >
          <span>Falar com vendas</span>
          <ArrowUpRight size={11} className="group-hover:rotate-45 transition-transform duration-400" />
        </a>
      </div>
    </motion.nav>
  );
}
