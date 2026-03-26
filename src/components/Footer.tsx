import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-luxo">
      <div className="footer-luxo-logo-container">
        <img src="/logo.avif" alt="Terra Ventos" className="footer-luxo-logo" />
      </div>

      <div className="footer-luxo-content">
        <div className="footer-luxo-info">
          <p><a href="tel:+5585985572807">+55 (85) 9 8557-2807</a></p>
          <p><a href="mailto:info@terraventos.com.br">info@terraventos.com.br</a></p>
          <p>Fortaleza, Ceará - Rua Monsenhor Bruno, nº 1153, sala 608, Aldeota, Fortaleza - CE, 60115-191</p>
          <p>Preá, Cruz, Ceará - Rua Antônio Chagas, nº 857 - Preá, Cruz - CE, 62595-000</p>
        </div>

        <div className="footer-luxo-right">
          <nav className="footer-luxo-social" aria-label="Redes sociais">
            {/* Facebook */}
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 8H16V5H14C11.8 5 10 6.8 10 9V11H8V14H10V20H13V14H15.4L16 11H13V9C13 8.4 13.4 8 14 8Z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
              </svg>
            </a>
          </nav>
          <p className="footer-copyright">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
