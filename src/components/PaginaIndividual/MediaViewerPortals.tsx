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
  return (
    <>
      {(lightboxImage || lightboxVideo) && createPortal(
        <div className="pi-lightbox" onClick={closeLightbox}>
          <button className="pi-lightbox-close" onClick={closeLightbox} aria-label="Fechar galeria">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {lightboxImage && (
            <img
              src={lightboxImage}
              alt={photoAlt(lightboxImage, slug, propertyTitle, 'Visualização ampliada')}
              className="pi-lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
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
