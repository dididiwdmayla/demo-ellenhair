"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import FadeUp from "./animated/FadeUp";
import { galleryData } from "@/lib/gallery-data";
import Lightbox from "./Lightbox";

type CategoryKey = keyof typeof galleryData;

const TABS: { label: string; value: CategoryKey }[] = [
  { label: "CABELO", value: "cabelo" },
  { label: "BARBEARIA", value: "barbearia" },
  { label: "UNHAS", value: "unhas" },
  { label: "ESTÉTICA", value: "estetica" },
  { label: "PRODUÇÃO", value: "producao" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("cabelo");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const handleSetCategory = (e: CustomEvent<CategoryKey>) => {
      if (TABS.some(t => t.value === e.detail)) {
        setActiveTab(e.detail);
      }
    };
    window.addEventListener("setGalleryCategory", handleSetCategory as EventListener);
    return () => window.removeEventListener("setGalleryCategory", handleSetCategory as EventListener);
  }, []);

  const currentGallery = galleryData[activeTab];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="galeria" className="w-full bg-[#F2EFE8] pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="font-display font-semibold text-[48px] text-red-ellen leading-none mb-4">IV</div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold">
                04 / Galeria
              </span>
              <span className="text-yellow-ellen text-[10px]">★</span>
            </div>
            
            <h2 className="font-sans font-bold uppercase tracking-[0.05em] text-[clamp(2.5rem,4vw,3.5rem)] text-text-primary mb-2">
              NOSSO TRABALHO
            </h2>
            <p className="font-display italic text-[clamp(1.5rem,2.5vw,2rem)] text-text-secondary">
              três décadas e meia de cuidado em imagens
            </p>
          </div>
        </FadeUp>

        {/* Tabs */}
        <FadeUp delay={0.1}>
          <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-6 mb-16 pb-2">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`relative flex-shrink-0 font-mono text-[13px] uppercase tracking-[0.18em] px-6 py-3 transition-colors duration-300 flex items-center gap-2
                    ${isActive ? "text-red-ellen" : "text-text-secondary hover:text-red-ellen"}
                  `}
                >
                  {tab.label}
                  {isActive && <span className="text-yellow-ellen text-[10px]">★</span>}
                  
                  {/* Underline animado */}
                  <div 
                    className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 ${isActive ? "bg-red-ellen" : "bg-transparent"}`}
                  />
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* Grid */}
        <FadeUp delay={0.2} className="min-h-[800px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentGallery.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => openLightbox(idx)}
                  role="button"
                  data-cursor-label="AMPLIAR"
                  className="group relative aspect-[4/5] w-full cursor-none overflow-hidden shadow-[0_8px_32px_rgba(42,37,32,0.10)] hover:shadow-[0_16px_48px_rgba(42,37,32,0.15)] transition-all duration-500 hover:scale-[1.02]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#2A2520]/80 via-[#2A2520]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
                    <div className="bg-[#2A2520]/70 backdrop-blur-[4px] px-3 py-2">
                       <span className="font-mono text-[11px] uppercase tracking-widest text-[#FAFAF8]">
                         {tabValueToLabel(activeTab)} · {img.label}
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </FadeUp>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={currentGallery}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}

function tabValueToLabel(value: CategoryKey) {
  return TABS.find(t => t.value === value)?.label || "";
}
