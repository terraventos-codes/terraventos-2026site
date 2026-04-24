export default function handler(req, res) {
  const { slug } = req.query;
  const host = req.headers.host || 'terraventos.com';
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const baseUrl = `${protocol}://${host}`;

  // Dados das propriedades para o preview (SEO dinâmico para bots)
  const data = [
    {
      slug: 'area-exclusiva-tatajuba-guriu-100000m',
      title: 'ÁREA EXCLUSIVA PÉ NA AREIA — 100.000 m²',
      description: '100.000 m² | 200m de Frente Mar | Matrícula e Escritura Pública',
      image: 'https://vumbnail.com/1186057204.jpg'
    },
    {
      slug: 'terreno-exclusivo-tatajuba-1000m',
      title: 'TERRENO EXCLUSIVO EM TATAJUBA — 1.000 m²',
      description: '1.000 m² | Matrícula Individualizada | Oportunidade Única',
      image: '/TATAJUBA/WhatsApp%20Image%202026-04-23%20at%2018.35.22.jpeg'
    },
    {
      slug: 'terreno-exclusivo-prea-200m-mar',
      title: 'TERRENO EXCLUSIVO PREÁ — 200M DO MAR',
      description: '250 m² | 10m x 25m | Apenas 200m da Praia',
      image: '/prea%20oportunidade/WhatsApp%20Image%202026-04-21%20at%2009.32.47.jpeg'
    },
    {
      slug: 'prea-house',
      title: 'PREÁ HOUSE',
      description: '745 m² | 3 Suítes | Piscina de 68 m²',
      image: '/Prea%20House/WhatsApp%20Image%202026-04-20%20at%2009.12.53.jpeg'
    },
    {
      slug: 'villa-prabhu',
      title: 'VILLA PRABHU — PARACURU-CE',
      description: 'Loteamento Fechado em Paracuru-CE com lagoa privativa, lazer completo e a 100m da praia.',
      image: '/VILLA_PRABHU/WhatsApp%20Image%202026-04-01%20at%2014.58.56%20(3).jpeg'
    },
    {
      slug: 'villa-condudu-3',
      title: 'CASA ALTO PADRÃO 3 SUÍTES',
      description: 'FRENTE À PRAIA DO PREÁ - Piscina, churrasqueira, varanda e condomínio de luxo 24 horas.',
      image: '/VillaCondutuPaginaInicial/FINAL%2014.png'
    },
    {
      slug: 'terrenos-bitupita',
      title: 'TERRENOS PÉ NA AREIA EM BITUPITÁ',
      description: '4.300 m² | 10 Projetos de Terrenos Exclusivos | O m² mais estratégico do Litoral Oeste.',
      image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg'
    },
    {
      slug: 'vila-do-ingles',
      title: 'VILA DO INGLÊS',
      description: '200 m² | 2 Banheiros | 10 Projetos Exclusivos | Luxo Sustentável no Preá.',
      image: '/viladoinglesPaginaInicial/Final%2004%20(1).png'
    },
    {
      slug: 'casa-matanzas',
      title: 'Casa Matanzas com tinaja / vista mar e bosque',
      description: 'Descubra Matanzas Paradise 🌊 Casa moderna confortavelmente equipada para 6 hóspedes.',
      image: '/Matanzas/3b77d98c-5cd0-4f51-816a-6e42748720d2.avif'
    }
  ];

  const property = data.find(p => p.slug === slug);

  if (!property) {
    return res.redirect('/');
  }

  const title = `${property.title} | Terra Ventos`;
  const description = property.description;
  const image = property.image.startsWith('http') ? property.image : `${baseUrl}${property.image}`;
  const url = `${baseUrl}/propriedade/${slug}`;

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <meta name="description" content="${description}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${url}">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">
    <meta property="twitter:image" content="${image}">

    <meta http-equiv="refresh" content="0;url=/propriedade/${slug}">
    <script>window.location.href = "/propriedade/${slug}";</script>
</head>
<body>
    Redirecionando para ${title}...
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=86400');
  return res.status(200).send(html);
}
