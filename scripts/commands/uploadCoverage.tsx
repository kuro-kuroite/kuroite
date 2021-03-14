import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureUploadCoverage: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>{exitCommandSync(`npx codecov`)}</Text>
  </Box>
);

const UploadCoverage: VFC<Props> = () => {
  return <PureUploadCoverage />;
};

export default UploadCoverage;

export type PureProps = Props;

export type Props = Record<string, unknown>;
