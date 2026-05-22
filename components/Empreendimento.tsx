"use client";

import { useRef, useState } from "react";
import Image from "next/image";
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

      {/* ── PARTE 1 — Split 50/50: vídeo à esquerda + descrição à direita ── */}
      <div className="relative grid md:grid-cols-2 min-h-[85vh] md:min-h-screen">

        {/* Vídeo (50% esquerda) */}
        <div className="relative overflow-hidden bg-bg min-h-[60vh] md:min-h-screen">
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
              O Empreendimento
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-outfit font-extralight text-4xl md:text-5xl lg:text-6xl text-cream leading-[0.95] tracking-tight mb-3 text-balance">
            Uma localização
          </h2>
          <h2 className="font-cormorant italic font-light text-4xl md:text-5xl lg:text-6xl text-sea leading-[0.95] tracking-tight mb-8 text-balance">
            de tirar o fôlego
          </h2>

          {/* Sub */}
          <p className="font-cormorant italic text-lg md:text-xl text-cream/85 leading-snug mb-10 max-w-md">
            Na Avenida Érico Veríssimo, frente para o mar.
          </p>

          {/* Descrição detalhada */}
          <div className="space-y-4 font-josefin text-sm md:text-base text-cream/65 leading-relaxed max-w-xl border-t border-elevated/50 pt-8">
            <p>
              O <span className="text-cream">Veríssimo Residence</span> é um projeto
              residencial de baixa escala assinado pelo{" "}
              <span className="text-cream">Studio R Arquitetura & Interiores</span>,
              localizado na <span className="text-cream">Av. Érico Veríssimo, 299</span>,
              coração da Barra da Tijuca.
            </p>
            <p>
              Apenas <span className="text-cream">térreo + 3 pavimentos</span> com
              quatro unidades por andar — apartamentos de 2 quartos e coberturas
              privativas. Varandas amplas, plantas funcionais e paisagismo tropical
              integrado em cada detalhe.
            </p>
            <p>
              Fachada com <span className="text-cream">ripado de madeira natural</span>,
              vidro temperado em esquadrias generosas e{" "}
              <span className="text-cream">pedra portuguesa</span> no embasamento.
              Coroada por <span className="text-cream">pergolado superior em bambu</span>,
              que filtra a luz e marca a silhueta do edifício.
            </p>
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

          {/* Header bloco descritivo — Imagem à esquerda + Texto completo à direita */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">

            {/* Lado esquerdo — Imagem do Veríssimo */}
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

            {/* Lado direito — Eyebrow + Título + Descrição completa */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                Um projeto residencial de baixa escala que reescreve o luxo na Barra da Tijuca.
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
              <span className="font-cormorant italic text-sea">trazido para dentro.</span>
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
