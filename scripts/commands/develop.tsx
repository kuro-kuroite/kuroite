import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureDevelop: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>{exitCommandSync('npm run tcm && npx gatsby develop')}</Text>
  </Box>
);

const Develop: VFC<Props> = () => {
  return <PureDevelop />;
};

export default Develop;

export type PureProps = Props;

export type Props = Record<string, string>;
