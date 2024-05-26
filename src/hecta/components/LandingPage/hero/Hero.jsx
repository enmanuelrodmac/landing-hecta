import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>{t('hero.welcome')}</h2>
        <p>{t('hero.description')}</p>
        <Link className="learn-more" to="#">{t('hero.learn_more')}</Link>
      </div>
    </section>
  );
};
