import type { RegiaoKey } from './regioes';

type Lang = 'pt' | 'en' | 'es';

export interface IntentSecao {
  titulo: string;
  paragrafos: string[];
}

export interface IntentFaq {
  q: string;
  a: string;
}

export interface IntentPageConfig {
  /** slug da rota (sem barra). Ex.: "terrenos-a-venda-no-prea" */
  slug: string;
  /** região usada para filtrar o inventário (matchesDestination). */
  regionKey: RegiaoKey;
  /** tipo de imóvel para filtrar (chave de TYPE_MATCHERS). Ausente = todos. */
  tipo?: string;
  /** 'listagem' = página de busca por intenção; 'servico' = página institucional
   * de serviço numa localidade (imobiliária em X) — não foca a grade. */
  pageType: 'listagem' | 'servico';
  priority: number;
  heroImage: string;
  titles: Record<Lang, string>;
  descriptions: Record<Lang, string>;
  h1: Record<Lang, string>;
  corpo: Record<Lang, IntentSecao[]>;
  faqs: Record<Lang, IntentFaq[]>;
}

export const INTENT_PAGES: IntentPageConfig[] = [
  {
    slug: 'terrenos-a-venda-no-prea',
    regionKey: 'prea',
    tipo: 'terreno',
    pageType: 'listagem',
    priority: 0.8,
    heroImage: '/imoveis/terreno-exclusivo-prea-200m-mar-01.webp',
    titles: {
      pt: 'Terrenos à Venda no Preá | Terra Ventos',
      en: 'Land for Sale in Preá | Terra Ventos',
      es: 'Terrenos en Venta en Preá | Terra Ventos',
    },
    descriptions: {
      pt: 'Terrenos à venda na Praia do Preá, Cruz/CE — pé na areia e em segunda linha, do lote residencial à área para projeto. Curadoria e due diligence da Terra Ventos.',
      en: 'Land for sale in Preá Beach, Cruz/CE — beachfront and second-line, from residential lots to development areas. Terra Ventos curation and due diligence.',
      es: 'Terrenos en venta en la Playa de Preá, Cruz/CE — frente al mar y en segunda línea, del lote residencial al área para proyecto. Curaduría y due diligence de Terra Ventos.',
    },
    h1: {
      pt: 'Terrenos à venda no Preá',
      en: 'Land for sale in Preá',
      es: 'Terrenos en venta en Preá',
    },
    corpo: {
      pt: [
        {
          titulo: 'O que procurar num terreno no Preá',
          paragrafos: [
            'No Preá, o preço de um terreno é definido principalmente pela distância do mar, pela testada (metros de frente) e pela situação documental. Lotes à beira-mar são os mais disputados; opções em segunda e terceira linha, a poucos minutos a pé da praia, oferecem entrada mais acessível com a mesma exposição à valorização da vila.',
            'Terrenos à beira-mar no litoral oeste do Ceará partem de cerca de R$150 mil. A Terra Ventos verifica matrícula, georreferenciamento e situação ambiental de cada lote antes de apresentá-lo.',
          ],
        },
        {
          titulo: 'Preá para quem compra terreno',
          paragrafos: [
            'É o maior spot de kitesurf e wingfoil do Ceará, com temporada de vento de julho a janeiro e demanda internacional constante. Quem compra terreno normalmente constrói casa para renda de aluguel por temporada ou segura o lote pela valorização — o IDACE vem titulando a região e a infraestrutura da vila segue crescendo.',
          ],
        },
      ],
      en: [
        {
          titulo: 'What to look for in land in Preá',
          paragrafos: [
            'In Preá, a plot\'s price is driven mainly by distance from the sea, frontage (metres of width) and title status. Beachfront lots are the most contested; second- and third-line options, a short walk from the beach, offer a more affordable entry with the same exposure to the village\'s appreciation.',
            'Beachfront land on Ceará\'s west coast starts around R$150,000. Terra Ventos checks title, survey and environmental status of every plot before presenting it.',
          ],
        },
        {
          titulo: 'Preá for land buyers',
          paragrafos: [
            'It is Ceará\'s largest kitesurf and wingfoil spot, with a wind season from July to January and steady international demand. Land buyers usually build a house for short-term rental income or hold the lot for appreciation — IDACE has been titling the region and village infrastructure keeps growing.',
          ],
        },
      ],
      es: [
        {
          titulo: 'Qué buscar en un terreno en Preá',
          paragrafos: [
            'En Preá, el precio de un terreno se define principalmente por la distancia del mar, la testera (metros de frente) y la situación documental. Los lotes frente al mar son los más disputados; las opciones en segunda y tercera línea, a pocos minutos a pie de la playa, ofrecen una entrada más accesible con la misma exposición a la valorización de la villa.',
            'Los terrenos frente al mar en el litoral oeste de Ceará parten de cerca de R$150 mil. Terra Ventos verifica escritura, georreferenciación y situación ambiental de cada lote antes de presentarlo.',
          ],
        },
        {
          titulo: 'Preá para quien compra terreno',
          paragrafos: [
            'Es el mayor spot de kitesurf y wingfoil de Ceará, con temporada de viento de julio a enero y demanda internacional constante. Quien compra terreno normalmente construye casa para renta de alquiler por temporada o retiene el lote por la valorización — el IDACE viene titulando la región y la infraestructura de la villa sigue creciendo.',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'Quanto custa um terreno no Preá?', a: 'Varia com a metragem e a distância da praia. Terrenos à beira-mar no litoral oeste do Ceará partem de cerca de R$150 mil; lotes em segunda e terceira linha costumam ser mais acessíveis.' },
        { q: 'Os terrenos no Preá têm escritura?', a: 'Parte deles ainda passa por regularização. O IDACE vem titulando a região e a Terra Ventos conduz due diligence de matrícula e georreferenciamento antes de qualquer negócio.' },
        { q: 'Posso construir para alugar por temporada?', a: 'Sim — é o uso mais comum. O Preá tem demanda de aluguel por temporada o ano todo, com pico na temporada de vento (julho a janeiro).' },
      ],
      en: [
        { q: 'How much does land in Preá cost?', a: 'It depends on size and distance from the beach. Beachfront land on Ceará\'s west coast starts around R$150,000; second- and third-line lots are usually more affordable.' },
        { q: 'Do Preá plots have clear title?', a: 'Some are still being regularized. IDACE has been titling the region and Terra Ventos runs title and survey due diligence before any deal.' },
        { q: 'Can I build for short-term rental?', a: 'Yes — that is the most common use. Preá has year-round rental demand, peaking in the wind season (July to January).' },
      ],
      es: [
        { q: '¿Cuánto cuesta un terreno en Preá?', a: 'Depende del metraje y la distancia de la playa. Los terrenos frente al mar en el litoral oeste de Ceará parten de cerca de R$150 mil; los lotes en segunda y tercera línea suelen ser más accesibles.' },
        { q: '¿Los terrenos en Preá tienen escritura?', a: 'Parte de ellos aún pasa por regularización. El IDACE viene titulando la región y Terra Ventos conduce due diligence de escritura y georreferenciación antes de cualquier negocio.' },
        { q: '¿Puedo construir para alquilar por temporada?', a: 'Sí — es el uso más común. Preá tiene demanda de alquiler por temporada todo el año, con pico en la temporada de viento (julio a enero).' },
      ],
    },
  },

  {
    slug: 'casas-a-venda-no-prea',
    regionKey: 'prea',
    tipo: 'casa',
    pageType: 'listagem',
    priority: 0.8,
    heroImage: '/imoveis/mansao-praia-do-prea-01.webp',
    titles: {
      pt: 'Casas à Venda no Preá | Terra Ventos',
      en: 'Houses for Sale in Preá | Terra Ventos',
      es: 'Casas en Venta en Preá | Terra Ventos',
    },
    descriptions: {
      pt: 'Casas de alto padrão e mansões à venda na Praia do Preá — projetos à beira-mar, casas de design e imóveis prontos para renda de temporada. Curadoria Terra Ventos.',
      en: 'High-end houses and mansions for sale in Preá Beach — oceanfront projects, design houses and properties ready for vacation-rental income. Terra Ventos curation.',
      es: 'Casas de alto nivel y mansiones en venta en la Playa de Preá — proyectos frente al mar, casas de diseño e inmuebles listos para renta de temporada. Curaduría Terra Ventos.',
    },
    h1: {
      pt: 'Casas à venda no Preá',
      en: 'Houses for sale in Preá',
      es: 'Casas en venta en Preá',
    },
    corpo: {
      pt: [
        {
          titulo: 'Comprar casa no Preá',
          paragrafos: [
            'A oferta de casas no Preá vai de projetos compactos de design a mansões à beira-mar com piscina e área gourmet. Muitas já operam como aluguel de temporada em plataformas como o Airbnb, o que permite avaliar a receita histórica antes da compra.',
            'A Terra Ventos apresenta casas com documentação verificada e, quando é o caso, o histórico de ocupação e diária média.',
          ],
        },
        {
          titulo: 'Renda e valorização',
          paragrafos: [
            'O Preá tem demanda de hospedagem o ano todo, com pico na temporada de vento (julho a janeiro) e público majoritariamente internacional. Uma casa bem localizada e bem operada combina fluxo de aluguel com a valorização do terreno na vila mais consolidada do kitesurf cearense.',
          ],
        },
      ],
      en: [
        {
          titulo: 'Buying a house in Preá',
          paragrafos: [
            'The house supply in Preá ranges from compact design builds to oceanfront mansions with pool and outdoor kitchen. Many already run as vacation rentals on platforms like Airbnb, which lets you assess historical revenue before buying.',
            'Terra Ventos presents houses with verified title and, where available, occupancy history and average nightly rate.',
          ],
        },
        {
          titulo: 'Income and appreciation',
          paragrafos: [
            'Preá has year-round lodging demand, peaking in the wind season (July to January) with a mostly international audience. A well-located, well-run house combines rental cash flow with land appreciation in Ceará\'s most established kitesurf village.',
          ],
        },
      ],
      es: [
        {
          titulo: 'Comprar casa en Preá',
          paragrafos: [
            'La oferta de casas en Preá va de proyectos compactos de diseño a mansiones frente al mar con piscina y área gourmet. Muchas ya operan como alquiler de temporada en plataformas como Airbnb, lo que permite evaluar los ingresos históricos antes de la compra.',
            'Terra Ventos presenta casas con documentación verificada y, cuando corresponde, el historial de ocupación y la tarifa media.',
          ],
        },
        {
          titulo: 'Renta y valorización',
          paragrafos: [
            'Preá tiene demanda de alojamiento todo el año, con pico en la temporada de viento (julio a enero) y público mayoritariamente internacional. Una casa bien ubicada y bien operada combina flujo de alquiler con la valorización del terreno en la villa más consolidada del kitesurf cearense.',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'Quanto custa uma casa no Preá?', a: 'Depende do tamanho, da localização e do padrão de acabamento. A carteira da Terra Ventos vai de projetos de design a mansões à beira-mar — consulte a disponibilidade e a faixa de preço atual.' },
        { q: 'Dá para comprar uma casa que já funciona como Airbnb?', a: 'Sim. Parte das casas já opera como aluguel de temporada, e quando há histórico a Terra Ventos compartilha ocupação e diária média.' },
        { q: 'Qual a melhor época para alugar no Preá?', a: 'A ocupação é forte o ano todo, com pico entre julho e janeiro, quando o vento atrai kitesurfistas e wingfoilers do mundo inteiro.' },
      ],
      en: [
        { q: 'How much does a house in Preá cost?', a: 'It depends on size, location and finish level. Terra Ventos\' portfolio ranges from design builds to oceanfront mansions — ask for current availability and price range.' },
        { q: 'Can I buy a house that already runs as an Airbnb?', a: 'Yes. Some houses already operate as vacation rentals, and where there is a track record Terra Ventos shares occupancy and average nightly rate.' },
        { q: 'When is the best time to rent in Preá?', a: 'Occupancy is strong year-round, peaking between July and January, when the wind draws kitesurfers and wingfoilers from around the world.' },
      ],
      es: [
        { q: '¿Cuánto cuesta una casa en Preá?', a: 'Depende del tamaño, la ubicación y el nivel de acabado. La cartera de Terra Ventos va de proyectos de diseño a mansiones frente al mar — consulte la disponibilidad y el rango de precio actual.' },
        { q: '¿Puedo comprar una casa que ya funciona como Airbnb?', a: 'Sí. Parte de las casas ya opera como alquiler de temporada, y cuando hay historial Terra Ventos comparte ocupación y tarifa media.' },
        { q: '¿Cuál es la mejor época para alquilar en Preá?', a: 'La ocupación es fuerte todo el año, con pico entre julio y enero, cuando el viento atrae a kitesurfistas y wingfoilers de todo el mundo.' },
      ],
    },
  },

  {
    slug: 'imobiliaria-no-prea',
    regionKey: 'prea',
    pageType: 'servico',
    priority: 0.75,
    heroImage: '/imoveis/mansao-praia-do-prea-01.webp',
    titles: {
      pt: 'Imobiliária no Preá | Terra Ventos',
      en: 'Real Estate Agency in Preá | Terra Ventos',
      es: 'Inmobiliaria en Preá | Terra Ventos',
    },
    descriptions: {
      pt: 'Terra Ventos é a imobiliária de curadoria no Preá, Cruz/CE — terrenos, casas e mansões com due diligence, escritório na Rua Antônio Chagas 857 e assessoria completa do início ao fim.',
      en: 'Terra Ventos is the curation real estate agency in Preá, Cruz/CE — land, houses and mansions with due diligence, an office at Rua Antônio Chagas 857 and full end-to-end advisory.',
      es: 'Terra Ventos es la inmobiliaria de curaduría en Preá, Cruz/CE — terrenos, casas y mansiones con due diligence, oficina en la Rua Antônio Chagas 857 y asesoría completa de principio a fin.',
    },
    h1: {
      pt: 'Imobiliária no Preá',
      en: 'Real estate agency in Preá',
      es: 'Inmobiliaria en Preá',
    },
    corpo: {
      pt: [
        {
          titulo: 'Como a Terra Ventos atua no Preá',
          paragrafos: [
            'A Terra Ventos mantém escritório no Preá, na Rua Antônio Chagas, nº 857 (Cruz/CE), e uma sede em Fortaleza. A atuação é de curadoria: em vez de listar tudo, seleciona terrenos, casas e mansões com potencial de valorização e situação documental verificada.',
            'Cada imóvel passa por due diligence de matrícula, georreferenciamento e situação ambiental. A assessoria acompanha o comprador do início ao fim — negociação, documentação, regularização e, quando é o caso, estruturação da casa para renda de temporada.',
          ],
        },
        {
          titulo: 'Por que Preá',
          paragrafos: [
            'É o maior spot de kitesurf e wingfoil do Ceará, com mais de 300 dias de vento por ano na costa, demanda internacional constante e infraestrutura em consolidação. O IDACE vem titulando a região, e investimentos a partir de R$700 mil no Nordeste podem dar direito a visto de residência permanente (Golden Visa).',
          ],
        },
      ],
      en: [
        {
          titulo: 'How Terra Ventos operates in Preá',
          paragrafos: [
            'Terra Ventos keeps an office in Preá, at Rua Antônio Chagas 857 (Cruz/CE), and a head office in Fortaleza. The approach is curation: rather than listing everything, it selects land, houses and mansions with appreciation potential and verified title status.',
            'Every property goes through title, survey and environmental due diligence. The advisory follows the buyer end to end — negotiation, paperwork, regularization and, where relevant, structuring the house for vacation-rental income.',
          ],
        },
        {
          titulo: 'Why Preá',
          paragrafos: [
            'It is Ceará\'s largest kitesurf and wingfoil spot, with over 300 wind days a year on the coast, steady international demand and consolidating infrastructure. IDACE has been titling the region, and investments from R$700,000 in Northeast Brazil can grant permanent residency (Golden Visa).',
          ],
        },
      ],
      es: [
        {
          titulo: 'Cómo actúa Terra Ventos en Preá',
          paragrafos: [
            'Terra Ventos mantiene oficina en Preá, en la Rua Antônio Chagas 857 (Cruz/CE), y una sede en Fortaleza. La actuación es de curaduría: en vez de listar todo, selecciona terrenos, casas y mansiones con potencial de valorización y situación documental verificada.',
            'Cada inmueble pasa por due diligence de escritura, georreferenciación y situación ambiental. La asesoría acompaña al comprador de principio a fin — negociación, documentación, regularización y, cuando corresponde, estructuración de la casa para renta de temporada.',
          ],
        },
        {
          titulo: 'Por qué Preá',
          paragrafos: [
            'Es el mayor spot de kitesurf y wingfoil de Ceará, con más de 300 días de viento al año en la costa, demanda internacional constante e infraestructura en consolidación. El IDACE viene titulando la región, e inversiones desde R$700 mil en el Nordeste pueden dar derecho a visa de residencia permanente (Golden Visa).',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'A Terra Ventos tem escritório no Preá?', a: 'Sim, na Rua Antônio Chagas, nº 857 — Preá, Cruz/CE, 62595-000. Também há sede em Fortaleza (Rua Monsenhor Bruno 1153, sala 608, Aldeota).' },
        { q: 'A Terra Ventos só vende no Preá?', a: 'Não. Além do Preá, a curadoria cobre Jericoacoara, Guriú, Tatajuba, Bitupitá e Taíba, no litoral oeste do Ceará.' },
        { q: 'A Terra Ventos ajuda com a documentação?', a: 'Sim. A assessoria acompanha matrícula, georreferenciamento, regularização e toda a parte contratual, do início ao fim.' },
      ],
      en: [
        { q: 'Does Terra Ventos have an office in Preá?', a: 'Yes, at Rua Antônio Chagas 857 — Preá, Cruz/CE, 62595-000. There is also a head office in Fortaleza (Rua Monsenhor Bruno 1153, suite 608, Aldeota).' },
        { q: 'Does Terra Ventos only sell in Preá?', a: 'No. Besides Preá, the curation covers Jericoacoara, Guriú, Tatajuba, Bitupitá and Taíba, on Ceará\'s west coast.' },
        { q: 'Does Terra Ventos help with paperwork?', a: 'Yes. The advisory handles title, survey, regularization and the entire contractual process, end to end.' },
      ],
      es: [
        { q: '¿Terra Ventos tiene oficina en Preá?', a: 'Sí, en la Rua Antônio Chagas 857 — Preá, Cruz/CE, 62595-000. También hay sede en Fortaleza (Rua Monsenhor Bruno 1153, sala 608, Aldeota).' },
        { q: '¿Terra Ventos solo vende en Preá?', a: 'No. Además de Preá, la curaduría cubre Jericoacoara, Guriú, Tatajuba, Bitupitá y Taíba, en el litoral oeste de Ceará.' },
        { q: '¿Terra Ventos ayuda con la documentación?', a: 'Sí. La asesoría acompaña escritura, georreferenciación, regularización y toda la parte contractual, de principio a fin.' },
      ],
    },
  },

  {
    slug: 'investimento-imobiliario-em-jericoacoara',
    regionKey: 'jericoacoara',
    pageType: 'listagem',
    priority: 0.8,
    heroImage: '/imoveis/casa-2-chales-serrote-jericoacoara-01.webp',
    titles: {
      pt: 'Investimento Imobiliário em Jericoacoara | Terra Ventos',
      en: 'Real Estate Investment in Jericoacoara | Terra Ventos',
      es: 'Inversión Inmobiliaria en Jericoacoara | Terra Ventos',
    },
    descriptions: {
      pt: 'Investir em imóveis na região de Jericoacoara: casas e terrenos no Serrote, Preá e Guriú, no entorno da vila. Demanda internacional, aeroporto Fraport até 2047 e curadoria Terra Ventos.',
      en: 'Investing in property in the Jericoacoara area: houses and land in Serrote, Preá and Guriú, around the village. International demand, Fraport airport through 2047 and Terra Ventos curation.',
      es: 'Invertir en inmuebles en la región de Jericoacoara: casas y terrenos en el Serrote, Preá y Guriú, en el entorno del pueblo. Demanda internacional, aeropuerto Fraport hasta 2047 y curaduría Terra Ventos.',
    },
    h1: {
      pt: 'Investimento imobiliário em Jericoacoara',
      en: 'Real estate investment in Jericoacoara',
      es: 'Inversión inmobiliaria en Jericoacoara',
    },
    corpo: {
      pt: [
        {
          titulo: 'Onde acontece o investimento perto de Jeri',
          paragrafos: [
            'A Vila de Jericoacoara está dentro do Parque Nacional de Jericoacoara: construção restrita e quase nenhuma oferta nova. O investimento imobiliário da região acontece no entorno — Serrote, Preá e Guriú —, todos a poucos quilômetros da vila e conectados à mesma demanda.',
            'O Serrote oferece vista para a vila e para o mar; o Preá é o polo de kite e wing com mais infraestrutura; Guriú é a opção mais preservada e de entrada.',
          ],
        },
        {
          titulo: 'A tese de investimento',
          paragrafos: [
            'O Aeroporto de Jericoacoara é administrado pela Fraport até 2047 e movimentou 6,93 milhões de passageiros (+9,2%). O turismo responde por 10,3% do PIB do Ceará. Essa base de demanda — internacional e nacional de alto poder aquisitivo — sustenta ocupação de aluguel por temporada e valorização de terreno no cinturão ao redor do parque.',
            'Investimentos a partir de R$700 mil no Nordeste do Brasil podem dar direito a visto de residência permanente (Golden Visa).',
          ],
        },
      ],
      en: [
        {
          titulo: 'Where investment happens near Jeri',
          paragrafos: [
            'The village of Jericoacoara sits inside Jericoacoara National Park: restricted construction and almost no new supply. Real estate investment in the region happens in the surroundings — Serrote, Preá and Guriú — all a few kilometres from the village and tied to the same demand.',
            'Serrote offers views of the village and the sea; Preá is the kite and wing hub with the most infrastructure; Guriú is the most preserved, entry-level option.',
          ],
        },
        {
          titulo: 'The investment thesis',
          paragrafos: [
            'Jericoacoara Airport is operated by Fraport through 2047 and handled 6.93 million passengers (+9.2%). Tourism accounts for 10.3% of Ceará\'s GDP. That demand base — high-net-worth international and domestic travellers — supports vacation-rental occupancy and land appreciation in the belt around the park.',
            'Investments from R$700,000 in Northeast Brazil can grant permanent residency (Golden Visa).',
          ],
        },
      ],
      es: [
        {
          titulo: 'Dónde ocurre la inversión cerca de Jeri',
          paragrafos: [
            'El Pueblo de Jericoacoara está dentro del Parque Nacional de Jericoacoara: construcción restringida y casi ninguna oferta nueva. La inversión inmobiliaria de la región ocurre en el entorno — Serrote, Preá y Guriú —, todos a pocos kilómetros del pueblo y ligados a la misma demanda.',
            'El Serrote ofrece vista al pueblo y al mar; Preá es el polo de kite y wing con más infraestructura; Guriú es la opción más preservada y de entrada.',
          ],
        },
        {
          titulo: 'La tesis de inversión',
          paragrafos: [
            'El Aeropuerto de Jericoacoara es administrado por Fraport hasta 2047 y movió 6,93 millones de pasajeros (+9,2%). El turismo representa el 10,3% del PIB de Ceará. Esa base de demanda — internacional y nacional de alto poder adquisitivo — sostiene la ocupación de alquiler por temporada y la valorización de terreno en el cinturón alrededor del parque.',
            'Las inversiones desde R$700 mil en el Nordeste de Brasil pueden dar derecho a visa de residencia permanente (Golden Visa).',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'Dá para investir dentro da vila de Jericoacoara?', a: 'A vila fica dentro do parque nacional, com construção muito restrita e quase nenhuma oferta. O investimento acontece no entorno: Serrote, Preá e Guriú.' },
        { q: 'Qual o retorno de um imóvel perto de Jeri?', a: 'O modelo mais comum combina renda de aluguel por temporada (demanda internacional o ano todo) com valorização do terreno. Os números variam por localização e tipo de imóvel — a Terra Ventos apresenta o histórico quando disponível.' },
        { q: 'Estrangeiro pode investir na região de Jericoacoara?', a: 'Sim. Investimentos a partir de R$700 mil no Nordeste do Brasil podem dar direito a visto de residência permanente (Golden Visa).' },
      ],
      en: [
        { q: 'Can you invest inside Jericoacoara village?', a: 'The village is inside the national park, with heavily restricted construction and almost no supply. Investment happens in the surroundings: Serrote, Preá and Guriú.' },
        { q: 'What is the return on a property near Jeri?', a: 'The most common model combines vacation-rental income (year-round international demand) with land appreciation. Figures vary by location and property type — Terra Ventos shares the track record where available.' },
        { q: 'Can foreigners invest in the Jericoacoara area?', a: 'Yes. Investments from R$700,000 in Northeast Brazil can grant permanent residency (Golden Visa).' },
      ],
      es: [
        { q: '¿Se puede invertir dentro del pueblo de Jericoacoara?', a: 'El pueblo está dentro del parque nacional, con construcción muy restringida y casi ninguna oferta. La inversión ocurre en el entorno: Serrote, Preá y Guriú.' },
        { q: '¿Cuál es el retorno de un inmueble cerca de Jeri?', a: 'El modelo más común combina renta de alquiler por temporada (demanda internacional todo el año) con valorización del terreno. Las cifras varían por ubicación y tipo de inmueble — Terra Ventos comparte el historial cuando está disponible.' },
        { q: '¿Un extranjero puede invertir en la región de Jericoacoara?', a: 'Sí. Las inversiones desde R$700 mil en el Nordeste de Brasil pueden dar derecho a visa de residencia permanente (Golden Visa).' },
      ],
    },
  },
];

export const INTENT_SLUGS = INTENT_PAGES.map((p) => p.slug);

export function getIntentPage(slug: string | undefined): IntentPageConfig | undefined {
  return INTENT_PAGES.find((p) => p.slug === slug);
}
