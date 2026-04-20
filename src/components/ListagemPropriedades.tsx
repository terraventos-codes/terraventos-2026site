import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import './ListagemPropriedades.css';

interface ListagemPropriedadesProps {
  items: OportunidadeDetalhe[];
  onSelect: (item: OportunidadeDetalhe) => void;
}

const ListagemPropriedades: React.FC<ListagemPropriedadesProps> = ({ items, onSelect }) => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = selectedFilter === 'all' || item.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [items, searchTerm, selectedFilter]);

  const filterOptions = ['all', 'venda', 'lancamento', 'temporada', 'investimento'];

  return (
    <section className="listing-page">
      <div className="listing-header">
        <button 
          className="back-to-home" 
          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: '/' }))}
          aria-label="Voltar para o início"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
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
      </div>

      <div className="listing-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="property-card" onClick={() => onSelect(item)}>
              <div className="property-card-image" style={{ backgroundImage: `url("${item.image}")` }}>
                <div className="property-badge">{item.badge}</div>
              </div>
              <div className="property-card-content">
                <div className="property-card-rating">
                  <span className="stars">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</span>
                </div>
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
                  <button className="view-details-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
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
