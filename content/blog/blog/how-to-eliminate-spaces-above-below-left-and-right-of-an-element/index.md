---
title: 要素の上下左右にある 1px ほどの隙間をなくす方法
description: margin や padding を 0 にしてもある、横や縦に並ぶ要素間の隙間をなくすスタイリング方法を紹介。
createdAt: '2021-04-17T12:16:33.249Z'
updatedAt: '2021-04-17T12:16:33.249Z'
cover: './css.svg'
status: published
category: Tips
tags:
  - CSS
  - Flexbox
  - inline-block
  - space
userId: kuro-kuroite
---

## はじめに

UI を作るとき、指定した大きさと余白で要素を配置したい。
また、2 つ以上の要素を横に並べたい場合も多い。

通常、width、height、margin、padding を使用して要素の大きさや余白を指定する。

inline 要素の場合、予期しない隙間問題がある。
インデントのために、 inline 要素間に改行やスペースが残るからだ。
結果、上下左右に 1px ほどの隙間が発生し、指定した余白よりも大きくなる。

インデントをしたまま、2 つ以上の要素を指定した余白で横や縦に並べたい。

![要素の上下左右に 1px ほどの隙間が発生する HTML 画像](./inline_space.png)

<details>
  <summary>
    要素の上下左右に 1px ほどの隙間が発生する HTML
  </summary>
  <div>

```html:title=index.html
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
      <div class="contents">
      </div>
      <div class="contents">
      </div>
      <div class="contents">
      </div>
    </div>
</body>
```

```css:title=style.css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  line-height: 1;
  border: 1px #000 solid;
}

.contents {
  display: inline-block;
  width: 33.3333%;
  height: 1em;
  background-color: turquoise;
}
```

  </div>
</details>

# 結論

1px ほどの隙間をなくし 2 つ以上の要素を横に並べる方法として、 Flexbox がある。
Flexbox や Grid などの block 要素は、要素間の改行やスペースを無視し、隙間が発生しない。[^1]
つまり、親要素に `display: flex;` を指定し、2 つ以上の子要素を横や縦に並べることができる。

![Flexbox による 3 つの要素間の隙間が発生しない HTML 画像](./flex_no_space.png)

<details>
  <summary>
    Flexbox による 3 つの要素間の隙間が発生しない HTML
  </summary>
  <div>

```html:title=index.html
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
      <div class="contents">
      </div>
      <div class="contents">
      </div>
      <div class="contents">
      </div>
    </div>
</body>
```

```css:title=style.css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: flex; /* add flex */
  line-height: 1;
  border: 1px #000 solid;
}

.contents {
  display: block; /* change to block */
  width: 33.3333%;
  height: 1em;
  background-color: turquoise;
}
```

  </div>
</details>

## 注意点

- その要素が文中に存在する場合、1px の隙間問題を諦めて inline 要素を使用する
  - 別のやり方として、[CSS の inline-block の改行による隙間を消す方法【初心者向け】](https://techacademy.jp/magazine/19406) もある

# 方法

親要素に `display: flex;` を指定して、2 つ以上の要素を横に並べ、インデントによる隙間をなくす。

## Flexbox を使用したインデントによる隙間の消去

2 つ以上の並べたい要素に親要素（div etc）を追加する。
その親要素に、`display: flex;` を指定する。
子要素の `display: inline;` を `display: block;` に変更する。

# 試したこと

## inline-block の親要素でフォントサイズを初期化

親要素に `font-size: 0;` を指定して、子要素に `display: inline-block;` と親要素の元々のフォントサイズを指定し直す。

以下に、 inline-block 要素の隙間をフォントサイズの指定で改善した HTML を提示する。(参考サイトの例を少し変更し、引用)

> ```html
> <div class="container">
>   <div class="inline-contents">aaa</div>
>   <div class="inline-contents">
>     aaa<br />
>     aaa
>   </div>
>   <div class="inline-contents">aaa</div>
> </div>
> ```

> ```css
> .container {
>   display: block;
>   border: 1px #000 solid;
>   font-size: 0; /* 16px を初期化 */
> }
>
> .inline-contents {
>   background-color: #66b6d5;
>   height: 200px;
>   display: inline-block;
>   width: 33.3333%;
>   font-size: 16px; /* 再指定 */
> }
> ```

### 結果

以下の理由で見送った。

- 親要素のフォントサイズを取得しなければならないため
- 別のクラス名でも、全ての子要素にそのフォントサイズを上書きする手間があるため

# まとめ

inline 要素を使用する場合、改行やスペースによる隙間が発生する。
inline 要素は文字そのものであり、 スペースは文の空白になるためだ。

Flexbox を使用することで、2 つ以上の要素を隙間なく横に並べることができる。
block 要素を使用することで、要素間の改行やスペースを無視するためだ。

# 参考

- [CSS の inline-block の改行による隙間を消す方法【初心者向け】](https://techacademy.jp/magazine/19406)

## 脚注

[^1]: line-height やカーソル、 border-width などが原因で隙間が発生する場合もある。
