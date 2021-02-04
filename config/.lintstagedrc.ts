// HACK: for cyperss/**/*.spec.ts (to prevent `Cannot find name 'cy'.`) */
const cypressSpecTs = [
  'npx prettier --write',
  // HACK: 複数のエラーを一度に解消できないため
  'npx eslint --fix',
  'npx eslint --fix',
  'npx eslint',
  // HACK: https://stackoverflow.com/a/60950355
  'zsh ./scripts/src/sh/tsc-cypress.lint.sh',
];
const eslintTs = [
  'npx prettier --write',
  // HACK: 複数のエラーを一度に解消できないため
  'npx eslint --fix',
  'npx eslint --fix',
  'npx eslint',
  // HACK: https://stackoverflow.com/a/60950355
  'zsh ./scripts/src/sh/tsc.lint.sh',
];
const stylelint = [
  'npx prettier --write',
  'npx stylelint --fix',
  'npx stylelint',
];
const textlint = [
  'npx prettier --write',
  // HACK: 複数のエラーを一度に解消できないため
  'npx textlint --fix',
  'npx textlint --fix',
  'npx textlint --fix',
  'npx textlint --fix',
  'npx textlint',
];
const eslint = ['npx prettier --write', 'npx eslint --fix', 'npx eslint'];
const prettier = ['npx prettier --write'];
/* eslint-disable sort-keys-fix/sort-keys-fix */
const config: Config = {
  'cypress/**/*.spec.{ts,tsx}': cypressSpecTs,
  // FIXME: *.spec.ts と *.ts の区別をして、tsc.lint.sh の error TS2304 をなくす
  //        ex) '{.*,*}.{ts,tsx},!cypress/**/*.spec.{ts,tsx}'
  // FYI: https://github.com/okonet/lint-staged/issues/123#issuecomment-315179381
  '{.*,*}.{ts,tsx}': eslintTs,
  '*.css': stylelint,
  '*.md': textlint,
  '{.*,*}.{js,json}': eslint,
  '*.yml': prettier,
};
/* eslint-enable sort-keys-fix/sort-keys-fix */

type Config = {
  [file in string]: Command[];
};

type Command = string;

export default config;
