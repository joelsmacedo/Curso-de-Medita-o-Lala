import { motion } from 'motion/react';
import { Sparkles, Clock, MonitorPlay, Award, ShieldCheck, Brain, Wind, Leaf, Flame, Waves, Eye, Heart, Calendar, Users, BookOpen, GraduationCap, Play } from 'lucide-react';
import { useState } from 'react';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
      <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-3 md:px-6 py-2.5 md:py-3 gap-2">
          <div className="font-display font-bold text-[10px] sm:text-xs md:text-xl tracking-wider uppercase flex items-center gap-1.5 md:gap-2">
            <img src="https://lh3.googleusercontent.com/d/1hZM05uCbhht62ezjEXXY1s93My3GEYva" alt="Logo" className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full object-cover shrink-0" />
            <span className="truncate">Espaço Caminho da Luz</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#vantagens" className="hover:text-white transition-colors">Benefícios</a>
            <a href="#modulos" className="hover:text-white transition-colors">Módulos</a>
          </nav>
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

      {/* HERO SECTION */}
      <section className="relative min-h-[85dvh] flex items-start md:items-center justify-center pt-32 md:pt-20 px-6 pb-12 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2000&auto=format&fit=crop" 
              alt="Meditação" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-[#d4af37] mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Jornada Espiritual Completa</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              Desperte sua <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-white/50">
                Consciência
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Uma jornada profunda por 23 práticas sagradas. Da Meditação Dinâmica do Osho 
              à Meditação Zen Budista. Transforme sua mente, corpo e espírito no seu próprio ritmo.
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-10 border-y border-white/5 bg-[#0a0a0a] overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-16 items-center font-display text-xl md:text-2xl text-white/40 uppercase tracking-widest"
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



      {/* VANTAGENS / BENEFÍCIOS */}
      <section id="vantagens" className="py-16 md:py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Os Frutos da Prática</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Sinta as transformações profundas que a meditação oriental trará para a sua vida diária.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Paz Interior Verdadeira", image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/CARDS/1%20-Paz%20Interior%20Verdadeira%20card.webp" },
              { icon: Brain, title: "Redução da Ansiedade", image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/CARDS/2%20-%20Redu%C3%A7%C3%A3o%20da%20Ansiedade%202%20-%20Redu%C3%A7%C3%A3o%20da%20Ansiedade%20card.webp" },
              { icon: Wind, title: "Autocontrole e Clareza", image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/CARDS/3%20-%20Autocontrole%20e%20Clareza%20card.webp" },
              { icon: Sparkles, title: "Expansão da Intuição", image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/CARDS/4%20-%20Expans%C3%A3o%20da%20Intui%C3%A7%C3%A3o%20-%20gemini%20card.webp" },
              { icon: Leaf, title: "Conexão com o Presente", image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/CARDS/5%20-%20Conex%C3%A3o%20com%20o%20Presente%20-%20gemini%20card.webp" },
              { icon: Flame, title: "Cura Emocional", image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/CARDS/6%20-%20Cura%20Emocional%20gemini%202%20card.webp" },
              { icon: Waves, title: "Elevação Vibracional", image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/CARDS/7%20-%20Eleva%C3%A7%C3%A3o%20Vibracional%20gemini%202%20card.webp" },
              { icon: Eye, title: "Despertar Espiritual", image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/CARDS/8%20-%20Despertar%20Espiritual%20gemini%20card.webp" }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="relative bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5 hover:border-[#d4af37]/30 transition-colors group overflow-hidden min-h-[220px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/10">
                    <benefit.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="font-display font-bold text-xl">{benefit.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE O PROFESSOR */}
      <section id="professor" className="py-16 md:py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="relative h-[400px] md:h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden border border-white/10 flex items-center justify-center bg-[#0a0a0a] order-2 lg:order-1"
          >
            <img
              src="https://lh3.googleusercontent.com/d/1QgtHCY7IQ17qi2syT1xZy2-SDhQqkETn"
              alt="Professor Laércio Fonseca"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest uppercase text-[#d4af37] mb-6">
              Seu Instrutor
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Professor Laércio Fonseca</h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-10">
              <p>
                Físico formado pela Unicamp (1980), especializado em Astrofísica e Cosmologia, o Professor Laércio Fonseca é uma das maiores autoridades brasileiras na união entre ciência e espiritualidade.
              </p>
              <p>
                Há mais de 50 anos desenvolve treinamento interior em artes marciais e espiritualismo. É fundador do Espaço Caminho Da Luz e da Associação Wu San Dji Tao, dedicando sua vida à disseminação de conhecimentos que transformam vidas.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent border-l-4 border-[#d4af37] rounded-r-2xl p-6 mb-10">
              <p className="text-white/80 leading-relaxed">
                <strong className="text-[#d4af37] font-semibold">Autor reconhecido:</strong> Entre suas obras está "Física Quântica e Espiritualidade", que conecta ciência moderna com sabedoria ancestral.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODULES / ABOUT */}
      <section id="modulos" className="py-16 md:py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">O que você vai aprender</h2>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Um currículo desenhado para expandir sua percepção. Desde técnicas milenares até abordagens contemporâneas, você terá acesso a um arsenal completo de práticas meditativas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Meditação das 12 mudras sagradas",
                "Meditação dos mantras sagrados",
                "Meditação das mandalas sagradas",
                "Meditação budista dos 7 chacras",
                "Meditação Raja Yoga",
                "Meditação usando cristais",
                "Meditação dinâmica do Osho",
                "Meditação e Cria Yoga",
                "Meditação Cromoterapia Sagrada",
                "Meditação New Age",
                "Meditação Zen Budista",
                "Meditação de anjos protetores",
                "Meditação da cura interior",
                "Meditação para a paz planetária",
                "Invocação dos seres extraterrestres",
                "Os alimentos corretos para pratica",
                "Meditação Taoista",
                "Tchi-Kun e a Meditação Taoísta",
                "Yoga e Meditação Indiana",
                "Meditação Bhudista Vipassana",
                "Meditação Braktivedanta",
                "Meditação Tântrica Kundalini",
                "Meditação Hari Krishna"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0"></div>
                  <span className="font-medium text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="relative h-full min-h-[400px] rounded-[2rem] overflow-hidden border border-white/10 flex items-center justify-center bg-[#0a0a0a]"
          >
            <img
              src="https://lh3.googleusercontent.com/d/15ldHHAysswb3yGz4Wu9uYA5aJdIe1-5Y"
              alt="mulher meditando"
              width="500"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          </motion.div>
          </div>
        
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="mt-16 text-center"
          >
            <a
              href="https://pay.hotmart.com/N69139177Q?off=ztjix57g&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=meditacao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] rounded-full font-semibold text-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              <span className="uppercase tracking-wider">Quero Mudar Minha Vida com a Meditação</span>
              <Sparkles className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

{/* FOOTER */}
      <Footer />

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
        videoId="yG1_uQO_4lI" 
      />
    </div>
  );
}