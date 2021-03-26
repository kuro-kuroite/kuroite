import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import React from 'react';

import { ReduxI18nProvider } from './ReduxI18nProvider';
import { ReduxStoreProvider } from './ReduxStoreProvider';
import { ReduxThemeProvider } from './ReduxThemeProvider';

export const wrapWithProvider: WrapWithProvider = ({ element }) => (
  <ReduxStoreProvider>
    <ReduxI18nProvider>
      <ReduxThemeProvider>{element}</ReduxThemeProvider>
    </ReduxI18nProvider>
  </ReduxStoreProvider>
);

// FYI: https://wp-kyoto.net/use-redux-in-gatsby-pj-with-typescript/
export const wrapWithProviderGatsbyBrowser: WrapWithProviderGatsbyBrowser = ({
  element,
}) => {
  // HACK: WrapWithProviderGatsbyBrowserを使用するため
  //        Type '{}' is missing the following properties from type 'Element': type, props, key
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return wrapWithProvider({ element });
};

// HACK: WrapWithProviderGatsbySsrを使用するため
//        Type '({ element, }: { element: any; }) => Element' is not assignable to type ...
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const wrapWithProviderGatsbySsr: WrapWithProviderGatsbySsr = ({
  // HACK: WrapWithProviderGatsbySsrを使用するため
  //        Binding element 'element' implicitly has an 'any' type
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  element,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return wrapWithProvider({ element });
};

type WrapWithProvider = (args: { element: JSX.Element }) => JSX.Element;

type WrapWithProviderGatsbyBrowser = NonNullable<
  GatsbyBrowser['wrapRootElement']
>;

type WrapWithProviderGatsbySsr = NonNullable<GatsbySSR['wrapRootElement']>;
