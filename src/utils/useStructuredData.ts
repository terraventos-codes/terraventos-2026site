import { useEffect } from 'react';
import { serializeJsonLd, type JsonLd } from './structuredData';

/**
 * Injeta um ou mais blocos JSON-LD no <head> enquanto o componente esta montado
 * e os remove ao desmontar / trocar de pagina. Complementa o grafo estatico de
 * index.html + o que o generate-static.mjs pre-renderiza: cobre a navegacao SPA
 * e os crawlers que executam JS. Cada bloco recebe `data-dynamic-ld` para nao
 * colidir com o JSON-LD do HTML base.
 *
 * Passe `null`/`undefined` livremente (ex.: FAQ opcional) que sao ignorados.
 */
export function useStructuredData(...blocks: Array<JsonLd | null | undefined>): void {
  const payload = blocks
    .filter((b): b is JsonLd => Boolean(b))
    .map((b) => serializeJsonLd(b));
  const key = payload.join('|');

  useEffect(() => {
    if (typeof document === 'undefined' || payload.length === 0) return;

    // Remove os blocos pre-renderizados pelo generate-static.mjs desta pagina --
    // o componente agora e a fonte da verdade e evita BreadcrumbList/FAQ duplicados.
    document.head
      .querySelectorAll('script[data-ssr-ld]')
      .forEach((el) => el.remove());

    const nodes = payload.map((json) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.dataset.dynamicLd = 'true';
      el.textContent = json;
      document.head.appendChild(el);
      return el;
    });

    return () => {
      nodes.forEach((el) => el.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
