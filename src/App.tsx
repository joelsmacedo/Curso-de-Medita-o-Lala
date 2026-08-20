import React, { Suspense, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, MonitorPlay, Award, ShieldCheck, Brain, Wind, Leaf, Flame, Waves, Eye, Heart, Calendar, Users, BookOpen, GraduationCap, Play } from 'lucide-react';
import HeroSection from './components/HeroSection';
import { useMediaQuery } from './hooks/useMediaQuery';

// Lazy loading de componentes abaixo da dobra para reduzir o bundle size inicial
const Footer = React.lazy(() => import('./components/Footer'));
const FruitJourney = React.lazy(() => import('./components/FruitJourney'));
const FinalCTA = React.lazy(() => import('./components/FinalCTA'));
const KnowledgeUniverseSection = React.lazy(() => import('./components/KnowledgeUniverseSection'));
const MobileMeditationCarousel = React.lazy(() => import('./components/MobileMeditationCarousel'));
const DesktopMeditationSection = React.lazy(() => import('./components/DesktopMeditationSection'));

export default function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black overflow-hidden">
      {/* HEADER */}
      <header className="fixed bottom-0 md:top-0 md:bottom-auto left-0 right-0 z-50 px-3 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-3 md:px-6 py-2.5 md:py-3 gap-2">
          <div className="font-display font-bold text-[10px] sm:text-xs md:text-xl tracking-wider uppercase flex items-center gap-1.5 md:gap-2">
            <img src={new URL('./Public/icone silhueta canva reduzido icone.webp', import.meta.url).href} alt="Logo" className="w-5 h-5 md:w-7 md:h-7 rounded-full object-cover shrink-0" />
            <span className="truncate">Jornada Interior</span>
          </div>

          <a
            href="https://pay.hotmart.com/N69139177Q?off=ztjix57g&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=meditacao"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold hover:bg-[#d4af37] transition-colors text-center whitespace-nowrap shrink-0"
          >
            Garantir Vaga
          </a>
        </div>
      </header>

      {/* HERO SECTION - Carregado eager pois é LCP */}
      <HeroSection />

      {/* MARQUEE */}
      <div className="py-6 md:py-8 border-y border-white/5 bg-[#0a0a0a] overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-12 items-center font-display text-base md:text-lg text-white/40 uppercase tracking-widest"
        >
          <span>34 Horas de Conteúdo</span>
          <span>•</span>
          <span>23 Práticas Exclusivas</span>
          <span>•</span>
          <span>Acesso Vitalício</span>
          <span>•</span>
          <span>Certificado Incluso</span>
          <span>•</span>
          <span>Garantia de 7 Dias</span>
          <span>•</span>
          <span>34 Horas de Conteúdo</span>
          <span>•</span>
          <span>23 Práticas Exclusivas</span>
          <span>•</span>
          <span>Acesso Vitalício</span>
          <span>•</span>
          <span>Certificado Incluso</span>
          <span>•</span>
          <span>Garantia de 7 Dias</span>
          <span>•</span>
        </motion.div>
      </div>

      <Suspense fallback={<div className="min-h-[50vh] bg-[#050505]" />}>
        <FruitJourney />
        {/* SOBRE O PROFESSOR */}
        <section id="professor" className="pt-8 pb-16 md:pt-12 md:pb-24 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10 lg:mb-16">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest uppercase text-[#d4af37] mb-6">
                  Seu Instrutor
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Prof. Laércio Fonseca</h2>

                <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-6 lg:mb-10">
                  <p>
                    Físico formado pela Unicamp (1980), especializado em Astrofísica e Cosmologia, o Professor Laércio Fonseca é uma das maiores autoridades brasileiras na união entre ciência e espiritualidade.
                  </p>
                  <p>
                    Há mais de 50 anos desenvolve treinamento interior em artes marciais e espiritualismo. É fundador do Espaço Caminho Da Luz e da Associação Wu San Dji Tao, dedicando sua vida à disseminação de conhecimentos que transformam vidas.
                  </p>
                </div>

                {/* Card no Desktop (lado direito abaixo do texto) */}
                <div className="hidden lg:block bg-gradient-to-r from-[#d4af37]/20 to-transparent border-l-4 border-[#d4af37] rounded-r-2xl p-6">
                  <p className="text-white/80 leading-relaxed">
                    <strong className="text-[#d4af37] font-semibold">Autor reconhecido:</strong> Entre suas obras está "Física Quântica e Espiritualidade", que conecta ciência moderna com sabedoria ancestral.
                  </p>
                </div>
              </motion.div>

              {/* Imagem do professor */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="order-2 lg:order-1 flex flex-col gap-6"
              >
                <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a]">
                  <img
                    src="https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/lala%20meditando%20yoga%20-%20reduzido.webp"
                    alt="Professor Laércio Fonseca"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    width="600"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Card no Mobile (abaixo da foto) */}
                <div className="block lg:hidden bg-gradient-to-r from-[#d4af37]/20 to-transparent border-l-4 border-[#d4af37] rounded-r-2xl p-6">
                  <p className="text-white/80 leading-relaxed">
                    <strong className="text-[#d4af37] font-semibold">Autor reconhecido:</strong> Entre suas obras está "Física Quântica e Espiritualidade", que conecta ciência moderna com sabedoria ancestral.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 text-center hover:border-[#d4af37]/30 transition-colors group">
                <Calendar className="w-6 h-6 text-white/40 group-hover:text-[#d4af37] transition-colors mx-auto mb-3" />
                <div className="font-display font-bold text-xl text-white mb-1">+50 anos</div>
                <div className="text-xs text-white/50">de prática e estudo</div>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 text-center hover:border-[#d4af37]/30 transition-colors group">
                <Users className="w-6 h-6 text-white/40 group-hover:text-[#d4af37] transition-colors mx-auto mb-3" />
                <div className="font-display font-bold text-xl text-white mb-1">+1500</div>
                <div className="text-xs text-white/50">palestras realizadas</div>
              </div>
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 text-center hover:border-[#d4af37]/30 transition-colors group">
                <BookOpen className="w-6 h-6 text-white/40 group-hover:text-[#d4af37] transition-colors mx-auto mb-3" />
                <div className="font-display font-bold text-xl text-white mb-1">9 livros</div>
                <div className="text-xs text-white/50">publicados</div>
              </div>
              <motion.a
                href="#cursos"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="block bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl p-5 text-center hover:border-[#d4af37]/60 hover:bg-[#d4af37]/20 transition-all group cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
              >
                <GraduationCap className="w-6 h-6 text-[#d4af37] mx-auto mb-3" />
                <div className="font-display font-bold text-xl text-white mb-1">12 Cursos</div>
                <div className="text-xs text-white/70">de Alimentação à Física Quântica</div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Renderização Condicional baseada no viewport: evita renderizar o carrossel que não será visto */}
        {isDesktop ? (
          <DesktopMeditationSection />
        ) : (
          <div className="border-y border-white/5">
            <MobileMeditationCarousel />
          </div>
        )}

        {/* FINAL CTA */}
        <FinalCTA />

        {/* UNIVERSO DO CONHECIMENTO (CARROSSEL EBOOKS & CURSOS) */}
        <KnowledgeUniverseSection />

        {/* FOOTER */}
        <Footer />
      </Suspense>
    </div>
  );
}