import { motion } from 'motion/react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

export default function Terms() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-3 md:px-6 py-2.5 md:py-3 gap-2">
          <Link to="/" className="font-display font-bold text-[10px] sm:text-xs md:text-xl tracking-wider uppercase flex items-center gap-1.5 md:gap-2 hover:text-[#d4af37] transition-colors">
            <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#d4af37] shrink-0" />
            <span className="truncate">Espaço Caminho da Luz</span>
          </Link>
          <Link 
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-16"
          >
            {/* Termos de Uso */}
            <section className="space-y-8">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Termos de Uso</h1>
                <p className="text-white/60 leading-relaxed">
                  Ao acessar este site, você concorda com os termos descritos abaixo.
                </p>
              </div>

              <div className="space-y-6 text-white/70">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Uso do site</h2>
                  <p className="leading-relaxed">
                    O conteúdo deste site é informativo e pode ser alterado sem aviso prévio.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Responsabilidade</h2>
                  <p className="leading-relaxed">
                    Não garantimos resultados específicos com o uso de qualquer produto ou serviço indicado.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Afiliados</h2>
                  <p className="leading-relaxed">
                    Este site pode promover produtos de terceiros e não é responsável por entregas, pagamentos ou suporte relacionados a esses produtos.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Propriedade intelectual</h2>
                  <p className="leading-relaxed">
                    Todo o conteúdo deste site é protegido e não pode ser copiado sem autorização.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Modificações</h2>
                  <p className="leading-relaxed">
                    Os termos podem ser alterados a qualquer momento.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}