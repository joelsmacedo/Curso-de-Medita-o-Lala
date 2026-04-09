import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Clock, MonitorPlay, Award, ShieldCheck, Star, Brain, Wind, Leaf, Flame, Waves, Eye, Heart, Calendar, Users, BookOpen, GraduationCap } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

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
            <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#d4af37] shrink-0" />
            <span className="truncate">Espaço Caminho da Luz</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
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
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y }} className="w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2000&auto=format&fit=crop" 
              alt="Meditação" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </motion.div>
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
              Uma jornada profunda por 23 práticas sagradas. Do Zen Budismo à Invocação Cósmica. Transforme sua mente, corpo e espírito no seu próprio ritmo.
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://pay.hotmart.com/N69139177Q?off=ztjix57g&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=meditacao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-[#d4af37] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] text-center"
              >
                Iniciar Minha Jornada
              </a>
              <p className="text-sm text-white/40 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Garantia de 7 dias
              </p>
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

      {/* BENTO GRID (DIFERENCIAIS) */}
      <section id="diferenciais" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">A Estrutura do Despertar</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Tudo o que você precisa para mergulhar profundamente nas práticas meditativas mais poderosas do mundo.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Large */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-2 lg:col-span-2 bg-[#0a0a0a] rounded-[2rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=1000&auto=format&fit=crop" alt="Cristais" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <MonitorPlay className="w-12 h-12 text-white/40 group-hover:text-[#d4af37] transition-colors mb-12" />
                <div>
                  <h3 className="font-display text-3xl font-bold mb-3">Estude do seu jeito</h3>
                  <p className="text-white/60 text-lg max-w-md">Acesse todo o conteúdo em qualquer dispositivo. Computador, tablet ou celular. A sua evolução espiritual não tem fronteiras.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Square */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img src="https://images.unsplash.com/photo-1528315651810-161dd5ce6c21?q=80&w=1000&auto=format&fit=crop" alt="Tempo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Clock className="w-10 h-10 text-white/40 group-hover:text-[#d4af37] transition-colors mb-8" />
                <div>
                  <div className="font-display text-6xl font-bold mb-2">34<span className="text-[#d4af37]">h</span></div>
                  <p className="text-white/60">De conteúdo original e transformador, gravado em altíssima qualidade.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Square */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img src="https://images.unsplash.com/photo-1545389336-eaee310ef3e2?q=80&w=1000&auto=format&fit=crop" alt="Aulas" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Sparkles className="w-10 h-10 text-white/40 group-hover:text-[#d4af37] transition-colors mb-8" />
                <div>
                  <div className="font-display text-6xl font-bold mb-2">23</div>
                  <p className="text-white/60">Aulas profundas cobrindo as mais diversas vertentes da meditação.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Wide */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="md:col-span-2 lg:col-span-2 bg-[#0a0a0a] rounded-[2rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-br from-[#d4af37] via-[#d4af37]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] to-transparent"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 w-full">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Certificado & Garantia</h3>
                  <p className="text-white/60 max-w-sm">Receba seu certificado de conclusão e tenha 7 dias de garantia incondicional para testar o curso.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#d4af37]/30 transition-colors">
                    <Award className="w-8 h-8 text-white/40 group-hover:text-[#d4af37] transition-colors" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#d4af37]/30 transition-colors">
                    <ShieldCheck className="w-8 h-8 text-white/40 group-hover:text-[#d4af37] transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VANTAGENS / BENEFÍCIOS */}
      <section id="vantagens" className="py-32 px-6 bg-[#050505]">
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
              { icon: Heart, title: "Paz Interior Verdadeira", desc: "Encontre um refúgio de serenidade inabalável dentro de si mesmo." },
              { icon: Brain, title: "Redução da Ansiedade", desc: "Liberte-se do estresse e da insônia, acalmando a mente agitada." },
              { icon: Wind, title: "Autocontrole e Clareza", desc: "Tome decisões com mais sabedoria e mantenha o foco no que importa." },
              { icon: Sparkles, title: "Expansão da Intuição", desc: "Abra os canais da sua consciência e ouça sua voz interior." },
              { icon: Leaf, title: "Conexão com o Presente", desc: "Viva o agora com intensidade e cultive a gratidão diária." },
              { icon: Flame, title: "Cura Emocional", desc: "Libere traumas do passado e renove suas energias vitais." },
              { icon: Waves, title: "Elevação Vibracional", desc: "Aumente sua frequência energética e atraia positividade." },
              { icon: Eye, title: "Despertar Espiritual", desc: "Conecte-se com sua verdadeira essência e propósito de vida." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5 hover:border-[#d4af37]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES / ABOUT */}
      <section id="modulos" className="py-32 px-6 bg-[#0a0a0a] border-y border-white/5">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2 no-scrollbar">
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
            className="relative h-[600px] rounded-[2rem] overflow-hidden border border-white/10 flex items-center justify-center bg-[#0a0a0a]"
          >
            <img
              src="https://lh3.googleusercontent.com/d/15ldHHAysswb3yGz4Wu9uYA5aJdIe1-5Y"
              alt="mulher meditando"
              width="500"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE O PROFESSOR */}
      <section id="professor" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="relative h-[400px] md:h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden border border-white/10 flex items-center justify-center bg-[#0a0a0a] order-2 lg:order-1"
          >
            <img
              src="https://lh3.googleusercontent.com/d/1QgtHCY7IQ17qi2syT1xZy2-SDhQqkETn"
              alt="Professor Laércio Fonseca"
              className="w-full h-full object-cover"
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

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="font-display font-bold text-xl tracking-wider uppercase flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            Espaço Caminho da Luz
          </div>
          <p className="text-white/40 text-sm">
            &copy; 2026 Cursos Esotéricos. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/40">
            <span>Criado por Afiliado Oficial</span>
            <span className="hidden sm:inline">•</span>
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
