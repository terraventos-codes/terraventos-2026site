import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getOportunidadesData } from '../data/oportunidadesDataI18n';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import { REGIOES } from '../data/regioes';
import { getIntentPage, INTENT_PAGES } from '../data/intentPages';
import { matchesDestination, inferPropertyTypeKey, type SeoLang } from '../utils/seoKeywords';
import { toOgImage } from '../utils/seoImages';
import { parsePrice } from '../utils/parsePrice';
import { useTransitionNavigate } from '../router/useTransitionNavigate';
import { scrollToSection } from '../utils/scrollToSection';
import LocalizedLink from '../router/LocalizedLink';
import PropertyCard from '../components/PropertyCard';
import FaqBlock from '../components/FaqBlock';
import Pagina404 from '../components/Pagina404';
import { useAppShellContext } from '../router/appShellContext';
import { useStructuredData } from '../utils/useStructuredData';
import {
  buildBreadcrumbList,
  buildRegionCollectionPage,
  buildLocalServicePage,
  buildFaqPage,
} from '../utils/structuredData';
import './RegiaoPage.css';
import '../components/ListagemPropriedades.css';

const WHATSAPP_NUMBER = '5585985572807';

const FAQ_TITLE: Record<string, string> = {
  pt: 'Perguntas frequentes',
  en: 'Frequently asked questions',
  es: 'Preguntas frecuentes',
};
const CRUMB_IMOVEIS: Record<string, string> = { pt: 'Imóveis', en: 'Properties', es: 'Inmuebles' };

