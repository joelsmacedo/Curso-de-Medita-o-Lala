import { useEffect, useRef, useState } from "react";
import { Sparkles, Play } from "lucide-react";
import VideoModal from "./VideoModal";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Referências para os elementos que vão animar na entrada (e no scroll)
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Efeito de Entrada (Inverso ao de saída que diminui/sobe/esmaece)
  // O conteúdo começa recuado, para baixo e transparente, e entra "crescendo e subindo" para a posição final.
  // A imagem entra com um zoom reverso.
  useEffect(() => {
    // Definimos o estado inicial via JS para garantir antes de iniciar a transição
    if (contentRef.current) {
      contentRef.current.style.transition = "none";
      contentRef.current.style.transform = "translate3d(0, 40px, 0) scale(0.92)";
      contentRef.current.style.opacity = "0";
    }
    if (backgroundRef.current) {
      backgroundRef.current.style.transition = "none";
      backgroundRef.current.style.transform = "scale(1.1)";
      backgroundRef.current.style.opacity = "0";
    }

    // Usamos um pequeno delay (requestAnimationFrame duplo ou setTimeout) para ativar a transição
    const timer = setTimeout(() => {
      // Ativamos as transições de entrada
      if (contentRef.current) {
        contentRef.current.style.transition = "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease-out";
        contentRef.current.style.transform = "translate3d(0, 0, 0) scale(1)";
        contentRef.current.style.opacity = "1";
      }
      if (backgroundRef.current) {
        backgroundRef.current.style.transition = "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease-out";
        backgroundRef.current.style.transform = "translate3d(0, 0, 0) scale(1)";
        backgroundRef.current.style.opacity = "1";
      }
    }, 50);

    // Complemento: Adicionamos um paralaxe suave no scroll 
    // (já que a entrada já ocorreu via tempo, o scroll agora faz apenas paralaxe, ou um efeito de saída diferente)
    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (scrollY > vh * 1.2) return;

      const progress = Math.min(scrollY / vh, 1);

      // Como o efeito de Entrada foi feito no mount, aqui aplicamos paralaxe suave para a imagem e o texto
      if (contentRef.current) {
        // Move levemente o texto para baixo para criar profundidade
        contentRef.current.style.transform = `translate3d(0, ${15 * progress}px, 0)`;
      }

      if (backgroundRef.current) {
        // Move o background ainda mais devagar
        backgroundRef.current.style.transform = `translate3d(0, ${-25 * progress}px, 0)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative min-h-[85dvh] flex items-start md:items-center justify-center pt-32 md:pt-20 px-6 pb-12 md:pb-0 overflow-hidden">
        {/* Elemento de fundo que recebe a animação de entrada (zoom out) e paralaxe separada */}
        <div className="absolute inset-0 z-0">
          <div ref={backgroundRef} className="w-full h-full will-change-transform">
            <img
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2000&auto=format&fit=crop"
              alt="Meditação"
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]"></div>
        </div>

        {/* Conteúdo central que entra vindo de baixo, expandindo suavemente, separado do fundo */}
        <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto text-center will-change-transform">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-[#d4af37] mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Jornada Meditativa Completa</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              Desperte sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-white/50">
                Consciência
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Uma jornada profunda por 23 práticas sagradas. Da Meditação Dinâmica do Osho
              à Meditação Zen Budista. Transforme sua mente, corpo e espírito no seu próprio ritmo.
            </p>

            <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
              <a
                href="https://pay.hotmart.com/N69139177Q?off=ztjix57g&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=meditacao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-[#d4af37] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] text-center"
              >
                Iniciar Minha Jornada
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative w-full sm:w-[200px] aspect-video rounded-xl overflow-hidden border border-white/20 hover:border-[#d4af37]/50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <img
                  src="https://img.youtube.com/vi/yG1_uQO_4lI/maxresdefault.jpg"
                  alt="Garantia de 7 dias"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-black fill-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-xs font-semibold text-white drop-shadow-md">Ver garantia</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="yG1_uQO_4lI"
      />
    </>
  );
};

export default HeroSection;
