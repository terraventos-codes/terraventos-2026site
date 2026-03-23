import { useEffect, useRef, useState } from 'react';
import './Assessoria.css';

const diferenceiais = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    title: 'Curadoria Early Stage',
    text: 'Identificação de ativos com alto potencial de valorização antes da exposição ao mercado aberto.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Networking',
    text: 'Acesso a uma rede seleta de investidores e atletas dos esportes de vento.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
      </svg>
    ),
    title: 'Atendimento Concierge',
    text: 'Assessoria personalizada em todas as etapas, garantindo uma jornada de investimento fluida e sofisticada.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    title: 'Valorização Real',
    text: 'Histórico comprovado de rentabilidade nas regiões com maior crescimento do litoral cearense.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: 'Segurança Jurídica',
    text: 'Due diligence rigoroso e auditoria fundiária para garantir a proteção integral do patrimônio.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    title: 'Suporte Global Multilíngue',
    text: 'Atendimento especializado em Português, Inglês e Espanhol.',
  }
];

export default function Assessoria() {
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
      id="assessoria" 
      ref={sectionRef} 
      data-reveal-managed="true"
      className={`assessoria-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="assessoria-header">
        <span className="assessoria-pill reveal-badge">Diferenciais da Terra Ventos</span>
        <h2 className="assessoria-title reveal-heading">
          ASSESSORIA COMPLETA<br/>
          DO INICIO AO FIM
        </h2>
      </div>

      <div className="assessoria-grid">
        {diferenceiais.map((item, idx) => (
          <div 
            key={idx} 
            className="assessoria-card"
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <div className="assessoria-icon">{item.icon}</div>
            <h3 className="assessoria-card-title">{item.title}</h3>
            <p className="assessoria-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
