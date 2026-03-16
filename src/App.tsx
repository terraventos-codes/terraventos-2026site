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
  const isSwitchingRef = useRef(false);

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
          <a href="#inicio">Inicio</a>
          <a href="#oportunidades">Oportunidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#estudo">Estudo dos Ventos</a>
          <a href="#regioes">Regioes</a>
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

              <section className="beach-banner"></section>
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
