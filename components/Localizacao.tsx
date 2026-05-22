"use client";

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
    <section className="bg-surface py-28 md:py-36 px-6 md:px-16" id="localizacao">
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
            <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">Localização</span>
          </div>
          <h2 className="font-outfit font-extralight text-4xl md:text-5xl text-cream leading-[1.05]">
            O endereço que
            <br />
            <span className="font-cormorant italic text-sand">tudo resume</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Mapa embed */}
          <motion.div
            className="relative overflow-hidden border border-white/8"
            style={{ aspectRatio: "4/3" }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              title="Mapa Veríssimo 299"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2!2d-43.3674!3d-23.0089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda3f8a3a3a3a3a%3A0x1234567890abcdef!2sAv.%20%C3%89rico%20Ver%C3%ADssimo%2C%20299%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1716000000000!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Endereço */}
            <div className="flex items-start gap-3 mb-10 p-6 border border-white/8 bg-bg/50">
              <MapPin size={16} className="text-sand mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-outfit font-light text-lg text-cream mb-1">
                  Av. Érico Veríssimo, 299
                </p>
                <p className="font-josefin text-sm text-muted">
                  Barra da Tijuca — Rio de Janeiro, RJ
                </p>
              </div>
            </div>

            {/* Distâncias */}
            <div className="space-y-4">
              {pontos.map((p, i) => (
                <motion.div
                  key={p.label}
                  className="flex items-center justify-between border-b border-white/6 pb-4"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                >
                  <span className="font-josefin text-sm text-cream/70">{p.label}</span>
                  <span className="font-cormorant text-xl text-sand">{p.dist}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Maps */}
            <a
              href="https://maps.google.com/?q=Av.+Érico+Veríssimo,+299,+Barra+da+Tijuca,+Rio+de+Janeiro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-josefin text-[11px] tracking-w2 text-sea uppercase border-b border-sea/40 pb-1 hover:text-sand hover:border-sand transition-colors duration-300 mt-8"
            >
              Abrir no Google Maps
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
