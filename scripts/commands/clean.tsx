import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureClean: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        "npx jest --clearCache && npx gatsby clean ; echo '`npm run develop && npm run copyStaticQueries` for jest(GraphQL)'"
      )}
    </Text>
  </Box>
);

const Clean: VFC<Props> = () => {
  return <PureClean />;
};

export default Clean;

export type PureProps = Props;

export type Props = Record<string, string>;
