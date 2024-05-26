import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Benefits.css';

export const Benefits2 = () => {
  const { t } = useTranslation();

  return (
    <section className="benefits">
      <div className="benefits-image">
        <img src="/mnt/data/image2.png" alt={t('benefits2.image_alt')} />
      </div>
      <div className="benefits-content">
        <h2>{t('benefits2.title')}</h2>
        <ul>
          <li>
            <h3>{t('benefits2.benefit1_title')}</h3>
            <p>{t('benefits2.benefit1_description')}</p>
          </li>
          <li>
            <h3>{t('benefits2.benefit2_title')}</h3>
            <p>{t('benefits2.benefit2_description')}</p>
          </li>
          <li>
            <h3>{t('benefits2.benefit3_title')}</h3>
            <p>{t('benefits2.benefit3_description')}</p>
          </li>
        </ul>
        <Link className="learn-more" to="/learn-more-2">{t('benefits2.learn_more')}</Link>
      </div>
    </section>
  );
};
