import { useTranslation } from 'react-i18next';
import './FaqBlock.css';

export interface FaqBlockItem {
  q: string;
  a: string;
}

interface FaqBlockProps {
  items: FaqBlockItem[];
  /** Título da seção; default: "Perguntas frequentes" traduzido. */
  title?: string;
}

/**
 * Bloco de perguntas frequentes (accordion nativo <details>). O texto das
 * respostas fica no DOM mesmo fechado — crawlers e LLMs leem normalmente.
 * O JSON-LD FAQPage correspondente é injetado por quem renderiza o bloco
 * (RegiaoPage / IntentPage) via useStructuredData(buildFaqPage(...)).
 */
export default function FaqBlock({ items, title }: FaqBlockProps) {
  const { t } = useTranslation();
  if (!items?.length) return null;

  return (
    <section className="faq-block" aria-label={title || t('faq.title', 'Perguntas frequentes')}>
      <h2 className="faq-block-title">{title || t('faq.title', 'Perguntas frequentes')}</h2>
      <div className="faq-block-list">
        {items.map((item, i) => (
          <details key={i} className="faq-block-item">
            <summary className="faq-block-question">{item.q}</summary>
            <div className="faq-block-answer">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
