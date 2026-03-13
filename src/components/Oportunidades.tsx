import { useState } from 'react';
import './Oportunidades.css';

const oportunidadesData = [
  { id: '01', title: 'IMÓVEIS', image: '/imoveis.avif' },
  { id: '02', title: 'TERRENOS', image: '/terrenos.avif' },
  { id: '03', title: 'PROJETOS', image: '/projetos.avif' },
];

export default function Oportunidades() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with '03' active

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? oportunidadesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === oportunidadesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="oportunidades" className="oportunidades-section">
      <div className="ops-container">
        
        {/* Left Information */}
        <div className="ops-info">
          <div className="ops-badge">Oportunidades exclusivas</div>
          <h2 className="ops-title">
            ENCONTRE SEU PRÓXIMO<br />
            IMÓVEL NO LITORAL DO CEARÁ
          </h2>
          <p className="ops-subtitle">
            Ativos de alta liquidez e valorização exponencial no melhor vento do mundo.
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
                <title>Árvore</title>
                <path d="M12 2L4 12H8L4 20H11V24H13V20H20L16 12H20L12 2Z" />
              </svg>
            )}
          </div>
        </div>

        {/* Right Accordion & Controls */}
        <div className="ops-content">
          <div className="ops-controls">
            <button className="ops-arrow" onClick={handlePrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="ops-arrow" onClick={handleNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

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
                            <span className="ops-card-id">{item.id}</span>
                            <span className="ops-card-label">{item.title}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="ops-card-collapsed">
                      <span className="ops-collapsed-text">
                        <span className="ops-collapsed-id">{item.id}</span> {item.title}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
