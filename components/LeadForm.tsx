"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function LeadForm() {
  const [form, setForm] = useState({ nome: "", telefone: "", interesse: "apartamento" });
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá, tenho interesse no Veríssimo 299.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nInteresse: ${form.interesse === "cobertura" ? "Cobertura" : "Apartamento 2 quartos"}`
    );
    window.open(`https://wa.me/5521991024201?text=${msg}`, "_blank");
    setEnviado(true);
  }

  return (
    <section className="bg-bg py-28 md:py-36 px-6 md:px-16 relative overflow-hidden" id="interesse">

      {/* Background sutil */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at 70% 50%, #D9CDB8 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <motion.span
              className="block h-px bg-sand"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <span className="font-josefin text-[10px] tracking-w3 text-sand uppercase">Registre seu interesse</span>
          </div>

          <h2 className="font-outfit font-extralight text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.92] tracking-tight mb-6">
            Conhecer
            <br />
            <span className="font-cormorant italic text-sand">o Veríssimo</span>
          </h2>

          <p className="font-josefin text-sm text-cream/55 leading-relaxed max-w-md mb-10">
            Receba condições exclusivas de pré-lançamento, tabela de preços e atendimento
            personalizado. Nosso time entra em contato em até 2 horas.
          </p>

          {/* Dados de contato direto */}
          <div className="space-y-3 border-t border-white/8 pt-8">
            <a
              href="https://wa.me/5521991024201"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-josefin text-sm text-cream/70 hover:text-sand transition-colors duration-300 group"
            >
              <span className="w-6 h-px bg-white/20 group-hover:bg-sand transition-colors duration-300" />
              WhatsApp: (21) 99102-4201
            </a>
            <a
              href="mailto:contato@absolutoengenharia.com.br"
              className="flex items-center gap-3 font-josefin text-sm text-cream/70 hover:text-sand transition-colors duration-300 group"
            >
              <span className="w-6 h-px bg-white/20 group-hover:bg-sand transition-colors duration-300" />
              contato@absolutoengenharia.com.br
            </a>
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {enviado ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-sand/30 bg-white/[0.03] p-10 text-center"
            >
              <p className="font-cormorant italic text-3xl text-sand mb-3">Obrigado!</p>
              <p className="font-josefin text-sm text-cream/55">
                Você será direcionado ao nosso WhatsApp. Retornamos em breve.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-white/8 bg-white/[0.02] p-8 md:p-10 space-y-6"
            >
              {/* Nome */}
              <div>
                <label className="font-josefin text-[10px] tracking-w2 text-muted uppercase block mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full bg-transparent border-b border-white/15 focus:border-sand outline-none py-3 font-josefin text-sm text-cream placeholder:text-cream/20 transition-colors duration-300"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="font-josefin text-[10px] tracking-w2 text-muted uppercase block mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="(21) 99999-9999"
                  className="w-full bg-transparent border-b border-white/15 focus:border-sand outline-none py-3 font-josefin text-sm text-cream placeholder:text-cream/20 transition-colors duration-300"
                />
              </div>

              {/* Interesse */}
              <div>
                <label className="font-josefin text-[10px] tracking-w2 text-muted uppercase block mb-3">
                  Interesse
                </label>
                <div className="flex gap-4">
                  {[
                    { value: "apartamento", label: "Apartamento 2Q" },
                    { value: "cobertura",   label: "Cobertura" },
                  ].map((op) => (
                    <button
                      key={op.value}
                      type="button"
                      onClick={() => setForm({ ...form, interesse: op.value })}
                      className={`flex-1 py-3 font-josefin text-[11px] tracking-w1 uppercase border transition-all duration-300 ${
                        form.interesse === op.value
                          ? "border-sand text-sand bg-sand/10"
                          : "border-white/15 text-cream/40 hover:border-white/30 hover:text-cream/70"
                      }`}
                    >
                      {op.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 bg-sand text-bg font-josefin text-[11px] tracking-w3 uppercase py-4 hover:bg-cream transition-all duration-300"
              >
                Quero conhecer o Veríssimo
                <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <p className="font-josefin text-[10px] text-cream/25 text-center leading-relaxed">
                Ao enviar, você concorda em receber contato via WhatsApp.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
