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
      <div className="mapa-parallax-bg"></div>
      <div className="mapa-overlay"></div>
      {/* Conteúdo e marcadores removidos conforme solicitação */}

    </section>
  );
}
