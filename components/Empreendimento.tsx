"use client";

import { motion } from "motion/react";

const diferenciais = [
  { num: "01", label: "Localização", desc: "A poucos metros da praia da Barra da Tijuca — o endereço mais cobiçado do Rio." },
  { num: "02", label: "Escala Boutique", desc: "Térreo + 3 pavimentos. Exclusividade, privacidade e convívio em baixa escala." },
  { num: "03", label: "Arquitetura Assinada", desc: "Projeto do Studio R Arquitetura & Interiores — ripado de madeira, vidro, pedra natural e pergolado em bambu." },
  { num: "04", label: "Varandas Amplas", desc: "Todas as unidades com varandas generosas e paisagismo tropical integrado." },
  { num: "05", label: "Iluminação Cênica", desc: "Iluminação linear LED nas circulações e no paisagismo — atmosfera singular a qualquer hora." },
  { num: "06", label: "Tipologias Exclusivas", desc: "Apartamentos de 2 quartos e coberturas — soluções para quem recusa o ordinário." },
];

export default function Empreendimento() {
  return (
    <section className="bg-bg py-28 md:py-36 px-6 md:px-16" id="empreendimento">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <motion.span
                className="block h-px bg-sand"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="font-josefin text-[10px] tracking-w3 text-sand uppercase">
                O Empreendimento
              </span>
            </div>

            <h2 className="font-outfit font-extralight text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.92] tracking-tight mb-6">
              Veríssimo
              <br />
              <span className="font-cormorant italic font-light text-sand">299</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <p className="font-cormorant italic text-2xl md:text-3xl text-cream/90 leading-snug mb-6">
              Projeto residencial de baixa escala que valoriza o convívio,
              a privacidade e a integração com a paisagem.
            </p>
            <p className="font-josefin text-sm text-cream/55 leading-relaxed">
              Av. Érico Veríssimo, 299 — Barra da Tijuca, Rio de Janeiro.
              Arquitetura do Studio R com fachada em ripado de madeira, vidro e pedra
              natural, além de pergolado superior em bambu e paisagismo tropical integrado.
              Previsão de entrega: 2026.
            </p>

            {/* Linha separadora */}
            <div className="mt-10 pt-10 border-t border-white/8 grid grid-cols-3 gap-6">
              {[
                { value: "T + 3", label: "Pavimentos" },
                { value: "2Q + CB", label: "Tipologias" },
                { value: "2026",   label: "Entrega" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-outfit font-extralight text-3xl text-cream mb-1">{s.value}</p>
                  <p className="font-josefin text-[10px] tracking-w2 text-muted uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {diferenciais.map((d, i) => (
            <motion.div
              key={d.num}
              className="bg-bg p-8 md:p-10 group hover:bg-surface transition-colors duration-500"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <span className="font-josefin text-[10px] tracking-w3 text-muted uppercase mb-5 block">
                {d.num}
              </span>
              <h3 className="font-outfit font-light text-xl text-cream mb-3 group-hover:text-sand transition-colors duration-300">
                {d.label}
              </h3>
              <p className="font-josefin text-sm text-cream/50 leading-relaxed">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
