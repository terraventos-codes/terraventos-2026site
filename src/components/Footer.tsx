import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-luxo">
      <div className="footer-luxo-inner">
        <div className="footer-luxo-brand">
          <img src="/logo.avif" alt="Terra Ventos" className="footer-luxo-logo" />
          <p className="footer-luxo-tagline">Curadoria imobiliaria de alto padrao no litoral cearense.</p>
        </div>

        <div className="footer-luxo-info">
          <p>
            <a href="tel:+5585985572807">+55 (85) 9 8557-2807</a>
          </p>
          <p>
            <a href="mailto:info@terraventos.com.br">info@terraventos.com.br</a>
          </p>
          <p>Fortaleza, Ceara - Rua Monsenhor Bruno, no 1153, sala 608, Aldeota, Fortaleza - CE, 60115-191</p>
          <p>Prea, Cruz, Ceara - Rua Antonio Chagas, no 857 - Prea, Cruz - CE, 62595-000</p>
        </div>

        <nav className="footer-luxo-social" aria-label="Redes sociais">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/61576076889577/videos/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M14 8H16V5H14C11.8 5 10 6.8 10 9V11H8V14H10V20H13V14H15.4L16 11H13V9C13 8.4 13.4 8 14 8Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/terraventos/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 3C4.24 3 2 5.24 2 8v8c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3zm10.25 1.5a1.25 1.25 0 0 0-1.25 1.25c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/558585572807"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path
                fill="currentColor"
                d="M16.02 3.2c-6.97 0-12.64 5.52-12.64 12.31 0 2.16.57 4.28 1.66 6.15L3.2 28.8l7.42-1.92c1.8.96 3.84 1.46 5.93 1.46 6.97 0 12.64-5.52 12.64-12.31S22.99 3.2 16.02 3.2zm0 22.1c-1.93 0-3.81-.52-5.43-1.49l-.39-.23-4.4 1.14 1.17-4.16-.25-.41a10.03 10.03 0 0 1-1.56-5.14c0-5.12 4.49-9.28 10.01-9.28 5.52 0 10.01 4.16 10.01 9.28 0 5.12-4.49 9.28-10.01 9.28z"
              />
              <path
                fill="currentColor"
                d="M19.11 17.17c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.98 2.62 1.11 2.8.14.18 1.93 2.95 4.68 4.14.65.28 1.16.44 1.55.56.65.21 1.24.18 1.7.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z"
              />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
