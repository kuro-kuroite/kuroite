import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckCommit: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `BASE_BRANCH=$(git show-branch | grep '*[^[]\\+\\[' | grep -vF "$(git rev-parse --abbrev-ref HEAD)" | head -1 | awk -F'[]~^[]' '{print $2}') ; echo $BASE_BRANCH^ ; BASE_BRANCH=main ; npx commitlint --from $BASE_BRANCH^`
      )}
    </Text>
  </Box>
);

const CheckCommit: VFC<Props> = () => {
  return <PureCheckCommit />;
};

export default CheckCommit;

export type PureProps = Props;

export type Props = Record<string, unknown>;
