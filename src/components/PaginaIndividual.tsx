import './PaginaIndividual.css';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';

type PaginaIndividualProps = {
  item: OportunidadeDetalhe;
};

export default function PaginaIndividual({ item }: PaginaIndividualProps) {
  return (
    <section className="pagina-individual">
      <div className="pi-main">
        <div className="pi-gallery">
          <span className="pi-pill">{item.badge}</span>
          <img src={item.gallery.main} alt={`Imagem principal de ${item.propertyTitle}`} className="pi-image-main" />
          <img src={item.gallery.sideTop} alt={`Imagem complementar de ${item.propertyTitle}`} className="pi-image-side-top" />
          <img src={item.gallery.sideBottom} alt={`Mapa e dados de ${item.propertyTitle}`} className="pi-image-side-bottom" />
        </div>

        <h1 className="pi-title">{item.propertyTitle}</h1>
        <p className="pi-meta">{item.location}</p>
        <div className="pi-rating" aria-label={`Avaliacao ${item.rating} de 5`}>
          {'?'.repeat(item.rating)}
        </div>
        <p className="pi-exclusive">{item.exclusiveText}</p>

        <div className="pi-content-grid">
          <div className="pi-content-main">
            <h2 className="pi-section-title">Sobre a propriedade</h2>
            {item.about.map((paragraph) => (
              <p key={paragraph} className="pi-text">
                {paragraph}
              </p>
            ))}

            <h3 className="pi-section-subtitle">Infra-estrutura</h3>
            <ul className="pi-infra-list">
              {item.infra.map((info) => (
                <li key={info}>{info}</li>
              ))}
            </ul>

            <h3 className="pi-section-subtitle">Facilidades</h3>
            <div className="pi-facilities">
              {item.facilities.map((facilidade) => (
                <span key={facilidade} className="pi-facility-chip">
                  {facilidade}
                </span>
              ))}
            </div>
          </div>

          <aside className="pi-content-side">
            <div className="pi-card">
              <span className="pi-card-tag">{item.priceTag}</span>
              <p className="pi-price">{item.price}</p>
              <p className="pi-installments">{item.installments}</p>
              <div className="pi-avatars">
                <img src="/pessoa.avif" alt="Consultor 1" />
                <img src="/pessoa2.avif" alt="Consultor 2" />
                <img src="/pessoa3.avif" alt="Consultor 3" />
              </div>
              <button type="button" className="pi-cta">
                Fale com um advisor
              </button>
            </div>
          </aside>
        </div>

        <h3 className="pi-section-subtitle">Location</h3>
        <div className="pi-map-wrapper">
          <img src={item.mapImage} alt={`Mapa da localizacao de ${item.propertyTitle}`} className="pi-map" />
        </div>
      </div>
    </section>
  );
}
