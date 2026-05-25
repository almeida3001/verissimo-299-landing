"use client";

import { motion } from "motion/react";

export default function FooterMarquee() {
  return (
    <footer className="bg-surface border-t border-white/6">

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo / nome */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <p className="font-outfit font-extralight text-2xl text-cream tracking-tight">
            Veríssimo{" "}
            <span className="font-cormorant italic text-sea" style={{ letterSpacing: "0.3em" }}>
              Residence
            </span>
          </p>
          <p className="font-josefin text-[10px] tracking-w2 text-muted uppercase mt-2">
            Construção e incorporação · Absoluto Engenharia
          </p>
          <p className="font-josefin text-[10px] tracking-w2 text-muted uppercase">
            Arquitetura · Studio R
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex items-center gap-6 md:gap-8 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {[
            { label: "Localização",    href: "#localizacao" },
            { label: "Empreendimento", href: "#empreendimento" },
            { label: "Galeria",     href: "#galeria" },
            { label: "Planta",      href: "#planta" },
            { label: "Interesse",   href: "#interesse" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-josefin text-[10px] tracking-w2 text-muted uppercase hover:text-sea transition-colors duration-300"
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
            className="w-1.5 h-1.5 rounded-full bg-sea"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <a
            href="https://wa.me/5521991024201"
            target="_blank"
            rel="noopener noreferrer"
            className="font-josefin text-[10px] tracking-w2 text-muted uppercase hover:text-sea transition-colors duration-300"
          >
            Em pré-lançamento · 2027
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 px-6 md:px-16 py-5 flex flex-col items-center gap-2">
        <p className="font-josefin text-[9px] tracking-w1 text-cream/20 text-center">
          © 2026 Absoluto Engenharia e Construções. Imagens meramente ilustrativas.
          Memorial descritivo no estande de vendas.
        </p>
        <p className="font-josefin text-[9px] tracking-w1 text-cream/15 text-center">
          Desenvolvido por{" "}
          <a href="https://inovarmidia.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream/30 transition-colors duration-200">
            Inovarmidia
          </a>
        </p>
      </div>
    </footer>
  );
}
