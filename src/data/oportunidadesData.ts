export type OportunidadeDetalhe = {
  id: string;
  title: string;
  image: string;
  badge: string;
  propertyTitle: string;
  location: string;
  rating: number;
  exclusiveText: string;
  about: string[];
  infra: string[];
  facilities: string[];
  gallery: {
    main: string;
    sideTop: string;
    sideBottom: string;
  };
  mapImage: string;
  priceTag: string;
  price: string;
  installments: string;
};

export const oportunidadesData: OportunidadeDetalhe[] = [
  {
    id: '01',
    title: 'IMÓVEIS',
    image: '/imoveis.avif',
    badge: 'Venda',
    propertyTitle: 'CASAS DE LUXO NO PREÁ',
    location: 'Preá, Cruz - Ceará, Brasil',
    rating: 5,
    exclusiveText: '+3.200 m² | Imóveis de alto padrão',
    about: [
      'Residências prontas com arquitetura contemporânea e integração total com a natureza.',
      'Ativos ideais para segunda moradia e renda de locação premium, com demanda internacional consistente o ano inteiro.',
      'Curadoria de localização para garantir liquidez, valorização e experiência única de lifestyle no litoral cearense.',
    ],
    infra: [
      'Condomínio fechado com acesso controlado',
      'Rede elétrica e hidráulica pronta',
      'Proximidade dos principais spots de kite',
      'Vias de acesso em excelente estado',
      'Serviço de concierge local',
    ],
    facilities: ['Beach View', 'Pool', 'Wi-Fi', 'Ar-Condicionado', 'Varanda Gourmet', 'Vagas Cobertas'],
    gallery: {
      main: '/imoveis.avif',
      sideTop: '/projetos.avif',
      sideBottom: '/mapa.avif',
    },
    mapImage: '/mapa.avif',
    priceTag: 'Propriedade Venda',
    price: 'R$ 890.000',
    installments: 'Entrada + fluxo personalizado',
  },
  {
    id: '02',
    title: 'TERRENOS',
    image: '/terrenos.avif',
    badge: 'Venda',
    propertyTitle: 'TERRENOS PÉ NA AREIA EM BITUPITÁ',
    location: 'Bitupitá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '+5.000 m² | Apenas terrenos exclusivos',
    about: [
      'A essência do luxo no estado puro. Exclusividade, pé na areia e no mar mais estratégico do Litoral Oeste.',
      'Estamos lançando uma oportunidade única de investimento, rara e nobre, em Bitupitá: o último village planejado no Roteiro Costa dos Ventos.',
      'Oportunidade de entrada com valores de m² significativamente abaixo do preço maduro, como Preá e Icaraizinho, mas com os mesmos vetores de valorização.',
    ],
    infra: [
      'Spacious 3 Bedroom Layout',
      'Private Pool & Coconut',
      'Round Facilities Throughout',
      'Floor To Ceiling Glass Windows',
      'Prime Beverly Hills Location',
    ],
    facilities: ['Vista para a praia', 'Ar-condicionado', 'A poucos minutos do mar', 'Internet', 'Água potável', 'Roof garden', 'Sala', 'Varandas'],
    gallery: {
      main: '/imgbeach.avif',
      sideTop: '/terrenos.avif',
      sideBottom: '/mapa.avif',
    },
    mapImage: '/mapa.avif',
    priceTag: 'Propriedade à venda',
    price: 'R$ 120.000',
    installments: 'Entrada + 5x de 30.000',
  },
  {
    id: '03',
    title: 'PROJETOS',
    image: '/projetos.avif',
    badge: 'Venda',
    propertyTitle: 'PROJETOS BOUTIQUE EM ICARAIZINHO',
    location: 'Icaraizinho de Amontada, Ceará, Brasil',
    rating: 5,
    exclusiveText: '+2.400 m² | Projeto com assinatura',
    about: [
      'Empreendimentos planejados para investidores que buscam posicionamento antecipado em áreas de alta escassez.',
      'Produto com estudo de vento aplicado, diretrizes de implantação e possibilidade de personalização arquitetônica.',
      'Ideal para quem deseja unir patrimônio, renda e uso pessoal com padrão internacional.',
    ],
    infra: [
      'Masterplan com baixa densidade',
      'Acesso privativo e segurança',
      'Diretrizes de paisagismo nativo',
      'Soluções de energia eficiente',
      'Gestão de obra sob demanda',
    ],
    facilities: ['Masterplan', 'Ventilação cruzada', 'Infraestrutura premium', 'Acesso privado', 'Lazer integrado', 'Paisagismo'],
    gallery: {
      main: '/projetos.avif',
      sideTop: '/imgbeach.avif',
      sideBottom: '/mapa.avif',
    },
    mapImage: '/mapa.avif',
    priceTag: 'Projeto à venda',
    price: 'R$ 340.000',
    installments: 'Conforme cronograma de obra',
  },
];
