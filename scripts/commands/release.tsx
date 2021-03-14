import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureRelease: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>{exitCommandSync('npx semantic-release')}</Text>
  </Box>
);

const Release: VFC<Props> = () => {
  return <PureRelease />;
};

export default Release;

export type PureProps = Props;

export type Props = Record<string, string>;
