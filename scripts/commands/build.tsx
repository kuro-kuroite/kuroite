import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureBuild: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>{exitCommandSync('npm run prepare && npx gatsby build')}</Text>
  </Box>
);

const Build: VFC<Props> = () => {
  return <PureBuild />;
};

export default Build;

export type PureProps = Props;

export type Props = Record<string, string>;
