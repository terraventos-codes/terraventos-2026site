import { useTranslation } from 'react-i18next';
import type { LoteOverride, OportunidadeDetalhe } from '../../data/oportunidadesData';
import LoteSelector from './LoteSelector';
import { CRECI } from '../../data/creci';

type Props = {
  item: OportunidadeDetalhe;
  lotes?: LoteOverride[];
  selectedLoteId: string;
  onSelectLote: (id: string) => void;
};

export default function PropertySidebarCTA({ item, lotes, selectedLoteId, onSelectLote }: Props) {
  const { t } = useTranslation();
  const hasLotes = !!lotes?.length;

  const waMessage = item.referralCode
    ? `Olá! Tenho interesse no imóvel: ${item.propertyTitle} (Ref: ${item.referralCode})`
    : `Olá! Tenho interesse no imóvel: ${item.propertyTitle}`;
  const waHref = `https://wa.me/5585985572807?text=${encodeURIComponent(waMessage)}`;

  return (
    <aside className="pi-content-side">
      <div className="pi-card">
        {hasLotes && (
          <LoteSelector lotes={lotes!} selectedId={selectedLoteId} onSelect={onSelectLote} />
        )}

        <span className="pi-card-tag">{item.priceTag}</span>
        <p className="pi-price">{item.price}</p>

        <div className="pi-card-divider"></div>

        <div className="pi-avatars-center">
          <img src="/mulher.jpg" alt="Avatar 1" />
          <img src="/pessoa2.avif" alt="Avatar 2" />
          <img src="/pessoa3.avif" alt="Avatar 3" />
        </div>
        <p className="pi-experience-text">
          {t('hero.card.experience').replace('\n', ' ')}
        </p>

        {item.reservationUrl ? (
          <>
            <p className="pi-contact-text">
              {t('pagina.reservationNotice') || 'Faça a cotação direto na plataforma de reserva'}
            </p>
            <a
              href={item.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pi-cta pi-cta--airbnb"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 3.328c-1.014 0-1.875.781-2.422 2.375-1.578 4.609-3.328 10.375-6.859 13.906a5.776 5.776 0 0 0-1.703 4.094c0 3.25 2.641 5.906 5.906 5.906 1.813 0 2.453-.781 3.422-1.813.438.453 1.156 1.047 1.656 1.047.5 0 1.25-.594 1.656-1.047.969 1.031 1.609 1.813 3.422 1.813 3.266 0 5.906-2.656 5.906-5.906 0-1.547-.625-3-1.703-4.094-3.531-3.531-5.281-9.297-6.859-13.906-.547-1.594-1.406-2.375-2.422-2.375zm0 2.016c.453 0 .906.516 1.25 1.516 1.531 4.469 3.203 10.078 6.547 13.422.844.859 1.344 2.016 1.344 3.25 0 2.141-1.75 3.891-3.891 3.891-1.047 0-1.375-.406-2.141-1.188l-.516-.547-.516.547c-.766.781-1.094 1.188-2.141 1.188l-.016-.016c-1.047 0-1.375-.406-2.141-1.188l-.516-.547-.516.547c-.766.781-1.094 1.188-2.141 1.188-2.141 0-3.891-1.75-3.891-3.891 0-1.234.5-2.391 1.344-3.25 3.344-3.344 5.016-8.953 6.547-13.422.344-1 .797-1.516 1.25-1.516z"/>
              </svg>
              {t('pagina.bookAirbnb') || 'Link para o Airbnb'}
            </a>
          </>
        ) : (
          <>
            <p className="pi-contact-text">
              {t('pagina.contact')}
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="pi-cta"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {t('pagina.cta')}
            </a>
          </>
        )}

        <p className="creci-tag creci-tag--center">{CRECI}</p>
      </div>
    </aside>
  );
}
