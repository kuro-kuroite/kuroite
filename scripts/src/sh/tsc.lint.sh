#!/usr/bin/env zsh

set -e

# usage:
#         zsh ./scripts/src/sh/tsc.lint.sh path/to/some.ts

# HACK: https://stackoverflow.com/a/60950355
DIR=./scripts/src/sh
TMP=$DIR/.tsconfig.lint.json

cat >$TMP <<EOF
{
  "extends": "../../../tsconfig.json",
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

# FIXME: cypress/integration のファイルを削除. lint-staged で *.ts と *.spec.ts の区別ができないため
sed -i -r /cypress\\/integration/d $TMP

# NOTE: tscエラーが発生したときでも、一時ファイルを削除するため
npx tsc --project $TMP --skipLibCheck --noEmit

rm -f $TMP
