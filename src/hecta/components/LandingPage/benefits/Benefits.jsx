import React from 'react';
import { useTranslation } from 'react-i18next';
import './Benefits.css';

export const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className="benefits">
      <div className="benefits-image">
        <img src="/mnt/data/image.png" alt="Agriculture" />
      </div>
      <div className="benefits-content">
        <h2>{t('benefits.title')}</h2>
        <ul>
          <li>
            <h3>{t('benefits.benefit1_title')}</h3>
            <p>{t('benefits.benefit1_description')}</p>
          </li>
          <li>
            <h3>{t('benefits.benefit2_title')}</h3>
            <p>{t('benefits.benefit2_description')}</p>
          </li>
          <li>
            <h3>{t('benefits.benefit3_title')}</h3>
            <p>{t('benefits.benefit3_description')}</p>
          </li>
        </ul>
        <a className="learn-more" href="#">{t('benefits.learn_more')}</a>
      </div>
    </section>
  );
};
