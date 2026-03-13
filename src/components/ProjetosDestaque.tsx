import './ProjetosDestaque.css';

const projetos = [
  {
    id: 1,
    image: '/terrenos.avif', // Placeholder, awaiting specific image
    tag: 'Venda',
    location: 'Bitupitá, Ceará, Brasil',
    title: 'Terrenos pé na areia em Bitupitá',
    area: '4300 m²',
    beds: null,
    baths: null,
    price: 'R$ 120.000',
  },
  {
    id: 2,
    image: '/projetos.avif', // Placeholder
    tag: 'Temporada',
    location: 'Preá, Ceará, Brasil',
    title: 'Villa Condudu III',
    area: '500',
    beds: 3,
    baths: 2,
    price: 'R$ 1.200/dia',
  },
  {
    id: 3,
    image: '/imoveis.avif', // Placeholder
    tag: 'Investimento',
    location: 'Preá, Ceará, Brasil',
    title: 'Vila do Inglês',
    area: '2.200',
    beds: 2,
    baths: null,
    price: 'R$ 100.000',
  },
];

export default function ProjetosDestaque() {
  return (
    <section id="projetos" className="pd-section">
      <div className="pd-container">
        <div className="pd-header">
          <div className="pd-badge">Projetos em destaque</div>
          <h2 className="pd-title">
            PARA INVESTIR, MORAR OU VIVER<br />
            UMA TEMPORADA NO CEARÁ.
          </h2>
        </div>

        <div className="pd-grid">
          {projetos.map((projeto) => (
            <div className="pd-card" key={projeto.id}>
              <div className="pd-image-wrapper">
                <img src={projeto.image} alt={projeto.title} className="pd-image" />
                <div className="pd-tag">{projeto.tag}</div>
              </div>
              
              <div className="pd-content">
                <div className="pd-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{projeto.location}</span>
                </div>
                
                <h3 className="pd-card-title">{projeto.title}</h3>
                
                <div className="pd-amenities">
                  {projeto.beds && (
                    <div className="pd-amenity">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>
                      </svg>
                      {projeto.beds}
                    </div>
                  )}
                  {projeto.baths && (
                    <div className="pd-amenity">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>
                        <circle cx="10" cy="9" r="2"/>
                        <path d="M4 12h14"/>
                        <path d="M14 9h4"/>
                      </svg>
                      {projeto.baths}
                    </div>
                  )}
                  {projeto.area && (
                    <div className="pd-amenity">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3v18M16 3v18M3 8h18M3 16h18"/>
                      </svg>
                      {projeto.area}
                    </div>
                  )}
                </div>
                
                <div className="pd-price">{projeto.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
