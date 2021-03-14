import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureUpdateE2e: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npm run start-server-and-test -- develop http://localhost:8000 "npx cypress run -e cypress-plugin-snapshots='{\\"updateSnapshots\\":true}'" 2>/dev/null`
      )}
    </Text>
  </Box>
);

const UpdateE2e: VFC<Props> = () => {
  return <PureUpdateE2e />;
};

export default UpdateE2e;

export type PureProps = Props;

export type Props = Record<string, unknown>;
