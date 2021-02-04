#!/usr/bin/env zsh

set -e

# Ignoring Git Hooks When Rebasing
# FYI: https://github.com/commitizen/cz-cli/issues/669#issue-483707698

BRANCH_NAME=$(git branch | grep '*' | sed 's/* //')

# HACK: (no branch) || (HEAD detached at SHA) に対応するため
if [[ ${BRANCH_NAME: 0:1}${BRANCH_NAME: -1:1} = '()' ]]; then
  exit 0
fi

exec < /dev/tty && npx cz --hook || true
