import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureTestStyleguideA11y: VFC<PureProps> = ({ a11yDir }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npm run start-server-and-test 'npm run start-storybook -- --ci' http://localhost:6006 'npx storybook-a11y-report --outDir ${a11yDir} --exit || ( echo 'error' ; rm -rf ${a11yDir} ; false &>/dev/null )' 2>/dev/null`
      )}
    </Text>
  </Box>
);

const TestStyleguideA11y: VFC<Props> = () => {
  return <PureTestStyleguideA11y a11yDir={'.storybook/__report__'} />;
};

export default TestStyleguideA11y;

export type PureProps = {
  a11yDir: string;
};

export type Props = Record<string, unknown>;
