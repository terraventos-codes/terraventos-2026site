import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './PaginaIndividual.css';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';

type PaginaIndividualProps = {
  item: OportunidadeDetalhe;
  onBack: () => void;
};

export default function PaginaIndividual({ item, onBack }: PaginaIndividualProps) {
  const { t } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Fix: reset body overflow when component unmounts (e.g. navigating away with lightbox open)
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="pagina-individual">
      <button className="pi-back-button" onClick={onBack} aria-label="Voltar para a página inicial">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>{t('pagina.back')}</span>
      </button>

      <div className="pi-main">
        <div className="pi-gallery">
          <span className="pi-pill">{item.badge}</span>
          <img 
            src={item.gallery.main} 
            alt={`Imagem principal de ${item.propertyTitle}`} 
            className="pi-image-main pi-zoomable" 
            onClick={() => openLightbox(item.gallery.main)}
          />
          <img 
            src={item.gallery.sideTop} 
            alt={`Imagem complementar de ${item.propertyTitle}`} 
            className="pi-image-side-top pi-zoomable" 
            onClick={() => openLightbox(item.gallery.sideTop)}
          />
          <img 
            src={item.gallery.sideBottom} 
            alt={`Mapa e dados de ${item.propertyTitle}`} 
            className="pi-image-side-bottom pi-zoomable" 
            onClick={() => openLightbox(item.gallery.sideBottom)}
          />
        </div>

        <h1 className="pi-title reveal-title">{item.propertyTitle}</h1>
        <p className="pi-meta">{item.location}</p>
        <p className="pi-exclusive">{item.exclusiveText}</p>

        <div className="pi-content-grid">
          <div className="pi-content-main">
            <h2 className="pi-section-title reveal-title">{t('pagina.about')}</h2>
            {item.about.map((paragraph) => (
              <p key={paragraph} className="pi-text">
                {paragraph}
              </p>
            ))}

            <h3 className="pi-section-subtitle">{t('pagina.infra')}</h3>
            <ul className="pi-infra-list">
              {item.infra.map((info) => (
                <li key={info}>
                  <svg 
                    width="22" height="22" viewBox="0 0 24 24" 
                    fill="none" stroke="var(--gold, #C4B096)" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round"
                    className="pi-check-icon"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="6" ry="6"></rect>
                    <path d="M8 12.5l2.5 2.5 5.5-6.5"></path>
                  </svg>
                  <span>{info}</span>
                </li>
              ))}
            </ul>

            <h3 className="pi-section-subtitle">{t('pagina.facilities')}</h3>
            <div className="pi-facilities">
              {item.facilities.map((facilidadeOrig) => {
                const isUnavailable = facilidadeOrig.startsWith('!');
                const facilidade = isUnavailable ? facilidadeOrig.substring(1) : facilidadeOrig;
                const lower = facilidade.toLowerCase();
                
                let Icon = null;
                if (lower.includes('beira') || lower.includes('praia')) Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
                else if (lower.includes('ar-condicionado') || lower.includes('ar condicionado')) Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" /><path d="M8 12v-2a4 4 0 0 1 8 0v2" /><path d="M12 6v2" /><path d="M16 6l-1 2" /><path d="M8 6l1 2" /></svg>;
                else if (lower.includes('lavar')) Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M4 8h16" /><circle cx="12" cy="14" r="4" /><circle cx="12" cy="14" r="1.5" /></svg>;
                else if (lower.includes('internet') || lower.includes('wi-fi')) Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>;
                else if (lower.includes('aquecedor') || lower.includes('água') || lower.includes('agua')) Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 14.5a2 2 0 1 1-4 0c0-1.5 2-4 2-4s2 2.5 2 4z" /><path d="M12 22a8 8 0 0 1-8-8c0-3.5 3-7 8-12 5 5 8 8.5 8 12a8 8 0 0 1-8 8z" /></svg>;
                else if (lower.includes('geladeira') || lower.includes('refrigerator')) Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M5 10h14" /><path d="M9 5v2" /><path d="M9 13v4" /></svg>;
                else if (lower.includes('sofá') || lower.includes('sofa') || lower.includes('sala')) Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" /><path d="M2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4" /><path d="M2 14a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2" /><path d="M6 12v-2" /><path d="M18 12v-2" /><path d="M12 12v-3" /><path d="M6 20v2" /><path d="M18 20v2" /></svg>;
                else if (lower.includes('guarda-roupa') || lower.includes('wardrobe')) Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M12 2v20" /><path d="M8 12h1" /><path d="M15 12h1" /></svg>;
                else Icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>; // generic checkmark

                return (
                  <span key={facilidadeOrig} className={`pi-facility-chip ${isUnavailable ? 'is-unavailable' : ''}`}>
                    {Icon}
                    <span className="pi-facility-text">{facilidade}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <aside className="pi-content-side">
            <div className="pi-card">
              <span className="pi-card-tag">{item.priceTag}</span>
              <p className="pi-price">{item.price}</p>
              
              <p className="pi-contact-text">
                {t('pagina.contact')}
              </p>

              <div className="pi-avatars-center">
                <img src="/pessoa.avif" alt="Consultor 1" />
                <img src="/pessoa2.avif" alt="Consultor 2" />
                <img src="/pessoa3.avif" alt="Consultor 3" />
              </div>
              
              <p className="pi-experience-text">
                {t('hero.card.experience').split('\n').map((line: string, i: number) => i > 0 ? <><br key={i}/>{line}</> : line)}
              </p>
              
              <div className="pi-stars" aria-hidden="true">
                ★★★★★
              </div>

              <button type="button" className="pi-cta">
                {t('pagina.cta')}
              </button>
            </div>
          </aside>
        </div>

        <h3 className="pi-section-subtitle">{t('pagina.location')}</h3>
        <div className="pi-map-wrapper">
          {item.mapUrl ? (
            <iframe
              src={item.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de localização para ${item.propertyTitle}`}
            />
          ) : (
            <img src={item.mapImage} alt={`Mapa da localizacao de ${item.propertyTitle}`} className="pi-map" />
          )}
        </div>
      </div>

      {lightboxImage && (
        <div className="pi-lightbox" onClick={closeLightbox}>
          <button className="pi-lightbox-close" onClick={closeLightbox} aria-label="Fechar galeria">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img 
            src={lightboxImage} 
            alt="Visualização ampliada" 
            className="pi-lightbox-img" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}
