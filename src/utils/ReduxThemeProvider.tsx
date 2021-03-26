import React, { FC, useEffect } from 'react';

import { selectTheme, useSelector } from '../reducer/store';

const useThemeStore = () => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.dataset.theme = theme || 'default';
  }, [theme]);

  // HACK: for storybook
  useEffect(() => {
    if (process?.env?.NODE_ENV !== 'test') {
      return;
    }

    const storybookMain = document.querySelector<HTMLElement>('.sb-show-main');

    if (!storybookMain) {
      return;
    }

    storybookMain.dataset.theme = 'light';

    const storybookBody = document.querySelector<HTMLElement>(
      '.sb-show-main > #root > body'
    );

    if (!storybookBody) {
      return;
    }

    storybookBody.dataset.theme = theme || 'default';
  }, [theme]);
};

export const ReduxThemeProvider: FC = ({ children }) => {
  useThemeStore();

  return <>{children}</>;
};
