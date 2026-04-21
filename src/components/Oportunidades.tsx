import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Oportunidades.css';
import { oportunidadesData, type OportunidadeDetalhe } from '../data/oportunidadesData';
import { getOportunidadesData } from '../data/oportunidadesDataI18n';

type OportunidadesProps = {
  onSelect: (item: OportunidadeDetalhe) => void;
};



export default function Oportunidades({ onSelect }: OportunidadesProps) {
  const { t, i18n } = useTranslation();
  const allLocalizedData = getOportunidadesData(i18n.language);
  
  // Exibir apenas os 3 primeiros conforme solicitado nesta seção (Venda/Preá, Lançamento/Prabhu, Temporada/Conduru)
  const displayData = oportunidadesData.slice(0, 3);
  const localizedData = allLocalizedData.slice(0, 3);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? displayData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === displayData.length - 1 ? 0 : prev + 1));
  };

  const activeItem = displayData[activeIndex];

  return (
    <section id="oportunidades" className="oportunidades-section">
      <div className="ops-container">
        <div className="ops-info">
          <div className="ops-badge">{t('oportunidades.badge')}</div>
          <a
            href={`/propriedade/${localizedData[activeIndex].slug}`}
            className="ops-title-link"
            onClick={(e) => {
              e.preventDefault();
              onSelect(localizedData[activeIndex]);
            }}
            aria-label="Abrir detalhes do imovel em destaque"
          >
            <h2 className="ops-title">
              <span className="ops-reveal-wrapper">
                <span className="ops-reveal-line" style={{ transitionDelay: '0.1s' }}>
                  {t('oportunidades.title1')}
                </span>
              </span>
              <span className="ops-reveal-wrapper">
                <span className="ops-reveal-line" style={{ transitionDelay: '0.2s' }}>
                  {t('oportunidades.title2')}
                </span>
              </span>
            </h2>
          </a>

          {/* Subtítulo dinâmico que acompanha o card ativo */}
          <p className="ops-subtitle ops-subtitle--dynamic" key={activeItem.id}>
            {t(`oportunidades.cards.${activeItem.id}`)}
          </p>

          <div className="ops-icon">
            {(activeIndex === 0 || activeIndex === 2 || activeIndex === 3 || activeIndex === 5) && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <title>Casa</title>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            )}
            {activeIndex === 1 && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <title>Arvore</title>
                <path d="M12 2L4 12H8L4 20H11V24H13V20H20L16 12H20L12 2Z" />
              </svg>
            )}
            {activeIndex === 4 && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <title>Folha</title>
                <path d="M17 8C8 10 5.9 16.19 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C22 3 21 8 17 8Z" />
              </svg>
            )}
          </div>

          <div className="ops-see-all-wrapper">
             <button 
               className="ops-see-all-btn" 
               onClick={() => {
                 window.dispatchEvent(new CustomEvent('navigate', { detail: '/propriedades' }));
               }}
             >
               Ver todas as propriedades
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
             </button>
          </div>
        </div>

        <div className="ops-content">
          {!isMobile && (
            <>
              <div className="ops-accordion">
                {displayData.map((item, index) => {
                  const isActive = index === activeIndex;
                  const localItem = localizedData[index];

                  return (
                    <div
                      key={item.id}
                      className={`ops-card ${isActive ? 'active' : ''}`}
                      onClick={() => isActive ? onSelect(localItem) : setActiveIndex(index)}
                      title={isActive ? undefined : localItem.badge}
                    >
                      {isActive ? (
                        <div className="ops-card-expanded">
                          <img src={localItem.image} alt={localItem.propertyTitle} className="ops-card-image" />
                          <div className="ops-card-cutout ops-card-cutout--rich">
                            <div className="ops-card-cutout-inner">
                              <div className="ops-card-pip" aria-hidden="true" />
                              <span className="ops-card-label">{localItem.badge}</span>
                              <span className="ops-card-property-name">{localItem.propertyTitle}</span>
                              <span className="ops-card-price">{localItem.priceTag} {localItem.price}</span>
                            </div>
                            <a
                              href={`/propriedade/${localItem.slug}`}
                              className="ops-card-cta"
                              onClick={(e) => { 
                                e.preventDefault();
                                e.stopPropagation(); 
                                onSelect(localItem); 
                              }}
                            >
                              {t('pagina.cta')} →
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="ops-card-collapsed">
                          <div className="ops-collapsed-pip" aria-hidden="true" />
                          <span className="ops-collapsed-text">{localItem.title}</span>
                          <span className="ops-collapsed-hint" aria-hidden="true">›</span>
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
                  {activeIndex + 1} / {displayData.length}
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
              {localizedData.map((item) => (
                <a
                  key={item.id}
                  href={`/propriedade/${item.slug}`}
                  className="ops-card-mobile"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(item);
                  }}
                >
                  <div className="ops-card-mobile-image-wrapper">
                    <img src={item.image} alt={item.propertyTitle} className="ops-card-mobile-image" />
                  </div>
                  <div className="ops-card-mobile-body">
                    <span className="ops-card-mobile-id">{item.id}</span>
                    <div className="ops-card-mobile-info">
                      <span className="ops-card-mobile-title">{item.title}</span>
                      <span className="ops-card-mobile-property">{item.propertyTitle}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
