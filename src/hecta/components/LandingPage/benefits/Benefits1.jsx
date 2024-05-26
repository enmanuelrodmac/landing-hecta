import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Benefits.css';

export const Benefits1 = () => {
  const { t } = useTranslation();

  return (
    <section className="benefits">
      <div className="benefits-image">
        <img src="/mnt/data/image1.png" alt={t('benefits1.image_alt')} />
      </div>
      <div className="benefits-content">
        <h2>{t('benefits1.title')}</h2>
        <ul>
          <li>
            <h3>{t('benefits1.benefit1_title')}</h3>
            <p>{t('benefits1.benefit1_description')}</p>
          </li>
          <li>
            <h3>{t('benefits1.benefit2_title')}</h3>
            <p>{t('benefits1.benefit2_description')}</p>
          </li>
          <li>
            <h3>{t('benefits1.benefit3_title')}</h3>
            <p>{t('benefits1.benefit3_description')}</p>
          </li>
        </ul>
        <Link className="learn-more" to="/learn-more-1">{t('benefits1.learn_more')}</Link>
      </div>
    </section>
  );
};
