---
title: 活動記録(2021/04/19)
description: Next.js(GraphQL)、JSONPlaceholder を使用した、記事一覧 Web アプリケーションを作成。
createdAt: '2021-04-19T06:08:02.857Z'
updatedAt: '2021-04-19T06:08:02.857Z'
cover: './IoDocumentTextOutline.svg'
status: published
category: 活動記録
tags:
  - 活動記録
userId: kuro-kuroite
---

## はじめに

進展状況の報告として、学習した内容を活動記録に残す。
目的は、以下である。

- 活動証明、記録
  - 進展状況の可視化
- モチベーションの維持
  - 小さな成長、進展を可視化
  - 達成度の数値化
- 難しい部分の対応力を高める
  - 難易度が高い、時間がかかるつまずきポイントを記録
    - 解決策調査のため
- ブログのネタ探し
  - つまずきポイントの解決策を記事にまとめるため
- 反省
  - 過去の活動記録と比較
  - 目標の修正
  - 行動内容の改善
  - 学習内容の洗い直し

学習内容を可視化し、そこから次に学習することを洗い出したい。
また、どこが大変だったかを記録に残し、今後の行動内容を修正したい。

# 結論

- 数値評価: 84.1％（(235+50+10+50)/(300+50+10+50)）
- 達成度評価: 55.0％（440/800）

