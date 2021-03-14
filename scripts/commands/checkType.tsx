import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckType: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        'tsc -p . --noEmit ; EXIT_TSC=$? ; tsc -p ./scripts/ --noEmit ; EXIT_TSC_SCRIPT=$? ; exit $(( $EXIT_TSC+$EXIT_TSC_SCRIPT ))'
      )}
    </Text>
  </Box>
);

const CheckType: VFC<Props> = () => {
  return <PureCheckType />;
};

export default CheckType;

export type PureProps = Props;

export type Props = Record<string, string>;
