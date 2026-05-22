"use client";

import { useState, useEffect } from "react";
import FadeUp from "./animated/FadeUp";
import { unitsData } from "@/lib/units-data";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function UnitSelector() {
  const [selectedUnit, setSelectedUnit] = useState<string>(unitsData[0].id);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();
      if (day > 0 && hour >= 8 && hour < 19) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };
    checkOpen();
  },[]);

  // Find active unit data
  const activeUnitData = unitsData.find(u => u.id === selectedUnit) || unitsData[0];

  return (
    <section id="unidades" className="w-full bg-bg-secondary pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col mb-10">
            <div className="flex gap-1 mb-4 text-[12px]">
              <span className="text-red-ellen">★</span><span className="text-yellow-ellen">★</span><span className="text-red-ellen">★</span>
            </div>
            <div className="font-display font-semibold text-[48px] text-red-ellen leading-none mb-4">I</div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold">
              01 / VENHA NOS VISITAR
            </div>
          </div>
          <h2 className="font-sans font-bold uppercase tracking-[0.05em] text-[clamp(2.5rem,4vw,3rem)] text-red-ellen mb-6">
            VENHA NOS VISITAR
          </h2>
          <div className="w-[60px] h-[2px] bg-yellow-ellen mb-12" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {unitsData.map((unit, index) => {
            const isSelected = selectedUnit === unit.id;
            return (
              <FadeUp key={unit.id} delay={0.1 * index}>
                <div
                  onClick={() => setSelectedUnit(unit.id)}
                  className={`relative cursor-pointer flex flex-col p-8 md:p-10 transition-all duration-300 border-[1.5px] h-full ${
                    isSelected
                      ? "border-red-ellen bg-bg-tertiary shadow-[0_12px_40px_rgba(42,37,32,0.12)] scale-[1.02]"
                      : "border-border-subtle bg-bg-primary hover:border-red-ellen/50 hover:shadow-[0_12px_40px_rgba(42,37,32,0.06)] hover:scale-[1.01]"
                  }`}
                  data-cursor-label="Selecionar"
                >
                  {isSelected && (
                    <div className="absolute top-6 right-6 text-red-ellen text-lg">✦</div>
                  )}
                  
                  <h3 className="font-sans font-semibold text-[24px] text-text-primary mb-4">
                    {unit.name}
                  </h3>
                  <div className="flex gap-3 mb-6 items-start">
                    <MapPin size={18} strokeWidth={1.5} className="text-red-ellen flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-[15px] text-text-primary leading-snug">
                      {unit.address}
                    </p>
                  </div>
                  
                  <div className="mt-auto space-y-5">
                    <div className="flex items-center gap-3">
                      <Clock size={16} strokeWidth={1.5} className="text-red-ellen flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-mono text-[11px] uppercase text-text-secondary tracking-widest leading-none mb-1">
                          {unit.hours}
                        </span>
                        <span className={`font-mono text-[10px] uppercase font-bold tracking-wider ${isOpenNow ? 'text-green-600' : 'text-text-secondary'}`}>
                          {isOpenNow ? '• ABERTO AGORA' : 'FECHADO'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-center pt-2">
                       <MessageCircle size={16} strokeWidth={1.5} className="text-red-ellen flex-shrink-0" />
                       <span className="font-sans font-medium text-[15px] text-text-primary">{unit.whatsappDisplay}</span>
                    </div>

                    <div className="flex gap-3 items-center">
                       <Phone size={16} strokeWidth={1.5} className="text-red-ellen flex-shrink-0" />
                       <span className="font-mono text-[12px] text-text-secondary">TEL: {unit.phone}</span>
                    </div>
                    
                    <a
                      href={unit.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full mt-6 text-center font-mono text-[12px] uppercase font-bold tracking-[0.15em] px-6 py-4 bg-red-ellen text-[#FAFAF8] hover:bg-red-ellen/90 transition-colors duration-200 rounded-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedUnit(unit.id);
                      }}
                    >
                      Agendar Aqui →
                    </a>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Dynamic Map Area */}
        <FadeUp delay={0.4}>
          <div className="w-full flex-col flex mb-2">
             <span className="font-mono text-[11px] text-text-secondary uppercase tracking-widest">
               VENDO UNIDADE: <strong className="text-text-primary">{activeUnitData.name}</strong>
             </span>
          </div>
          <div className="w-full h-[400px] bg-bg-tertiary relative overflow-hidden border border-border-subtle filter grayscale contrast-125 sepia-[0.3]">
            <AnimatePresence mode="wait">
              <motion.iframe
                key={activeUnitData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={activeUnitData.mapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14644.0250669223!2d-51.9427!3d-23.4243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94[...]"}
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AnimatePresence>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
