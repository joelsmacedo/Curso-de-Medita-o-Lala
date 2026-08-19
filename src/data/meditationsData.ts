export interface MeditationItem {
  title: string;
  image: string;
  description: string;
  textColor?: string;
  textShadow?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  offsetY?: string;
}

export const baseUrl = "https://pub-9bdd8e3c98204849a491d4f564b14298.r2.dev/Curso%20Medita%C3%A7%C3%A3o/O%20QUE%20VC%20VAI%20APRENDER/";

export const DEFAULT_FONT_FAMILY = "'Helvetica Rounded LT', 'Helvetica Rounded LT Std', sans-serif";
export const DEFAULT_FONT_SIZE = "17.5px";

export const meditations: MeditationItem[] = [
  { 
    title: "12 Mudras Sagrados", 
    image: "12 mudras sagradas.webp", 
    description: "Gestos ancestrais das mãos que ajudam a harmonizar a energia, aquietar a mente e aprofundar a conexão com seu interior", 
    textColor: "#3e1b09", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "bold", 
    fontSize: "19px" 
  },
  { 
    title: "Meditação das Mandalas Sagradas", 
    image: "mandala_sagrada_meditacao.webp", 
    description: "Utilize formas, símbolos e padrões geométricos como pontos de concentração, favorecendo a contemplação, a presença e a interiorização.", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "600", 
    fontSize: "18.5px" 
  },
  { 
    title: "Meditação Raja Yoga", 
    image: "Meditação Raja Yoga.webp", 
    description: "Uma tradição de meditação associada ao Yoga clássico, voltada ao controle da mente, à concentração e ao desenvolvimento da consciência interior.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação Dinâmica de Osho", 
    image: "meditacao-dinamica-osho.webp", 
    description: "Prática ativa que combina movimento, respiração, expressão emocional e períodos de silêncio, buscando liberar tensões e aprofundar a percepção de si.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação com Cromoterapia Sagrada", 
    image: "meditacao-cromoterapia-sagrada.webp", 
    description: "Utiliza a contemplação e a visualização de cores dentro de uma abordagem espiritual, associando diferentes tonalidades a estados simbólicos de equilíbrio e consciência.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação Zen Budista", 
    image: "meditacao-zen-budista - ajustado.webp", 
    description: "Prática contemplativa do Zen que enfatiza a atenção plena, a postura, a respiração e a observação da experiência presente sem apego.", 
    textColor: "#000000", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "bold", 
    fontSize: "19px" 
  },
  { 
    title: "Meditação da Cura Interior", 
    image: "meditacao_cura_interior.webp", 
    description: "Prática de introspecção voltada à observação das emoções, memórias e padrões pessoais, buscando cultivar acolhimento, autoconhecimento e equilíbrio interior.", 
    textColor: "#3e1b09", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "bold" 
  },
  { 
    title: "Invocação dos Seres Extraterrestres", 
    image: "invocacao_seres_extraterrestres.webp", 
    description: "Uma prática de caráter esotérico que utiliza meditação, visualização e intenção para estabelecer, segundo essa perspectiva espiritual, uma conexão com consciências extraterrestres.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação Taoista", 
    image: "meditacao-taoista.webp", 
    description: "Conjunto de práticas contemplativas da tradição taoista que trabalha respiração, quietude, atenção e cultivo da energia vital, frequentemente associado ao conceito de Qi.", 
    textColor: "#1e3d28", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "bold" 
  },
  { 
    title: "Yoga e Meditação Indiana", 
    image: "yoga-meditacao-indiana.webp", 
    description: "Integra práticas tradicionais indianas de postura, respiração, concentração e meditação, buscando desenvolver equilíbrio entre corpo, mente e consciência.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação Bhaktivedanta", 
    image: "meditacao-bhaktivedanta.webp", 
    description: "Prática inspirada nos ensinamentos de Bhaktivedanta Swami Prabhupada e na tradição Gaudiya Vaishnava, com ênfase na devoção, contemplação e repetição de nomes sagrados.", 
    textColor: "#3e1b09", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "600",
    offsetY: "28px"
  },
  { 
    title: "Meditação Hare Krishna", 
    image: "hare_krishna_meditacao.webp", 
    description: "Prática devocional baseada principalmente no canto e na repetição do mantra Hare Krishna, utilizado como instrumento de concentração e devoção espiritual.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação dos Mantras Sagrados", 
    image: "meditacao_mantras_sagrados.webp", 
    description: "Utiliza a repetição consciente de sons, palavras ou fórmulas tradicionais como objeto de concentração, promovendo ritmo respiratório, foco e interiorização.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação Budista dos 7 Chakras", 
    image: "meditacao-budista-7-chakras.webp", 
    description: "Uma abordagem contemporânea que combina elementos de meditação budista com o sistema dos sete chakras, utilizando concentração e visualização para trabalhar diferentes dimensões simbólicas da experiência interior.", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontSize: "15px" 
  },
  { 
    title: "Meditação com Cristais", 
    image: "meditacao_com_cristais.webp", 
    description: "Prática esotérica que utiliza cristais como objetos de contemplação, concentração ou ritual, atribuindo-lhes significados simbólicos relacionados à energia e ao equilíbrio.", 
    textColor: "#3e1b09", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "600" 
  },
  { 
    title: "Meditação e Kriya Yoga", 
    image: "meditacao-kriya-yoga-landing.webp", 
    description: "Prática associada a tradições de Yoga que enfatizam técnicas de respiração, concentração e meditação como caminhos para aprofundar a disciplina interior e a consciência.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação New Age", 
    image: "meditacao-new-age.webp", 
    description: "Abordagem espiritual contemporânea que reúne técnicas e conceitos de diferentes tradições, frequentemente envolvendo visualização, energia, consciência, espiritualidade e autoconhecimento.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação com Anjos Protetores", 
    image: "meditacao_anjos_protetores.webp", 
    description: "Prática de caráter devocional e esotérico baseada na visualização, oração ou contemplação de seres angelicais como símbolos de proteção, orientação e amparo espiritual.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Meditação para a Paz Planetária", 
    image: "meditacao_paz_planetaria.webp", 
    description: "Prática contemplativa coletiva ou individual que utiliza visualizações, intenções e orações direcionadas simbolicamente à paz, à harmonia e à fraternidade entre os povos.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  },
  { 
    title: "Alimentação para a Prática", 
    image: "alimentacao_para_a_pratica.webp", 
    description: "Reflexão sobre hábitos alimentares e escolhas nutricionais que podem favorecer disposição, conforto digestivo e bem-estar durante práticas de meditação e Yoga.", 
    textColor: "#3e1b09", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "bold" 
  },
  { 
    title: "Chi Kung e Meditação Taoista", 
    image: "chi-kung-meditacao-taoista.webp?v=2", 
    description: "Integra exercícios tradicionais de movimento, respiração e atenção do Qi Gong com práticas contemplativas taoistas, buscando cultivar presença, equilíbrio corporal e serenidade.", 
    textColor: "#1e3d28", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "bold" 
  },
  { 
    title: "Meditação Budista Vipassana", 
    image: "vipassana_meditacao.webp", 
    description: "Prática contemplativa tradicional que desenvolve a atenção cuidadosa sobre corpo, sensações, estados mentais e fenômenos da experiência, cultivando clareza e compreensão.", 
    textColor: "#1a241f", 
    textShadow: "none", 
    fontFamily: DEFAULT_FONT_FAMILY, 
    fontWeight: "bold" 
  },
  { 
    title: "Meditação Tântrica Kundalini", 
    image: "meditação kundalini.webp", 
    description: "Prática inspirada em tradições tântricas e de Yoga que trabalha respiração, concentração, mantras e visualizações relacionadas ao conceito de Kundalini e aos centros energéticos.", 
    fontFamily: DEFAULT_FONT_FAMILY 
  }
];
