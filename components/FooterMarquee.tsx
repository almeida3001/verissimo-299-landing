"use client";

import { motion } from "motion/react";

const marqueeText = "VERÍSSIMO 299 · BARRA DA TIJUCA · BOUTIQUE RESIDENCIAL · STUDIO R ARQUITETURA · LANÇAMENTO 2026 · ";

export default function FooterMarquee() {
  return (
    <footer className="bg-surface border-t border-white/6 overflow-hidden">

      {/* Marquee */}
      <div className="py-10 overflow-hidden border-b border-white/6">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-outfit font-extralight text-2xl md:text-3xl text-cream/20 whitespace-nowrap px-4"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo / nome */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-outfit font-extralight text-2xl text-cream tracking-tight">
            Veríssimo <span className="font-cormorant italic text-sand">299</span>
          </p>
          <p className="font-josefin text-[10px] tracking-w2 text-muted uppercase mt-1">
            Absoluto Engenharia · Studio R Arquitetura
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {[
            { label: "Empreendimento", href: "#empreendimento" },
            { label: "Galeria",        href: "#galeria" },
            { label: "Localização",    href: "#localizacao" },
            { label: "Interesse",      href: "#interesse" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-josefin text-[10px] tracking-w2 text-muted uppercase hover:text-sand transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </motion.div>

        {/* WhatsApp + disponível */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-sea"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <a
            href="https://wa.me/5521991024201"
            target="_blank"
            rel="noopener noreferrer"
            className="font-josefin text-[10px] tracking-w2 text-muted uppercase hover:text-sea transition-colors duration-300"
          >
            Disponível para atendimento
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 px-6 md:px-16 py-5">
        <p className="font-josefin text-[9px] tracking-w1 text-cream/15 text-center">
          © 2026 Absoluto Engenharia e Construções. Imagens meramente ilustrativas.
        </p>
      </div>
    </footer>
  );
}
