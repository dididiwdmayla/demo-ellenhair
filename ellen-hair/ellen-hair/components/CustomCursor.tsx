"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Scissors } from "lucide-react";

/**
 * Cursor customizado sutil (Scissors).
 * Aparece apenas em desktop e muda de estado durante o hover.
 */
export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 600, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Verifica se temos capability de hover fine (exclui touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [role='button'], input, select, textarea");
      
      if (interactiveEl) {
        setIsHovered(true);
        // Special label for unit cards
        if (interactiveEl.getAttribute("data-cursor-label")) {
          setHoverLabel(interactiveEl.getAttribute("data-cursor-label"));
        } else {
          setHoverLabel(null);
        }
      } else {
        setIsHovered(false);
        setHoverLabel(null);
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
      setHoverLabel(null);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex flex-col items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        className="flex items-center justify-center text-red-ellen"
        animate={{
          scale: isHovered ? 0.8 : 1,
          rotate: isHovered ? -15 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <Scissors size={20} strokeWidth={1.5} className="!block" />
      </motion.div>
      {hoverLabel && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 whitespace-nowrap font-mono text-[10px] text-red-ellen uppercase tracking-wider"
        >
          {hoverLabel}
        </motion.span>
      )}
    </motion.div>
  );
}
