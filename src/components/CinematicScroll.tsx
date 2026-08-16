import { useEffect, useRef, type ReactNode } from "react";

interface CinematicScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: "title" | "image";
}

const CinematicScroll = ({ children, className = "", delay = 0, type = "title" }: CinematicScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      if (!contentRef.current) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Pontos de controle
      const startExitPos = vh * 0.4;  // Começa a sair ao passar dos 40% superiores da tela
      const startEnterPos = vh * 0.75; // Termina de entrar (100%) aos 75% da tela

      // 1. Fase de Entrada (Scrub)
      if (rect.top > startEnterPos) {
        const enterDistance = vh - startEnterPos;
        const entered = vh - rect.top;
        const progress = Math.max(0, Math.min(entered / enterDistance, 1));

        // Surge do fundo (scale 0.85 -> 1) e de baixo (y: 100 -> 0)
        const scale = 0.85 + (0.15 * progress);
        const y = 100 * (1 - progress);
        
        contentRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
        contentRef.current.style.opacity = `${progress}`;
        return;
      }

      // 2. Fase de Saída (Scrub)
      if (rect.top <= startExitPos) {
        const exitDistance = startExitPos + rect.height;
        const scrolled = startExitPos - rect.top;
        const progress = Math.max(0, Math.min(scrolled / exitDistance, 1));

        if (type === "title") {
          contentRef.current.style.transform = `translate3d(0, ${-60 * progress}px, 0) scale(${1 - 0.08 * progress})`;
          contentRef.current.style.opacity = `${1 - progress * 1.5}`;
        } else {
          contentRef.current.style.transform = `translate3d(0, ${-30 * progress}px, 0)`;
          contentRef.current.style.opacity = `${1 - progress * 1.2}`;
        }
        return;
      }

      // 3. Totalmente visível (entre startExitPos e startEnterPos)
      contentRef.current.style.transform = `translate3d(0, 0, 0) scale(1)`;
      contentRef.current.style.opacity = `1`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Inicia no estado correto no primeiro render
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [type]);

  return (
    <div ref={containerRef} className={className}>
      <div ref={contentRef} className="will-change-transform w-full h-full opacity-0" style={{ transition: 'opacity 0.1s' }}>
        {children}
      </div>
    </div>
  );
};

export default CinematicScroll;
