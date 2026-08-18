import ScrollReveal from './ScrollReveal';
import CinematicScroll from './CinematicScroll';
import { Sparkles } from 'lucide-react';

type FruitItem = {
  title: string;
  titleLines: string[];
  description: string;
  imageDesktop: string;
  imageMobile: string;
  textPosition?: string;
  align?: 'left' | 'right';
  theme?: 'light' | 'dark';
  offsetY?: string;
};

const fruits: FruitItem[] = [
  {
    title: "Paz Interior Verdadeira",
    titleLines: ["Paz Interior", "Verdadeira"],
    description: "Encontre um refúgio de serenidade inabalável dentro de si mesmo.",
    imageDesktop: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/1%20-Paz%20Interior%20Verdadeira%20sem%20texto.webp",
    imageMobile: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/1.webp",
    offsetY: "20px",
  },
  {
    title: "Redução da Ansiedade",
    titleLines: ["Redução da", "Ansiedade"],
    description: "Liberte-se do estresse e da insônia, acalmando a mente agitada.",
    imageDesktop: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/2%20-%20Redu%C3%A7%C3%A3o%20da%20Ansiedade%20sem%20texto.webp",
    imageMobile: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/2.webp",
  },
  {
    title: "Autocontrole e Clareza",
    titleLines: ["Autocontrole e", "Clareza"],
    description: "Tome decisões com mais sabedoria e mantenha o foco no que importa.",
    imageDesktop: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/3%20-%20Autocontrole%20e%20Clareza%20sem%20texto.webp",
    imageMobile: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/3.webp",
    offsetY: "-30px",
  },
  {
    title: "Expansão da Intuição",
    titleLines: ["Expansão da", "Intuição"],
    description: "Abra os canais da sua consciência e ouça sua voz interior.",
    imageDesktop: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/4%20-%20Expans%C3%A3o%20da%20Intui%C3%A7%C3%A3o%20-%20gemini%20sem%20texto.webp",
    imageMobile: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/4.webp",
  },
  {
    title: "Conexão com o Presente",
    titleLines: ["Conexão com", "o Presente"],
    description: "Viva o agora com intensidade e cultive a gratidão diária.",
    imageDesktop: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/5%20-%20Conex%C3%A3o%20com%20o%20Presente%20-%20gemini%20sem%20texto.webp",
    imageMobile: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/5.webp",
  },
  {
    title: "Cura Emocional",
    titleLines: ["Cura", "Emocional"],
    description: "Libere traumas do passado e renove suas energias vitais.",
    imageDesktop: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/6%20-%20Cura%20Emocional%20gemini%202%20sem%20texto.webp",
    imageMobile: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/6.webp",
  },
  {
    title: "Elevação Vibracional",
    titleLines: ["Elevação", "Vibracional"],
    description: "Aumente sua frequência energética e atraia positividade.",
    imageDesktop: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/7%20-%20Eleva%C3%A7%C3%A3o%20Vibracional%20gemini%202%20sem%20texto.webp",
    imageMobile: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/7.webp",
  },
  {
    title: "Despertar Espiritual",
    titleLines: ["Despertar", "Espiritual"],
    description: "Conecte-se com sua verdadeira essência e propósito de vida.",
    imageDesktop: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/8%20-%20Despertar%20Espiritual%20gemini%20sem%20texto.webp",
    imageMobile: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/8.webp",
  }
];

export default function FruitJourney() {
  return (
    <section
      id="vantagens"
      className="bg-[#050505] text-white overflow-hidden pt-32 pb-8"
    >
      {/* Glow Atmosférico Sutil do Cabeçalho */}
      <div 
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[300px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(212,175,55,0.05) 50%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <ScrollReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-6 mb-[12vh] text-center">
          {/* Badge / Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#d4af37]">
              Transformação Interior
            </span>
          </div>

          {/* Título com Destaque Dourado */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Os Frutos da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] via-[#d4af37] to-[#b8942e]">
              Prática
            </span>
          </h2>

          {/* Texto de Apoio */}
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Sinta as transformações profundas que a meditação oriental trará para a sua vida diária.
          </p>

          {/* Divisor Elegante de Transição para a Jornada */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-4 w-full max-w-xs opacity-60">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-[#d4af37]" />
              <span className="text-[#d4af37] text-[11px] tracking-widest uppercase font-medium">8 Dimensões</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#d4af37]/50 to-[#d4af37]" />
            </div>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#d4af37]/50 to-transparent" />
          </div>
        </div>
      </ScrollReveal>

      <div className="flex flex-col items-center">
        {fruits.map((fruit, i) => (
          <div key={i} className="w-full flex flex-col items-center relative">

            {/* Bloco do Título Isolado */}
            <div className="fruit-title-block w-full min-h-[30vh] md:min-h-[45vh] flex flex-col items-center justify-center px-6">
              <CinematicScroll type="title" delay={0}>
                <h3 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-center text-white">
                  {fruit.titleLines.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </h3>
              </CinematicScroll>
            </div>

            {/* Bloco da Imagem com a Descrição sobreposta nela */}
            <figure className={`fruit-image-block relative w-full max-w-5xl min-h-[60vh] md:min-h-[90vh] flex items-center justify-center ${i === fruits.length - 1 ? 'mb-0' : 'mb-[10vh]'} px-4 md:px-12`}>
              <CinematicScroll type="image" delay={100} className="w-full">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0a0a0a]">
                  <picture className="w-full h-auto block">
                    <source media="(min-width: 768px)" srcSet={fruit.imageDesktop} />
                    <img
                      src={fruit.imageMobile}
                      alt={fruit.title}
                      className="w-full h-auto object-cover"
                      style={{ objectPosition: 'center center' }}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none"></div>

                  <div 
                    className="absolute bottom-0 left-0 w-full p-8 pb-16 md:p-12 md:pb-24 flex flex-col justify-end items-center text-center z-10 pointer-events-none"
                    style={{ transform: fruit.offsetY ? `translateY(${fruit.offsetY})` : undefined }}
                  >
                    <p 
                      className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.4] text-white/95 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: "'Helvetica Rounded LT', 'Helvetica Rounded LT Std', 'Nunito', sans-serif" }}
                    >
                      {fruit.description}
                    </p>
                  </div>
                </div>
              </CinematicScroll>
            </figure>

          </div>
        ))}
      </div>
    </section>
  );
}
