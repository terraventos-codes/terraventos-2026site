import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Depoimentos.css';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  female: boolean;
  rating?: number;
};

const depoimentos: Testimonial[] = [
  {
    quote:
      '"O que me atraiu na Terra Ventos foi a capacidade de antecipação. Eles não me ofereceram apenas um terreno, mas um posicionamento estratégico em Bitupitá antes da valorização explodir. A segurança jurídica e o suporte bilíngue foram fundamentais para eu investir com tranquilidade, mesmo morando fora."',
    name: 'Marc G.',
    role: 'Investidor Internacional',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80',
    female: false,
  },
  {
    quote:
      '"Como praticante de wingfoil, eu buscava um lugar onde o vento fosse constante e a comunidade vibrante. Na Terra Ventos, encontrei uma curadoria que entendeu o que um velejador precisa. O Estudo dos Ventos aplicado ao meu lote garantiu que minha casa fosse integrada à natureza e perfeita para o esporte."',
    name: 'Lucas M.',
    role: 'Empresario e Kitesurfista',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80',
    female: false,
    rating: 4,
  },
  {
    quote:
      '"A assessoria concierge da Terra Ventos é o que realmente diferencia a marca. Eles cuidaram de tudo, do due diligence jurídico à conexão com os melhores arquitetos locais. Sentir que você faz parte de uma comunidade que preserva a essência rústica do Ceará, mas com um padrão internacional, é impagável."',
    name: 'Ana Paula S.',
    role: 'Proprietaria de Casa de Veraneio',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&q=80',
    female: true,
  },
  {
    quote:
      '"Como advogada, a minha prioridade sempre foi a segurança documental. No litoral, a informalidade assusta, mas a Terra Ventos entregou um due diligence impecável. Investi em uma propriedade na Praia dos Monteiros com a certeza de que estava a construir um patrimônio sólido e regularizado para a minha família. É uma tranquilidade que não tem preço."',
    name: 'Carolina R.',
    role: 'Advogada e Investidora',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&q=80',
    female: true,
  },
  {
    quote:
      '"O que me conquistou foi o Estudo dos Ventos. Como designer, valorizo projetos que respeitam o meio ambiente. Ver como a Terra Ventos utiliza a ciência do clima para orientar a implantação das casas, garantindo frescor natural e luz perfeita, é fascinante. Não é apenas um terreno, é a base para uma arquitetura de alto padrão que conversa com a natureza."',
    name: 'Mariana V.',
    role: 'Designer e Kitesurfista',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80',
    female: true,
    rating: 4,
  },
  {
    quote:
      '"O que me conquistou foi o Estudo dos Ventos. Como designer, valorizo projetos que respeitam o meio ambiente. Ver como a Terra Ventos utiliza a ciência do clima para orientar a implantação das casas, garantindo frescor natural e luz perfeita, é fascinante. Não é apenas um terreno, é a base para uma arquitetura de alto padrão que conversa com a natureza."',
    name: 'Ricardo T.',
    role: 'CTO de Tech e Kitesurfista',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80',
    female: false,
    rating: 4,
  },
];

export default function Depoimentos() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      data-reveal-managed="true"
      className={`depoimentos-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="depoimentos-shell">
        <div className="depoimentos-header">
          <span className="depoimentos-pill reveal-badge">{t('depoimentos.badge')}</span>
          <h2 className="depoimentos-title reveal-heading" dangerouslySetInnerHTML={{ __html: t('depoimentos.title') }}></h2>
          <p className="depoimentos-subtitle reveal-subtext">
            {t('depoimentos.subtitle')}
          </p>
        </div>

        <div className="depoimentos-grid">
          {depoimentos.map((dep, idx) => {
            const roles = t('depoimentos.roles', { returnObjects: true }) as string[];
            const quotes = t('depoimentos.quotes', { returnObjects: true }) as string[];
            
            return (
              <div 
                key={dep.name} 
                className="depoimento-card"
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="depoimento-stars">
                  {'★'.repeat(dep.rating || 5)}{'☆'.repeat(5 - (dep.rating || 5))}
                </div>
                <p className="depoimento-quote">{quotes[idx]}</p>
                <div className="depoimento-author">
                  <img src={dep.avatar} alt={`Avatar de ${dep.name}`} className="depoimento-avatar" />
                  <div className="depoimento-author-info">
                    <span className="depoimento-name">{dep.name}</span>
                    <span className="depoimento-role">{roles[idx]}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
