export type OportunidadeDetalhe = {
  id: string;
  title: string;
  image: string;
  badge: string;
  propertyTitle: string;
  location: string;
  rating: number;
  exclusiveText: string;
  about: string[];
  infra: string[];
  facilities: string[];
  gallery: {
    main: string;
    sideTop: string;
    sideBottom: string;
  };
  mapImage: string;
  mapUrl?: string;
  priceTag: string;
  price: string;
  installments: string;
};

export const oportunidadesData: OportunidadeDetalhe[] = [
  {
    id: '01',
    title: 'TEMPORADA',
    image: '/imoveis.avif',
    badge: 'Temporada',
    propertyTitle: 'VILLA CONDUDU III',
    location: 'Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '500 m² | 3 Quartos | 2 Banheiros | 10 Projetos exclusivos',
    about: [
      'Seu Refúgio Particular Beira-Mar no Preá: A experiência definitiva de luxo rústico e pé na areia.',
      'A Villa Conduru III não é apenas uma casa de temporada; é o seu camarote privativo para o melhor vento do mundo. Localizada literalmente à beira-mar, esta villa foi desenhada para quem busca a liberdade de acordar com o som das ondas e a conveniência de estar a poucos passos dos principais spots de kite e wingfoil do Preá.',
      '1. Localização Pé na Areia: Esqueça traslados ou caminhadas longas. Aqui, o quintal é a praia. Você está na primeira linha do mar, no coração do Preá, cercado pelos beach clubs mais exclusivos e com acesso direto para montar seu equipamento e velejar na hora que o vento bater.',
      '2. Experiência de Condomínio com Lazer Completo: A exclusividade de uma villa com a estrutura de um hotel boutique. Desfrute da piscina privativa do condomínio, perfeita para relaxar após um downwind, rodeada por um paisagismo tropical que garante sombra, frescor e total privacidade para você e sua família.',
      '3. Arquitetura que Respira (Design Bioclimático): Sinta a essência do luxo rústico. Construída com materiais naturais como madeira, pedra e palha, a Villa utiliza a inteligência do Estudo dos Ventos para garantir ventilação natural cruzada. É o conforto térmico perfeito: ambientes amplos, iluminados e naturalmente frescos, sem perder a conexão com a natureza.',
      '4. Lifestyle e Conectividade Orgânica: A Villa elimina as barreiras entre você e o paraíso. As áreas sociais são integradas ao jardim, criando o cenário ideal para um café da manhã ao ar livre ou um sunset privativo. É o lugar onde o tempo desacelera e a rotina é ditada apenas pela maré e pelo vento.',
      '5. Suporte Concierge Terra Ventos: Sua única preocupação será o velejo. Nossa equipe oferece suporte completo para tornar sua estadia impecável.'
    ],
    infra: [
      '5 Amplos Quartos',
      '3.800 sq.ft de Living Moderno',
      'Janelas do Chão ao Teto',
      'Piscina Privativa e Lounge Externo',
      'Localizado no Exclusivo Bel Air'
    ],
    facilities: ['Beira-mar', 'Ar-condicionado', 'Máquina de lavar', 'Internet', 'Aquecedor de água', 'Geladeira', 'Sofá', 'Guarda-roupa'],
    gallery: {
      main: '/VillaCondutuPaginaInicial/qSkzszwBGosMA24iRMnSHYdw5E.avif',
      sideTop: '/VillaCondutuPaginaInicial/hlMJdpgBPs7u1u2sLpAJFjQOU4.avif',
      sideBottom: '/VillaCondutuPaginaInicial/eunH3KRMAhY4IEVAD4AQWQAEftY.webp',
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=34.100222,-118.450709&z=15&output=embed',
    priceTag: 'Diária Referência',
    price: 'R$ 1.200',
    installments: 'Tarifa em alta temporada c/ café incluso',
  },
  {
    id: '02',
    title: 'TERRENOS',
    image: '/terrenos.avif',
    badge: 'Venda',
    propertyTitle: 'TERRENOS PÉ NA AREIA EM BITUPITÁ',
    location: 'Bitupitá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '4300 m² | 10 Projetos Terrenos exclusivos',
    about: [
      'A Próxima Fronteira de Valorização: Exclusividade, pé na areia e o m² mais estratégico do Litoral Oeste.',
      'Existem lugares que o mercado ainda não descobriu, mas o vento sim. Bitupitá é o último refúgio intocado na Rota Costa dos Ventos. Um destino que une a autenticidade de uma vila de pescadores com o potencial técnico para se tornar o próximo grande polo do turismo de luxo rústico e dos esportes de foil no Ceará.',
      'Oportunidade de entrada com valores de m² significativamente abaixo de polos maduros como Preá e Jericoacoara, mas com o mesmo DNA de valorização.',
      'A Nova Rota do Foil: Com ventos constantes durante 6 a 8 meses por ano e águas perfeitas, Bitupitá já está no radar dos velejadores europeus e americanos de Wingfoil.',
      'Escassez Real: Um projeto de apenas 10 lotes exclusivos, garantindo baixa densidade, privacidade absoluta e alta liquidez futura.',
      'Diferenciais Técnicos do Projeto:',
      'Pé na Areia com Acesso Direto: Propriedades com frente mar livre, garantindo uma vista perene e o privilégio do acesso direto à praia.',
      'Segurança Jurídica Terra Ventos: Documentação 100% revisada, com matrícula individualizada e conformidade ambiental para construção imediata.',
      'Inteligência Bioclimática: Lotes planejados para aproveitar a ventilação natural cruzada, reduzindo custos operacionais e maximizando o conforto térmico.'
    ],
    infra: [
      'Amplo layout de 3 quartos',
      'Piscina privativa e coqueiral',
      'Infraestrutura completa em todo o projeto',
      'Janelas de vidro do chão ao teto',
      'Localização prime e exclusiva',
    ],
    facilities: ['Beira-mar', '!Ar-condicionado', '!Máquina de lavar', 'Internet', '!Aquecedor de água', 'Geladeira', 'Sofá', '!Guarda-roupa'],
    gallery: {
      main: '/bitupitaPaginaIndividual/01.avif',
      sideTop: '/bitupitaPaginaIndividual/02.avif',
      sideBottom: '/bitupitaPaginaIndividual/03.avif',
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.88825,-41.268056&z=15&output=embed',
    priceTag: 'Propriedade à venda',
    price: 'R$ 120.000',
    installments: 'Entrada + 5x de 30.000',
  },
  {
    id: '03',
    title: 'PROJETOS',
    image: '/projetos.avif',
    badge: 'Lançamento',
    propertyTitle: 'VILA DO INGLÊS',
    location: 'Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '2.200 sq.ft | 2 Banheiros | 10 Projetos exclusivos',
    about: [
      'A Essência do Luxo Sustentável: Uma mistura única de sustentabilidade moderna e tranquilidade.',
      'Situada no requinte inspirado em um refúgio de Nova York, esta residência The Penthouse oferece 2.200 sq.ft totalmente alimentada por energia solar, tornando-a o seu santuário perfeito a poucos passos da pulsação cosmopolita.',
      '1. Design Sustentável: Sistemas inteligentes com painéis solares no teto para garantir total autonomia energética e mínimo impacto ambiental.',
      '2. Conforto em Estilo Spa: Conta com 2 banheiros modernos imersivos desenhados detalhadamente para promover relaxamento absoluto.',
      '3. Transparência Dinâmica: Amplas paredes de vidro do chão ao teto, garantindo claridade natural abundante do nascer ao pôr do sol.',
      '4. Privacidade Panorâmica: Um espaçoso terraço privativo na cobertura, perfeitamente construído para momentos inesquecíveis ao ar livre.',
      '5. Conexão Exclusiva: O contraste exato entre o acesso a uma localização prime, digna de uma Penthouse no Central Park, e uma paz isolada.'
    ],
    infra: [
      'Sistema de teto com painéis solares',
      'Paredes de vidro do chão ao teto',
      'Terraço privativo na cobertura',
      '2 Banheiros modernos',
      'Localização prime isolada'
    ],
    facilities: ['!Beira-mar', 'Ar-condicionado', '!Máquina de lavar', '!Internet', 'Aquecedor de água', 'Geladeira', 'Sofá', 'Guarda-roupa'],
    gallery: {
      main: '/viladoinglesPaginaInicial/01.avif',
      sideTop: '/viladoinglesPaginaInicial/02.webp',
      sideBottom: '/viladoinglesPaginaInicial/03.avif',
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=40.773565,-73.956555&z=15&output=embed',
    priceTag: 'Propriedade Investimento',
    price: 'R$ 100.000',
    installments: '',
  },
];
