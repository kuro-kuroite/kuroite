const config: Config = {
  filters: {
    comments: true,
  },
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  rules: {
    'period-in-list-item': {
      allowOrderedList: true,
      periodMark: '',
      forceAppendPeriod: true,
    },
    'write-good': true,
    'abbr-within-parentheses': true,
    'en-capitalization': {
      // NOTE: 見出しがセンテンスケースであるため
      allowHeading: false,
    },
    // NOTE: 見出しをタイトルケースにするため
    'title-case': true,
    // NOTE: 英語の基礎単語のため
    spelling: {
      language: 'en',
      wordDefinitionRegexp: "/[\\w']+/g",
      suggestCorrections: true,
    },
    diacritics: true,
    apostrophe: true,
    // NOTE: 日本語の技術用語のため
    // 'spellcheck-tech-word': true,
    // NOTE: 英語の技術用語のため
    terminology: {
      defaultTerms: true,
      skip: ['Blockquote'],
    },
    'no-dead-link': {
      ignore: ['https://amzn.to/'],
    },
    'footnote-order': true,
    // NOTE: よく使用するライブラリ名などをチェックするため
    prh: {
      checkCodeComment: ['js', 'javascript'],
      rulePaths: [
        './config/textlint/prh/common.yml',
        './config/textlint/prh/en.yml',
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