[ブログ](https://blog.kuroite.dev/) を公開して、1 週間経過する。
前回で、SSG の Gatsby.js(React) を学習し、ブログとして完成させた。

次のステップとして、 Web Application 開発目的で Next.js の学習を開始した。
以下の手順である。
動画視聴の目的は、全体の開発の流れを知り、知識のインデックスを頭の中に入れるためである。
機能追加と再実装の目的は、写経した学習内容を理解し、応用できるかを確認するためである。
また、型を付けて、エラーを検知できるようにするためである。

- [最短・最速で学ぶ Firebase Hosting + React Todo アプリ実装編 (React Hooks) | Udemy](https://www.udemy.com/course/firebase-hosting-todo-reactreact-hooks/) 13 動画視聴 / 13
  - 達成感（20 / 100）
  - Firebase を知るため
- [最速で学ぶ Firebase + React Hooks (TypeScript) | Udemy](https://www.udemy.com/course/firebasereact-hookstypescript-todo/) 21 動画視聴 / 21
  - 達成感（50 / 100）
  - Firestore、Firebase Authentication の使い方を学習するため
- [[テスト編] Nextjs + React-testing-library でモダン React ソフトウェアテスト | Udemy](https://www.udemy.com/course/nextjs-react-testing-library-react/) 25 動画視聴 / 25
  - 達成感（10 / 100）
  - getStaticProps、getStaticPaths を使ったテストの書き方を知るため
  - useSWR を使ったテストの書き方を知るため
  - API サーバのモック方法を知るため
  - 登録、ログイン(JWT トークン等)、ログアウトを使ったテストの書き方を知るため
  - ページ遷移を使ったテストの書き方を知るため
- [Nextjs + Tailwind CSS + Django REST Framework で学ぶモダン React 開発 | Udemy](https://www.udemy.com/course/nextjs-tailwind-css-django-rest-framework-react/) 35 動画視聴 / 35
  - 達成感（50 / 100）
  - Next.js で Web Application を作成する手順（インデックス）を頭の中に入れるため
- 上の『Next.js Project 1 (HP 編)』を写経し、TypeScript、GraphQL で再実装（[tutorial-next-hp](https://github.com/kuro-kuroite/tutorial-next-hp)）
  - 50pt
  - 達成感（80 / 100）
  - Next.js で Web Application を作成するやり方を覚えるため
  - 写経したサイトを型付けし、エラーを検知できるようにするため

ブログ投稿のために、以下を行った。

- ブログ記事のテンプレート作成
  - 10pt
  - 達成感（90 / 100）
  - 一貫した形式にするため
  - ブログ執筆時間を短縮するため
- 活動記録含め、ブログ記事 5 つ投稿
  - 10pt x 5
  - 達成感（60 / 100）
- [免許皆伝：コピーライティング | Udemy](https://www.udemy.com/course/copy-writing/) 137 動画視聴 / 202
  - 達成感（85 / 100）
  - ブログ記事のリンクをクリックしてもらえる、一定の人に刺さるタイトルと説明文を作るため

就職活動対策のために、以下を行った。

- [ひろさん面接テクニック | YouTube](https://www.youtube.com/watch?v=2EqNQxHh68Q&list=PLphxQ00dqIJ1WAI7WLH8STeEpjx6apknx) 25 動画視聴 / 25
  - 達成感（80 / 100）

## 注意点

- [免許皆伝：コピーライティング | Udemy](https://www.udemy.com/course/copy-writing/) の学習は、QUEST の Qualify（絞り込む）までとした
  - タイトルと説明文の作成は、Qualify（絞り込む）のヘッドラインの内容に相当するため

# つまずきポイント

## 免許皆伝：コピーライティング | Udemy

- 13.5 時間と動画時間が多い
- ベネフィットを考えて、Qualify のヘッドラインをタイトルと説明文にするのが難しい

## ブログ記事作成

- ブログ記事のテンプレート
  - どの内容をブログに記載するべきかを考えたこと
  - どの順番とするのか考えたこと
    - どの内容をファーストビューにするべきか（今回は、前置きと結論とした）
- ブログ執筆
  - 1 つの記事を書くのに、最低でも 3 時間かかり、他の学習の妨げになっていること
    - 現段階で、2 日に 1 記事のペースで、ブログ執筆の時間の割合が大きいため
  - 想定しているターゲットがクリックするタイトルと説明文を考えるのに時間がかかる
    - ベネフィット、 Qualify、ヘッドラインの技術を利用するため
  - パラグラフラインティングで、流し読みでも意味が分かる説明を作るのに時間がかかる
    - トピックセンテンスとサポーティングセンテンスをどの内容にするのかが分からないため
  - PNG、SVG 画像を探したり、 GIF（PNG）画像を作成するのに時間がかかる

## Next.js

- 以下のテストは複雑で、使いこなすのに時間がかかりそうである
  - getStaticProps、getStaticPaths を使ったテストの書き方を知るため
  - useSWR を使ったテストの書き方を知るため
  - API サーバのモック方法を知るため
  - 登録、ログイン(JWT トークン等)、ログアウトを使ったテストの書き方を知るため
  - ページ遷移を使ったテストの書き方を知るため
- 『Next.js Project 1 (HP 編)』を写経し、TypeScript、GraphQL で型付けするのが大変だった
  - TypeScript で型をつける方法を探す必要があったため
    - [Basic Features: TypeScript | Next.js](https://nextjs.org/docs/basic-features/typescript)
  - GraphQL の設定方法を、Apollo GraphQL 公式ページから探す必要があったため
    - [Get started - Client (React) - Apollo GraphQL Docs](https://www.apollographql.com/docs/react/get-started/)
    - [Why Apollo Client? - Client (React) - Apollo GraphQL Docs](https://www.apollographql.com/docs/react/why-apollo/)
  - 外部 GraphiQL API サーバから、スキーマ型を取得するやり方を探す必要があったため
    - [Installation | GraphQL Code Generator](https://www.graphql-code-generator.com/docs/getting-started/installation)
    - [codegen.yml | GraphQL Code Generator](https://www.graphql-code-generator.com/docs/getting-started/codegen-config#environment-variables)
  - エラーハンドリングを回避するため、GraphQL スキーマ型を全て必須なプロパティに変更する必要があったから
    - [TypeScript Operations | GraphQL Code Generator](https://www.graphql-code-generator.com/docs/plugins/typescript-operations)

### Firebase

動画を見ただけである。

# 反省

## 過去の活動記録と比較

なし。

## 目標の修正

なし。

## 行動内容の改善

他に良い Next.js のチュートリアルが存在しない場合、時間がかかっても『Next.js Project 2 (Blog + Todos 編)』を完成させる。
エラーハンドリングまたは型についての学習でない場合、Next.js の実装をせず、見るだけにする。
面接の回答を作成した場合、一度他の人にその内容を添削してもらう。

### 次回より後の予定

6 つ以上面接の回答を作成した場合、一度模擬面接を行ってみる。

## 学習内容の洗い直し

- 『Next.js Project 2 (Blog + Todos 編)』
  - 写経
  - Firestore、TSX、可能なら GraphQL で置換（想定難易度高め）
  - 問題が出たらメモを取り、解決したら参考 URL を保存しておく
- 面接対策
  - [面接答え方フォーマット【これに当てはめて答えよう】 | YouTube](https://www.youtube.com/watch?v=1--W8TO-gIY&list=PLphxQ00dqIJ0CgFADdmxXKQsnxGq81lLa) を視聴
  - 面接回答テンプレートから、回答内容を考えて作成（想定難易度高め）
    - 就活の軸から決める
  - 『Web 系エンジニアになろう』を再度読む
- 就職活動
  - Twitter にブログリンクを追記し、Wantedly、Forkwell に自己紹介文を追加
  - Wantedly、Forkwell で条件に会う会社を 3 つ探す（想定難易度高め）
    - IR 情報で比較（他の人に手伝ってもらう予定）
- ブログ記事執筆 3 つ、活動記録 1 つ投稿
  - 執筆時間を削減することを意識する
- 『りあクト』シリーズを読む
  - エラーハンドリングと Concurrent Mode についての理解を深める
  - Suspense、SWR 等を使い、エラーハンドリングを TSX で実装できるやり方を知る（想定難易度高め）

### 次回より後の予定

- [[テスト編] Nextjs + React-testing-library でモダン React ソフトウェアテスト | Udemy](https://www.udemy.com/course/nextjs-react-testing-library-react/) を写経

# まとめ

ブログについては、コピーライティングとブログ記事投稿での行動をした。
Web Application 開発については、Firebase 学習、 Next.js 学習をした。
就職対策については、面接対策の学習をした。

大きな問題は、2 つある。
エラーハンドリングのやり方が分からない問題とブログ執筆に時間がかかる問題である。
エラーハンドリングの問題は、Next.js（TSX）と GraphQL の実装や『りあクト』シリーズの理解で改善する。
ブログ執筆に時間がかかる問題は、1 つでも多くテンプレートに沿ったブログを書き、慣れるしかない。

補足として、GraphQL API サーバが存在しない場合、REST API サーバと fetch で型付けするか GraphQL サーバを立てるしかないだろう。
