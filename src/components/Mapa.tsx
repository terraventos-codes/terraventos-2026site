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
      <div className="mapa-viewport">
        <iframe 
          src={embedUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title={t('mapa.title')}
        ></iframe>
      </div>
    </section>
  );
}
