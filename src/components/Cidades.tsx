import './Cidades.css';

const cidadesData = [
  {
    id: 1,
    image: '/terrenos.avif',
    title: 'Ilha do Guajirú, Ceará',
    description: 'O paraíso das águas paradas e o destino técnico por excelência. Combinação única de ventos constantes com uma lagoa extensa, ideal para performance e hospitalidade.',
  },
  {
    id: 2,
    image: '/projetos.avif',
    title: 'Curimãs, Ceará',
    description: 'O refúgio para quem busca um litoral preservado e baixa densidade demográfica. Ideal para projetos de nicho que valorizam o silêncio e a imensidão do horizonte.',
  },
  {
    id: 3,
    image: '/imoveis.avif',
    title: 'Icaraizinho de Amontada, Ceará',
    description: 'Um dos metros quadrados mais desejados do Ceará. Vila charmosa com gastronomia de alto padrão e uma baía segura, perfeita para o turismo de charme e esportes de vento.',
  },
  {
    id: 4,
    image: '/imgbeach.avif',
    title: 'Flecheiras, Ceará',
    description: 'Infraestrutura de luxo consolidada e demanda internacional recorde. Onde o estilo de vida cosmopolita encontra a melhor janela de vento do planeta.',
  },
  {
    id: 5,
    image: '/terrenos.avif',
    title: 'Preá, Ceará',
    description: 'Epicentro do kitesurf global com infraestrutura consolidada e demanda internacional constante.',
  },
  {
    id: 6,
    image: '/imoveis.avif',
    title: 'Bitupitá, Ceará',
    description: 'Pé na areia intocado e o segredo mais bem guardado da Rota das Emoções. Oportunidade early-stage com alto potencial de valorização e águas perfeitas para o kite e wingfoil.',
  },
  {
    id: 7,
    image: '/projetos.avif',
    title: 'Cumbuco, Ceará',
    description: 'Infraestrutura completa e proximidade estratégica com Fortaleza. Um mercado maduro, com liquidez imediata e fluxo constante de turistas internacionais o ano todo.',
  },
];

export default function Cidades() {
  // We duplicate the array to create the infinite scroll effect
  const repeatedCidades = [...cidadesData, ...cidadesData];

  return (
    <section id="regioes" className="cidades-section">
      <div className="cidades-header">
        <div className="cidades-badge">Litoral Cearense</div>
        <h2 className="cidades-title">
          CIDADES ONDE<br />
          ESTAMOS PRESENTES
        </h2>
      </div>

      <div className="cidades-slider-container">
        <div className="cidades-slider-track">
          {repeatedCidades.map((cidade, index) => (
            <div className="cidades-card" key={index}>
              <div className="cidades-image-wrapper">
                <img src={cidade.image} alt={cidade.title} className="cidades-image" />
              </div>
              <div className="cidades-content">
                <h3 className="cidades-card-title">{cidade.title}</h3>
                <p className="cidades-card-desc">{cidade.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
