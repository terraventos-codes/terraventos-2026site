import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import './ListagemPropriedades.css';
import LocalizedLink from '../router/LocalizedLink';
import { useTransitionNavigate } from '../router/useTransitionNavigate';
import { parsePrice } from '../utils/parsePrice';
import { normalizeString } from '../utils/normalizeString';
import { readSearchParams, syncSearchParams } from '../utils/urlFilterSync';
import PropertyCard from './PropertyCard';
import { CRECI } from '../data/creci';

interface ListagemPropriedadesProps {
  items: OportunidadeDetalhe[];
  onSelect: (item: OportunidadeDetalhe) => void;
}

const ListagemPropriedades: React.FC<ListagemPropriedadesProps> = ({ items, onSelect }) => {
  const { t } = useTranslation();
  const transitionNavigate = useTransitionNavigate();
  const initialParams = useRef(readSearchParams());
  const [searchTerm, setSearchTerm] = useState(() => initialParams.current.get('q') || '');
  const [selectedFilter, setSelectedFilter] = useState<string>(() => initialParams.current.get('filtro') || 'all');
  const [userMaxPrice, setUserMaxPrice] = useState<number | null>(() => {
    const raw = initialParams.current.get('precoMax');
    const parsed = raw ? Number(raw) : NaN;
    return isNaN(parsed) ? null : parsed;
  });
  const [userMinPrice, setUserMinPrice] = useState<number | null>(() => {
    const raw = initialParams.current.get('precoMin');
    const parsed = raw ? Number(raw) : NaN;
    return isNaN(parsed) ? null : parsed;
  });

  const priceRangeData = useMemo(() => {
    const prices = items.map(i => parsePrice(i.price)).filter(p => p !== null) as number[];
    return {
      min: prices.length ? Math.min(...prices) : 0,
      max: prices.length ? Math.max(...prices) : 20000000
    };
  }, [items]);

  const currentMaxPrice = userMaxPrice !== null ? userMaxPrice : priceRangeData.max;
  const currentMinPrice = userMinPrice !== null ? userMinPrice : priceRangeData.min;

  useEffect(() => {
    const debounce = window.setTimeout(() => {
      syncSearchParams({
        q: searchTerm || null,
        filtro: selectedFilter !== 'all' ? selectedFilter : null,
        precoMax: userMaxPrice !== null ? String(userMaxPrice) : null,
        precoMin: userMinPrice !== null ? String(userMinPrice) : null,
      });
    }, 300);
    return () => window.clearTimeout(debounce);
  }, [searchTerm, selectedFilter, userMaxPrice, userMinPrice]);

  const filteredItems = useMemo(() => {
    const searchNormalized = normalizeString(searchTerm);

    return items.filter((item) => {
      const searchableText = [
        item.propertyTitle,
        item.location,
        item.price,
        item.searchTitle,
        item.category,
        item.summaryDescription,
        item.exclusiveText,
        item.badge
      ].filter(Boolean).map(s => normalizeString(s!)).join(' ');

      const matchesSearch = searchableText.includes(searchNormalized);
      const matchesFilter = selectedFilter === 'all' || item.category === selectedFilter;
      
      let itemPrice = priceRangeData.max;
      const parsed = parsePrice(item.price);
      if (parsed !== null) itemPrice = parsed;
      const matchesPrice = itemPrice >= currentMinPrice && itemPrice <= currentMaxPrice;

      return matchesSearch && matchesFilter && matchesPrice;
    });
  }, [items, searchTerm, selectedFilter, currentMinPrice, currentMaxPrice, priceRangeData]);

  const showTaiba = false; /* Terreno de Taíba (< 750k) comentado a pedido do usuário */

  const filterOptions = ['all', 'venda', 'lancamento', 'temporada', 'investimento'];

  return (
    <section className="listing-page" data-reveal-managed="true">
      <div className="listing-header">
        <LocalizedLink to="/" className="back-to-home" aria-label="Voltar para o início">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </LocalizedLink>
        <h1 className="listing-title">{t('nav.oportunidades')}</h1>
        <p className="listing-subtitle">{t('oportunidades.badge')}</p>
      </div>

      <div className="listing-controls">
        <div className="search-box">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder={t('hero.card.experience').split('\n')[0] || "Buscar propriedade..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            className="share-search-btn"
            title={t('common.shareSearch') || 'Compartilhar busca'}
            onClick={async () => {
              const shareData = {
                title: t('nav.oportunidades') || 'Oportunidades Terra Ventos',
                text: searchTerm
                  ? `${t('common.shareSearchText')}${searchTerm}`
                  : t('common.shareSearchText'),
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
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <span>{t('common.shareSearch') || 'Compartilhar busca'}</span>
          </button>
        </div>

        <div className="filter-chips">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`filter-chip ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {t(`categorias.${filter}`)}
            </button>
          ))}
        </div>

        <div className="price-slider-container">
          <div className="price-slider-header">
            <span>Preço Mínimo:</span>
            <span className="price-slider-value">
              {currentMinPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <input
            type="range"
            className="price-slider"
            min={priceRangeData.min}
            max={priceRangeData.max}
            step="10000"
            value={currentMinPrice}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), currentMaxPrice);
              setUserMinPrice(value);
            }}
          />
        </div>

        <div className="price-slider-container">
          <div className="price-slider-header">
            <span>Preço Máximo:</span>
            <span className="price-slider-value">
              {currentMaxPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <input
            type="range"
            className="price-slider"
            min={priceRangeData.min}
            max={priceRangeData.max}
            step="10000"
            value={currentMaxPrice}
            onChange={(e) => {
              const value = Math.max(Number(e.target.value), currentMinPrice);
              setUserMaxPrice(value);
            }}
          />
        </div>
      </div>

      <div className="listing-grid">
        {/* OPÇÃO DE TAÍBA FIXA NO TOPO */}
        {showTaiba && (
          <a 
            href="/taiba"
            className="property-card"
            onClick={(e) => {
              e.preventDefault();
              transitionNavigate('/taiba');
            }}
          >
            <div className="property-card-image" style={{ backgroundImage: `url("/imoveis/lote-barramar-lagoa-taiba-03.webp")` }}>
              <div className="property-badge">Investimento</div>
            </div>
            <div className="property-card-content">
              <h3 className="property-card-title">Oportunidades Exclusivas em Taíba</h3>
              <p className="property-card-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Taíba, Ceará, Brasil
              </p>
              <div className="property-card-footer">
                <div className="property-price">
                  <span className="price-tag">A partir de</span>
                  <span className="price-value">R$ 110.000,00</span>
                </div>
                <div className="view-details-btn">
                  Ver Opções
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              <p className="creci-tag">{CRECI}</p>
            </div>
          </a>
        )}

        {filteredItems.length > 0 || showTaiba ? (
          filteredItems.map((item) => (
            <PropertyCard key={item.id} item={item} onSelect={onSelect} />
          ))
        ) : (
          <div className="no-results">
            <p>{t('oportunidades.noResults')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListagemPropriedades;
