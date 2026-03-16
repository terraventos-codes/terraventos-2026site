import './FormularioLuxo.css';

export default function FormularioLuxo() {
  return (
    <section id="contato" className="formulario-luxo-section">
      <div className="formulario-luxo-overlay" aria-hidden="true" />
      <div className="formulario-luxo-content">
        <span className="formulario-luxo-pill">Receba as novidades</span>
        <h2 className="formulario-luxo-title reveal-title">
          VENTO SOPRA PRIMEIRO PARA
          <br />
          QUEM ESTA CONECTADO.
        </h2>
        <p className="formulario-luxo-subtitle">
          Junte-se a nossa lista prioritaria e receba curadoria de terrenos early stage, dados de valorizacao
          do litoral cearense e oportunidades que nao chegam ao mercado aberto.
        </p>

        <form className="formulario-luxo-card" onSubmit={(event) => event.preventDefault()}>
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
