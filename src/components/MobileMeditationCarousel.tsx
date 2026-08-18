import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const baseUrl = "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/O%20QUE%20VC%20VAI%20APRENDER/";

const meditations = [
  { title: "12 Mudras Sagrados", image: "12 mudras sagradas.webp", description: "Gestos ancestrais das mãos que ajudam a harmonizar a energia, aquietar a mente e aprofundar a conexão com seu interior", textColor: "#3e1b09", textShadow: "none", fontFamily: "'Helvetica Rounded LT', 'Helvetica Rounded LT Std', sans-serif", fontWeight: "bold", fontSize: "19px" },
  { title: "Meditação das Mandalas Sagradas", image: "mandala_sagrada_meditacao.webp", description: "Utilize formas, símbolos e padrões geométricos como pontos de concentração, favorecendo a contemplação, a presença e a interiorização." },
  { title: "Meditação Raja Yoga", image: "Meditação Raja Yoga.webp", description: "Uma tradição de meditação associada ao Yoga clássico, voltada ao controle da mente, à concentração e ao desenvolvimento da consciência interior." },
  { title: "Meditação Dinâmica de Osho", image: "meditacao-dinamica-osho.webp", description: "Prática ativa que combina movimento, respiração, expressão emocional e períodos de silêncio, buscando liberar tensões e aprofundar a percepção de si." },
  { title: "Meditação com Cromoterapia Sagrada", image: "meditacao-cromoterapia-sagrada.webp", description: "Utiliza a contemplação e a visualização de cores dentro de uma abordagem espiritual, associando diferentes tonalidades a estados simbólicos de equilíbrio e consciência." },
  { title: "Meditação Zen Budista", image: "meditacao-zen-budista - ajustado.webp", description: "Prática contemplativa do Zen que enfatiza a atenção plena, a postura, a respiração e a observação da experiência presente sem apego.", textColor: "#000000", textShadow: "none", fontFamily: "'Helvetica Rounded LT', 'Helvetica Rounded LT Std', sans-serif", fontWeight: "bold", fontSize: "19px" },
  { title: "Meditação da Cura Interior", image: "meditacao_cura_interior.webp", description: "Prática de introspecção voltada à observação das emoções, memórias e padrões pessoais, buscando cultivar acolhimento, autoconhecimento e equilíbrio interior." },
  { title: "Invocação dos Seres Extraterrestres", image: "invocacao_seres_extraterrestres.webp", description: "Uma prática de caráter esotérico que utiliza meditação, visualização e intenção para estabelecer, segundo essa perspectiva espiritual, uma conexão com consciências extraterrestres." },
  { title: "Meditação Taoista", image: "meditacao-taoista.webp", description: "Conjunto de práticas contemplativas da tradição taoista que trabalha respiração, quietude, atenção e cultivo da energia vital, frequentemente associado ao conceito de Qi.", textColor: "#1e3d28", textShadow: "none" },
  { title: "Yoga e Meditação Indiana", image: "yoga-meditacao-indiana.webp", description: "Integra práticas tradicionais indianas de postura, respiração, concentração e meditação, buscando desenvolver equilíbrio entre corpo, mente e consciência." },
  { title: "Meditação Bhaktivedanta", image: "meditacao-bhaktivedanta.webp", description: "Prática inspirada nos ensinamentos de Bhaktivedanta Swami Prabhupada e na tradição Gaudiya Vaishnava, com ênfase na devoção, contemplação e repetição de nomes sagrados." },
  { title: "Meditação Hare Krishna", image: "hare_krishna_meditacao.webp", description: "Prática devocional baseada principalmente no canto e na repetição do mantra Hare Krishna, utilizado como instrumento de concentração e devoção espiritual." },
  { title: "Meditação dos Mantras Sagrados", image: "meditacao_mantras_sagrados.webp", description: "Utiliza a repetição consciente de sons, palavras ou fórmulas tradicionais como objeto de concentração, promovendo ritmo respiratório, foco e interiorização." },
  { title: "Meditação Budista dos 7 Chakras", image: "meditacao-budista-7-chakras.webp", description: "Uma abordagem contemporânea que combina elementos de meditação budista com o sistema dos sete chakras, utilizando concentração e visualização para trabalhar diferentes dimensões simbólicas da experiência interior." },
  { title: "Meditação com Cristais", image: "meditacao_com_cristais.webp", description: "Prática esotérica que utiliza cristais como objetos de contemplação, concentração ou ritual, atribuindo-lhes significados simbólicos relacionados à energia e ao equilíbrio." },
  { title: "Meditação e Kriya Yoga", image: "meditacao-kriya-yoga-landing.webp", description: "Prática associada a tradições de Yoga que enfatizam técnicas de respiração, concentração e meditação como caminhos para aprofundar a disciplina interior e a consciência." },
  { title: "Meditação New Age", image: "meditacao-new-age.webp", description: "Abordagem espiritual contemporânea que reúne técnicas e conceitos de diferentes tradições, frequentemente envolvendo visualização, energia, consciência, espiritualidade e autoconhecimento." },
  { title: "Meditação com Anjos Protetores", image: "meditacao_anjos_protetores.webp", description: "Prática de caráter devocional e esotérico baseada na visualização, oração ou contemplação de seres angelicais como símbolos de proteção, orientação e amparo espiritual." },
  { title: "Meditação para a Paz Planetária", image: "meditacao_paz_planetaria.webp", description: "Prática contemplativa coletiva ou individual que utiliza visualizações, intenções e orações direcionadas simbolicamente à paz, à harmonia e à fraternidade entre os povos." },
  { title: "Alimentação para a Prática", image: "alimentacao_para_a_pratica.webp", description: "Reflexão sobre hábitos alimentares e escolhas nutricionais que podem favorecer disposição, conforto digestivo e bem-estar durante práticas de meditação e Yoga." },
  { title: "Chi Kung e Meditação Taoista", image: "chi-kung-meditacao-taoista.webp", description: "Integra exercícios tradicionais de movimento, respiração e atenção do Qi Gong com práticas contemplativas taoistas, buscando cultivar presença, equilíbrio corporal e serenidade." },
  { title: "Meditação Budista Vipassana", image: "vipassana_meditacao.webp", description: "Prática contemplativa tradicional que desenvolve a atenção cuidadosa sobre corpo, sensações, estados mentais e fenômenos da experiência, cultivando clareza e compreensão." },
  { title: "Meditação Tântrica Kundalini", image: "meditação kundalini.webp", description: "Prática inspirada em tradições tântricas e de Yoga que trabalha respiração, concentração, mantras e visualizações relacionadas ao conceito de Kundalini e aos centros energéticos." }
];

