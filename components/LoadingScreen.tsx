"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const words = ["Descobrir", "Viver", "Pertencer"];

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const DURATION = 2700;

  useEffect(() => {
    const wordInterval = setInterval(
      () => setWordIndex((i) => (i + 1) % words.length),
      900
    );
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    function tick(now: number) {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 400);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top-left label */}
      <span className="absolute top-8 left-8 font-josefin text-[10px] tracking-w3 text-muted uppercase">
        Veríssimo 299
      </span>

      {/* Center word */}
      <div className="flex flex-col items-center gap-6">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="font-cormorant italic text-5xl md:text-7xl text-cream"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>

        <span className="font-josefin text-[10px] tracking-w3 text-muted uppercase">
          Barra da Tijuca · Rio de Janeiro
        </span>
      </div>

      {/* Bottom-right counter */}
      <span className="absolute bottom-12 right-8 font-outfit font-extralight text-7xl md:text-8xl text-cream/20 tabular-nums">
        {String(count).padStart(3, "0")}
      </span>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-sand to-sea origin-left"
          style={{ scaleX: count / 100 }}
          transition={{ duration: 0 }}
        />
      </div>
    </motion.div>
  );
}
