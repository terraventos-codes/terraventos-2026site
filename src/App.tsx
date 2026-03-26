import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import { getOportunidadesData } from './data/oportunidadesDataI18n';

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname.toLowerCase());
  const [selectedOpportunity, setSelectedOpportunity] = useState<OportunidadeDetalhe>(oportunidadesData[1]);
  const [transitionClass, setTransitionClass] = useState<'page-enter' | 'page-exit'>('page-enter');
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const isSwitchingRef = useRef(false);

  const heroSlides = ['/banners/2.png', '/banners/3.png', '/banners/4.png', '/banners/5.png'] as const;

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    // Update the displayed individual page data when language switches
    const localized = getOportunidadesData(newLang);
    const match = localized.find((d) => d.id === selectedOpportunity.id);
    if (match) setSelectedOpportunity(match);
  };

  const runTransitionTo = (nextPath: string, selectedItem?: OportunidadeDetalhe, pushHistory = true) => {
    if (isSwitchingRef.current) return;

    if (selectedItem) {
      // Find the localized version by id
      const localized = getOportunidadesData(i18n.language);
      const localizedItem = localized.find((d) => d.id === selectedItem.id) ?? selectedItem;
      setSelectedOpportunity(localizedItem);
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
          <a href="#inicio" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('inicio'); } else { runTransitionTo('/'); } }}>{t('nav.inicio')}</a>
          <a href="#oportunidades" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('oportunidades'); } else { runTransitionTo('/'); window.setTimeout(() => scrollToSection('oportunidades'), 950); } }}>{t('nav.oportunidades')}</a>
          <a href="#projetos" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('projetos'); } else { runTransitionTo('/'); window.setTimeout(() => scrollToSection('projetos'), 950); } }}>{t('nav.projetos')}</a>
          <a href="#estudo" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('estudo'); } else { runTransitionTo('/'); window.setTimeout(() => scrollToSection('estudo'), 950); } }}>{t('nav.estudo')}</a>
          <a href="#regioes" onClick={(e) => { e.preventDefault(); if (!isPaginaIndividual) { scrollToSection('regioes'); } else { runTransitionTo('/'); window.setTimeout(() => scrollToSection('regioes'), 950); } }}>{t('nav.regioes')}</a>
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

        {/* Language selector — outside nav so it stays visible on mobile */}
        <select
          className="language-selector"
          value={i18n.language.split('-')[0] || 'pt'}
          onChange={handleLanguageChange}
        >
          <option value="pt">PT</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>

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
          {t('nav.contato')}
          <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </header>

      <main className="main-content">
        <div className={`page-shell ${transitionClass}`}>
          {isPaginaIndividual ? (
            <PaginaIndividual item={selectedOpportunity} onBack={() => runTransitionTo('/')} />
          ) : (
            <>
              <div className="hero-background">
                <section className="hero" id="inicio">
                <div className="hero-slides" aria-hidden="true">
                  {heroSlides.map((src, index) => {
                    const isActive = index === heroSlideIndex;
                    return (
                      <div
                        key={src}
                        className={`hero-slide ${isActive ? 'is-active' : ''}`}
                        style={{ backgroundImage: `url('${src}')` }}
                      />
                    );
                  })}
                </div>
                <div className="hero-overlay" aria-hidden="true" />

                <div className="hero-text-container" style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transition: 'opacity 0.6s ease' }}>
                  {[0, 1, 2, 3].map((index) => {
                    const titles = t('hero.titles', { returnObjects: true }) as string[];
                    const subtitles = t('hero.subtitles', { returnObjects: true }) as string[];
                    const tags = t('hero.tags', { returnObjects: true }) as string[];
                    
                    return (
                      <div key={index} style={{
                        opacity: heroSlideIndex === index ? 1 : 0,
                        pointerEvents: heroSlideIndex === index ? 'auto' : 'none',
                        transition: 'opacity 0.6s ease',
                        position: heroSlideIndex === index ? 'relative' : 'absolute',
                        transform: heroSlideIndex === index ? 'none' : 'translateY(20px)',
                      }}>
                        <div style={{ display: 'inline-block', border: '1px solid #fff', borderRadius: '40px', padding: '6px 20px', fontSize: '1rem', marginBottom: '20px', color: '#fff', letterSpacing: '0.5px' }}>
                          {tags[index]}
                        </div>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', margin: '0 0 24px 0', textShadow: '0 4px 12px rgba(0,0,0,0.15)', fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: titles[index] }} />
                        <p className="hero-subtitle" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.15)' }} dangerouslySetInnerHTML={{ __html: subtitles[index] }} />
                      </div>
                    );
                  })}

                  <div style={{
                    opacity: heroSlideIndex >= 4 ? 1 : 0,
                    pointerEvents: heroSlideIndex >= 4 ? 'auto' : 'none',
                    transition: 'opacity 0.6s ease',
                    position: heroSlideIndex >= 4 ? 'relative' : 'absolute',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
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
                      {t('hero.cta')}
                    </button>
                  </div>
                </div>

                <div className="floating-card">
                  <div className="avatars">
                    <img src="/pessoa.avif" alt="Avatar 1" />
                    <img src="/pessoa2.avif" alt="Avatar 2" />
                    <img src="/pessoa3.avif" alt="Avatar 3" />
                  </div>
                  <div className="card-info">
                    <p dangerouslySetInnerHTML={{ __html: t('hero.card.experience').replace('\n', '<br />') }}></p>
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
