import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <a href="/" className="brand">
          <img src="/logo.avif" alt="Terra Ventos" className="brand-logo" />
        </a>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#oportunidades">Oportunidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#estudo">Estudo dos Ventos</a>
          <a href="#regioes">Regioes</a>
        </nav>

        <button className="cta-button" type="button">
          <span className="dot"></span>
          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="hero">
          <div className="hero-text-container">
            <h1 className="hero-title">
              INVISTA COM O<br/>VENTO A FAVOR.
            </h1>
            <p className="hero-subtitle">
              Terrenos, casas e projetos exclusivos com segurança jurídica,<br/>valorização real e suporte completo.
            </p>
            <button className="hero-cta">Conhecer projetos</button>
          </div>

          <div className="floating-card">
            <div className="avatars">
              <img src="/pessoa.avif" alt="Avatar 1" />
              <img src="/pessoa2.avif" alt="Avatar 2" />
              <img src="/pessoa3.avif" alt="Avatar 3" />
            </div>
            <div className="card-info">
              <p>10+ anos de experiência<br/>imobiliária no Ceará</p>
              <div className="stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
