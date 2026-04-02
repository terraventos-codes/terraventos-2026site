// Localized versions of oportunidadesData.
// Call getOportunidadesData(lang) to get the data in the correct language.

import type { OportunidadeDetalhe } from './oportunidadesData';

const oportunidadesDataByLang: Record<string, OportunidadeDetalhe[]> = {
  pt: [
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
      installments: 'A partir de 120 parcelas',
    },
    {
      id: '01',
      slug: 'villa-condudu-3',
      title: 'LUGAR DE EVENTO',
      image: '/VillaCondutuPaginaInicial/FINAL 14.png',
      badge: 'Lugar de Evento',
      propertyTitle: 'VILLA CONDURU III',
      location: 'Pre\u00E1, Cear\u00E1, Brasil',
      rating: 5,
      exclusiveText: '500 m\u00B2 | 3 Quartos | 2 Banheiros | 10 Projetos exclusivos',
      about: [
        'Seu Ref\u00FAgio Particular Beira-Mar no Pre\u00E1: A experi\u00EAncia definitiva de luxo r\u00FAstico e p\u00E9 na areia.',
        'A Villa Conduru III \u00E9 agora o seu camarote privativo para o melhor vento do mundo e eventos exclusivos. Localizada literalmente \u00E0 beira-mar, esta villa foi desenhada para quem busca a liberdade e exclusividade.',
        '1. Localiza\u00E7\u00E3o P\u00E9 na Areia: Esque\u00E7a traslados ou caminhadas longas. Aqui, o quintal \u00E9 a praia.',
        '2. Experi\u00EAncia de Condom\u00EDnio com Lazer Completo: A exclusividade de uma villa com a estrutura de um hotel boutique.',
        '3. Arquitetura que Respira (Design Bioclim\u00E1tico): Constru\u00EDda com materiais naturais como madeira, pedra e palha.',
        '4. Lifestyle e Conectividade Org\u00E2nica: A Villa elimina as barreiras entre voc\u00EA e o para\u00EDso.',
        '5. Suporte Concierge Terra Ventos: Sua \u00FAnica preocupa\u00E7\u00E3o ser\u00E1 o velejo.',
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
      price: 'Sob Consulta',
      installments: 'Consulte pacotes',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710',
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
        'Seguran\u00E7a Jur\u00EDdica Terra Ventos: Documenta\u00E7\u00E3o 100% revisada, com matr\u00EDcula individualizada.',
      ],
      infra: [
        'Localiza\u00E7\u00E3o prime e exclusiva',
        'Villa privativa com 10 projetos',
        'P\u00E9 na areia ',
        'Ideal para velejo'
      ],
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
        'Situada no requinte inspirado em um ref\u00FAgio de Nova York, esta resid\u00EAncia oferece 2.200 sq.ft totalmente alimentada por energia solar.',
        '1. Design Sustent\u00E1vel: Sistemas inteligentes com pain\u00E9is solares no teto.',
        '2. Conforto em Estilo Spa: 2 banheiros modernos imersivos.',
        '3. Transpar\u00EAncia Din\u00E2mica: Amplas paredes de vidro do ch\u00E3o ao teto.',
        '4. Privacidade Panor\u00E2mica: Terra\u00E7o privativo na cobertura.',
        '5. Conex\u00E3o Exclusiva: O contraste entre uma localiza\u00E7\u00E3o prime e paz isolada.',
      ],
      infra: ['Sistema de teto com pain\u00E9is solares', 'Paredes de vidro do ch\u00E3o ao teto', 'Terra\u00E7o privativo na cobertura', '2 Banheiros modernos', 'Localiza\u00E7\u00E3o prime isolada'],
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
  ],
  en: [
    {
      id: '04',
      slug: 'villa-prabhu',
      title: 'LAUNCH',
      image: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
      badge: 'LAUNCH',
      propertyTitle: 'VILLA PRABHU \u2014 PARACURU-CE',
      location: 'Paracuru, Cear\u00E1, Brazil',
      rating: 5,
      exclusiveText: 'Gated Community of Lots in Paracuru-CE with private lagoon, full leisure facilities and 100m from the beach. High standard and exclusivity in one of Cear\u00E1\u0027s most beautiful beaches',
      about: [
        'Villa Prabhu is a development planned by Bianchi Urbanismo, focused on offering quality of life and security.',
        'Located in a privileged region with ample green area and water resources, the project stands out for its intelligent urban planning and integration with nature.',
        'Exclusive Lots: Spacious units with private areas ranging from 242 m\u00B2 to over 600 m\u00B2.',
        'Phase Planning: Project divided into phases, with Phase 1 already consolidated and units available in Phase 2.',
        'Quality Urbanism: Infrastructure designed for well-being, with streets like Av. Prabhu and Rua Azalea.',
      ],
      infra: [
        'Direct Financing: Easy payment in up to 120 monthly installments.',
        'Ready to Invest: Documentation and sales table updated for 2026.',
        'Strategic Location: Planned blocks to ensure privacy and easy access to common areas.',
        'Natural Setting: Development surrounded by water and preserved vegetation.',
      ],
      facilities: ['Urbanistic Project', '120x Installments', 'Green Areas', 'Ready to Build'],
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
          label: 'Price Table (120 months) \u2013 Updated 2026', 
          url: '/VILLA_PRABHU/Tabela de Pre\u00E7os (120 meses).pdf', 
          legend: 'Detail of values, down payment, and monthly installments.' 
        },
        { 
          label: 'Availability Map (Masterplan)', 
          url: '/VILLA_PRABHU/Mapa de Disponibilidade (Masterplan).pdf', 
          legend: 'Visualize the exact location of each lot and green areas.' 
        }
      ],
      priceTag: 'Consult',
      price: 'On Request',
      installments: 'From 120 installments',
    },
    {
      id: '01',
      slug: 'villa-condudu-3',
      title: 'EVENT VENUE',
      image: '/VillaCondutuPaginaInicial/FINAL 14.png',
      badge: 'Event Venue',
      propertyTitle: 'VILLA CONDURU III',
      location: 'Pre\u00E1, Cear\u00E1, Brazil',
      rating: 5,
      exclusiveText: '500 m\u00B2 | 3 Bedrooms | 2 Bathrooms | 10 Exclusive Projects',
      about: [
        'Your Private Beachfront Retreat in Pre\u00E1: The ultimate rustic-luxury experience.',
        'Villa Conduru III is now your private spot for the best wind in the world and exclusive events. Located literally on the beachfront.',
        '1. Beachfront Location: Forget transfers or long walks. Here, the backyard is the beach.',
        '2. Resort-Style Experience: The exclusivity of a villa with the amenities of a boutique hotel.',
        '3. Breathable Architecture (Bioclimatic Design): Built with natural materials like wood, stone and thatch.',
        '4. Organic Lifestyle & Connectivity: The villa eliminates barriers between you and paradise.',
        '5. Terra Ventos Concierge Support: Your only concern will be sailing.',
      ],
      infra: [
        'Pool in the condominium',
        '3 large bedrooms',
        'Barbecue area',
        'Beachfront',
        'Kite-point',
        'Patricia Mureta Project',
        'Parking',
        '24h Security/Portaria'
      ],
      facilities: ['Bedrooms', 'Bathroom', 'Beachfront', 'Feet in the sand', 'Pool', 'Full kitchen', 'Air conditioning', 'Powder room', 'Parking', '24h Security'],
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
      priceTag: 'Daily',
      price: 'On Request',
      installments: 'Consult packages',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710',
    },
    {
      id: '02',
      slug: 'terrenos-bitupita',
      title: 'FOR SALE',
      image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
      badge: 'For Sale',
      propertyTitle: 'BEACHFRONT LAND IN BITUPIT\u00C1',
      location: 'Bitupit\u00E1, Cear\u00E1, Brazil',
      rating: 5,
      exclusiveText: '4,300 m\u00B2 | 10 Exclusive Land Projects',
      about: [
        'The Next Appreciation Frontier: Exclusivity, beachfront access, and the most strategic m\u00B2 on the West Coast.',
        'There are places the market has not yet discovered, but the wind has. Bitupit\u00E1 \u00E9 the last untouched refuge on the Costa dos Ventos Route.',
        'The New Foil Route: With constant winds for 6 to 8 months a year and perfect waters.',
        'Real Scarcity: A project of only 10 exclusive lots, guaranteeing low density and privacy absolute.',
        'Direct Beachfront Access: Properties with open sea frontage and direct beach access.',
        'Terra Ventos Legal Security: 100% reviewed documentation with individual registration.',
      ],
      infra: [
        'Prime and exclusive location',
        'Private Villa with 10 projects',
        'Feet in the sand',
        'Ideal for sailing/kite'
      ],
      facilities: ['Exclusive project', 'Beachfront', 'Close to amenities'],
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
      priceTag: 'Starting at',
      price: 'R$ 120,000',
      installments: 'Check availability',
    },
    {
      id: '03',
      slug: 'vila-do-ingles',
      title: 'INVESTMENT',
      image: '/viladoinglesPaginaInicial/Final 04 (1).png',
      badge: 'Investment',
      propertyTitle: 'VILA DO INGL\u00CAS',
      location: 'Pre\u00E1, Cear\u00E1, Brazil',
      rating: 5,
      exclusiveText: '2,200 sq.ft | 2 Bathrooms | 10 Exclusive Projects',
      about: [
        'The Essence of Sustainable Luxury: A unique blend of modern sustainability and tranquility.',
        'Inspired by a New York refuge, this residence offers 2,200 sq.ft entirely powered by solar energy.',
        '1. Sustainable Design: Smart systems with rooftop solar panels.',
        '2. Spa-Style Comfort: 2 modern immersive bathrooms.',
        '3. Dynamic Transparency: Wide floor-to-ceiling glass walls.',
        '4. Panoramic Privacy: Private rooftop terrace.',
        '5. Exclusive Connection: The contrast between a prime location and isolated peace.',
      ],
      infra: ['Rooftop solar panel system', 'Floor-to-ceiling glass walls', 'Private rooftop terrace', '2 Modern bathrooms', 'Prime isolated location'],
      facilities: ['!Beachfront', 'Air conditioning', '!Washing machine', '!Internet', 'Water heater', 'Refrigerator', 'Sofa', 'Wardrobe'],
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
      mapUrl: 'https://maps.google.com/maps?q=40.773565,-73.956555&z=15&output=embed',
      priceTag: 'Status',
      price: 'Coming Soon',
      installments: '',
    },
  ],
  es: [
    {
      id: '04',
      slug: 'villa-prabhu',
      title: 'LANZAMIENTO',
      image: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
      badge: 'LANZAMIENTO',
      propertyTitle: 'VILLA PRABHU \u2014 PARACURU-CE',
      location: 'Paracuru, Cear\u00E1, Brasil',
      rating: 5,
      exclusiveText: 'Condominio Cerrado de Lotes en Paracuru-CE con laguna privada, ocio completo y a 100m de la playa. Alto est\u00E1ndar y exclusividad en una de las playas m\u00E1s hermosas de Cear\u00E1',
      about: [
        'Villa Prabhu es un desarrollo planificado por Bianchi Urbanismo, enfocado en ofrecer calidad de vida y seguridad.',
        'Ubicado en una regi\u00F3n privilegiada con amplia \u00E1rea verde y recursos h\u00EDdricos, el proyecto destaca por su planificaci\u00F3n urbana inteligente e integraci\u00F3n con la naturaleza.',
        'Lotes Exclusivos: Unidades amplas com \u00E1reas privadas de 242 m\u00B2 a m\u00E1s de 600 m\u00B2.',
        'Planificaci\u00F3n de Etapas: Proyecto dividido en fases, con la Etapa 1 ya consolidada y unidades disponibles en la Etapa 2.',
        'Urbanismo de Calidad: Infraestructura pensada para el bienestar, con calles dise\u00F1adas como Av. Prabhu y Rua Azalea.',
      ],
      infra: [
        'Financiamiento Directo: Pago f\u00E1cil en hasta 120 cuotas mensuales.',
        'Listo para Invertir: Documentaci\u00F3n y tabla de ventas actualizada para 2026.',
        'Ubicaci\u00F3n Estrat\u00E9gica: Cuadras planificadas para garantizar privacidad y f\u00E1cil acceso a las \u00E1reas comunes.',
        'Escenaro Natural: Urbanizaci\u00F3n rodeada de agua y vegetaci\u00F3n preservada.',
      ],
      facilities: ['Proyecto Urban\u00EDstico', 'Parcelamiento en 120x', '\u00C1reas Verdes', 'Listo para Construir'],
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
          label: 'Tabla de Precios (120 meses) \u2013 Actualizada 2026', 
          url: '/VILLA_PRABHU/Tabela de Pre\u00E7os (120 meses).pdf', 
          legend: 'Detalle de valores, se\u00F1al y cuotas mensuales.' 
        },
        { 
          label: 'Mapa de Disponibilidad (Masterplan)', 
          url: '/VILLA_PRABHU/Mapa de Disponibilidade (Masterplan).pdf', 
          legend: 'Visualice la ubicaci\u00F3n exacta de cada lote y las \u00E1reas verdes.' 
        }
      ],
      priceTag: 'Consultar',
      price: 'Bajo Consulta',
      installments: 'A partir de 120 cuotas',
    },
    {
      id: '01',
      slug: 'villa-condudu-3',
      title: 'LUGAR DE EVENTOS',
      image: '/VillaCondutuPaginaInicial/FINAL 14.png',
      badge: 'Lugar de Eventos',
      propertyTitle: 'VILLA CONDURU III',
      location: 'Pre\u00E1, Cear\u00E1, Brasil',
      rating: 5,
      exclusiveText: '500 m\u00B2 | 3 Dormitorios | 2 Ba\u00F1os | 10 Proyectos exclusivos',
      about: [
        'Tu Refugio Privado Frente al Mar en Pre\u00E1: La experiencia definitiva de lujo r\u00FAstico.',
        'La Villa Conduru III es ahora tu palco privado para el mejor viento del mundo y eventos exclusivos.',
        '1. Ubicaci\u00F3n Frente al Mar: Olv\u00EDdate de traslados. Aqu\u00ED, el jard\u00EDn es la playa.',
        '2. Experiencia de Complejo Tur\u00EDstico: La exclusividad de una villa com las comodidades de un hotel boutique.',
        '3. Arquitectura Respirable (Dise\u00F1o Bioclim\u00E1tico): Construida con materiales naturales como madera, piedra y paja.',
        '4. Estilo de Vida y Conectividad Org\u00E2nica: La villa elimina las barreras entre t\u00FA y el para\u00EDso.',
        '5. Soporte Concierge Terra Ventos: Tu \u00FAnica preocupaci\u00F3n ser\u00E1 navegar.',
      ],
      infra: [
        'Piscina en el condominio',
        '3 habitaciones amplias',
        'Parilla',
        'Frente al mar',
        'Kite-point',
        'Proyecto Patricia Mureta',
        'Estacionamiento',
        'Seguridad 24h'
      ],
      facilities: ['Habitaciones', 'Ba\u00F1o', 'Frente al mar', 'Pies en la arena', 'Piscina', 'Cocina completa', 'Aire acondicionado', 'Aseo', 'Estacionamiento', 'Seguridad 24h'],
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
      priceTag: 'Diario',
      price: 'Bajo Consulta',
      installments: 'Consultar paquetes',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710',
    },
    {
      id: '02',
      slug: 'terrenos-bitupita',
      title: 'VENTA',
      image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
      badge: 'Venta',
      propertyTitle: 'TERRENOS FRENTE AL MAR EN BITUPIT\u00C1',
      location: 'Bitupit\u00E1, Cear\u00E1, Brasil',
      rating: 5,
      exclusiveText: '4.300 m\u00B2 | 10 Proyectos de Terrenos Exclusivos',
      about: [
        'Exclusividad, frente al mar y el m\u00B2 m\u00E1s estrat\u00E9gico de la Costa Oeste.',
        'Hay lugares que el mercado a\u00FAn no ha descubierto, pero el viento s\u00ED. Bitupit\u00E1 es el \u00FAltimo refugio intacto en la Ruta Costa dos Ventos.',
        'La Nueva Ruta del Foil: Con vientos constantes durante 6 a 8 meses al a\u00F1o y aguas perfectas.',
        'Escasez Real: Un proyecto de solo 10 lotes exclusivos, garantizando baja densidad y privacidad absoluta.',
        'Acceso Directo Frente al Mar: Propiedades con frente al mar libre y acceso directo a la playa.',
        'Seguridad Legal Terra Ventos: Documentaci\u00F3n 100% revisada con matr\u00EDcula individualizada.',
      ],
      infra: [
        'Ubicaci\u00F3n prime y exclusiva',
        'Villa privada con 10 proyectos',
        'Pies en la arena',
        'Ideal para la vela/kite'
      ],
      facilities: ['Proyecto exclusivo', 'Frente al mar', 'Cerca de servicios'],
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
      priceTag: 'Desde',
      price: 'R$ 120 MIL',
      installments: 'Consulte disponibilidad',
    },
    {
      id: '03',
      slug: 'vila-do-ingles',
      title: 'INVERSI\u00D3N',
      image: '/viladoinglesPaginaInicial/Final 04 (1).png',
      badge: 'Inversi\u00F3n',
      propertyTitle: 'VILA DO INGL\u00CAS',
      location: 'Pre\u00E1, Cear\u00E1, Brasil',
      rating: 5,
      exclusiveText: '2.200 sq.ft | 2 Ba\u00F1os | 10 Proyectos Exclusivos',
      about: [
        'La Esencia del Lujo Sostenible: Una mezcla \u00FAnica de sostenibilidad moderna y tranquilidad.',
        'Inspirada en un refugio de Nueva York, esta residencia ofrece 2.200 sq.ft completamente alimentada por energ\u00EDa solar.',
        '1. Dise\u00F1o Sostenible: Sistemas inteligentes con paneles solares en el techo.',
        '2. Comodidad Estilo Spa: 2 ba\u00F1os modernos e inmersivos.',
        '3. Transparencia Din\u00E1mica: Amplias paredes de vidrio del suelo al techo.',
        '4. Privacidad Panor\u00E1mica: Terraza privada en la azotea.',
        '5. Conexi\u00F3n Exclusiva: El contraste entre una ubicaci\u00F3n premium y paz aislada.',
      ],
      infra: ['Sistema de paneles solares en el techo', 'Paredes de vidrio del suelo al techo', 'Terraza privada en la azotea', '2 Ba\u00F1os modernos', 'Ubicaci\u00F3n prime aislada'],
      facilities: ['!Frente al mar', 'Aire acondicionado', '!Lavadora', '!Internet', 'Calentador de agua', 'Refrigerador', 'Sof\u00E1', 'Armario'],
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
      price: 'Pr\u00F3ximamente',
      installments: '',
    },
  ],
};

export function getOportunidadesData(lang: string): OportunidadeDetalhe[] {
  const baseLang = lang.split('-')[0];
  return oportunidadesDataByLang[baseLang] ?? oportunidadesDataByLang['pt'];
}
