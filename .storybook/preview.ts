// NOTE: src/components/Layout/Layout.tsx に対応

import '@fontsource/caveat/latin-400.css';
// FYI: https://caniuse.com/?search=focus-visible
// NOTE: Safariが対応したとき、削除する
// import 'focus-visible';
import '../src/components/Layout/tailwind.css';
import '../src/components/Layout/reset.css';
import '../src/components/Layout/a11y.css';
// NOTE: storybook 用の css
import '../config/storybook/css/main.css';
import '../src/components/Layout/base.css';
// HACK: remark.css の読み込みを、base.css よりも後にするため
import '../src/components/Blog/remark.css';

import { action } from '@storybook/addon-actions';
import { NormalizedToolbarArgType } from '@storybook/addon-toolbars/dist/ts3.9/types';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Parameters } from '@storybook/api';
import { withScreenshot } from 'storycap';

import { withReduxI18nProvider } from '../config/storybook/decorators/withReduxI18nProvider';
import { withReduxProvider } from '../config/storybook/decorators/withReduxProvider';
import { withThemeProvider } from '../config/storybook/decorators/withThemeProvider';

// HACK: gatsby のために, global と windows オブジェクトを拡張
declare let global: NodeJS.Global &
  typeof globalThis & {
    __BASE_PATH__: string;
    __PATH_PREFIX__: string;
    ___loader: {
      enqueue: () => void;
      hovering: () => void;
    };
    ___navigate: (pathname: string) => void;
  };

declare let window: Window &
  typeof globalThis & {
    ___navigate: (pathname: string) => void;
  };

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {
    return;
  },
  hovering: () => {
    return;
  },
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  screenshot: {
    viewports: ['iPad Pro', 'iPad', 'iPhone 12 Pro Max', 'iPhone SE'],
  },
  viewport: {
    defaultViewport: 'responsive',
    viewports: {
      'iPhone SE': {
        ...INITIAL_VIEWPORTS.iphone5,
        name: 'iPhone SE',
      },
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      'iPhone 12 Pro Max': INITIAL_VIEWPORTS.iphone12promax,
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      iPad: INITIAL_VIEWPORTS.ipad,
      'iPad Pro': {
        ...INITIAL_VIEWPORTS.ipad12p,
        name: 'iPad Pro',
      },
    },
  },
};

export const globalTypes: { [key: string]: NormalizedToolbarArgType } = {
  // NOTE: config/storybook/decorators/withReduxI18nProvider.tsx に対応
  locale: {
    defaultValue: 'ja',
    description: 'Internationalization locale',
    name: 'Locale',
    toolbar: {
      icon: 'globe',
      items: [
        { right: '🇺🇸', title: 'English', value: 'en' },
        { right: '🇯🇵', title: '日本語', value: 'ja' },
      ],
    },
  },
  // NOTE: config/storybook/decorators/withThemeProvider.tsx に対応
  theme: {
    defaultValue: 'side-by-side',
    description: 'Global theme for components',
    name: 'Theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { icon: 'circlehollow', title: 'light', value: 'light' },
        { icon: 'circle', title: 'dark', value: 'dark' },
        { icon: 'sidebar', title: 'side by side', value: 'side-by-side' },
        { icon: 'bottombar', title: 'stacked', value: 'stacked' },
      ],
    },
  },
};

export const decorators = [
  withScreenshot,
  withReduxI18nProvider,
  withThemeProvider,
  withReduxProvider,
];
