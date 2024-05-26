import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setIsMenuOpen(false); // Cerrar el menú al cambiar el idioma
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>{t('header.title')}</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="#" onClick={closeMenu}>{t('header.about_us')}</Link></li>
          <li><Link to="#" onClick={closeMenu}>{t('header.technology')}</Link></li>
          <li><Link to="#" onClick={closeMenu}>{t('header.sustainability')}</Link></li>
          <li><Link to="#" onClick={closeMenu}>{t('header.blog')}</Link></li>
          <li><Link to="#" onClick={closeMenu}>{t('header.contact')}</Link></li>
          <li className="language-switcher-mobile">
            <select onChange={changeLanguage} defaultValue={i18n.language}>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </li>
        </ul>
        <div className="close-menu" onClick={closeMenu}>×</div>
      </nav>
      <div className="language-switcher-desktop">
        <select onChange={changeLanguage} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};
