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
    title: 'IMOVEIS',
    image: '/imoveis.avif',
    badge: 'Venda',
    propertyTitle: 'CASAS DE LUXO NO PREA',
    location: 'Prea, Cruz - Ceara, Brasil',
    rating: 5,
    exclusiveText: '+3.200 m2 | Imoveis de alto padrao',
    about: [
      'Residencias prontas com arquitetura contemporanea e integracao total com a natureza.',
      'Ativos ideais para segunda moradia e renda de locacao premium, com demanda internacional consistente o ano inteiro.',
      'Curadoria de localizacao para garantir liquidez, valorizacao e experiencia unica de lifestyle no litoral cearense.',
    ],
    infra: [
      'Condominio fechado com acesso controlado',
      'Rede eletrica e hidraulica pronta',
      'Proximidade dos principais spots de kite',
      'Vias de acesso em excelente estado',
      'Servico de concierge local',
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
    propertyTitle: 'TERRENOS PE NA AREIA EM BITUPITA',
    location: 'Bitupita, Ceara, Brasil',
    rating: 5,
    exclusiveText: '+5000 m2 | Apenas terrenos exclusivos',
    about: [
      'A essencia do luxo no estado puro. Exclusividade, pe na areia e no mar mais estrategico do Litoral Oeste.',
      'Estamos lancando uma oportunidade unica de investimento, rara e nobre, em Bitupita: o ultimo village planejado no Roteiro Costa dos Ventos.',
      'Oportunidade de entrada com valores de m2 significativamente abaixo do preco maduro como Prea e Icaraizinho, mas com os mesmos vetores de valorizacao.',
    ],
    infra: [
      'Spacious 3 Bedroom Layout',
      'Private Pool & Coconut',
      'Round Facilities Throughout',
      'Floor To Ceiling Glass Windows',
      'Prime Beverly Hills Location',
    ],
    facilities: ['Beach View', 'Ar-Condicionado', 'Swimming Minutes', 'Internet', 'Agua Potavel', 'Roofgarden', 'Sala', 'Varandas'],
    gallery: {
      main: '/imgbeach.avif',
      sideTop: '/terrenos.avif',
      sideBottom: '/mapa.avif',
    },
    mapImage: '/mapa.avif',
    priceTag: 'Propriedade Venda',
    price: 'R$ 120.000',
    installments: 'As em 5x de 30.000',
  },
  {
    id: '03',
    title: 'PROJETOS',
    image: '/projetos.avif',
    badge: 'Venda',
    propertyTitle: 'PROJETOS BOUTIQUE EM ICARAIZINHO',
    location: 'Icaraizinho de Amontada, Ceara, Brasil',
    rating: 5,
    exclusiveText: '+2.400 m2 | Projeto com assinatura',
    about: [
      'Empreendimentos planejados para investidores que buscam posicionamento antecipado em areas de alta escassez.',
      'Produto com estudo de vento aplicado, diretrizes de implantacao e possibilidade de personalizacao arquitetonica.',
      'Ideal para quem deseja unir patrimonio, renda e uso pessoal com padrao internacional.',
    ],
    infra: [
      'Masterplan com baixa densidade',
      'Acesso privativo e seguranca',
      'Diretrizes de paisagismo nativo',
      'Solucoes de energia eficiente',
      'Gestao de obra sob demanda',
    ],
    facilities: ['Masterplan', 'Ventilacao Cruzada', 'Infra Premium', 'Acesso Privado', 'Lazer Integrado', 'Paisagismo'],
    gallery: {
      main: '/projetos.avif',
      sideTop: '/imgbeach.avif',
      sideBottom: '/mapa.avif',
    },
    mapImage: '/mapa.avif',
    priceTag: 'Projeto Venda',
    price: 'R$ 340.000',
    installments: 'Conforme cronograma de obra',
  },
];
