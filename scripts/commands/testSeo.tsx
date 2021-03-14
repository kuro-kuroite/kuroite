import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureTestSeo: VFC<PureProps> = ({ slug }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `npm run start-server-and-test -- 'npm run build && npm run serve' 'http://localhost:9000/${slug}' 'npx lighthouse-ci http://localhost:9000/${slug} --performance=95 --accessibility=98 --best-practices=98 --seo=98 --pwa=98' 2>/dev/null`
      )}
    </Text>
  </Box>
);

const TestSeo: VFC<Props> = ({ slug = '' }) => {
  return <PureTestSeo slug={slug} />;
};

export default TestSeo;

export type PureProps = Props;

export type Props = {
  slug: string;
};
