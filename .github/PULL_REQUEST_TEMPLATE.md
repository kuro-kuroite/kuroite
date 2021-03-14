<!-- PULL REQUEST TEMPLATE -->

## 概要

<!-- PRタイトルの日訳プラスアルファ -->

### 機能追加や修正の背景・目的（一言で目的を伝えるならば）

<!-- 何ができるように or できないようになるのか（2、3行） -->
<!-- 変数のスコープを限定し，デバッグをしやすくするため -->
<!-- see #1 -->

<!-- Update "[ ]" to "[x]" to check a box -->

#### どの種類の PR か（check at least one）

- [ ] 作業中（WIP）
- [ ] バグ修正
- [ ] 機能改善・追加
- [ ] コードスタイルによる修正
- [ ] Refactor
- [ ] ビルド関連の変更
- [ ] Other、please describe:

#### この PR は大きな変化をもたらしますか（check one）

- [ ] Yes
- [ ] No

#### この PR は破壊的変更をもたらしますか（check one）

- [ ] Yes
- [ ] No

#### どの部分を中心に確認してほしいのか、どんなフィードバックを望んでいるのか（check at least one）

- [ ] コードに目を通して欲しい
- [ ] 技術的な議論がしたい
- [ ] 設計について批評してほしい
- [ ] 文言を確認してほしい
- [ ] Other、please describe:

### 機能追加や修正の概要・何が問題か（一言で問題を伝えるならば）

<!-- message変数が様々な場所から呼ばれる可能性がある -->

### 機能追加や修正の経緯（可能な限り過去から現在の状況と今後起こりうる可能性を詳細に）

<!-- 今まで，開発のスピードを重視してコードの可読性を無視してきた．-->
<!-- いよいよ，複雑になっていき一度整理を行う必要が出てきた．-->
<!-- 現在，message文字列をグローバル領域に持っている -->
<!-- そのため，message変数が様々な場所から呼ばれる可能性がある -->
<!-- 変数のスコープを限定し，デバッグや機能追加をしやすくするため -->

### 期待されるふるまい

<!-- Tell us what should happen -->

```

```

### 実際のふるまい

<!-- Tell us what happens instead -->

```

```

### 再現のサンプルコード（Optional）

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
