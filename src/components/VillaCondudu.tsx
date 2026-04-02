import './VillaCondudu.css';
import { useTranslation } from 'react-i18next';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import { getOportunidadesData } from '../data/oportunidadesDataI18n';

type VillaConduduProps = {
  onSelect: (item: OportunidadeDetalhe) => void;
};


export default function VillaCondudu({ onSelect }: VillaConduduProps) {
  const { t, i18n } = useTranslation();
  const tags = t('condudu.tags', { returnObjects: true }) as string[];
  const conduduLocalized = getOportunidadesData(i18n.language)[1];

  return (
    <section id="villa-condudu" className="condudu-section">
      <div className="condudu-container">
        <div className="condudu-media">
          <span className="condudu-pill">{t('condudu.badge')}</span>
          <div className="condudu-image-wrapper">
            <img
              src="/VillaCondutuPaginaInicial/FINAL 14.png"
              alt="Villa Conduru III em Preá, Ceará"
              className="condudu-image"
            />
          </div>
        </div>

        <div className="condudu-content">
          <h2 className="condudu-title reveal-heading" dangerouslySetInnerHTML={{ __html: t('condudu.title') }}></h2>

          <p className="condudu-subtitle reveal-subtext">
            {t('condudu.subtitle')}
          </p>

          <div className="condudu-tags reveal-subtext" style={{ transitionDelay: '0.45s' }}>
            {tags.map((tag: string, i: number) => (
              <span key={i} className="condudu-tag">{tag}</span>
            ))}
          </div>

          <div className="condudu-price-line reveal-subtext" style={{ transitionDelay: '0.5s' }}>
            <span className="condudu-price">R$ 1.200/dia</span>
            <span className="condudu-price-note">{t('condudu.priceNote')}</span>
          </div>

          <button
            type="button"
            className="condudu-cta reveal-cta"
            onClick={() => onSelect(conduduLocalized)}
          >
            {t('condudu.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

