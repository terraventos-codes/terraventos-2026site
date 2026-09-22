import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import { normalizeString } from './normalizeString';

export type SeoLang = 'pt' | 'en' | 'es';

type PropertyForKeywords = Pick<OportunidadeDetalhe, 'propertyTitle' | 'location' | 'facilities'>;

const BRAND_TERMS: Record<SeoLang, string[]> = {
  pt: ['imóvel de luxo Ceará', 'investimento litoral cearense', 'Terra Ventos'],
  en: ['luxury real estate Ceará', 'Ceará coast investment', 'Terra Ventos'],
  es: ['inmueble de lujo Ceará', 'inversión litoral cearense', 'Terra Ventos'],
};

export const DESTINATION_MATCHERS: Array<{ key: string; pattern: RegExp; keywords: Record<SeoLang, string> }> = [
  { key: 'prea', pattern: /pre[áa]/i, keywords: { pt: 'Praia do Preá', en: 'Preá Beach', es: 'Playa de Preá' } },
  { key: 'tatajuba', pattern: /tatajuba/i, keywords: { pt: 'Tatajuba', en: 'Tatajuba', es: 'Tatajuba' } },
  { key: 'bitupita', pattern: /bitupit[áa]/i, keywords: { pt: 'Bitupitá', en: 'Bitupitá', es: 'Bitupitá' } },
  { key: 'taiba', pattern: /ta[íi]ba/i, keywords: { pt: 'Taíba', en: 'Taíba', es: 'Taíba' } },
  { key: 'jericoacoara', pattern: /jericoacoara|jeri\b/i, keywords: { pt: 'Jericoacoara', en: 'Jericoacoara', es: 'Jericoacoara' } },
  { key: 'guriu', pattern: /guri[uú]/i, keywords: { pt: 'Guriú', en: 'Guriú', es: 'Guriú' } },
  { key: 'acarau', pattern: /acara[uú]/i, keywords: { pt: 'Acaraú', en: 'Acaraú', es: 'Acaraú' } },
  { key: 'paracuru', pattern: /paracuru/i, keywords: { pt: 'Paracuru', en: 'Paracuru', es: 'Paracuru' } },
  { key: 'barrinha', pattern: /barrinha/i, keywords: { pt: 'Praia da Barrinha', en: 'Barrinha Beach', es: 'Playa de Barrinha' } },
];

export const TYPE_MATCHERS: Array<{ key: string; pattern: RegExp; keywords: Record<SeoLang, string> }> = [
  { key: 'terreno', pattern: /terreno|\bland\b|\blote\b|\blot\b/i, keywords: { pt: 'terreno', en: 'land', es: 'terreno' } },
  { key: 'sitio', pattern: /s[íi]tio|fazenda/i, keywords: { pt: 'sítio', en: 'countryside estate', es: 'finca rural' } },
  { key: 'mansao', pattern: /mans[ãa]o|mansion/i, keywords: { pt: 'mansão', en: 'mansion', es: 'mansión' } },
  { key: 'casa', pattern: /\bcasa\b|\bhouse\b/i, keywords: { pt: 'casa', en: 'house', es: 'casa' } },
  { key: 'villa', pattern: /vil(l)?a\b/i, keywords: { pt: 'villa', en: 'villa', es: 'villa' } },
  { key: 'duplex', pattern: /duplex/i, keywords: { pt: 'duplex', en: 'duplex', es: 'dúplex' } },
  { key: 'area', pattern: /[áa]rea/i, keywords: { pt: 'área exclusiva', en: 'exclusive area', es: 'área exclusiva' } },
];

/** Infere o tipo de imóvel (terreno/casa/etc.) a partir do título + localização — não existe
 * campo estruturado nos dados, então reaproveita os mesmos regex usados para SEO. O haystack
 * é normalizado (sem acentos) porque alguns registros têm acentuação corrompida na fonte
 * (ex.: "PreÃ¡" em vez de "Preá") e os regex têm alternativas acentuadas e não-acentuadas. */
