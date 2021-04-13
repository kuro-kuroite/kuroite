---
title: 余計なファイルを無視して、高速にデータをバックアップする方法
description: rsync と .gitignore による、コピーより高速でサイズが小さくなる iCloud バックアップスクリプトを公開。
createdAt: '2021-04-13T12:01:35.600Z'
updatedAt: '2021-04-13T12:01:35.600Z'
cover: './AiOutlineCloudSync.svg'
status: published
category: Tips
tags:
  - rsync
  - iCloud
userId: kuro-kuroite
---

## はじめに

PC が壊れてデータを失わないために、データのバックアップが必要である。
iCloud は、`~/Library/Mobile Documents/com~apple~CloudDocs/` 以下のディレクトリ、ファイルを自動でバックアップする。

通常のコピー（`cp project ~/Library/Mobile\ Documents/com\~apple\~CloudDocs/`）でのバックアップには以下の問題がある。
変更していないファイルもコピーされるため、全てのバックアップに時間がかかる。
また、`[project]/node_modules/` など、余計なものもバックアップするので、バックアップのサイズが大きくなる。
そして、プロジェクトで削除したファイルをバックアップ対象から除外できない。

ファイルのコピーより高速でサイズを小さく iCloud バックアップしたい。

# 結論

rsync でバックアップを高速化し、 Git(.gitignore) でバックアップファイルのサイズを減らす。
Mac Terminal を想定するため、zsh を使用する。

Mac Terminal で以下を実行する。

```zsh
# pre
cd $HOME/web/
vim rsync_icloud # paste below
# chmod 755 ./rsync_icloud

# run
zsh ./rsync_icloud
```

以下に、スクリプトを提示する。

<details>
  <summary>
    iCloud バックアップスクリプト($HOME/web/rsync_icloud)
  </summary>
  <div>

```zsh:title=$HOME/web/rsync_icloud
#!/usr/bin/env zsh

set -e

# usage:
#         zsh ./rsync_icloud
#         zsh ./rsync_icloud web_pages/

project_path=`echo "$1" | sed -e 's/\/\//\//g'`
# TODO: バックアップしたいディレクトリに変更する。
# TODO: そのディレクトリ直下に、rsync_icloud を移動する
src_dir="$HOME/web/$project_path"
dest_dir="$HOME/Library/Mobile Documents/com~apple~CloudDocs/web/$project_path"

rm -f .git/ignores.tmp

# そのディレクトリ以下にある全ての.gitignoreから除外するファイル、ディレクトリ一覧を取得
# .git/ignores.tmpにコピー
find . \
  -type d -name 'node_modules' -prune \
  -o -type d -name 'public' -prune \
  -o -type d -name '.cache' -prune \
  -o -type f -name '.gitignore' -print \
    | xargs -L 1 dirname \
    | xargs -L 1 zsh -c 'current_dir=`pwd | sed -e "s@\/@\\\/@"` ; cd $0 && \
      git -C . ls-files \
        --exclude-standard -oi --directory \
    | xargs -I {} echo `pwd`/{} \
    | xargs -I {} echo "-" {}' \
    >> .git/ignores.tmp

# rsync は実行場所からの相対パスであるため
current_dir=`pwd`
sed -i -e "s@${current_dir}/@@" .git/ignores.tmp

# for debug
# cat .git/ignores.tmp
# echo $src_dir
# echo $dest_dir

rsync --archive --human-readable --links --delete \
  --exclude='node_modules/' \
  --exclude='.DS_Store' \
  --exclude='.git/' \
  --exclude='.git/ignores.tmp' \
  --exclude-from='.git/ignores.tmp' \
  --chmod='F-w' \
  $src_dir $dest_dir
  # --include '.git'
```

  </div>
</details>

## 注意点

- `rsync_icloud` と同じディレクトリで、`git init` が必要
- `.git/ignores.tmp` が消去されない
- rsync
  - 明示的に、`node_modules/` や `.DS_Store`、`.git/` を除外している
    - バックアップサイズを小さくするため
  - ファイルの書き込み権限を除外している
    - 予期せぬ書き込みを防止するため

# 方法

rsync と Git(.gitignore) を使用して、バックアップを効率化、最小化する。

## rsync と .gitignore を使用した iCloud バックアップ

rsync コマンドで、ファイルをリモート環境（iCloud のバックアップディレクトリ）で同期する。
rsync コマンドは、変更部分のみ更新する機能があるため。
また、削除したファイルをバックアップから削除できるため。

`git ls-files` コマンドで、.gitignore で記述したファイルをバックアップ対象から除外する。
`node_modules/` など余計なディレクトリを除外し、バックアップサイズを小さくするため。

詳細は、[iCloud バックアップスクリプト($HOME/web/rsync_icloud) | 結論](#結論) を参照。

# まとめ

rsync + .gitignore を使用することで、iCloud バックアップを効率化し最小化した。
また、スクリプトを利用することで `zsh ./rsync_icloud` で何度もバックアップできるようになった。

# 参考

- [Backing up your iCloud Drive files using rsync](https://www.jessesquires.com/blog/2019/09/27/icloud-backup-using-rsync/)
- [rsync exclude according to .gitignore](https://stackoverflow.com/a/50059607)
