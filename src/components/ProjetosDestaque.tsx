import './ProjetosDestaque.css';
import { useTranslation } from 'react-i18next';
import { type OportunidadeDetalhe } from '../data/oportunidadesData';
import { getOportunidadesData } from '../data/oportunidadesDataI18n';

type ProjetosDestaqueProps = {
  onSelect: (item: OportunidadeDetalhe) => void;
};

const projetos = [
  {
    id: 1,
    image: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
    tag: 'LAN\u00C7AMENTO',
    location: 'Paracuru, Cear\u00E1, Brasil',
    title: 'Villa Prabhu \u2014 Paracuru-CE',
    area: '242 m\u00B2 a 600 m\u00B2',
    beds: null,
    baths: null,
    price: 'Sob Consulta',
    detailIndex: 0, // Villa Prabhu
  },
  {
    id: 2,
    image: '/bitupitaPaginaIndividual/DJI_20251207012123_0102_D.jpg',
    tag: 'Venda',
    location: 'Bitupit\u00E1, Cear\u00E1, Brasil',
    title: 'Terrenos p\u00E9 na areia em Bitupit\u00E1',
    area: '4.300 m\u00B2',
    beds: null,
    baths: null,
    price: 'A partir de R$ 120 MIL',
    detailIndex: 2, // Terrenos Bitupit\u00E1
  },
  {
    id: 3,
    image: '/viladoinglesPaginaInicial/Final 04 (1).png',
    tag: 'Investimento',
    location: 'Pre\u00E1, Cear\u00E1, Brasil',
    title: 'Vila do Ingl\u00EAs',
    area: '2.200 m\u00B2',
    beds: 2,
    baths: null,
    price: 'Em Breve',
    detailIndex: 3, // Vila do Ingl\u00EAs
  },
];

export default function ProjetosDestaque({ onSelect }: ProjetosDestaqueProps) {
  const { t, i18n } = useTranslation();
  const pdData = t('projetos.cards', { returnObjects: true }) as Record<string, any>;
  const localizedData = getOportunidadesData(i18n.language);

  return (
    <section id="projetos" className="pd-section">
      <div className="pd-container">
        <div className="pd-header">
          <div className="pd-badge reveal-badge">{t('projetos.badge')}</div>
          <h2 className="pd-title reveal-heading" dangerouslySetInnerHTML={{ __html: t('projetos.title') }}></h2>
        </div>

        <div className="pd-grid">
          {projetos.map((projeto) => {
            const cardData = pdData[projeto.id] || { title: projeto.title, tag: projeto.tag, price: projeto.price };
            // Pegar o item correto do localizedData usando o o ID ou Slugs if indices change
            const itemFromData = localizedData[projeto.detailIndex];
            
            return (
              <div className="pd-card" key={projeto.id} onClick={() => onSelect(itemFromData)}>
                <div className="pd-image-wrapper">
                  <img src={projeto.image} alt={cardData.title} className="pd-image" />
                  <div className="pd-tag">{cardData.tag}</div>
                </div>

                <div className="pd-content">
                  <div className="pd-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>{projeto.location}</span>
                  </div>

                  <h3 className="pd-card-title">{cardData.title}</h3>

                  <div className="pd-amenities">
                    {projeto.beds && (
                      <div className="pd-amenity">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
                        </svg>
                        {projeto.beds}
                      </div>
                    )}
                    {projeto.baths && (
                      <div className="pd-amenity">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                          <circle cx="10" cy="9" r="2" />
                          <path d="M4 12h14" />
                          <path d="M14 9h4" />
                        </svg>
                        {projeto.baths}
                      </div>
                    )}
                    {projeto.area && (
                      <div className="pd-amenity">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />
                        </svg>
                        {projeto.area}
                      </div>
                    )}
                  </div>

                  <div className="pd-price">
                    {(() => {
                      const p = cardData.price;
                      if (!p) return null;
                      if (p.toLowerCase().startsWith('a partir de ')) {
                        return (
                          <>
                            <span style={{ fontSize: '0.6em', display: 'block', fontWeight: 400, opacity: 0.8, marginBottom: '2px', lineHeight: 1, textTransform: 'lowercase', letterSpacing: '0.5px' }}>
                              a partir de
                            </span>
                            {p.substring(12)}
                          </>
                        );
                      }
                      if (p.toLowerCase().startsWith('desde ')) {
                        return (
                          <>
                            <span style={{ fontSize: '0.6em', display: 'block', fontWeight: 400, opacity: 0.8, marginBottom: '2px', lineHeight: 1, textTransform: 'lowercase', letterSpacing: '0.5px' }}>
                              desde
                            </span>
                            {p.substring(6)}
                          </>
                        );
                      }
                      return p;
                    })()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
