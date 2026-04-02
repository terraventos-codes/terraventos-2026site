import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import './FormularioLuxo.css';

export default function FormularioLuxo() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs.sendForm(
      'service_lr09pp8',
      'template_e800aaa',
      form.current,
      'Gv7fqaOjlowe6NdnI'
    )
      .then(() => {
        toast.success(t('form.success', 'Mensagem recebida com sucesso! Em breve, um de nossos especialistas entrará em contato.'), {
          duration: 8000,
          style: {
            background: '#111827',
            color: '#C4B096',
            border: '1px solid rgba(196, 176, 150, 0.3)',
          },
          iconTheme: {
            primary: '#C4B096',
            secondary: '#111827',
          },
        });
        setIsSent(true);
        setIsSending(false);
        form.current?.reset();

        setTimeout(() => setIsSent(false), 8000);
      }, (error) => {
        console.error('Erro ao enviar email:', error.text);
        setIsSending(false);
        toast.error('Ocorreu um erro no envio. Tente novamente mais tarde.');
      });
  };

  return (
    <section id="contato" className="formulario-luxo-section">
      <Toaster position="bottom-center" />
      <div className="formulario-luxo-overlay" aria-hidden="true" />
      <div className="formulario-luxo-content">
        <span className="formulario-luxo-pill reveal-badge">{t('form.badge')}</span>
        <h2 className="formulario-luxo-title reveal-heading" dangerouslySetInnerHTML={{ __html: t('form.title') }}></h2>
        <p className="formulario-luxo-subtitle reveal-subtext">
          {t('form.subtitle')}
        </p>

        <form ref={form} className="formulario-luxo-card reveal-subtext" style={{ transitionDelay: '0.6s' }} onSubmit={sendEmail}>
          <div className="formulario-luxo-grid">
            <label>
              <input type="text" name="firstName" placeholder={t('form.fields.first')} />
            </label>
            <label>
              <input type="text" name="lastName" placeholder={t('form.fields.last')} />
            </label>
            <label>
              <input type="email" name="email" placeholder={t('form.fields.email')} />
            </label>
            <label>
              <input type="tel" name="phone" placeholder={t('form.fields.phone')} />
            </label>
          </div>

          <label className="formulario-luxo-message">
            <textarea name="message" placeholder={t('form.message')} rows={4} />
          </label>

          <button type="submit" className="formulario-luxo-submit" disabled={isSending}>
            {isSending ? 'Enviando...' : isSent ? 'Mensagem Enviada!' : (t('form.submit') || 'Enviar Mensagem')}
          </button>
        </form>
      </div>
    </section>
  );
}
