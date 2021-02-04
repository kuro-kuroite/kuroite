#!/usr/bin/env zsh

set -e

# HACK: for cypress/**/*.spec.ts
# usage:
#         zsh ./scripts/src/sh/tsc-cypress.lint.sh cypress/**/*.spec.ts

# HACK: https://stackoverflow.com/a/60950355
DIR=./scripts/src/sh
TMP=$DIR/.tsconfig.lint.json

cat >$TMP <<EOF
{
  "extends": "../../../cypress/tsconfig.json",
  "include": [
EOF
for file in "$@"; do
  echo "    \"$file\"," >> $TMP
done
cat >>$TMP <<EOF
    "unused"
  ]
}
EOF

# NOTE: tscエラーが発生したときでも、一時ファイルを削除するため
npx tsc --project $TMP --skipLibCheck --noEmit

rm -f $TMP
