import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';
import { PureProps as PureTestStyleguideVisualProps } from './testStyleguideVisual';

export const PureUpdateStyleguide: VFC<PureProps> = ({ regDir }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `rm -rf ${regDir} ; mkdir -p ${regDir}/actual ${regDir}/expected ${regDir}/diff ; npm run start-server-and-test -- 'npm run start-storybook -- --ci' http://localhost:6006 'npm run storycap -- -o ${regDir}/actual && npx reg-cli ${regDir}/actual ${regDir}/expected ${regDir}/diff -R ${regDir}/report.html -J ${regDir}/reg.json --update'`
      )}
    </Text>
  </Box>
);

const UpdateStyleguide: VFC<Props> = () => {
  return <PureUpdateStyleguide regDir={'.reg/storybook'} />;
};

export default UpdateStyleguide;

export type PureProps = PureTestStyleguideVisualProps;

export type Props = Record<string, unknown>;
