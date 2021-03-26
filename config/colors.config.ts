// TODO: 型付け(@types/tailwindcss)

// TODO: theme.config.ts で Partialのundefinedを取り除く
export const colors = {
  black: {
    '100': '#595959', // hsl(0, 0%, 35%)
    '200': '#404040', // hsl(0, 0%, 25%)
    '400': '#383838', // hsl(0, 0%, 22%)
    '600': '#2e2e2e', // hsl(0, 0%, 18%)
    '800': '#262626', // hsl(0, 0%, 15%)
    '900': '#0d0d0d', // hsl(0, 0%, 5%)
    DEFAULT: '#333333', // hsl(0, 0%, 20%)
  },
  blue: {
    DEFAULT: '#0a27ff',
    // DEFAULT: '#00558f',
  },

  current: {
    DEFAULT: 'currentColor',
  },

  // FYI: https://gka.github.io/palettes/#/11|s|333333,f4f5f7|ffffe0,ff005e,93003a|1|1
  gray: {
    '100': '#444444',
    '200': '#555556',
    '300': '#676868',
    '400': '#7a7a7b',
    '600': '#a1a1a3',
    '700': '#b5b6b7',
    '800': '#cacacc',
    '900': '#dfe0e1',
    DEFAULT: '#8d8e8f',
  },

  green: {
    DEFAULT: '#45cb85',
  },

  // https://coolors.co/f7692b-6a7fdb-57e2e5-45cb85-153131
  orange: {
    '100': '#fa9d75', // hsl(18, 93%, 72%)
    '200': '#f87a44', // hsl(18, 93%, 62%)
    '400': '#f87035', // hsl(18, 93%, 59%)
    '600': '#f76222', // hsl(18, 93%, 55%)
    '800': '#f65713', // hsl(18, 93%, 52%)
    '900': '#cf4307', // hsl(18, 93%, 42%)
    DEFAULT: '#f7692b', // hsl(18, 93%, 57%)
  },
  purple: {
    DEFAULT: '#6a7fdb',
  },
  transparent: {
    DEFAULT: 'transparent',
  },
  turquoise: {
    DEFAULT: '#57e2e5',
  },
  white: {
    '100': '#fff', // hsl(220, 16%, 100%)
    '400': '#f9fafb', // hsl(220, 16%, 98%)
    '600': '#edeff2', // hsl(220, 16%, 94%)
    '800': '#e4e7ec', // hsl(220, 16%, 91%)
    '900': '#c7ccd6', // hsl(220, 16%, 81%)
    DEFAULT: '#f4f5f7', // hsl(220, 16%, 96%)
  },
};
