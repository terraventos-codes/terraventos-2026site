import { useEffect, useRef, useState } from 'react';
import './EstudoVentos.css';

export default function EstudoVentos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
      id="estudo" 
      data-reveal-managed="true"
      className={`estudo-section is-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="estudo-container">
        <div className="estudo-media">
          <div className="estudo-video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/np2xeM0Xe6k?autoplay=1&mute=1&loop=1&playlist=np2xeM0Xe6k&controls=0&modestbranding=1" 
              className="estudo-video-iframe"
              title="Estudo dos Ventos"
              allow="autoplay; fullscreen" 
              allowFullScreen
            ></iframe>
            <div className="estudo-video-touch-overlay"></div>
            <div className="estudo-video-info">
              <h4>Bernardo Carvalho Wertheim</h4>
              <p>Fundador e CEO Terra Ventos</p>
            </div>
          </div>
        </div>

        <div className="estudo-content">
          <h2 className="estudo-title reveal-title">
            ESTUDO<br />DOS VENTOS
          </h2>
          
          <p className="estudo-desc">
            Terra Ventos apresenta: Quais locais mais crescem em valorização, onde está menos explorado e com o maior potencial. <strong>Mergulhe em dados e análise potencial do Litoral Cearense.</strong>
          </p>
          
          <div className="estudo-stats">
            <div className="estudo-stat">
              <span className="stat-value">+15</span>
              <span className="stat-label">Cidades analisadas</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">9 meses</span>
              <span className="stat-label">de ventos constante</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">+20%</span>
              <span className="stat-label">de valorização ao ano</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">APAs</span>
              <span className="stat-label">técnico e ambiental</span>
            </div>
          </div>

          <a
            className="estudo-btn"
            href="https://www.canva.com/design/DAG1bAlUIp0/MphbQLRL9vMkqgnCqX7_0w/view?utm_content=DAG1bAlUIp0&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
            target="_blank"
            rel="noreferrer"
          >
            Ver o estudo completo
          </a>
        </div>
      </div>
    </section>
  );
}
