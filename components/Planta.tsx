"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Planta() {
  return (
    <section className="relative bg-bg py-28 md:py-36 px-6 md:px-16 overflow-hidden" id="planta">
      {/* Gradient terroso sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 90% 20%, rgba(184, 135, 78, 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 10% 80%, rgba(217, 205, 184, 0.08) 0%, transparent 55%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <motion.span
              className="block h-px bg-bronze"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <span className="font-josefin text-[10px] tracking-w3 text-bronze uppercase">Plantas</span>
          </div>

          <h2 className="font-outfit font-extralight text-5xl md:text-6xl text-cream leading-[0.92] tracking-tight mb-6">
            Pavimento
            <br />
            <span className="font-cormorant italic text-sand">Tipo</span>
          </h2>

          <p className="font-josefin text-sm text-cream/55 leading-relaxed mb-10 max-w-md">
            Quatro unidades por andar dispostas em layout espelhado. Sala integrada
            à varanda, cozinha aberta à sala de jantar e circulação central com hall
            de elevadores. Todas as unidades com vista privilegiada e acesso à varanda.
          </p>

          <div className="space-y-4 border-t border-white/8 pt-8">
            {[
              { label: "Tipologia",   value: "2 quartos / Cobertura" },
              { label: "Pavimentos",  value: "Térreo + 3 andares" },
              { label: "Unidades",    value: "4 por andar" },
              { label: "Arquitetura", value: "Studio R Arquitetura & Interiores" },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline justify-between gap-4">
                <span className="font-josefin text-[10px] tracking-w2 text-muted uppercase">{item.label}</span>
                <span className="font-cormorant text-lg text-cream/80">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Imagem da planta */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative bg-white/[0.03] border border-white/8 p-4 md:p-6">
            <Image
              src="/images/planta-tipo.png"
              alt="Planta Pavimento Tipo Veríssimo"
              width={900}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute top-4 right-4">
              <span className="font-josefin text-[9px] tracking-w3 text-muted uppercase bg-surface px-3 py-1.5">
                Studio R · 2026
              </span>
            </div>
          </div>

          {/* Label decorativo */}
          <p className="mt-4 font-josefin text-[10px] tracking-w2 text-muted uppercase text-center">
            Layout Pav. Tipo · Veríssimo
          </p>
        </motion.div>

      </div>
    </section>
  );
}
