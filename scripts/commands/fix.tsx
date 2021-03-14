import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';
import { PureProps as PureCheckConfigProps } from './checkConfig';
import { PureProps as PureCheckCssProps } from './checkCss';
import { PureProps as PureCheckMdProps } from './checkMd';
import { PureProps as PureCheckTsProps } from './checkTs';

export const PureFix: VFC<PureProps> = ({
  configArgs,
  cssArgs,
  mdArgs,
  tsArgs,
  ymlArgs,
}) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npx prettier ${`${configArgs} ${ymlArgs} ${cssArgs} ${mdArgs} ${tsArgs}`} --ignore-path ./.prettierignote --ignore-unknown --write ; npx eslint ${configArgs} --ignore-path ./.eslintignore --no-error-on-unmatched-pattern --fix ; npx stylelint ${cssArgs} --ignore-path ./.stylelintignore --fix ; npx textlint ${mdArgs} --fix ; npx textlint ${mdArgs} --fix ; npx textlint ${mdArgs} --fix ; npx textlint ${mdArgs} --fix ; npx eslint ${tsArgs} --ignore-path ./.eslintignore --fix`
      )}
    </Text>
  </Box>
);

const Fix: VFC<Props> = () => {
  // NOTE: checkConfig.tsx に対応
  const cssFiles = ['src/**/*.css'];
  // NOTE: checkConfig.tsx に対応
  const configJsonFiles = [
    '.*.json',
    '*.json',
    '.github/*.json',
    '.storybook/tsconfig.json',
    '.vscode/*.json',
    'cypress/tsconfig.json',
    'src/tsconfig.json',
    'scripts/package.json',
    'scripts/tsconfig.json',
  ];
  const configTsFiles = [
    '.*.js',
    '*.config.js',
    '*.js',
    'config/**/*.ts',
    '.jest/**/*.js',
    '.storybook/.*.js',
    '.storybook/*.ts',
    '.storybook/*.js',
    'cypress/.*.js',
    'cypress/plugins/*.ts',
    'cypress/support/*.ts',
    'hygen/**/*.ts',
    'hygen/**/*.js',
    'scripts/commands/**/*.tsx',
    'scripts/src/**/*.ts',
    'scripts/src/**/*.js',
  ];
  const configFiles = [...configJsonFiles, ...configTsFiles];
  const configYmlFiles = ['.github/**/*.yml'];
  // NOTE: checkMd.tsx に対応
  const mdFiles = [
    'README.md',
    '.github/**/*.md',
    'docs/**/*.md',
    'content/**/*.md',
  ];
  // NOTE: checkTs.tsx に対応
  const tsFiles = ['src/**/*.tsx', 'src/{locales,utils,reducer}/**/*.ts'];

  return (
    <PureFix
      configArgs={configFiles.join(' ')}
      cssArgs={cssFiles.join(' ')}
      ignoreArgs={''}
      mdArgs={mdFiles.join(' ')}
      tsArgs={tsFiles.join(' ')}
      ymlArgs={configYmlFiles.join(' ')}
    />
  );
};

export default Fix;

export type PureProps = Omit<
  PureCheckCssProps &
    PureCheckConfigProps &
    PureCheckMdProps &
    PureCheckTsProps,
  ''
>;

export type Props = Record<string, unknown>;
