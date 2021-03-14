import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureDeploy: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>{exitCommandSync(`npx netlify deploy --prod --dir=./public`)}</Text>
  </Box>
);

const Deploy: VFC<Props> = () => {
  return <PureDeploy />;
};

export default Deploy;

export type PureProps = Props;

export type Props = Record<string, string>;
