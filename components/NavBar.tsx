"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Empreendimento", href: "#empreendimento" },
  { label: "Galeria",        href: "#galeria" },
  { label: "Planta",         href: "#planta" },
  { label: "Localização",    href: "#localizacao" },
];

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let last = 0;
    function onScroll() {
      const nav = navRef.current;
      if (!nav) return;
      const y = window.scrollY;
      if (y > 80) {
        nav.style.background = "rgba(9,12,12,0.92)";
        nav.style.backdropFilter = "blur(12px)";
        nav.style.borderBottomColor = "rgba(255,255,255,0.06)";
      } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.borderBottomColor = "transparent";
      }
      last = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
      style={{ background: "transparent", borderBottomColor: "transparent" }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="font-outfit font-extralight text-xl text-cream tracking-tight">
            Veríssimo <span className="font-cormorant italic text-sand">299</span>
          </span>
        </a>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link font-josefin text-[10px] tracking-w2 text-cream/60 uppercase hover:text-cream transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#interesse"
          className="group inline-flex items-center gap-2 border border-sand/50 text-cream font-josefin text-[10px] tracking-w2 uppercase px-6 py-2.5 hover:bg-sand hover:text-bg hover:border-sand transition-all duration-400"
        >
          Registrar Interesse
        </a>
      </div>
    </motion.nav>
  );
}
