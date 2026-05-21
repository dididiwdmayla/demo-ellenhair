import { content } from "@/lib/content";
import MaskReveal from "./animated/MaskReveal";
import FadeUp from "./animated/FadeUp";
import Image from "next/image";

export default function Tradition() {
  return (
    <section id="tradicao" className="w-full bg-bg-secondary pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col mb-16">
            <div className="flex gap-1 mb-4 text-[12px]">
              <span className="text-red-ellen">★</span><span className="text-yellow-ellen">★</span><span className="text-red-ellen">★</span>
            </div>
            <div className="font-display font-semibold text-[48px] text-red-ellen leading-none mb-4">I</div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold">
              01 / Tradição
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          {/* Foto Direita (Na spec 40% esq, 60% direita) */}
          <div className="w-full md:w-[40%]">
            <div className="relative aspect-[3/4] w-full shadow-[0_8px_32px_rgba(42,37,32,0.06)]">
              <div className="absolute inset-0 z-10 pointer-events-none mix-blend-color backdrop-saturate-95 backdrop-contrast-95" style={{ backgroundColor: 'rgba(184, 151, 90, 0.05)' }} />
              <Image
                src="/historiaellenhair.png"
                alt="História Ellen Hair"
                fill
                className="object-cover"
              />
            </MaskReveal>
          </div>

          {/* Texto Esquerda */}
          <div className="w-full md:w-[60%] pt-8 border-l-[3px] border-red-ellen pl-6 md:pl-10 relative">
            <FadeUp delay={0.2}>
              <h2 className="font-display font-medium text-[clamp(2rem,4vw,3.5rem)] leading-tight text-text-primary mb-12 max-w-2xl">
                Trinta e cinco anos. Cinco salões, três cidades, uma filosofia.
              </h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="font-sans font-normal text-[16px] md:text-[17px] leading-[1.55] text-text-secondary max-w-prose space-y-8">
                <p>Tudo começou em 1988, quando a Sra. Ellen fazia as unhas das vizinhas em Paranavaí para complementar a renda.</p>
                
                <div className="w-[60px] h-[1px] bg-red-ellen/40" />
                
                <p>De lá pra cá, foram cursos, anos de salão, a coragem de abrir o próprio negócio em Foz do Iguaçu — onde chegou a comandar <span className="text-yellow-ellen font-semibold">cinco</span> unidades — e a mudança para Maringá no início dos anos 2000.</p>
                
                <div className="w-[60px] h-[1px] bg-red-ellen/40" />
                
                <p>Hoje, a Ellen Hair tem três salões no centro da cidade, uma equipe completa de profissionais, e a mesma filosofia de sempre: preço justo, atendimento próximo e cuidado de verdade com cada cliente.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="mt-14 pr-8 text-right md:-mr-8">
                <span className="font-signature text-[40px] text-text-primary">
                  — Sra. Ellen
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
