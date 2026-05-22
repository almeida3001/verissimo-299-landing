"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function Localizacao() {
  return (
    <section className="relative bg-warmlight text-textdark overflow-hidden" id="bairro">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 15% 50%, rgba(232, 220, 196, 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 85% 50%, rgba(217, 205, 184, 0.05) 0%, transparent 55%)",
        }}
      />

      <div className="relative grid md:grid-cols-2 items-stretch">

        {/* Imagem aérea — 50% FULL BLEED (sem gap, sem padding lateral) */}
        <motion.div
          className="relative overflow-hidden w-full h-full min-h-[500px] md:min-h-[700px]"
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
              src="/images/bairro.jpg"
              alt="Bairro da Barra da Tijuca · entorno do Veríssimo"
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
            style={{ background: "rgba(28, 25, 23, 0.85)", backdropFilter: "blur(20px) saturate(180%)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MapPin size={12} className="text-sea flex-shrink-0" />
            <span className="font-josefin text-[10px] tracking-w2 text-cream uppercase">
              Av. Érico Veríssimo, 299 · Barra da Tijuca
            </span>
          </motion.div>
        </motion.div>

        {/* Conteúdo — rico, estilo "Sobre o Bairro" Bruma — 50% (com padding interno) */}
        <motion.div
          className="px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col justify-center"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="block h-px w-10 bg-sea" />
            <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-sea uppercase">
              Sobre o bairro
            </span>
          </div>

          <h2 className="font-outfit font-extralight text-3xl md:text-4xl lg:text-5xl text-textdark leading-[1.05] tracking-tight mb-8 text-balance">
            Construa seu legado
            <br />
            <span className="font-cormorant italic text-textdark">a poucos passos do mar.</span>
          </h2>

          <p className="font-cormorant italic text-lg md:text-xl text-textdark/85 leading-snug mb-8 max-w-md">
            Localizado na Av. Érico Veríssimo, 299, entre o calçadão da Praia do
            Pepê e a esquina da Av. Olegário Maciel. O coração mais residencial
            da Barra da Tijuca.
          </p>

          <div className="space-y-4 font-josefin text-sm md:text-base text-muteddark leading-relaxed max-w-lg mb-8">
            <p>
              Entre a praia, o calçadão arborizado e a vida cotidiana de quem
              conhece a Barra por dentro, você estará cercado pelos principais
              pontos do bairro: a <span className="text-textdark">Praia do Pepê</span> a
              quatro minutos a pé, a <span className="text-textdark">Av. Olegário
              Maciel</span> na esquina, o <span className="text-textdark">Bosque da
              Barra</span>, o supermercado, a academia e os melhores restaurantes
              da orla.
            </p>
            <p>
              Tudo o que faz deste pedaço da Barra o mais desejado por quem
              já conhece, e o melhor segredo guardado de quem ainda vai descobrir.
            </p>
          </div>

          <p className="font-cormorant italic text-base md:text-lg text-textdark/75 leading-snug mb-10 max-w-md border-l-2 border-sea/40 pl-4">
            Av. Érico Veríssimo, 299: onde discrição, localização e estilo de
            vida encontram o seu endereço.
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
