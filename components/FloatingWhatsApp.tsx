"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/5521991024201?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Ver%C3%ADssimo%20Residence"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com vendas no WhatsApp"
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-sea text-bg shadow-2xl shadow-black/40"
          style={{
            boxShadow:
              "0 12px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <span
            className="absolute inset-0 rounded-full bg-sea/40 -z-10"
            style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
          />
          <MessageCircle size={22} strokeWidth={1.8} className="md:w-6 md:h-6" />
          <span className="sr-only">Falar com vendas</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
