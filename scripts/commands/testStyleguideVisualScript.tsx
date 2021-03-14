import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

// NOTE: testStyleguideVisual.tsx と対応
// HACK: test:styleguide の run-s が npm-scripts のみ対応しているため
export const PureTestStyleguideVisualScript: VFC<PureProps> = ({ regDir }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `rm -rf ${regDir}/actual ${regDir}/diff ; mkdir -p ${regDir}/actual ${regDir}/expected ${regDir}/diff ; npm run storycap -- -o ${regDir}/actual && npx reg-cli ${regDir}/actual ${regDir}/expected ${regDir}/diff -R ${regDir}/report.html -J ${regDir}/reg.json --matchingThreshold 0.01 --thresholdRate 0.001 --extendedErrors`
      )}
    </Text>
  </Box>
);

const TestStyleguideVisualScript: VFC<Props> = () => {
  return <PureTestStyleguideVisualScript regDir={'.reg/storybook'} />;
};

export default TestStyleguideVisualScript;

export type PureProps = {
  regDir: string;
};

export type Props = Record<string, unknown>;
