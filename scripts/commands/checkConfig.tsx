import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckConfig: VFC<PureProps> = ({
  configArgs,
  ignoreArgs,
  ymlArgs,
}) => (
  <Box flexDirection="column">
    <Text>
      {/* FYI: https://peccu.hatenablog.com/entry/2019/08/31/000000 */}
      {exitCommandSync(
        `comm -23 <(git ls-files ${configArgs} | sort) <(echo ${ignoreArgs} | tr ' ' '\n' | sort) | xargs npx eslint --ignore-path ./.eslintignore ; EXIT_ESLINT=$? ; comm -23 <(git ls-files ${ymlArgs} | sort) <(echo ${ignoreArgs} | tr ' ' '\n' | sort) | xargs npx prettier --ignore-path ./.prettierignote --check ; EXIT_PRETTIER=$? ; exit $(( $EXIT_ESLINT+$EXIT_PRETTIER ))`
      )}
      {/* FIXME: use renovate-config-validator. (node-gyp python2 does not exist) */}
      {/* {exitCommandSync(
        `npx eslint ${configArgs} --ignore-path ./.eslintignore ; EXIT_ESLINT=$? ; npx prettier ${ymlArgs} --ignore-path ./.prettierignote --check ; EXIT_PRETTIER=$? ; npx --package renovate -c 'renovate-config-validator' ; EXIT_RENOVATE=$?; exit $(( $EXIT_ESLINT+$EXIT_PRETTIER+$EXIT_RENOVATE ))`
      )} */}
    </Text>
  </Box>
);

const CheckConfig: VFC<Props> = () => {
  const configJsonFiles = [
    // '**/.*.json',
    // '**/*.json',
    "'*.json'",
  ];
  const configTsFiles = [
    // '**/.*.js',
    // '**/*.config.js',
    // '**/*.js',
    // '**/.*.ts',
    // '**/*.ts',
    // '**/*.tsx',
    "'*.js'",
    "'*.ts'",
    "'*.tsx'",
  ];
  const ignoreFiles = [
    'src/**/*.tsx',
    'src/{locales,utils,reducer}/**/*.ts',
    'src/**/*.css.d.ts',
    'typings/**/*.d.ts',
  ];
  const configFiles = [...configJsonFiles, ...configTsFiles];
  const configYmlFiles = [
    // '.github/**/*.yml',
    // HACK: https://stackoverflow.com/a/33221895
    "'*.yml'",
  ];

  return (
    <PureCheckConfig
      configArgs={configFiles.join(' ')}
      ignoreArgs={ignoreFiles.join(' ')}
      ymlArgs={configYmlFiles.join(' ')}
    />
  );
};

export default CheckConfig;

export type PureProps = {
  configArgs: string;
  ignoreArgs: string;
  ymlArgs: string;
};

export type Props = Record<string, unknown>;
