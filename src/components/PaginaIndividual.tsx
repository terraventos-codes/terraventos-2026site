import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import './PaginaIndividual.css';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';

type PaginaIndividualProps = {
  item: OportunidadeDetalhe;
};

export default function PaginaIndividual({ item }: PaginaIndividualProps) {
  const { t } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

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
    setLightboxVideo(null);
    document.body.style.overflow = '';
  };

  const openVideo = (src: string) => {
    setLightboxVideo(src);
    document.body.style.overflow = 'hidden';
  };

  return (
    <section className="pagina-individual">
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

        {item.gallery.extra && item.gallery.extra.length > 0 && (
          <div className="pi-gallery-secondary">
            {item.gallery.extra.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Galeria ${idx + 4} de ${item.propertyTitle}`} 
                className="pi-image-secondary pi-zoomable" 
                onClick={() => openLightbox(img)}
              />
            ))}
          </div>
        )}

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
                const getIcon = (fac: string) => {
                  const l = fac.toLowerCase();
                  if (l.includes('beira') || l.includes('praia')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v2M5.6 5.6L4.2 4.2M2 12h2M5.6 18.4l-1.4 1.4M12 22v-2M18.4 18.4l1.4 1.4M22 12h-2M18.4 5.6l1.4-1.4" /><path d="M18 12c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z" /><path d="M22 22c-2.4-1.2-4.8 0-7.2 0s-4.8-1.2-7.2 0-4.8 0-7.6-1.2" /></svg>;
                  if (l.includes('ar-condicionado') || l.includes('ar condicionado')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 12V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 14v1" /><path d="M10 14v1" /><path d="M14 14v1" /><path d="M18 14v1" /></svg>;
                  if (l.includes('lavar')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M4 8h16" /><circle cx="12" cy="14" r="4" /><circle cx="12" cy="14" r="1.5" /></svg>;
                  if (l.includes('internet') || l.includes('wi-fi')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>;
                  if (l.includes('piscina')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>;
                  if (l.includes('cozinha')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 13V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" /><path d="M4 13h10" /><path d="M10 16v4" /><path d="M18 3v18" /><path d="M15 13h6" /><circle cx="18" cy="18" r="2" /></svg>;
                  if (l.includes('estacionamento') || l.includes('vaga') || l.includes('parking')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>;
                  if (l.includes('portaria') || l.includes('segurança') || l.includes('security')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
                  if (l.includes('quarto') || l.includes('dormitorio') || l.includes('bedroom')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2" /><path d="M3 13h18M3 17h18M3 21h18M21 7v14M3 7v14" /></svg>;
                  if (l.includes('banheiro') || l.includes('lavabo') || l.includes('bath')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 21a2 2 0 0 1-2-2v-1h14v1a2 2 0 0 1-2 2H7z" /><path d="M18 14V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10" /><path d="M2 14h20" /><path d="M6 20h12" /></svg>;
                  if (l.includes('projeto exclusivo') || l.includes('projeto urbanístico')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15 8.5 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 9 8.5 12 2" /></svg>;
                  if (l.includes('parcelamento') || l.includes('financiamento')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /><path d="M12 14v4" /><path d="M10 16h4" /></svg>;
                  if (l.includes('áreas verdes') || l.includes('natureza')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L4 12H8L4 20H11V24H13V20H20L16 12H20L12 2Z" /></svg>;
                  if (l.includes('pronto para construir')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 20h18L12 4z" /><path d="M7 16h10" /></svg>;
                  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>;
                };

                return (
                  <span key={facilidadeOrig} className={`pi-facility-chip ${isUnavailable ? 'is-unavailable' : ''}`}>
                    {getIcon(facilidade)}
                    <span className="pi-facility-text">{facilidade}</span>
                  </span>
                );
              })}
            </div>

            {item.videoSources && item.videoSources.length > 0 && (
              <div className="pi-video-gallery-v3">
                <div className="pi-section-header">
                  <h3 className="pi-section-title">{t('pagina.videoGallery') || 'Galeria de Vídeos'}</h3>
                </div>
                
                <div className="pi-video-grid-v3">
                  {item.videoSources.map((src, idx) => {
                    const vimeoId = src.split('/video/')[1]?.split('?')[0];
                    const thumbUrl = vimeoId 
                      ? `https://vumbnail.com/${vimeoId}.jpg` 
                      : item.gallery.main;

                    return (
                      <div 
                        key={idx} 
                        className="pi-video-card-v3"
                        onClick={() => openVideo(src)}
                      >
                        <div className="pi-video-card-thumb">
                          <img src={thumbUrl} alt={`V\u00CDDEO ${idx + 1}`} />
                          <div className="pi-video-card-overlay">
                            <div className="pi-video-play-btn">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {item.documents && item.documents.length > 0 && (
              <div className="pi-documents-section">
                <div className="pi-section-header">
                  <h3 className="pi-section-title">{t('pagina.downloadTitle') || 'Baixar Material'}</h3>
                  <p className="pi-section-description">{t('pagina.downloadDesc') || 'Acesse os arquivos oficiais do empreendimento.'}</p>
                </div>
                <div className="pi-documents-grid">
                  {item.documents.map((doc, idx) => (
                    <div key={idx} className="pi-document-card">
                      <div className="pi-document-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <div className="pi-document-info">
                        <h4 className="pi-document-label">{doc.label}</h4>
                        <p className="pi-document-legend">{doc.legend}</p>
                      </div>
                      <a 
                        href={doc.url} 
                        className="pi-document-download"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('pagina.viewPdf') || 'Visualizar PDF'}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

              <a 
                href="https://wa.me/5585985572807" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="pi-cta"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}
              >
                {t('pagina.cta')}
              </a>
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

      {(lightboxImage || lightboxVideo) && createPortal(
        <div className="pi-lightbox" onClick={closeLightbox}>
          <button className="pi-lightbox-close" onClick={closeLightbox} aria-label="Fechar galeria">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {lightboxImage && (
            <img 
              src={lightboxImage} 
              alt="Visualização ampliada" 
              className="pi-lightbox-img" 
              onClick={(e) => e.stopPropagation()} 
            />
          )}

          {lightboxVideo && (
            <div className="pi-lightbox-video-container" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={`${lightboxVideo}${lightboxVideo.includes('?') ? '&' : '?'}title=0&byline=0&portrait=0&badge=0&autoplay=1&dnt=1`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Full Screen Video"
              />
            </div>
          )}
        </div>,
        document.body
      )}
    </section>
  );
}
