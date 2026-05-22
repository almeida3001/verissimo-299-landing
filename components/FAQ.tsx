"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quantas unidades estão disponíveis?",
    a: "São 12 unidades no total: 4 apartamentos no primeiro andar, 4 no segundo, e 2 coberturas privativas em cada um dos dois níveis superiores. Por ser pré-lançamento, todas estão disponíveis para a folha de interesse.",
  },
  {
    q: "Quais as tipologias e metragens?",
    a: "Apartamentos de 2 quartos e coberturas privativas com varandas amplas. Metragens e plantas detalhadas estão disponíveis na tabela completa — envie um contato para receber.",
  },
  {
    q: "Quando é a entrega?",
    a: "Previsão de entrega em 2027. As condições de pré-lançamento aplicam-se às reservas feitas durante a folha de interesse, antes do lançamento oficial.",
  },
  {
    q: "Quem é o Studio R?",
    a: "Studio R Arquitetura & Interiores é responsável por alguns dos endereços mais desejados do litoral carioca. Linguagem contemporânea com referências da Barra da Tijuca, materiais que envelhecem bem.",
  },
  {
    q: "Posso visitar o stand de vendas?",
    a: "O stand físico será inaugurado no lançamento oficial. Enquanto isso, agendamos atendimento privado por videochamada ou visita presencial ao terreno. Solicite via WhatsApp.",
  },
  {
    q: "Aceitam FGTS / financiamento bancário?",
    a: "Sim. Trabalhamos com financiamento direto via Itaú e Bradesco, além de aceitar FGTS conforme condições do Sistema Financeiro de Habitação. Detalhes na tabela.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-bg text-cream py-20 md:py-28 px-6 md:px-16 overflow-hidden">

      <div className="relative max-w-3xl mx-auto">

        {/* Eyebrow + Headline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block h-px w-10 bg-sea" />
            <span className="font-josefin text-[10px] md:text-[11px] tracking-w3 text-sea uppercase">
              Perguntas frequentes
            </span>
          </div>
          <h2 className="font-outfit font-extralight text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05] tracking-tight text-balance">
            Tudo o que você precisa
            <br />
            <span className="font-cormorant italic text-cream">saber antes.</span>
          </h2>
        </motion.div>

        {/* Lista FAQ */}
        <div className="space-y-px bg-elevated/30">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                className="bg-bg"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-5 py-5 md:px-6 md:py-6 text-left group hover:bg-surface/40 transition-colors duration-300 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-outfit font-light text-base md:text-lg text-cream group-hover:text-sea transition-colors duration-300">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0"
                  >
                    <Plus size={18} className="text-sea" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 md:px-6 md:pb-6 font-josefin text-sm md:text-base text-cream/65 leading-relaxed max-w-2xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
