import { Options } from 'semantic-release';

const config: Options = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'npx scripts fixReleases',
      },
    ],
    '@semantic-release/github',
    '@semantic-release/git',
  ],
  preset: 'conventionalcommits',
};

export default config;
