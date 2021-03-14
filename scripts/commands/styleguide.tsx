import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureStyleguide: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync('npm run copyStaticQueries && npm run start-storybook')}
    </Text>
  </Box>
);

const Styleguide: VFC<Props> = () => {
  return <PureStyleguide />;
};

export default Styleguide;

export type PureProps = Props;

export type Props = Record<string, string>;
