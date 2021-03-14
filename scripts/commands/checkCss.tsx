import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckCss: VFC<PureProps> = ({ cssArgs, ignoreArgs }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `comm -23 <(git ls-files ${cssArgs} | sort) <(echo ${ignoreArgs} | tr ' ' '\n' | sort) | xargs npx stylelint --ignore-path ./.stylelintignore`
      )}
    </Text>
  </Box>
);

const CheckCss: VFC<Props> = () => {
  const cssFiles = [
    // 'src/**/*.css',
    "'*.css'",
  ];
  const ignoreFiles = [''];

  return (
    <PureCheckCss
      cssArgs={cssFiles.join(' ')}
      ignoreArgs={ignoreFiles.join(' ')}
    />
  );
};

export default CheckCss;

export type PureProps = {
  cssArgs: string;
  ignoreArgs: string;
};

export type Props = Record<string, unknown>;
