import { useEffect, useRef, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// Helper para envolver o AutoScroll e tornar dinâmica a direção do scroll
function DynamicAutoScroll(userOptions: any) {
  const plugin = AutoScroll(userOptions);
  const originalInit = plugin.init;

  plugin.init = (emblaApiInstance: any, optionsHandler: any) => {
    const originalOptionsAtMedia = optionsHandler.optionsAtMedia;

    optionsHandler.optionsAtMedia = (allOptions: any) => {
      const resolvedOptions = originalOptionsAtMedia(allOptions);

      Object.defineProperty(resolvedOptions, "direction", {
        get() {
          return userOptions.direction;
        },
        set(value) {
          userOptions.direction = value;
        },
        configurable: true,
        enumerable: true,
      });

      return resolvedOptions;
    };

    originalInit(emblaApiInstance, optionsHandler);
    optionsHandler.optionsAtMedia = originalOptionsAtMedia;
  };

  return plugin;
}

const ebooks = [
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Astro%20F%C3%ADsica%20e%20Cosmologia.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Ebook%20FQ%20Ufologia.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Ebook%20F%C3%ADsica%20Qu%C3%A2ntica.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Ebook%20Guerra%20Nuclear.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Ebook%20Mensagens%20Espirituais%20Canalizadas%201.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Ebook%20Mensagens%20Espirituais%20Canalizadas%202.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Ebook%20Mensagens%20Espirituais%20Canalizadas%203.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Ebook%20Mensagens%20Espirituais%20Canalizadas%204.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/O%20Projeto%20Terra.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Relacionamentos.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Taichi%20Kung%20fu.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capa%20de%20Ebooks/Tao%20Te%20Ching.webp",
];

const cursos = [
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/ARTE%20DOS%20BENZIMENTOS.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/Alimenta%C3%A7%C3%A3o.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/Chi%20kung.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/Medita%C3%A7%C3%A3o%20Oriental.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/Mediunidade.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/Projeto%20Terra.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/Proje%C3%A7%C3%A3o%20Astral.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/Taichi%20com%20Espada.webp",
  "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Capas%20de%20Cursos/Taichi.webp",
];

export default function KnowledgeUniverseSection() {
  const ebooksPlugins = useMemo(
    () => [
      DynamicAutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        speed: 1,
        direction: "forward",
        startDelay: 0,
      }),
    ],
    []
  );

  const [ebooksRef, ebooksApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    ebooksPlugins
  );

  const cursosPlugins = useMemo(
    () => [
      DynamicAutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        speed: 1,
        direction: "forward",
        startDelay: 0,
      }),
    ],
    []
  );

  const [cursosRef, cursosApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    cursosPlugins
  );

  // Efeito coverflow 3D simples de escala baseado na proximidade com o centro da tela
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animationId: number;
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const updateScale = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(updateScale);
        return;
      }

      const centerX = window.innerWidth / 2;
      itemsRef.current.forEach((item) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        const maxDistance = window.innerWidth / 2;
        const normalized = Math.min(distance / maxDistance, 1);
        const scale = 1 - normalized * 0.15;
        item.style.transform = `scale(${scale})`;
      });

      animationId = requestAnimationFrame(updateScale);
    };

    updateScale();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Controla dinamicamente a direção do scroll ao arrastar (e-books)
  useEffect(() => {
    if (!ebooksApi) return;

    let previousProgress = ebooksApi.scrollProgress();

    const onScroll = () => {
      const currentProgress = ebooksApi.scrollProgress();
      const diff = currentProgress - previousProgress;

      let direction: "forward" | "backward" | null = null;
      if (diff !== 0) {
        const absDiff = Math.abs(diff);
        if (absDiff < 0.5) {
          direction = diff > 0 ? "forward" : "backward";
        } else {
          direction = diff > 0 ? "backward" : "forward";
        }
      }

      if (direction) {
        const autoScroll = (ebooksApi.plugins() as any).autoScroll;
        if (autoScroll) {
          autoScroll.options.direction = direction;
        }
      }

      previousProgress = currentProgress;
    };

    const onPointerUp = () => {
      const autoScroll = (ebooksApi.plugins() as any).autoScroll;
      if (autoScroll) {
        autoScroll.play(0);
      }
    };

    ebooksApi.on("scroll", onScroll);
    ebooksApi.on("pointerUp", onPointerUp);
    previousProgress = ebooksApi.scrollProgress();

    return () => {
      ebooksApi.off("scroll", onScroll);
      ebooksApi.off("pointerUp", onPointerUp);
    };
  }, [ebooksApi]);

  // Controla dinamicamente a direção do scroll ao arrastar (cursos)
  useEffect(() => {
    if (!cursosApi) return;

    let previousProgress = cursosApi.scrollProgress();

    const onScroll = () => {
      const currentProgress = cursosApi.scrollProgress();
      const diff = currentProgress - previousProgress;

      let direction: "forward" | "backward" | null = null;
      if (diff !== 0) {
        const absDiff = Math.abs(diff);
        if (absDiff < 0.5) {
          direction = diff > 0 ? "forward" : "backward";
        } else {
          direction = diff > 0 ? "backward" : "forward";
        }
      }

      if (direction) {
        const autoScroll = (cursosApi.plugins() as any).autoScroll;
        if (autoScroll) {
          autoScroll.options.direction = direction;
        }
      }

      previousProgress = currentProgress;
    };

    const onPointerUp = () => {
      const autoScroll = (cursosApi.plugins() as any).autoScroll;
      if (autoScroll) {
        autoScroll.play(0);
      }
    };

    cursosApi.on("scroll", onScroll);
    cursosApi.on("pointerUp", onPointerUp);
    previousProgress = cursosApi.scrollProgress();

    return () => {
      cursosApi.off("scroll", onScroll);
      cursosApi.off("pointerUp", onPointerUp);
    };
  }, [cursosApi]);

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    itemsRef.current[index] = el;
  };

  return (
    <section
      id="cursos"
      ref={sectionRef}
      className="relative w-full py-16 md:py-20 bg-spiritual-950 overflow-hidden sacred-geometry-bg"
    >
      {/* Efeitos de Fundo (Glows) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[1000px] rounded-full bg-gold-400/5 blur-[120px]" />
        <div className="absolute w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Partículas sutis de fundo */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40 animate-float-slow" />

      {/* Título Principal da Seção */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-cinzel text-warm-50 mb-4 drop-shadow-md">
          A Meditação é apenas{" "}
          <span className="text-gold-gradient inline-block">
            uma das portas
          </span>
        </h2>
        <h3 className="text-xl md:text-2xl font-cinzel text-warm-100 mb-6 drop-shadow-sm">
          Explore outros temas que podem fazer parte da sua jornada.
        </h3>
        <p className="text-base md:text-lg text-warm-200/90 max-w-5xl mx-auto font-light leading-[1.8]">
          O Professor Laércio Fonseca reuniu um vasto acervo de cursos e obras
          sobre espiritualidade, filosofia oriental, física quântica e
          desenvolvimento humano. Explore este universo de aprendizado.
        </p>
      </div>

      <div className="relative z-10 space-y-12">
        {/* Carrossel de Ebooks */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[80%] bg-gold-400/5 blur-[60px] pointer-events-none rounded-[100%]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
            <h3 className="text-2xl font-cinzel text-gold-300 mb-1 flex items-center justify-center gap-3">
              <span className="text-2xl drop-shadow-md">📚</span> Biblioteca
              Digital
            </h3>
            <p className="text-warm-200/70 text-sm md:text-base">
              Livros, pesquisas e publicações desenvolvidos ao longo de décadas
              de estudo.
            </p>
          </div>

          <div
            className="w-full relative py-12 -my-12"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent)",
            }}
          >
            <div>
              <div
                className="overflow-hidden cursor-grab active:cursor-grabbing py-12 -my-12"
                ref={ebooksRef}
              >
                <div className="flex backface-hidden items-center -mx-4">
                  {ebooks.map((src, i) => (
                    <div
                      className="flex-[0_0_232px] md:flex-[0_0_312px] min-w-0 px-4"
                      key={`ebook-${i}`}
                    >
                      <div
                        ref={(el) => setItemRef(el, i)}
                        className="w-full h-full transition-transform duration-100 ease-out"
                      >
                        <div className="relative aspect-[2/3] transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)] group overflow-hidden border border-transparent hover:border-gold-500/30">
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                          <img
                            src={src}
                            alt={`Capa de Ebook ${i + 1}`}
                            width="400"
                            height="600"
                            className="w-full h-full object-cover rounded-md"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor Visual */}
        <div className="flex justify-center items-center py-4 opacity-70">
          <div className="w-24 md:w-48 h-[1px] bg-gradient-to-r from-transparent to-gold-400/50" />
          <span className="mx-6 text-gold-300 text-lg md:text-xl drop-shadow-md">
            ✦
          </span>
          <div className="w-24 md:w-48 h-[1px] bg-gradient-to-l from-transparent to-gold-400/50" />
        </div>

        {/* Carrossel de Cursos */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[80%] bg-gold-400/5 blur-[60px] pointer-events-none rounded-[100%]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
            <h3 className="text-2xl font-cinzel text-gold-300 mb-1 flex items-center justify-center gap-3">
              <span className="text-2xl drop-shadow-md">🎓</span> Formação e
              Cursos
            </h3>
            <p className="text-warm-200/70 text-sm md:text-base">
              Cursos aprofundados para quem deseja expandir sua jornada de
              conhecimento.
            </p>
          </div>

          <div
            className="w-full relative py-12 -my-12"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent)",
            }}
          >
            <div>
              <div
                className="overflow-hidden cursor-grab active:cursor-grabbing py-12 -my-12"
                ref={cursosRef}
              >
                <div className="flex backface-hidden items-center -mx-4">
                  {cursos.map((src, i) => (
                    <div
                      className="flex-[0_0_340px] md:flex-[0_0_520px] min-w-0 px-4"
                      key={`curso-${i}`}
                    >
                      <div
                        ref={(el) => setItemRef(el, ebooks.length + i)}
                        className="w-full h-full transition-transform duration-100 ease-out"
                      >
                        <div className="relative aspect-video transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)] group overflow-hidden border border-transparent hover:border-gold-500/30">
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                          <img
                            src={src}
                            alt={`Capa de Curso ${i + 1}`}
                            width="640"
                            height="360"
                            className="w-full h-full object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa de Estatísticas de Autoridade */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14 mt-12 mb-8 text-center animate-float-slow">
        <div className="group">
          <div className="text-3xl md:text-4xl font-cinzel font-bold text-gold-gradient mb-1 drop-shadow-md">
            +50 anos
          </div>
          <div className="text-warm-100/80 text-[10px] md:text-xs tracking-[0.2em] uppercase font-light">
            de pesquisas e ensinamentos
          </div>
        </div>
        <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
        <div className="group">
          <div className="text-3xl md:text-4xl font-cinzel font-bold text-gold-gradient mb-1 drop-shadow-md">
            Milhares
          </div>
          <div className="text-warm-100/80 text-[10px] md:text-xs tracking-[0.2em] uppercase font-light">
            de alunos impactados
          </div>
        </div>
        <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
        <div className="group">
          <div className="text-3xl md:text-4xl font-cinzel font-bold text-gold-gradient mb-1 drop-shadow-md">
            Dezenas
          </div>
          <div className="text-warm-100/80 text-[10px] md:text-xs tracking-[0.2em] uppercase font-light">
            de cursos e publicações
          </div>
        </div>
      </div>

      {/* Citação Inspiradora Final */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center flex flex-col items-center">
        <span className="text-gold-400/80 text-3xl mb-8 drop-shadow-md">✦</span>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mb-16" />
        <p className="text-2xl md:text-4xl font-cinzel text-warm-100/95 leading-relaxed italic max-w-3xl drop-shadow-sm">
          "O conhecimento transforma.
          <br className="hidden md:block" /> A consciência ilumina.
          <br className="hidden md:block" /> A jornada continua."
        </p>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mt-16" />
      </div>
    </section>
  );
}
