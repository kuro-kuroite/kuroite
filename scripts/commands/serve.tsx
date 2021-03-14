import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureServe: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>{exitCommandSync('npx gatsby serve')}</Text>
  </Box>
);

const Serve: VFC<Props> = () => {
  return <PureServe />;
};

export default Serve;

export type PureProps = Props;

export type Props = Record<string, string>;
