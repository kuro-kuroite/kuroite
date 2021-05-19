---
title: 外部 API のデータのロードとエラーを考慮したユーザ Task 管理アプリケーション制作
description: Suspense、Error Boundary、Firestore(Authentication)で Next.js(SWR)のタスクアプリケーションを制作した。
createdAt: '2021-05-19T09:22:09.425'
updatedAt: '2021-05-19T09:22:09.425'
cover: './firebase.svg'
status: published
category: 記事
tags:
  - Next.js
  - Suspense
  - Firestore
  - Authentication
  - SWR
userId: kuro-kuroite
---

## はじめに

Gatsby.js(React、 TypeScript) で SSG の技術ブログを制作した。

Web アプリケーションで外部 API からデータの取得と変更をするとき、ローディングとエラーハンドリングが必要になる。
データ取得に時間がかかり、失敗する可能性があるためだ。
`data` と `isLoading`、`error` 変数でこれらを管理することが多い。

変数での管理には、以下の問題がある。
`isLoading` と `error` 値の条件分岐処理が、宣言的でない。
`data` バリデーションの分岐処理が、宣言的でない。

Next.js で外部の API からデータを取得し、外部データを CSR する SSG アプリケーションを制作したい。

# 結論

以下の技術を使用して、外部データを CSR する SSG を作成した。
Next.js(SWR) のユーザ Task 管理アプリケーションである。

- Next.js
  - React Suspense
    - Render-as-You-Fetch
  - Error Boundary
  - SSG、ISR、CSR（/blog ページ）
    - SWR
    - GraphQL(URQL)
  - CSR、Auth(/task ページ)
    - Firestore
    - Firebase Authentication

SWR で外部 API データを CSR した。外部 API は、GraphQL エンドポイント版の [JSONPlaceholder][graphql-url] と Firestore である。
データローディングに、React Suspense を使用した。
ユーザログインとバリデーションに、Firebase Authentication、Firestore と Error Boundary を使用した。

[Demo | next-blog-todos](https://tutorial-concurrent-next-blog-todos.vercel.app/)。

![Demo | next-blog-todos](./next-blog-todos.gif)

[graphql-url]: https://graphqlzero.almansi.me/api

## 注意点

- `/task` と `/task/[id]` ページのリロードで、1.5 秒ほどデータの取得に時間がかかる
  - ページリロードで、1 秒ほどログイン状態が初期化されるため
- SWR task 取得でサーバサイドフェッチングを排除している
  - Firebase は、サーバサイドで動作しないため
- SWR fetcher() 関数で型パズルをしている
  - URQL の data が null 安全でなく、ユーザー定義型ガード関数を作成していないため
  - Firestore の doc.data() 型が any であるため
- SWR の data で型パズルをしている
  - `{ suspense: true }` と Error Boundary で、data 戻り値が null 安全なため

# 方法

以下のリポジトリを参考にする（[tutorial-concurrent-next-blog-todos](https://github.com/kuro-kuroite/tutorial-concurrent-next-blog-todos)）。

## 外部 API データ取得

`useSWR()` と fetcher()、Suspense で外部 API からデータを取得した。

`useSWR()` は、`/components/[Component]/[SubComponent]/[SubComponent].tsx` から使用される。
fetcher() は、`/lib/[domain]/[domain].ts` に実装した。
Suspense は、`/components/[Component]/[Component].tsx` から使用される。

### オープン API データ

公開されている外部 API は、`/lib/[domain]/[domain].ts` と `/lib/[domain]/[fetching library].ts` にまとめて、フロントエンドから隠蔽した。
JSONPlaceholder と URQL である。

### Auth API データ

認証が必要な Firestore は、Hooks Injection パターン[^1] で、フロントエンドから隠蔽した。

Hooks Injection パターンとは、以下の手順である。

1. `/lib/tasks/tasks.ts` の `useTask()` で、`<TaskContext />` の `useTask()` を使用して、実装を隠蔽
1. `/lib/tasks/firebase.ts` の `useTask()` に実装を記述（SWR で使用する fetcher() を返却）
1. `/pages/_app.tsx` の `<TaskProvider />` に `/lib/tasks/firebase.ts` の `useTask()` を Injection

詳細は、`/lib` と `/pages/_app.tsx` を参照。

# まとめ

外部データを CSR する SSG アプリケーションとして、Next.js でユーザ Task 管理アプリケーションを制作した。
Suspense と Error Boundary の技術を使用して、JSONPlaceholder や Firestore の外部データローディングとエラーハンドリングを実装した。
fetcher() と Hooks Injection パターンを使用して、useSWR() 以外の data fetching library をフロントエンドから隠蔽した。

# 参考

- [Nextjs + Tailwind CSS + Django REST Framework で学ぶモダン React 開発](https://www.udemy.com/course/nextjs-tailwind-css-django-rest-framework-react/)
- [最速で学ぶ Firebase + React Hooks (TypeScript)](https://www.udemy.com/course/firebasereact-hookstypescript-todo/)
- [Firebase をフロントエンドから適切に隠蔽するための「Hooks Injection パターン」](https://tech.jxpress.net/entry/never-give-up-firebase)

## 脚注

[^1]: [Firebase をフロントエンドから適切に隠蔽するための「Hooks Injection パターン」](https://tech.jxpress.net/entry/never-give-up-firebase)
