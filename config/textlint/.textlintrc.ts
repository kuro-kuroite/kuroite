const config: Config = {
  filters: {
    comments: true,
  },
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  rules: {
    'preset-ja-spacing': {
      // FYI: https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/tree/master/packages/textlint-rule-ja-space-between-half-and-full-width
      // NOTE: 半角もじと全角文字の間にスペースを入れる場合、コメントを外す
      'ja-space-between-half-and-full-width': {
        space: 'always',
      },
    },
    'preset-ja-technical-writing': {
      'ja-no-mixed-period': {
        periodMark: '。',
        forceAppendPeriod: true,
      },
    },
    'period-in-list-item': {
      allowOrderedList: true,
      periodMark: '',
      forceAppendPeriod: true,
    },
    'write-good': true,
    'abbr-within-parentheses': true,
    // NOTE: 日本語の場合、A, Theを使用できないため、技術用語が先頭となる
    // 'en-capitalization': {
    //   // NOTE: 見出しがセンテンスケースであるため
    //   allowHeading: false,
    //   // allowLists: false,
    // },
    // // NOTE: 見出しをタイトルケースにするため
    // 'title-case': true,
    // NOTE: 英語の基礎単語のため
    spelling: {
      language: 'en',
      wordDefinitionRegexp: "/[\\w']+/g",
      suggestCorrections: true,
    },
    diacritics: true,
    apostrophe: true,
    // NOTE: 日本語の技術用語のため
    'spellcheck-tech-word': true,
    // NOTE: 英語の技術用語のため
    terminology: {
      defaultTerms: true,
      skip: ['Blockquote'],
    },
    // FIXME: Mac の Wi-Fi 接続切れを起こすため、コメントアウト
    // 'no-dead-link': {
    //   ignore: ['https://amzn.to/**'],
    // },
    'footnote-order': true,
    // NOTE: よく使用するライブラリ名などをチェックするため
    prh: {
      checkCodeComment: ['js', 'javascript'],
      rulePaths: [
        './config/textlint/prh/common.yml',
        './config/textlint/prh/ja.yml',
        './config/textlint/prh/npm.yml',
      ],
    },
  },
  /* eslint-enable sort-keys-fix/sort-keys-fix */
};

type Config = Partial<{
  filters: Rules;
  rules: Rules;
}>;

type Rules = PresetRule | PluginRule;

type PresetRule = {
  [name in string]: boolean | PluginRule | Rule;
};

type PluginRule = {
  [name in string]: boolean | Rule;
};

type Rule = {
  [rule in string]: Value;
};

type Value = boolean | string | string[] | Severity | null | [] | number;

type Severity = {
  severity: 'error' | 'warning';
};

export default config;
