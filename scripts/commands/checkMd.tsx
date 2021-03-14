import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCheckMd: VFC<PureProps> = ({ ignoreArgs, mdArgs }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `comm -23 <(git ls-files ${mdArgs} | sort) <(echo ${ignoreArgs} | tr ' ' '\n' | sort) | xargs npx textlint`
      )}
    </Text>
  </Box>
);

const CheckMd: VFC<Props> = () => {
  const mdFiles = [
    // 'README.md',
    // '.github/**/*.md',
    // 'docs/**/*.md',
    // 'content/**/*.md',
    "'*.md'",
  ];
  const ignoreFiles = ['CHANGELOG.md'];

  return (
    <PureCheckMd
      ignoreArgs={ignoreFiles.join(' ')}
      mdArgs={mdFiles.join(' ')}
    />
  );
};

export default CheckMd;

export type PureProps = {
  ignoreArgs: string;
  mdArgs: string;
};

export type Props = Record<string, unknown>;
