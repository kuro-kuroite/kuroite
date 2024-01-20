# Blog

[![Build Status](https://github.com/kuro-kuroite/kuroite/workflows/build/badge.svg)](https://github.com/kuro-kuroite/kuroite/actions)

<!-- textlint-disable ja-technical-writing/sentence-length -->

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/kuro-kuroite/kuroite)](https://github.com/kuro-kuroite/kuroite/releases)
[![Coverage Status](https://codecov.io/gh/kuro-kuroite/kuroite/graph/badge.svg?branch=main)](https://codecov.io/gh/kuro-kuroite/kuroite)
[![dependency Status](https://img.shields.io/david/kuro-kuroite/kuroite.svg?maxAge=1000)](https://david-dm.org/kuro-kuroite/kuroite)
[![devDependency Status](https://img.shields.io/david/dev/kuro-kuroite/kuroite.svg?maxAge=1000)](https://david-dm.org/kuro-kuroite/kuroite)
[![GitHub top language](https://img.shields.io/github/languages/top/kuro-kuroite/kuroite)](https://github.com/kuro-kuroite/kuroite/search?l=typescript)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<!-- textlint-enable -->

[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://storybook.js.org/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![tested with Cypress](https://img.shields.io/badge/tested_with-Cypress-04C38E.svg)](https://www.cypress.io/)

[![Conventional Commits](https://img.shields.io/badge/Conventional_Commits-friendly-brightgreen.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# 概要

モダンな Web フロントエンドの技術を中心に発信する技術ブログ。

[blog](https://6110e97ea0112cda1621b1ba--boring-carson-44c8be.netlify.app/)

(Archived [https://blog.kuroite.dev](https://blog.kuroite.dev))

[<img src="./docs/assets/lighthouse.png" height="100px" alt="lighthouse 結果画像（https://blog.kuroite.dev/blog/how-to-back-up-your-data-fast-ignoring-extraneous-files/）" />](https://blog.kuroite.dev/blog/how-to-back-up-your-data-fast-ignoring-extraneous-files/)

<details>
  <summary>
    記事ページのデモ画像
  </summary>
  <div style="display: flex;">

[<figure style="display: inline-flex; flex-direction: column;"><img src="./docs/assets/blogPost_mobile.gif" width="100px" height="200px" alt="blog post page in mobile" /><figcaption>(モバイル版)</figcaption></figure>](./docs/assets/blogPost_mobile.gif)
[<figure style="display: inline-flex; flex-direction: column;"><img src="./docs/assets/blogPost_pc.gif" width="400px" height="200px" alt="blog post page in pc" /><figcaption>(pc 版)</figcaption></figure>](./docs/assets/blogPost_pc.gif)

  </div>
</details>

## 環境

<!-- TODO: システム構成図 -->

## 機能一覧

以下の技術を使い、このブログを構成している。

- 静的サイトジェネレーター for Jamstack (Gatsby.js)
- モバイルファースト
- ダークモード対応
- 目次リンク
- Twitter、Hatena Bookmark 共有リンク
- プログレスバー
- 「ラベルの翻訳 [^1]」の英語対応
- コードブロック
  - ラベル表示（ファイル名）
  - シンタックスハイライト
- コンポーネントのアクセシビリティテスト
- RSS 対応
- PWA 対応
- ページ
  - 記事ページ
  - 記事一覧ページ
  - タグの条件付き記事一覧ページ
  - 自己紹介ページ

### ブログ構成に必要な機能

- プライバシーポリシー
- robots.txt
- canonical
- meta tag
- Google Analytics

#### aside: 注意点

本ブログは、Internet Explorer に「**非**」対応である。
これは、開発元の Microsoft が今後機能追加をせずサポートを打ち切るため（[Microsoft 365 アプリの IE11 サポート終了][support-ie11-url]）。
そして、サイズを小さくしブログの読み込み時間を短くするためである。

[support-ie11-url]: https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666

## 技術一覧

[<img src="./docs/assets/typescript.svg" width="16px" height="16px" alt="TypeScript icon" />](https://www.typescriptlang.org/ 'TypeScript: Typed JavaScript at Any Scale.')
[<img src="./docs/assets/react.svg" width="16px" height="16px" alt="React icon" />](https://reactjs.org/ 'React – A JavaScript library for building user interfaces')
[<img src="./docs/assets/eslint.svg" width="16px" height="16px" alt="ESLint icon" />](https://eslint.org/ 'ESLint - Pluggable JavaScript linter')
[<img src="./docs/assets/prettier.svg" width="16px" height="16px" alt="Prettier icon" />](https://prettier.io/ 'Prettier · Opinionated Code Formatter')
[<img src="./docs/assets/redux_toolkit.svg" width="16px" height="16px" alt="Redux Toolkit icon" />](https://redux-toolkit.js.org/ 'Redux Toolkit | Redux Toolkit')
[<img src="./docs/assets/jest.svg" width="16px" height="16px" alt="Jest icon" />](https://jestjs.io/ 'Jest · 🃏 Delightful JavaScript Testing')
[<img src="./docs/assets/storybook.svg" width="16px" height="16px" alt="Storybook icon" />](https://storybook.js.org/ 'Storybook: UI component explorer for frontend developers')
[<img src="./docs/assets/cypress.svg" width="16px" height="16px" alt="Cypress icon" />](https://www.cypress.io/ 'JavaScript End to End Testing Framework | cypress.io')
[<img src="./docs/assets/gatsby.svg" width="16px" height="16px" alt="Gatsby.js icon" />](https://www.gatsbyjs.com/ 'Gatsby')
[<img src="./docs/assets/postcss.svg" width="16px" height="16px" alt="PostCSS icon" />](https://postcss.org/ 'PostCSS - a tool for transforming CSS with JavaScript')
[<img src="./docs/assets/autoprefixer.svg" width="16px" height="16px" alt="Autoprefixer icon" />](https://autoprefixer.github.io/ 'Autoprefixer CSS online')
[<img src="./docs/assets/stylelint.svg" width="16px" height="16px" alt="stylelint icon" />](https://stylelint.io/ 'stylelint.io')
[<img src="./docs/assets/tailwindcss.svg" width="16px" height="16px" alt="Tailwind CSS icon" />](https://tailwindcss.com/ 'Tailwind CSS - A Utility-First CSS Framework for Rapidly Building Custom Designs')
[<img src="./docs/assets/css_modules.svg" width="16px" height="16px" alt="CSS Modules icon" />](https://github.com/css-modules/css-modules/blob/master/README.md 'css-modules/README.md at master · css-modules/css-modules')
[<img src="./docs/assets/commitlint.svg" width="16px" height="16px" alt="commitlint icon" />](https://commitlint.js.org/#/ 'commitlint - Lint commit messages')
[<img src="./docs/assets/textlint.svg" width="16px" height="16px" alt="textlint icon" />](https://textlint.github.io/ 'textlint · The pluggable linting tool for text and markdown')

[<img src="./docs/assets/github_actions.png" width="16px" height="16px" alt="GitHub Actions icon" />](https://github.com/features/actions 'Features • GitHub Actions')
[<img src="./docs/assets/docker.png" width="16px" height="16px" alt="Docker icon" />](https://www.docker.com/ 'Empowering App Development for Developers | Docker')
[<img src="./docs/assets/renovate.png" width="16px" height="16px" alt="Renovate icon" />](https://docs.renovatebot.com/ 'Renovate Docs | Renovate Docs')
[<img src="./docs/assets/semantic_release.svg" width="16px" height="16px" alt="semantic release icon" />](https://semantic-release.gitbook.io/semantic-release/ 'Introduction - semantic-release')
[<img src="./docs/assets/netlify.svg" width="16px" height="16px" alt="Netlify icon" />](https://www.netlify.com/ 'Netlify: All-in-one platform for automating modern web projects')

詳細は、[技術選定.md](./docs/技術選定.md '技術選定.md') で紹介。

# 開発者向け

## 事前要件

## インストール

### `develop`

```zsh
# pre
cd path/to/blog
git clone https://github.com/kuro-kuroite/kuroite.git

  # plan A: if you use VSCode, and `ms-vscode-remote.remote-containers` extension
  code path/to/blog/kuroite
  mv .env.local.example .env.local
  vim .env.local # for Docker
  ## open `Docker.app` or Docker something in Spotlight(Command + Space > `Docker.app`)
  ## run `Remote-Containers: Reopen in Container` in Command Palette(Command + Shift + P)
  ## open Terminal in VSCode(Control + `)
  ### click `Install` to install extensions from right bottom popup of `Do you want to install the recommended extensions for docker-compose.yml?`

  # plan B: otherwise
  cd path/to/blog/kuroite
  mv .env.local.example .env.local
  vim .env.local # for Docker
  docker-compose build --no-cache # only first time
  docker-compose up -d
  docker-compose exec web zsh
  zsh ./config/docker/devcontainer/post-create-command.sh
  ## if you use VSCode
  ### click `Install` to install extensions from right bottom popup of `Do you want to install the recommended extensions for this repository?`

mv .env.development.example .env.development
vim .env.development # for `npm run develop`
mv .env.production.example .env.production
vim .env.production # for `npm run build && npm run serve`

# `develop`
pwd # /code
npx gatsby develop -H=$HOST # or `npm run develop`
# open http://localhost:8000 in browser

# post
  # plan A
  ## click `Dev Container: React` > `Close Remote Connection` from left bottom green button

  # plan B
  exit
  docker-compose down # or `docker-compose down --volumes`

# click `Quit Docker Desktop` or Docker something
```

### `deploy`

```zsh
# pre
git branch feature/something
git switch feature/something

npx gatsby build # or `npm run build`
npx gatsby serve -H=$HOST # or `npm run serve`
# check http://localhost:9000 in browser

# `git add` and `git commit`
git push origin feature/something

# make Pull Request for main in https://github.com/kuro-kuroite/kuroite/compare

# `deploy`
# main に merge すると、CI(build) が build し、Netlify に deploy する
```

### License

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

### 脚注

[^1]: [Kaizen Ad における SPA での i18n への取り組みと手法について - Kaizen Platform 開発者ブログ](https://developer.kaizenplatform.com/entry/axross/2018-07-02 'Kaizen AdにおけるSPAでのi18nへの取り組みと手法について - Kaizen Platform 開発者ブログ')
