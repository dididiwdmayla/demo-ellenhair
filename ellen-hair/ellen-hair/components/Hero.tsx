"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full pt-28 md:pt-32 pb-16 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-12 md:gap-8">
      {/* Esquerda: Conteúdo */}
      <div className="w-full md:w-[55%] flex flex-col justify-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-6 bg-red-ellen px-3 py-1.5 self-start shadow-md"
        >
          <span className="text-yellow-ellen text-[10px]">★</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#FAFAF8] font-bold">
            35 ANOS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-medium leading-[1.05] tracking-[0.005em] text-[clamp(2.8rem,6.5vw,5rem)] text-text-primary max-w-2xl"
        >
          Cuidamos da beleza <br className="hidden md:block" />
          de Maringá há <br className="hidden md:block" />
          <span className="border-b-[3px] border-red-ellen pb-1">três décadas</span> e meia.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans font-normal text-[18px] text-text-secondary mt-8 max-w-lg leading-relaxed"
        >
          Cabelo, barbearia, estética, unhas e produção.
          <br /> Três unidades no centro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12"
        >
          <a
            href="#unidades"
            className="group bg-red-ellen text-[#FAFAF8] px-10 py-5 font-mono text-[13px] font-semibold uppercase tracking-[0.15em] shadow-[0_4px_16px_rgba(200,16,46,0.25)] hover:shadow-[0_8px_24px_rgba(200,16,46,0.4)] hover:scale-[1.03] hover:bg-text-primary transition-all flex items-center justify-center gap-3"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="mt-[-1px]">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            AGENDAR PELO WHATSAPP
          </a>
          <a
            href="#servicos"
            className="font-mono text-[13px] font-semibold text-text-primary uppercase tracking-[0.14em] hover:text-red-ellen transition-colors flex items-center gap-2"
          >
            VER SERVIÇOS →
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden md:flex absolute bottom-8 left-6 items-center gap-3 font-mono text-[10px] text-text-secondary uppercase tracking-widest"
        >
          <span>↓</span> continuar
        </motion.div>
      </div>

      {/* Direita: Imagem */}
      <div className="w-full md:w-[45%] h-[60vh] md:h-[75vh] relative ml-auto flex justify-end">
        {/* Red separator line desktop */}
        <div className="hidden md:block absolute top-[10%] -left-8 w-[2px] h-[80%] bg-red-ellen z-20 opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[500px] h-full shadow-[0_8px_32px_rgba(42,37,32,0.06)] overflow-hidden"
        >
          {/* Tratamento warm sutil via CSS */}
          <div className="absolute inset-0 z-10 pointer-events-none mix-blend-color backdrop-saturate-95 backdrop-contrast-95" style={{ backgroundColor: 'rgba(184, 151, 90, 0.05)' }} />
          <Image
            src="/ambientehellen.png"
            alt="Ambiente Ellen Hair"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
