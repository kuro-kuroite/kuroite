import React, { FC, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import { selectLang, useSelector } from '../reducer/store';
import { i18n } from './i18n';

const useI18nStore = () => {
  const lang = useSelector(selectLang);

  useEffect(() => {
    async function changeLang() {
      await i18n.changeLanguage(lang);
    }

    void changeLang();
  }, [lang]);

  return i18n;
};

export const ReduxI18nProvider: FC = ({ children }) => {
  const i18n = useI18nStore();

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
