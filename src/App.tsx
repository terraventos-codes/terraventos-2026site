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

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    if (!isPaginaIndividual) {
      scrollToSection(targetId);
      window.history.replaceState({}, '', `/#${targetId}`);
      return;
    }

    runTransitionTo('/');

    window.setTimeout(() => {
      scrollToSection(targetId);
      window.history.replaceState({}, '', `/#${targetId}`);
    }, 950);
  };

  const handleFloatingSupportClick = () => {
    if (!isPaginaIndividual) {
      scrollToSection('contato');
      window.history.replaceState({}, '', '/#contato');
      return;
    }

    runTransitionTo('/');
    window.setTimeout(() => {
      scrollToSection('contato');
      window.history.replaceState({}, '', '/#contato');
    }, 950);
  };

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.main-content section')
    ).filter((section) => !section.classList.contains('hero'));

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
      <button
        type="button"
        className="floating-support-button"
        onClick={handleFloatingSupportClick}
      >
        <span className="floating-support-label">Quero atendimento</span>
        <span className="floating-support-icon-wrap" aria-hidden="true">
          <svg className="floating-support-icon" width="18" height="18" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M19.11 17.17c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.98 2.62 1.11 2.8.14.18 1.93 2.95 4.68 4.14.65.28 1.16.44 1.55.56.65.21 1.24.18 1.7.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z"
            />
            <path
              fill="currentColor"
              d="M16.02 3.2c-6.97 0-12.64 5.52-12.64 12.31 0 2.16.57 4.28 1.66 6.15L3.2 28.8l7.42-1.92c1.8.96 3.84 1.46 5.93 1.46 6.97 0 12.64-5.52 12.64-12.31S22.99 3.2 16.02 3.2zm0 22.1c-1.93 0-3.81-.52-5.43-1.49l-.39-.23-4.4 1.14 1.17-4.16-.25-.41a10.03 10.03 0 0 1-1.56-5.14c0-5.12 4.49-9.28 10.01-9.28 5.52 0 10.01 4.16 10.01 9.28 0 5.12-4.49 9.28-10.01 9.28z"
            />
          </svg>
        </span>
      </button>
      <header className="header">
        <a href="/" className="brand">
          <img src="/logo.avif" alt="Terra Ventos" className="brand-logo" />
        </a>

        <nav className="nav-links">
          <a href="#inicio" onClick={(event) => handleNavClick(event, 'inicio')}>Inicio</a>
          <a href="#oportunidades" onClick={(event) => handleNavClick(event, 'oportunidades')}>Oportunidades</a>
          <a href="#projetos" onClick={(event) => handleNavClick(event, 'projetos')}>Projetos</a>
          <a href="#estudo" onClick={(event) => handleNavClick(event, 'estudo')}>Estudo dos Ventos</a>
          <a href="#regioes" onClick={(event) => handleNavClick(event, 'regioes')}>Regioes</a>
        </nav>

        <button className="cta-button" type="button">
          <span>Entre em contato</span>
          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </header>

      <main className="main-content">
        <div className={`page-shell ${transitionClass}`}>
          {isPaginaIndividual ? (
            <PaginaIndividual item={selectedOpportunity} />
          ) : (
            <>
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

                <div className="hero-text-container">
                  <h1 className="hero-title">
                    INVISTA COM O
                    <br />
                    VENTO A FAVOR.
                  </h1>
                  <p className="hero-subtitle">
                    Terrenos, casas e projetos exclusivos com seguranca juridica,
                    <br />
                    <u>valorizacao real e suporte completo.</u>
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
                    <p>
                      10+ anos de experiencia
                      <br />
                      imobiliaria no Ceara
                    </p>
                    <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  </div>
                </div>
              </section>

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
