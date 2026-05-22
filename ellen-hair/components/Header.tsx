"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check if open
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
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "UNIDADES", href: "#unidades" },
    { name: "TRADIÇÃO", href: "#tradicao" },
    { name: "SERVIÇOS", href: "#servicos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b-[0.5px] border-border-subtle shadow-sm pt-1"
          : "bg-transparent border-transparent pt-1"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-[4px] bg-red-ellen z-[60]" />
      <div className="w-full max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="flex-shrink-0" aria-label="Ellen Hair Accueil">
            <Logo className="w-24 h-10 md:w-32 md:h-12" />
          </a>
          <span className="hidden md:inline-block bg-yellow-ellen text-text-primary font-mono text-[10px] uppercase tracking-widest px-2 py-1 font-bold">
            Desde 1988
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-text-primary hover:text-red-ellen transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {isOpenNow && (
            <div className="hidden lg:flex items-center gap-2 -mr-4 ml-2">
              <div className="relative flex items-center justify-center w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </div>
              <span className="font-mono text-[9px] text-green-600 uppercase tracking-[0.2em] font-bold">ATENDENDO AGORA</span>
              <div className="w-[1px] h-4 bg-border-subtle mx-2" />
            </div>
          )}

          <a
            href="#unidades"
            className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-text-primary px-6 py-3 border-[1.5px] border-red-ellen hover:bg-red-ellen hover:text-[#FAFAF8] transition-colors"
          >
            AGENDAR
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir Menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-bg-primary z-[60] flex flex-col justify-center px-8"
          >
            <button
              className="absolute top-6 right-6 p-2 text-text-primary"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar Menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <nav className="flex flex-col gap-8 text-center mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-lg uppercase tracking-widest text-text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#unidades"
                onClick={() => setMenuOpen(false)}
                className="font-mono text-lg uppercase tracking-widest text-red-ellen mt-8"
              >
                AGENDAR
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
