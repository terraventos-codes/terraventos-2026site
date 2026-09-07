import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getOportunidadesData } from './src/data/oportunidadesDataI18n.ts';
import { derivePropertyKeywords, PAGE_KEYWORDS } from './src/utils/seoKeywords.ts';
import { toOgImage } from './src/utils/seoImages.ts';
import {
  buildBreadcrumbList,
  buildRealEstateListing,
  buildRegionCollectionPage,
  buildFaqPage,
  serializeJsonLd,
} from './src/utils/structuredData.ts';
import { REGIOES } from './src/data/regioes.ts';
import { matchesDestination } from './src/utils/seoKeywords.ts';

const BREADCRUMB_LIST_LABEL = { pt: 'Imóveis', en: 'Properties', es: 'Inmuebles' };

const REGION_TITLE = {
  pt: (nome) => `${nome} — Imóveis e Terrenos à Venda | Terra Ventos`,
  en: (nome) => `${nome} — Real Estate & Land for Sale | Terra Ventos`,
  es: (nome) => `${nome} — Inmuebles y Terrenos en Venta | Terra Ventos`,
};

const FAQ_HEADING = { pt: 'Perguntas frequentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes' };

const escHtml = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Monta o HTML estático (visível a crawlers sem JS) do corpo + FAQ de uma região. */
function regionBodyHtml(config, langId) {
  const corpo = config.corpo?.[langId] || [];
  const faqs = config.faqs?.[langId] || [];
  const secoes = corpo
    .map(
      (s) => `
        <section>
          <h2>${escHtml(s.titulo)}</h2>
          ${s.paragrafos.map((p) => `<p>${escHtml(p)}</p>`).join('\n          ')}
        </section>`,
    )
    .join('\n');
  const faqHtml = faqs.length
    ? `
        <section>
          <h2>${FAQ_HEADING[langId] || FAQ_HEADING.pt}</h2>
          ${faqs
            .map((f) => `<h3>${escHtml(f.q)}</h3>\n          <p>${escHtml(f.a)}</p>`)
            .join('\n          ')}
        </section>`
    : '';
  return `${secoes}\n${faqHtml}`;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.terraventos.com';

// Metadados fixos de cada idioma. A lista de imóveis é derivada diretamente de
// getOportunidadesData() — a mesma fonte de dados usada pelo app — para que toda
// propriedade (incluindo `unlisted`) ganhe automaticamente sua própria página
// estática, sem depender de uma lista mantida manualmente aqui.
const localeMeta = {
  pt: {
    code: 'pt_BR',
    homeTitle: 'Terra Ventos | Imóveis de Luxo e Investimentos no Ceará',
    homeDesc: 'Curadoria exclusiva de imóveis de alto padrão e oportunidades de investimento no litoral cearense (Preá, Tatajuba, Bitupitá).',
  },
  en: {
    code: 'en_US',
    homeTitle: 'Terra Ventos | Luxury Real Estate and Investments in Ceará',
    homeDesc: 'Exclusive curation of high-end properties and investment opportunities on the Ceará coast (Preá, Tatajuba, Bitupitá).',
  },
  es: {
    code: 'es_ES',
    homeTitle: 'Terra Ventos | Inmuebles de Lujo e Inversiones en Ceará',
    homeDesc: 'Curaduría exclusiva de propiedades de alto nivel y oportunidades de inversión en la costa de Ceará (Preá, Tatajuba, Bitupitá).',
  },
};

const locales = Object.fromEntries(
  Object.entries(localeMeta).map(([langId, meta]) => [
    langId,
    {
      ...meta,
      properties: getOportunidadesData(langId).map((item) => ({
        slug: item.slug,
        title: item.propertyTitle,
        description: item.summaryDescription || item.exclusiveText || item.about[0] || '',
        image: item.image,
        unlisted: item.unlisted || false,
        // Conteúdo real do imóvel, para o fallback estático visível a crawlers
        // que não executam JS (hoje só título/descrição apareciam; preço,
        // infraestrutura e facilidades só existiam depois do JS rodar).
        location: item.location,
        about: item.about,
        infra: item.infra,
        facilities: item.facilities,
        priceTag: item.priceTag,
        price: item.price,
        keywords: derivePropertyKeywords(item, langId),
      })),
    },
  ]),
);

const distPath = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distPath, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('ERRO: dist/index.html não encontrado. Execute "npm run build" primeiro.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const SECTION_LABELS = {
  pt: { details: 'Detalhes do Imóvel', infra: 'Infraestrutura', facilities: 'Facilidades' },
  en: { details: 'Property Details', infra: 'Infrastructure', facilities: 'Facilities' },
  es: { details: 'Detalles del Inmueble', infra: 'Infraestructura', facilities: 'Facilidades' },
};

function generatePage(targetPath, title, desc, img, url, langCode, langId, imgAlt = null, suffix = '/', property = null, keywords = '', extraJsonLd = [], extraBodyHtml = '') {
  let html = template;
  // og:image/twitter:image usa o recorte 1200x630 pré-gerado (nunca a foto original direto):
  // resolve tanto o aspect ratio (fotos reais são quase quadradas ou 16:9) quanto o avif
  // (suporte inconsistente nos crawlers de preview social). O <img> visível na página segue
  // usando a imagem original normalmente.
  const socialImg = toOgImage(img);
  const fullImageUrl = socialImg.startsWith('http') ? socialImg : `${baseUrl}${socialImg}`;
  const displayTitle = title.includes('Terra Ventos') ? title : `${title} | Terra Ventos`;
  const imageAltText = imgAlt || displayTitle;

  // Basico
  html = html.replace(/<html lang=".*?"/g, `<html lang="${langId}" prefix="og: http://ogp.me/ns#"`);
  html = html.replace(/<title>.*?<\/title>/g, `<title>${displayTitle}</title>`);
  html = html.replace(/<meta name="description" content=".*?" ?\/?>/g, `<meta name="description" content="${desc}" />`);

  // Meta keywords — não existe no template base, então injeta se ausente
  if (keywords) {
    if (!html.includes('name="keywords"')) {
      html = html.replace('</head>', `<meta name="keywords" content="${keywords}" />\n</head>`);
    } else {
      html = html.replace(/<meta name="keywords" content=".*?" ?\/?>/g, `<meta name="keywords" content="${keywords}" />`);
    }
  }

  // Open Graph
  html = html.replace(/<meta property="og:title" content=".*?" ?\/?>/g, `<meta property="og:title" content="${displayTitle}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" ?\/?>/g, `<meta property="og:description" content="${desc}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" ?\/?>/g, `<meta property="og:image" content="${fullImageUrl}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" ?\/?>/g, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta property="og:site_name" content=".*?" ?\/?>/g, `<meta property="og:site_name" content="Terra Ventos" />`);

  // Canônica — cada página deve declarar a própria URL, nunca a home
  html = html.replace(/<link rel="canonical" href=".*?" ?\/?>/g, `<link rel="canonical" href="${url}" />`);

  // Hreflang — alternates devem apontar para a versão traduzida desta mesma página, não para a home
  const ptUrl = `${baseUrl}${suffix}`;
  const enUrl = suffix === '/' ? `${baseUrl}/en/` : `${baseUrl}/en${suffix}`;
  const esUrl = suffix === '/' ? `${baseUrl}/es/` : `${baseUrl}/es${suffix}`;
  html = html.replace(/<link rel="alternate" hreflang="pt-BR" href=".*?" ?\/?>/g, `<link rel="alternate" hreflang="pt-BR" href="${ptUrl}" />`);
  html = html.replace(/<link rel="alternate" hreflang="en-US" href=".*?" ?\/?>/g, `<link rel="alternate" hreflang="en-US" href="${enUrl}" />`);
  html = html.replace(/<link rel="alternate" hreflang="es-ES" href=".*?" ?\/?>/g, `<link rel="alternate" hreflang="es-ES" href="${esUrl}" />`);
  html = html.replace(/<link rel="alternate" hreflang="x-default" href=".*?" ?\/?>/g, `<link rel="alternate" hreflang="x-default" href="${ptUrl}" />`);
  html = html.replace(/<meta property="og:locale" content=".*?" ?\/?>/g, `<meta property="og:locale" content="${langCode}" />`);

  // Twitter
  html = html.replace(/<meta name="twitter:title" content=".*?" ?\/?>/g, `<meta name="twitter:title" content="${displayTitle}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" ?\/?>/g, `<meta name="twitter:description" content="${desc}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" ?\/?>/g, `<meta name="twitter:image" content="${fullImageUrl}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" ?\/?>/g, `<meta name="twitter:url" content="${url}" />`);

  // OG image dimensions + alt (melhora preview no LinkedIn, WhatsApp, Instagram)
  html = html.replace(/<meta property="og:image:width" content=".*?">/g, '<meta property="og:image:width" content="1200">');
  html = html.replace(/<meta property="og:image:height" content=".*?">/g, '<meta property="og:image:height" content="630">');
  // Inject og:image:alt if not already present
  if (!html.includes('og:image:alt')) {
    html = html.replace('</head>', `<meta property="og:image:alt" content="${imageAltText}" />\n</head>`);
  } else {
    html = html.replace(/<meta property="og:image:alt" content=".*?" ?\/?>/g, `<meta property="og:image:alt" content="${imageAltText}" />`);
  }

  // Injetar script para forçar o idioma no React (através do localStorage)
  const langScript = `<script>localStorage.setItem('i18nextLng', '${langId}');</script>`;
  html = html.replace('</head>', `${langScript}\n</head>`);

  // JSON-LD por página: BreadcrumbList (toda página que não é a home) +
  // RealEstateListing nas fichas de imóvel + blocos extras (FAQPage, CollectionPage
  // vindos das páginas de região/intenção). O grafo global (Organization, escritórios,
  // WebSite) já está no index.html base e é herdado por todas as páginas.
  const jsonLdBlocks = [];
  if (suffix !== '/') {
    const homeCrumb = { name: 'Terra Ventos', url: langId === 'pt' ? '/' : `/${langId}/` };
    const langPrefix = langId === 'pt' ? '' : `/${langId}`;
    const cleanName = displayTitle.split('|')[0].trim();
    if (property) {
      jsonLdBlocks.push(buildBreadcrumbList([
        homeCrumb,
        { name: BREADCRUMB_LIST_LABEL[langId] || BREADCRUMB_LIST_LABEL.pt, url: `${langPrefix}/propriedades` },
        { name: property.title || cleanName, url },
      ]));
      jsonLdBlocks.push(buildRealEstateListing(
        {
          propertyTitle: property.title || cleanName,
          location: property.location,
          image: img,
          description: desc,
          price: property.price,
          priceTag: property.priceTag,
        },
        fullImageUrl,
        url,
      ));
    } else {
      jsonLdBlocks.push(buildBreadcrumbList([homeCrumb, { name: cleanName, url }]));
    }
  }
  for (const extra of extraJsonLd) {
    if (extra) jsonLdBlocks.push(extra);
  }
  if (jsonLdBlocks.length) {
    const ldScripts = jsonLdBlocks
      .map((block) => `<script type="application/ld+json" data-ssr-ld="true">${serializeJsonLd(block)}</script>`)
      .join('\n');
    html = html.replace('</head>', `${ldScripts}\n</head>`);
  }

  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Conteúdo real do imóvel (preço, infra, facilidades) para o fallback estático —
  // sem isso, crawlers que não executam JS só viam título + uma linha de descrição.
  const labels = SECTION_LABELS[langId] || SECTION_LABELS.pt;
  const propertySection = property ? `
        <section>
          <h2>${labels.details}</h2>
          ${property.location ? `<p>${property.location}</p>` : ''}
          ${property.price ? `<p><strong>${property.priceTag ? `${property.priceTag} ` : ''}${property.price}</strong></p>` : ''}
          ${(property.about || []).map((paragraph) => `<p>${paragraph}</p>`).join('\n          ')}
        </section>
        ${(property.infra || []).length ? `
        <section>
          <h3>${labels.infra}</h3>
          <ul>
            ${property.infra.map((item) => `<li>${item}</li>`).join('\n            ')}
          </ul>
        </section>` : ''}
        ${(property.facilities || []).length ? `
        <section>
          <h3>${labels.facilities}</h3>
          <ul>
            ${property.facilities.map((item) => `<li>${item.replace(/^!/, '')}</li>`).join('\n            ')}
          </ul>
        </section>` : ''}
  ` : '';

  // Injetar H1 e conteúdo básico no root para crawlers que não executam JS
  const staticContent = `
    <div id="root">
      <header>
        <img src="${baseUrl}/logo.avif" alt="Terra Ventos" />
        <nav>
          <a href="${baseUrl}/">Início</a>
          <a href="${baseUrl}/propriedades">Oportunidades</a>
        </nav>
      </header>
      <main>
        <h1>${displayTitle}</h1>
        <p>${desc}</p>
        <img src="${fullImageUrl}" alt="${displayTitle}" />
        ${propertySection}
        ${extraBodyHtml}
        <section>
          <h2>Sobre a Terra Ventos</h2>
          <p>A Terra Ventos é especialista em curadoria de imóveis de luxo e investimentos exclusivos no litoral do Ceará. Com foco em destinos de alto padrão como Preá, Tatajuba e Bitupitá, oferecemos oportunidades únicas para quem busca sofisticação, conforto e rentabilidade no paraíso do kitesurf.</p>
          <p>Nossa assessoria completa garante segurança jurídica e as melhores taxas de valorização para investidores nacionais e internacionais. Explore nossas casas de design, terrenos pé na areia e projetos exclusivos integrados à natureza.</p>
        </section>

        <section>
          <h2>Destinos em Destaque</h2>
          <ul>
            <li><strong>Preá:</strong> O epicentro do luxo rústico e do kitesurf mundial.</li>
            <li><strong>Tatajuba:</strong> Beleza intocada e valorização acelerada.</li>
            <li><strong>Bitupitá:</strong> A nova fronteira do investimento pé na areia.</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Terra Ventos | Imóveis de Luxo no Ceará</p>
        <p>Contatos: +55 (85) 9 8557-2807 | info@terraventos.com</p>
        <p>Sede: Rua Monsenhor Bruno, nº 1153, sala 608, Aldeota, Fortaleza - CE, 60115-191</p>
        <p>Escritório Preá: Rua Antônio Chagas, nº 857 - Preá, Cruz - CE, 62595-000</p>
      </footer>
    </div>
  `;
  
  html = html.replace('<div id="root"></div>', staticContent);

  fs.writeFileSync(targetPath, html);
}

// Páginas "estáticas" (não dependem de uma lista de imóveis): institucionais,
// mais /taiba e /ventoafavor — que antes não eram geradas fisicamente e por
// isso caíam no fallback SPA (HTML da home) para qualquer crawler sem JS.
const staticPages = [
  {
    slug: 'quem-somos',
    priority: 0.7,
    titles: {
      pt: 'Quem Somos | Terra Ventos',
      en: 'About Us | Terra Ventos',
      es: 'Quiénes Somos | Terra Ventos'
    },
    descriptions: {
      pt: 'Curadoria de imóveis de luxo e investimentos estratégicos no litoral do Ceará.',
      en: 'Curating luxury properties and strategic investments on the Ceará coast.',
      es: 'Curaduría de propiedades de lujo e inversiones estratégicas en la costa de Ceará.'
    }
  },
  {
    slug: 'termos-e-condicoes',
    priority: 0.7,
    titles: {
      pt: 'Termos e Condições | Terra Ventos',
      en: 'Terms & Conditions | Terra Ventos',
      es: 'Términos y Condiciones | Terra Ventos'
    },
    descriptions: {
      pt: 'Regras e diretrizes para navegação e serviços da Terra Ventos.',
      en: 'Rules and guidelines for browsing and using Terra Ventos services.',
      es: 'Reglas y directrices para la navegación y servicios de Terra Ventos.'
    }
  },
  {
    slug: 'politica-de-privacidade',
    priority: 0.7,
    titles: {
      pt: 'Política de Privacidade | Terra Ventos',
      en: 'Privacy Policy | Terra Ventos',
      es: 'Política de Privacidad | Terra Ventos'
    },
    descriptions: {
      pt: 'Como protegemos e respeitamos os seus dados pessoais.',
      en: 'How we protect and respect your personal data.',
      es: 'Cómo protegemos y respetamos sus datos personales.'
    }
  },
  {
    slug: 'contato',
    priority: 0.7,
    titles: {
      pt: 'Contato | Terra Ventos',
      en: 'Contact Us | Terra Ventos',
      es: 'Contacto | Terra Ventos'
    },
    descriptions: {
      pt: 'Canais oficiais de atendimento da Terra Ventos. CNPJ 60.726.249/0001-00.',
      en: 'Official service channels for Terra Ventos. CNPJ 60.726.249/0001-00.',
      es: 'Canales oficiales de atención de Terra Ventos. CNPJ 60.726.249/0001-00.'
    }
  },
  {
    slug: 'taiba',
    priority: 0.8,
    image: '/imoveis/lote-barramar-lagoa-taiba-03.webp',
    titles: {
      pt: 'Oportunidades Exclusivas em Taíba | Terra Ventos',
      en: 'Exclusive Opportunities in Taíba | Terra Ventos',
      es: 'Oportunidades Exclusivas en Taíba | Terra Ventos'
    },
    descriptions: {
      pt: 'Terrenos selecionados com alto potencial de valorização e segurança jurídica na Taíba. Opções com MATRÍCULA e VISTA MAR.',
      en: 'Selected land plots with high appreciation potential and legal security in Taíba. Options with clear title and sea view.',
      es: 'Terrenos seleccionados con alto potencial de valorización y seguridad jurídica en Taíba. Opciones con escritura y vista al mar.'
    }
  },
  {
    slug: 'ventoafavor',
    priority: 0.6,
    titles: {
      pt: 'Vento a Favor | Comunidade Terra Ventos',
      en: 'Vento a Favor | Terra Ventos Community',
      es: 'Vento a Favor | Comunidad Terra Ventos'
    },
    descriptions: {
      pt: 'A comunidade Terra Ventos para investidores e apaixonados por kitesurf no litoral do Ceará.',
      en: 'The Terra Ventos community for investors and kitesurfing enthusiasts on the Ceará coast.',
      es: 'La comunidad Terra Ventos para inversores y apasionados del kitesurf en el litoral de Ceará.'
    }
  }
];

// Gerar Sitemap.xml
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

Object.entries(locales).forEach(([langId, data]) => {
  const langPrefix = langId === 'pt' ? '' : `/${langId}`;
  
  // Home Page
  const homePath = langId === 'pt' ? templatePath : path.resolve(distPath, langId, 'index.html');
  generatePage(homePath, data.homeTitle, data.homeDesc, '/banners/banners-01.webp', `${baseUrl}${langPrefix}/`, data.code, langId, null, '/', null, PAGE_KEYWORDS.home[langId]);
  console.log(`Página Home gerada para: ${langId}`);

  sitemap += `
  <url>
    <loc>${baseUrl}${langPrefix}/</loc>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/"/>
  </url>`;

  // Listagem de Propriedades (Oportunidades)
  const listPath = path.resolve(distPath, langId === 'pt' ? '' : langId, 'propriedades', 'index.html');
  const listTitle = langId === 'pt'
    ? 'Imóveis de Luxo no Ceará — Todas as Propriedades | Terra Ventos'
    : langId === 'en'
      ? 'Luxury Real Estate in Ceará — All Properties | Terra Ventos'
      : 'Inmuebles de Lujo en Ceará — Todas las Propiedades | Terra Ventos';
  const listDesc = langId === 'pt'
    ? 'Explore 9+ imóveis exclusivos à beira-mar no litoral do Ceará. Terrenos, casas e projetos de alto padrão em Preá, Tatajuba e Bitupitá. Curadoria Terra Ventos.'
    : langId === 'en'
      ? 'Browse 9+ exclusive beachfront properties on the Ceará coast. High-end land, houses, and projects in Preá, Tatajuba and Bitupitá. Terra Ventos curation.'
      : 'Explora 9+ propiedades exclusivas frente al mar en la costa de Ceará. Terrenos, casas y proyectos de alto nivel en Preá, Tatajuba y Bitupitá.';
  const listImgAlt = langId === 'pt'
    ? 'Imóveis de Luxo no Ceará — Terra Ventos'
    : langId === 'en'
      ? 'Luxury Real Estate in Ceará — Terra Ventos'
      : 'Inmuebles de Lujo en Ceará — Terra Ventos';
  generatePage(listPath, listTitle, listDesc, '/og-propriedades.png', `${baseUrl}${langPrefix}/propriedades`, data.code, langId, listImgAlt, '/propriedades', null, PAGE_KEYWORDS.propriedades[langId]);
  console.log(`Página Listagem Propriedades gerada para: ${langId}`);

  sitemap += `
  <url>
    <loc>${baseUrl}${langPrefix}/propriedades</loc>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/propriedades"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/propriedades"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/propriedades"/>
  </url>`;

  // Institucionais + taiba + ventoafavor
  staticPages.forEach(p => {
    const pagePath = path.resolve(distPath, langId === 'pt' ? '' : langId, p.slug, 'index.html');
    const title = p.titles[langId];
    const desc = p.descriptions[langId];
    const keywords = PAGE_KEYWORDS[p.slug]?.[langId] || '';
    generatePage(pagePath, title, desc, p.image || '/og-propriedades.png', `${baseUrl}${langPrefix}/${p.slug}`, data.code, langId, null, `/${p.slug}`, null, keywords);
    console.log(`Página estática gerada: ${langId} - ${p.slug}`);

    sitemap += `
  <url>
    <loc>${baseUrl}${langPrefix}/${p.slug}</loc>
    <priority>${p.priority ?? 0.7}</priority>
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/${p.slug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/${p.slug}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/${p.slug}"/>
  </url>`;
  });

  // Páginas de região (Preá, Tatajuba, Jericoacoara, Guriú, Bitupitá) —
  // driven por src/data/regioes.ts (fonte única, mesma do RegiaoPage). Cada uma
  // ganha corpo de conteúdo + FAQ visíveis no HTML estático e JSON-LD
  // CollectionPage + FAQPage.
  Object.entries(REGIOES).forEach(([regionKey, config]) => {
    const pagePath = path.resolve(distPath, langId === 'pt' ? '' : langId, regionKey, 'index.html');
    const nome = config.nomes[langId];
    const title = (REGION_TITLE[langId] || REGION_TITLE.pt)(nome);
    const desc = config.intro[langId];
    const pageUrl = `${baseUrl}${langPrefix}/${regionKey}`;
    const listedCount = data.properties.filter(
      (p) => !p.unlisted && matchesDestination(
        { propertyTitle: p.title, location: p.location, facilities: [] },
        config.destinationKey,
      ),
    ).length;
    const faqs = config.faqs?.[langId] || [];
    const extraJsonLd = [
      buildRegionCollectionPage({
        name: title,
        description: desc,
        path: `${langPrefix}/${regionKey}`,
        placeName: `${config.nomes.pt}, Ceará`,
        geo: config.geo,
        itemCount: listedCount,
        inLanguage: data.code.replace('_', '-'),
      }),
      buildFaqPage(faqs),
    ];
    generatePage(
      pagePath, title, desc, config.heroImage, pageUrl, data.code, langId, null,
      `/${regionKey}`, null, PAGE_KEYWORDS[regionKey]?.[langId] || '', extraJsonLd,
      regionBodyHtml(config, langId),
    );
    console.log(`Página Região gerada: ${langId} - ${regionKey}`);

    sitemap += `
  <url>
    <loc>${pageUrl}</loc>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/${regionKey}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/${regionKey}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/${regionKey}"/>
  </url>`;
  });

  // Propriedades — toda propriedade ganha página estática, mesmo unlisted
  // (acessível por link direto); só o sitemap.xml exclui as unlisted, para
  // não promover ativamente fichas marcadas como "não listar".
  data.properties.forEach(prop => {
    const propPath = path.resolve(distPath, langId === 'pt' ? '' : langId, 'propriedade', prop.slug, 'index.html');
    generatePage(propPath, prop.title, prop.description, prop.image, `${baseUrl}${langPrefix}/propriedade/${prop.slug}`, data.code, langId, null, `/propriedade/${prop.slug}`, prop, prop.keywords);
    console.log(`Página Propriedade gerada: ${langId} - ${prop.slug}${prop.unlisted ? ' (unlisted, fora do sitemap)' : ''}`);

    if (prop.unlisted) return;

    sitemap += `
  <url>
    <loc>${baseUrl}${langPrefix}/propriedade/${prop.slug}</loc>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/propriedade/${prop.slug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/propriedade/${prop.slug}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/propriedade/${prop.slug}"/>
  </url>`;
  });
});

// Páginas HTML standalone fora do app React (sem versão /en, /es — sem hreflang alternates)
// "/bitupita" saiu daqui: agora é gerada com hreflang completo no laço de staticPages acima.
const standalonePages = [
  { loc: '/advogados', priority: 0.5 },
  { loc: '/parceiros', priority: 0.5 },
  { loc: '/founders', priority: 0.5 },
  { loc: '/gowind.html', priority: 0.4 },
];
standalonePages.forEach(({ loc, priority }) => {
  sitemap += `
  <url>
    <loc>${baseUrl}${loc}</loc>
    <priority>${priority}</priority>
  </url>`;
});

sitemap += `\n</urlset>`;
fs.writeFileSync(path.resolve(distPath, 'sitemap.xml'), sitemap);
console.log('Sitemap.xml gerado com sucesso.');

console.log('Finalizado: Todas as páginas individuais e localizadas foram criadas.');
