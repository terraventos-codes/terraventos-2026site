import './FormularioLuxo.css';

export default function FormularioLuxo() {
  return (
    <section id="contato" className="formulario-luxo-section">
      <div className="formulario-luxo-overlay" aria-hidden="true" />
      <div className="formulario-luxo-content">
        <span className="formulario-luxo-pill reveal-badge">Receba as novidades</span>
        <h2 className="formulario-luxo-title reveal-heading">
          VENTO SOPRA PRIMEIRO PARA
          <br />
          QUEM ESTA CONECTADO.
        </h2>
        <p className="formulario-luxo-subtitle reveal-subtext">
          Junte-se à nossa lista prioritária e receba curadoria de terrenos early stage, dados de valorização
          do litoral cearense e oportunidades que não chegam ao mercado aberto.
        </p>

        <form className="formulario-luxo-card reveal-subtext" style={{ transitionDelay: '0.6s' }} onSubmit={(event) => event.preventDefault()}>
          <div className="formulario-luxo-grid">
            <label>
              <input type="text" name="firstName" placeholder="First Name" />
            </label>
            <label>
              <input type="text" name="lastName" placeholder="Last Name" />
            </label>
            <label>
              <input type="email" name="email" placeholder="Email" />
            </label>
            <label>
              <input type="tel" name="phone" placeholder="Phone" />
            </label>
          </div>

          <label className="formulario-luxo-message">
            <textarea name="message" placeholder="What Can We Help You ?" rows={4} />
          </label>
        </form>
      </div>
    </section>
  );
}
