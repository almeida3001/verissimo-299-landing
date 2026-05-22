"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function Empreendimento() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    v.currentTime = 0;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }

  return (
    <section className="relative bg-bg overflow-hidden" id="localizacao">

      {/* ── PARTE 1 — Split 50/50: vídeo à esquerda + descrição à direita ── */}
      <div className="relative grid md:grid-cols-2 items-center gap-0">

        {/* Vídeo (50% esquerda) — quadrado 1:1 */}
        <div className="relative overflow-hidden bg-bg w-full aspect-square">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/videobanner3-poster.jpg"
            controls={playing}
            className="absolute inset-0 w-full h-full object-cover"
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
            onEnded={() => setPlaying(false)}
          >
            <source src="/videos/videobanner3.mp4" type="video/mp4" />
          </video>

          {/* Overlay com botão play — só quando não tá tocando */}
          {!playing && (
            <>
              {/* Overlay escuro sutil */}
              <div className="absolute inset-0 bg-black/30" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.45) 100%)" }}
              />

              {/* Botão Play centralizado */}
              <motion.button
                onClick={handlePlay}
                aria-label="Assistir ao vídeo do empreendimento"
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 z-10 cursor-pointer group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-sea/60 group-hover:border-sea group-hover:scale-110 transition-all duration-400">
                  <span className="absolute inset-0 rounded-full bg-sea/10 group-hover:bg-sea/25 transition-all duration-400" />
                  <span className="absolute inset-0 rounded-full bg-sea/15 group-hover:bg-sea/30 blur-xl transition-all duration-500" />
                  <Play size={22} className="relative text-sea ml-1" fill="currentColor" />
                </span>
                <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-cream/85 uppercase group-hover:text-sea transition-colors duration-300">
                  Assistir ao vídeo
                </span>
              </motion.button>
            </>
          )}
        </div>

        {/* Conteúdo descritivo (50% direita) */}
        <motion.div
          className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="block h-px w-10 bg-sea/70" />
            <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-sea uppercase">
              Localização
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-outfit font-extralight text-4xl md:text-5xl lg:text-6xl text-cream leading-[0.95] tracking-tight mb-3 text-balance">
            Uma localização
          </h2>
          <h2 className="font-cormorant italic font-light text-4xl md:text-5xl lg:text-6xl text-sea leading-[0.95] tracking-tight mb-8 text-balance">
            de tirar o fôlego
          </h2>

          {/* Descrição — apenas 1 parágrafo */}
          <div className="font-josefin text-sm md:text-base text-cream/65 leading-relaxed max-w-xl border-t border-elevated/50 pt-8">
            <p>
              O <span className="text-cream">Veríssimo Residence</span> nasce em um
              dos trechos mais residenciais da Barra — entre o calçadão da Praia do
              Pepê e a esquina da Av. Olegário Maciel, na{" "}
              <span className="text-cream">Av. Érico Veríssimo, 299</span>. Assinado
              pelo <span className="text-cream">Studio R Arquitetura & Interiores</span>,
              um endereço para morar com tempo.
            </p>
          </div>

          {/* Pontos próximos — lista compacta */}
          <div className="mt-10 pt-8 border-t border-elevated/50">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="block h-px w-8 bg-sea" />
              <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">
                Pontos próximos
              </span>
            </div>
            <div className="space-y-px bg-elevated/30">
              {[
                { label: "Praia do Pepê",         dist: "4 min a pé" },
                { label: "Av. Olegário Maciel",   dist: "3 min a pé" },
                { label: "Supermercado Zona Sul", dist: "ao lado"    },
                { label: "Bodytech · Smart Fit",  dist: "5 min a pé" },
              ].map((p, i) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between gap-4 bg-bg px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-josefin text-[9px] tracking-w2 text-sea uppercase w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-outfit font-light text-sm text-cream">
                      {p.label}
                    </span>
                  </div>
                  <span className="font-cormorant italic text-sm text-cream/55 whitespace-nowrap">
                    {p.dist}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── PARTE 2 — Descrição detalhada do projeto ── */}
      <div className="relative px-6 md:px-16 py-24 md:py-32">

        {/* Gradient bege sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 15% 10%, rgba(232, 220, 196, 0.06) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 85% 90%, rgba(127, 168, 176, 0.04) 0%, transparent 55%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto">

          {/* Header bloco descritivo — Texto 60% à esquerda + Imagem 40% à direita */}
          <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center mb-20">

            {/* Lado esquerdo — Texto 60% (3/5 cols) */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="block h-px w-8 bg-sea" />
                <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">
                  O Projeto
                </span>
              </div>

              {/* Título */}
              <h3 className="font-outfit font-extralight text-4xl md:text-5xl lg:text-6xl text-cream leading-[0.95] tracking-tight mb-2">
                Veríssimo
              </h3>
              <p
                className="font-cormorant italic font-light text-cream text-base md:text-lg mb-8"
                style={{ letterSpacing: "0.4em" }}
              >
                Residence
              </p>

              {/* Sub italic */}
              <p className="font-cormorant italic text-xl md:text-2xl text-cream/90 leading-snug mb-6">
                Três andares. Seis apartamentos. Um edifício que devolve à Barra o que sempre lhe coube: o tempo de quem mora bem.
              </p>

              {/* Parágrafos descritivos */}
              <div className="space-y-4 font-josefin text-sm md:text-base text-cream/65 leading-relaxed">
                <p>
                  Localizado na <span className="text-cream">Av. Érico Veríssimo, 299</span>,
                  no coração da Barra da Tijuca, o Veríssimo Residence é assinado pelo{" "}
                  <span className="text-cream">Studio R Arquitetura & Interiores</span>,
                  responsável por alguns dos endereços mais desejados do litoral carioca.
                </p>
                <p>
                  São apenas <span className="text-cream">seis unidades no total</span>{" "}
                  — duas por andar, em <span className="text-cream">três pavimentos sobre
                  térreo livre</span>. Apartamentos de 2 quartos e coberturas privativas
                  com varandas amplas, paisagismo tropical integrado e iluminação cênica
                  em toda a circulação.
                </p>
                <p>
                  A fachada combina <span className="text-cream">ripado de madeira natural</span>,
                  vidro temperado em esquadrias generosas e <span className="text-cream">pedra
                  portuguesa</span> no embasamento. Coroada por um{" "}
                  <span className="text-cream">pergolado superior em bambu</span> que
                  filtra a luz e marca a silhueta do edifício no skyline da Barra.
                </p>
              </div>
            </motion.div>

            {/* Lado direito — Imagem do Veríssimo 40% (2/5 cols) */}
            <motion.div
              className="relative overflow-hidden order-first md:order-last md:col-span-2"
              style={{ aspectRatio: "4/5" }}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, ease: "easeOut" }}
              >
                <Image
                  src="/images/fachada-frontal.png"
                  alt="Fachada principal Veríssimo Residence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Vignette sutil */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,0.35) 100%)" }}
              />
            </motion.div>
          </div>

          {/* Stats — Informações técnicas do empreendimento */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="block h-px w-8 bg-sea" />
              <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">
                Informações técnicas
              </span>
            </div>

            {/* Destaque principal — 6 apartamentos */}
            <div className="grid md:grid-cols-12 gap-px bg-elevated/30 border-y border-elevated/50">
              {/* Hero stat — Apenas 6 unidades */}
              <div className="md:col-span-5 bg-bg px-6 py-10 md:py-14 flex flex-col justify-center">
                <p className="font-outfit font-extralight text-7xl md:text-8xl lg:text-9xl text-sea leading-none mb-3">
                  06
                </p>
                <p className="font-cormorant italic text-xl md:text-2xl text-cream/85">
                  apartamentos no prédio inteiro
                </p>
                <p className="font-josefin text-[10px] tracking-w2 text-cream/65 uppercase mt-2">
                  2 por andar · privacidade real
                </p>
              </div>

              {/* Demais stats */}
              <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-2 divide-x divide-y divide-elevated/40">
                {[
                  { value: "2 quartos",        label: "Tipologia padrão"          },
                  { value: "Coberturas",       label: "Privativas com terraço"    },
                  { value: "Térreo + 3",       label: "Pavimentos"                },
                  { value: "Entrega 2027",     label: "Pré-lançamento"            },
                  { value: "Studio R",         label: "Arquitetura & Interiores"  },
                  { value: "Absoluto",         label: "Construção e Incorporação" },
                ].map((s) => (
                  <div key={s.label} className="bg-bg px-5 py-6">
                    <p className="font-outfit font-light text-xl md:text-2xl text-cream leading-tight mb-1">{s.value}</p>
                    <p className="font-josefin text-[9px] tracking-w2 text-cream/65 uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
