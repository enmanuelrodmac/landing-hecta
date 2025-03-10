import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
      </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
