"use client";

import { useState } from "react";
import FadeUp from "./animated/FadeUp";
import { siteConfig } from "@/lib/config";
import { unitsData } from "@/lib/units-data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    unitId: unitsData[0].id
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const unit = unitsData.find((u) => u.id === formData.unitId);
    if (!unit) return;

    const text = `Olá! Meu nome é ${formData.name}. Gostaria de informações ou de agendar serviço de ${formData.service || 'salão'} na unidade ${unit.name}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/55${unit.whatsapp}?text=${encoded}`, "_blank");
  };

  return (
    <section id="contato" className="w-full bg-bg-primary py-32 px-6 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col mb-16">
            <div className="flex gap-1 mb-4 text-[12px]">
              <span className="text-red-ellen">★</span><span className="text-yellow-ellen">★</span><span className="text-red-ellen">★</span>
            </div>
            <div className="font-display font-semibold text-[48px] text-red-ellen leading-none mb-4">VI</div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold">
              06 / CONTATO
            </div>
          </div>
        </FadeUp>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Esquerda: Redes Sociais */}
        <div className="w-full md:w-1/3">
          <FadeUp>
            <h2 className="font-sans font-bold text-2xl uppercase tracking-wide text-text-primary mb-10">
              Acompanhe
            </h2>
            <ul className="space-y-6">
              <li>
                <a 
                  href={siteConfig.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans font-medium text-[18px] text-text-primary hover:text-gold transition-colors inline-flex items-center gap-4"
                >
                  <span className="font-mono text-[11px] text-text-secondary uppercase tracking-widest bg-bg-secondary px-2 py-1">IG</span>
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans font-medium text-[18px] text-text-primary hover:text-gold transition-colors inline-flex items-center gap-4"
                >
                  <span className="font-mono text-[11px] text-text-secondary uppercase tracking-widest bg-bg-secondary px-2 py-1">FB</span>
                  Facebook
                </a>
              </li>
            </ul>
          </FadeUp>
        </div>

        {/* Direita: Formulário simples (redireciona para WhatsApp) */}
        <div className="w-full md:w-2/3 max-w-lg">
          <FadeUp delay={0.2}>
            <h2 className="font-sans font-bold text-2xl uppercase tracking-wide text-text-primary mb-10">
              Contato rápido
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[11px] text-text-secondary uppercase tracking-widest">
                  Como podemos chamá-lo(a)?
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-b border-border-subtle py-3 text-text-primary font-sans focus:outline-none focus:border-red-ellen rounded-none"
                  placeholder="Seu nome"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="service" className="font-mono text-[11px] text-text-secondary uppercase tracking-widest">
                  Serviço de interesse
                </label>
                <input
                  type="text"
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="bg-transparent border-b border-border-subtle py-3 text-text-primary font-sans focus:outline-none focus:border-red-ellen rounded-none"
                  placeholder="Ex: Corte e Barba"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="unit" className="font-mono text-[11px] text-text-secondary uppercase tracking-widest">
                  Unidade preferida
                </label>
                <select
                  id="unit"
                  value={formData.unitId}
                  onChange={(e) => setFormData({ ...formData, unitId: e.target.value })}
                  className="bg-transparent border-b border-border-subtle py-3 text-text-primary font-sans focus:outline-none focus:border-red-ellen rounded-none appearance-none"
                >
                  {unitsData.map((unit) => (
                    <option key={unit.id} value={unit.id} className="bg-bg-primary">
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="mt-8 font-mono text-[13px] font-bold uppercase tracking-widest text-[#FAFAF8] bg-red-ellen hover:bg-text-primary py-5 px-8 transition-colors self-start shadow-md hover:scale-[1.02]"
              >
                Enviar pelo WhatsApp →
              </button>
            </form>
          </FadeUp>
        </div>

        </div>
      </div>
    </section>
  );
}