export default function IntentPage() {
  const { intentSlug } = useParams<{ intentSlug: string }>();
  const { t, i18n } = useTranslation();
  const transitionNavigate = useTransitionNavigate();
  const { previousPath } = useAppShellContext();
  const lang = (i18n.language?.split('-')[0] || 'pt') as SeoLang;
  const config = getIntentPage(intentSlug);

  const region = config ? REGIOES[config.regionKey] : undefined;

  const items = useMemo(() => {
    if (!config || !region) return [] as OportunidadeDetalhe[];
    return getOportunidadesData(i18n.language)
      .filter((item) => !item.unlisted)
      .filter((item) => matchesDestination(item, region.destinationKey))
      .filter((item) => (config.tipo ? inferPropertyTypeKey(item) === config.tipo : true))
      .sort((a, b) => (parsePrice(a.price) ?? Infinity) - (parsePrice(b.price) ?? Infinity));
  }, [config, region, i18n.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [intentSlug]);

  useEffect(() => {
    if (!config) return;
    const title = config.titles[lang];
    const description = config.descriptions[lang];
    const imageUrl = window.location.origin + toOgImage(config.heroImage);
    const url = window.location.origin + window.location.pathname;

    document.title = title;
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    updateMeta('description', description);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:url', url, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);
  }, [config, lang]);

  const langPrefix = lang === 'pt' ? '' : `/${lang}`;
  const path = config ? `${langPrefix}/${config.slug}` : langPrefix || '/';
  const faqs = config?.faqs[lang] ?? [];

  useStructuredData(
    config
      ? buildBreadcrumbList([
          { name: 'Terra Ventos', url: lang === 'pt' ? '/' : `/${lang}/` },
          { name: CRUMB_IMOVEIS[lang] || CRUMB_IMOVEIS.pt, url: `${langPrefix}/propriedades` },
          { name: config.h1[lang], url: path },
        ])
      : null,
    config && region
      ? config.pageType === 'servico'
        ? buildLocalServicePage({
            name: `${config.h1[lang]} — Terra Ventos`,
            description: config.descriptions[lang],
            path,
            placeName: `${region.nomes.pt}, Ceará`,
            geo: region.geo,
            inLanguage: lang === 'pt' ? 'pt-BR' : lang,
          })
        : buildRegionCollectionPage({
            name: config.titles[lang],
            description: config.descriptions[lang],
            path,
            placeName: `${region.nomes.pt}, Ceará`,
            geo: region.geo,
            itemCount: items.length,
            inLanguage: lang === 'pt' ? 'pt-BR' : lang,
          })
      : null,
    config ? buildFaqPage(faqs.map((f) => ({ q: f.q, a: f.a }))) : null,
  );

  if (!config || !region) {
    return <Pagina404 onBack={() => transitionNavigate(previousPath || '/propriedades')} />;
  }

  const corpo = config.corpo[lang] ?? [];

  const handleWhatsapp = () => {
    const message =
      lang === 'en'
        ? `Hi! I'm interested in ${config.h1.en.toLowerCase()}.`
        : lang === 'es'
          ? `¡Hola! Me interesa ${config.h1.es.toLowerCase()}.`
          : `Olá! Tenho interesse em ${config.h1.pt.toLowerCase()}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <div className="hero-background">
        <section className="hero">
          <div className="hero-slides" aria-hidden="true">
            <div className="hero-slide is-active" style={{ backgroundImage: `url('${config.heroImage}')` }} />
          </div>
          <div className="hero-overlay" aria-hidden="true" />

          <LocalizedLink to="/propriedades" className="regiao-hero-back" aria-label="Voltar para propriedades">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </LocalizedLink>

          <div className="hero-text-container">
            <div className="hero-tag">{t('regiao.heroTag')}</div>
            <h1 className="hero-title">{config.h1[lang]}</h1>
            <p className="hero-subtitle">{config.descriptions[lang]}</p>

            <div className="hero-cta-wrapper">
              {config.pageType === 'listagem' && items.length > 0 && (
                <button type="button" className="cta-button secondary" onClick={() => scrollToSection('intent-imoveis')}>
                  {t('regiao.ctaVerImoveis')}
                </button>
              )}
              <button type="button" className="cta-button primary" onClick={handleWhatsapp}>
                {t('regiao.ctaWhatsapp')}
              </button>
            </div>
          </div>
        </section>
      </div>

      {corpo.length > 0 && (
        <section className="regiao-corpo">
          {corpo.map((secao, i) => (
            <article key={i} className="regiao-corpo-secao">
              <h2 className="regiao-corpo-titulo">{secao.titulo}</h2>
              {secao.paragrafos.map((p, j) => (
                <p key={j} className="regiao-corpo-paragrafo">{p}</p>
              ))}
            </article>
          ))}
        </section>
      )}

      {items.length > 0 && (
        <section id="intent-imoveis" className="listing-page" data-reveal-managed="true">
          <div className="regiao-section-header">
            <span className="regiao-section-pill">{t('oportunidades.badge')}</span>
            <p className="regiao-section-count">{t('regiao.countLabel', { count: items.length })}</p>
          </div>
          <div className="listing-grid">
            {items.map((item) => (
              <PropertyCard
                key={item.id}
                item={item}
                onSelect={(i) => transitionNavigate(`/propriedade/${i.slug}`)}
              />
            ))}
          </div>
        </section>
      )}

      {faqs.length > 0 && <FaqBlock items={faqs} title={FAQ_TITLE[lang] || FAQ_TITLE.pt} />}

      <nav className="regiao-links-relacionados" aria-label={t('regiao.relacionadosLabel', 'Explore também')}>
        <h2 className="regiao-links-titulo">{t('regiao.relacionadosLabel', 'Explore também')}</h2>
        <div className="regiao-links-lista">
          <LocalizedLink to={`/${config.regionKey}`} className="regiao-link-pill">
            {region.nomes[lang]}
          </LocalizedLink>
          {INTENT_PAGES.filter((ip) => ip.slug !== config.slug).map((ip) => (
            <LocalizedLink key={ip.slug} to={`/${ip.slug}`} className="regiao-link-pill">
              {ip.h1[lang]}
            </LocalizedLink>
          ))}
        </div>
      </nav>

      <section className="regiao-cta-band">
        <span className="regiao-cta-pill">{t('regiao.heroTag')}</span>
        <h2 className="regiao-cta-title">{config.h1[lang]}</h2>
        <p className="regiao-cta-subtitle">{t('regiao.ctaBandSubtitle')}</p>
        <button type="button" className="regiao-cta-button" onClick={handleWhatsapp}>
          {t('regiao.ctaWhatsapp')}
        </button>
      </section>
    </>
  );
}
