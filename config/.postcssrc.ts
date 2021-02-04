const config: Config = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      features: {
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
    // 'flex-gap-polyfill': {},
  },
  /* eslint-enable sort-keys-fix/sort-keys-fix */
};

type Config = {
  plugins: Record<string, unknown>;
};

export default config;
