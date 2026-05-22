"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function Localizacao() {
  return (
    <section className="relative bg-bg py-24 md:py-32 px-6 md:px-16 overflow-hidden" id="localizacao">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 15% 50%, rgba(232, 220, 196, 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 85% 50%, rgba(217, 205, 184, 0.05) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Imagem aérea */}
        <motion.div
          className="relative overflow-hidden"
          style={{ aspectRatio: "4/5" }}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          >
            <Image
              src="/images/localizacao-aerea.jpg"
              alt="Vista aérea da Barra da Tijuca Veríssimo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)" }}
          />

          <motion.div
            className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 flex items-center gap-2 px-4 py-2.5 rounded-full"
            style={{ background: "rgba(36, 30, 22, 0.65)", backdropFilter: "blur(16px) saturate(160%)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MapPin size={12} className="text-sea flex-shrink-0" />
            <span className="font-josefin text-[10px] tracking-w2 text-cream/85 uppercase">
              Av. Érico Veríssimo, 299 · Barra da Tijuca
            </span>
          </motion.div>
        </motion.div>

        {/* Conteúdo (direita) — simplificado, sem duplicação de lista */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="block h-px w-10 bg-sea" />
            <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-sea uppercase">
              Localização
            </span>
          </div>

          <h2 className="font-outfit font-extralight text-4xl md:text-5xl lg:text-6xl text-cream leading-[0.95] tracking-tight mb-6 text-balance">
            A Barra que poucos
            <br />
            <span className="font-cormorant italic text-cream">conhecem por dentro.</span>
          </h2>

          <p className="font-cormorant italic text-lg md:text-xl text-cream/75 leading-snug mb-10 max-w-md">
            Cinco minutos a pé do mar. O resto, à sua porta.
          </p>

          <p className="font-josefin text-sm text-cream/55 leading-relaxed max-w-md mb-10">
            Entre o calçadão da Praia do Pepê e a esquina da Av. Olegário Maciel,
            o eixo mais residencial da Barra — onde estão o mercado, a padaria,
            as academias e a vida cotidiana de quem conhece o bairro de verdade.
          </p>

          <a
            href="https://maps.google.com/?q=Av.+Érico+Veríssimo,+299,+Barra+da+Tijuca,+Rio+de+Janeiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-josefin text-[11px] tracking-w2 text-sea uppercase border-b border-sea/40 pb-1 hover:text-sea hover:border-sea transition-colors duration-300"
          >
            Ver no Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
