import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>{t('header.title')}</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="#">{t('header.about_us')}</Link></li>
          <li><Link to="#">{t('header.technology')}</Link></li>
          <li><Link to="#">{t('header.sustainability')}</Link></li>
          <li><Link to="#">{t('header.blog')}</Link></li>
          <li><Link to="#">{t('header.contact')}</Link></li>
        </ul>
      </nav>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('es')}>ES</button>
      </div>
    </header>
  );
};
