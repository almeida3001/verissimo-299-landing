"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type Slide = {
  src: string;
  alt: string;
  headline: string;
  sub: string;
};

const slides: Slide[] = [
  {
    src: "/images/fachada-frontal.png",
    alt: "Fachada principal — Veríssimo",
    headline: "A poucos passos da praia",
    sub: "A Barra da Tijuca está a 5 minutos a pé. Calçadão, mar e quiosques no seu tempo livre.",
  },
  {
    src: "/images/vista-lateral.png",
    alt: "Vista lateral — Veríssimo",
    headline: "No coração da Barra",
    sub: "Av. Érico Veríssimo, 299 — endereço consolidado, valorização constante, cercado pela vida que importa.",
  },
  {
    src: "/images/jardim-aereo.png",
    alt: "Jardim — Veríssimo",
    headline: "Qualidade de vida",
    sub: "Paisagismo tropical integrado, iluminação cênica e arquitetura que respira. Um refúgio dentro da cidade.",
  },
  {
    src: "/images/entrada-terreo.png",
    alt: "Jardim e entrada — Veríssimo",
    headline: "Próximo ao mercado e ao metrô",
    sub: "Padaria, mercado e BRT a poucos metros. Toda a praticidade da Barra à porta de casa.",
  },
  {
    src: "/images/fachada-lateral.png",
    alt: "Detalhe da fachada — Veríssimo",
    headline: "Boutique residencial",
    sub: "Térreo + 3 pavimentos assinados pelo Studio R. Apartamentos de 2 quartos e coberturas exclusivas.",
  },
];

export default function GaleriaParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastP = useRef(-1);

  useEffect(() => {
    const N = slides.length;

    function update() {
      const section = sectionRef.current;
      if (!section) {
        rafRef.current = requestAnimationFrame(update);
        return;
      }

      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;
      const globalP = Math.max(0, Math.min(1, -rect.top / totalScroll));

      if (Math.abs(globalP - lastP.current) < 0.0002) {
        rafRef.current = requestAnimationFrame(update);
        return;
      }
      lastP.current = globalP;

      const activeIndex = Math.min(N - 1, Math.floor(globalP * N));
      const slideP = globalP * N - Math.floor(globalP * N);

      /* Imagens: zoom scrub + crossfade */
      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        if (i === activeIndex) {
          el.style.opacity = "1";
          el.style.transform = `scale(${1 + slideP * 0.18})`;
        } else if (i === activeIndex - 1) {
          el.style.opacity = String(Math.max(0, 1 - slideP * 3));
          el.style.transform = `scale(1.18)`;
        } else {
          el.style.opacity = "0";
          el.style.transform = "scale(1)";
        }
      });

      /* Textos: entrada + saída com translateY e opacity */
      textRefs.current.forEach((el, i) => {
        if (!el) return;
        if (i === activeIndex) {
          // dentro do slide: entra de baixo (slideP 0→0.15) e sai pra cima (slideP 0.7→1)
          let opacity = 1;
          let y = 0;
          if (slideP < 0.12) {
            opacity = slideP / 0.12;
            y = (1 - slideP / 0.12) * 30;
          } else if (slideP > 0.75) {
            opacity = Math.max(0, 1 - (slideP - 0.75) / 0.25);
            y = -((slideP - 0.75) / 0.25) * 30;
          }
          el.style.opacity = String(opacity);
          el.style.transform = `translateY(${y}px)`;
          el.style.visibility = "visible";
        } else {
          el.style.opacity = "0";
          el.style.visibility = "hidden";
        }
      });

      /* Counter + progress bar */
      if (counterRef.current) {
        counterRef.current.textContent = String(activeIndex + 1).padStart(2, "0");
      }
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${globalP})`;
      }

      rafRef.current = requestAnimationFrame(update);
    }

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${slides.length * 100}vh` }}
      id="galeria"
      aria-label="Galeria Veríssimo"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-bg">

        {/* Imagens stack */}
        {slides.map((s, i) => (
          <div
            key={s.src + i}
            ref={(el) => { imgRefs.current[i] = el; }}
            className="absolute inset-0"
            style={{
              opacity: i === 0 ? 1 : 0,
              willChange: "transform, opacity",
              transformOrigin: "center center",
              transition: "opacity 0.8s ease",
            }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i < 2}
            />
          </div>
        ))}

        {/* Overlays sutis — preserva imagem */}
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Textos slide */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          {slides.map((s, i) => (
            <div
              key={`text-${i}`}
              ref={(el) => { textRefs.current[i] = el; }}
              className="absolute inset-x-0 px-6"
              style={{
                opacity: i === 0 ? 1 : 0,
                willChange: "transform, opacity",
                visibility: i === 0 ? "visible" : "hidden",
              }}
            >
              {/* Eyebrow número */}
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="block h-px w-8 bg-sand/70" />
                <span className="font-josefin text-[10px] tracking-w3 text-sand uppercase">
                  {String(i + 1).padStart(2, "0")} · Veríssimo
                </span>
                <span className="block h-px w-8 bg-sand/70" />
              </div>

              {/* Headline */}
              <h2 className="font-outfit font-extralight text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-tight mb-6 max-w-4xl mx-auto text-balance">
                {s.headline}
              </h2>

              {/* Sub */}
              <p className="font-cormorant italic text-xl md:text-2xl lg:text-3xl text-cream/85 max-w-2xl mx-auto leading-snug">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Header label fixo no topo da seção */}
        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="block h-px w-8 bg-cream/30" />
          <span className="font-josefin text-[10px] tracking-w3 text-cream/45 uppercase">
            Galeria · Localização
          </span>
          <span className="block h-px w-8 bg-cream/30" />
        </motion.div>

        {/* Counter */}
        <div className="absolute bottom-24 right-8 md:right-12 hidden md:flex flex-col items-end gap-2 z-20">
          <span className="font-josefin text-[10px] tracking-w3 text-cream/40 uppercase">
            <span ref={counterRef}>01</span>
            <span className="text-cream/20 mx-1">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </span>
        </div>

        {/* Scroll indicator (somente nos primeiros slides) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="font-josefin text-[9px] tracking-w3 text-cream/35 uppercase">
            Continue a rolagem
          </span>
        </div>

        {/* Progress bar (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/8 z-20">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-sand to-sea origin-left"
            style={{ transform: "scaleX(0)", willChange: "transform" }}
          />
        </div>
      </div>
    </section>
  );
}
