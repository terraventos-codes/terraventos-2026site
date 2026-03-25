import { useEffect, useRef, useState } from 'react';
import './Mapa.css';

export default function Mapa() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section 
      ref={sectionRef} 
      id="mapa" 
      data-reveal-managed="true"
      className={`mapa-section ${isVisible ? 'is-visible' : ''}`}
    >
      {/* --- Desktop View --- */}
      <div className="mapa-parallax-bg desktop-only"></div>
      <div className="mapa-overlay desktop-only"></div>

      {/* --- Mobile View: Slider --- */}
      <div className="mapa-slider-wrapper mobile-only">
        <div className="mapa-slider-container">
          <div className="mapa-slider-track">
            <img src="/mapa.avif" alt="Mapa Litoral Cearense" className="mapa-slider-img" />
          </div>
        </div>
        <div className="mapa-slider-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8l4 4-4 4"></path>
            <path d="M3 12h18"></path>
            <path d="M7 8l-4 4 4 4"></path>
          </svg>
          Deslize para ver
        </div>
      </div>
    </section>
  );
}
