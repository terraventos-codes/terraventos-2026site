import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PaginaIndividual.css';
import { resolveLoteView, type OportunidadeDetalhe } from '../../data/oportunidadesData';
import VideoGallery from '../VideoGallery';
import PropertyGallery from './PropertyGallery';
import PropertyHeader from './PropertyHeader';
import PropertyAbout from './PropertyAbout';
import PropertyDocuments from './PropertyDocuments';
import PropertySidebarCTA from './PropertySidebarCTA';
import PropertyLocationMap from './PropertyLocationMap';
import MediaViewerPortals from './MediaViewerPortals';
import { useMediaViewer } from './useMediaViewer';
import { derivePropertyKeywords, type SeoLang } from '../../utils/seoKeywords';
import { toOgImage } from '../../utils/seoImages';
import { useStructuredData } from '../../utils/useStructuredData';
import { buildBreadcrumbList, buildRealEstateListing, SITE_URL } from '../../utils/structuredData';

const CRUMB_IMOVEIS: Record<string, string> = { pt: 'Imóveis', en: 'Properties', es: 'Inmuebles' };

type PaginaIndividualProps = {
  item: OportunidadeDetalhe;
};

export default function PaginaIndividual({ item }: PaginaIndividualProps) {
  const { i18n } = useTranslation();

  const hasLotes = !!item.lotes?.length;
  const [selectedLoteId, setSelectedLoteId] = useState(item.lotes?.[0]?.id ?? '');
  const activeRecord = hasLotes ? resolveLoteView(item, selectedLoteId) : item;

  const mediaViewer = useMediaViewer();

  // Coleta todas as fotos disponíveis para o álbum
  const allPhotos = Array.from(new Set([
    activeRecord.gallery.main,
    activeRecord.gallery.sideTop,
    activeRecord.gallery.sideBottom,
    ...(activeRecord.gallery.extra || [])
  ].filter((src): src is string => Boolean(src))));

  // SEO Update
  useEffect(() => {
    if (!item) return;

    const title = `${item.propertyTitle} | Terra Ventos`;
    const description = item.exclusiveText || item.about[0] || '';
    const socialImage = toOgImage(item.image);
    const imageUrl = socialImage.startsWith('http') ? socialImage : window.location.origin + socialImage;
    const url = window.location.href;

    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', derivePropertyKeywords(item, (i18n.language as SeoLang) || 'pt'));
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:url', url, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);

    return () => {
      document.body.style.overflow = '';
    };
  }, [item, i18n.language]);

  const lang = i18n.language?.split('-')[0] || 'pt';
  const langPrefix = lang === 'pt' ? '' : `/${lang}`;
  const pageUrl =
    typeof window !== 'undefined'
      ? window.location.origin + window.location.pathname
      : `${SITE_URL}${langPrefix}/propriedade/${item.slug}`;
  const ldImage = toOgImage(item.image);
  const ldImageUrl = ldImage.startsWith('http')
    ? ldImage
    : `${typeof window !== 'undefined' ? window.location.origin : SITE_URL}${ldImage}`;

  useStructuredData(
    buildBreadcrumbList([
      { name: 'Terra Ventos', url: lang === 'pt' ? '/' : `/${lang}/` },
      { name: CRUMB_IMOVEIS[lang] || CRUMB_IMOVEIS.pt, url: `${langPrefix}/propriedades` },
      { name: item.propertyTitle, url: pageUrl },
    ]),
    buildRealEstateListing(
      {
        propertyTitle: item.propertyTitle,
        location: item.location,
        image: item.image,
        description: item.exclusiveText || item.about[0] || '',
        price: item.price,
        priceTag: item.priceTag,
      },
      ldImageUrl,
      pageUrl,
    ),
  );

  return (
    <section className="pagina-individual">
      <div className="pi-main">
        <PropertyGallery
          item={activeRecord}
          allPhotos={allPhotos}
          onOpenLightbox={mediaViewer.openLightbox}
          onOpenAlbum={mediaViewer.openAlbum}
        />

        <PropertyHeader item={activeRecord} />

        <div className="pi-content-grid">
          <div className="pi-content-main">
            <PropertyAbout item={activeRecord} />

            <VideoGallery
              videoSources={activeRecord.videoSources || []}
              videoThumbnails={activeRecord.videoThumbnails}
              mainImage={activeRecord.gallery.main}
              title={activeRecord.propertyTitle}
              credits={activeRecord.videoGalleryCredits}
              onOpenVideo={mediaViewer.openVideo}
            />

            {activeRecord.documents && activeRecord.documents.length > 0 && (
              <PropertyDocuments documents={activeRecord.documents} />
            )}
          </div>

          <PropertySidebarCTA
            item={activeRecord}
            lotes={item.lotes}
            selectedLoteId={selectedLoteId}
            onSelectLote={setSelectedLoteId}
          />
        </div>

        <PropertyLocationMap item={activeRecord} />
      </div>

      <MediaViewerPortals
        {...mediaViewer}
        allPhotos={allPhotos}
        propertyTitle={activeRecord.propertyTitle}
      />
    </section>
  );
}
