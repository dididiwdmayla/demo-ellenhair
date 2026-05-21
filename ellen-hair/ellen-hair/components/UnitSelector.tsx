"use client";

import { useState, useEffect } from "react";
import FadeUp from "./animated/FadeUp";
import { unitsData } from "@/lib/units-data";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";

export default function UnitSelector() {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
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

  return (
    <section id="unidades" className="w-full bg-bg-secondary pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col mb-10">
            <div className="flex gap-1 mb-4 text-[12px]">
              <span className="text-red-ellen">★</span><span className="text-yellow-ellen">★</span><span className="text-red-ellen">★</span>
            </div>
            <div className="font-display font-semibold text-[48px] text-red-ellen leading-none mb-4">V</div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold">
              05 / Unidades
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
                      href={`https://wa.me/55${unit.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full mt-6 text-center font-mono text-[12px] uppercase font-bold tracking-[0.15em] px-6 py-4 bg-red-ellen text-[#FAFAF8] hover:bg-text-primary transition-colors shadow-sm hover:scale-[1.02]"
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

        {/* Map placeholder (Using a styled iframe without API keys to prevent errors, pointing to general map location) */}
        <FadeUp delay={0.4}>
          <div className="w-full h-[400px] bg-bg-tertiary relative overflow-hidden border border-border-subtle filter grayscale contrast-125 sepia-[0.3]">
             {/* General Maps Embed pointing centrally to Maringá since we don't have Maps API key */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14644.0250669223!2d-51.9427!3d-23.4243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecdab4422e519b%3A0x897aeab67ad9ca5c!2sCentro%2C%20Maring%C3%A1%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1714589000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
