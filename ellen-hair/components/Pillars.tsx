import FadeUp from "./animated/FadeUp";
import { content } from "@/lib/content";

export default function Pillars() {
  return (
    <section className="w-full bg-bg-primary py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col mb-12">
            <div className="flex gap-1 mb-4 text-[12px]">
              <span className="text-red-ellen">★</span><span className="text-yellow-ellen">★</span><span className="text-red-ellen">★</span>
            </div>
            <div className="font-display font-semibold text-[48px] text-red-ellen leading-none mb-4">II</div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold">
              02 / Filosofia
            </div>
          </div>
          <h2 className="font-display font-medium text-[clamp(2rem,3vw,2.5rem)] text-text-primary mb-20">
            Três coisas que nunca mudaram.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">
          {/* Decorative lines between columns for desktop */}
          <div className="hidden md:block absolute top-[10%] left-1/3 w-[1px] h-[80px] bg-red-ellen -translate-x-1/2" />
          <div className="hidden md:block absolute top-[10%] left-2/3 w-[1px] h-[80px] bg-red-ellen -translate-x-1/2" />

          {content.philosophy.map((pillar, index) => (
            <FadeUp key={pillar.title} delay={0.2 * (index + 1)}>
              <div className="flex flex-col items-start">
                <span className="font-display font-medium text-[clamp(4rem,8vw,6rem)] leading-none text-red-ellen mb-6 opacity-100">
                  0{index + 1}
                </span>
                <h3 className="font-sans font-semibold text-[22px] text-text-primary">
                  {pillar.title}
                </h3>
                <div className="w-[40px] h-[2px] bg-red-ellen mt-4 mb-5" />
                <p className="font-sans font-normal text-[16px] leading-[1.7] text-text-secondary">
                  {pillar.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
