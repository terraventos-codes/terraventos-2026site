import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Pagina404 from '../components/Pagina404';
import LocalizedLink from '../router/LocalizedLink';
import { useAppShellContext } from '../router/appShellContext';
import { fetchPublishedPostBySlug, pickLangFields, toLangCode, type BlogPostRow } from '../lib/blogPosts';
import { toOgImage } from '../utils/seoImages';
import { useStructuredData } from '../utils/useStructuredData';
import { buildBreadcrumbList } from '../utils/structuredData';
import './BlogPostPage.css';

const CRUMB_BLOG: Record<string, string> = { pt: 'Blog', en: 'Blog', es: 'Blog' };

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const { previousPath, transitionNavigate } = useAppShellContext();
  const lang = toLangCode(i18n.language);

  const [row, setRow] = useState<BlogPostRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    // Reseta o estado ao trocar de slug (ex: navegar de um post para outro sem
    // desmontar a página) — sem isso, o post/erro anterior ficaria visível
    // brevemente enquanto o novo fetch está em andamento.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setNotFound(false);

    fetchPublishedPostBySlug(slug)
      .then((data) => {
        if (cancelled) return;
        if (!data) {
          setNotFound(true);
        } else {
          setRow(data);
        }
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setNotFound(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const post = useMemo(() => (row ? pickLangFields(row, lang) : null), [row, lang]);

  useEffect(() => {
    if (!post) return;

    const title = `${post.title} | Terra Ventos`;
    const description = post.excerpt;
    const socialImage = post.coverImageUrl ? toOgImage(post.coverImageUrl) : toOgImage('/banners/banners-01.webp');
    const imageUrl = socialImage.startsWith('http') ? socialImage : window.location.origin + socialImage;
    const url = window.location.href;

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
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:url', url, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);
  }, [post]);

  const blogPrefix = lang === 'pt' ? '' : `/${lang}`;
  useStructuredData(
    post
      ? buildBreadcrumbList([
          { name: 'Terra Ventos', url: lang === 'pt' ? '/' : `/${lang}/` },
          { name: CRUMB_BLOG[lang] || CRUMB_BLOG.pt, url: `${blogPrefix}/blog` },
          { name: post.title, url: `${blogPrefix}/blog/${slug}` },
        ])
      : null,
  );

  if (notFound) {
    return <Pagina404 onBack={() => transitionNavigate(previousPath || '/blog')} />;
  }

  if (loading || !post) {
    return <p className="blog-post-status">{t('blog.loading', 'Carregando…')}</p>;
  }

  const dateLabel = post.publishedAt
    ? new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : lang, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(post.publishedAt))
    : '';

  return (
    <article className="blog-post-page">
      {post.coverImageUrl && (
        <div className="blog-post-cover">
          <img src={post.coverImageUrl} alt={post.title} />
          {post.coverImageCreditName && (
            <p className="blog-post-cover-credit">
              Foto:{' '}
              {post.coverImageCreditUrl ? (
                <a href={post.coverImageCreditUrl} target="_blank" rel="noreferrer">
                  {post.coverImageCreditName}
                </a>
              ) : (
                post.coverImageCreditName
              )}{' '}
              /{' '}
              <a href="https://unsplash.com/?utm_source=terra_ventos&utm_medium=referral" target="_blank" rel="noreferrer">
                Unsplash
              </a>
            </p>
          )}
        </div>
      )}
      <div className="blog-post-container">
        <LocalizedLink to="/blog" className="blog-post-back">
          ← {t('blog.backToBlog', 'Voltar para o blog')}
        </LocalizedLink>
        <h1 className="blog-post-title">{post.title}</h1>
        {dateLabel && (
          <p className="blog-post-date">
            {t('blog.publishedOn', 'Publicado em')} {dateLabel}
          </p>
        )}
        <div className="blog-post-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
