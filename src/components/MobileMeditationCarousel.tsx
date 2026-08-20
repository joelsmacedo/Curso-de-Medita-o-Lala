import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

import { meditations, baseUrl, DEFAULT_FONT_FAMILY, DEFAULT_FONT_SIZE } from '../data/meditationsData';

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

  // Preload only adjacent images to save bandwidth and improve LCP
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % meditations.length;
    const prevIndex = activeIndex === 0 ? meditations.length - 1 : activeIndex - 1;
    
    [nextIndex, prevIndex].forEach(idx => {
      const img = new window.Image();
      img.src = baseUrl + meditations[idx].image;
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
        // Kill previous tweens to avoid conflicting state on fast swipes
        gsap.killTweensOf(oldImageRef.current);
        gsap.killTweensOf(currentImageRef.current);
        if (oldDescRef.current) gsap.killTweensOf(oldDescRef.current);
        if (currentDescRef.current) gsap.killTweensOf(currentDescRef.current);

        // Keep the old image solid underneath as fallback/base layer
        oldImageRef.current.src = oldImgUrl;
        gsap.set(oldImageRef.current, { opacity: 1, y: 0, scale: 1 });

        // Set the new image on top and prepare for smooth entrance
        currentImageRef.current.src = newImgUrl;

        if (oldDescRef.current && currentDescRef.current) {
          oldDescRef.current.textContent = meditations[prevActiveIndex.current].description;
          currentDescRef.current.textContent = meditations[activeIndex].description;
          
          const oldColor = (meditations[prevActiveIndex.current] as any).textColor || '#ffffff';
          const newColor = (meditations[activeIndex] as any).textColor || '#ffffff';
          const oldShadow = (meditations[prevActiveIndex.current] as any).textShadow !== undefined ? (meditations[prevActiveIndex.current] as any).textShadow : '0 4px 10px rgba(0,0,0,0.8)';
          const newShadow = (meditations[activeIndex] as any).textShadow !== undefined ? (meditations[activeIndex] as any).textShadow : '0 4px 10px rgba(0,0,0,0.8)';
          const oldFont = (meditations[prevActiveIndex.current] as any).fontFamily || DEFAULT_FONT_FAMILY;
          const newFont = (meditations[activeIndex] as any).fontFamily || DEFAULT_FONT_FAMILY;
          const oldWeight = (meditations[prevActiveIndex.current] as any).fontWeight || 'normal';
          const newWeight = (meditations[activeIndex] as any).fontWeight || 'normal';
          const oldSize = (meditations[prevActiveIndex.current] as any).fontSize || DEFAULT_FONT_SIZE;
          const newSize = (meditations[activeIndex] as any).fontSize || DEFAULT_FONT_SIZE;
          const oldOffsetY = parseFloat(meditations[prevActiveIndex.current]?.offsetY || '0');
          const targetOffsetY = parseFloat(meditations[activeIndex]?.offsetY || '0');

          // Transição de texto simultânea e suave, sem delay para evitar apagão do texto
          gsap.fromTo(oldDescRef.current, 
            { opacity: 1, y: oldOffsetY, color: oldColor, textShadow: oldShadow, fontFamily: oldFont, fontWeight: oldWeight, fontSize: oldSize },
            { opacity: 0, y: (direction > 0 ? -12 : 12) + oldOffsetY, duration: 0.35, ease: "power2.inOut" }
          );
          
          gsap.fromTo(currentDescRef.current,
            { opacity: 0, y: (direction > 0 ? 12 : -12) + targetOffsetY, color: newColor, textShadow: newShadow, fontFamily: newFont, fontWeight: newWeight, fontSize: newSize },
            { opacity: 1, y: targetOffsetY, duration: 0.4, ease: "power2.out" }
          );
        }

        // Animação da imagem base (antiga) sutilmente deslizando para trás
        gsap.to(oldImageRef.current, {
          y: direction > 0 ? -20 : 20,
          scale: 0.98,
          duration: 0.45,
          ease: "power2.out"
        });

        // Imagem atual (superior) entra suavemente por cima da antiga sem deixar fundo preto visível
        gsap.fromTo(currentImageRef.current,
          { opacity: 0, y: direction > 0 ? 25 : -25, scale: 1.02 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => {
              // Sincroniza a imagem de fundo assim que a transição termina
              if (oldImageRef.current) {
                oldImageRef.current.src = newImgUrl;
                gsap.set(oldImageRef.current, { opacity: 1, y: 0, scale: 1 });
              }
            }
          }
        );
      }

      prevActiveIndex.current = activeIndex;
      updatePositions(0, true);
    } else {
      updatePositions(0, false);
      // Initial image set
      const initialImgUrl = baseUrl + meditations[activeIndex].image;
      if (oldImageRef.current) {
        oldImageRef.current.src = initialImgUrl;
        gsap.set(oldImageRef.current, { opacity: 1, y: 0, scale: 1 });
      }
      if (currentImageRef.current) {
        currentImageRef.current.src = initialImgUrl;
        gsap.set(currentImageRef.current, { opacity: 1, y: 0, scale: 1 });
      }
      if (currentDescRef.current) {
        currentDescRef.current.textContent = meditations[activeIndex].description;
        const newColor = (meditations[activeIndex] as any).textColor || '#ffffff';
        const newShadow = (meditations[activeIndex] as any).textShadow !== undefined ? (meditations[activeIndex] as any).textShadow : '0 4px 10px rgba(0,0,0,0.8)';
        const newFont = (meditations[activeIndex] as any).fontFamily || DEFAULT_FONT_FAMILY;
        const newWeight = (meditations[activeIndex] as any).fontWeight || 'normal';
        const newSize = (meditations[activeIndex] as any).fontSize || DEFAULT_FONT_SIZE;
        const initOffsetY = parseFloat(meditations[activeIndex]?.offsetY || '0');
        gsap.set(currentDescRef.current, { opacity: 1, y: initOffsetY, color: newColor, textShadow: newShadow, fontFamily: newFont, fontWeight: newWeight, fontSize: newSize });
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
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-between pt-6 pb-10"
      aria-label="Carrossel de Meditações"
      role="region"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[80vw] h-[80vw] rounded-full bg-[#d4af37]/5 blur-[80px]" />
      </div>

      {/* Header Badge: Fora da área de captura de toque para não travar a rolagem da página */}
      <div className="w-full text-center px-4 z-20 pointer-events-none shrink-0">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest uppercase text-[#d4af37] mb-2">
          O que você vai aprender
        </div>
      </div>

      {/* Interactive Carousel Zone */}
      <div className="w-full flex-1 flex flex-col items-center justify-center z-20 relative">
        {/* Área de Swipe delimitada: começa abaixo do badge 'O que você vai aprender' e termina logo abaixo do texto na imagem (metade superior) */}
        <div
          className="absolute top-0 left-0 w-full h-[52%] z-30 touch-none select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />

        {/* Titles Area (Área do Carrossel de Texto) */}
        <div
          className="relative w-full h-[120px] flex justify-center items-center overflow-hidden"
          ref={containerRef}
        >
          {meditations.map((item, index) => (
            <div
              key={index}
              ref={el => titlesRef.current[index] = el}
              className="absolute w-full px-6 text-center select-none pointer-events-none"
              style={{
                willChange: 'transform, opacity, filter',
                transformOrigin: 'center center'
              }}
            >
              <h3
                className="font-display font-bold text-white max-w-[320px] mx-auto leading-[1.05]"
                style={{
                  fontSize: 'clamp(20px, 5.5vw, 28px)',
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
        <div className="relative w-full flex-1 min-h-[280px] max-h-[52vh] flex justify-center items-center mt-2 pointer-events-none">
          <div
            ref={imageContainerRef}
            className="relative w-[min(82vw,380px)] h-full max-h-[550px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.6)] border border-white/10"
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
      </div>

      {/* Progress Indicator */}
      <div className="w-full text-center mt-4 z-20 flex justify-center items-center gap-3 pointer-events-none shrink-0">
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
