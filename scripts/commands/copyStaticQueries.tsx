import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCopyStaticQueries: VFC<PureProps> = () => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        "cp -r ./public/page-data/sq/d ./public/static || ( echo '`npm run develop` to create ./public/page-data/sq/d' && exit 1 )"
      )}
    </Text>
  </Box>
);

const CopyStaticQueries: VFC<Props> = () => {
  return <PureCopyStaticQueries />;
};

export default CopyStaticQueries;

export type PureProps = Props;

export type Props = Record<string, string>;
