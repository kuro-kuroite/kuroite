import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

// NOTE: testStyleguideA11y.tsx と対応
// HACK: test:styleguide の run-s が npm-scripts のみ対応しているため
export const PureTestStyleguideA11yScript: VFC<PureProps> = ({ a11yDir }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npx storybook-a11y-report --outDir ${a11yDir} --exit || ( echo 'error' ; rm -rf ${a11yDir} ; false &>/dev/null )`
      )}
    </Text>
  </Box>
);

const TestStyleguideA11yScript: VFC<Props> = () => {
  return <PureTestStyleguideA11yScript a11yDir={'.storybook/__report__'} />;
};

export default TestStyleguideA11yScript;

export type PureProps = {
  a11yDir: string;
};

export type Props = Record<string, unknown>;
