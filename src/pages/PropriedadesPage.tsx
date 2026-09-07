import { useTranslation } from 'react-i18next';
import ListagemPropriedades from '../components/ListagemPropriedades';
import { getOportunidadesData } from '../data/oportunidadesDataI18n';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import { useTransitionNavigate } from '../router/useTransitionNavigate';
import LocalizedLink from '../router/LocalizedLink';
import { REGIOES, type RegiaoKey } from '../data/regioes';
import { INTENT_PAGES } from '../data/intentPages';
import '../pages/RegiaoPage.css';

const HUB_TITLE: Record<string, string> = {
  pt: 'Explore por região e por intenção',
  en: 'Explore by area and by intent',
  es: 'Explora por región y por intención',
};

export default function PropriedadesPage() {
  const { i18n } = useTranslation();
  const transitionNavigate = useTransitionNavigate();
  const lang = i18n.language?.split('-')[0] || 'pt';

  const handleSelectOpportunity = (item: OportunidadeDetalhe) => {
    transitionNavigate(`/propriedade/${item.slug}`);
  };

  return (
    <div id="propriedades">
      <ListagemPropriedades
        items={getOportunidadesData(i18n.language).filter((item) => !item.unlisted).reverse()}
        onSelect={handleSelectOpportunity}
      />

      <nav className="regiao-links-relacionados" aria-label={HUB_TITLE[lang] || HUB_TITLE.pt}>
        <h2 className="regiao-links-titulo">{HUB_TITLE[lang] || HUB_TITLE.pt}</h2>
        <div className="regiao-links-lista">
          {(Object.keys(REGIOES) as RegiaoKey[]).map((k) => (
            <LocalizedLink key={k} to={`/${k}`} className="regiao-link-pill">
              {REGIOES[k].nomes[lang as 'pt' | 'en' | 'es']}
            </LocalizedLink>
          ))}
          {INTENT_PAGES.map((ip) => (
            <LocalizedLink key={ip.slug} to={`/${ip.slug}`} className="regiao-link-pill">
              {ip.h1[lang as 'pt' | 'en' | 'es']}
            </LocalizedLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
