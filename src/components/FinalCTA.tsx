import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, BookOpen, Infinity as InfinityIcon, Award, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

const CHECKOUT_URL = "https://pay.hotmart.com/N69139177Q?off=ztjix57g&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=meditacao";

export default function FinalCTA() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const benefits = [
    { icon: Clock, label: "34 horas de conteúdo" },
    { icon: Sparkles, label: "23 práticas exclusivas" },
    { icon: InfinityIcon, label: "Acesso vitalício" },
    { icon: Award, label: "Certificado incluso" },
    { icon: ShieldCheck, label: "Garantia de 7 dias" },
  ];

  return (
    <section 
      id="cta-final" 
      aria-labelledby="cta-final-title"
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#050505] overflow-hidden"
    >
      {/* Halo de Luz Dourada & Mandala Radial Abstrata de Fundo */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden" 
        aria-hidden="true"
      >
        {/* Glow atmosférico primário */}
        <div 
          className="w-[340px] sm:w-[600px] md:w-[800px] lg:w-[950px] h-[340px] sm:h-[600px] md:h-[800px] lg:h-[950px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.35) 0%, rgba(212,175,55,0.08) 45%, transparent 70%)'
          }}
        />

        {/* Glow secundário no topo do conteúdo */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] rounded-full blur-2xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)'
          }}
        />

        {/* Mandala / Anéis de Geometria Sagrada Abstratos */}
        <svg 
          className="absolute w-[600px] md:w-[900px] lg:w-[1100px] h-[600px] md:h-[900px] lg:h-[1100px] opacity-[0.07] text-[#d4af37]" 
          viewBox="0 0 400 400" 
          fill="none"
        >
          <circle cx="200" cy="200" r="195" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="200" cy="200" r="125" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="200" cy="200" r="55" stroke="currentColor" strokeWidth="0.5" />
          <path d="M200 5 L200 395 M5 200 L395 200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <path d="M62.13 62.13 L337.87 337.87 M62.13 337.87 L337.87 62.13" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <polygon points="200,40 338.56,280 61.44,280" stroke="currentColor" strokeWidth="0.5" />
          <polygon points="200,360 61.44,120 338.56,120" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center space-y-5 mb-10 md:mb-14"
        >
          {/* 1. Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#d4af37]">
              UM NOVO CAMINHO COMEÇA AGORA
            </span>
          </div>

          {/* 2. Título Principal */}
          <h2 
            id="cta-final-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
          >
            Chegou o momento de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4d03f] to-[#d4af37]">
              voltar para dentro.
            </span>
          </h2>

          {/* 3. Texto de Apoio */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Você já conheceu o caminho. Agora pode transformar esse conhecimento em prática, presença e uma nova relação com a sua própria consciência.
          </p>
        </motion.div>

        {/* 4. Bloco de Oferta com Destaque Moderado e Equilibrado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="relative bg-gradient-to-b from-[#111111]/90 via-[#0a0a0a]/95 to-[#080808]/95 border border-[#d4af37]/25 hover:border-[#d4af37]/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors duration-500"
        >
          {/* Linha sutil de destaque no topo da oferta */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

          <div className="text-center space-y-8">
            {/* Título & Descrição da Oferta */}
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Jornada Espiritual Completa
              </h3>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                23 práticas sagradas para expandir sua percepção, acalmar sua mente e cultivar uma presença mais profunda no dia a dia.
              </p>
            </div>

            {/* 7. Benefícios Compactos */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
              {benefits.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#d4af37]/30 transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-white/80">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Divisor Delicado */}
            <div className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* 5 & 6. Preço à vista e Parcelamento */}
            <div className="space-y-1 py-1">
              <div className="text-xs uppercase tracking-widest text-white/50 font-medium">
                Investimento Único
              </div>
              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                R$ 598,00
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#d4af37]">
                ou em 12x de R$ 61,85
              </div>
            </div>

            {/* 8. Botão de CTA Primária */}
            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg text-black bg-gradient-to-r from-[#f4d03f] via-[#d4af37] to-[#b8942e] hover:from-[#f7dc6f] hover:via-[#dfbe46] hover:to-[#c4a138] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] shadow-[0_4px_25px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                <span>Quero iniciar minha jornada</span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* 9. Microcopy de Redução de Objeção */}
            <div className="flex items-center justify-center gap-2 pt-2 text-xs sm:text-sm text-white/50">
              <Lock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span>Acesso seguro pela Hotmart • Comece no seu ritmo • Garantia de 7 dias</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
