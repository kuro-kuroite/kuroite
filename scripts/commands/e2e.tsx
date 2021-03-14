import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureE2e: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        "npm run start-server-and-test -- develop http://localhost:8000 'npx cypress open'"
      )}
    </Text>
  </Box>
);

const E2e: VFC<Props> = () => {
  return <PureE2e />;
};

export default E2e;

export type PureProps = Props;

export type Props = Record<string, string>;
