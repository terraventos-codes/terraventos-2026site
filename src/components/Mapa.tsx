import { useEffect, useRef, useState } from 'react';
import './Mapa.css';

export default function Mapa() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section 
        ref={sectionRef} 
        id="mapa" 
        data-reveal-managed="true"
        className={`mapa-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mapa-parallax-bg"></div>
        <div className="mapa-overlay"></div>
        {/* Conteúdo e marcadores removidos conforme solicitação */}
        
        <button className="mapa-zoom-btn" onClick={() => setIsLightboxOpen(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mapa-zoom-icon">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          Ampliar Mapa
        </button>
      </section>

      {isLightboxOpen && (
        <div className="mapa-lightbox" onClick={() => { setIsLightboxOpen(false); setIsZoomedIn(false); }}>
          <button className="mapa-lightbox-close" onClick={() => { setIsLightboxOpen(false); setIsZoomedIn(false); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="mapa-lightbox-hint">
            {isZoomedIn ? 'Toque para reduzir' : 'Toque para ampliar'}
          </div>

          <div className={`mapa-scroll-container ${isZoomedIn ? 'zoomed' : ''}`} onClick={(e) => e.stopPropagation()}>
            <img 
              src="/mapa.avif" 
              alt="Mapa Ampliado" 
              className="mapa-lightbox-img" 
              onClick={() => setIsZoomedIn(!isZoomedIn)}
            />
          </div>
        </div>
      )}
    </>
  );
}
