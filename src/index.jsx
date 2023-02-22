/* eslint-disable jest/require-hook */
import App from './App.jsx';
import detector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom';
import resources from './locale/';

i18n.use(detector).use(initReactI18next).init({
    detection: {
        order: ['querystring', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'] // 'localStorage' removed
    },
    fallbackLng: 'en',
    keySeparator: false, // No keys in form messages.welcome
    resources
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);