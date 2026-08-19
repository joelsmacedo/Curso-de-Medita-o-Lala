import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { meditations, baseUrl, DEFAULT_FONT_FAMILY, DEFAULT_FONT_SIZE } from '../data/meditationsData';

export default function DesktopMeditationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMeditation = meditations[activeIndex];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="modulos" className="hidden md:block py-12 lg:py-16 px-6 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold tracking-widest uppercase text-[#d4af37] mb-3">
            O que você vai aprender
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">
            23 Práticas Exclusivas de Meditação
          </h2>
          <p className="text-white/60 text-base max-w-4xl mx-auto leading-relaxed">
            Passe o mouse sobre os temas abaixo para visualizar cada meditação e seus ensinamentos detalhados.
          </p>
        </motion.div>

        {/* Conteúdo Principal: Cards à esquerda e Imagem à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Lado Esquerdo: Mini Cards de Títulos/Meditações (7 colunas no desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {meditations.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveIndex(index);
                      }
                    }}
                    className={`group cursor-pointer text-left transition-all duration-300 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 border select-none ${
                      isActive
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#f3cb42] text-black border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.45)] scale-[1.02] font-semibold opacity-100'
                        : 'bg-white/[0.04] text-white/80 border-white/5 opacity-65 hover:opacity-100 hover:border-[#d4af37]/40 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    {/* Indicador / Ponto */}
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 transition-transform duration-300 ${
                        isActive
                          ? 'bg-[#0a0a0a] scale-125 shadow-sm'
                          : 'bg-[#d4af37] group-hover:scale-110'
                      }`}
                    />

                    {/* Título da Meditação */}
                    <span
                      className={`text-xs lg:text-[13px] leading-tight transition-colors duration-200 ${
                        isActive ? 'text-black font-bold' : 'text-white/85 group-hover:text-white'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Lado Direito: Imagem e Descrição da Meditação correspondente (5 colunas no desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -35 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 35 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Imagem da Meditação */}
                  <img
                    src={baseUrl + activeMeditation.image}
                    alt={activeMeditation.title}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Gradiente superior suave para contraste e legibilidade do texto */}
                  <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black/85 via-black/55 to-transparent pointer-events-none z-10" />

                  {/* Overlay do Texto com estilos correspondentes ao mobile */}
                  <div className="absolute top-0 left-0 right-0 pt-10 px-6 pb-6 z-20 pointer-events-none flex items-start justify-center">
                    <p
                      className="text-center leading-tight transition-all"
                      style={{
                        color: activeMeditation.textColor || '#ffffff',
                        textShadow: activeMeditation.textShadow !== undefined
                          ? activeMeditation.textShadow
                          : '0 4px 10px rgba(0,0,0,0.8)',
                        fontFamily: activeMeditation.fontFamily || DEFAULT_FONT_FAMILY,
                        fontWeight: activeMeditation.fontWeight || 'normal',
                        fontSize: activeMeditation.fontSize || DEFAULT_FONT_SIZE,
                        transform: activeMeditation.offsetY ? `translateY(${activeMeditation.offsetY})` : undefined,
                      }}
                    >
                      {activeMeditation.description}
                    </p>
                  </div>

                  {/* Gradiente inferior suave para ambientação */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none flex items-end justify-between px-6 pb-5">
                    <span className="text-white/70 font-display text-xs tracking-wider">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(meditations.length).padStart(2, '0')}
                    </span>
                    <span className="text-[#d4af37] font-display text-xs font-semibold uppercase tracking-wider">
                      {activeMeditation.title}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Botão de Ação (CTA) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <a
            href="https://pay.hotmart.com/N69139177Q?off=ztjix57g&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=meditacao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent border-2 border-[#d4af37] text-[#d4af37] rounded-full font-semibold text-base hover:bg-[#d4af37] hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            <span className="uppercase tracking-wider">Quero Mudar Minha Vida com a Meditação</span>
            <Sparkles className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
