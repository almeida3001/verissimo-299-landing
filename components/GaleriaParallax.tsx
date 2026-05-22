"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const fotos = [
  { src: "/images/fachada-frontal.png",   caption: "Fachada Principal",          span: "lg:col-span-7" },
  { src: "/images/vista-lateral.png",     caption: "Vista Lateral",              span: "lg:col-span-5" },
  { src: "/images/entrada-terreo.png",    caption: "Jardim e Entrada",           span: "lg:col-span-5" },
  { src: "/images/jardim-aereo.png",      caption: "Jardim — Vista Aérea",       span: "lg:col-span-7" },
  { src: "/images/fachada-lateral.png",   caption: "Detalhe da Fachada",         span: "lg:col-span-12" },
];

function GaleriaCard({ src, caption, span, delay }: { src: string; caption: string; span: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden group cursor-zoom-in ${span}`}
      style={{ aspectRatio: span.includes("col-span-12") ? "16/7" : "4/3" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </motion.div>

      {/* Halftone overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "4px 4px" }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/50 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 flex items-end p-6 md:p-8">
        <span className="font-josefin text-[10px] tracking-w3 text-cream/0 group-hover:text-cream/90 uppercase transition-all duration-400 translate-y-2 group-hover:translate-y-0">
          {caption}
        </span>
      </div>
    </motion.div>
  );
}

export default function GaleriaParallax() {
  return (
    <section className="bg-surface py-28 md:py-36 px-6 md:px-12" id="galeria">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <motion.span
              className="block h-px bg-sea"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">Galeria</span>
          </div>
          <h2 className="font-outfit font-extralight text-4xl md:text-5xl text-cream leading-[1.05]">
            Cada ângulo revela
            <br />
            <span className="font-cormorant italic text-sand">uma nova intenção</span>
          </h2>
        </motion.div>

        {/* Grid bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {fotos.map((f, i) => (
            <GaleriaCard
              key={f.src}
              src={f.src}
              caption={f.caption}
              span={f.span}
              delay={i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
