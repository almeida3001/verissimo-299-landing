"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const pontos = [
  { label: "Praia da Barra da Tijuca", dist: "< 500m" },
  { label: "Shopping Barra",           dist: "3 min"  },
  { label: "Downtown RJ",              dist: "8 min"  },
  { label: "Aeroporto Santos Dumont",  dist: "35 min" },
  { label: "Aeroporto Galeão",         dist: "45 min" },
];

export default function Localizacao() {
  return (
    <section className="relative bg-bg overflow-hidden" id="localizacao">

      {/* ── Imagem aérea hero da seção ── */}
      <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        >
          <Image
            src="/images/localizacao-aerea.jpg"
            alt="Vista aérea da Barra da Tijuca · Veríssimo"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.15) 70%, rgba(16,12,8,0.95) 100%)",
          }}
        />

        {/* Conteúdo centralizado sobre a imagem */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">

          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="block h-px w-10 bg-sand/70" />
            <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-sand uppercase">
              Localização
            </span>
            <span className="block h-px w-10 bg-sand/70" />
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              className="font-outfit font-extralight text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-tight text-balance max-w-5xl"
              initial={{ y: "115%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              No coração
              <br />
              <span className="font-cormorant italic text-sand">da Barra da Tijuca</span>
            </motion.h2>
          </div>

          {/* Sub */}
          <motion.p
            className="font-cormorant italic text-xl md:text-2xl lg:text-3xl text-cream/85 max-w-2xl leading-snug mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            A poucos passos do mar, cercado pelo que importa.
          </motion.p>

          {/* Endereço */}
          <motion.div
            className="flex items-center gap-2.5 px-6 py-3 rounded-full"
            style={{ background: "rgba(36, 30, 22, 0.55)", backdropFilter: "blur(16px) saturate(160%)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <MapPin size={14} className="text-sand" />
            <span className="font-josefin text-[11px] tracking-w2 text-cream/90 uppercase">
              Av. Érico Veríssimo, 299 · Barra da Tijuca
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Distâncias / Pontos próximos ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-josefin text-[10px] tracking-w3 text-sand uppercase mb-4">
            Pontos próximos
          </p>
          <h3 className="font-outfit font-extralight text-3xl md:text-4xl lg:text-5xl text-cream leading-tight max-w-3xl mx-auto text-balance">
            Tudo o que faz a Barra ser a Barra,
            <br />
            <span className="font-cormorant italic text-sand">à sua porta.</span>
          </h3>
        </motion.div>

        {/* Grid de distâncias */}
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/8 border-t border-b border-white/8">
          {pontos.map((p, i) => (
            <motion.div
              key={p.label}
              className="px-6 py-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <p className="font-cormorant text-3xl md:text-4xl text-sand mb-2">{p.dist}</p>
              <p className="font-josefin text-[10px] tracking-w2 text-cream/55 uppercase leading-snug">
                {p.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Maps */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="https://maps.google.com/?q=Av.+Érico+Veríssimo,+299,+Barra+da+Tijuca,+Rio+de+Janeiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-josefin text-[11px] tracking-w2 text-sea uppercase border-b border-sea/40 pb-1 hover:text-sand hover:border-sand transition-colors duration-300"
          >
            Abrir no Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
