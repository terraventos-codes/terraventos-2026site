import { useEffect, useRef, useState } from 'react';
import './Depoimentos.css';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  female: boolean;
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
  },
  {
    quote:
      '"A assessoria concierge da Terra Ventos é o que realmente diferencia a marca. Eles cuidaram de tudo, do due diligence jurídico à conexão com os melhores arquitetos locais. Sentir que você faz parte de uma comunidade que preserva a essência rústica do Ceará, mas com um padrão internacional, é impagável."',
    name: 'Ana Paula S.',
    role: 'Proprietaria de Casa de Veraneio',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80',
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
  },
  {
    quote:
      '"Eu acompanho o mercado imobiliário e percebi que o litoral oeste do Ceará é o que o mercado chama de segredo mais bem guardado do mundo. Entrei como early adopter em Bitupitá através da Terra Ventos. O suporte bilíngue e a visão estratégica do Bernardo sobre onde a valorização vai bater primeiro foram os diferenciais para eu diversificar o meu portfólio aqui."',
    name: 'Ricardo T.',
    role: 'CTO de Tech e Kitesurfista',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80',
    female: false,
  },
];

export default function Depoimentos() {
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
      className={`depoimentos-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="depoimentos-shell">
        <div className="depoimentos-intro">
          <span className="depoimentos-pill">Depoimentos</span>
          <h2 className="depoimentos-title reveal-title">
            VOZES DA
            <br />
            COMUNIDADE
          </h2>
          <p className="depoimentos-text">
            Mais do que investidores, somos um ecossistema de visionários, atletas e entusiastas do litoral
            que escolheram o Ceará como o seu próximo marco de vida e patrimônio.
          </p>
        </div>

        <div className="depoimentos-grid">
          {depoimentos.map((item, index) => (
            <article
              key={item.name}
              className="depoimento-card"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="depoimento-stars" aria-hidden="true">
                {'★★★★★'}
              </div>
              <p className="depoimento-quote">{item.quote}</p>
              <div className="depoimento-footer">
                <img
                  className={`depoimento-avatar ${item.female ? 'is-female' : 'is-male'}`}
                  src={item.avatar}
                  alt={`Avatar de ${item.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="depoimento-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
