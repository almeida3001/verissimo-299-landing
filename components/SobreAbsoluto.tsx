"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function SobreAbsoluto() {
  return (
    <section className="relative bg-bg text-cream py-20 md:py-32 px-6 md:px-16 overflow-hidden">

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">

        {/* Lado esquerdo — Headline + número 10 grande */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="block h-px w-8 bg-sea" />
            <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">
              Quem entrega
            </span>
          </div>

          {/* Logo Absoluto */}
          <div className="mb-8">
            <Image
              src="/images/logo-absoluto.png"
              alt="Absoluto Engenharia"
              width={280}
              height={80}
              className="h-16 md:h-20 w-auto object-contain"
              priority={false}
            />
          </div>

          {/* Destaque dos 10 anos */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-cormorant font-light text-7xl md:text-8xl text-sea leading-none">
              10
            </span>
            <div className="border-l border-sea/40 pl-4">
              <p className="font-josefin text-[10px] tracking-w2 text-sea uppercase leading-tight">
                Anos de mercado
              </p>
              <p className="font-josefin text-[10px] tracking-w1 text-cream/55 mt-1">
                2016 — 2027
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lado direito — Texto descritivo + stats + CTA */}
        <motion.div
          className="md:col-span-7 space-y-6"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-cormorant italic text-xl md:text-2xl text-cream/90 leading-snug">
            Uma década entregando no prazo, no Rio de Janeiro.
          </p>

          <div className="space-y-4 font-josefin text-sm md:text-base text-cream/65 leading-relaxed max-w-2xl">
            <p>
              Fundada em <span className="text-cream font-medium">2016</span>, a Absoluto
              Engenharia e Construções completa uma década de atuação no Rio de
              Janeiro com <span className="text-cream font-medium">mais de 50 obras entregues</span>:
              residenciais, comerciais, industriais e incorporações. Um histórico
              sólido construído projeto a projeto.
            </p>
            <p>
              No Veríssimo Residence, a Absoluto assume a{" "}
              <span className="text-cream font-medium">construção e incorporação</span> do
              empreendimento, garantindo o padrão técnico, prazo e acabamento
              que definem cada obra da empresa.
            </p>
          </div>

          {/* Stats Absoluto */}
          <div className="grid grid-cols-3 gap-px bg-elevated/30 border-y border-elevated/50 mt-8">
            {[
              { value: "10",  label: "Anos de mercado"   },
              { value: "50+", label: "Obras entregues"   },
              { value: "RJ",  label: "Rio de Janeiro"    },
            ].map((s) => (
              <div key={s.label} className="bg-bg px-4 py-6 text-center">
                <p className="font-outfit font-extralight text-3xl md:text-4xl text-cream leading-none mb-1">
                  {s.value}
                </p>
                <p className="font-josefin text-[10px] tracking-w2 text-cream/55 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Link */}
          <a
            href="https://absoluto-engenharia.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-josefin text-[11px] tracking-w2 text-sea uppercase border-b border-sea/40 pb-1 hover:text-sea hover:border-sea transition-colors duration-300 mt-4"
          >
            <span>Conhecer a Absoluto Engenharia</span>
            <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform duration-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
