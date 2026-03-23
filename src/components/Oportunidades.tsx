import { useEffect, useState } from 'react';
import './Oportunidades.css';
import { oportunidadesData, type OportunidadeDetalhe } from '../data/oportunidadesData';

type OportunidadesProps = {
  onSelect: (item: OportunidadeDetalhe) => void;
};

// Textos dinâmicos por card
const cardTexts: Record<string, { subtitle: string }> = {
  '01': {
    subtitle:
      'Residências de alto padrão prontas, com arquitetura contemporânea e integração com a natureza. Ideais para segunda moradia e renda de locação premium com demanda internacional.',
  },
  '02': {
    subtitle:
      'Terrenos pé na areia no último village planejado do Roteiro Costa dos Ventos. Oportunidade de entrada com valores abaixo do preço maduro e os mesmos vetores de valorização.',
  },
  '03': {
    subtitle:
      'Empreendimentos boutique para investidores com visão antecipada. Produto com estudo de vento aplicado, personalização arquitetônica e localização de alta escassez.',
  },
};

export default function Oportunidades({ onSelect }: OportunidadesProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? oportunidadesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === oportunidadesData.length - 1 ? 0 : prev + 1));
  };

  const activeItem = oportunidadesData[activeIndex];
  const activeText = cardTexts[activeItem.id] ?? { subtitle: '' };

  return (
    <section id="oportunidades" className="oportunidades-section">
      <div className="ops-container">
        <div className="ops-info">
          <div className="ops-badge">Oportunidades exclusivas</div>
          <button
            type="button"
            className="ops-title-link"
            onClick={() => onSelect(oportunidadesData[activeIndex])}
            aria-label="Abrir detalhes do imovel em destaque"
          >
            <h2 className="ops-title">
              <span className="ops-reveal-wrapper">
                <span className="ops-reveal-line" style={{ transitionDelay: '0.1s' }}>
                  ENCONTRE SEU PRÓXIMO
                </span>
              </span>
              <span className="ops-reveal-wrapper">
                <span className="ops-reveal-line" style={{ transitionDelay: '0.2s' }}>
                  IMÓVEL NO LITORAL DO CEARÁ
                </span>
              </span>
            </h2>
          </button>

          {/* Subtítulo dinâmico que acompanha o card ativo */}
          <p className="ops-subtitle ops-subtitle--dynamic" key={activeItem.id}>
            {activeText.subtitle}
          </p>

          <div className="ops-icon">
            {activeIndex === 0 && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <title>Casa</title>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            )}
            {activeIndex === 1 && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <title>Folha</title>
                <path d="M17 8C8 10 5.9 16.19 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C22 3 21 8 17 8Z" />
              </svg>
            )}
            {activeIndex === 2 && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <title>Arvore</title>
                <path d="M12 2L4 12H8L4 20H11V24H13V20H20L16 12H20L12 2Z" />
              </svg>
            )}
          </div>
        </div>

        <div className="ops-content">
          {!isMobile && (
            <>
              <div className="ops-accordion">
                {oportunidadesData.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={item.id}
                      className={`ops-card ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {isActive ? (
                        <div className="ops-card-expanded">
                          <img src={item.image} alt={item.title} className="ops-card-image" />
                          <div className="ops-card-cutout">
                            <div className="ops-card-cutout-inner">
                              {item.id}
                              <div className="ops-card-pip" aria-hidden="true" />
                              <span className="ops-card-label">{item.title}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="ops-card-collapsed">
                          <div className="ops-collapsed-pip" aria-hidden="true" />
                          <span className="ops-collapsed-text">{item.title}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Setas abaixo do accordion */}
              <div className="ops-controls ops-controls--bottom">
                <button className="ops-arrow" onClick={handlePrev} type="button" aria-label="Anterior">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="ops-nav-indicator">
                  {activeIndex + 1} / {oportunidadesData.length}
                </span>
                <button className="ops-arrow" onClick={handleNext} type="button" aria-label="Proximo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </>
          )}

          {isMobile && (
            <div className="ops-list-mobile">
              {oportunidadesData.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="ops-card-mobile"
                  onClick={() => onSelect(item)}
                >
                  <div className="ops-card-mobile-image-wrapper">
                    <img src={item.image} alt={item.title} className="ops-card-mobile-image" />
                  </div>
                  <div className="ops-card-mobile-body">
                    <span className="ops-card-mobile-id">{item.id}</span>
                    <span className="ops-card-mobile-title">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
