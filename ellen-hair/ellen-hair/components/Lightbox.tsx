"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { id: string; src: string; alt: string; label: string }[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
    if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
  }, [isOpen, onClose, currentIndex, images.length, onNavigate]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A2520]/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
            aria-label="Fechar galeria"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 md:left-12 text-white/50 hover:text-white transition-colors z-50 p-4"
            aria-label="Imagem anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            className="absolute right-4 md:right-12 text-white/50 hover:text-white transition-colors z-50 p-4"
            aria-label="Próxima imagem"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full max-w-[80vw] max-h-[80vh] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
               <Image
                 src={currentImage.src}
                 alt={currentImage.alt}
                 fill
                 sizes="(max-width: 768px) 100vw, 80vw"
                 className="object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                 referrerPolicy="no-referrer"
               />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center pointer-events-none">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FAFAF8] bg-black/40 px-4 py-2 backdrop-blur-md inline-block">
                  {currentImage.label}
                </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