export function inferPropertyTypeKey(item: PropertyForKeywords): string | null {
  const haystack = normalizeString(`${item.propertyTitle} ${item.location}`);
  return TYPE_MATCHERS.find((m) => m.pattern.test(haystack))?.key ?? null;
}

/** Verifica se um imóvel pertence a uma região (Tatajuba, Preá, Bitupitá...), pela mesma
 * lista de regex usada para derivar as keywords de SEO (ver nota de normalização acima). */
export function matchesDestination(item: PropertyForKeywords, destinationKey: string): boolean {
  const matcher = DESTINATION_MATCHERS.find((m) => m.key === destinationKey);
  if (!matcher) return false;
  const haystack = normalizeString(`${item.propertyTitle} ${item.location}`);
  return matcher.pattern.test(haystack);
}

function cleanFacility(raw: string): string {
  return raw.replace(/^!/, '').trim();
}

function uniqueJoin(terms: string[], max = 12): string {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const term of terms) {
    const t = term.trim();
    if (!t) continue;
    const key = t.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(t);
    if (out.length >= max) break;
  }
  return out.join(', ');
}

/** Deriva meta keywords de um imóvel a partir de tipo, localização e facilidades — mantém
 * o HTML estático (gerador) e o client-side (após hidratação) usando a mesma lógica. */
export function derivePropertyKeywords(item: PropertyForKeywords, lang: SeoLang): string {
  const haystack = `${item.propertyTitle} ${item.location}`;
  const typeMatch = TYPE_MATCHERS.find((m) => m.pattern.test(haystack));
  const destinationMatches = DESTINATION_MATCHERS.filter((m) => m.pattern.test(haystack)).map(
    (m) => m.keywords[lang],
  );

  const terms: string[] = [];
  if (typeMatch) terms.push(typeMatch.keywords[lang]);
  terms.push(...destinationMatches);
  terms.push(item.location);
  terms.push(...(item.facilities || []).slice(0, 4).map(cleanFacility));
  terms.push(...BRAND_TERMS[lang]);

  return uniqueJoin(terms);
}

export type StaticPageKey =
  | 'home'
  | 'propriedades'
  | 'quem-somos'
  | 'termos-e-condicoes'
  | 'politica-de-privacidade'
  | 'contato'
  | 'taiba'
  | 'tatajuba'
  | 'prea'
  | 'bitupita'
  | 'jericoacoara'
  | 'guriu'
  | 'ventoafavor';

