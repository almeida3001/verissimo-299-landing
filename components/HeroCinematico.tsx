"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const renders = [
  { src: "/images/fachada-frontal.png",  alt: "Fachada frontal — Veríssimo 299" },
  { src: "/images/vista-lateral.png",    alt: "Vista lateral — Veríssimo 299" },
  { src: "/images/entrada-terreo.png",   alt: "Jardim e entrada — Veríssimo 299" },
];

export default function HeroCinematico() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const sceneRef    = useRef<HTMLDivElement>(null);
  const imgRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const textRef     = useRef<HTMLDivElement>(null);
  const counterRef  = useRef<HTMLSpanElement>(null);
  const totalRef    = useRef<HTMLSpanElement>(null);
  const barRef      = useRef<HTMLDivElement>(null);
  const rafRef      = useRef<number>(0);
  const lastP       = useRef(-1);

  useEffect(() => {
    const N = renders.length;

    function update() {
      const section = sectionRef.current;
      const scene   = sceneRef.current;
      if (!section || !scene) { rafRef.current = requestAnimationFrame(update); return; }

      const rect      = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;
      const globalP   = Math.max(0, Math.min(1, -rect.top / totalScroll));

      if (Math.abs(globalP - lastP.current) < 0.0002) {
        rafRef.current = requestAnimationFrame(update);
        return;
      }
      lastP.current = globalP;

      const activeIndex = Math.min(N - 1, Math.floor(globalP * N));
      const slideP      = globalP * N - Math.floor(globalP * N);

      /* ── Image zoom scrub + crossfade ── */
      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        if (i === activeIndex) {
          el.style.opacity   = "1";
          el.style.transform = `scale(${1 + slideP * 0.25})`;
        } else if (i === activeIndex - 1) {
          el.style.opacity   = String(Math.max(0, 1 - slideP * 2.5));
          el.style.transform = `scale(1.25)`;
        } else {
          el.style.opacity   = "0";
          el.style.transform = `scale(1)`;
        }
      });

      scene.style.transform = "";

      /* ── Text parallax + fade ── */
      if (textRef.current) {
        const fadeOut = Math.min(1, slideP * 2.5);
        textRef.current.style.transform = `translateY(${slideP * -70}px)`;
        textRef.current.style.opacity   = String(1 - fadeOut);
      }

      /* ── Counter ── */
      if (counterRef.current) counterRef.current.textContent = String(activeIndex + 1).padStart(2, "0");
      if (totalRef.current)   totalRef.current.textContent   = String(N).padStart(2, "0");

      /* ── Progress bar ── */
      if (barRef.current) barRef.current.style.transform = `scaleX(${globalP})`;

      rafRef.current = requestAnimationFrame(update);
    }

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section ref={sectionRef} style={{ height: "400vh" }} aria-label="Hero Veríssimo 299">

      {/* ── Sticky wrapper ── */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Scene container (no transform — perspective is per-image) ── */}
        <div ref={sceneRef} className="absolute inset-0">

        {/* ── Images ── */}
        {renders.map((r, i) => (
          <div
            key={r.src}
            ref={(el) => { imgRefs.current[i] = el; }}
            className="absolute inset-0"
            style={{
              opacity: i === 0 ? 1 : 0,
              willChange: "transform, opacity",
              transformOrigin: "center center",
            }}
          >
            <Image
              src={r.src}
              alt={r.alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        ))}

        {/* ── Dark overlay ── */}
        <div className="absolute inset-0 bg-black/45" />

        {/* ── Vignette ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%)" }}
        />

        {/* ── Bottom gradient → next section ── */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

        {/* ── Grain texture ── */}
        <div
          className="absolute inset-0 opacity-[0.055] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── Text block ── */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <motion.span
              className="block h-px bg-sand"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-sand uppercase">
              Lançamento · 2026 · Barra da Tijuca
            </span>
            <motion.span
              className="block h-px bg-sand"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              className="font-outfit font-extralight text-6xl md:text-8xl lg:text-[10rem] text-cream leading-[0.88] tracking-tight"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Veríssimo
            </motion.h1>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden mb-10">
            <motion.p
              className="font-cormorant italic text-xl md:text-3xl lg:text-4xl text-cream/85 leading-snug max-w-2xl"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Boutique residencial a poucos metros da praia da Barra
            </motion.p>
          </div>

          {/* CTA */}
          <motion.a
            href="#interesse"
            className="group inline-flex items-center gap-3 border border-sand/60 text-cream font-josefin text-[11px] tracking-w3 uppercase px-10 py-4 hover:bg-sand hover:text-bg hover:border-sand transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
          >
            Conhecer o Veríssimo
            <ArrowDown size={12} className="group-hover:translate-y-1 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="font-josefin text-[9px] tracking-w3 text-cream/40 uppercase mb-1">scroll</span>
          <motion.div
            className="w-px h-10 bg-cream/30"
            animate={{ scaleY: [0, 1, 0], transformOrigin: "top" }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* ── Slide counter (bottom right) ── */}
        <motion.div
          className="absolute bottom-10 right-8 hidden md:flex flex-col items-end gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <span className="font-josefin text-[10px] tracking-w3 text-cream/40 uppercase">
            <span ref={counterRef}>01</span>
            <span className="text-cream/20 mx-1">/</span>
            <span ref={totalRef}>03</span>
          </span>
        </motion.div>

        {/* ── Progress bar (bottom, full width) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-sand to-sea origin-left"
            style={{ transform: "scaleX(0)", willChange: "transform" }}
          />
        </div>
        </div> {/* end inner scene */}
      </div>   {/* end sticky wrapper */}
    </section>
  );
}
