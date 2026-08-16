import ScrollReveal from './ScrollReveal';
import CinematicScroll from './CinematicScroll';

type FruitItem = {
  title: string;
  titleLines: string[];
  description: string;
  image: string;
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
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/1.webp",
    offsetY: "20px",
  },
  {
    title: "Redução da Ansiedade",
    titleLines: ["Redução da", "Ansiedade"],
    description: "Liberte-se do estresse e da insônia, acalmando a mente agitada.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/2.webp",
  },
  {
    title: "Autocontrole e Clareza",
    titleLines: ["Autocontrole e", "Clareza"],
    description: "Tome decisões com mais sabedoria e mantenha o foco no que importa.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/3.webp",
    offsetY: "-30px",
  },
  {
    title: "Expansão da Intuição",
    titleLines: ["Expansão da", "Intuição"],
    description: "Abra os canais da sua consciência e ouça sua voz interior.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/4.webp",
  },
  {
    title: "Conexão com o Presente",
    titleLines: ["Conexão com", "o Presente"],
    description: "Viva o agora com intensidade e cultive a gratidão diária.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/5.webp",
  },
  {
    title: "Cura Emocional",
    titleLines: ["Cura", "Emocional"],
    description: "Libere traumas do passado e renove suas energias vitais.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/6.webp",
  },
  {
    title: "Elevação Vibracional",
    titleLines: ["Elevação", "Vibracional"],
    description: "Aumente sua frequência energética e atraia positividade.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/7.webp",
  },
  {
    title: "Despertar Espiritual",
    titleLines: ["Despertar", "Espiritual"],
    description: "Conecte-se com sua verdadeira essência e propósito de vida.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/MOBILE/8.webp",
  }
];

export default function FruitJourney() {
  return (
    <section
      id="vantagens"
      className="bg-[#050505] text-white overflow-hidden pt-32 pb-8"
    >
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 mb-[8vh] text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Os Frutos da Prática
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Sinta as transformações profundas que a meditação oriental trará para a sua vida diária.
          </p>
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
                  <img
                    src={fruit.image}
                    alt={fruit.title}
                    className="w-full h-auto object-cover"
                    style={{ objectPosition: 'center center' }}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Descrição na parte inferior da imagem */}
                  <div 
                    className="absolute bottom-0 left-0 w-full p-8 pb-16 md:p-12 md:pb-24 flex flex-col justify-end items-center text-center z-10 pointer-events-none"
                    style={{ transform: fruit.offsetY ? `translateY(${fruit.offsetY})` : undefined }}
                  >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] text-white/95 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
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
