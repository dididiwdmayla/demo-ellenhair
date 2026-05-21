import Image from "next/image";

/**
 * Componente que renderiza o Logotipo da Ellen Hair.
 * Aguarda a imagem 'logo.png' ser providenciada pelo usuário no diretório /public.
 */
export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Ellen Hair"
        fill
        className={`object-contain transition-all ${
          light ? "grayscale brightness-200 contrast-125" : ""
        }`}
        priority
      />
      {/* 
        Caso o arquivo '/logo.png' não exista no primeiro load,
        este div atua como um discreto fallback de marcação.
      */}
      <span className="sr-only">Ellen Hair</span>
    </div>
  );
}
