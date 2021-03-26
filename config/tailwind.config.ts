import { mergeDeepRight } from 'ramda';
// FIXME: @types/tailwindcss
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import plugin from 'tailwindcss/plugin';
import theming from 'tailwindcss-theming';

import { colors } from './colors.config';

const tailwindConfig = {
  corePlugins: {
    preflight: false,
  },
  darkMode: false,
  plugins: [
    // NOTE: dark mode uses custom variables
    theming,
    // FIXME(@layer utilities): @layer utilities not working
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    plugin(
      ({
        addUtilities,
      }: {
        addUtilities: (utilities: Record<string, unknown>) => void;
      }) => {
        const utilities = {
          '.align-line-height-after': {
            content: "''",
            display: 'block',
            height: '0',
            marginBottom: 'calc((1 - var(--line-height-width)) * 0.5em)',
            width: '0',
          },
          '.align-line-height-before': {
            content: "''",
            display: 'block',
            height: '0',
            marginTop: 'calc((1 - var(--line-height-width)) * 0.5em)',
            width: '0',
          },
          '.align-line-height-md': {
            '--line-height-width': 'calc(1.414)',
            lineHeight: 'var(--line-height-width)',
          },
          '.align-line-height-sm': {
            '--line-height-width': 'calc(1 + 1 / 7)',
            lineHeight: 'var(--line-height-width)',
          },
        };

        addUtilities(utilities);
      }
    ),
  ],
  purge: {
    content: ['./src/**/*.tsx'],
    enabled: true,
    // NOTE: for tailwindcss-theming
    layers: ['components', 'utilities'],
  },
  theme: {
    extend: {
      colors: mergeDeepRight(
        {
          primary: colors.orange,
        },
        colors
      ),
      outline: {
        none: ['2px solid transparent', '0px'],
        // HACK: overflow auto で隠れてしまう要素でも outline を表示するため。
        primary: [`1px solid ${colors.orange.DEFAULT}`, '-1px'],
      },
    },
    fontFamily: {
      banner: [
        'Caveat',
        '"Helvetica Neue"',
        'Arial',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'Meiryo',
        'sans-serif',
      ],
      body: [
        '"Helvetica Neue"',
        'Arial',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'Meiryo',
        'sans-serif',
      ],
    },
    fontSize: {
      // HACK: base.css の line-height で固定するため。
      '2xl': ['1.5rem', { lineHeight: undefined }],
      '3xl': ['1.875rem', { lineHeight: undefined }],
      '4xl': ['2.25rem', { lineHeight: undefined }],
      '5xl': ['3rem', { lineHeight: undefined }],
      '6xl': ['3.75rem', { lineHeight: undefined }],
      '7xl': ['4.5rem', { lineHeight: undefined }],
      '8xl': ['6rem', { lineHeight: undefined }],
      '9xl': ['8rem', { lineHeight: undefined }],
      base: ['1rem', { lineHeight: undefined }],
      lg: ['1.125rem', { lineHeight: undefined }],
      sm: ['0.875rem', { lineHeight: undefined }],
      xl: ['1.25rem', { lineHeight: undefined }],
      xs: ['0.75rem', { lineHeight: undefined }],
    },
    opacity: {
      '0': '0',
      '100': '1',
      lg: '0.75',
      md: '0.45',
      sm: '0.2',
    },
    screens: {
      lg: '1024px',
      // NOTE: width of sm, which of iPhone 12 Pro Max is 428px
      md: '429px',
      xl: '1280px',
    },
  },
};

export default tailwindConfig;
