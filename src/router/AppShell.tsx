import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { useLang, buildLocalizedPath } from './useLang';
import { useTransitionNavigate } from './useTransitionNavigate';
import LocalizedLink from './LocalizedLink';
import { scrollToSection } from '../utils/scrollToSection';
import { AppShellCtx } from './appShellContext';
import { PAGE_KEYWORDS, type SeoLang } from '../utils/seoKeywords';
import { toOgImage } from '../utils/seoImages';
import { REGIOES } from '../data/regioes';

export default function AppShell() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const lang = useLang();
  const transitionNavigate = useTransitionNavigate();
  const [previousPath, setPreviousPath] = useState<string>('/');
  const outlet = useOutlet();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [displayOutlet, setDisplayOutlet] = useState(outlet);
  const [transitionClass, setTransitionClass] = useState<'page-enter' | 'page-exit'>('page-enter');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const cleanPath =
    displayLocation.pathname.replace(/^\/(en|es)/, '').replace(/\/$/, '') || '/';
  const isPaginaIndividual = cleanPath.startsWith('/propriedade/');
  const isBlogPage = cleanPath.startsWith('/blog');

  // O idioma da URL é a fonte da verdade — sincroniza o i18next sempre que o prefixo mudar
  // (ex: acesso direto a /en/... deve exibir inglês, não o que o language-detector adivinhar).
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Anti-FOUC: marca o root como pronto assim que o React monta e os estilos estão aplicados
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.add('app-ready');
        });
      });
    }
  }, []);

  // Transição de página (exit → swap → enter), preservando a coreografia original
  useEffect(() => {
    if (location.key === displayLocation.key) return;

    // cleanPath já está sem o prefixo de idioma — previousPath deve ficar assim
    // também, já que transitionNavigate() reaplica o prefixo do idioma atual.
    // Guardar o pathname bruto (já prefixado) causava prefixo duplicado (ex:
    // "/en/en/") e a página caía no 404 ao clicar em "voltar".
    setPreviousPath(cleanPath);
    setTransitionClass('page-exit');

    const t1 = window.setTimeout(() => {
      setDisplayLocation(location);
      setDisplayOutlet(outlet);
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTransitionClass('page-enter');
    }, 280);

    return () => window.clearTimeout(t1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Reveal-on-scroll para as seções da página atual
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.main-content section'),
    ).filter(
      (section) =>
        !section.classList.contains('hero') &&
        !section.classList.contains('pagina-individual') &&
        section.dataset.revealManaged !== 'true',
    );

    const resolveRevealType = (section: HTMLElement) => {
      if (section.classList.contains('beach-banner')) return 'soft-zoom';
      if (section.id === 'oportunidades') return 'slide-left';
      if (section.id === 'projetos') return 'slide-right';
      if (section.id === 'regioes') return 'lift';
      if (section.id === 'propriedades') return 'soft-zoom';
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
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
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
  }, [displayLocation]);

  // Global SEO Reset — só se aplica às páginas que não gerenciam a própria SEO
  // (individual e institucional cuidam disso sozinhas)
  useEffect(() => {
    if (isPaginaIndividual || isBlogPage) return;

    // Rotas que gerenciam a própria SEO (não devem ser sobrescritas pelo reset global).
    // /taiba precisa estar aqui: seu useEffect roda antes (filho-antes-do-pai), então
    // sem essa exclusão o reset global rodava depois e sobrescrevia os valores corretos.
    const managesOwnSeo = [
      '/quem-somos',
      '/termos-e-condicoes',
      '/politica-de-privacidade',
      '/contato',
      '/ventoafavor',
      '/taiba',
      // Páginas de região (RegiaoPage) gerenciam a própria SEO — derivadas de
      // src/data/regioes.ts para não precisar manter esta lista em dois lugares.
      ...Object.keys(REGIOES).map((key) => `/${key}`),
    ].includes(cleanPath);
    if (managesOwnSeo) return;

    const title = 'Terra Ventos | Imóveis de Luxo e Investimentos no Ceará';
    const description =
      'Curadoria exclusiva de imóveis de alto padrão e oportunidades de investimento no litoral cearense (Preá, Tatajuba, Bitupitá).';
    const keywords = PAGE_KEYWORDS[cleanPath === '/propriedades' ? 'propriedades' : 'home'][lang as SeoLang] || PAGE_KEYWORDS.home.pt;
    const imageUrl = `${window.location.origin}${toOgImage('/banners/banners-01.webp')}`;
    const url = window.location.origin + displayLocation.pathname;

    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:url', url, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);
  }, [displayLocation, cleanPath, isPaginaIndividual, isBlogPage, lang, t]);

  // Hreflang tags for SEO — cada alternate deve apontar para a versão
  // traduzida desta MESMA página, não para a página atual repetida 3x
  useEffect(() => {
    const baseUrl = window.location.origin;

    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());

    const ptUrl = `${baseUrl}${cleanPath === '/' ? '/' : cleanPath}`;
    const enUrl = cleanPath === '/' ? `${baseUrl}/en/` : `${baseUrl}/en${cleanPath}`;
    const esUrl = cleanPath === '/' ? `${baseUrl}/es/` : `${baseUrl}/es${cleanPath}`;

    const alternates: Array<[string, string]> = [
      ['pt-BR', ptUrl],
      ['en-US', enUrl],
      ['es-ES', esUrl],
      ['x-default', ptUrl],
    ];
    alternates.forEach(([hreflang, href]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    });

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${baseUrl}${displayLocation.pathname}`;
  }, [displayLocation, cleanPath]);

  return (
    <div className="app-container">
      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {isPaginaIndividual && (
            <button
              className="header-back-button"
              onClick={() => transitionNavigate(previousPath || '/')}
              aria-label={t('pagina.back') || 'Voltar'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          )}
          <LocalizedLink to="/" className="brand">
            <LazyImage src="/logo.avif" alt="Terra Ventos" className="brand-logo" priority />
          </LocalizedLink>
        </div>

        <nav className="nav-links">
          <LocalizedLink to="/">{t('nav.inicio')}</LocalizedLink>
          <LocalizedLink to="/propriedades">{t('nav.oportunidades')}</LocalizedLink>
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              if (cleanPath === '/') {
                scrollToSection('projetos');
              } else {
                transitionNavigate('/');
                window.setTimeout(() => scrollToSection('projetos'), 950);
              }
            }}
          >
            {t('nav.projetos')}
          </a>
          <a
            href="#estudo"
            onClick={(e) => {
              e.preventDefault();
              if (!isPaginaIndividual && cleanPath === '/') {
                scrollToSection('estudo');
              } else {
                transitionNavigate('/');
                window.setTimeout(() => scrollToSection('estudo'), 950);
              }
            }}
          >
            {t('nav.estudo')}
          </a>
          <a
            href="#regioes"
            onClick={(e) => {
              e.preventDefault();
              if (!isPaginaIndividual && cleanPath === '/') {
                scrollToSection('regioes');
              } else {
                transitionNavigate('/');
                window.setTimeout(() => scrollToSection('regioes'), 950);
              }
            }}
          >
            {t('nav.regioes')}
          </a>
          <a
            href={buildLocalizedPath(lang, '/ventoafavor')}
            className="nav-comunidade-link"
            onClick={(e) => {
              e.preventDefault();
              // /ventoafavor é fullscreen (fora do AppShell) — leva consigo de onde veio
              // via router state, já que não tem acesso ao previousPath do AppShell.
              navigate(buildLocalizedPath(lang, '/ventoafavor'), {
                state: { from: location.pathname },
              });
            }}
          >
            {t('nav.comunidade')}
          </a>
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
        <div className="language-selector-wrapper" ref={langRef}>
          <button
            className="language-selector-trigger"
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label="Selecionar idioma"
          >
            {lang === 'pt' && <img src="https://flagcdn.com/w20/br.png" alt="BR" className="lang-flag" />}
            {lang === 'en' && <img src="https://flagcdn.com/w20/us.png" alt="US" className="lang-flag" />}
            {lang === 'es' && <img src="https://flagcdn.com/w20/es.png" alt="ES" className="lang-flag" />}
            <span className="lang-label">{lang.toUpperCase()}</span>
            <svg className={`lang-arrow ${isLangOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {isLangOpen && (
            <div className="language-dropdown">
              {(['pt', 'en', 'es'] as const).map((targetLang) => (
                <button
                  key={targetLang}
                  onClick={() => {
                    // Navega para a MESMA página no idioma escolhido — a URL passa a refletir
                    // o idioma exibido, em vez de só trocar o texto (i18n.changeLanguage é
                    // acionado depois, automaticamente, pelo efeito que sincroniza com :lang).
                    if (targetLang !== lang) {
                      navigate(buildLocalizedPath(targetLang, cleanPath));
                    }
                    setIsLangOpen(false);
                  }}
                >
                  <img
                    src={
                      targetLang === 'pt'
                        ? 'https://flagcdn.com/w20/br.png'
                        : targetLang === 'en'
                          ? 'https://flagcdn.com/w20/us.png'
                          : 'https://flagcdn.com/w20/es.png'
                    }
                    alt={targetLang.toUpperCase()}
                  />{' '}
                  <span>{targetLang === 'pt' ? 'Português' : targetLang === 'en' ? 'English' : 'Español'}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="header-contact-button"
          type="button"
          onClick={() => {
            if (!isPaginaIndividual && cleanPath === '/') {
              scrollToSection('contato');
            } else {
              transitionNavigate('/');
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
          <h1 className="sr-only">Terra Ventos | Imóveis de Luxo e Investimentos no Ceará</h1>
          <AppShellCtx.Provider value={{ previousPath, transitionNavigate }}>
            {displayOutlet}
          </AppShellCtx.Provider>
          <Footer />
        </div>
      </main>

      {!isPaginaIndividual && (
        <a
          href="https://wa.me/5585985572807"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-fixed-button"
          aria-label={t('pagina.whatsapp') || 'Fale conosco pelo WhatsApp'}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.072.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>{t('pagina.whatsapp') || 'Fale conosco'}</span>
        </a>
      )}
    </div>
  );
}
