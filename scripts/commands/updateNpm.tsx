import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureUpdateNpm: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        "npm run ncu -- --upgrade ; echo '`npm run test:all` to check no regression'"
      )}
    </Text>
  </Box>
);

const UpdateNpm: VFC<Props> = () => {
  return <PureUpdateNpm />;
};

export default UpdateNpm;

export type PureProps = Props;

export type Props = Record<string, unknown>;
