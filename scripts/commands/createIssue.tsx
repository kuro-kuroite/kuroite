import { Box, Text } from 'ink';
import React, { VFC } from 'react';

import { exitCommandSync } from '../src/utils/command';

export const PureCreateIssue: VFC<PureProps> = ({ commit, workflow }) => (
  <Box flexDirection="column">
    <Text>
      {exitCommandSync(
        `cp .github/createIssue.md /tmp ; sed -i -e "s/#workflow/${workflow}/g" -e "s/#commit/${commit}/g" /tmp/createIssue.md ; cat /etc/os-release | grep ^ID= | sed -E 's/ID=//g' | xargs -I {} echo '- OS: '{} >> /tmp/createIssue.md ; cat /etc/os-release | grep ^VERSION_ID= | sed -E 's/VERSION_ID=//g; s/\\"//g' | xargs -I {} echo '- OS version: '{} >> /tmp/createIssue.md ; node -v | xargs -I {} echo '- Node.js version: '{} >> /tmp/createIssue.md ; npm -v | xargs -I {} echo '- npm version: '{} >> /tmp/createIssue.md ; echo '' >> /tmp/createIssue.md ; hub issue create -f /tmp/createIssue.md -l bug build-bot`
      )}
    </Text>
  </Box>
);

const CreateIssue: VFC<Props> = ({ commit, workflow }) => {
  return <PureCreateIssue commit={commit} workflow={workflow} />;
};

export default CreateIssue;

export type PureProps = Props;

export type Props = {
  commit: string;
  workflow: string;
};
