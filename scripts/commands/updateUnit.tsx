import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureUpdateUnit: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>{exitCommandSync(`npx jest --updateSnapshot`)}</Text>
  </Box>
);

const UpdateUnit: VFC<Props> = () => {
  return <PureUpdateUnit />;
};

export default UpdateUnit;

export type PureProps = Props;

export type Props = Record<string, unknown>;
