import Logo from "./Logo";
import { siteConfig } from "@/lib/config";
import { unitsData } from "@/lib/units-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#2A2520] text-[#FAFAF8] pt-24 pb-12 px-6 border-t-[6px] border-red-ellen">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo (escura/clara versão) */}
        <Logo className="w-40 h-16 mb-8" light={true} />
        
        <p className="font-sans font-normal text-[16px] text-[#FAFAF8]/80 text-center mb-16 max-w-sm">
          {siteConfig.tagline}
        </p>

        {/* Decorative divider */}
        <div className="w-[80px] h-[2px] bg-red-ellen mb-20 opacity-80" />

        {/* Unidades List */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-24">
          {unitsData.map((unit) => (
            <div key={unit.id} className="flex flex-col">
              <h4 className="font-sans font-bold text-[18px] mb-3 text-[#FAFAF8]">
                {unit.name}
              </h4>
              <p className="font-sans text-[14px] text-[#FAFAF8]/70 mb-4 min-h-[44px]">
                {unit.address}
              </p>
              <a 
                href={`https://wa.me/55${unit.whatsapp}`}
                className="font-mono text-[12px] text-[#FAFAF8] hover:text-red-ellen transition-colors tracking-widest uppercase"
              >
                WA: {unit.whatsappDisplay}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-[#FAFAF8]/10 flex flex-col items-center justify-center">
          <p className="font-mono text-[10px] text-[#FAFAF8]/40 tracking-[0.2em] uppercase font-medium">
            © {currentYear} <span className="text-yellow-ellen font-bold">ELLEN HAIR</span> · MARINGÁ · PARANÁ · BRASIL
          </p>
        </div>

      </div>
    </footer>
  );
}
