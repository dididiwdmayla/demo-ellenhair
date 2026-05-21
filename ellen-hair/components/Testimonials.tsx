"use client";

import FadeUp from "./animated/FadeUp";
import { content } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="w-full bg-bg-tertiary py-24 px-6 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((testi, i) => {
            // Highlight the year
            const authorFormatted = testi.author.replace(/(\d{4})/, '<span class="text-yellow-ellen font-bold text-[13px]">$1</span>');
            return (
            <FadeUp key={i} delay={0.1 * i}>
              <div className="bg-bg-primary p-8 shadow-sm flex flex-col justify-between h-full border border-border-subtle relative overflow-hidden">
                 {/* Top elegant line */}
                 <div className="absolute top-0 left-0 w-full h-[2px] bg-red-ellen/20" />
                <p className="font-sans font-medium text-[16px] leading-[1.6] text-text-primary mb-8 italic">
                  &quot;{testi.quote}&quot;
                </p>
                <div 
                  className="font-mono text-[11px] text-text-secondary uppercase tracking-widest"
                  dangerouslySetInnerHTML={{ __html: `— ${authorFormatted}` }}
                />
              </div>
            </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
