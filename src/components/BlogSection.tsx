import React from 'react';
import { useTranslation } from 'react-i18next';
import './BlogSection.css';

interface BlogPost {
  title: string;
  summary: string;
  url: string;
  image: string;
  date: string;
}

const BlogSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0] || 'pt';

  const posts: Record<string, BlogPost[]> = {
    pt: [
      {
        title: "Carnaúba, Hidrogênio Verde e a Corrida por Terras no Ceará",
        summary: "O Ceará exporta 74% da cera de carnaúba do Brasil e está construindo sua maior planta de hidrogênio verde. A terra é finita — investidores estrangeiros já estão se movimentando.",
        url: "https://blog.terraventos.com/p/carnauba-green-hydrogen-and-the-ceara",
        image: "/terrenos.avif",
        date: "24 Abr 2026"
      },
      {
        title: "Globo Repórter coloca o Ceará no Mapa — E investidores atentos já estão comprando",
        summary: "O Globo Repórter destacou a costa do Ceará, seus jangadeiros e os Lençóis Paracuruenses. Quando um estado ganha destaque no horário nobre, a janela de preços locais começa a fechar.",
        url: "https://blog.terraventos.com/p/globo-reporter-puts-ceara-on-the",
        image: "/imgbeach.avif",
        date: "15 Abr 2026"
      },
      {
        title: "Tatajuba: O Paraíso Escondido do Kitesurf onde Investidores Inteligentes compram terra",
        summary: "Kitesurf em lagoas, corredores de downwind e terras beira-mar a preços pré-boom — por que este canto tranquilo do Ceará é o próximo grande investimento em kite.",
        url: "https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise",
        image: "/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg",
        date: "02 Abr 2026"
      },
      {
        title: "Preá - o melhor destino de kitesurf para 2026?",
        summary: "A 20 minutos do aeroporto de Jericoacoara, a meca dos pro-riders. Ventos constantes fazem deste o principal destino de kitesurf da América do Sul.",
        url: "https://blog.terraventos.com/p/prea-the-best-kitesurf-destination",
        image: "/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg",
        date: "20 Mar 2026"
      }
    ],
    en: [
      {
        title: "Carnaúba, Green Hydrogen, and the Ceará Land Crunch",
        summary: "Ceará exports 74% of Brazil's carnaúba wax, is building its biggest green hydrogen plant, and attracted R$9.4B investment. Land is finite — foreign buyers are moving.",
        url: "https://blog.terraventos.com/p/carnauba-green-hydrogen-and-the-ceara",
        image: "/terrenos.avif",
        date: "Apr 24, 2026"
      },
      {
        title: "Globo Repórter Puts Ceará on the Map — And Smart Investors Are Already Buying In",
        summary: "Globo Repórter spotlights Ceará's coast and the otherworldly Lençóis Paracuruenses. When a state gets prime-time spotlight, the window for local prices starts to close.",
        url: "https://blog.terraventos.com/p/globo-reporter-puts-ceara-on-the",
        image: "/imgbeach.avif",
        date: "Apr 15, 2026"
      },
      {
        title: "Tatajuba: The Hidden Kitesurf Paradise Where Smart Investors Are Buying Land",
        summary: "Lagoon kiteboarding, downwind corridors, and prime beachfront land at pre-boom prices — why this quiet corner is the next big kite investment.",
        url: "https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise",
        image: "/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg",
        date: "Apr 02, 2026"
      },
      {
        title: "Preá - the best kitesurf destination for 2026?",
        summary: "20 minutes from Jericoacoara airport, a pro-rider mecca. Consistent trade winds make this South America’s premier kitesurf destination.",
        url: "https://blog.terraventos.com/p/prea-the-best-kitesurf-destination",
        image: "/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg",
        date: "Mar 20, 2026"
      }
    ],
    es: [
      {
        title: "Carnaúba, Hidrógeno Verde y la Carrera por la Tierra en Ceará",
        summary: "Ceará exporta el 74% de la cera de carnaúba de Brasil y está construyendo su mayor planta de hidrógeno verde. La tierra es finita — los inversores extranjeros ya se están moviendo.",
        url: "https://blog.terraventos.com/p/carnauba-green-hydrogen-and-the-ceara",
        image: "/terrenos.avif",
        date: "24 Abr 2026"
      },
      {
        title: "Globo Repórter pone a Ceará en el mapa — Y los inversores atentos ya están comprando",
        summary: "Globo Repórter destacó la costa de Ceará y los Lençóis Paracuruenses. Cuando un estado gana protagonismo en horario estelar, la ventana de precios locales comienza a cerrarse.",
        url: "https://blog.terraventos.com/p/globo-reporter-puts-ceara-on-the",
        image: "/imgbeach.avif",
        date: "15 Abr 2026"
      },
      {
        title: "Tatajuba: El paraíso oculto del kitesurf donde inversores inteligentes compran tierras",
        summary: "Kitesurf en lagunas, corredores de downwind y tierras frente al mar a precios pre-boom — por qué este rincón tranquilo es la próxima gran inversión en kite.",
        url: "https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise",
        image: "/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg",
        date: "02 Abr 2026"
      },
      {
        title: "Preá - ¿el mejor destino de kitesurf para 2026?",
        summary: "A 20 minutos del aeropuerto de Jericoacoara, la meca de los pro-riders. Vientos constantes hacen de este el principal destino de kitesurf de América del Sur.",
        url: "https://blog.terraventos.com/p/prea-the-best-kitesurf-destination",
        image: "/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg",
        date: "20 Mar 2026"
      }
    ]
  };

  const displayPosts = posts[currentLang] || posts.pt;

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <span className="blog-badge">{t('blog.badge', 'Insights & Mercado')}</span>
          <h2 className="blog-title" dangerouslySetInnerHTML={{ __html: t('blog.title', 'ACOMPANHE NOSSA<br />CURADORIA NO BLOG') }}></h2>
        </div>

        <div className="blog-grid">
          {displayPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} loading="lazy" />
                <div className="blog-card-date">{post.date}</div>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog-read-more">
                  {t('blog.readMore', 'Leia mais')}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-footer">
          <a href="https://blog.terraventos.com/" target="_blank" rel="noopener noreferrer" className="blog-all-link">
            {t('blog.viewAll', 'Ver todos os artigos')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
