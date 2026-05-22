"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const roles = ["privilegiada", "exclusiva", "contemporânea", "atemporal"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroCinematico() {
  const [roleIndex, setRoleIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  /* iOS Safari fix — força play após mount */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-bg" aria-label="Hero Veríssimo">

      {/* ── Background — Vídeo fullscreen ── */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover animate-hero-zoom"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/25" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.045] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* ── Hero content centered ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.45, ease }}
        >
          <span className="block h-px w-10 bg-cream/60" />
          <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-cream uppercase">
            No coração da Barra da Tijuca
          </span>
          <span className="block h-px w-10 bg-cream/60" />
        </motion.div>

        {/* Nome com subline residence */}
        <div className="mb-8">
          <div className="overflow-hidden">
            <motion.h1
              className="font-outfit font-extralight text-6xl md:text-8xl lg:text-[10rem] text-cream leading-[0.92] tracking-tight text-balance"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease }}
              style={{ willChange: "transform" }}
            >
              Veríssimo
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-1 md:mt-2">
            <motion.p
              className="font-cormorant italic font-light text-sm md:text-lg lg:text-xl text-cream"
              style={{ letterSpacing: "0.45em" }}
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.55, ease }}
            >
              Residence
            </motion.p>
          </div>
        </div>

        {/* Role rotating line */}
        <motion.p
          className="font-outfit font-extralight text-xl md:text-2xl lg:text-3xl text-cream/90 mb-6 leading-snug max-w-3xl"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.9, ease }}
        >
          Uma boutique{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="font-cormorant italic font-bold text-cream inline-block"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>{" "}
          a poucos passos da praia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center mt-4"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.1, ease }}
        >
          <a
            href="#interesse"
            className="group inline-flex items-center gap-2.5 bg-sea text-bg font-josefin text-[11px] tracking-w2 uppercase px-8 py-4 rounded-full hover:bg-cream transition-all duration-500 hover:scale-[1.03]"
          >
            <span>Conhecer o Veríssimo</span>
            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-400" />
          </a>

          <a
            href="https://wa.me/5521991024201?text=Ol%C3%A1%2C%20quero%20receber%20a%20tabela%20de%20pre%C3%A7os%20do%20Ver%C3%ADssimo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 border border-cream/50 text-cream font-josefin text-[11px] tracking-w2 uppercase px-8 py-4 rounded-full hover:border-cream hover:bg-white/10 transition-all duration-500 hover:scale-[1.03]"
          >
            <span>Receber tabela</span>
            <span className="w-0 group-hover:w-3 h-px bg-cream transition-all duration-300" />
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="font-josefin text-[9px] tracking-w3 text-cream/40 uppercase">scroll</span>
        <div className="relative w-px h-12 bg-cream/15 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/3 bg-sea"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
