---
title: About
description: モダンなWebフロントエンドの技術を中心に発信する技術ブログ
createdAt: '2015-05-01T22:12:03.284Z'
updatedAt: '2015-05-01T22:12:03.284Z'
cover: './logo.png'
status: published
category: About
tags:
  - About
  - 活動記録
userId: userAccount
---

# このブログについて

モダンな Web フロントエンドの技術を中心に発信する技術ブログ。

## 目的（モチベーション）

- 個人的なアウトプットの場として、自前のブログが欲しかったため
- UI ライブラリである React などを使ったポートフォリオを、他の人に自慢したいレベルで作り込みたかったため
- 静的サイトジェネレーター（Gatsby.js）を学習し、短時間で Web ページ（ブログ）を作成するやり方を身につけるため

## 記事内容

主に以下の内容を、発信する。

- 記事
- 備忘録
- 活動記録
- Tips
- 個人的ベストプラクティス
- ままならない仕様
- ままならない現実

<!-- TODO(MDX): ここにReact, ...のtagをいれる -->

## 構成

以下の技術を使い、このブログを構成している。

### Gatsby.js（React）

UI ライブラリの React を使った静的サイトジェネレーター（SSG）

フロントエンド側の知識吸収に集中するため（サーバーサイドをトレードオフ）。
React コンポーネントの実装に集中するため（+α 部分（SEO や PWA 等）を、プラグインや少しのプログラムで実装）

※ 当時（03/2020）、Next.js で Router の設定が必要であり、また SSG 以外の学習コストも高いため Gatsby.js を選択。

### TypeScript

JavaScript にトランスパイルする漸進的型付け言語。

デファクトスタンダードであるため（ビルド環境の構築コストをトレードオフ）。
型の補完で、タイプミスを防止するため（型設計の学習コストをトレードオフ）

### PostCSS（with Tailwind CSS and CSS Modules）

CSS に変換する JavaScript ライブラリ。

他のライブラリ（Tailwind CSS 等）を PostCSS 環境 1 つにまとめ、Next.js への移行コストを抑えるため。
ポリフィル（ブラウザ間の仕様の差異を吸収、Draft 構文、例えばネスティング等）を使用するため（ビルド環境の構築コストをトレードオフ）

### Tailwind CSS

カスタマイズできるユーティリティー CSS フレームワーク。

CSS 内で、厳選された@apply クラスを使用し、一貫した UI になるため（ビルド環境の構築コストをトレードオフ）。
具体値（10px、100％）を config にまとめられるため（設定項目の学習コストをトレードオフ）

### CSS Modules

CSS セレクターに擬似的な名前空間を提供するライブラリ。

セレクター名が短くなる（他のライブラリ（クラスセレクターを使用）に合わせた余計な設定をトレードオフ）。
composes 構文を使い、共通スタイルを分離できる（ビルド環境の構築コストをトレードオフ）

### その他

- GraphQL
- Redux Toolkit
  - React-i18Next.js
- tailwind-theming
- GitHub Actions
  - Renovate
  - commitlint
  - textlint
  - ESLint
  - Prettier
    - EditorConfig
  - stylelint
- Netlify
- Test
  - Jest
    - React Testing Library
  - Storybook
  - Cypress

#### aside: Kuroite ロゴの由来 v2

- 黒+黒い手+黒いカラスの目（crow eye）をモチーフ
- 何かを手に入れるには何かを捨てなければならないトレードオフの考えを、清濁のある左手（黒い手）として表現
  - 有害な液体かつ資源でもある黒い石油を手ですくいあげると指の間から石油がたれてしまう光景をモチーフ
- ドキュメントの海(Web)から良きやり方（標準）を探し続ける意思を、カラスの目として表現

  - カラスがゴミ捨て場から良き餌を探し当てる鋭い目をモチーフ

- 中心の真円は、PostCSS のマスタを目指し、理想の UI に寄せるイメージ
  - 真円は、完璧なマスタを目指すイメージ
  - 中心とのずれは、理想の UI に寄せるが、完璧を目指さない（可読性と実装しやすさを優先したトレードオフ）
  - 色は、PostCSS のメインカラー
- 外側の欠けた円は、HTML5（宣言的な View）、すなわち TSX（React）に主軸を置くイメージ
  - ロゴの中心と外側の欠けた円の中心の一致は、React 関連技術を主軸とするイメージ
  - 欠けた円は、コード分割でテストしやすさを高めるが、カバレッジ 100％を目指さない
    - （非純粋や副作用、サービス間の型の不一致を、余分な型生成やモックテストで代用するトレードオフ）
  - 色は、同系色の HTML5 のカラー

# 自己紹介

React を得意とする Web Developer。

