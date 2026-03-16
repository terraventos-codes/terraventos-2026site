import './Cidades.css';
import { useEffect, useState } from 'react';

const cidadesData = [
  {
    id: 1,
    image: '/cards/cumbuco.avif',
    title: 'Cumbuco, Ceará',
    description:
      'Infraestrutura completa e proximidade estratégica com Fortaleza. Um mercado maduro, com liquidez imediata e fluxo constante de turistas internacionais o ano todo.',
  },
  {
    id: 2,
    image: '/cards/tatajuba.avif',
    title: 'Tatajuba, Ceará',
    description:
      'Conexão profunda com a natureza e ventos lendários. Um destino exclusivo que atrai o público high-end em busca de privacidade e experiências autênticas à beira-mar.',
  },
  {
    id: 3,
    image: '/cards/guajiru.avif',
    title: 'Ilha do Guajirú, Ceará',
    description:
      'O paraíso das águas paradas e o destino técnico por excelência. Combinação única de ventos constantes com uma lagoa extensa, ideal para performance e hospitalidade.',
  },
  {
    id: 4,
    image: '/cards/Montoada.avif',
    title: 'Icaraizinho de Amontada, Ceará',
    description:
      'Um dos metros quadrados mais desejados do Ceará. Vila charmosa com gastronomia de alto padrão e uma baía segura, perfeita para o turismo de charme e esportes de vento.',
  },
  {
    id: 5,
    image: '/cards/prea.avif',
    title: 'Preá, Ceará',
    description:
      'Epicentro do kitesurf global com infraestrutura consolidada e demanda internacional constante.',
  },
  {
    id: 6,
    image: '/cards/flecheiras.avif',
    title: 'Flecheiras, Ceará',
    description:
      'Infraestrutura de luxo consolidada e demanda internacional recorde. Onde o estilo de vida cosmopolita encontra a melhor janela de vento do planeta.',
  },
  {
    id: 7,
    image: '/cards/bitupira ceara.avif',
    title: 'Bitupitá, Ceará',
    description:
      'Pé na areia intocado e o segredo mais bem guardado da Rota das Emoções. Oportunidade early stage com alto potencial de valorização e águas perfeitas para o kite e wingfoil.',
  },
];

export default function Cidades() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');

    const update = () => setIsMobile(mq.matches);

    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Duplicate only on desktop to create the infinite scroll effect
  const cidadesToRender = isMobile ? cidadesData : [...cidadesData, ...cidadesData];

  return (
    <section id="regioes" className="cidades-section">
      <div className="cidades-header">
        <div className="cidades-badge">Litoral Cearense</div>
        <h2 className="cidades-title reveal-title">
          CIDADES ONDE<br />
          ESTAMOS PRESENTES
        </h2>
      </div>

      <div className="cidades-slider-container">
        <div className="cidades-slider-track">
          {cidadesToRender.map((cidade, index) => (
            <div className="cidades-card" key={`${cidade.id}-${index}`}>
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
