import './EstudoVentos.css';

export default function EstudoVentos() {
  return (
    <section id="estudo" className="estudo-section">
      <div className="estudo-container">
        
        {/* Left Video/Image Column */}
        <div className="estudo-media">
          {/* Using placeholder image for Bernardo */}
          <div className="estudo-video-wrapper">
            <img src="/projetos.avif" alt="Bernardo Carvalho Wertheim" className="estudo-video-thumb" />
            <div className="estudo-video-info">
              <h4>Bernardo Carvalho Wertheim</h4>
              <p>Fundador e CEO Terra Ventos</p>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="estudo-content">
          <h2 className="estudo-title">
            ESTUDO<br />DOS VENTOS
          </h2>
          
          <p className="estudo-desc">
            Terra Ventos apresenta: Quais locais mais crescem em valorização, onde está menos explorado e com o maior potencial. <strong>Mergulhe em dados e análise potencial do Litoral Cearense.</strong>
          </p>
          
          <div className="estudo-stats">
            <div className="estudo-stat">
              <span className="stat-value">+15</span>
              <span className="stat-label">Cidades analisadas</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">9 meses</span>
              <span className="stat-label">de ventos constante</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">+20%</span>
              <span className="stat-label">de valorização ao ano</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">APAs</span>
              <span className="stat-label">técnico e ambiental</span>
            </div>
          </div>
          
          <button className="estudo-btn">Fazer Download</button>
        </div>
        
      </div>
    </section>
  );
}
