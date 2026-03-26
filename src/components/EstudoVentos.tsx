import { useState, useRef } from 'react';
import './EstudoVentos.css';
import { useTranslation } from 'react-i18next';

export default function EstudoVentos() {
  const { t } = useTranslation();
  const videoInfo = t('estudo.videoInfo', { returnObjects: true }) as string[];
  const stats = t('estudo.stats', { returnObjects: true }) as Record<string, string>;
  const [playing, setPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlayPause = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    const method = isPaused ? 'play' : 'pause';
    iframeRef.current.contentWindow.postMessage(JSON.stringify({ method }), '*');
    setIsPaused(!isPaused);
  };

  const VIDEO_ID = '1177444750';

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
              <>
                <iframe
                  ref={iframeRef}
                  className="estudo-video-iframe-player"
                  src={`https://player.vimeo.com/video/${VIDEO_ID}?autoplay=1&title=0&byline=0&portrait=0&loop=1&controls=0&api=1`}
                  title="Estudo dos Ventos - Terra Ventos"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
                <div 
                  className="estudo-click-overlay"
                  onClick={togglePlayPause}
                  aria-label="Pause/Play Video"
                  role="button"
                />
              </>
            ) : (
              <>
                <img
                  src={`https://vumbnail.com/${VIDEO_ID}.jpg`}
                  alt={videoInfo[1]}
                  className="estudo-video-thumb"
                />
                <button
                  className="estudo-play-btn"
                  type="button"
                  aria-label={videoInfo[2]}
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
              <p>{videoInfo[0]}</p>
            </div>
          </div>
        </div>

        <div className="estudo-content">
          <h2 className="estudo-title reveal-title" dangerouslySetInnerHTML={{ __html: t('estudo.title') }}></h2>

          <p className="estudo-desc" dangerouslySetInnerHTML={{ __html: t('estudo.desc') }}></p>

          <div className="estudo-stats">
            <div className="estudo-stat">
              <span className="stat-value">+15</span>
              <span className="stat-label">{stats['1']}</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">9 meses</span>
              <span className="stat-label">{stats['2']}</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">+20%</span>
              <span className="stat-label">{stats['3']}</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">APAs</span>
              <span className="stat-label">{stats['4']}</span>
            </div>
          </div>

          <a
            className="estudo-btn"
            href="https://www.canva.com/design/DAG1bAlUIp0/MphbQLRL9vMkqgnCqX7_0w/view?utm_content=DAG1bAlUIp0&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
            target="_blank"
            rel="noreferrer"
          >
            {t('estudo.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
