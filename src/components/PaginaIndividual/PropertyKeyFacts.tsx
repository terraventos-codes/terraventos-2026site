import { useTranslation } from 'react-i18next';
import type { OportunidadeDetalhe } from '../../data/oportunidadesData';
import { destaquesImovel, googleMapsLink } from '../../data/destaquesImovel';

type Props = {
  item: OportunidadeDetalhe;
};

// Rótulos de preço que não acrescentam nada ao valor ("Valor: R$ ...")
const GENERIC_PRICE_TAGS = ['', 'valor', 'value', 'valor total', 'total value'];

// Bloco de destaque no topo do imóvel (estilo portal): tipo de negócio,
// preço, quartos/banheiros/área e atalho para o Google Maps.
export default function PropertyKeyFacts({ item }: Props) {
  const { t } = useTranslation();
  const d = destaquesImovel[item.slug] ?? {};
  const mapsHref = googleMapsLink(item.mapUrl);
  const showTag = !GENERIC_PRICE_TAGS.includes((item.priceTag || '').trim().toLowerCase());

  const facts = [
    d.quartos && { icon: 'bed', value: d.quartos, label: t('pagina.keyFacts.bedrooms') },
    d.suites && { icon: 'suite', value: d.suites, label: t('pagina.keyFacts.suites') },
    d.banheiros && { icon: 'bath', value: d.banheiros, label: t('pagina.keyFacts.bathrooms') },
    d.areaTerreno && { icon: 'area', value: d.areaTerreno, label: t('pagina.keyFacts.landArea') },
    d.areaConstruida && { icon: 'home', value: d.areaConstruida, label: t('pagina.keyFacts.builtArea') },
  ].filter((f): f is { icon: string; value: string; label: string } => Boolean(f));

  return (
    <div className="pi-keyfacts">
      <div className="pi-keyfacts-top">
        <div>
          <span className={`pi-keyfacts-deal pi-keyfacts-deal--${item.category}`}>
            {t(`pagina.keyFacts.deal.${item.category}`)}
          </span>
          <p className="pi-keyfacts-price">
            {showTag && <span className="pi-keyfacts-price-tag">{item.priceTag}</span>}
            {item.price || item.installments}
          </p>
        </div>

        {mapsHref && (
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="pi-keyfacts-map"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {t('pagina.keyFacts.openMap')}
          </a>
        )}
      </div>

      {facts.length > 0 && (
        <ul className="pi-keyfacts-list">
          {facts.map(f => (
            <li key={f.icon} className="pi-keyfacts-item">
              <FactIcon name={f.icon} />
              <span className="pi-keyfacts-value">{f.value}</span>
              <span className="pi-keyfacts-label">{f.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FactIcon({ name }: { name: string }) {
  const common = {
    width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'bed':
      return (
        <svg {...common}>
          <path d="M2 18V6M2 14h20v4M22 14v-2a3 3 0 0 0-3-3h-8v5"></path>
          <circle cx="6.5" cy="11" r="2"></circle>
        </svg>
      );
    case 'suite':
      return (
        <svg {...common}>
          <path d="M3 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
          <path d="M15 9h4a2 2 0 0 1 2 2v10M2 21h20M11 12h.01"></path>
        </svg>
      );
    case 'bath':
      return (
        <svg {...common}>
          <path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3zM6 12V5a2 2 0 0 1 4 0M7 20l-1 2M17 20l1 2"></path>
        </svg>
      );
    case 'area':
      return (
        <svg {...common}>
          <path d="M3 3h7M3 3v7M21 21h-7M21 21v-7M3 3l7 7M21 21l-7-7"></path>
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5V21H3z"></path>
          <path d="M9 21v-6h6v6"></path>
        </svg>
      );
  }
}
