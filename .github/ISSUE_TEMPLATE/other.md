---
name: Other
about: Other issue.
---

<!-- ISSUE TEMPLATE -->

## 概要

<!-- Issueタイトルの日訳プラスアルファ -->

### 目的（一言で目的を伝えるならば）

<!-- 何ができるように or できないようになるのか（2、3行） -->
<!-- ipアドレスは，時間によって変わる可能性があるため，デバイスの自動探索をしたい -->

<!-- Update "[ ]" to "[x]" to check a box -->

#### どの種類の Issue か（check at least one）

- [ ] 作業中（WIP）
- [ ] バグ報告
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
- [ ] Other、please describe:

### 概要（一言で概要を伝えるならば）

<!-- デバイス名からipアドレスを探す関数 -->

### 経緯（可能な限り過去から現在の状況と今後起こりうる可能性を詳細に）

<!-- 今まで，ipアドレスでデバイスを特定してきた．-->
<!-- 現在，ipアドレスは手動で設定している -->
<!-- そのため，毎回調べて設定を変更する必要がある -->
<!-- よって，デバイス名からipアドレスを探す関数を作り，デバイスの自動探索を行いたい -->

### 詳細（追加で説明したい項目）

<!-- デバイス名からipアドレスを探す関数 searchDevise(deviseName) -->

### 期待されるふるまい（Optional）

<!-- Tell us what should happen -->

```

```

### 実際のふるまい（Optional）

<!-- Tell us what happens instead -->

```

```

### サンプルコード（Optional）

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

- OS:
- OS version:
- Node.js version:
- npm version:

### Other information

<!-- you want to write anything -->
<!-- mention -->
