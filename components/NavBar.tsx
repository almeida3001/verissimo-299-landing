"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Localização",    href: "#localizacao"   },
  { label: "Empreendimento", href: "#empreendimento" },
  { label: "Galeria",        href: "#galeria"       },
  { label: "Planta",         href: "#planta"        },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy */
  useEffect(() => {
    const sectionIds = ["localizacao", "empreendimento", "galeria", "planta"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* Lock scroll quando menu mobile aberto */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
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
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(217, 205, 184, 0.06) 0%, transparent 50%, rgba(0, 0, 0, 0.15) 100%)",
            }}
          />

          {/* Logo */}
          <a href="#" className="relative flex items-center px-4 py-1.5 group">
            <span className="font-outfit font-extralight text-sm text-cream tracking-tight">
              Veríssimo
            </span>
          </a>

          {/* Divider — desktop */}
          <span className="hidden md:block w-px h-4 bg-cream/10 mx-1" />

          {/* Nav links — DESKTOP only */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-josefin text-[11px] tracking-w2 uppercase rounded-full px-3.5 py-2 transition-all duration-300 ${
                  active === l.href
                    ? "text-cream bg-cream/5"
                    : "text-cream/55 hover:text-cream hover:bg-cream/5"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Divider — desktop */}
          <span className="hidden md:block w-px h-4 bg-cream/10 mx-1" />

          {/* CTA — DESKTOP */}
          <a
            href="#interesse"
            className="hidden md:inline-flex group relative items-center gap-1.5 font-josefin text-[11px] tracking-w2 uppercase rounded-full px-5 py-2 text-bg bg-sea hover:bg-cream transition-all duration-400"
          >
            <span>Falar com vendas</span>
            <ArrowUpRight size={11} className="group-hover:rotate-45 transition-transform duration-400" />
          </a>

          {/* Hamburger — MOBILE only */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="md:hidden relative flex items-center justify-center w-9 h-9 rounded-full text-cream/85 hover:text-cream transition-colors"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-bg/95"
              style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              className="absolute inset-0 flex flex-col"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-outfit font-extralight text-base text-cream tracking-tight">
                  Veríssimo
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="flex items-center justify-center w-10 h-10 rounded-full text-cream/85 hover:text-cream transition-colors"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="block border-b border-cream/10 py-5 font-cormorant italic text-3xl text-cream/90 hover:text-sea transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <div className="px-6 pb-10">
                <a
                  href="#interesse"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-center gap-2 w-full font-josefin text-[11px] tracking-w3 uppercase rounded-full px-5 py-4 text-bg bg-sea hover:bg-cream transition-all duration-400"
                >
                  <span>Falar com vendas</span>
                  <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform duration-400" />
                </a>
                <p className="font-josefin text-[10px] tracking-w2 text-cream/40 uppercase text-center mt-5">
                  Av. Érico Veríssimo, 299 · Barra da Tijuca
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