export default function MobileMeditationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const oldImageRef = useRef<HTMLImageElement>(null);
  const currentImageRef = useRef<HTMLImageElement>(null);
  const oldDescRef = useRef<HTMLParagraphElement>(null);
  const currentDescRef = useRef<HTMLParagraphElement>(null);

  // Drag state
  const dragStartY = useRef(0);
  const isDragging = useRef(false);
  const currentY = useRef(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const ITEM_DISTANCE = 50; // Distance between items in px
  const MAX_DRAG = ITEM_DISTANCE * 1.5;

  // Track the previously active index for animations
  const prevActiveIndex = useRef(activeIndex);

  // Animation constants
  const ACTIVE_SCALE = 1;
  const INACTIVE_SCALE = 0.82;
  const ACTIVE_OPACITY = 1;
  const INACTIVE_OPACITY = 0.3;

  // Initialize and update positions
  const updatePositions = useCallback((dragOffset: number = 0, animate: boolean = false) => {
    titlesRef.current.forEach((el, index) => {
      if (!el) return;

      const distFromActive = index - activeIndex;
      // Base positions
      const baseY = distFromActive * ITEM_DISTANCE;

      // Calculate target Y including drag offset
      let targetY = baseY + dragOffset;

      // We want to calculate how far this item is from the center (0) right now
      const distanceFromCenter = Math.abs(targetY);

      // Convert distance to a normalized value (0 at center, 1 at ITEM_DISTANCE)
      const normalizedDist = Math.min(distanceFromCenter / ITEM_DISTANCE, 2);

      // Interpolate scale and opacity
      const scale = gsap.utils.interpolate(ACTIVE_SCALE, INACTIVE_SCALE, Math.min(normalizedDist, 1));
      let opacity = gsap.utils.interpolate(ACTIVE_OPACITY, INACTIVE_OPACITY, Math.min(normalizedDist, 1));

      // Fade out completely if too far
      if (normalizedDist > 1.2) {
        opacity = gsap.utils.interpolate(INACTIVE_OPACITY, 0, Math.min((normalizedDist - 1.2) / 0.8, 1));
      }

      const blur = normalizedDist * 1.5; // subtle blur

      if (animate) {
        gsap.to(el, {
          y: targetY,
          scale: scale,
          opacity: opacity,
          filter: `blur(${blur}px)`,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true
        });
      } else {
        gsap.set(el, {
          y: targetY,
          scale: scale,
          opacity: opacity,
          filter: `blur(${blur}px)`,
          overwrite: true
        });
      }
    });
  }, [activeIndex]);

  // Handle Image Animations
  useEffect(() => {
    if (prevActiveIndex.current !== activeIndex) {
      // Direction of change: 1 means scrolling down the list (Next), -1 means scrolling up (Prev)
      const direction = activeIndex > prevActiveIndex.current ? 1 : -1;

      const oldImgUrl = baseUrl + meditations[prevActiveIndex.current].image;
      const newImgUrl = baseUrl + meditations[activeIndex].image;

      if (oldImageRef.current && currentImageRef.current) {
        oldImageRef.current.src = oldImgUrl;
        currentImageRef.current.src = newImgUrl;

        if (oldDescRef.current && currentDescRef.current) {
          oldDescRef.current.textContent = meditations[prevActiveIndex.current].description;
          currentDescRef.current.textContent = meditations[activeIndex].description;
          
          const oldColor = (meditations[prevActiveIndex.current] as any).textColor || '#ffffff';
          const newColor = (meditations[activeIndex] as any).textColor || '#ffffff';
          const oldShadow = (meditations[prevActiveIndex.current] as any).textShadow !== undefined ? (meditations[prevActiveIndex.current] as any).textShadow : '0 4px 10px rgba(0,0,0,0.8)';
          const newShadow = (meditations[activeIndex] as any).textShadow !== undefined ? (meditations[activeIndex] as any).textShadow : '0 4px 10px rgba(0,0,0,0.8)';
          const oldFont = (meditations[prevActiveIndex.current] as any).fontFamily || "'Helvetica Rounded LT', 'Helvetica Rounded LT Std', sans-serif";
          const newFont = (meditations[activeIndex] as any).fontFamily || "'Helvetica Rounded LT', 'Helvetica Rounded LT Std', sans-serif";
          const oldWeight = (meditations[prevActiveIndex.current] as any).fontWeight || 'normal'; // normal by default
          const newWeight = (meditations[activeIndex] as any).fontWeight || 'normal';
          const oldSize = (meditations[prevActiveIndex.current] as any).fontSize || '15px';
          const newSize = (meditations[activeIndex] as any).fontSize || '15px';

          gsap.fromTo(oldDescRef.current, 
            { opacity: 1, y: 0, color: oldColor, textShadow: oldShadow, fontFamily: oldFont, fontWeight: oldWeight, fontSize: oldSize },
            { opacity: 0, y: direction > 0 ? -15 : 15, duration: 0.4, ease: "power2.inOut" }
          );
          
          gsap.fromTo(currentDescRef.current,
            { opacity: 0, y: direction > 0 ? 15 : -15, color: newColor, textShadow: newShadow, fontFamily: newFont, fontWeight: newWeight, fontSize: newSize },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.15 }
          );
        }

        gsap.fromTo(oldImageRef.current,
          { opacity: 1, y: 0, scale: 1 },
          {
            opacity: 0,
            y: direction > 0 ? -40 : 40,
            scale: 0.95,
            duration: 0.5,
            ease: "power2.inOut"
          }
        );

        // Cinematic Entry for new image
        gsap.fromTo(currentImageRef.current,
          { opacity: 0, y: direction > 0 ? 50 : -50, scale: 1.05 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: 0.1
          }
        );
      }

      prevActiveIndex.current = activeIndex;
      updatePositions(0, true);
    } else {
      updatePositions(0, false);
      // Initial image set
      if (currentImageRef.current && currentImageRef.current.src === "") {
        currentImageRef.current.src = baseUrl + meditations[activeIndex].image;
        gsap.set(currentImageRef.current, { opacity: 1, y: 0, scale: 1 });
        if (currentDescRef.current) {
          currentDescRef.current.textContent = meditations[activeIndex].description;
          const newColor = (meditations[activeIndex] as any).textColor || '#ffffff';
          const newShadow = (meditations[activeIndex] as any).textShadow !== undefined ? (meditations[activeIndex] as any).textShadow : '0 4px 10px rgba(0,0,0,0.8)';
          const newFont = (meditations[activeIndex] as any).fontFamily || "'Helvetica Rounded LT', 'Helvetica Rounded LT Std', sans-serif";
          const newWeight = (meditations[activeIndex] as any).fontWeight || 'normal';
          const newSize = (meditations[activeIndex] as any).fontSize || '15px';
          gsap.set(currentDescRef.current, { opacity: 1, y: 0, color: newColor, textShadow: newShadow, fontFamily: newFont, fontWeight: newWeight, fontSize: newSize });
        }
      }
    }
  }, [activeIndex, updatePositions]);

  // Touch Events
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartY.current = e.clientY;
    currentY.current = 0;

    // Stop any ongoing tweens on titles
    titlesRef.current.forEach(el => el && gsap.killTweensOf(el));
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    // Use preventDefault ONLY when scrolling vertically inside the carousel to not break the page scroll
    // But since pointer events in React on a touch-none element don't trigger scroll, we are fine.

    const deltaY = e.clientY - dragStartY.current;

    // Add resistance at the ends
    let offset = deltaY;
    if (activeIndex === 0 && offset > 0) {
      offset *= 0.3; // Resistance at top
    } else if (activeIndex === meditations.length - 1 && offset < 0) {
      offset *= 0.3; // Resistance at bottom
    }

    currentY.current = Math.max(-MAX_DRAG, Math.min(MAX_DRAG, offset));
    updatePositions(currentY.current, false);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const threshold = ITEM_DISTANCE * 0.35; // 35% distance threshold to snap to next

    let newIndex = activeIndex;

    if (currentY.current < -threshold && activeIndex < meditations.length - 1) {
      newIndex = activeIndex + 1;
    } else if (currentY.current > threshold && activeIndex > 0) {
      newIndex = activeIndex - 1;
    }

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      // The useEffect will handle the animation to the new positions
    } else {
      // Snap back
      updatePositions(0, true);
    }

    currentY.current = 0;
  };

  return (
    <section
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-[#0a0a0a] touch-none flex flex-col items-center justify-center pt-8 pb-12"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
      aria-label="Carrossel de Meditações"
      role="region"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[80vw] h-[80vw] rounded-full bg-[#d4af37]/5 blur-[80px]" />
      </div>

      <div className="w-full text-center mb-auto mt-4 px-4 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest uppercase text-[#d4af37] mb-4">
          O que você vai aprender
        </div>
      </div>

      {/* Titles Area (ÁREA 1, 2, 3) */}
      <div
        className="relative w-full h-[140px] flex justify-center items-center z-20"
        ref={containerRef}
      >
        {meditations.map((item, index) => (
          <div
            key={index}
            ref={el => titlesRef.current[index] = el}
            className="absolute w-full px-6 text-center select-none"
            style={{
              willChange: 'transform, opacity, filter',
              transformOrigin: 'center center'
            }}
          >
            <h3
              className="font-display font-bold text-white max-w-[320px] mx-auto leading-[1.05]"
              style={{
                fontSize: 'clamp(22px, 6vw, 30px)',
                textWrap: 'balance',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)'
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Image Area */}
      <div className="relative w-full flex-1 min-h-[300px] max-h-[55vh] flex justify-center items-center mt-4 z-10 pointer-events-none">
        <div
          ref={imageContainerRef}
          className="relative w-[min(82vw,380px)] h-full max-h-[550px] rounded-[2rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.6)] border border-white/10"
        >
          {/* Old Image for Crossfade */}
          <img
            ref={oldImageRef}
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt=""
            loading="lazy"
            decoding="async"
          />
          {/* Current/New Image */}
          <img
            ref={currentImageRef}
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt={meditations[activeIndex].title}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            decoding="async"
          />

          {/* Dynamic Contrast Text Overlay */}
          <div className="absolute top-0 left-0 right-0 p-5 z-20 pointer-events-none flex items-start justify-center">
            <p ref={oldDescRef} className="absolute inset-x-5 top-5 text-white/90 leading-tight text-center opacity-0"></p>
            <p ref={currentDescRef} className="absolute inset-x-5 top-5 text-white/90 leading-tight text-center"></p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="w-full text-center mt-6 z-20 flex justify-center items-center gap-3 pointer-events-none">
        <span className="text-[#d4af37] font-display text-sm tracking-widest">
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        <div className="w-16 h-[1px] bg-white/20">
          <div
            className="h-full bg-[#d4af37] transition-all duration-300"
            style={{ width: `${((activeIndex + 1) / meditations.length) * 100}%` }}
          />
        </div>
        <span className="text-white/40 font-display text-sm tracking-widest">
          {String(meditations.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
