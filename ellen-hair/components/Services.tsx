"use client";

import FadeUp from "./animated/FadeUp";
import { servicesData } from "@/lib/services-data";
import Image from "next/image";

export default function Services() {
  const handleServiceClick = (category: string) => {
    // Normalize category to match gallery keys
    let norm = category.toLowerCase();
    if (norm === "estética") norm = "estetica";
    if (norm === "produção") norm = "producao";

    window.dispatchEvent(new CustomEvent("setGalleryCategory", { detail: norm }));
    document.getElementById('galeria')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="servicos" className="w-full bg-bg-secondary py-32 px-6 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col mb-10">
            <div className="flex gap-1 mb-4 text-[12px]">
              <span className="text-red-ellen">★</span><span className="text-yellow-ellen">★</span><span className="text-red-ellen">★</span>
            </div>
            <div className="font-display font-semibold text-[48px] text-red-ellen leading-none mb-4">IV</div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold">
              04 / SERVIÇOS
            </div>
          </div>
          <h2 className="font-display font-medium text-[clamp(2.5rem,4vw,3.5rem)] text-text-primary leading-tight mb-2">
            O que fazemos, com cuidado.
          </h2>
          <p className="font-display italic text-[18px] text-text-secondary mb-20">
            valores sob consulta — atendimento personalizado
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {servicesData.map((category, index) => (
            <FadeUp key={category.category} delay={0.1 * index}>
              <div 
                onClick={() => handleServiceClick(category.category)}
                className="group relative flex flex-col h-full bg-bg-primary transition-all duration-500 shadow-[0_8px_32px_rgba(42,37,32,0.06)] hover:shadow-[0_16px_48px_rgba(42,37,32,0.12)] p-6 md:p-8 border border-border-subtle hover:scale-[1.02] border-t-[4px] border-t-red-ellen cursor-pointer"
              >
                {/* Decorative border bottom on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-ellen scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                
                <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-red-ellen text-[#FAFAF8] px-3 py-1.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest shadow-md">
                    {category.list.length} SERVIÇOS
                  </div>
                  <div className="absolute inset-0 z-10 pointer-events-none mix-blend-color backdrop-saturate-95 backdrop-contrast-95 bg-gold/5" />
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  />
                </div>

                <h3 className="font-sans font-semibold text-[26px] text-text-primary mb-6">
                  {category.title}
                </h3>

                <ul className="flex-grow flex flex-col mb-8 pointer-events-none">
                  {category.list.map((service, i) => (
                    <li key={i} className="flex justify-between items-center py-3.5 border-b-[0.5px] border-border-subtle last:border-0 group/item">
                      <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover/item:bg-gold transition-colors" />
                         <span className="font-sans text-[15px] text-text-primary">
                           {service.name}
                         </span>
                      </div>
                      <span className="font-mono text-[12px] text-text-secondary bg-bg-secondary px-2 py-1 rounded-sm">
                        {service.duration}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="inline-flex mt-auto w-full items-center justify-center bg-red-ellen group-hover:bg-text-primary py-4 font-mono text-[12px] font-bold uppercase tracking-widest text-[#FAFAF8] transition-colors border border-red-ellen pointer-events-none"
                >
                  VER GALERIA →
                </button>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
