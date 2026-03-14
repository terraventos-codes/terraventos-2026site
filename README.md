# Terra Ventos 2026 Site

Site institucional e de captação de oportunidades imobiliárias da Terra Ventos, desenvolvido com React + TypeScript + Vite.

## Principais funcionalidades

- Landing page com hero section, navegação por âncoras e CTA de contato.
- Seção de oportunidades com seleção de item e visualização de página individual de detalhes.
- Seção de projetos em destaque com interação para abrir detalhes.
- Blocos de conteúdo sobre cidades/regiões, estudo dos ventos e mapa.
- Seções de prova social: assessoria, depoimentos e formulário de contato.
- Transições de página (`/` e `/pagina-individual`) com `history.pushState`.
- Animações de entrada por scroll com `IntersectionObserver`.
- Layout responsivo com componentes separados por seção.

## Stack

- React 19
- TypeScript
- Vite
- ESLint

## Estrutura resumida

- `src/App.tsx`: composição da página principal, roteamento simples e transições.
- `src/components/`: componentes das seções (oportunidades, projetos, mapa, formulário, etc.).
- `src/data/oportunidadesData.ts`: dados das oportunidades exibidas no site.
- `public/`: assets estáticos usados na interface.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Observação sobre arquivos grandes

Para evitar erro de push por arquivo grande, o `.gitignore` foi configurado para bloquear:

- `*.exe`
- `*.gif`
- `*.mp4`
