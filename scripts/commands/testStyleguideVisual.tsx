import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureTestStyleguideVisual: VFC<PureProps> = ({ regDir }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `rm -rf ${regDir}/actual ${regDir}/diff ; mkdir -p ${regDir}/actual ${regDir}/expected ${regDir}/diff ; npm run start-server-and-test 'npm run start-storybook -- --ci' http://localhost:6006 'npm run storycap -- -o ${regDir}/actual && npx reg-cli ${regDir}/actual ${regDir}/expected ${regDir}/diff -R ${regDir}/report.html -J ${regDir}/reg.json --matchingThreshold 0.01 --thresholdRate 0.001 --extendedErrors'`
      )}
    </Text>
  </Box>
);

const TestStyleguideVisual: VFC<Props> = () => {
  return <PureTestStyleguideVisual regDir={'.reg/storybook'} />;
};

export default TestStyleguideVisual;

export type PureProps = {
  regDir: string;
};

export type Props = Record<string, unknown>;
