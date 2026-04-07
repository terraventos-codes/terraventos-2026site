import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './EstudoVentos.css';
import { useTranslation } from 'react-i18next';

const DRIVE_PT = 'https://drive.google.com/uc?export=download&id=1TC6NxCt3KOu2ZRwGjnwg-hA75cnz3t0b';
const DRIVE_EN = 'https://drive.google.com/uc?export=download&id=1YQm0cqP2BtMgxTqaG6RDVYvo49u_rgKm';

const VIDEO_ID = '1177444750';

export default function EstudoVentos() {
  const { t, i18n } = useTranslation();
  const videoInfo = t('estudo.videoInfo', { returnObjects: true }) as string[];
  const stats = t('estudo.stats', { returnObjects: true }) as Record<string, string>;
  const [modalOpen, setModalOpen] = useState(false);
  const [langPickerOpen, setLangPickerOpen] = useState(false);
  const previewRef = useRef<HTMLIFrameElement>(null);
  const lang = i18n.language.split('-')[0];

  // Seek preview back to 0 every 15 seconds to avoid iframe refresh blink
  useEffect(() => {
    const interval = setInterval(() => {
      if (previewRef.current && previewRef.current.contentWindow) {
        // Vimeo player.js API via postMessage
        previewRef.current.contentWindow.postMessage(JSON.stringify({
          method: 'setCurrentTime',
          value: 0
        }), '*');
        
        // Also ensure it keeps playing
        previewRef.current.contentWindow.postMessage(JSON.stringify({
          method: 'play'
        }), '*');
      }
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const modal = modalOpen ? createPortal(
    <div
      className="estudo-modal-backdrop"
      onClick={() => setModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Vídeo em tela cheia"
    >
      <div className="estudo-modal-inner" onClick={(e) => e.stopPropagation()}>
        <button
          className="estudo-modal-close"
          onClick={() => setModalOpen(false)}
          aria-label="Fechar"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="estudo-modal-video">
          <iframe
            src={`https://player.vimeo.com/video/${VIDEO_ID}?autoplay=1&title=0&byline=0&portrait=0`}
            title="Estudo dos Ventos — Terra Ventos"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <section id="estudo" data-reveal-managed="false" className="estudo-section">
        <div className="estudo-container">

          {/* ── Left: Video preview ── */}
          <div className="estudo-media">
            <div className="estudo-video-wrapper">
              {/* Silent looping background preview - uses postMessage to loop every 15s smoothly */}
              <iframe
                ref={previewRef}
                className="estudo-video-preview"
                src={`https://player.vimeo.com/video/${VIDEO_ID}?background=1&autoplay=1&loop=1&autopause=0&quality=720p&api=1`}
                title="Preview — Terra Ventos"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />

              {/* Dark overlay so play button stands out */}
              <div className="estudo-preview-overlay" />

              {/* Play button */}
              <button
                className="estudo-play-btn"
                type="button"
                aria-label={videoInfo[2] ?? 'Assistir vídeo'}
                onClick={() => setModalOpen(true)}
              >
                <div className="estudo-play-icon-container">
                  <svg viewBox="0 0 80 80" fill="none" className="estudo-play-icon">
                    <circle cx="40" cy="40" r="39" stroke="white" strokeWidth="2" fill="rgba(0,0,0,0.35)" />
                    <polygon points="32,24 60,40 32,56" fill="white" />
                  </svg>
                </div>
                <span className="estudo-play-label">{t('estudo.watchFull')}</span>
              </button>

              <div className="estudo-video-info">
                <h4>Bernardo Carvalho Wertheim</h4>
                <p>{videoInfo[0]}</p>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="estudo-content">
            <h2 className="estudo-title reveal-title" dangerouslySetInnerHTML={{ __html: t('estudo.title') }} />
            <p className="estudo-desc" dangerouslySetInnerHTML={{ __html: t('estudo.desc') }} />

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

            {lang === 'es' ? (
              <button
                className="estudo-btn"
                type="button"
                onClick={() => setLangPickerOpen(true)}
              >
                {t('estudo.cta')}
              </button>
            ) : (
              <a
                className="estudo-btn"
                href={lang === 'en' ? DRIVE_EN : DRIVE_PT}
                target="_blank"
                rel="noreferrer"
              >
                {t('estudo.cta')}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Modal rendered directly inside document.body via portal */}
      {modal}

      {/* Language picker modal for ES users */}
      {langPickerOpen && createPortal(
        <div
          className="lang-picker-backdrop"
          onClick={() => setLangPickerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Escolha o idioma do documento"
        >
          <div className="lang-picker-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="lang-picker-close"
              onClick={() => setLangPickerOpen(false)}
              aria-label="Fechar"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <p className="lang-picker-title">¿En qué idioma deseas descargar?</p>
            <div className="lang-picker-flags">
              <a
                className="lang-picker-flag-btn"
                href={DRIVE_PT}
                target="_blank"
                rel="noreferrer"
                onClick={() => setLangPickerOpen(false)}
              >
                <img src="https://flagcdn.com/w80/br.png" alt="Português" />
                <span>Português</span>
              </a>
              <a
                className="lang-picker-flag-btn"
                href={DRIVE_EN}
                target="_blank"
                rel="noreferrer"
                onClick={() => setLangPickerOpen(false)}
              >
                <img src="https://flagcdn.com/w80/us.png" alt="English" />
                <span>English</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
