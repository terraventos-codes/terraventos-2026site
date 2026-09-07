export type RegiaoKey = 'prea' | 'tatajuba' | 'jericoacoara' | 'guriu' | 'bitupita';

type Lang = 'pt' | 'en' | 'es';

export interface ConteudoSecao {
  titulo: string;
  paragrafos: string[];
}

export interface RegiaoFaq {
  q: string;
  a: string;
}

interface RegiaoConfig {
  /** Chave correspondente em DESTINATION_MATCHERS (src/utils/seoKeywords.ts) */
  destinationKey: string;
  heroImage: string;
  /** Coordenadas do ponto de referência da região (usadas no JSON-LD Place). */
  geo?: { latitude: number; longitude: number };
  nomes: Record<Lang, string>;
  intro: Record<Lang, string>;
  /** Conteúdo original da página (mercado, acesso, documentação, perfil do comprador).
   * Renderizado como texto visível E como fallback estático para crawlers/LLMs. */
  corpo?: Record<Lang, ConteudoSecao[]>;
  /** Perguntas frequentes — viram bloco visível + FAQPage (JSON-LD). */
  faqs?: Record<Lang, RegiaoFaq[]>;
}

// Fatos publicados pela própria Terra Ventos (public/llms.txt) reaproveitados no conteúdo:
// 300+ dias de vento/ano no litoral do Ceará; terrenos à beira-mar a partir de ~R$150 mil;
// Fraport administra o aeroporto de Jericoacoara até 2047; turismo = 10,3% do PIB do Ceará;
// 6,93M passageiros no aeroporto (+9,2%); IDACE regularizando títulos no litoral;
// Golden Visa: R$700 mil no Nordeste = residência permanente. Números específicos por
// região que ainda precisam de validação do time estão marcados com {{VERIFICAR}}.

