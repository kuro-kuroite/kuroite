import { Linter } from 'eslint';
import { mergeDeepRight } from 'ramda';

const defaultConfig: Linter.Config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
    'prettier/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'json-format',
    'sort-keys-fix',
    'sort-destructure-keys',
    'simple-import-sort',
    // HACK: prettier-vscode と prettier cli の結果が異なるため、eslint-plugin-prettier のルールを使用
    'prettier',
  ],
  root: true,
  rules: {
    // FYI: https://jp.mathworks.com/discovery/cyclomatic-complexity.html
    complexity: ['error', { max: 10 }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    // NOTE: 空行を入れるため
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: ['const', 'let'], prev: '*' },
      { blankLine: 'never', next: ['const', 'let'], prev: ['const', 'let'] },
      { blankLine: 'always', next: 'export', prev: '*' },
      { blankLine: 'always', next: 'block-like', prev: '*' },
      { blankLine: 'always', next: 'iife', prev: '*' },
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: 'if', prev: '*' },
    ],
    // FYI: https://kimuson.dev/blog/vscode/eslint_stylelint_prettier_vscode_onsave/
    // FYI: https://knote.dev/post/2020-08-29/duprecated-eslint-plugin-prettier/
    // FYI: https://qiita.com/arx8/items/d8262230f30404dba3ff
    // FYI: https://zuma-lab.com/posts/eslint-prettier-settings
    // HACK: prettier-vscode と prettier cli の結果が異なるため、eslint-plugin-prettier のルールを使用
    'prettier/prettier': 'error',
    // FYI: https://github.com/lydell/eslint-plugin-simple-import-sort#example-configuration
    'simple-import-sort/exports': ['error'],
    'simple-import-sort/imports': ['error'],
    // FYI: https://github.com/mthadley/eslint-plugin-sort-destructure-keys#rule-options
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      { caseSensitive: false },
    ],
    // FYI: https://github.com/leo-buneev/eslint-plugin-sort-keys-fix#rule-configuration
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: false, natural: true },
    ],
    'sort-vars': ['error', { ignoreCase: true }],
  },
  settings: {
    // FYI: https://www.npmjs.com/package/eslint-plugin-json-format#settings-examples
    'json/json-with-comments-files': [],
  },
};
// NOTE: for src/*.ts(x)?
const overrideConfig: Linter.ConfigOverride = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // TODO: コメントアウト可能? https://qiita.com/madono/items/a134e904e891c5cb1d20#%E5%9E%8B%E6%83%85%E5%A0%B1%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AA%E3%83%AB%E3%83%BC%E3%83%AB%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E6%B3%A8%E6%84%8F
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // NOTE: react-app/recommended の指定のみで，{react,react-hooks,jsx-11y}/recommended を期待していたが，
    //        react-app/{plugin name}/xx-rule で指定できるだけであったのでコメントアウト
    // 'plugin:react-app/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
    // TODO: eslint-config-prettier が v8 になったら、'prettier' 以外を削除
    'prettier',
    'prettier/prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  files: ['*.ts', '*.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    // HACK: prettier-vscode と prettier cli の結果が異なるため、eslint-plugin-prettier のルールを使用
    'prettier',
  ],
  rules: {
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    // NOTE: VFC<Props> で型検査できるため
    'react/prop-types': 'off',
  },
  // NOTE: Warning: React version not specified in eslint-plugin-react settings.
  // https://github.com/yannickcr/eslint-plugin-react#configuration
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export default mergeDeepRight(defaultConfig, {
  overrides: [overrideConfig],
} as Linter.Config) as Linter.Config;
