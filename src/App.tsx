import { useEffect, useRef, useState } from 'react';
import './App.css';
import Oportunidades from './components/Oportunidades';
import ProjetosDestaque from './components/ProjetosDestaque';
import VillaCondudu from './components/VillaCondudu';
import Cidades from './components/Cidades';
import EstudoVentos from './components/EstudoVentos';
import Mapa from './components/Mapa';
import Assessoria from './components/Assessoria';
import Depoimentos from './components/Depoimentos';
import FormularioLuxo from './components/FormularioLuxo';
import Footer from './components/Footer';
import PaginaIndividual from './components/PaginaIndividual';
import { oportunidadesData, type OportunidadeDetalhe } from './data/oportunidadesData';

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname.toLowerCase());
  const [selectedOpportunity, setSelectedOpportunity] = useState<OportunidadeDetalhe>(oportunidadesData[1]);
  const [transitionClass, setTransitionClass] = useState<'page-enter' | 'page-exit'>('page-enter');
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const isSwitchingRef = useRef(false);

  const heroSlides = ['/hero.avif', '/bitupita.JPG', '/conduru.jpeg'] as const;

  const runTransitionTo = (nextPath: string, selectedItem?: OportunidadeDetalhe, pushHistory = true) => {
    if (isSwitchingRef.current) return;

    if (selectedItem) {
      setSelectedOpportunity(selectedItem);
    }

    isSwitchingRef.current = true;
    setTransitionClass('page-exit');

    window.setTimeout(() => {
      if (pushHistory && window.location.pathname.toLowerCase() !== nextPath) {
        window.history.pushState({}, '', nextPath);
      }

      setCurrentPath(nextPath);
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTransitionClass('page-enter');

      window.setTimeout(() => {
        isSwitchingRef.current = false;
      }, 620);
    }, 280);
  };

  useEffect(() => {
    const handlePopState = () => {
      const nextPath = window.location.pathname.toLowerCase();
      runTransitionTo(nextPath, undefined, false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (!section) return;

    const headerOffset = 96;
    const rect = section.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - headerOffset;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.main-content section')
    ).filter((section) => !section.classList.contains('hero') && section.dataset.revealManaged !== 'true');

    const resolveRevealType = (section: HTMLElement) => {
      if (section.classList.contains('beach-banner')) return 'soft-zoom';
      if (section.id === 'oportunidades') return 'slide-left';
      if (section.id === 'projetos') return 'slide-right';
      if (section.id === 'regioes') return 'lift';
      if (section.id === 'estudo') return 'slide-left';
      if (section.id === 'mapa') return 'soft-zoom';
      if (section.id === 'assessoria') return 'lift';
      if (section.id === 'depoimentos') return 'slide-right';
      if (section.id === 'contato') return 'soft-zoom';
      return 'lift';
    };

    sections.forEach((section, index) => {
      section.classList.add('is-reveal');
      section.style.setProperty('--reveal-delay', `${Math.min(index * 55, 280)}ms`);
      section.dataset.reveal = resolveRevealType(section);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove('is-reveal', 'is-visible');
        section.style.removeProperty('--reveal-delay');
        delete section.dataset.reveal;
      });
    };
  }, [currentPath]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 12000);
    return () => window.clearInterval(intervalId);
  }, []);

  const handleSelectOpportunity = (item: OportunidadeDetalhe) => {
    runTransitionTo('/pagina-individual', item, true);
  };

  const isPaginaIndividual = currentPath === '/pagina-individual';

  return (
    <div className="app-container">
      <header className="header">
        <a href="/" className="brand">
          <img src="/logo.avif" alt="Terra Ventos" className="brand-logo" />
        </a>

        <nav className="nav-links">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('inicio'); } else { runTransitionTo('/'); } }}>Inicio</a>
          <a href="#oportunidades" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('oportunidades'); } else { runTransitionTo('/'); window.setTimeout(() => scrollToSection('oportunidades'), 950); } }}>Oportunidades</a>
          <a href="#projetos" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('projetos'); } else { runTransitionTo('/'); window.setTimeout(() => scrollToSection('projetos'), 950); } }}>Projetos</a>
          <a href="#estudo" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('estudo'); } else { runTransitionTo('/'); window.setTimeout(() => scrollToSection('estudo'), 950); } }}>Estudo dos Ventos</a>
          <a href="#regioes" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('regioes'); } else { runTransitionTo('/'); window.setTimeout(() => scrollToSection('regioes'), 950); } }}>Regiões</a>
          <a
            href="https://www.instagram.com/terraventos/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Terra Ventos"
          >
            <svg className="nav-instagram-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 3C4.24 3 2 5.24 2 8v8c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3zm10.25 1.5a1.25 1.25 0 0 0-1.25 1.25c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
              />
            </svg>
          </a>
        </nav>

        <button
          className="header-contact-button"
          type="button"
          onClick={() => {
            if (!isPaginaIndividual) {
              scrollToSection('contato');
            } else {
              runTransitionTo('/');
              window.setTimeout(() => scrollToSection('contato'), 950);
            }
          }}
        >
          <span className="contact-dot"></span>
          Entrar em contato
          <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </header>

      <main className="main-content">
        <div className={`page-shell ${transitionClass}`}>
          {isPaginaIndividual ? (
            <PaginaIndividual item={selectedOpportunity} />
          ) : (
            <>
              <div className="hero-background">
                <section className="hero" id="inicio">
                <div className="hero-slides" aria-hidden="true">
                  {heroSlides.map((src, index) => {
                    const isActive = index === heroSlideIndex;
                    const isBitupita = src.toLowerCase().includes('bitupita');
                    return (
                      <div
                        key={src}
                        className={`hero-slide ${isActive ? 'is-active' : ''} ${isBitupita ? 'hero-slide--bitupita' : ''}`}
                        style={{ backgroundImage: `url('${src}')` }}
                      />
                    );
                  })}
                </div>
                <div className="hero-overlay" aria-hidden="true" />

                <div className="hero-text-container" style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
                  <button
                    className="cta-button"
                    type="button"
                    onClick={() => {
                      if (!isPaginaIndividual) {
                        scrollToSection('oportunidades');
                      } else {
                        runTransitionTo('/');
                        window.setTimeout(() => scrollToSection('oportunidades'), 950);
                      }
                    }}
                    style={{ transform: 'scale(1.2)' }}
                  >
                    Conhecer Projetos
                  </button>
                </div>

                <div className="floating-card">
                  <div className="avatars">
                    <img src="/pessoa.avif" alt="Avatar 1" />
                    <img src="/pessoa2.avif" alt="Avatar 2" />
                    <img src="/pessoa3.avif" alt="Avatar 3" />
                  </div>
                  <div className="card-info">
                    <p>
                      10+ anos de experiência
                      <br />
                      imobiliária no Ceará
                    </p>
                    <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  </div>
                </div>
              </section>
              </div>

              <Oportunidades onSelect={handleSelectOpportunity} />

              <section className="beach-banner"></section>

              <ProjetosDestaque onSelect={handleSelectOpportunity} />

              <VillaCondudu onSelect={handleSelectOpportunity} />

              <Cidades />

              <EstudoVentos />

              <Mapa />

              <Assessoria />

              <section className="beach-banner beach-banner--dji"></section>
              <Depoimentos />
              <FormularioLuxo />
            </>
          )}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
