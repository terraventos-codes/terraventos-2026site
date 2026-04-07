import './Cidades.css';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const cidadesData = [
  {
    id: 1,
    image: '/cards/cumbuco.avif',
    title: 'Cumbuco, Ceará',
    description:
      'Infraestrutura completa e proximidade estratégica com Fortaleza. Um mercado maduro, com liquidez imediata e fluxo constante de turistas internacionais o ano todo.',
  },
  {
    id: 2,
    image: '/cards/tatajuba.avif',
    title: 'Tatajuba, Ceará',
    description:
      'Conexão profunda com a natureza e ventos lendários. Um destino exclusivo que atrai o público high-end em busca de privacidade e experiências autênticas à beira-mar.',
  },
  {
    id: 3,
    image: '/cards/guajiru.avif',
    title: 'Ilha do Guajirú, Ceará',
    description:
      'O paraíso das águas paradas e o destino técnico por excelência. Combinação única de ventos constantes com uma lagoa extensa, ideal para performance e hospitalidade.',
  },
  {
    id: 4,
    image: '/cards/Montoada.avif',
    title: 'Icaraizinho de Amontada, Ceará',
    description:
      'Um dos metros quadrados mais desejados do Ceará. Vila charmosa com gastronomia de alto padrão e uma baía segura, perfeita para o turismo de charme e esportes de vento.',
  },
  {
    id: 5,
    image: '/cards/prea.avif',
    title: 'Preá, Ceará',
    description:
      'Epicentro do kitesurf global com infraestrutura consolidada e demanda internacional constante.',
  },
  {
    id: 6,
    image: '/cards/flecheiras.avif',
    title: 'Flecheiras, Ceará',
    description:
      'Infraestrutura de luxo consolidada e demanda internacional recorde. Onde o estilo de vida cosmopolita encontra a melhor janela de vento do planeta.',
  },
  {
    id: 7,
    image: '/cards/bitupira ceara.avif',
    title: 'Bitupitá, Ceará',
    description:
      'Pé na areia intocado e o segredo mais bem guardado da Rota das Emoções. Oportunidade early stage com alto potencial de valorização e águas perfeitas para o kite e wingfoil.',
  },
];

export default function Cidades() {
  const { t } = useTranslation();
  const cData = t('cidades.cards', { returnObjects: true }) as Record<string, any>;
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // ── progress tracking ────────────────────────────
  const syncProgress = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const progress = max > 0 ? el.scrollLeft / max : 0;
    setScrollProgress(progress);
    const CARD_GAP = 16;
    const cardWidth = el.clientWidth * 0.72 + CARD_GAP;
    setActiveCard(Math.round(el.scrollLeft / cardWidth));
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncProgress, { passive: true });
    return () => el.removeEventListener('scroll', syncProgress);
  }, [isMobile, syncProgress]);

  const renderCard = (cidade: typeof cidadesData[0], index: number, suffix = '') => {
    const raw = cData[cidade.id];
    const cardTitle = (raw && typeof raw === 'object' && raw.title) ? raw.title : cidade.title;
    const cardDesc  = (raw && typeof raw === 'object' && raw.desc)  ? raw.desc  : cidade.description;
    return (
      <div
        className="cidades-card"
        key={`${cidade.id}-${suffix}-${index}`}
        aria-hidden={suffix === 'b' ? true : undefined}
      >
        <div className="cidades-image-wrapper">
          <img src={cidade.image} alt={cardTitle} className="cidades-image" loading="lazy" />
        </div>
        <div className="cidades-content">
          <h3 className="cidades-card-title">{cardTitle}</h3>
          <p className="cidades-card-desc">{cardDesc}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="regioes" className="cidades-section">
      <div className="cidades-header">
        <div className="cidades-badge reveal-badge">{t('cidades.badge')}</div>
        <h2 className="cidades-title reveal-heading" dangerouslySetInnerHTML={{ __html: t('cidades.title') }} />
      </div>

      {isMobile ? (
        /* ── MOBILE: native touch scroll ── */
        <>
          <div
            className="cidades-slider-container"
            ref={sliderRef}
          >
            <div className="cidades-slider-track">
              {cidadesData.map((cidade, index) => renderCard(cidade, index))}
            </div>
          </div>

          <div className="cidades-scroll-indicators">
            <div className="cidades-scroll-bar-track">
              <div
                className="cidades-scroll-bar-fill"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <div className="cidades-scroll-dots">
              {cidadesData.map((_, i) => (
                <button
                  key={i}
                  className={`cidades-dot ${i === activeCard ? 'active' : ''}`}
                  aria-label={`Cidade ${i + 1}`}
                  onClick={() => {
                    if (!sliderRef.current) return;
                    const cardWidth = sliderRef.current.clientWidth * 0.72 + 16;
                    sliderRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        /* ── DESKTOP: infinite marquee loop ── */
        <div
          className="cidades-marquee-wrapper"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={`cidades-marquee-track${paused ? ' paused' : ''}`}>
            {cidadesData.map((cidade, index) => renderCard(cidade, index, 'a'))}
            {cidadesData.map((cidade, index) => renderCard(cidade, index, 'b'))}
          </div>
        </div>
      )}
    </section>
  );
}
