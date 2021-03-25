const config: Config = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  plugins: {
    // FIXME: TypeError: Invalid PostCSS Plugin found at: plugins[0]
    tailwindcss: {},
    'postcss-preset-env': {
      features: {
        // 'color-mod-function': true,
        // 'custom-media-queries': true,
        // FYI: https://caniuse.com/?search=focus-visible
        // 'focus-visible-pseudo-class': {
        //   // HACK: for CSS Modules
        //   replaceWith: ':global(.focus-visible)',
        // },
        'nesting-rules': true,
      },
    },
    // 'postcss-combine-media-query': {},
    'postcss-scrollbar': {},
    // NOTE: for storybook-addon-pseudo-states-react
    'postcss-pseudo-classes': {},
    // 'flex-gap-polyfill': {},
  },
  /* eslint-enable sort-keys-fix/sort-keys-fix */
};

type Config = {
  plugins: Record<string, unknown>;
};

export default config;
