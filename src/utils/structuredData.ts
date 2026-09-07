/**
 * Builders puros de JSON-LD (Schema.org). Sem DOM, sem browser-only APIs — rodam
 * tanto no gerador estático (generate-static.mjs, via tsx/Node) quanto no app
 * (via useStructuredData). O grafo global (Organization, escritórios, WebSite)
 * mora em index.html; aqui ficam só os dados que variam por página:
 * BreadcrumbList, FAQPage, CollectionPage de região e a ficha de imóvel.
 *
 * Convenção: todo builder devolve um objeto JSON-LD completo (com @context).
 * `serializeJsonLd` escapa `<` para não quebrar o </script> quando embutido no HTML.
 */
import { parsePrice } from './parsePrice';

export const SITE_URL = 'https://www.terraventos.com';
export const ORG_ID = `${SITE_URL}/#organization`;

export type JsonLd = Record<string, unknown>;

export interface BreadcrumbItem {
  name: string;
  /** URL absoluta OU caminho iniciado por "/" (será prefixado com SITE_URL). */
  url: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

const abs = (url: string): string =>
  /^https?:\/\//i.test(url) ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;

/** BreadcrumbList — toda página que não seja a home deve ter uma. */
export function buildBreadcrumbList(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.url),
    })),
  };
}

/** FAQPage — páginas de região e de intenção que trazem um bloco de perguntas. */
export function buildFaqPage(faqs: FaqItem[]): JsonLd | null {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export interface RegionCollectionInput {
  name: string;
  description: string;
  /** caminho da página, ex "/prea" ou "/en/guriu" */
  path: string;
  /** nome do lugar para o `about` (ex "Praia do Preá, Cruz, Ceará") */
  placeName: string;
  geo?: { latitude: number; longitude: number };
  /** nº de imóveis listados, vira ItemList quando > 0 */
  itemCount?: number;
  inLanguage?: string;
}

/** CollectionPage + Place — página de região (agrupa imóveis de uma localidade). */
export function buildRegionCollectionPage(input: RegionCollectionInput): JsonLd {
  const place: JsonLd = { '@type': 'Place', name: input.placeName };
  if (input.geo) {
    place.geo = {
      '@type': 'GeoCoordinates',
      latitude: input.geo.latitude,
      longitude: input.geo.longitude,
    };
  }
  const node: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${abs(input.path)}#webpage`,
    url: abs(input.path),
    name: input.name,
    description: input.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: place,
    provider: { '@id': ORG_ID },
  };
  if (input.inLanguage) node.inLanguage = input.inLanguage;
  if (input.itemCount && input.itemCount > 0) {
    node.mainEntity = {
      '@type': 'ItemList',
      numberOfItems: input.itemCount,
    };
  }
  return node;
}

export interface PropertyForListing {
  propertyTitle: string;
  location?: string;
  image: string;
  description: string;
  price?: string;
  priceTag?: string;
  typeLabel?: string;
}

/**
 * Ficha de imóvel — `Product` + `Offer` (parseável por ferramentas e por LLMs;
 * `additionalType` marca que é anúncio imobiliário). `imageUrl` e `pageUrl` já
 * devem vir absolutas.
 */
export function buildRealEstateListing(
  p: PropertyForListing,
  imageUrl: string,
  pageUrl: string,
): JsonLd {
  const numericPrice = parsePrice(p.price);
  const offer: JsonLd = {
    '@type': 'Offer',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: pageUrl,
    seller: { '@id': ORG_ID },
  };
  if (numericPrice) {
    offer.price = numericPrice;
  } else if (p.price) {
    offer.description = [p.priceTag, p.price].filter(Boolean).join(' ');
  }

  const node: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    additionalType: 'https://schema.org/RealEstateListing',
    name: p.propertyTitle,
    image: [imageUrl],
    description: p.description,
    url: pageUrl,
    brand: { '@id': ORG_ID },
    offers: offer,
  };
  if (p.typeLabel) node.category = p.typeLabel;
  if (p.location) {
    node.areaServed = { '@type': 'Place', name: p.location };
  }
  return node;
}

/** Escapa para embutir com segurança dentro de <script type="application/ld+json">. */
export function serializeJsonLd(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
