"use client";

import { motion } from "motion/react";

const stats = [
  { value: "10",  label: "Anos de mercado" },
  { value: "50+", label: "Obras entregues" },
  { value: "RJ",  label: "Rio de Janeiro"  },
];

export default function SobreAbsoluto() {
  return (
    <section className="relative bg-bg py-20 md:py-28 px-6 md:px-16 overflow-hidden border-t border-elevated/30">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232, 220, 196, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3">
            <span className="block h-px w-10 bg-sea" />
            <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-sea uppercase">
              Quem entrega
            </span>
            <span className="block h-px w-10 bg-sea" />
          </div>
        </motion.div>

        {/* Headline + texto */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <h2 className="font-outfit font-extralight text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.1] tracking-tight mb-6 text-balance">
            Absoluto Engenharia
          </h2>
          <p className="font-cormorant italic text-lg md:text-xl text-cream/80 leading-snug mb-6">
            Uma década entregando no prazo, no Rio de Janeiro.
          </p>
          <p className="font-josefin text-sm md:text-base text-cream/60 leading-relaxed max-w-2xl mx-auto">
            Construtora e incorporadora carioca fundada em 2016. Mais de
            cinquenta obras entregues — residenciais, comerciais, industriais e
            incorporações. Cada projeto com a mesma exigência de prazo,
            acabamento e padrão técnico.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-px bg-elevated/30 border-y border-elevated/50 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-bg px-4 py-8 md:py-10 text-center">
              <p className="font-outfit font-extralight text-4xl md:text-5xl text-cream leading-none mb-2">
                {s.value}
              </p>
              <p className="font-josefin text-[10px] tracking-w2 text-muted uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="https://absoluto-engenharia.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-josefin text-[11px] tracking-w2 text-sea uppercase border-b border-sea/40 pb-1 hover:text-sea hover:border-sea transition-colors duration-300"
          >
            Ver obras entregues →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
