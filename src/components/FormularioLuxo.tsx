// EmailJS imports mantidos para uso futuro
// import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import toast, { Toaster } from 'react-hot-toast';
import './FormularioLuxo.css';

// ── GHL form config por idioma ────────────────────────────────────────────
const GHL_FORMS = [
  { lang: 'pt', id: 'pvDrkEzyF1OCtbZcq6bK', name: 'Website Form pt-br' },
  { lang: 'en', id: '0lRWNzcIWMkbvySfWPWC', name: 'Website Form - english' },
  { lang: 'es', id: '7KHKzwkQ8hSIdbuDnwoY', name: 'Website Form - spanish' },
] as const;
// ─────────────────────────────────────────────────────────────────────────

export default function FormularioLuxo() {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language.split('-')[0] as 'pt' | 'en' | 'es';

  // ── Fade suave ao trocar idioma ──────────────────────────────────────────
  const [visibleLang, setVisibleLang] = useState(currentLang);
  const [fading, setFading] = useState(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (currentLang === visibleLang) return;
    // Inicia fade-out
    setFading(true);
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    // Após fade-out (300 ms), troca o iframe e inicia fade-in
    fadeTimer.current = setTimeout(() => {
      setVisibleLang(currentLang);
      setFading(false);
    }, 300);
    return () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, [currentLang]);
  // ────────────────────────────────────────────────────────────────────────

  // ── EmailJS logic (preserved, inactive) ─────────────────────────────────
  // const formRef = useRef<HTMLFormElement>(null);
  // const [isSending, setIsSending] = useState(false);
  // const [isSent, setIsSent] = useState(false);
  //
  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!formRef.current) return;
  //   setIsSending(true);
  //   emailjs.sendForm(
  //     'service_lr09pp8',
  //     'template_e800aaa',
  //     formRef.current,
  //     'Gv7fqaOjlowe6NdnI'
  //   )
  //     .then(() => {
  //       toast.success(t('form.success', 'Mensagem recebida com sucesso!'), {
  //         duration: 8000,
  //         style: { background: '#111827', color: '#C4B096', border: '1px solid rgba(196, 176, 150, 0.3)' },
  //         iconTheme: { primary: '#C4B096', secondary: '#111827' },
  //       });
  //       setIsSent(true);
  //       setIsSending(false);
  //       formRef.current?.reset();
  //       setTimeout(() => setIsSent(false), 8000);
  //     }, (error) => {
  //       console.error('Erro ao enviar email:', error.text);
  //       setIsSending(false);
  //       toast.error('Ocorreu um erro no envio. Tente novamente mais tarde.');
  //     });
  // };
  // ────────────────────────────────────────────────────────────────────────

  return (
    <section id="contato" className="formulario-luxo-section">
      {/* <Toaster position="bottom-center" /> */}
      <div className="formulario-luxo-overlay" aria-hidden="true" />
      <div className="formulario-luxo-content">
        <span className="formulario-luxo-pill reveal-badge">{t('form.badge')}</span>
        <h2 className="formulario-luxo-title reveal-heading" dangerouslySetInnerHTML={{ __html: t('form.title') }}></h2>
        <p className="formulario-luxo-subtitle reveal-subtext">
          {t('form.subtitle')}
        </p>

        {/* ── GHL Form — fade suave ao trocar idioma ── */}
        {GHL_FORMS.filter(({ lang }) => lang === visibleLang).map(({ lang, id, name }) => {
          const iframeId = `inline-${id}`;
          return (
            <div
              key={lang}
              className="formulario-luxo-card formulario-luxo-ghl reveal-subtext"
              style={{
                transitionDelay: '0.6s',
                opacity: fading ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '28px',
                  display: 'block',
                  background: '#ffffff',
                }}
                id={iframeId}
                data-layout={"{'id':'INLINE'}"}
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={name}
                data-height="492"
                data-layout-iframe-id={iframeId}
                data-form-id={id}
                title={name}
              />
            </div>
          );
        })}

        {/* ── EmailJS Form (inativo — descomentar para reativar) ── */}
        {/*
        <form ref={formRef} className="formulario-luxo-card reveal-subtext" style={{ transitionDelay: '0.6s' }} onSubmit={sendEmail}>
          <div className="formulario-luxo-grid">
            <label><input type="text" name="firstName" placeholder={t('form.fields.first')} /></label>
            <label><input type="text" name="lastName" placeholder={t('form.fields.last')} /></label>
            <label><input type="email" name="email" placeholder={t('form.fields.email')} /></label>
            <label><input type="tel" name="phone" placeholder={t('form.fields.phone')} /></label>
          </div>
          <label className="formulario-luxo-message">
            <textarea name="message" placeholder={t('form.message')} rows={4} />
          </label>
          <button type="submit" className="formulario-luxo-submit" disabled={isSending}>
            {isSending ? 'Enviando...' : isSent ? 'Mensagem Enviada!' : (t('form.submit') || 'Enviar Mensagem')}
          </button>
        </form>
        */}
      </div>
    </section>
  );
}