export const REGIOES: Record<RegiaoKey, RegiaoConfig> = {
  prea: {
    destinationKey: 'prea',
    heroImage: '/imoveis/mansao-praia-do-prea-01.webp',
    geo: { latitude: -2.8194128, longitude: -40.4061732 },
    nomes: { pt: 'Preá', en: 'Preá', es: 'Preá' },
    intro: {
      pt: 'Terrenos, casas e mansões à venda na Praia do Preá — o maior spot de kitesurf e wingfoil do Ceará, com infraestrutura em crescimento e alto padrão de investimento.',
      en: 'Land, houses and mansions for sale in Preá Beach — the biggest kitesurf and wingfoil spot in Ceará, with growing infrastructure and high-end investment appeal.',
      es: 'Terrenos, casas y mansiones en venta en la Playa de Preá — el mayor spot de kitesurf y wingfoil de Ceará, con infraestructura en crecimiento y alto potencial de inversión.',
    },
    corpo: {
      pt: [
        {
          titulo: 'O mercado imobiliário no Preá',
          paragrafos: [
            'A Praia do Preá fica no município de Cruz, no litoral oeste do Ceará, a cerca de 25 km de Jericoacoara. É o maior spot de kitesurf e wingfoil do estado, com temporada de vento de julho a janeiro e mais de 300 dias de vento por ano em toda a costa cearense.',
            'A vila vive um ciclo de consolidação de infraestrutura — pousadas, restaurantes, escolas de kite e serviços — puxado por uma demanda internacional constante de europeus e norte-americanos. Isso sustenta tanto a valorização dos terrenos quanto a ocupação de casas de temporada.',
          ],
        },
        {
          titulo: 'O que se compra no Preá',
          paragrafos: [
            'A curadoria da Terra Ventos no Preá reúne terrenos pé na areia e em segunda linha, casas de alto padrão, mansões à beira-mar e projetos de villas voltados para renda de aluguel por temporada. Terrenos à beira-mar no litoral oeste do Ceará partem de cerca de R$150 mil, variando conforme metragem e distância do mar.',
            'Cada imóvel passa por due diligence de matrícula, georreferenciamento e situação ambiental antes de entrar na carteira.',
          ],
        },
        {
          titulo: 'Acesso, documentação e perfil do comprador',
          paragrafos: [
            'O Aeroporto de Jericoacoara (em Cruz/CE) fica a cerca de 35 minutos de carro do Preá e é administrado pela Fraport até 2047. Fortaleza está a cerca de 300 km (4h30 de estrada).',
            'O IDACE (Instituto do Desenvolvimento Agrário do Ceará) vem titulando imóveis do litoral, o que aumenta a segurança jurídica da região. O comprador típico é o investidor de renda por temporada, o praticante de kite ou wing que quer base no melhor vento, e o estrangeiro — investimentos a partir de R$700 mil no Nordeste podem dar direito a visto de residência permanente (Golden Visa).',
          ],
        },
      ],
      en: [
        {
          titulo: 'The Preá real estate market',
          paragrafos: [
            'Preá Beach is in the municipality of Cruz, on Ceará\'s west coast, about 25 km from Jericoacoara. It is the state\'s largest kitesurf and wingfoil spot, with a wind season from July to January and over 300 wind days a year along the Ceará coast.',
            'The village is in an infrastructure build-out cycle — guesthouses, restaurants, kite schools and services — driven by steady international demand from Europe and North America, which supports both land appreciation and vacation-rental occupancy.',
          ],
        },
        {
          titulo: 'What you buy in Preá',
          paragrafos: [
            'Terra Ventos\' Preá selection includes beachfront and second-line land, high-end houses, oceanfront mansions and villa projects built for short-term rental income. Beachfront land on Ceará\'s west coast starts around R$150,000, varying with size and distance from the sea.',
            'Every property goes through title, survey and environmental due diligence before entering the portfolio.',
          ],
        },
        {
          titulo: 'Access, paperwork and buyer profile',
          paragrafos: [
            'Jericoacoara Airport (in Cruz/CE) is about 35 minutes by car from Preá and is operated by Fraport through 2047. Fortaleza is about 300 km away (4.5 hours by road).',
            'IDACE, the Ceará state land agency, has been titling coastal properties, improving legal security in the region. The typical buyer is a vacation-rental investor, a kite or wing rider wanting a base at the best wind, and international buyers — investments from R$700,000 in Northeast Brazil can grant permanent residency (Golden Visa).',
          ],
        },
      ],
      es: [
        {
          titulo: 'El mercado inmobiliario en Preá',
          paragrafos: [
            'La Playa de Preá está en el municipio de Cruz, en el litoral oeste de Ceará, a unos 25 km de Jericoacoara. Es el mayor spot de kitesurf y wingfoil del estado, con temporada de viento de julio a enero y más de 300 días de viento al año en toda la costa cearense.',
            'La villa vive un ciclo de consolidación de infraestructura — posadas, restaurantes, escuelas de kite y servicios — impulsado por una demanda internacional constante de europeos y norteamericanos, que sostiene tanto la valorización de los terrenos como la ocupación de casas de temporada.',
          ],
        },
        {
          titulo: 'Qué se compra en Preá',
          paragrafos: [
            'La curaduría de Terra Ventos en Preá reúne terrenos frente al mar y en segunda línea, casas de alto nivel, mansiones frente al mar y proyectos de villas para renta de alquiler por temporada. Los terrenos frente al mar en el litoral oeste de Ceará parten de cerca de R$150 mil, según metraje y distancia del mar.',
            'Cada inmueble pasa por due diligence de escritura, georreferenciación y situación ambiental antes de entrar en la cartera.',
          ],
        },
        {
          titulo: 'Acceso, documentación y perfil del comprador',
          paragrafos: [
            'El Aeropuerto de Jericoacoara (en Cruz/CE) está a unos 35 minutos en coche de Preá y es administrado por Fraport hasta 2047. Fortaleza está a unos 300 km (4h30 de carretera).',
            'El IDACE (agencia de tierras del estado de Ceará) viene titulando inmuebles del litoral, lo que aumenta la seguridad jurídica de la región. El comprador típico es el inversor de renta por temporada, el practicante de kite o wing que quiere base en el mejor viento, y el extranjero — inversiones desde R$700 mil en el Nordeste pueden dar derecho a visa de residencia permanente (Golden Visa).',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'Quanto custa um terreno no Preá?', a: 'O valor varia com a metragem e a distância da praia. Terrenos à beira-mar no litoral oeste do Ceará partem de cerca de R$150 mil; opções em segunda e terceira linha costumam ser mais acessíveis. Consulte a Terra Ventos para a disponibilidade atual.' },
        { q: 'Como chego ao Preá?', a: 'O Aeroporto de Jericoacoara, em Cruz/CE, fica a cerca de 35 minutos de carro. De Fortaleza são aproximadamente 300 km (4h30).' },
        { q: 'Vale a pena investir no Preá?', a: 'É o maior spot de kitesurf e wingfoil do Ceará, com demanda internacional constante e infraestrutura em crescimento. O perfil é de renda por aluguel de temporada e valorização de terreno no médio prazo.' },
        { q: 'Os imóveis no Preá têm documentação regular?', a: 'Parte dos imóveis ainda passa por processo de regularização. O IDACE vem titulando a região e a Terra Ventos conduz a due diligence de matrícula, georreferenciamento e situação ambiental antes de qualquer compra.' },
        { q: 'Estrangeiro pode comprar imóvel no Preá?', a: 'Sim. Além disso, investimentos a partir de R$700 mil no Nordeste do Brasil podem dar direito a visto de residência permanente (Golden Visa).' },
      ],
      en: [
        { q: 'How much does land in Preá cost?', a: 'Prices depend on size and distance from the beach. Beachfront land on Ceará\'s west coast starts around R$150,000; second- and third-line options are usually more affordable. Contact Terra Ventos for current availability.' },
        { q: 'How do I get to Preá?', a: 'Jericoacoara Airport, in Cruz/CE, is about 35 minutes away by car. From Fortaleza it is roughly 300 km (4.5 hours).' },
        { q: 'Is Preá a good investment?', a: 'It is Ceará\'s largest kitesurf and wingfoil spot, with steady international demand and growing infrastructure. The play is short-term rental income and medium-term land appreciation.' },
        { q: 'Do Preá properties have clear title?', a: 'Some properties are still being regularized. IDACE has been titling the region, and Terra Ventos runs title, survey and environmental due diligence before any purchase.' },
        { q: 'Can foreigners buy property in Preá?', a: 'Yes. In addition, investments from R$700,000 in Northeast Brazil can grant permanent residency (Golden Visa).' },
      ],
      es: [
        { q: '¿Cuánto cuesta un terreno en Preá?', a: 'El valor depende del metraje y la distancia de la playa. Los terrenos frente al mar en el litoral oeste de Ceará parten de cerca de R$150 mil; las opciones en segunda y tercera línea suelen ser más accesibles. Consulte a Terra Ventos por la disponibilidad actual.' },
        { q: '¿Cómo llego a Preá?', a: 'El Aeropuerto de Jericoacoara, en Cruz/CE, está a unos 35 minutos en coche. Desde Fortaleza son aproximadamente 300 km (4h30).' },
        { q: '¿Vale la pena invertir en Preá?', a: 'Es el mayor spot de kitesurf y wingfoil de Ceará, con demanda internacional constante e infraestructura en crecimiento. El perfil es de renta por alquiler de temporada y valorización de terreno a mediano plazo.' },
        { q: '¿Los inmuebles en Preá tienen documentación regular?', a: 'Parte de los inmuebles aún pasa por proceso de regularización. El IDACE viene titulando la región y Terra Ventos conduce la due diligence de escritura, georreferenciación y situación ambiental antes de cualquier compra.' },
        { q: '¿Un extranjero puede comprar inmueble en Preá?', a: 'Sí. Además, inversiones desde R$700 mil en el Nordeste de Brasil pueden dar derecho a visa de residencia permanente (Golden Visa).' },
      ],
    },
  },

  tatajuba: {
    destinationKey: 'tatajuba',
    heroImage: '/imoveis/area-exclusiva-tatajuba-guriu-100000m-01.webp',
    geo: { latitude: -2.906, longitude: -40.5385 },
    nomes: { pt: 'Tatajuba', en: 'Tatajuba', es: 'Tatajuba' },
    intro: {
      pt: 'Terrenos e imóveis à venda em Tatajuba, no litoral oeste do Ceará — natureza preservada, dunas intocadas e um dos destinos com valorização mais acelerada da região.',
      en: 'Land and properties for sale in Tatajuba, on Ceará\'s west coast — preserved nature, untouched dunes and one of the fastest-appreciating destinations in the region.',
      es: 'Terrenos e inmuebles en venta en Tatajuba, en el litoral oeste de Ceará — naturaleza preservada, dunas intactas y uno de los destinos con mayor valorización de la región.',
    },
    corpo: {
      pt: [
        {
          titulo: 'Tatajuba: a fronteira preservada entre Jeri e a Rota das Emoções',
          paragrafos: [
            'Tatajuba pertence ao município de Camocim, no litoral oeste do Ceará, a oeste de Jericoacoara. É uma vila cercada por dunas móveis, lagoas e a foz do rio Coreaú, com um dos regimes de vento mais confiáveis do estado — a Terra Ventos estima confiabilidade de vento próxima de 99% na temporada.',
            'O acesso é feito por Camocim ou pela orla, em veículo 4x4, passando por Guriú. Esse isolamento relativo é justamente o que atrai o público high-end que busca privacidade e natureza intacta.',
          ],
        },
        {
          titulo: 'O que a Terra Ventos oferece em Tatajuba',
          paragrafos: [
            'A carteira reúne terrenos de grande metragem, áreas exclusivas para projetos e lotes em Camocim/Tatajuba. O IDACE vem regularizando títulos na região, o que reduz o risco fundiário histórico da faixa litorânea.',
            'É um mercado early stage: preços de entrada mais baixos que Preá e Jericoacoara, com a tese de valorização ancorada na proximidade de Jeri e na expansão do turismo do Ceará (10,3% do PIB estadual).',
          ],
        },
      ],
      en: [
        {
          titulo: 'Tatajuba: the preserved frontier between Jeri and the Rota das Emoções',
          paragrafos: [
            'Tatajuba belongs to the municipality of Camocim, on Ceará\'s west coast, west of Jericoacoara. It is a village surrounded by shifting dunes, lagoons and the mouth of the Coreaú river, with one of the most reliable wind regimes in the state — Terra Ventos estimates wind reliability near 99% in season.',
            'Access is via Camocim or along the shoreline in a 4x4, passing through Guriú. That relative isolation is exactly what draws high-end buyers looking for privacy and untouched nature.',
          ],
        },
        {
          titulo: 'What Terra Ventos offers in Tatajuba',
          paragrafos: [
            'The portfolio includes large plots, exclusive areas for development and lots in Camocim/Tatajuba. IDACE has been regularizing titles in the region, reducing the historical land-tenure risk of the coastal strip.',
            'It is an early-stage market: lower entry prices than Preá and Jericoacoara, with an appreciation thesis anchored in proximity to Jeri and the growth of Ceará tourism (10.3% of state GDP).',
          ],
        },
      ],
      es: [
        {
          titulo: 'Tatajuba: la frontera preservada entre Jeri y la Rota das Emoções',
          paragrafos: [
            'Tatajuba pertenece al municipio de Camocim, en el litoral oeste de Ceará, al oeste de Jericoacoara. Es una villa rodeada de dunas móviles, lagunas y la desembocadura del río Coreaú, con uno de los regímenes de viento más confiables del estado — Terra Ventos estima una confiabilidad de viento cercana al 99% en temporada.',
            'El acceso es por Camocim o por la orilla, en vehículo 4x4, pasando por Guriú. Ese aislamiento relativo es justamente lo que atrae al público high-end que busca privacidad y naturaleza intacta.',
          ],
        },
        {
          titulo: 'Qué ofrece Terra Ventos en Tatajuba',
          paragrafos: [
            'La cartera reúne terrenos de gran metraje, áreas exclusivas para proyectos y lotes en Camocim/Tatajuba. El IDACE viene regularizando títulos en la región, lo que reduce el riesgo agrario histórico de la franja litoral.',
            'Es un mercado early stage: precios de entrada más bajos que Preá y Jericoacoara, con la tesis de valorización anclada en la cercanía de Jeri y la expansión del turismo de Ceará (10,3% del PIB estatal).',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'Onde fica Tatajuba?', a: 'No município de Camocim, litoral oeste do Ceará, a oeste de Jericoacoara. O acesso é por Camocim ou pela orla em 4x4, passando por Guriú.' },
        { q: 'Por que investir em Tatajuba agora?', a: 'É um mercado early stage, com preços de entrada abaixo de Preá e Jericoacoara, vento muito confiável e o IDACE regularizando títulos — a tese é valorização puxada pela proximidade de Jeri.' },
        { q: 'Que tipo de imóvel a Terra Ventos tem em Tatajuba?', a: 'Terrenos de grande metragem, áreas exclusivas para projetos e lotes em Camocim/Tatajuba. Consulte a disponibilidade atual.' },
        { q: 'A documentação em Tatajuba é segura?', a: 'A faixa litorânea tem histórico de irregularidade fundiária, mas o IDACE vem titulando a região. A Terra Ventos só trabalha com imóveis após due diligence de matrícula e georreferenciamento.' },
      ],
      en: [
        { q: 'Where is Tatajuba?', a: 'In the municipality of Camocim, on Ceará\'s west coast, west of Jericoacoara. Access is via Camocim or along the shore in a 4x4, passing through Guriú.' },
        { q: 'Why invest in Tatajuba now?', a: 'It is an early-stage market, with entry prices below Preá and Jericoacoara, very reliable wind and IDACE titling the region — the thesis is appreciation driven by proximity to Jeri.' },
        { q: 'What kind of property does Terra Ventos have in Tatajuba?', a: 'Large plots, exclusive development areas and lots in Camocim/Tatajuba. Ask for current availability.' },
        { q: 'Is title secure in Tatajuba?', a: 'The coastal strip has a history of land-tenure irregularity, but IDACE has been titling the region. Terra Ventos only works with properties after title and survey due diligence.' },
      ],
      es: [
        { q: '¿Dónde está Tatajuba?', a: 'En el municipio de Camocim, litoral oeste de Ceará, al oeste de Jericoacoara. El acceso es por Camocim o por la orilla en 4x4, pasando por Guriú.' },
        { q: '¿Por qué invertir en Tatajuba ahora?', a: 'Es un mercado early stage, con precios de entrada por debajo de Preá y Jericoacoara, viento muy confiable y el IDACE titulando la región — la tesis es valorización impulsada por la cercanía de Jeri.' },
        { q: '¿Qué tipo de inmueble tiene Terra Ventos en Tatajuba?', a: 'Terrenos de gran metraje, áreas exclusivas para proyectos y lotes en Camocim/Tatajuba. Consulte la disponibilidad actual.' },
        { q: '¿La documentación en Tatajuba es segura?', a: 'La franja litoral tiene historial de irregularidad agraria, pero el IDACE viene titulando la región. Terra Ventos solo trabaja con inmuebles tras due diligence de escritura y georreferenciación.' },
      ],
    },
  },

  jericoacoara: {
    destinationKey: 'jericoacoara',
    heroImage: '/imoveis/casa-2-chales-serrote-jericoacoara-01.webp',
    geo: { latitude: -2.7969, longitude: -40.5136 },
    nomes: { pt: 'Jericoacoara', en: 'Jericoacoara', es: 'Jericoacoara' },
    intro: {
      pt: 'Casas e terrenos à venda na região de Jericoacoara — Serrote, Preá e Guriú. Investimento imobiliário no entorno da vila mais desejada do litoral cearense.',
      en: 'Houses and land for sale in the Jericoacoara area — Serrote, Preá and Guriú. Real estate investment around the most sought-after village on the Ceará coast.',
      es: 'Casas y terrenos en venta en la región de Jericoacoara — Serrote, Preá y Guriú. Inversión inmobiliaria en el entorno del pueblo más deseado del litoral cearense.',
    },
    corpo: {
      pt: [
        {
          titulo: 'Investir na região de Jericoacoara',
          paragrafos: [
            'A Vila de Jericoacoara está dentro do Parque Nacional de Jericoacoara, com construção fortemente restrita e praticamente sem novos lançamentos. Por isso, o investimento imobiliário da região acontece no entorno: Serrote, Preá e Guriú, todos a poucos quilômetros da vila.',
            'A Terra Ventos atua com casas e terrenos no Serrote — o bairro elevado com vista para a vila e o mar — e no entorno imediato de Jeri, conectando compradores a ativos que capturam a demanda de Jericoacoara sem a restrição do parque.',
          ],
        },
        {
          titulo: 'Por que a demanda por Jeri sustenta o investimento',
          paragrafos: [
            'O Aeroporto de Jericoacoara é administrado pela Fraport até 2047 e movimentou 6,93 milhões de passageiros, com crescimento de 9,2%. O turismo responde por 10,3% do PIB do Ceará.',
            'Essa base de demanda — internacional e nacional de alto poder aquisitivo — se traduz em ocupação de aluguel por temporada e valorização dos imóveis no cinturão ao redor do parque.',
          ],
        },
      ],
      en: [
        {
          titulo: 'Investing in the Jericoacoara area',
          paragrafos: [
            'The village of Jericoacoara sits inside Jericoacoara National Park, with heavily restricted construction and essentially no new developments. So real estate investment in the region happens in the surroundings: Serrote, Preá and Guriú, all a few kilometres from the village.',
            'Terra Ventos works with houses and land in Serrote — the elevated neighbourhood overlooking the village and the sea — and in the immediate surroundings of Jeri, connecting buyers to assets that capture Jericoacoara demand without the park\'s building restrictions.',
          ],
        },
        {
          titulo: 'Why demand for Jeri underpins the investment',
          paragrafos: [
            'Jericoacoara Airport is operated by Fraport through 2047 and handled 6.93 million passengers, up 9.2%. Tourism accounts for 10.3% of Ceará\'s GDP.',
            'That demand base — high-net-worth international and domestic travellers — translates into vacation-rental occupancy and property appreciation in the belt around the park.',
          ],
        },
      ],
      es: [
        {
          titulo: 'Invertir en la región de Jericoacoara',
          paragrafos: [
            'El Pueblo de Jericoacoara está dentro del Parque Nacional de Jericoacoara, con construcción fuertemente restringida y prácticamente sin nuevos lanzamientos. Por eso, la inversión inmobiliaria de la región ocurre en el entorno: Serrote, Preá y Guriú, todos a pocos kilómetros del pueblo.',
            'Terra Ventos actúa con casas y terrenos en el Serrote — el barrio elevado con vista al pueblo y al mar — y en el entorno inmediato de Jeri, conectando compradores con activos que capturan la demanda de Jericoacoara sin la restricción del parque.',
          ],
        },
        {
          titulo: 'Por qué la demanda por Jeri sostiene la inversión',
          paragrafos: [
            'El Aeropuerto de Jericoacoara es administrado por Fraport hasta 2047 y movió 6,93 millones de pasajeros, con un crecimiento del 9,2%. El turismo representa el 10,3% del PIB de Ceará.',
            'Esa base de demanda — internacional y nacional de alto poder adquisitivo — se traduce en ocupación de alquiler por temporada y valorización de los inmuebles en el cinturón alrededor del parque.',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'Dá para comprar imóvel dentro da vila de Jericoacoara?', a: 'A vila fica dentro do Parque Nacional de Jericoacoara, com construção muito restrita e quase nenhuma oferta nova. O investimento acontece no entorno — Serrote, Preá e Guriú —, a poucos quilômetros da vila.' },
        { q: 'Qual a melhor região para investir perto de Jeri?', a: 'O Serrote tem vista para a vila e para o mar; o Preá é o polo de kite e wing com mais infraestrutura; Guriú é a opção mais preservada e de entrada. A escolha depende do objetivo — renda de temporada ou valorização de terreno.' },
        { q: 'Como se chega a Jericoacoara?', a: 'Pelo Aeroporto de Jericoacoara (em Cruz/CE), administrado pela Fraport até 2047, ou por Fortaleza, a cerca de 300 km.' },
        { q: 'O que a Terra Ventos tem na região de Jericoacoara?', a: 'Casas e terrenos no Serrote e no entorno imediato de Jeri, além da carteira de Preá e Guriú. Consulte a disponibilidade atual.' },
      ],
      en: [
        { q: 'Can you buy property inside Jericoacoara village?', a: 'The village is inside Jericoacoara National Park, with heavily restricted construction and almost no new supply. Investment happens in the surroundings — Serrote, Preá and Guriú — a few kilometres from the village.' },
        { q: 'Which area is best to invest near Jeri?', a: 'Serrote overlooks the village and the sea; Preá is the kite and wing hub with the most infrastructure; Guriú is the most preserved, entry-level option. The choice depends on the goal — rental income or land appreciation.' },
        { q: 'How do you get to Jericoacoara?', a: 'Through Jericoacoara Airport (in Cruz/CE), operated by Fraport through 2047, or from Fortaleza, about 300 km away.' },
        { q: 'What does Terra Ventos have in the Jericoacoara area?', a: 'Houses and land in Serrote and the immediate surroundings of Jeri, plus the Preá and Guriú portfolio. Ask for current availability.' },
      ],
      es: [
        { q: '¿Se puede comprar inmueble dentro del pueblo de Jericoacoara?', a: 'El pueblo está dentro del Parque Nacional de Jericoacoara, con construcción muy restringida y casi ninguna oferta nueva. La inversión ocurre en el entorno — Serrote, Preá y Guriú —, a pocos kilómetros del pueblo.' },
        { q: '¿Cuál es la mejor región para invertir cerca de Jeri?', a: 'El Serrote tiene vista al pueblo y al mar; Preá es el polo de kite y wing con más infraestructura; Guriú es la opción más preservada y de entrada. La elección depende del objetivo — renta de temporada o valorización de terreno.' },
        { q: '¿Cómo se llega a Jericoacoara?', a: 'Por el Aeropuerto de Jericoacoara (en Cruz/CE), administrado por Fraport hasta 2047, o por Fortaleza, a unos 300 km.' },
        { q: '¿Qué tiene Terra Ventos en la región de Jericoacoara?', a: 'Casas y terrenos en el Serrote y en el entorno inmediato de Jeri, además de la cartera de Preá y Guriú. Consulte la disponibilidad actual.' },
      ],
    },
  },

  guriu: {
    destinationKey: 'guriu',
    heroImage: '/imoveis/area-exclusiva-tatajuba-guriu-100000m-01.webp',
    geo: { latitude: -2.8558, longitude: -40.4772 },
    nomes: { pt: 'Guriú', en: 'Guriú', es: 'Guriú' },
    intro: {
      pt: 'Terrenos e áreas exclusivas à venda em Guriú — a vila preservada entre Jericoacoara e Tatajuba, com manguezal, dunas e preços ainda de entrada.',
      en: 'Land and exclusive areas for sale in Guriú — the preserved village between Jericoacoara and Tatajuba, with mangroves, dunes and still entry-level prices.',
      es: 'Terrenos y áreas exclusivas en venta en Guriú — la villa preservada entre Jericoacoara y Tatajuba, con manglar, dunas y precios aún de entrada.',
    },
    corpo: {
      pt: [
        {
          titulo: 'Guriú: entre Jeri e Tatajuba',
          paragrafos: [
            'Guriú é uma pequena vila de pescadores no município de Camocim, na rota de praia entre Jericoacoara e Tatajuba. É conhecida pelo manguezal do rio Guriú, pelos cavalos-marinhos e por um dos trechos de duna mais bonitos do litoral oeste.',
            'O acesso é feito em veículo 4x4 pela praia, o que mantém a vila preservada e fora do circuito de massa. Jericoacoara está a poucos quilômetros.',
          ],
        },
        {
          titulo: 'Oportunidade de entrada',
          paragrafos: [
            'Por ainda estar fora do radar da maioria dos compradores, Guriú oferece preços de entrada mais baixos que Preá e Jericoacoara. A Terra Ventos trabalha com áreas exclusivas e terrenos entre Tatajuba e Guriú, para quem quer posicionar capital cedo numa região preservada com Jeri no entorno.',
            'Como em todo o litoral oeste, a compra passa por due diligence de matrícula, georreferenciamento e situação ambiental — o manguezal e a faixa de praia têm restrições específicas.',
          ],
        },
      ],
      en: [
        {
          titulo: 'Guriú: between Jeri and Tatajuba',
          paragrafos: [
            'Guriú is a small fishing village in the municipality of Camocim, on the beach route between Jericoacoara and Tatajuba. It is known for the Guriú river mangroves, its seahorses and one of the most beautiful dune stretches on the west coast.',
            'Access is by 4x4 along the beach, which keeps the village preserved and off the mass circuit. Jericoacoara is a few kilometres away.',
          ],
        },
        {
          titulo: 'An entry-level opportunity',
          paragrafos: [
            'Still off most buyers\' radar, Guriú offers lower entry prices than Preá and Jericoacoara. Terra Ventos works with exclusive areas and land between Tatajuba and Guriú, for those who want to place capital early in a preserved region with Jeri next door.',
            'As across the west coast, a purchase goes through title, survey and environmental due diligence — the mangroves and the beach strip carry specific restrictions.',
          ],
        },
      ],
      es: [
        {
          titulo: 'Guriú: entre Jeri y Tatajuba',
          paragrafos: [
            'Guriú es una pequeña villa de pescadores en el municipio de Camocim, en la ruta de playa entre Jericoacoara y Tatajuba. Es conocida por el manglar del río Guriú, sus caballitos de mar y uno de los tramos de duna más bonitos del litoral oeste.',
            'El acceso es en vehículo 4x4 por la playa, lo que mantiene la villa preservada y fuera del circuito de masa. Jericoacoara está a pocos kilómetros.',
          ],
        },
        {
          titulo: 'Oportunidad de entrada',
          paragrafos: [
            'Por estar aún fuera del radar de la mayoría de los compradores, Guriú ofrece precios de entrada más bajos que Preá y Jericoacoara. Terra Ventos trabaja con áreas exclusivas y terrenos entre Tatajuba y Guriú, para quien quiere posicionar capital temprano en una región preservada con Jeri en el entorno.',
            'Como en todo el litoral oeste, la compra pasa por due diligence de escritura, georreferenciación y situación ambiental — el manglar y la franja de playa tienen restricciones específicas.',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'Onde fica Guriú?', a: 'É uma vila no município de Camocim, na rota de praia entre Jericoacoara e Tatajuba. O acesso é em 4x4 pela praia.' },
        { q: 'Guriú é um bom investimento?', a: 'É uma região preservada e ainda com preços de entrada, a poucos quilômetros de Jericoacoara. A tese é posicionar capital cedo antes da expansão do turismo de Jeri chegar com força.' },
        { q: 'O que a Terra Ventos vende em Guriú?', a: 'Áreas exclusivas e terrenos entre Tatajuba e Guriú. Consulte a disponibilidade atual.' },
        { q: 'Tem restrição ambiental para construir em Guriú?', a: 'Sim. O manguezal do rio Guriú e a faixa de praia têm restrições específicas. A Terra Ventos verifica a situação ambiental de cada imóvel antes da compra.' },
      ],
      en: [
        { q: 'Where is Guriú?', a: 'It is a village in the municipality of Camocim, on the beach route between Jericoacoara and Tatajuba. Access is by 4x4 along the beach.' },
        { q: 'Is Guriú a good investment?', a: 'It is a preserved region still at entry-level prices, a few kilometres from Jericoacoara. The thesis is placing capital early, before the expansion of Jeri tourism arrives in force.' },
        { q: 'What does Terra Ventos sell in Guriú?', a: 'Exclusive areas and land between Tatajuba and Guriú. Ask for current availability.' },
        { q: 'Are there building restrictions in Guriú?', a: 'Yes. The Guriú river mangroves and the beach strip carry specific restrictions. Terra Ventos checks the environmental status of each property before purchase.' },
      ],
      es: [
        { q: '¿Dónde está Guriú?', a: 'Es una villa en el municipio de Camocim, en la ruta de playa entre Jericoacoara y Tatajuba. El acceso es en 4x4 por la playa.' },
        { q: '¿Guriú es una buena inversión?', a: 'Es una región preservada y aún con precios de entrada, a pocos kilómetros de Jericoacoara. La tesis es posicionar capital temprano, antes de que la expansión del turismo de Jeri llegue con fuerza.' },
        { q: '¿Qué vende Terra Ventos en Guriú?', a: 'Áreas exclusivas y terrenos entre Tatajuba y Guriú. Consulte la disponibilidad actual.' },
        { q: '¿Hay restricción ambiental para construir en Guriú?', a: 'Sí. El manglar del río Guriú y la franja de playa tienen restricciones específicas. Terra Ventos verifica la situación ambiental de cada inmueble antes de la compra.' },
      ],
    },
  },

  bitupita: {
    destinationKey: 'bitupita',
    heroImage: '/imoveis/terrenos-bitupita-01.webp',
    geo: { latitude: -2.9236, longitude: -41.2606 },
    nomes: { pt: 'Bitupitá', en: 'Bitupitá', es: 'Bitupitá' },
    intro: {
      pt: 'Terrenos e imóveis pé na areia em Bitupitá — a nova fronteira do investimento no litoral cearense, com praias intocadas e potencial de valorização único.',
      en: 'Beachfront land and properties in Bitupitá — the new frontier of investment on the Ceará coast, with untouched beaches and unique appreciation potential.',
      es: 'Terrenos e inmuebles frente al mar en Bitupitá — la nueva frontera de inversión en el litoral cearense, con playas intactas y un potencial de valorización único.',
    },
    corpo: {
      pt: [
        {
          titulo: 'Bitupitá: extremo oeste do Ceará, na Rota das Emoções',
          paragrafos: [
            'Bitupitá pertence ao município de Barroquinha, no extremo oeste do Ceará, quase na divisa com o Piauí. Fica na Rota das Emoções, o roteiro que liga Jericoacoara ao Delta do Parnaíba e aos Lençóis Maranhenses.',
            'É pé na areia intocado — o estágio mais early do litoral cearense. O projeto da Terra Ventos em Bitupitá tem 10 lotes à beira-mar, 4.300 m² de área, 14,3 m de testada de praia e valores a partir de R$150 mil; 5 lotes já foram vendidos. Mais informações no site dedicado bitupita.com.',
          ],
        },
      ],
      en: [
        {
          titulo: 'Bitupitá: far-western Ceará, on the Rota das Emoções',
          paragrafos: [
            'Bitupitá belongs to the municipality of Barroquinha, in far-western Ceará, close to the Piauí border. It sits on the Rota das Emoções, the route linking Jericoacoara to the Parnaíba Delta and the Lençóis Maranhenses.',
            'It is untouched beachfront — the earliest stage on the Ceará coast. Terra Ventos\' Bitupitá project has 10 beachfront lots, 4,300 m² of area, 14.3 m of beach frontage and prices from R$150,000; 5 lots have already sold. More at the dedicated site bitupita.com.',
          ],
        },
      ],
      es: [
        {
          titulo: 'Bitupitá: extremo oeste de Ceará, en la Rota das Emoções',
          paragrafos: [
            'Bitupitá pertenece al municipio de Barroquinha, en el extremo oeste de Ceará, casi en el límite con Piauí. Está en la Rota das Emoções, el recorrido que une Jericoacoara con el Delta del Parnaíba y los Lençóis Maranhenses.',
            'Es frente al mar intacto — la etapa más early del litoral cearense. El proyecto de Terra Ventos en Bitupitá tiene 10 lotes frente al mar, 4.300 m² de área, 14,3 m de testera de playa y valores desde R$150 mil; 5 lotes ya se vendieron. Más información en el sitio dedicado bitupita.com.',
          ],
        },
      ],
    },
    faqs: {
      pt: [
        { q: 'Onde fica Bitupitá?', a: 'No município de Barroquinha, extremo oeste do Ceará, na Rota das Emoções entre Jericoacoara e o Delta do Parnaíba.' },
        { q: 'Quanto custam os lotes de Bitupitá?', a: 'O projeto da Terra Ventos tem lotes à beira-mar a partir de R$150 mil, com 4.300 m² e 14,3 m de testada de praia. 5 dos 10 lotes já foram vendidos.' },
        { q: 'Por que investir em Bitupitá?', a: 'É o estágio mais early do litoral cearense — pé na areia intocado, com potencial de valorização puxado pela consolidação da Rota das Emoções.' },
      ],
      en: [
        { q: 'Where is Bitupitá?', a: 'In the municipality of Barroquinha, far-western Ceará, on the Rota das Emoções between Jericoacoara and the Parnaíba Delta.' },
        { q: 'How much do the Bitupitá lots cost?', a: 'Terra Ventos\' project has beachfront lots from R$150,000, with 4,300 m² and 14.3 m of beach frontage. 5 of the 10 lots have already sold.' },
        { q: 'Why invest in Bitupitá?', a: 'It is the earliest stage on the Ceará coast — untouched beachfront, with appreciation potential driven by the consolidation of the Rota das Emoções.' },
      ],
      es: [
        { q: '¿Dónde está Bitupitá?', a: 'En el municipio de Barroquinha, extremo oeste de Ceará, en la Rota das Emoções entre Jericoacoara y el Delta del Parnaíba.' },
        { q: '¿Cuánto cuestan los lotes de Bitupitá?', a: 'El proyecto de Terra Ventos tiene lotes frente al mar desde R$150 mil, con 4.300 m² y 14,3 m de testera de playa. 5 de los 10 lotes ya se vendieron.' },
        { q: '¿Por qué invertir en Bitupitá?', a: 'Es la etapa más early del litoral cearense — frente al mar intacto, con potencial de valorización impulsado por la consolidación de la Rota das Emoções.' },
      ],
    },
  },
};
