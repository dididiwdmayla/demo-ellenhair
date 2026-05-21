"use client";

import { motion } from "motion/react";
import { awardsData } from "@/lib/awards-data";

export default function AwardsMarquee() {
  return (
    <section className="w-full bg-red-ellen py-8 overflow-hidden border-y-[0.5px] border-border-accent relative">
      <div className="flex whitespace-nowrap overflow-hidden" aria-label="Prêmios recebidos">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {/* Duplicar o conteúdo real para loop suave */}
          {[1, 2].map((group) => (
            <div key={group} className="flex shrink-0 items-center">
              <span className="font-mono font-medium text-xs md:text-[13px] tracking-[0.1em] text-[#FAFAF8] px-8 flex items-center gap-8">
                {awardsData.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-8">
                    {`${item.title.toUpperCase()} · ${item.association.toUpperCase()} ${item.year}`}
                    <span className="text-yellow-ellen text-[14px]">★</span>
                  </span>
                ))}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
