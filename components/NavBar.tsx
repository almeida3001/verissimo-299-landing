"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Início",      href: "#" },
  { label: "Projeto",     href: "#empreendimento" },
  { label: "Galeria",     href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");

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
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/8 bg-surface/80 px-2 py-2 transition-shadow duration-500 ${
          scrolled ? "shadow-2xl shadow-black/40" : ""
        }`}
      >
        {/* Logo circle with gradient ring */}
        <a
          href="#"
          className="relative group w-9 h-9 rounded-full p-px transition-transform duration-400 hover:scale-110"
          style={{
            background: "linear-gradient(90deg, #D9CDB8 0%, #7FA8B0 100%)",
          }}
        >
          <span className="relative flex items-center justify-center w-full h-full rounded-full bg-bg">
            <span className="font-cormorant italic text-[13px] text-cream leading-none translate-y-px">V</span>
          </span>
        </a>

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 bg-white/8 mx-1.5" />

        {/* Nav links */}
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setActive(l.href)}
            className={`text-[11px] sm:text-xs rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-300 ${
              active === l.href
                ? "text-cream bg-white/5"
                : "text-muted hover:text-cream hover:bg-white/5"
            }`}
          >
            {l.label}
          </a>
        ))}

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 bg-white/8 mx-1.5" />

        {/* CTA pill */}
        <a
          href="#interesse"
          className="relative group inline-flex items-center gap-1.5 text-[11px] sm:text-xs rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
        >
          {/* Gradient border on hover */}
          <span
            className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{
              background: "linear-gradient(90deg, #D9CDB8 0%, #7FA8B0 100%)",
            }}
          />
          <span className="relative flex items-center gap-1.5 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 -mx-3 sm:-mx-4 -my-1.5 sm:-my-2 text-cream">
            Falar com vendas
            <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform duration-400" />
          </span>
        </a>
      </div>
    </motion.nav>
  );
}
