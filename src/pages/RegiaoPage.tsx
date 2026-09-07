import { useMemo, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getOportunidadesData } from '../data/oportunidadesDataI18n';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import { REGIOES, type RegiaoKey } from '../data/regioes';
import { matchesDestination, inferPropertyTypeKey, TYPE_MATCHERS, PAGE_KEYWORDS, type SeoLang } from '../utils/seoKeywords';
import { toOgImage } from '../utils/seoImages';
import { parsePrice } from '../utils/parsePrice';
import { readSearchParams, syncSearchParams } from '../utils/urlFilterSync';
import { useTransitionNavigate } from '../router/useTransitionNavigate';
import { scrollToSection } from '../utils/scrollToSection';
import LocalizedLink from '../router/LocalizedLink';
import PropertyCard from '../components/PropertyCard';
import { useStructuredData } from '../utils/useStructuredData';
import { buildBreadcrumbList, buildRegionCollectionPage } from '../utils/structuredData';
import '../components/ListagemPropriedades.css';
import './RegiaoPage.css';

const WHATSAPP_NUMBER = '5585985572807';

interface RegiaoPageProps {
  regionKey: RegiaoKey;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function RegiaoPage({ regionKey }: RegiaoPageProps) {
  const { t, i18n } = useTranslation();
  const transitionNavigate = useTransitionNavigate();
  const lang = (i18n.language?.split('-')[0] || 'pt') as SeoLang;
  const config = REGIOES[regionKey];

  const initialParams = useRef(readSearchParams());
  const [selectedTipo, setSelectedTipo] = useState(() => initialParams.current.get('tipo') || 'all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(() =>
    initialParams.current.get('ordem') === 'desc' ? 'desc' : 'asc'
  );

  useEffect(() => {
    syncSearchParams({
      tipo: selectedTipo !== 'all' ? selectedTipo : null,
      ordem: sortOrder !== 'asc' ? sortOrder : null,
    });
  }, [selectedTipo, sortOrder]);

  const regionItems = useMemo(() => {
    return getOportunidadesData(i18n.language)
      .filter((item) => !item.unlisted)
      .filter((item) => matchesDestination(item, config.destinationKey));
  }, [i18n.language, config.destinationKey]);

  const availableTypes = useMemo(() => {
    const present = new Set(regionItems.map((item) => inferPropertyTypeKey(item)).filter(Boolean));
    return TYPE_MATCHERS.filter((m) => present.has(m.key));
  }, [regionItems]);

  const filteredSortedItems = useMemo(() => {
    const filtered = selectedTipo === 'all'
      ? regionItems
      : regionItems.filter((item) => inferPropertyTypeKey(item) === selectedTipo);

    return [...filtered].sort((a, b) => {
      const priceA = parsePrice(a.price) ?? Infinity;
      const priceB = parsePrice(b.price) ?? Infinity;
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });
  }, [regionItems, selectedTipo, sortOrder]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const title = `${config.nomes[lang]} | Terra Ventos`;
    const description = config.intro[lang];
    const imageUrl = window.location.origin + toOgImage(config.heroImage);
    const url = window.location.origin + window.location.pathname;

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
    updateMeta('keywords', PAGE_KEYWORDS[regionKey][lang]);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:url', url, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);
  }, [config, lang, regionKey]);

  const langPrefix = lang === 'pt' ? '' : `/${lang}`;
  const regionPath = `${langPrefix}/${regionKey}`;
  useStructuredData(
    buildBreadcrumbList([
      { name: 'Terra Ventos', url: lang === 'pt' ? '/' : `/${lang}/` },
      { name: config.nomes[lang], url: regionPath },
    ]),
    buildRegionCollectionPage({
      name: `${config.nomes[lang]} | Terra Ventos`,
      description: config.intro[lang],
      path: regionPath,
      placeName: `${config.nomes.pt}, Ceará`,
      geo: config.geo,
      itemCount: filteredSortedItems.length,
      inLanguage: lang === 'pt' ? 'pt-BR' : lang,
    }),
  );

