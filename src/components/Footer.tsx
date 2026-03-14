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
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M14 8H16V5H14C11.8 5 10 6.8 10 9V11H8V14H10V20H13V14H15.4L16 11H13V9C13 8.4 13.4 8 14 8Z" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6.5 8.5C7.6 8.5 8.5 7.6 8.5 6.5C8.5 5.4 7.6 4.5 6.5 4.5C5.4 4.5 4.5 5.4 4.5 6.5C4.5 7.6 5.4 8.5 6.5 8.5Z" fill="currentColor" />
              <path d="M4.8 9.8H8.1V19.5H4.8V9.8Z" fill="currentColor" />
              <path d="M10.1 9.8H13.2V11.1H13.3C13.8 10.2 14.9 9.6 16.1 9.6C19.1 9.6 19.5 11.5 19.5 14V19.5H16.2V14.6C16.2 13.4 16.2 11.9 14.7 11.9C13.2 11.9 13 13.1 13 14.5V19.5H10.1V9.8Z" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 8.2C20.8 7.3 20.2 6.6 19.4 6.4C17.9 6 12 6 12 6C12 6 6.1 6 4.6 6.4C3.8 6.6 3.2 7.3 3 8.2C2.6 9.8 2.6 12 2.6 12C2.6 12 2.6 14.2 3 15.8C3.2 16.7 3.8 17.4 4.6 17.6C6.1 18 12 18 12 18C12 18 17.9 18 19.4 17.6C20.2 17.4 20.8 16.7 21 15.8C21.4 14.2 21.4 12 21.4 12C21.4 12 21.4 9.8 21 8.2Z" fill="currentColor" />
              <path d="M10 15V9L15 12L10 15Z" fill="#0E1622" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
