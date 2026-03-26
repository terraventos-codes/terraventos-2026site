import { useTranslation } from 'react-i18next';
import './FormularioLuxo.css';

export default function FormularioLuxo() {
  const { t } = useTranslation();

  return (
    <section id="contato" className="formulario-luxo-section">
      <div className="formulario-luxo-overlay" aria-hidden="true" />
      <div className="formulario-luxo-content">
        <span className="formulario-luxo-pill reveal-badge">{t('form.badge')}</span>
        <h2 className="formulario-luxo-title reveal-heading" dangerouslySetInnerHTML={{ __html: t('form.title') }}></h2>
        <p className="formulario-luxo-subtitle reveal-subtext">
          {t('form.subtitle')}
        </p>

        <form className="formulario-luxo-card reveal-subtext" style={{ transitionDelay: '0.6s' }} onSubmit={(event) => event.preventDefault()}>
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
        </form>
      </div>
    </section>
  );
}
