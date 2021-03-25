import { StorybookConfig } from '@storybook/react/types';
import postcss from 'postcss';

import postcssConfig from './.postcssrc';

const storybookConfig: StorybookConfig = {
  addons: [
    // NOTE: for PostCSS v8
    // FYI: https://github.com/storybookjs/storybook/discussions/13971
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          // NOTE: CSS Modules を使用するため
          modules: {
            localIdentName: '[path][name]__[local]',
            mode: 'local',
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        postcssLoaderOptions: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          implementation: postcss,
          postcssOptions: {
            ...postcssConfig,
          },
        },
      },
    },
    // '@storybook/addon-postcss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states-react',
    'storycap',
  ],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};

export default storybookConfig;
