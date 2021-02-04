import { Linter } from 'eslint';
import { mergeDeepRight } from 'ramda';

import config from '../.eslintrc';

// HACK: use as
const overrideConfig: Linter.ConfigOverride =
  config.overrides?.[0] || ({} as Linter.ConfigOverride);
// HACK: use as
const cypressConfig: Linter.ConfigOverride = mergeDeepRight(overrideConfig, {
  env: {
    'cypress/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
    'prettier/prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  files: ['*.spec.ts', '*.test.ts', '*.spec.tsx', '*.test.tsx'],
  parserOptions: {
    // HACK: for __dirname
    tsconfigRootDir: __dirname,
  },
} as Linter.ConfigOverride) as Linter.ConfigOverride;

export default mergeDeepRight(config, {
  overrides: [overrideConfig, cypressConfig],
});
