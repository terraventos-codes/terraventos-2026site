export type OportunidadeDetalhe = {
  id: string;
  slug: string;
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
    extra?: string[];
  };
  mapImage: string;
  mapUrl?: string;
  videoSources?: string[];
  documents?: { label: string; url: string; legend: string }[];
  priceTag: string;
  price: string;
  installments: string;
};

export const oportunidadesData: OportunidadeDetalhe[] = [
  {
    id: '01',
    slug: 'villa-condudu-3',
    title: 'TEMPORADA',
    image: '/VillaCondutuPaginaInicial/FINAL 14.png',
    badge: 'Lugar de Evento',
    propertyTitle: 'VILLA CONDURU III',
    location: 'Pre\u00E1, Cear\u00E1, Brasil',
    rating: 5,
    exclusiveText: '500 m\u00B2 | 3 Quartos | 2 Banheiros | 10 Projetos exclusivos',
    about: [
      'Seu Ref\u00FAgio Particular Beira-Mar no Pre\u00E1: A experi\u00EAncia definitiva de luxo r\u00FAstico e p\u00E9 na areia.',
      'A Villa Conduru III n\u00E3o \u00E9 apenas uma casa de temporada; \u00E9 o seu camarote privativo para o melhor vento do mundo. Localizada literalmente \u00E0 beira-mar, esta villa foi desenhada para quem busca a liberdade de acordar e ter o oceano como extens\u00E3o do seu jardim.',
      '1. Localiza\u00E7\u00E3o Front-Mar: Esque\u00E7a traslados ou longas caminhadas. Aqui, o quintal \u00E9 a praia.',
      '2. Experi\u00EAncia de Resort: A exclusividade de uma villa com as comodidades de um hotel boutique.',
      '3. Arquitetura Respir\u00E1vel (Bioclim\u00E1tica): Constru\u00EDda com materiais naturais como madeira, pedra e palha.',
      '4. Lifestyle e Conectividade Org\u00E2nica: A villa elimina as barreiras entre voc\u00EA e o para\u00EDso.',
      '5. Suporte Concierge Terra Ventos: Sua \u00FAnica preocupa\u00E7\u00E3o ser\u00E1 velejar.'
    ],
    infra: [
      '5 Amplos Quartos',
      '3.800 sq.ft de Living Moderno',
      'Janelas do Ch\u00E3o ao Teto',
      'Piscina Privativa e Lounge Externo',
      'Localizado no Exclusivo Bel Air'
    ],
    facilities: ['Quartos', 'Banheiro', 'Beira-mar', 'P\u00E9 na areia', 'Piscina', 'Cozinha completa', 'Ar condicionado', 'Lavabo', 'Estacionamento', 'Portaria 24h'],
    gallery: {
      main: '/VillaCondutuPaginaInicial/Final 01 (2).png',
      sideTop: '/VillaCondutuPaginaInicial/FINAL 02 (1).png',
      sideBottom: '/VillaCondutuPaginaInicial/Final 02 (2).png',
      extra: [
        '/VillaCondutuPaginaInicial/FINAL 03 (1).png',
        '/VillaCondutuPaginaInicial/FINAL 08.png',
        '/VillaCondutuPaginaInicial/FINAL 09.png',
        '/VillaCondutuPaginaInicial/FINAL 12.png',
        '/VillaCondutuPaginaInicial/FINAL 13.png'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=34.100222,-118.450709&z=15&output=embed',
    priceTag: 'Di\u00E1ria',
    price: 'R$ 1.200',
    installments: 'Consulte pacotes'
  },
  {
    id: '02',
    slug: 'terrenos-bitupita',
    title: 'VENDA',
    image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
    badge: 'Venda',
    propertyTitle: 'TERRENOS P\u00C9 NA AREIA EM BITUPIT\u00C1',
    location: 'Bitupit\u00E1, Cear\u00E1, Brasil',
    rating: 5,
    exclusiveText: '4300 m\u00B2 | 10 Projetos Terrenos exclusivos',
    about: [
      'A Pr\u00F3xima Fronteira de Valoriza\u00E7\u00E3o: Exclusividade, p\u00E9 na areia e o m\u00B2 mais estrat\u00E9gico do Litoral Oeste.',
      'Existem lugares que o mercado ainda n\u00E3o descobriu, mas o vento sim. Bitupit\u00E1 \u00E9 o \u00FAltimo ref\u00FAgio intocado na Rota Costa dos Ventos.',
      'A Nova Rota do Foil: Com ventos constantes durante 6 a 8 meses por ano e \u00E1guas perfeitas.',
      'Escassez Real: Um projeto de apenas 10 lotes exclusivos, garantindo baixa densidade e privacidade absoluta.',
      'P\u00E9 na Areia com Acesso Direto: Propriedades com frente mar livre e acesso direto \u00E0 praia.',
      'Seguran\u00E7a Jur\u00EDdica Terra Ventos: Documenta\u00E7\u00E3o 100% revisada, com matr\u00EDcula individualizada.'
    ],
    infra: ['Amplo layout de 3 quartos', 'Piscina privativa e coqueiral', 'Infraestrutura completa em todo o projeto', 'Janelas de vidro do ch\u00E3o ao teto', 'Localiza\u00E7\u00E3o prime e exclusiva'],
    facilities: ['Projeto exclusivo', 'Beira-mar', 'Pr\u00F3ximo a comodidades'],
    gallery: {
      main: '/bitupitaPaginaIndividual/DJI_20251207012123_0102_D.jpg',
      sideTop: '/bitupitaPaginaIndividual/DJI_20251019210638_0111_D.jpg',
      sideBottom: '/bitupitaPaginaIndividual/DJI_20251020010202_0198_D.jpg',
      extra: [
        '/bitupitaPaginaIndividual/DJI_20251019210524_0108_D.jpg',
        '/bitupitaPaginaIndividual/DJI_20251020005753_0185_D.jpg',
        '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
        '/bitupitaPaginaIndividual/DJI_20251207012338_0119_D.jpg',
        '/bitupitaPaginaIndividual/BITUparaiso.jpg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.88825,-41.268056&z=15&output=embed',
    priceTag: 'A partir de',
    price: 'R$ 120 MIL',
    installments: 'Consulte disponibilidade',
  },
  {
    id: '03',
    slug: 'vila-do-ingles',
    title: 'INVESTIMENTO',
    image: '/viladoinglesPaginaInicial/Final 04 (1).png',
    badge: 'Investimento',
    propertyTitle: 'VILA DO INGL\u00CAS',
    location: 'Pre\u00E1, Cear\u00E1, Brasil',
    rating: 5,
    exclusiveText: '2.200 sq.ft | 2 Banheiros | 10 Projetos exclusivos',
    about: [
      'A Ess\u00EAncia do Luxo Sustent\u00E1vel: Uma mistura \u00FAnica de sustentabilidade moderna e tranquilidade.',
      'Situada no requinte inspirado em um ref\u00FAgio de Nova York, esta resid\u00EAncia oferece 2.200 sq.ft totalmente alimentada por energia solar, tornando-a o seu santu\u00E1rio perfeito a poucos passos da pulsa\u00E7\u00E3o cosmopolita.',
      '1. Design Sustent\u00E1vel: Sistemas inteligentes com pain\u00E9is solares no teto para garantir total autonomia energ\u00E9tica e m\u00EDnimo impacto ambiental.',
      '2. Conforto em Estilo Spa: Conta com 2 banheiros modernos imersivos desenhados detalhadamente para promover relaxamento absoluto.',
      '3. Transpar\u00EAncia Din\u00E2mica: Amplas paredes de vidro do ch\u00E3o ao teto, garantindo claridade natural abundante do nascer ao p\u00F4r do sol.',
      '4. Privacidade Panor\u00E2mica: Um espa\u00E7oso terra\u00E7o privativo na cobertura, perfeitamente constru\u00EDdo para momentos inesquec\u00EDveis ao ar livre.',
      '5. Conex\u00E3o Exclusiva: O contraste exato entre o acesso a uma localiza\u00E7\u00E3o prime e uma paz isolada.'
    ],
    infra: [
      'Sistema de teto com pain\u00E9is solares',
      'Paredes de vidro do ch\u00E3o ao teto',
      'Terra\u00E7o privativo na cobertura',
      '2 Banheiros modernos',
      'Localiza\u00E7\u00E3o prime isolada'
    ],
    facilities: ['!Beira-mar', 'Ar-condicionado', '!M\u00E1quina de lavar', '!Internet', 'Aquecedor de \u00E1gua', 'Geladeira', 'Sof\u00E1', 'Guarda-roupa'],
    gallery: {
      main: '/viladoinglesPaginaInicial/FINAL 09 (1).png',
      sideTop: '/viladoinglesPaginaInicial/FINAL 01 (3).png',
      sideBottom: '/viladoinglesPaginaInicial/Final 02 (2).png',
      extra: [
        '/viladoinglesPaginaInicial/FINAL 08 (1).png',
        '/viladoinglesPaginaInicial/Final 05 (1).png',
        '/viladoinglesPaginaInicial/Final 06 (1).png',
        '/viladoinglesPaginaInicial/Final 07 (1).png',
        '/viladoinglesPaginaInicial/FINAL 02 (3).png'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.4146184,-39.046461&z=15&output=embed',
    priceTag: 'Status',
    price: 'Em Breve',
    installments: '',
  },
  {
    id: '04',
    slug: 'villa-prabhu',
    title: 'LAN\u00C7AMENTO',
    image: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
    badge: 'LAN\u00C7AMENTO',
    propertyTitle: 'VILLA PRABHU \u2014 PARACURU-CE',
    location: 'Paracuru, Cear\u00E1, Brasil',
    rating: 5,
    exclusiveText: 'Condom\u00EDnio Fechado de Lotes em Paracuru-CE com lagoa privativa, lazer completo e a 100m da praia. Alto padr\u00E3o e exclusividade numa das mais belas praias do Cear\u00E1',
    about: [
      'O Villa Prabhu \u00E9 um empreendimento planejado pela Bianchi Urbanismo, focado em oferecer qualidade de vida e seguran\u00E7a.',
      'Localizado em uma regi\u00E3o privilegiada com ampla \u00E1rea verde e recursos h\u00EDdricos, o projeto se destaca pelo planejamento urbano inteligente e integra\u00E7\u00E3o com a natureza.',
      'Lotes Exclusivos: Unidades amplas com \u00E1reas privativas variando de 242 m\u00B2 a mais de 600 m\u00B2.',
      'Planejamento de Etapas: Projeto dividido em fases, com a Etapa 1 j\u00E1 consolidada e unidades dispon\u00EDveis na Etapa 2.',
      'Urbanismo de Qualidade: Infraestrutura pensada para o bem-estar, com ruas projetadas como a Av. Prabhu e Rua Azalea.'
    ],
    infra: [
      'Financiamento Direto: Pagamento facilitado em at\u00E9 120 parcelas mensais.',
      'Pronto para Investir: Documenta\u00E7\u00E3o e tabela de vendas atualizadas para 2026.',
      'Localiza\u00E7\u00E3o Estrat\u00E9gica: Quadras planejadas para garantir privacidade e f\u00E1cil acesso \u00E0s \u00E1reas comuns.',
      'Cen\u00E1rio Natural: Empreendimento contornado por \u00E1guas e vegeta\u00E7\u00E3o preservada.'
    ],
    facilities: ['Projeto Urban\u00EDstico', 'Parcelamento em 120x', '\u00C1reas Verdes', 'Pronto para Construir'],
    gallery: {
      main: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
      sideTop: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56.jpeg',
      sideBottom: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (2).jpeg',
      extra: [
        '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (1).jpeg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.4146184,-39.046461&z=15&output=embed',
    videoSources: [
      'https://player.vimeo.com/video/1179327775?h=c94b7f80f1',
      'https://player.vimeo.com/video/1179327749?h=9d3c5f80f1',
      'https://player.vimeo.com/video/1179327705?h=7a1b5f80f1',
      'https://player.vimeo.com/video/1179327631?h=2e9d5f80f1'
    ],
    documents: [
      { 
        label: 'Tabela de Pre\u00E7os (120 meses) \u2013 Atualizada 2026', 
        url: '/VILLA_PRABHU/Tabela de Pre\u00E7os (120 meses).pdf', 
        legend: 'Detalhamento de valores, sinal e parcelas mensais.' 
      },
      { 
        label: 'Mapa de Disponibilidade (Masterplan)', 
        url: '/VILLA_PRABHU/Mapa de Disponibilidade (Masterplan).pdf', 
        legend: 'Visualize a localiza\u00E7\u00E3o exata de cada lote e as \u00E1reas verdes.' 
      }
    ],
    priceTag: 'Consulte',
    price: 'Sob Consulta',
    installments: 'A partir de 120 parcelas'
  },

];
