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
  reservationUrl?: string;
};

export const oportunidadesData: OportunidadeDetalhe[] = [
  {
    id: '04',
    slug: 'villa-prabhu',
    title: 'LANÇAMENTO',
    image: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
    badge: 'LANÇAMENTO',
    propertyTitle: 'VILLA PRABHU — PARACURU-CE',
    location: 'Paracuru, Ceará, Brasil',
    rating: 5,
    exclusiveText: 'Condomínio Fechado de Lotes em Paracuru-CE com lagoa privativa, lazer completo e a 100m da praia. Alto padrão e exclusividade numa das mais belas praias do Ceará',
    about: [
      'O Villa Prabhu é um empreendimento planejado pela Bianchi Urbanismo, focado em oferecer qualidade de vida e segurança.',
      'Localizado em uma região privilegiada com ampla área verde e recursos hídricos, o projeto se destaca pelo planejamento urbano inteligente e integração com a natureza.',
      'Lotes Exclusivos: Unidades amplas com áreas privativas variando de 242 m² a mais de 600 m².',
      'Planejamento de Etapas: Projeto dividido em fases, com a Etapa 1 já consolidada e unidades disponíveis na Etapa 2.',
      'Urbanismo de Qualidade: Infraestrutura pensada para o bem-estar, com ruas projetadas como a Av. Prabhu e Rua Azalea.'
    ],
    infra: [
      'Financiamento Direto: Pagamento facilitado em até 120 parcelas mensais.',
      'Pronto para Investir: Documentação e tabela de vendas atualizadas para 2026.',
      'Localização Estratégica: Quadras planejadas para garantir privacidade e fácil acesso às áreas comuns.',
      'Cenário Natural: Empreendimento contornado por águas e vegetação preservada.'
    ],
    facilities: ['Projeto Urbanístico', 'Parcelamento em 120x', 'Áreas Verdes', 'Pronto para Construir'],
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
        label: 'Tabela de Preços (120 meses) – Atualizada 2026', 
        url: '/VILLA_PRABHU/Tabela de Preços (120 meses).pdf', 
        legend: 'Detalhamento de valores, sinal e parcelas mensais.' 
      },
      { 
        label: 'Mapa de Disponibilidade (Masterplan)', 
        url: '/VILLA_PRABHU/Mapa de Disponibilidade (Masterplan).pdf', 
        legend: 'Visualize a localização exata de cada lote e as áreas verdes.' 
      }
    ],
    priceTag: 'Consulte',
    price: 'Sob Consulta',
    installments: 'A partir de 120 parcelas'
  },
  {
    id: '05',
    slug: 'casa-matanzas',
    title: 'TEMPORADA',
    image: '/Matanzas/b211e036-b276-4446-a3be-7ba65f801a82.avif',
    badge: 'Temporada',
    propertyTitle: 'Casa Matanzas com banheira de hidromassagem/vista para o mar e floresta',
    location: 'Navidad, O\'Higgins, Chile',
    rating: 5,
    exclusiveText: 'Descubra Matanzas Paradise 🌊 Casa moderna confortavelmente equipada para 6 hóspedes, vistas panorâmicas espetaculares do mar e da floresta.',
    about: [
      'Descubra Matanzas Paradise: Casa moderna confortavelmente equipada para 6 hóspedes.',
      'Vistas panorâmicas espetaculares do mar e da floresta.',
      'Ideal para quem busca tranquilidade em um dos destinos mais emblemáticos de kitesurf e windsurf do Chile.',
      '1. Fora da rede: energia solar, espaço sustentável e em harmonia com a natureza.',
      '2. Estacionamento privativo no local.',
      '3. Localização Privilegiada: A apenas 7 min da Praia de Matanzas e La Vega de Pupuya.',
      '4. Terraço com banheira de hidromassagem (Jacuzzi privativa).',
      '5. Ambiente tranquilo, perto de restaurantes, supermercados e clubes esportivos.'
    ],
    infra: [
      'Vista para o oceano',
      'Vista para o vale',
      'Cozinha completa',
      'Wi-Fi (Starlink)',
      'Estacionamento gratuito',
      'Jacuzzi privativa',
      'Permitido animais',
      'Câmeras de segurança externa'
    ],
    facilities: ['Vista para o oceano', 'Vista para o vale', 'Cozinha', 'Wi-Fi', 'Estacionamento gratuito', 'Jacuzzi privativa', 'Permitido animais', 'Câmeras de segurança'],
    gallery: {
      main: '/Matanzas/3b77d98c-5cd0-4f51-816a-6e42748720d2.avif',
      sideTop: '/Matanzas/4d4b9c44-ad67-43ad-8f6b-6497f7b6e7ea.avif',
      sideBottom: '/Matanzas/59c1aa44-cc72-45be-a883-7724e0f27f11.avif',
      extra: [
        '/Matanzas/90d53b04-d0e5-4165-8ddc-2aac9dcfc2fb.avif',
        '/Matanzas/369ef9fe-3cde-4ff2-b972-97dc02848241.avif',
        '/Matanzas/6645f7b5-7850-4a44-8ff9-2f81fa7ef623.avif',
        '/Matanzas/cd0910d3-112f-4ef6-ac70-86906d62bd1c.avif',
        '/Matanzas/f65a0d94-74da-40f4-9cf3-c6a9262e1be6.avif'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-33.95,-71.86&z=15&output=embed',
    priceTag: 'Diária',
    price: 'Sob Consulta',
    installments: 'Consulte pacotes',
    reservationUrl: 'https://www.airbnb.com.br/rooms/1495622230762379698?unique_share_id=e222b343-72c6-400c-bec4-afd4286d8719&viralityEntryPoint=1&s=76&source_impression_id=p3_1775581234_P3rzyIdyGvGibmTw'
  },
  {
    id: '01',
    slug: 'villa-condudu-3',
    title: 'TEMPORADA',
    image: '/VillaCondutuPaginaInicial/FINAL 14.png',
    badge: 'Lugar de Evento',
    propertyTitle: 'VILA CONDURU III',
    location: 'Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '500 m² | 3 Quartos | 2 Banheiros | 10 Projetos exclusivos',
    about: [
      'Seu Refúgio Particular Beira-Mar no Preá: A experiência definitiva de luxo rústico e pé na areia.',
      'A Vila Conduru III não é apenas uma casa de temporada; é o seu camarote privativo para o melhor vento do mundo. Localizada literalmente à beira-mar, esta vila foi desenhada para quem busca a liberdade de acordar e ter o oceano como extensão do seu jardim.',
      '1. Localização Front-Mar: Esqueça traslados ou longas caminhadas. Aqui, o quintal é a praia.',
      '2. Experiência de Resort: A exclusividade de uma villa com as comodidades de um hotel boutique.',
      '3. Arquitetura Respirável (Bioclimática): Construída com materiais naturais como madeira, pedra e palha.',
      '4. Lifestyle e Conectividade Orgânica: A villa elimina as barreiras entre você e o paraíso.',
      '5. Suporte Concierge Terra Ventos: Sua única preocupação será velejar.'
    ],
    infra: [
      'Piscina no condominio',
      '3 quartos amplos',
      'Churrasqueira',
      'Beira-mar',
      'Kite-point',
      'Projeto Patricia Mureta',
      'Estacionamento',
      'Portaria 24h'
    ],
    facilities: ['Quartos', 'Banheiro', 'Beira-mar', 'Pé na areia', 'Piscina', 'Cozinha completa', 'Ar condicionado', 'Lavabo', 'Estacionamento', 'Portaria 24h'],
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
    priceTag: 'Diária',
    price: 'Sob Consulta',
    installments: 'Consulte pacotes',
    reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710'
  },
  {
    id: '02',
    slug: 'terrenos-bitupita',
    title: 'VENDA',
    image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
    badge: 'Venda',
    propertyTitle: 'TERRENOS PÉ NA AREIA EM BITUPITÁ',
    location: 'Bitupitá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '4300 m² | 10 Projetos Terrenos exclusivos',
    about: [
      'A Próxima Fronteira de Valorização: Exclusividade, pé na areia e o m² mais estratégico do Litoral Oeste.',
      'Existem lugares que o mercado ainda não descobriu, mas o vento sim. Bitupitá é o último refúgio intocado na Rota Costa dos Ventos.',
      'A Nova Rota do Foil: Com ventos constantes durante 6 a 8 meses por ano e águas perfeitas.',
      'Escassez Real: Um projeto de apenas 10 lotes exclusivos, garantindo baixa densidade e privacidade absoluta.',
      'Pé na Areia com Acesso Direto: Propriedades com frente mar livre e acesso direto à praia.',
      'Segurança Jurídica Terra Ventos: Documentação 100% revisada, com matrícula individualizada.'
    ],
    infra: [
      'Localização prime e exclusiva',
      'Villa privativa com 10 projetos',
      'Pé na areia ',
      'Ideal para velejo'
    ],
    facilities: ['Projeto exclusivo', 'Beira-mar', 'Próximo a comodidades'],
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
    propertyTitle: 'VILA DO INGLÊS',
    location: 'Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '2.200 sq.ft | 2 Banheiros | 10 Projetos exclusivos',
    about: [
      'A Essência do Luxo Sustentável: Uma mistura única de sustentabilidade moderna e tranquilidade.',
      'Situada no requinte inspirado em um refúgio de Nova York, esta residência oferece 2.200 sq.ft totalmente alimentada por energia solar, tornando-a o seu santuário perfeito a poucos passos da pulsão cosmopolita.',
      '1. Design Sustentável: Sistemas inteligentes com painéis solares no teto para garantir total autonomia energética e mínimo impacto ambiental.',
      '2. Conforto em Estilo Spa: Conta com 2 banheiros modernos imersivos desenhados detalhadamente para promover relaxamento absoluto.',
      '3. Transparência Dinâmica: Amplas paredes de vidro do chão ao teto, garantindo claridade natural abundante do nascer ao pôr do sol.',
      '4. Privacidade Panorâmica: Um espacoso terraço privativo na cobertura, perfeitamente construído para momentos inesquecíveis ao ar livre.',
      '5. Conexão Exclusiva: O contraste exato entre o acesso a uma localização prime e uma paz isolada.'
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
];
