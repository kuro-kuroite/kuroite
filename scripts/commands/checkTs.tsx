import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckTs: VFC<PureProps> = ({ tsArgs }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(`npx eslint ${tsArgs} --ignore-path ./.eslintignore`)}
    </Text>
  </Box>
);

const CheckTs: VFC<Props> = () => {
  const tsFiles = ['src/**/*.tsx', 'src/{locales,utils,reducer}/**/*.ts'];

  return <PureCheckTs tsArgs={tsFiles.join(' ')} />;
};

export default CheckTs;

export type PureProps = {
  tsArgs: string;
};

export type Props = Record<string, unknown>;
