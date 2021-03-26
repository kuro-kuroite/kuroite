import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';

import { commonEn } from '../locales/en/common';
import { about__footerEn } from '../locales/en/components/About/Footer';
import { blog__footerEn } from '../locales/en/components/Blog/Footer';
import { blog__footerInfoEn } from '../locales/en/components/Blog/FooterInfo';
import { blog__hatenaBookmarkLinkEn } from '../locales/en/components/Blog/HatenaBookmarkLink';
import { blog__tocEn } from '../locales/en/components/Blog/Toc';
import { blog__tocIconEn } from '../locales/en/components/Blog/TocIcon';
import { blog__twitterLinkEn } from '../locales/en/components/Blog/TwitterLink';
import { indexEn } from '../locales/en/components/Index';
import { index__blogItemEn } from '../locales/en/components/Index/BlogItem';
import { layout__darkModeEn } from '../locales/en/components/Layout/DarkMode';
import { layout__footerNavEn } from '../locales/en/components/Layout/FooterNav';
import { layout__gitHubLinkEn } from '../locales/en/components/Layout/GitHubLink';
import { layout__headerEn } from '../locales/en/components/Layout/Header';
import { layout__headerNavEn } from '../locales/en/components/Layout/HeaderNav';
import { layout__i18nModeEn } from '../locales/en/components/Layout/I18nMode';
import { layout__rssFeedLinkEn } from '../locales/en/components/Layout/RssFeedLink';
import { notFoundEn } from '../locales/en/components/NotFound';
import { tagEn } from '../locales/en/components/Tag';
import { commonJa } from '../locales/ja/common';
import { about__footerJa } from '../locales/ja/components/About/Footer';
import { blog__footerJa } from '../locales/ja/components/Blog/Footer';
import { blog__footerInfoJa } from '../locales/ja/components/Blog/FooterInfo';
import { blog__hatenaBookmarkLinkJa } from '../locales/ja/components/Blog/HatenaBookmarkLink';
import { blog__tocJa } from '../locales/ja/components/Blog/Toc';
import { blog__tocIconJa } from '../locales/ja/components/Blog/TocIcon';
import { blog__twitterLinkJa } from '../locales/ja/components/Blog/TwitterLink';
import { indexJa } from '../locales/ja/components/Index';
import { index__blogItemJa } from '../locales/ja/components/Index/BlogItem';
import { layout__darkModeJa } from '../locales/ja/components/Layout/DarkMode';
import { layout__footerNavJa } from '../locales/ja/components/Layout/FooterNav';
import { layout__gitHubLinkJa } from '../locales/ja/components/Layout/GitHubLink';
import { layout__headerJa } from '../locales/ja/components/Layout/Header';
import { layout__headerNavJa } from '../locales/ja/components/Layout/HeaderNav';
import { layout__i18nModeJa } from '../locales/ja/components/Layout/I18nMode';
import { layout__rssFeedLinkJa } from '../locales/ja/components/Layout/RssFeedLink';
import { notFoundJa } from '../locales/ja/components/NotFound';
import { tagJa } from '../locales/ja/components/Tag';
import { TKeys } from '../locales/typings';

export const i18n = i18next.createInstance();

void i18n
  .use(initReactI18next)
  .use(LngDetector)
  .init({
    fallbackLng: 'ja',
    interpolation: { escapeValue: false },
    resources: {
      en: {
        common: commonEn,
        'components/about/footer': about__footerEn,
        'components/blog/footer': blog__footerEn,
        'components/blog/footerInfo': blog__footerInfoEn,
        'components/blog/hatenaBookmarkLink': blog__hatenaBookmarkLinkEn,
        'components/blog/toc': blog__tocEn,
        'components/blog/tocIcon': blog__tocIconEn,
        'components/blog/twitterLink': blog__twitterLinkEn,
        'components/index': indexEn,
        'components/index/blogItem': index__blogItemEn,
        'components/layout/darkMode': layout__darkModeEn,
        'components/layout/footerNav': layout__footerNavEn,
        'components/layout/gitHubLink': layout__gitHubLinkEn,
        'components/layout/header': layout__headerEn,
        'components/layout/headerNav': layout__headerNavEn,
        'components/layout/i18nMode': layout__i18nModeEn,
        'components/layout/rssFeedLink': layout__rssFeedLinkEn,
        'components/notFound': notFoundEn,
        'components/tag': tagEn,
      },
      ja: {
        common: commonJa,
        'components/about/footer': about__footerJa,
        'components/blog/footer': blog__footerJa,
        'components/blog/footerInfo': blog__footerInfoJa,
        'components/blog/hatenaBookmarkLink': blog__hatenaBookmarkLinkJa,
        'components/blog/toc': blog__tocJa,
        'components/blog/tocIcon': blog__tocIconJa,
        'components/blog/twitterLink': blog__twitterLinkJa,
        'components/index': indexJa,
        'components/index/blogItem': index__blogItemJa,
        'components/layout/darkMode': layout__darkModeJa,
        'components/layout/footerNav': layout__footerNavJa,
        'components/layout/gitHubLink': layout__gitHubLinkJa,
        'components/layout/header': layout__headerJa,
        'components/layout/headerNav': layout__headerNavJa,
        'components/layout/i18nMode': layout__i18nModeJa,
        'components/layout/rssFeedLink': layout__rssFeedLinkJa,
        'components/notFound': notFoundJa,
        'components/tag': tagJa,
      },
    },
  });

export const useT = <K extends keyof TKeys>(
  ns: K
): ((key: TKeys[K]) => string) => {
  const { t } = useTranslation(ns);

  return (key: TKeys[K]): string => {
    // HACK: ラベルの翻訳データを補完できるようにするため
    // FIXME: Template Literal Types 対応待ち (t of react-18next)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return t(key, { ns });
  };
};

export const buildT = <K extends keyof TKeys>(ns: K) => {
  return (key: TKeys[K]): string =>
    i18n.t(key, { lng: (() => i18n.language)(), ns });
};
