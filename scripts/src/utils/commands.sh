#!/usr/bin/env zsh

set -e

# usage:
#         zsh ./scripts/src/utils/commands.sh "echo 1" "echo 2" "echo 3"

# FYI: https://qiita.com/kasei-san/items/aba04aee9b690e89aa7a
# pids=()
# commands=("$@")

# for command in ${commands}; do
#   ${command} &
#   pids+=($!)
# done

# for pid in ${pids[@]}; do
#   wait $pid
#   if [ $? -ne 0 ]; then
#     exit 1
#   fi
# done
