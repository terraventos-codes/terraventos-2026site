// Localized versions of oportunidadesData.
// Call getOportunidadesData(lang) to get the data in the correct language.

import type { OportunidadeDetalhe } from './oportunidadesData';

const oportunidadesDataByLang: Record<string, OportunidadeDetalhe[]> = {
  pt: [
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
      installments: 'A partir de 120 parcelas',
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
        main: '/Matanzas/b211e036-b276-4446-a3be-7ba65f801a82.avif',
        sideTop: '/Matanzas/24d1320e-ff30-4707-882b-e14889b2ea9f.avif',
        sideBottom: '/Matanzas/305fa07a-3d45-4f82-9123-3e865b38faba.avif',
        extra: [
          '/Matanzas/c51be852-eadb-4d58-9b5c-4913e56a873b.avif',
          '/Matanzas/a932e2b8-9f65-46d6-888b-ec57fe433f45.avif',
          '/Matanzas/59c1aa44-cc72-45be-a883-7724e0f27f11.avif'
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
      badge: 'Temporada',
      propertyTitle: 'VILA CONDURU III',
      location: 'Preá, Ceará, Brasil',
      rating: 5,
      exclusiveText: '153 m² | 3 SuÍtes | 10 Projetos exclusivos',
      about: [
        'Seu Refúgio Particular Beira-Mar no Preá: A experiência definitiva de luxo rústico e pé na areia.',
        'A Vila Conduru III é agora o seu camarote privativo para o melhor vento do mundo e eventos exclusivos. Localizada literalmente à beira-mar, esta vila foi desenhada para quem busca a liberdade e exclusividade.',
        '1. Localização Pé na Areia: Esqueça traslados ou caminhadas longas. Aqui, o quintal é a praia.',
        '2. Experiência de Condomínio com Lazer Completo: A exclusividade de uma vila com a estrutura de um hotel boutique.',
        '3. Arquitetura que Respira (Design Bioclimático)',
        '4. Lifestyle e Conectividade Orgânica: A Villa elimina as barreiras entre você e o paraíso.',
        '5. Suporte Concierge Terra Ventos: Sua única preocupação será o velejo.',
      ],
      infra: [
        'Piscina no condominio',
        '3 SuÍtes amplas',
        'Churrasqueira',
        'Beira-mar',
        'Kite-point',
        'Projeto Patricia Mureta',
        'Estacionamento',
        'Portaria 24h'
      ],
      facilities: ['3 SuÍtes', 'Beira-mar', 'Pé na areia', 'Piscina', 'Cozinha completa', 'Ar condicionado', 'Lavabo', 'Estacionamento', 'Portaria 24h'],
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
      reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710',
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
        'Segurança Jurídica Terra Ventos: Documentação 100% revisada, com matrícula individualizada.',
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
        'Situada no requinte inspirado em um refúgio de Nova York, esta residência oferece 2.200 sq.ft totalmente alimentada por energia solar.',
        '1. Design Sustentável: Sistemas inteligentes com painéis solares no teto.',
        '2. Conforto em Estilo Spa: 2 banheiros modernos imersivos.',
        '3. Transparência Dinâmica: Amplas paredes de vidro do chão ao teto.',
        '4. Privacidade Panorâmica: Terraço privativo na cobertura.',
        '5. Conexão Exclusiva: O contraste entre uma localização prime e paz isolada.',
      ],
      infra: ['Sistema de teto com painéis solares', 'Paredes de vidro do chão ao teto', 'Terraço privativo na cobertura', '2 Banheiros modernos', 'Localização prime isolada'],
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
  ],
  en: [
    {
      id: '04',
      slug: 'villa-prabhu',
      title: 'LAUNCH',
      image: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
      badge: 'LAUNCH',
      propertyTitle: 'VILLA PRABHU — PARACURU-CE',
      location: 'Paracuru, Ceará, Brazil',
      rating: 5,
      exclusiveText: 'Gated Community of Lots in Paracuru-CE with private lagoon, full leisure facilities and 100m from the beach. High standard and exclusivity in one of Ceará\u0027s most beautiful beaches',
      about: [
        'Villa Prabhu is a development planned by Bianchi Urbanismo, focused on offering quality of life and security.',
        'Located in a privileged region with ample green area and water resources, the project stands out for its intelligent urban planning and integration with nature.',
        'Exclusive Lots: Spacious units with private areas ranging from 242 m² to over 600 m².',
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
          label: 'Price Table (120 months) – Updated 2026', 
          url: '/VILLA_PRABHU/Tabela de Preços (120 meses).pdf', 
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
      id: '05',
      slug: 'casa-matanzas',
      title: 'STAY',
      image: '/Matanzas/b211e036-b276-4446-a3be-7ba65f801a82.avif',
      badge: 'Stay',
      propertyTitle: 'Casa Matanzas with hot tub / mountain and sea view',
      location: 'Navidad, O\'Higgins, Chile',
      rating: 5,
      exclusiveText: 'Discover Matanzas Paradise 🌊 Modern house comfortably equipped for 6 guests, spectacular panoramic sea and forest views.',
      about: [
        'Discover Matanzas Paradise: Modern house comfortably equipped for 6 guests.',
        'Spectacular panoramic sea and forest views.',
        'Ideal for those seeking tranquility in one of Chile\'s most iconic kitesurfing and windsurfing destinations.',
        '1. Off-grid: solar energy, sustainable space in harmony with nature.',
        '2. Private parking on site.',
        '3. Prime Location: Just 7 min from Matanzas Beach and La Vega de Pupuya.',
        '4. Terrace with hot tub (private Jacuzzi).',
        '5. Quiet environment, close to restaurants, supermarkets, and sports clubs.'
      ],
      infra: [
        'Ocean view',
        'Valley view',
        'Full kitchen',
        'Wi-Fi (Starlink)',
        'Free parking',
        'Private hot tub',
        'Pets allowed',
        'External security cameras'
      ],
      facilities: ['Ocean view', 'Valley view', 'Full kitchen', 'Wi-Fi', 'Free parking', 'Private hot tub', 'Pets allowed', 'External security cameras'],
      gallery: {
        main: '/Matanzas/b211e036-b276-4446-a3be-7ba65f801a82.avif',
        sideTop: '/Matanzas/24d1320e-ff30-4707-882b-e14889b2ea9f.avif',
        sideBottom: '/Matanzas/305fa07a-3d45-4f82-9123-3e865b38faba.avif',
        extra: [
          '/Matanzas/c51be852-eadb-4d58-9b5c-4913e56a873b.avif',
          '/Matanzas/a932e2b8-9f65-46d6-888b-ec57fe433f45.avif',
          '/Matanzas/59c1aa44-cc72-45be-a883-7724e0f27f11.avif'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-33.95,-71.86&z=15&output=embed',
      priceTag: 'Daily',
      price: 'On Request',
      installments: 'Consult packages',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1495622230762379698?unique_share_id=e222b343-72c6-400c-bec4-afd4286d8719&viralityEntryPoint=1&s=76&source_impression_id=p3_1775581234_P3rzyIdyGvGibmTw'
    },
    {
      id: '01',
      slug: 'villa-condudu-3',
      title: 'STAY',
      image: '/VillaCondutuPaginaInicial/FINAL 14.png',
      badge: 'Stay',
      propertyTitle: 'VILA CONDURU III',
      location: 'Preá, Ceará, Brazil',
      rating: 5,
      exclusiveText: '153 m² | 3 Suites | 10 Exclusive Projects',
      about: [
        'Your Private Beachfront Retreat in Preá: The ultimate rustic-luxury experience.',
        'Vila Conduru III is now your private spot for the best wind in the world and exclusive events. Located literally on the beachfront.',
        '1. Beachfront Location: Forget transfers or long walks. Here, the backyard is the beach.',
        '2. Resort-Style Experience: The exclusivity of a vila with the amenities of a boutique hotel.',
        '3. Breathable Architecture (Bioclimatic Design)',
        '4. Organic Lifestyle & Connectivity: The villa eliminates barriers between you and paradise.',
        '5. Terra Ventos Concierge Support: Your only concern will be sailing.',
      ],
      infra: [
        'Pool in the condominium',
        '3 large suites',
        'Barbecue area',
        'Beachfront',
        'Kite-point',
        'Patricia Mureta Project',
        'Parking',
        '24h Security/Portaria'
      ],
      facilities: ['3 Suites', 'Beachfront', 'Feet in the sand', 'Pool', 'Full kitchen', 'Air conditioning', 'Powder room', 'Parking', '24h Security'],
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
      propertyTitle: 'BEACHFRONT LAND IN BITUPITÁ',
      location: 'Bitupitá, Ceará, Brazil',
      rating: 5,
      exclusiveText: '4,300 m² | 10 Exclusive Land Projects',
      about: [
        'The Next Appreciation Frontier: Exclusivity, beachfront access, and the most strategic m² on the West Coast.',
        'There are places the market has not yet discovered, but the wind has. Bitupitá é the last untouched refuge on the Costa dos Ventos Route.',
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
      propertyTitle: 'VILA DO INGLÊS',
      location: 'Preá, Ceará, Brazil',
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
      propertyTitle: 'VILLA PRABHU — PARACURU-CE',
      location: 'Paracuru, Ceará, Brasil',
      rating: 5,
      exclusiveText: 'Condominio Cerrado de Lotes en Paracuru-CE con laguna privada, ocio completo y a 100m de la playa. Alto estándar y exclusividad en una de las playas más hermosas de Ceará',
      about: [
        'Villa Prabhu es un desarrollo planificado por Bianchi Urbanismo, enfocado en ofrecer calidad de vida y seguridad.',
        'Ubicado en una región privilegiada con amplia área verde y recursos hídricos, el proyecto destaca por su planificación urbana inteligente e integración con la naturaleza.',
        'Lotes Exclusivos: Unidades amplas com áreas privadas de 242 m² a más de 600 m².',
        'Planificación de Etapas: Proyecto dividido en fases, con la Etapa 1 ya consolidada y unidades disponibles en la Etapa 2.',
        'Urbanismo de Calidad: Infraestructura pensada para el bienestar, con calles diseñadas como Av. Prabhu y Rua Azalea.',
      ],
      infra: [
        'Financiamiento Directo: Pago fácil en hasta 120 cuotas mensuales.',
        'Listo para Invertir: Documentación y tabla de ventas actualizada para 2026.',
        'Ubicación Estratégica: Cuadras planificadas para garantizar privacidad y fácil acceso a las áreas comunes.',
        'Escenaro Natural: Urbanización rodeada de agua y vegetación preservada.',
      ],
      facilities: ['Proyecto Urbanístico', 'Parcelamiento en 120x', 'Áreas Verdes', 'Listo para Construir'],
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
          label: 'Tabla de Precios (120 meses) – Actualizada 2026', 
          url: '/VILLA_PRABHU/Tabela de Preços (120 meses).pdf', 
          legend: 'Detalle de valores, señal y cuotas mensuales.' 
        },
        { 
          label: 'Mapa de Disponibilidad (Masterplan)', 
          url: '/VILLA_PRABHU/Mapa de Disponibilidade (Masterplan).pdf', 
          legend: 'Visualice la ubicación exacta de cada lote y las áreas verdes.' 
        }
      ],
      priceTag: 'Consultar',
      price: 'Bajo Consulta',
      installments: 'A partir de 120 cuotas',
    },
    {
      id: '05',
      slug: 'casa-matanzas',
      title: 'ESTANCIA',
      image: '/Matanzas/b211e036-b276-4446-a3be-7ba65f801a82.avif',
      badge: 'Estancia',
      propertyTitle: 'Casa Matanzas con tinaja / vista al mar y bosque',
      location: 'Navidad, O\'Higgins, Chile',
      rating: 5,
      exclusiveText: 'Descubre Matanzas Paradise 🌊 Casa moderna cómodamente equipada para 6 huéspedes, espectaculares vistas panorámicas al mar y al bosque.',
      about: [
        'Descubre Matanzas Paradise: Casa moderna cómodamente equipada para 6 huéspedes.',
        'Espectaculares vistas panorámicas al mar y al bosque.',
        'Ideal para quienes buscan tranquilidad en uno de los destinos de kitesurf y windsurf más emblemáticos de Chile.',
        '1. Fuera de la red: energía solar, espacio sostenible en armonía con la naturaleza.',
        '2. Estacionamiento privado en el lugar.',
        '3. Ubicación Privilegiada: A solo 7 min de la playa de Matanzas y La Vega de Pupuya.',
        '4. Terraza con tinaja (Jacuzzi privado).',
        '5. Ambiente tranquilo, cerca de restaurantes, supermercados y clubes deportivos.'
      ],
      infra: [
        'Vista al mar',
        'Vista al valle',
        'Cocina completa',
        'Wi-Fi (Starlink)',
        'Estacionamiento gratuito',
        'Tinaja privada',
        'Se permiten mascotas',
        'Cámaras de segurança exteriores'
      ],
      facilities: ['Vista al mar', 'Vista al valle', 'Cocina completa', 'Wi-Fi', 'Estacionamiento gratuito', 'Tinaja privada', 'Se permiten mascotas', 'Cámaras de seguridad exteriores'],
      gallery: {
        main: '/Matanzas/b211e036-b276-4446-a3be-7ba65f801a82.avif',
        sideTop: '/Matanzas/24d1320e-ff30-4707-882b-e14889b2ea9f.avif',
        sideBottom: '/Matanzas/305fa07a-3d45-4f82-9123-3e865b38faba.avif',
        extra: [
          '/Matanzas/c51be852-eadb-4d58-9b5c-4913e56a873b.avif',
          '/Matanzas/a932e2b8-9f65-46d6-888b-ec57fe433f45.avif',
          '/Matanzas/59c1aa44-cc72-45be-a883-7724e0f27f11.avif'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-33.95,-71.86&z=15&output=embed',
      priceTag: 'Diario',
      price: 'Bajo Consulta',
      installments: 'Consultar paquetes',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1495622230762379698?unique_share_id=e222b343-72c6-400c-bec4-afd4286d8719&viralityEntryPoint=1&s=76&source_impression_id=p3_1775581234_P3rzyIdyGvGibmTw'
    },
    {
      id: '01',
      slug: 'villa-condudu-3',
      title: 'ESTANCIA',
      image: '/VillaCondutuPaginaInicial/FINAL 14.png',
      badge: 'Estancia',
      propertyTitle: 'VILA CONDURU III',
      location: 'Preá, Ceará, Brasil',
      rating: 5,
      exclusiveText: '500 m² | 3 Suites | 10 Proyectos exclusivos',
      about: [
        'Tu Refugio Privado Frente al Mar en Preá: La experiencia definitiva de lujo rústico.',
        'La Vila Conduru III es ahora tu palco privado para el mejor viento del mundo y eventos exclusivos.',
        '1. Ubicación Frente al Mar: Olvídate de traslados. Aquí, el jardín es la playa.',
        '2. Experiencia de Complejo Turístico: La exclusividad de una vila com las comodidades de un hotel boutique.',
        '3. Arquitectura Respirable (Diseño Bioclimático)',
        '4. Estilo de Vida y Conectividad Orgánica: La villa elimina las barreras entre tú y el paraíso.',
        '5. Soporte Concierge Terra Ventos: Tu única preocupación será navegar.',
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
      facilities: ['3 Suites', 'Frente al mar', 'Pies en la arena', 'Piscina', 'Cocina completa', 'Aire acondicionado', 'Aseo', 'Estacionamiento', 'Seguridad 24h'],
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
      propertyTitle: 'TERRENOS FRENTE AL MAR EN BITUPITÁ',
      location: 'Bitupitá, Ceará, Brasil',
      rating: 5,
      exclusiveText: '4.300 m² | 10 Proyectos de Terrenos Exclusivos',
      about: [
        'Exclusividad, frente al mar y el m² más estratégico de la Costa Oeste.',
        'Hay lugares que el mercado aún no ha descubierto, pero el viento sí. Bitupitá es el último refugio intacto en la Ruta Costa dos Ventos.',
        'La Nueva Ruta del Foil: Con vientos constantes durante 6 a 8 meses al año y aguas perfectas.',
        'Escasez Real: Un proyecto de solo 10 lotes exclusivos, garantizando baja densidad y privacidad absoluta.',
        'Acceso Directo Frente al Mar: Propiedades con frente al mar libre y acceso directo a la playa.',
        'Seguridad Legal Terra Ventos: Documentación 100% revisada con matrícula individualizada.',
      ],
      infra: [
        'Ubicación prime y exclusiva',
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
      title: 'INVERSIÓN',
      image: '/viladoinglesPaginaInicial/Final 04 (1).png',
      badge: 'Inversión',
      propertyTitle: 'VILA DO INGLÊS',
      location: 'Preá, Ceará, Brasil',
      rating: 5,
      exclusiveText: '2.200 sq.ft | 2 Baños | 10 Proyectos Exclusivos',
      about: [
        'La Esencia del Lujo Sostenible: Una mezcla única de sostenibilidad moderna y tranquilidad.',
        'Inspirada en un refugio de Nueva York, esta residencia ofrece 2.200 sq.ft completamente alimentada por energía solar.',
        '1. Diseño Sostenible: Sistemas inteligentes con paneles solares en el techo.',
        '2. Comodidad Estilo Spa: 2 baños modernos e inmersivos.',
        '3. Transparencia Dinámica: Amplias paredes de vidrio del suelo al techo.',
        '4. Privacidad Panorámica: Terraza privada en la azotea.',
        '5. Conexión Exclusiva: El contraste entre una ubicación premium y paz aislada.',
      ],
      infra: ['Sistema de paneles solares en el techo', 'Paredes de vidrio del suelo al techo', 'Terraza privada en la azotea', '2 Baños modernos', 'Ubicación prime aislada'],
      facilities: ['!Frente al mar', 'Aire acondicionado', '!Lavadora', '!Internet', 'Calentador de agua', 'Refrigerador', 'Sofá', 'Armario'],
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
      price: 'Próximamente',
      installments: '',
    },
  ],
};

export function getOportunidadesData(lang: string): OportunidadeDetalhe[] {
  const baseLang = lang.split('-')[0];
  return oportunidadesDataByLang[baseLang] ?? oportunidadesDataByLang['pt'];
}