## スキル

以下のスキルを得意とする。取消線のスキルは、未完または忘却を表す。

- Gatsby.js
  - ~~GraphQL~~
  - ~~Storybook v6~~
  - ~~Jest~~
  - ~~Cypress~~
- React
  - Hooks
  - VFC
  - ~~Redux Toolkit~~
  - Atomic Design
  - ~~webpack~~
- TypeScript
  - type
  - ~~npm からライブラリの型を探すこと~~
  - ES2015+
    - async、await
  - Babel
- PostCSS
  - CSS Modules
    - composes
  - Tailwind CSS
    - @apply
  - BEM
  - Flexbox
  - ~~SCSS~~
  - ~~Stylus~~

- Git
- GitHub
  - Markdown
- GitHub Actions
  - Docker
    - ~~docker-compose~~
    - ~~Vagrant~~
      - ~~VirtualBox~~
- npm-scripts
  - ~~shell script~~
- ~~Ruby on Rails(v5.1.x)~~
  - ~~RSpec~~
- ~~Python~~

## 好きなもの

- お菓子
- ボードゲーム
- マリオ
- 転生したらスライムだった件
- Apple

- React
- Hygen
- patch-package

## 興味があるもの

<details>
  <summary>
    技術
  </summary>
  <div style="display: flex;">

- Next.js
  - SSG（サーバーレス）、SSR + マイクロサービス（XaaS）
- React
  - Concurrent Mode
  - Server Components
  - React Native、Expo
  - 多対多 Redux
- Go
  - 並行処理
- TypeScript
  - バリデーション
  - npm-scripts
  - top-level await
  - aspida(or GraphQL)
- 型レベルプログラミング
  - TypeScript
    - Template literal types
    - infer
    - extends
  - Elm
  - Haskell
    - ADT
  - Swift
  - JSON
- Web
  - Accessibility
  - SVG
  - ~~styled-components~~
  - ~~deno~~
  - ~~Vue.js~~
  - build
    - ~~esbuild~~
    - ~~Snowpack~~
    - ~~rome~~
- ~~Raspberry Pi~~

  </div>
</details>

<!-- HACK: for details + li -->
<br />

- 活動
  - 勉強会
  - 記事投稿
  - 動画投稿
  - ドキュメント翻訳
  - 書籍執筆

- ワールドトリガー

# 活動記録

## アカウント（SNS）

- [Twitter](https://twitter.com/kuro_kuroite)
- [GitHub](https://github.com/kuro-kuroite)

## 関心技術の獲得場所

<!-- 参加イベント・グループ -->

主に、以下のサイトや個人ブログから新規技術情報を取得。

- Qiita のトレンド、タグページ
- はてなブックマークのテクノロジー、関心 Word 一覧
- Twitter のタイムライン

以下の公式ページから、その技術情報の使い方を学習。

- GitHub のリポジトリの README
- npm
  - ライブラリ公式ページの Docs

## 履歴

- 2017/03-08: 教育メンター（Ruby on Rails コース）
- 2018/06-02: Node.js（CoffeeScript2 → ES2015+）学習
- 2019/03-12: 海外ボランティア（『Thinking in React | React 公式チュートリアル』手書きコーティング）
- 2020/03-05: Gatsby.js の学習を開始（Sketch Top ページを模写）
- 2020/06- : 技術ブログ制作開始

# 謝辞

<!-- textlint-disable ja-technical-writing/no-exclamation-question-mark -->

Gatsby.js を知ったきっかけは、以下の記事を読んだことです。
パフォーマンスが高く、SEO と PWA もサポートしている React 製の技術ブログが作れるのか。
Gatsby.js 最高、と感動しました!!

<!-- textlint-enable -->

<!-- textlint-disable ja-technical-writing/ja-no-successive-word -->

- [React の最強フレームワーク Gatsby.js の良さを伝えたい！！](https://qiita.com/hppRC/items/00739eaf9ae7fc95c1ca)

<!-- textlint-enable -->

技術ブログ制作において、主に以下の技術ブログやページを参考にさせていただきました。
とくに、`gatsby-*.ts`の設定や GraphQL のクエリの書き方、TSX の型付けについて、Gatsby.js 公式ページに書かれていない部分も多く、参考になりました。

- [dnrsm.dev](https://dnrsm.dev/)
- [blog.ojisan.io](https://blog.ojisan.io/)
- [Gatsby.js を完全 TypeScript 化する](https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb)
- [suzukalight](https://suzukalight.com/)

その感謝の印として、ここで謝辞を示します。

私と同じように、誰かがこの技術ブログを参考にして、Gatsby.js で技術ブログを制作してくれる日が来るのを願っています。
