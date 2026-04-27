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
        title: "BREAKING — Tatajuba finalmente vai ser titulada",
        summary: "O IDACE publicou regras oficiais para a titulação de terras em Tatajuba. O artigo detalha os caminhos para a posse e a cláusula de não transferência de 5 anos.",
        url: "https://blog.terraventos.com/p/breaking-tatajuba-is-finally-getting",
        image: "/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg",
        date: "24 Abr 2026"
      },
      {
        title: "TikTok, Huawei e a onda de Data Centers no Ceará",
        summary: "O complexo do Pecém garantiu cinco grandes projetos de data centers, incluindo o site hiperescala do TikTok. Investimento de R$ 450B até 2035 redefinindo o mercado.",
        url: "https://blog.terraventos.com/p/tiktok-huawei-and-the-ceara-data",
        image: "/blog/datacenter.png",
        date: "25 Abr 2026"
      },
      {
        title: "Terreno de Marinha Explicado: A linha dos 33 metros",
        summary: "Um guia completo sobre a faixa de terra federal de 33 metros na costa brasileira. Entenda o SPU, foro e laudêmio para investimentos seguros beira-mar.",
        url: "https://blog.terraventos.com/p/terreno-de-marinha-explained-the",
        image: "/blog/marinha.png",
        date: "26 Abr 2026"
      },
      {
        title: "O Playbook do Comprador Estrangeiro no Ceará",
        summary: "Guia estratégico para investidores internacionais. Saiba por que o CPF é o principal requisito e conheça o 'Visto Gold' via investimento imobiliário.",
        url: "https://blog.terraventos.com/p/the-foreign-buyer-playbook-in-ceara",
        image: "/blog/foreign_buyer.png",
        date: "27 Abr 2026"
      }
    ],
    en: [
      {
        title: "BREAKING — Tatajuba Is Finally Getting Titled: IDACE",
        summary: "IDACE has published official rules for land titling in Tatajuba. The article details paths to ownership and the critical 5-year non-transferability clause.",
        url: "https://blog.terraventos.com/p/breaking-tatajuba-is-finally-getting",
        image: "/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg",
        date: "Apr 24, 2026"
      },
      {
        title: "TikTok, Huawei, and the Ceará Data Center Wave",
        summary: "Pecém secured five major data center projects, including TikTok's hyperscale site. R$450B investment by 2035 is rapidly repricing real estate.",
        url: "https://blog.terraventos.com/p/tiktok-huawei-and-the-ceara-data",
        image: "/blog/datacenter.png",
        date: "Apr 25, 2026"
      },
      {
        title: "Terreno de Marinha Explained: The 33-Meter Federal Line",
        summary: "A comprehensive guide to the 33-meter federal land strip along the Brazilian coast. Understand SPU, foro, and laudêmio for secure beachfront investments.",
        url: "https://blog.terraventos.com/p/terreno-de-marinha-explained-the",
        image: "/blog/marinha.png",
        date: "Apr 26, 2026"
      },
      {
        title: "The Foreign Buyer Playbook in Ceará",
        summary: "Strategic guide for international investors. Learn why CPF is the primary requirement and explore the 'Golden Visa' path through Northeast real estate.",
        url: "https://blog.terraventos.com/p/the-foreign-buyer-playbook-in-ceara",
        image: "/blog/foreign_buyer.png",
        date: "Apr 27, 2026"
      }
    ],
    es: [
      {
        title: "ÚLTIMA HORA — Tatajuba finalmente será titulada",
        summary: "IDACE ha publicado reglas oficiales para la titulación de tierras en Tatajuba. El artículo detalla las vías de propiedad y la cláusula de no transferencia de 5 años.",
        url: "https://blog.terraventos.com/p/breaking-tatajuba-is-finally-getting",
        image: "/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg",
        date: "24 Abr 2026"
      },
      {
        title: "TikTok, Huawei y la ola de Data Centers en Ceará",
        summary: "Pecém aseguró cinco grandes proyectos de centros de datos, incluido el sitio de TikTok. La inversión de R$ 450B para 2035 revaloriza el mercado.",
        url: "https://blog.terraventos.com/p/tiktok-huawei-and-the-ceara-data",
        image: "/blog/datacenter.png",
        date: "25 Abr 2026"
      },
      {
        title: "Terreno de Marinha Explicado: La línea federal de 33 metros",
        summary: "Una guía completa sobre la franja de tierra federal de 33 metros en la costa brasileña. Entienda SPU, foro y laudêmio para inversiones seguras.",
        url: "https://blog.terraventos.com/p/terreno-de-marinha-explained-the",
        image: "/blog/marinha.png",
        date: "26 Abr 2026"
      },
      {
        title: "El Playbook del Comprador Extranjero en Ceará",
        summary: "Guía estratégica para inversores internacionales. Sepa por qué el CPF es el requisito principal y conozca la 'Visa Gold' vía inversión inmobiliaria.",
        url: "https://blog.terraventos.com/p/the-foreign-buyer-playbook-in-ceara",
        image: "/blog/foreign_buyer.png",
        date: "27 Abr 2026"
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
