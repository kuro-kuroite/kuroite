import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import path from 'path';

initStoryshots({
  configPath: path.join(__dirname, '..', '.storybook'),
  framework: 'react',
  test: multiSnapshotWithOptions({}),
});
