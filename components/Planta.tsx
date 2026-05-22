"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Planta() {
  return (
    <section className="relative bg-warmlight text-textdark py-28 md:py-36 px-6 md:px-16 overflow-hidden" id="planta">

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-5 gap-16 items-center">

        {/* Texto — 60% (3/5 cols) */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <motion.span
              className="block h-px bg-sea"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">Plantas</span>
          </div>

          <h2 className="font-outfit font-extralight text-5xl md:text-6xl text-textdark leading-[0.92] tracking-tight mb-6">
            Pavimento
            <br />
            <span className="font-cormorant italic text-sea">Tipo</span>
          </h2>

          <p className="font-josefin text-sm text-muteddark leading-relaxed mb-10 max-w-md">
            Quatro unidades por andar nos dois primeiros pavimentos, com hall
            de elevadores central. Sala integrada à varanda, cozinha aberta à
            sala de jantar. Coberturas privativas nos dois níveis superiores.
          </p>

          <div className="space-y-4 border-t border-linedark pt-8">
            {[
              { label: "Tipologia",   value: "2 quartos / Cobertura" },
              { label: "Unidades",    value: "12 no total" },
              { label: "Apartamentos", value: "4 por andar (1º e 2º)" },
              { label: "Coberturas",   value: "2 por nível · 2 níveis" },
              { label: "Arquitetura",  value: "Studio R Arquitetura & Interiores" },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline justify-between gap-4">
                <span className="font-josefin text-[10px] tracking-w2 text-muteddark/70 uppercase">{item.label}</span>
                <span className="font-cormorant text-lg text-textdark/80">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Imagem da planta — 40% (2/5 cols) */}
        <motion.div
          className="relative md:col-span-2"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative bg-white/40 border border-textdark/10 p-4 md:p-6">
            <Image
              src="/images/planta-tipo.png"
              alt="Planta Pavimento Tipo Veríssimo"
              width={900}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute top-4 right-4">
              <span className="font-josefin text-[9px] tracking-w3 text-muteddark uppercase bg-warmlight px-3 py-1.5 border border-textdark/10">
                Studio R · 2027
              </span>
            </div>
          </div>

          <p className="mt-4 font-josefin text-[10px] tracking-w2 text-muteddark/70 uppercase text-center">
            Layout Pav. Tipo · Veríssimo
          </p>
        </motion.div>

      </div>
    </section>
  );
}
