"use client";

import { motion } from 'motion/react';

interface VideoCTAButtonProps {
  isVisible: boolean;
}

export default function VideoCTAButton({ isVisible }: VideoCTAButtonProps) {
  if (!isVisible) return null;

  return (
    <motion.a
      href="https://pay.hotmart.com/N69139177Q?off=ztjix57g&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=meditacao"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 no-underline"
    >
      <div className="relative group">
        {/* Glow externo dourado */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/40 to-[#d4af37]/0 rounded-[14px] blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Brilho dramático superior */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-[#d4af37]/30 to-transparent rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Botão principal */}
        <div 
          className="relative px-8 py-5 rounded-[10px] cursor-pointer transition-all duration-300 group-hover:scale-[1.02]"
          style={{
            background: `
              linear-gradient(145deg, 
                #1a1a1a 0%, 
                #0d0d0d 25%, 
                #151515 50%, 
                #0a0a0a 75%, 
                #121212 100%
              )
            `,
            border: '3px solid',
            borderImage: 'linear-gradient(135deg, #b8942e, #d4af37, #f4d03f, #d4af37, #b8942e) 1',
            boxShadow: `
              0 4px 20px rgba(0, 0, 0, 0.5),
              0 0 30px rgba(212, 175, 55, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.05),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3)
            `
          }}
        >
          {/* Textura de metal escovado sutil */}
          <div 
            className="absolute inset-0 rounded-[7px] opacity-10 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.03) 2px,
                rgba(255, 255, 255, 0.03) 4px
              )`
            }}
          />
          
          {/* Conteúdo */}
          <div className="relative text-center">
            {/* Texto principal */}
            <div 
              className="text-xl md:text-2xl font-bold tracking-wider uppercase"
              style={{
                background: `linear-gradient(180deg, 
                  #f4d03f 0%, 
                  #d4af37 25%, 
                  #b8942e 50%, 
                  #d4af37 75%, 
                  #f4d03f 100%
                )`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))'
              }}
            >
              QUERO DESPERTAR!
            </div>
            
            {/* Subtexto */}
            <div 
              className="mt-1.5 text-[10px] md:text-xs tracking-wide"
              style={{
                color: '#a8a8a8',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
              }}
            >
              saiba mais em laerciofonseca.com.br
            </div>
          </div>
        </div>
        
        {/* Sombra projetada abaixo */}
        <div 
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-4 rounded-full blur-lg opacity-40"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.8) 0%, transparent 70%)'
          }}
        />
      </div>
    </motion.a>
  );
}