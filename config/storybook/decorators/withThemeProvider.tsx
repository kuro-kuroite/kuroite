import { DecoratorFn } from '@storybook/react';
import { Case } from 'lifts';
import React, { FC } from 'react';

import { useDispatch } from '../../../src/reducer/store';
import { setTheme } from '../../../src/reducer/theme/themeSlice';

const ThemeBlock: FC = ({ children }) => {
  return <>{children}</>;
};

const ThemeStack: FC = ({ children }) => {
  return (
    <div
      style={{
        minHeight: 'calc(50vh - 15px)',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
};

const Dark: FC = ({ children }) => {
  const dispatch = useDispatch();

  dispatch(setTheme('dark'));

  return <body>{children}</body>;
};

const Light: FC = ({ children }) => {
  const dispatch = useDispatch();

  dispatch(setTheme('light'));

  return <body>{children}</body>;
};
const SideBySide: FC = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <body
      data-theme="light"
      style={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ThemeBlock>{children}</ThemeBlock>
    </body>
    <body
      data-theme="dark"
      style={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ThemeBlock>{children}</ThemeBlock>
    </body>
  </div>
);
const Stacked: FC = ({ children }) => (
  <>
    <body data-theme="light">
      <ThemeStack>{children}</ThemeStack>
    </body>
    <body data-theme="dark">
      <ThemeStack>{children}</ThemeStack>
    </body>
  </>
);

export const withThemeProvider: DecoratorFn = (Story, context) => {
  return Case(context.globals.theme as Theme)(
    {
      // NOTE: Case式のvalueが無名関数であるため
      // eslint-disable-next-line react/display-name
      dark: () => (
        <Dark>
          <Story {...context} />
        </Dark>
      ),
      // eslint-disable-next-line react/display-name
      light: () => (
        <Light>
          <Story {...context} />
        </Light>
      ),
      // eslint-disable-next-line react/display-name
      'side-by-side': () => (
        <SideBySide>
          <Story {...context} />
        </SideBySide>
      ),
      // eslint-disable-next-line react/display-name
      stacked: () => (
        <Stacked>
          <Story {...context} />
        </Stacked>
      ),
    },
    <></>
  );
};

type Theme = 'side-by-side' | 'stacked' | 'dark' | 'light';
