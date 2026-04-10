import { motion } from 'motion/react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

export default function Privacy() {
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
            {/* Política de Privacidade */}
            <section className="space-y-8">
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Política de Privacidade</h1>
                <p className="text-white/60 leading-relaxed">
                  A sua privacidade é importante para nós. Esta política descreve como as informações são coletadas, usadas e protegidas neste site.
                </p>
              </div>

              <div className="space-y-6 text-white/70">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Coleta de informações</h2>
                  <p className="leading-relaxed">
                    Este site pode coletar informações automaticamente por meio de cookies, pixels e tecnologias semelhantes, incluindo dados como endereço IP, tipo de navegador, páginas acessadas e tempo de navegação.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Uso das informações</h2>
                  <p className="leading-relaxed mb-2">As informações coletadas são utilizadas para:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Melhorar a experiência do usuário</li>
                    <li>Analisar o desempenho da página</li>
                    <li>Exibir anúncios mais relevantes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Cookies e tecnologias de rastreamento</h2>
                  <p className="leading-relaxed">
                    Utilizamos cookies e ferramentas como pixel de rastreamento para fins de análise e marketing. O usuário pode desativar os cookies nas configurações do seu navegador.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Compartilhamento de dados</h2>
                  <p className="leading-relaxed">
                    Não vendemos informações pessoais. Dados podem ser compartilhados com plataformas de terceiros para fins de análise e publicidade.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Links externos</h2>
                  <p className="leading-relaxed">
                    Este site pode conter links para páginas externas. Não somos responsáveis pelas políticas de privacidade de outros sites.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Consentimento</h2>
                  <p className="leading-relaxed">
                    Ao utilizar este site, você concorda com esta política de privacidade.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Alterações</h2>
                  <p className="leading-relaxed">
                    Esta política pode ser atualizada a qualquer momento, sem aviso prévio.
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