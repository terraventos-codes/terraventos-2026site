export type RegiaoKey = 'tatajuba' | 'prea' | 'bitupita';

interface RegiaoConfig {
  /** Chave correspondente em DESTINATION_MATCHERS (src/utils/seoKeywords.ts) */
  destinationKey: string;
  heroImage: string;
  nomes: Record<'pt' | 'en' | 'es', string>;
  intro: Record<'pt' | 'en' | 'es', string>;
  /** Coordenadas do ponto de referência da região (usadas no JSON-LD Place). */
  geo?: { latitude: number; longitude: number };
}

export const REGIOES: Record<RegiaoKey, RegiaoConfig> = {
  tatajuba: {
    destinationKey: 'tatajuba',
    heroImage: '/imoveis/area-exclusiva-tatajuba-guriu-100000m-01.webp',
    nomes: { pt: 'Tatajuba', en: 'Tatajuba', es: 'Tatajuba' },
    intro: {
      pt: 'Terrenos e imóveis à venda em Tatajuba, no litoral oeste do Ceará — natureza preservada, dunas intocadas e um dos destinos com valorização mais acelerada da região.',
      en: 'Land and properties for sale in Tatajuba, on Ceará\'s west coast — preserved nature, untouched dunes and one of the fastest-appreciating destinations in the region.',
      es: 'Terrenos e inmuebles en venta en Tatajuba, en el litoral oeste de Ceará — naturaleza preservada, dunas intactas y uno de los destinos con mayor valorización de la región.',
    },
  },
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
  },
  bitupita: {
    destinationKey: 'bitupita',
    heroImage: '/imoveis/terrenos-bitupita-01.webp',
    nomes: { pt: 'Bitupitá', en: 'Bitupitá', es: 'Bitupitá' },
    intro: {
      pt: 'Terrenos e imóveis pé na areia em Bitupitá — a nova fronteira do investimento no litoral cearense, com praias intocadas e potencial de valorização único.',
      en: 'Beachfront land and properties in Bitupitá — the new frontier of investment on the Ceará coast, with untouched beaches and unique appreciation potential.',
      es: 'Terrenos e inmuebles frente al mar en Bitupitá — la nueva frontera de inversión en el litoral cearense, con playas intactas y un potencial de valorización único.',
    },
  },
};