export const PAGE_KEYWORDS: Record<StaticPageKey, Record<SeoLang, string>> = {
  home: {
    pt: 'imóveis de luxo Ceará, investimento litoral cearense, terrenos Preá, casas Tatajuba, Bitupitá, Terra Ventos',
    en: 'luxury real estate Ceará, Ceará coast investment, Preá land, Tatajuba houses, Bitupitá, Terra Ventos',
    es: 'inmuebles de lujo Ceará, inversión litoral cearense, terrenos Preá, casas Tatajuba, Bitupitá, Terra Ventos',
  },
  propriedades: {
    pt: 'imóveis à venda Ceará, terrenos pé na areia, casas de luxo litoral, oportunidades de investimento, Terra Ventos',
    en: 'properties for sale Ceará, beachfront land, luxury beach houses, investment opportunities, Terra Ventos',
    es: 'propiedades en venta Ceará, terrenos frente al mar, casas de lujo litoral, oportunidades de inversión, Terra Ventos',
  },
  'quem-somos': {
    pt: 'sobre a Terra Ventos, imobiliária de luxo Ceará, curadoria de imóveis, quem somos',
    en: 'about Terra Ventos, luxury real estate agency Ceará, property curation, who we are',
    es: 'sobre Terra Ventos, inmobiliaria de lujo Ceará, curaduría de propiedades, quiénes somos',
  },
  'termos-e-condicoes': {
    pt: 'termos e condições Terra Ventos, regras de uso, política de serviços imobiliários',
    en: 'Terra Ventos terms and conditions, usage rules, real estate service policy',
    es: 'términos y condiciones Terra Ventos, reglas de uso, política de servicios inmobiliarios',
  },
  'politica-de-privacidade': {
    pt: 'política de privacidade Terra Ventos, proteção de dados pessoais, LGPD imobiliária',
    en: 'Terra Ventos privacy policy, personal data protection, real estate data privacy',
    es: 'política de privacidad Terra Ventos, protección de datos personales, privacidad inmobiliaria',
  },
  contato: {
    pt: 'contato Terra Ventos, fale conosco imobiliária Ceará, atendimento imóveis de luxo',
    en: 'contact Terra Ventos, luxury real estate Ceará inquiries, get in touch',
    es: 'contacto Terra Ventos, atención inmobiliaria de lujo Ceará, hablar con nosotros',
  },
  taiba: {
    pt: 'terrenos Taíba, lotes pé na areia Taíba, investimento Taíba Ceará, vista mar Taíba, Terra Ventos',
    en: 'Taíba land for sale, beachfront lots Taíba, Taíba Ceará investment, sea view Taíba, Terra Ventos',
    es: 'terrenos en Taíba, lotes frente al mar Taíba, inversión Taíba Ceará, vista al mar Taíba, Terra Ventos',
  },
  tatajuba: {
    pt: 'imóveis em Tatajuba, terrenos Tatajuba, casas Tatajuba Ceará, investimento Tatajuba, Terra Ventos',
    en: 'properties in Tatajuba, Tatajuba land for sale, Tatajuba Ceará houses, Tatajuba investment, Terra Ventos',
    es: 'inmuebles en Tatajuba, terrenos Tatajuba, casas Tatajuba Ceará, inversión Tatajuba, Terra Ventos',
  },
  prea: {
    pt: 'imóveis no Preá, terrenos Praia do Preá, casas Preá Ceará, investimento Preá kitesurf, Terra Ventos',
    en: 'properties in Preá, Preá Beach land for sale, Preá Ceará houses, Preá kitesurf investment, Terra Ventos',
    es: 'inmuebles en Preá, terrenos Playa de Preá, casas Preá Ceará, inversión Preá kitesurf, Terra Ventos',
  },
  bitupita: {
    pt: 'imóveis em Bitupitá, terrenos Bitupitá, casas Bitupitá Ceará, investimento Bitupitá pé na areia, Terra Ventos',
    en: 'properties in Bitupitá, Bitupitá land for sale, Bitupitá Ceará houses, Bitupitá beachfront investment, Terra Ventos',
    es: 'inmuebles en Bitupitá, terrenos Bitupitá, casas Bitupitá Ceará, inversión Bitupitá frente al mar, Terra Ventos',
  },
  jericoacoara: {
    pt: 'imóveis em Jericoacoara, casas Serrote Jericoacoara, terrenos perto de Jeri, investimento imobiliário Jericoacoara, Terra Ventos',
    en: 'properties in Jericoacoara, Serrote Jericoacoara houses, land near Jeri, Jericoacoara real estate investment, Terra Ventos',
    es: 'inmuebles en Jericoacoara, casas Serrote Jericoacoara, terrenos cerca de Jeri, inversión inmobiliaria Jericoacoara, Terra Ventos',
  },
  guriu: {
    pt: 'terrenos em Guriú, áreas exclusivas Guriú Camocim, imóveis entre Jericoacoara e Tatajuba, investimento Guriú, Terra Ventos',
    en: 'land in Guriú, exclusive areas Guriú Camocim, property between Jericoacoara and Tatajuba, Guriú investment, Terra Ventos',
    es: 'terrenos en Guriú, áreas exclusivas Guriú Camocim, inmuebles entre Jericoacoara y Tatajuba, inversión Guriú, Terra Ventos',
  },
  ventoafavor: {
    pt: 'Vento a Favor, comunidade Terra Ventos, kitesurf Ceará, clube de investidores litoral',
    en: 'Vento a Favor, Terra Ventos community, kitesurfing Ceará, coastal investors club',
    es: 'Vento a Favor, comunidad Terra Ventos, kitesurf Ceará, club de inversores litoral',
  },
};
