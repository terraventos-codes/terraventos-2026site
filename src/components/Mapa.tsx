import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Mapa.css';

export default function Mapa() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // State to manage map activity to prevent scroll hijacking
  const [isMapActive, setIsMapActive] = useState(false);

  // Google My Maps Embed URL derived from the user provided viewer link
  const embedUrl = "https://www.google.com/maps/d/embed?mid=1y7OKHOzgcZOWFNI0996lAhlUT250Uj8&ehbc=2E312F&z=11";

  return (
    <section 
      ref={sectionRef} 
      id="mapa" 
      className={`mapa-section ${isVisible ? 'is-visible' : ''}`}
    >
      {/* ── Custom Title Div (Above the Map) ── */}
      <div className="mapa-header">
        <h2 className="mapa-title">{t('mapa.title')}</h2>
      </div>

      {/* ── Interactive Map Viewport (Cropped to hide owner name) ── */}
      <div className={`mapa-viewport ${isMapActive ? 'active' : ''}`}>
        {!isMapActive && (
          <div className="mapa-overlay" onClick={() => setIsMapActive(true)}>
            <div className="mapa-overlay-content">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>{t('mapa.activateInstructions') || 'Clique para explorar o mapa'}</span>
            </div>
          </div>
        )}
        <iframe 
          src={embedUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0, pointerEvents: isMapActive ? 'auto' : 'none' }}
          allowFullScreen
          loading="lazy"
          title={t('mapa.title')}
        ></iframe>
      </div>
      
      {isMapActive && (
        <button className="mapa-deactivate" onClick={() => setIsMapActive(false)}>
          {t('mapa.deactivate') || 'Travar mapa para scroll'}
        </button>
      )}
    </section>
  );
}
