import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverageFrom: ['src/{components,features,reducer}/**/*.ts?(x)'],
  coveragePathIgnorePatterns: [
    'src/(components|features|reducer)/(.*(assets/)[\\w/]+.tsx|[\\w/]+(.stories|.module.css.d).ts(x)?)',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/__mocks__/file-mock.js',
    '^@src/(.+)': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/.jest/loader-shim.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-test-env.js'],
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.tsx?$': '<rootDir>/.jest/jest-preprocess.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
};

export default config;
