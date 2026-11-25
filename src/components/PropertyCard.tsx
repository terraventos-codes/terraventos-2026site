import React from 'react';
import { useTranslation } from 'react-i18next';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import { CRECI } from '../data/creci';

interface PropertyCardProps {
  item: OportunidadeDetalhe;
  onSelect: (item: OportunidadeDetalhe) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ item, onSelect }) => {
  const { t } = useTranslation();

  return (
    <a
      href={`/propriedade/${item.slug}`}
      className="property-card"
      onClick={(e) => {
        e.preventDefault();
        onSelect(item);
      }}
    >
      <div className="property-card-image" style={{ backgroundImage: `url("${item.image}")` }}>
        <div className="property-badge">{item.badge}</div>
      </div>
      <div className="property-card-content">
        <h3 className="property-card-title">{item.propertyTitle}</h3>
        <p className="property-card-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {item.location}
        </p>
        <div className="property-card-footer">
          <div className="property-price">
            <span className="price-tag">{item.priceTag}</span>
            <span className="price-value">{item.price}</span>
          </div>
          <div className="view-details-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
          <button
            className="share-property-btn"
            title={t('common.share') || 'Compartilhar'}
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();
              const shareData = {
                title: item.propertyTitle,
                text: `${t('common.shareText')}${item.propertyTitle}`,
                url: `${window.location.origin}/propriedade/${item.slug}`
              };

              if (navigator.share) {
                try {
                  await navigator.share(shareData);
                } catch (err) {
                  if ((err as Error).name !== 'AbortError') console.error('Error sharing:', err);
                }
              } else {
                try {
                  await navigator.clipboard.writeText(shareData.url);
                  alert(t('common.linkCopied') || 'Link copiado!');
                } catch (err) {
                  console.error('Could not copy text: ', err);
                }
              }
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>
        <p className="creci-tag">{CRECI}</p>
      </div>
    </a>
  );
};

export default PropertyCard;
