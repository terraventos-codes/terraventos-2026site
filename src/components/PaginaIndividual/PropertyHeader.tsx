import { useTranslation } from 'react-i18next';
import type { OportunidadeDetalhe } from '../../data/oportunidadesData';
import PropertyKeyFacts from './PropertyKeyFacts';

type Props = {
  item: OportunidadeDetalhe;
};

export default function PropertyHeader({ item }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="pi-title reveal-title">{item.propertyTitle}</h1>
      <div className="pi-meta-wrapper">
        <p className="pi-meta">{item.location}</p>
        <button
          className="pi-share-btn"
          title={t('common.share') || "Compartilhar"}
          onClick={async () => {
            const shareData = {
              title: item.propertyTitle,
              text: `${t('common.shareText')}${item.propertyTitle}`,
              url: window.location.href
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
          {t('common.share') || 'Compartilhar'}
        </button>
      </div>
      <PropertyKeyFacts item={item} />
      <p className="pi-exclusive">{item.exclusiveText}</p>
      {item.referralCode && (
        <p className="pi-ref-code">Ref: {item.referralCode}</p>
      )}
    </>
  );
}
