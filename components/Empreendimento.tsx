"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

const diferenciais = [
  { num: "01", label: "Localização Privilegiada", desc: "A poucos passos da Praia do Pepê, no coração da Barra da Tijuca. Endereço consolidado, valorização constante." },
  { num: "02", label: "Escala Boutique",          desc: "Térreo + 3 pavimentos apenas. Quatro unidades por andar. Exclusividade, privacidade e convívio em baixa escala." },
  { num: "03", label: "Arquitetura Assinada",     desc: "Projeto do Studio R Arquitetura & Interiores. Linguagem contemporânea com referências do litoral carioca." },
  { num: "04", label: "Fachada Atemporal",        desc: "Ripado de madeira natural, vidro temperado e pedra portuguesa. Pergolado superior em bambu integrado ao paisagismo." },
  { num: "05", label: "Iluminação Cênica",        desc: "Iluminação linear LED nas circulações, varandas e paisagismo. Atmosfera singular do amanhecer ao anoitecer." },
  { num: "06", label: "Tipologias Exclusivas",    desc: "Apartamentos de 2 quartos e coberturas privativas. Varandas amplas, plantas funcionais e acabamento de alto padrão." },
];

const acabamentos = [
  "Ripado de madeira natural",
  "Pedra portuguesa no térreo",
  "Vidro temperado em esquadrias amplas",
  "Pergolado superior em bambu",
  "Iluminação linear LED integrada",
  "Paisagismo tropical assinado",
  "Hall social com pé-direito duplo",
  "Lobby de mármore travertino",
];

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
    <section className="relative bg-bg overflow-hidden" id="empreendimento">

      {/* ── PARTE 1 — Hero da seção com video banner (player click-to-play) ── */}
      <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">

        {/* Video — pausado por padrão, mostra poster */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/videobanner2-poster.jpg"
          controls={playing}
          className="absolute inset-0 w-full h-full object-cover"
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          onEnded={() => setPlaying(false)}
        >
          <source src="/videos/videobanner2.mp4" type="video/mp4" />
        </video>

        {/* Overlays — só visíveis quando NÃO tá tocando */}
        {!playing && (
          <>
            <div className="absolute inset-0 bg-black/45" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(28,25,23,0.55) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.15) 70%, rgba(28,25,23,0.95) 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)" }}
            />
          </>
        )}

        {/* Conteúdo centralizado — esconde quando tá tocando */}
        {!playing && (
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">

            {/* Eyebrow */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <span className="block h-px w-10 bg-sea/70" />
              <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-sea uppercase">
                O Empreendimento
              </span>
              <span className="block h-px w-10 bg-sea/70" />
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h2
                className="font-outfit font-extralight text-5xl md:text-7xl lg:text-[7rem] text-cream leading-[0.92] tracking-tight text-balance max-w-5xl"
                initial={{ y: "115%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Uma localização
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                className="font-cormorant italic font-light text-5xl md:text-7xl lg:text-[7rem] text-sea leading-[0.92] tracking-tight text-balance"
                initial={{ y: "115%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                de tirar o fôlego
              </motion.h2>
            </div>

            {/* Sub */}
            <motion.p
              className="font-cormorant italic text-xl md:text-2xl lg:text-3xl text-cream/85 max-w-2xl leading-snug mb-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.85 }}
            >
              Na Avenida Érico Veríssimo, frente para o mar.
            </motion.p>

            {/* Botão Play */}
            <motion.button
              onClick={handlePlay}
              aria-label="Assistir ao vídeo do empreendimento"
              className="group inline-flex items-center gap-4 cursor-pointer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.05 }}
            >
              <span className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-sea/60 group-hover:border-sea group-hover:scale-110 transition-all duration-400">
                <span className="absolute inset-0 rounded-full bg-sea/10 group-hover:bg-sea/20 transition-all duration-400" />
                <Play size={20} className="relative text-sea ml-0.5" fill="currentColor" />
              </span>
              <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-cream/85 uppercase group-hover:text-sea transition-colors duration-300">
                Assistir ao vídeo
              </span>
            </motion.button>
          </div>
        )}
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

          {/* Header bloco descritivo */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20">

            {/* Lado esquerdo — Nome + tag */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="block h-px w-8 bg-sea" />
                <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">
                  O Projeto
                </span>
              </div>

              <h3 className="font-outfit font-extralight text-5xl md:text-6xl text-cream leading-[0.95] tracking-tight">
                Veríssimo
                <span
                  className="block font-cormorant italic font-light text-gold text-2xl md:text-3xl -mt-1"
                  style={{ letterSpacing: "0.4em" }}
                >
                  Residence
                </span>
              </h3>
            </motion.div>

            {/* Lado direito — Descrição detalhada */}
            <motion.div
              className="md:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="font-cormorant italic text-2xl md:text-3xl text-cream/90 leading-snug">
                Um projeto residencial de baixa escala que reescreve o luxo na Barra
                da Tijuca.
              </p>

              <div className="space-y-4 font-josefin text-base text-cream/65 leading-relaxed">
                <p>
                  Localizado na <span className="text-cream">Av. Érico Veríssimo, 299</span>,
                  no coração da Barra da Tijuca, o Veríssimo Residence é assinado pelo{" "}
                  <span className="text-cream">Studio R Arquitetura & Interiores</span> —
                  responsável por alguns dos endereços mais desejados do litoral carioca.
                </p>
                <p>
                  São apenas <span className="text-cream">quatro unidades por andar</span>{" "}
                  distribuídas em <span className="text-cream">térreo + 3 pavimentos</span>.
                  Apartamentos de 2 quartos e coberturas privativas com varandas amplas,
                  paisagismo tropical integrado e iluminação cênica em toda a circulação.
                </p>
                <p>
                  A fachada combina <span className="text-cream">ripado de madeira natural</span>,
                  vidro temperado em esquadrias generosas e <span className="text-cream">pedra
                  portuguesa</span> no embasamento. Coroada por um{" "}
                  <span className="text-cream">pergolado superior em bambu</span> que
                  filtra a luz e marca a silhueta do edifício no skyline da praia.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="border-y border-elevated/50 grid grid-cols-3 md:grid-cols-6 gap-px bg-elevated/30 mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: "T + 3",  label: "Pavimentos"        },
              { value: "4",      label: "Unidades / andar"  },
              { value: "2Q",     label: "Tipologia padrão"  },
              { value: "Cob.",   label: "Coberturas"        },
              { value: "2026",   label: "Entrega"           },
              { value: "Studio R", label: "Arquitetura"     },
            ].map((s) => (
              <div key={s.label} className="bg-bg px-4 py-8 text-center">
                <p className="font-outfit font-extralight text-2xl md:text-3xl text-cream mb-1">{s.value}</p>
                <p className="font-josefin text-[9px] tracking-w2 text-muted uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Acabamentos */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="block h-px w-8 bg-sea" />
              <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">
                Acabamentos & Materiais
              </span>
            </div>

            <h3 className="font-outfit font-extralight text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05] mb-10 max-w-3xl text-balance">
              O melhor da natureza,
              <br />
              <span className="font-cormorant italic text-gold">trazido para dentro.</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12 max-w-3xl">
              {acabamentos.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 py-2 border-b border-elevated/40"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <span className="font-josefin text-[9px] tracking-w2 text-sea/70 uppercase w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-outfit font-light text-base text-cream/85">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Diferenciais grid */}
          <div className="mb-4">
            <motion.div
              className="inline-flex items-center gap-3 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="block h-px w-8 bg-sea" />
              <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase">
                Diferenciais
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-elevated/30">
              {diferenciais.map((d, i) => (
                <motion.div
                  key={d.num}
                  className="bg-bg p-8 md:p-10 group hover:bg-surface transition-colors duration-500"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <span className="font-josefin text-[10px] tracking-w3 text-sea uppercase mb-5 block">
                    {d.num}
                  </span>
                  <h4 className="font-outfit font-light text-xl text-cream mb-3 group-hover:text-sea transition-colors duration-300">
                    {d.label}
                  </h4>
                  <p className="font-josefin text-sm text-cream/55 leading-relaxed">
                    {d.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
