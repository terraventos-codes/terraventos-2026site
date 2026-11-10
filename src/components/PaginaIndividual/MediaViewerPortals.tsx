import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { MediaViewer } from './useMediaViewer';
import { photoAlt } from '../../utils/seoImages';

type Props = MediaViewer & {
  allPhotos: string[];
  propertyTitle: string;
  slug: string;
};

export default function MediaViewerPortals({
  lightboxImage,
  lightboxVideo,
  isAlbumOpen,
  closeLightbox,
  closeAlbum,
  openLightbox,
  allPhotos,
  propertyTitle,
  slug,
}: Props) {
  const currentIndex = lightboxImage ? allPhotos.indexOf(lightboxImage) : -1;
  const canNavigate = currentIndex !== -1 && allPhotos.length > 1;

  const goTo = (delta: number) => {
    if (!canNavigate) return;
    const next = (currentIndex + delta + allPhotos.length) % allPhotos.length;
    openLightbox(allPhotos[next]);
  };

  // Teclado: ← → navegam entre as fotos, Esc fecha a foto (ou o álbum)
  const isOpen = Boolean(lightboxImage || lightboxVideo);
  useEffect(() => {
    if (!isOpen && !isAlbumOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isOpen) closeLightbox();
        else closeAlbum();
      } else if (isOpen && e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(1);
      } else if (isOpen && e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(-1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Pré-carrega a foto anterior e a próxima para a troca ser instantânea
  useEffect(() => {
    if (!canNavigate) return;
    [1, -1].forEach((d) => {
      const img = new Image();
      img.src = allPhotos[(currentIndex + d + allPhotos.length) % allPhotos.length];
    });
  }, [currentIndex, canNavigate, allPhotos]);

  // Arrastar (dedo no celular ou mouse no computador) para os lados troca a foto
  const drag = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!canNavigate || (e.target as HTMLElement).closest('button')) return;
    drag.current = { x: e.clientX, y: e.clientY };
    suppressClick.current = false;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    drag.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      suppressClick.current = true;
      goTo(dx < 0 ? 1 : -1);
    }
  };

  const onBackdropClick = () => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    closeLightbox();
  };

  return (
    <>
      {(lightboxImage || lightboxVideo) && createPortal(
        <div
          className="pi-lightbox"
          onClick={onBackdropClick}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { drag.current = null; }}
          role="dialog"
          aria-modal="true"
          aria-label={`Fotos de ${propertyTitle}`}
        >
          <button className="pi-lightbox-close" onClick={closeLightbox} aria-label="Fechar galeria">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {lightboxImage && (
            <img
              key={lightboxImage}
              src={lightboxImage}
              alt={photoAlt(lightboxImage, slug, propertyTitle, 'Visualização ampliada')}
              className="pi-lightbox-img"
              draggable={false}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {canNavigate && (
            <>
              <button
                className="pi-lightbox-nav pi-lightbox-nav--prev"
                onClick={(e) => { e.stopPropagation(); goTo(-1); }}
                aria-label="Foto anterior"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                className="pi-lightbox-nav pi-lightbox-nav--next"
                onClick={(e) => { e.stopPropagation(); goTo(1); }}
                aria-label="Próxima foto"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <div className="pi-lightbox-counter" aria-live="polite">
                {currentIndex + 1} / {allPhotos.length}
              </div>
            </>
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

      {isAlbumOpen && createPortal(
        <div className="pi-album-modal">
          <div className="pi-album-header">
            <button className="pi-album-back" onClick={closeAlbum} aria-label="Voltar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div className="pi-album-info">
              <h3>{propertyTitle}</h3>
              <span>{allPhotos.length} fotos</span>
            </div>
          </div>

          <div className="pi-album-content">
            <div className="pi-album-grid">
              {allPhotos.map((src, idx) => (
                <div key={idx} className="pi-album-item" onClick={() => openLightbox(src)}>
                  <img src={src} alt={photoAlt(src, slug, propertyTitle, `Foto ${idx + 1}`)} loading="lazy" />
                  <div className="pi-album-item-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
