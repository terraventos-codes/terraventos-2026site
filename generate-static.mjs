import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dados das propriedades para o SEO
const properties = [
  {
    slug: 'area-exclusiva-tatajuba-guriu-100000m',
    title: 'Área Exclusiva em Tatajuba/Guriú - 100.000m² | Terra Ventos',
    description: 'Oportunidade única de investimento em frente ao mar entre Guriú e Tatajuba. Área de 10 hectares com documentação regularizada.',
    image: '/GURIU/VS--TATAJUBAfromTerraVentosonVimeo-0%E2%80%9920%E2%80%9D.jpg'
  },
  {
    slug: 'terreno-exclusivo-tatajuba-1000m',
    title: 'TERRENO EXCLUSIVO EM TATAJUBA — 1.000 m² | Terra Ventos',
    description: 'Descubra a joia de Tatajuba: Um terreno de 1.000 m² no coração da vila que é o novo desejo do kitesurf mundial. Segurança jurídica total.',
    image: '/TATAJUBA/WhatsApp%20Image%202026-04-23%20at%2018.35.22.jpeg'
  },
  {
    slug: 'terreno-exclusivo-prea-200m-mar',
    title: 'TERRENO EXCLUSIVO PREÁ — 200M DO MAR | Terra Ventos',
    description: 'Excelente oportunidade de investimento no Preá. Terreno com 250 m² localizado a apenas 200 metros da praia.',
    image: '/prea%20oportunidade/WhatsApp%20Image%202026-04-21%20at%2009.32.47.jpeg'
  },
  {
    slug: 'prea-house',
    title: 'PREÁ HOUSE | Terra Ventos',
    description: 'Propriedade luxuosa composta por duas construções ligadas por uma piscina central. 3 suítes e rooftop terrace.',
    image: '/Prea%20House/WhatsApp%20Image%202026-04-20%20at%2009.12.53.jpeg'
  },
  {
    slug: 'villa-prabhu',
    title: 'VILLA PRABHU — PARACURU-CE | Terra Ventos',
    description: 'Loteamento Fechado em Paracuru-CE com lagoa privativa, lazer completo e a 100m da praia.',
    image: '/VILLA_PRABHU/WhatsApp%20Image%202026-04-01%20at%2014.58.56%20(3).jpeg'
  },
  {
    slug: 'villa-condudu-3',
    title: 'CASA ALTO PADRÃO 3 SUÍTES | Terra Ventos',
    description: 'Seu Refúgio Privado Beira-Mar no Preá com 3 suítes amplas, piscina e segurança 24h.',
    image: '/VillaCondutuPaginaInicial/FINAL%2014.png'
  },
  {
    slug: 'terrenos-bitupita',
    title: 'TERRENOS PÉ NA AREIA EM BITUPITÁ | Terra Ventos',
    description: 'A Próxima Fronteira de Valorização: Bitupitá é o último refúgio intocado na Rota Costa dos Ventos.',
    image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg'
  },
  {
    slug: 'vila-do-ingles',
    title: 'VILA DO INGLÊS | Terra Ventos',
    description: 'A Essência do Luxo Sustentável: Residência de 200 m² alimentada inteiramente por energia solar no Preá.',
    image: '/viladoinglesPaginaInicial/Final%2004%20(1).png'
  },
  {
    slug: 'casa-matanzas',
    title: 'Casa Matanzas com tinaja / vista mar e bosque | Terra Ventos',
    description: 'Descubra Matanzas Paradise 🌊 Casa moderna confortavelmente equipada para 6 hóspedes no Chile.',
    image: '/Matanzas/3b77d98c-5cd0-4f51-816a-6e42748720d2.avif'
  }
];

const distPath = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distPath, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('ERRO: dist/index.html não encontrado. Execute "npm run build" primeiro.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

properties.forEach(prop => {
  const propDir = path.resolve(distPath, 'propriedade', prop.slug);
  if (!fs.existsSync(propDir)) {
    fs.mkdirSync(propDir, { recursive: true });
  }

  let html = template;
  const baseUrl = 'https://terraventos.com';
  const fullImageUrl = prop.image.startsWith('http') ? prop.image : `${baseUrl}${prop.image}`;
  const fullUrl = `${baseUrl}/propriedade/${prop.slug}`;

  // Substitui os títulos e metatags no template
  html = html.replace(/<title>.*?<\/title>/g, `<title>${prop.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?" ?\/?>/g, `<meta name="description" content="${prop.description}" />`);
  
  // Open Graph
  html = html.replace(/<meta property="og:title" content=".*?" ?\/?>/g, `<meta property="og:title" content="${prop.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" ?\/?>/g, `<meta property="og:description" content="${prop.description}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" ?\/?>/g, `<meta property="og:image" content="${fullImageUrl}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" ?\/?>/g, `<meta property="og:url" content="${fullUrl}" />`);

  // Twitter
  html = html.replace(/<meta name="twitter:title" content=".*?" ?\/?>/g, `<meta name="twitter:title" content="${prop.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" ?\/?>/g, `<meta name="twitter:description" content="${prop.description}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" ?\/?>/g, `<meta name="twitter:image" content="${fullImageUrl}" />`);

  fs.writeFileSync(path.resolve(propDir, 'index.html'), html);
  console.log(`Gerada página estática para: ${prop.slug}`);
});

// Também otimiza o index.html da Home Page
let homeHtml = template;
const homeTitle = 'Terra Ventos | Imóveis de Luxo e Investimentos no Ceará';
const homeDesc = 'Curadoria exclusiva de imóveis de alto padrão e oportunidades de investimento no litoral cearense (Preá, Tatajuba, Bitupitá).';
const homeImage = 'https://terraventos.com/banners/2.png';

homeHtml = homeHtml.replace(/<title>.*?<\/title>/g, `<title>${homeTitle}</title>`);
homeHtml = homeHtml.replace(/<meta name="description" content=".*?" ?\/?>/g, `<meta name="description" content="${homeDesc}" />`);
homeHtml = homeHtml.replace(/<meta property="og:title" content=".*?" ?\/?>/g, `<meta property="og:title" content="${homeTitle}" />`);
homeHtml = homeHtml.replace(/<meta property="og:description" content=".*?" ?\/?>/g, `<meta property="og:description" content="${homeDesc}" />`);
homeHtml = homeHtml.replace(/<meta property="og:image" content=".*?" ?\/?>/g, `<meta property="og:image" content="${homeImage}" />`);

fs.writeFileSync(templatePath, homeHtml);
console.log('Otimizado index.html da Home Page.');

console.log('Finalizado: Todas as páginas individuais foram criadas em dist/propriedade/');
