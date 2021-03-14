import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

// HACK: start-server-and-test の storybook server を1つにするため
export const PureTestStyleguide: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npm run start-server-and-test 'npm run start-storybook -- --ci' http://localhost:6006 'npx run-s test:styleguide:*:script --continue-on-error' 2>/dev/null`
      )}
    </Text>
  </Box>
);

const TestStyleguide: VFC<Props> = () => {
  return <PureTestStyleguide />;
};

export default TestStyleguide;

export type PureProps = Props;

export type Props = Record<string, unknown>;
