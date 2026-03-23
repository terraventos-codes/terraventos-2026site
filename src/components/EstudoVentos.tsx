import { useState } from 'react';
import './EstudoVentos.css';

export default function EstudoVentos() {
  const [playing, setPlaying] = useState(false);

  const VIDEO_ID = 'np2xeM0Xe6k';

  return (
    <section
      id="estudo"
      data-reveal-managed="false"
      className="estudo-section"
    >
      <div className="estudo-container">
        <div className="estudo-media">
          <div className="estudo-video-wrapper">
            {playing ? (
              <iframe
                className="estudo-video-iframe-player"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0&playsinline=1`}
                title="Estudo dos Ventos - Terra Ventos"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Estudo dos Ventos - clique para assistir"
                  className="estudo-video-thumb"
                />
                <button
                  className="estudo-play-btn"
                  type="button"
                  aria-label="Reproduzir vídeo"
                  onClick={() => setPlaying(true)}
                >
                  <svg viewBox="0 0 80 80" fill="none" className="estudo-play-icon">
                    <circle cx="40" cy="40" r="39" stroke="white" strokeWidth="2" fill="rgba(0,0,0,0.35)" />
                    <polygon points="32,24 60,40 32,56" fill="white" />
                  </svg>
                </button>
              </>
            )}
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
