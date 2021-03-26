---
title: Sample
description: sample for Markdown
createdAt: '2015-05-01T22:12:03.284Z'
updatedAt: '2015-05-01T22:12:03.284Z'
cover: './gatsby-icon.png'
status: published
category: Markdown
tags:
  - Markdown
userId: userAccount
---

## はじめに

Blog 記事を作成するために、Markdown の記法を知る。

## 結論

- 初級
  - [ ] 見出し
  - [ ] 段落
  - [ ] 強調
  - [ ] 斜体
  - [ ] 打ち消し
  - [ ] 順序なしリスト
  - [ ] 順序つきリスト
  - [ ] チェックボックス
  - [ ] 引用
- 中級
  - [ ] code block
  - [ ] タイトル付き code block
  - [ ] リンク
  - [ ] 画像
  - [ ] 折り畳み
  - [ ] 脚注

# 初級

段落。

段落。

段落。

段落 **強調** _斜体_ ~~打ち消し~~

- ul
- ol
  - vegetable
  - fruit
    - apple
    - grape
    - orange

段落。

1. [ ] cut vegetables
1. [ ] put it into frying pan
1. [ ] fry it

- [ ] decorate it
  1. [ ] put it on dish
  1. [ ] put the dish on the table

> より少なく、しかしより良く [^1]
> より少なく、しかしより良く [^2]

> ```css
> .content {
>   line-height: 1;
>   display: flex;
>   gap: 1em;
>   flex-direction: column;
>   border: 1px solid orange;
> }
>
> .container {
>   border: 1px solid orange;
>   display: flex;
>   /*   flex-direction: column; */
>   justify-content: center;
>   column-gap: 0.5em;
> }
> ```

## 中級

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>this is hello world</p>
  </body>
</html>
```

```html:title=index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>this is hello world</p>
</body>
</html>
```

[Markdown 一覧](https://qiita.com/Qiita/items/c686397e4a0f4f11683d#fn2 'Markdown記法 チートシート')

![salty egg](./salty_egg.jpg)

<details>
  <summary>
    〇〇(index.html)
  </summary>
  <div>

    要約すると，〜〜〜〜
    コードは，いかにしるす

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>this is hello world</p>
  </body>
</html>
```

  </div>
</details>

### 脚注

[^1]: [エッセンシャル思考 | Amazon](https://amzn.to/3648zn5 'エッセンシャル思考')
[^2]: [エッセンシャル思考 | Amazon](https://amzn.to/3648zn5 'エッセンシャル思考')
