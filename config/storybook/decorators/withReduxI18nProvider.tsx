import { DecoratorFn } from '@storybook/react';
import React, { FC } from 'react';

import { LangType, setLang } from '../../../src/reducer/lang/langSlice';
import { useDispatch } from '../../../src/reducer/store';

const ReduxI18nWithLocale: FC<{ locale: LangType }> = ({
  children,
  locale,
}) => {
  const dispatch = useDispatch();

  dispatch(setLang(locale));

  return <div>{children}</div>;
};

export const withReduxI18nProvider: DecoratorFn = (Story, context) => {
  return (
    <ReduxI18nWithLocale locale={context.globals.locale as LangType}>
      <Story {...context} />
    </ReduxI18nWithLocale>
  );
};
