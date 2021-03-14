import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureTestE2e: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npm run start-server-and-test -- develop http://localhost:8000 'npx cypress run' 2>/dev/null`
      )}
    </Text>
  </Box>
);

const TestE2e: VFC<Props> = () => {
  return <PureTestE2e />;
};

export default TestE2e;

export type PureProps = Props;

export type Props = Record<string, unknown>;
