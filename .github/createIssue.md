Automated Issue

## 概要

<!-- Issueタイトルの日訳プラスアルファ -->

GitHub Actions の build workflow 中に自動的に作成された Issue。([workflow](#workflow))

### 問題の背景・目的（一言で目的を伝えるならば）

<!-- 何ができるように or できないようになるのか（2、3行） -->

追加した機能や修正したバグを main ブランチに merge し、リリースするため。

#### どの種類の Issue か（check at least one）

- [ ] 作業中（WIP）
- [x] バグ報告
- [ ] バグ修正
- [ ] 機能改善・追加の要求
- [ ] コードスタイルによる修正
- [ ] Refactor
- [ ] ビルド関連の変更
- [ ] Other、please describe:

#### どの部分を中心に確認してほしいのか、どんなフィードバックを望んでいるのか（check at least one）

- [ ] コードに目を通して欲しい
- [ ] 技術的な議論がしたい
- [ ] 設計について批評してほしい
- [ ] 文言を確認してほしい
- [x] Other、please describe: See [workflow](#workflow)、[commit](#commit)

### 問題の概要・何が問題か（一言で問題を伝えるならば）

GitHub Actions の build workflow に問題が発生し、main ブランチに merge 出来ない。

### 問題の経緯（可能な限り過去から現在の状況と今後起こりうる可能性を詳細に）

1. 追加した機能や修正したバグを push
1. main ブランチの Pull Request を作成
1. Pull Request から、main ブランチに marge をトライ
1. GitHub Actions の build ワークフローが起動
1. build ワークフロー内でエラーが発生
1. 追加した機能や修正したバグがリリース出来ていないため、Issue を作成

### 期待されるふるまい

GitHub Actions の build ワークフローの成功。

```

```

### 実際のふるまい

build ワークフロー内でエラーが発生。

```

```

#### System configuration

<!--

## for Mac

```zsh
sw_vers -productName | xargs -I {} echo '- OS: '{}
sw_vers -productVersion | xargs -I {} echo '- OS version: '{}
node -v | xargs -I {} echo '- Node.js version: '{}
npm -v | xargs -I {} echo '- npm version: '{}
```

## for Ubuntu

```zsh
cat /etc/os-release | grep ^ID= | sed -E 's/ID=//g' | xargs -I {} echo '- OS: '{}
cat /etc/os-release | grep ^VERSION_ID= | sed -E 's/VERSION_ID=//g; s/\"//g' | xargs -I {} echo '- OS version: '{}
node -v | xargs -I {} echo '- Node.js version: '{}
npm -v | xargs -I {} echo '- npm version: '{}
```

-->
