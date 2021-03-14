import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureFixReleases: VFC<PureProps> = ({ releaseArgs }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npx prettier --write ${releaseArgs} && npx eslint ${releaseArgs} --fix`
      )}
    </Text>
  </Box>
);

const FixReleases: VFC<Props> = () => {
  const releaseFiles = [
    'package.json',
    // "CHANGELOG.md",
  ];

  return <PureFixReleases releaseArgs={releaseFiles.join(' ')} />;
};

export default FixReleases;

export type PureProps = {
  releaseArgs: string;
};

export type Props = Record<string, string>;
