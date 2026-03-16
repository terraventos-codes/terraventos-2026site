import './VillaCondudu.css';
import { oportunidadesData, type OportunidadeDetalhe } from '../data/oportunidadesData';

type VillaConduduProps = {
  onSelect: (item: OportunidadeDetalhe) => void;
};

const conduduOpportunity = oportunidadesData[0];

export default function VillaCondudu({ onSelect }: VillaConduduProps) {
  return (
    <section id="villa-condudu" className="condudu-section">
      <div className="condudu-container">
        <div className="condudu-media">
          <span className="condudu-pill">Temporada exclusiva</span>
          <div className="condudu-image-wrapper">
            <img
              src="/projetos.avif"
              alt="Villa Condudu III em Prea, Ceara"
              className="condudu-image"
            />
          </div>
        </div>

        <div className="condudu-content">
          <h2 className="condudu-title reveal-title">
            VILLA CONDUDU III
            <br />
            PARA ALUGAR NO PREA
          </h2>

          <p className="condudu-subtitle">
            Casa de alto padrão em Preá, pensada para temporadas com vento constante,
            serviço personalizado e integração total com o mar.
          </p>

          <div className="condudu-tags">
            <span className="condudu-tag">Temporada</span>
            <span className="condudu-tag">3 quartos</span>
            <span className="condudu-tag">2 banheiros</span>
            <span className="condudu-tag">500 m²</span>
          </div>

          <div className="condudu-price-line">
            <span className="condudu-price">R$ 1.200/dia</span>
            <span className="condudu-price-note">tarifa referência em alta temporada</span>
          </div>

          <button
            type="button"
            className="condudu-cta"
            onClick={() => onSelect(conduduOpportunity)}
          >
            Ver detalhes da casa
          </button>
        </div>
      </div>
    </section>
  );
}

