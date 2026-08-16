import ScrollReveal from './ScrollReveal';
import CinematicScroll from './CinematicScroll';

type FruitItem = {
  title: string;
  titleLines: string[];
  description: string;
  image: string;
  textPosition: string;
  align?: 'left' | 'right';
  theme?: 'light' | 'dark';
  offsetY?: string;
};

const fruits: FruitItem[] = [
  {
    title: "Paz Interior Verdadeira",
    titleLines: ["Paz Interior", "Verdadeira"],
    description: "Encontre um refúgio de serenidade inabalável dentro de si mesmo.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/1%20-Paz%20Interior%20Verdadeira%20sem%20texto.webp",
    textPosition: "bottom"
  },
  {
    title: "Redução da Ansiedade",
    titleLines: ["Redução da", "Ansiedade"],
    description: "Liberte-se do estresse e da insônia, acalmando a mente agitada.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/2%20-%20Redu%C3%A7%C3%A3o%20da%20Ansiedade%20sem%20texto.webp",
    textPosition: "bottom"
  },
  {
    title: "Autocontrole e Clareza",
    titleLines: ["Autocontrole e", "Clareza"],
    description: "Tome decisões com mais sabedoria e mantenha o foco no que importa.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/3%20-%20Autocontrole%20e%20Clareza%20sem%20texto.webp",
    textPosition: "bottom",
    align: "left",
    theme: "dark",
    offsetY: "pb-24 md:pb-32 lg:pb-40"
  },
  {
    title: "Expansão da Intuição",
    titleLines: ["Expansão da", "Intuição"],
    description: "Abra os canais da sua consciência e ouça sua voz interior.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/4%20-%20Expans%C3%A3o%20da%20Intui%C3%A7%C3%A3o%20-%20gemini%20sem%20texto.webp",
    textPosition: "bottom",
    align: "left"
  },
  {
    title: "Conexão com o Presente",
    titleLines: ["Conexão com", "o Presente"],
    description: "Viva o agora com intensidade e cultive a gratidão diária.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/5%20-%20Conex%C3%A3o%20com%20o%20Presente%20-%20gemini%20sem%20texto.webp",
    textPosition: "bottom"
  },
  {
    title: "Cura Emocional",
    titleLines: ["Cura", "Emocional"],
    description: "Libere traumas do passado e renove suas energias vitais.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/6%20-%20Cura%20Emocional%20gemini%202%20sem%20texto.webp",
    textPosition: "bottom"
  },
  {
    title: "Elevação Vibracional",
    titleLines: ["Elevação", "Vibracional"],
    description: "Aumente sua frequência energética e atraia positividade.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/7%20-%20Eleva%C3%A7%C3%A3o%20Vibracional%20gemini%202%20sem%20texto.webp",
    textPosition: "bottom"
  },
  {
    title: "Despertar Espiritual",
    titleLines: ["Despertar", "Espiritual"],
    description: "Conecte-se com sua verdadeira essência e propósito de vida.",
    image: "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/SESS%C3%83O%20FRUTOS%20DA%20PR%C3%81TICA/8%20-%20Despertar%20Espiritual%20gemini%20sem%20texto.webp",
    textPosition: "bottom"
  }
];

export default function FruitJourney() {
  return (
    <section
      id="vantagens"
      className="bg-[#050505] text-white overflow-hidden py-32"
    >
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 mb-[15vh] text-center">
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
            <div className="fruit-title-block w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center px-6">
              <CinematicScroll type="title" delay={0}>
                <h3 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-center text-white">
                  {fruit.titleLines.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </h3>
              </CinematicScroll>
            </div>

            {/* Bloco da Imagem com a Descrição sobreposta nela */}
            <figure className="fruit-image-block relative w-full max-w-5xl min-h-[60vh] md:min-h-[90vh] flex items-center justify-center mb-[15vh] px-4 md:px-12">
              <CinematicScroll type="image" delay={100} className="w-full">
                <div className="relative w-full aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden shadow-2xl bg-[#0a0a0a]">
                  <img
                    src={fruit.image}
                    alt={fruit.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Descrição sobre a imagem dinâmica de acordo com alinhamento e tema */}
                  <div className={`absolute inset-y-0 ${fruit.align === 'left' ? 'left-0 items-start text-left' : 'right-0 items-end text-right'} w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10 pointer-events-none ${fruit.offsetY || ''}`}>
                    <p className={`text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] ${fruit.theme === 'dark' ? 'text-[#1a1a1a] drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]' : 'text-white/95 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]'}`}>
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
