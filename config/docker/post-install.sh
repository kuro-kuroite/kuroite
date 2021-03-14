#!/usr/bin/env zsh

set -e

# HACK: export environments from .env.local
eval "$(cat /tmp/.env.local <(echo) <(declare -x))"

# git

git config --global user.email $GITHUB_EMAIL
git config --global user.name $GITHUB_NAME

git config --global init.defaultBranch main
git config --global core.ignorecase false

## vim

brew install vim
