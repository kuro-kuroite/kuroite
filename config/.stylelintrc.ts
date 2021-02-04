import { Configuration } from 'stylelint';

const config: Partial<Configuration> = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: [
    // HACK: prettier-vscode と prettier cli の結果が異なるため、stylelint-prettier のルールを使用
    'stylelint-prettier',
  ],
  rules: {
    // https://andrich.me/vscode-stylelint-tailwind-css-are-love
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    // --, custom property or kebab-case
    'custom-property-pattern': '^((--)??|(--)??([a-z][a-z0-9]*)(-[a-z0-9]+)*)$',
    // HACK: prettier-vscode と prettier cli の結果が異なるため、stylelint-prettier のルールを使用
    'prettier/prettier': true,
    // (Upper/lower)CamelCase
    'selector-class-pattern': '^[a-zA-Z][a-zA-Z0-9]+$',
    'selector-nested-pattern': '^&',
    // FIXME: stylelint-css-modules
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    // FIXME: for composes of CSS Modules
    // FIXME: stylelint-css-modules
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['composes'],
      },
    ],
    // 'declaration-block-trailing-semicolon': null,
    // 'no-descending-specificity': null,
  },
};

export default config;