  const handleSelect = (item: OportunidadeDetalhe) => {
    transitionNavigate(`/propriedade/${item.slug}`);
  };

  const handleWhatsapp = () => {
    const message = `Olá! Tenho interesse nos imóveis disponíveis em ${config.nomes.pt}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: `${config.nomes[lang]} | Terra Ventos`,
      text: `${t('regiao.shareText')}${config.nomes[lang]}`,
      url: window.location.href,
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
  };

  return (
    <>
      <div className="hero-background">
        <section className="hero">
          <div className="hero-slides" aria-hidden="true">
            <div
              className="hero-slide is-active"
              style={{ backgroundImage: `url('${config.heroImage}')` }}
            />
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
            <h1 className="hero-title">{config.nomes[lang]}</h1>
            <p className="hero-subtitle">{config.intro[lang]}</p>

            <div className="hero-cta-wrapper">
              <button type="button" className="cta-button secondary" onClick={() => scrollToSection('regiao-imoveis')}>
                {t('regiao.ctaVerImoveis')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
              <button type="button" className="cta-button primary" onClick={handleWhatsapp}>
                {t('regiao.ctaWhatsapp')}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      <section id="regiao-imoveis" className="listing-page" data-reveal-managed="true">
        <div className="regiao-section-header">
          <span className="regiao-section-pill">{t('oportunidades.badge')}</span>
          {filteredSortedItems.length > 0 && (
            <p className="regiao-section-count">
              {t('regiao.countLabel', { count: filteredSortedItems.length })}
            </p>
          )}
        </div>

        <div className="listing-controls">
          <button
            type="button"
            className="share-search-btn"
            title={t('common.shareSearch') || 'Compartilhar'}
            onClick={handleShare}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <span>{t('common.shareSearch') || 'Compartilhar'}</span>
          </button>

          {availableTypes.length > 1 && (
            <div className="filter-chips">
              <button
                className={`filter-chip ${selectedTipo === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTipo('all')}
              >
                {t('categorias.all')}
              </button>
              {availableTypes.map((typeMatcher) => (
                <button
                  key={typeMatcher.key}
                  className={`filter-chip ${selectedTipo === typeMatcher.key ? 'active' : ''}`}
                  onClick={() => setSelectedTipo(typeMatcher.key)}
                >
                  {capitalize(typeMatcher.keywords[lang])}
                </button>
              ))}
            </div>
          )}

          <div className="filter-chips">
            <button
              className={`filter-chip ${sortOrder === 'asc' ? 'active' : ''}`}
              onClick={() => setSortOrder('asc')}
            >
              {t('regiao.ordenarAsc')}
            </button>
            <button
              className={`filter-chip ${sortOrder === 'desc' ? 'active' : ''}`}
              onClick={() => setSortOrder('desc')}
            >
              {t('regiao.ordenarDesc')}
            </button>
          </div>
        </div>

        <div className="listing-grid">
          {filteredSortedItems.length > 0 ? (
            filteredSortedItems.map((item) => (
              <PropertyCard key={item.id} item={item} onSelect={handleSelect} />
            ))
          ) : (
            <div className="no-results">
              <p>{t('oportunidades.noResults')}</p>
            </div>
          )}
        </div>
      </section>

      <section className="regiao-cta-band">
        <span className="regiao-cta-pill">{t('regiao.heroTag')}</span>
        <h2 className="regiao-cta-title">
          {t('regiao.ctaBandQuestion')} {config.nomes[lang]}?
        </h2>
        <p className="regiao-cta-subtitle">{t('regiao.ctaBandSubtitle')}</p>
        <button type="button" className="regiao-cta-button" onClick={handleWhatsapp}>
          {t('regiao.ctaWhatsapp')}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
      </section>
    </>
  );
}
