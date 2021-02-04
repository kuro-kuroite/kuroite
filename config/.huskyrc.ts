const config: Config = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'post-commit': 'git update-index --again',
    'pre-commit': 'lint-staged',
    'prepare-commit-msg': 'zsh ./config/husky/prepare-commit-msg.sh',
  },
};

// TODO: make Config
type Config = Partial<{
  hooks: {
    [hook in string]: Command;
  };
}>;

type Command = string;

export default config;
