---
title: 深いネストを改善する方法
description: 深いネストを改善できる、早期リターン（ガード節）というリファクタリング技術を紹介。
createdAt: '2021-04-15T09:48:31.764Z'
updatedAt: '2021-04-15T09:48:31.764Z'
cover: './FaRecycle.svg'
status: published
category: Tips
tags:
  - early-return
  - refactoring
userId: kuro-kuroite
---

## はじめに

プログラミングでは、入力された値によって実行する内容を分けたい場合が多い。
通常、 if 文を使用して条件分岐を達成する。

条件分岐が複雑な場合、インデントが増えて、深いネストになる問題がある。
if 文の多重使用で実装することが多いためだ。
ネストが深いほど、どの条件が満たされているのかを判定するのが難しくなる。
結果、どの内容を実行しているのか分かりにくくなる。

ネストを小さくしたまま複雑な条件分岐を実装したい。
本記事では、以下のうるう年判定関数でガード節を使い、深いネストを改善していく。

<details>
  <summary>
    うるう年判定関数(is_leap_year.ts)
  </summary>
  <div>

```typescript:title=is_leap_year.ts
// usage:
//        npx ts-node is_leap_year.ts 2000 # true
//        npx ts-node is_leap_year.ts 1900 # false

// うるう年の条件
// - 4で割り切れる
// - 100で割り切れない
// - 400で割り切れる
export const is_leap_year = (year: number): boolean => {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      return true;
    }
    else if (year % 400 === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

const main = () => {
  const year = parseInt(process.argv[2]);

  console.log(is_leap_year(year));
}

if (require.main === module) {
  main();
}
```

  </div>
</details>

# 結論

深いネストを改善する方法として、ガード節がある。
ガード節とは、特定の条件を満たす場合に、すぐに return 文を使用するリファクタリング技術の 1 つである。

補足として、不正な値の場合もガード節を使うことがある。
メリットは、ガード節以降の処理は不正な値であるかを判定する必要がなくなることである。

ガード節の別名に、「アーリー・リターン」「早期リターン」がある。
本記事では、「ガード節」で統一する。
不正な値をはじくという意味を表しているためだ。

以下に、ガード節で深いネストを改善した、うるう年判定関数を提示する。

<details>
  <summary>
    ガード節版のうるう年判定関数(is_leap_year.ts)
  </summary>
  <div>

```typescript:title=is_leap_year.ts
// usage:
//        npx ts-node is_leap_year.ts 2000 # true
//        npx ts-node is_leap_year.ts 1900 # false

// うるう年の条件
// - 400で割り切れる(1)
// - 4で割り切れる(2)
// - 100で割り切れない(2)
export const is_leap_year = (year: number): boolean => {
  // ガード節: 不正な値（数字でない）
  // NOTE: 不正な引数は、TypeScript のコンパイルエラーで検知できるため、コメントアウト
  // if (typeof year !== 'number') {
  //   throw new TypeError('year should be number');
  // }

  // ガード節: 不正な値（負の値）
  if (year < 0) {
    return false;
  }

  // ガード節: 不正な値（小数点判定 etc）
  // if (condition) {}

  // 以降は、不正な値であるかを判定する必要がない
  // ガード節（早期リターン）: (1)
  if (year % 400 === 0) {
    return true;
  }

  // ガード節（早期リターン）: (2)
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }

  return false;
}

const main = () => {
  const year = parseInt(process.argv[2]);

  console.log(is_leap_year(year));
}

if (require.main === module) {
  main();
}
```

  </div>
</details>

## 注意点

- ガード節のために、関数に分離する必要がある
  - main 文で return を使用すると、スクリプトが終了するため
- return の代わりに break や continue を使用する場合がある
  - for 文などで return を使用すると、関数が終了するため

# 方法

関数の先頭で if 文と return 文を使用して、深いネストを改善する。

## ガード節を使用した深いネストの改善

ガード節の if 文は、以下の条件とする。
ガード節は、よりありえない値や例外的な条件をはじきガードするリファクタリング技術である。

<!-- textlint-disable ja-technical-writing/max-ten-->

つまり順番は、より不正な値、その関数では不正な値、その関数限定の条件、その関数で一般的な条件となる。

<!-- textlint-enable -->

- 不正な値
  - 不正な値（null）
  - その関数では不正な値（負の値）
  - 特定の値（0 etc）
- 厳しい条件
  - その関数限定の条件（400 で割り切れる、祝日）
  - その関数で一般的な条件（4 で割り切れる、偶数判定等）

if 文の中で返却する値を、return で明示すると、ネストを浅く保つことができる。
return 文により、その条件以下の内容をスキップし、 else 文を省略できる。
結果、 else 文の中の if 文がなくなり、ネストが浅くなる。
より詳細に学習したい場合は、Haskell の再帰関数のパターンマッチングとガードをおすすめする。[^1]

ガード節を理解するための別例として、 fizzbuzz プログラムを提示する。

```typescript:title=fizzbuzz.ts
// usage:
//        npx ts-node fizzbuzz.ts 30 # fizzbuzz
//        npx ts-node fizzbuzz.ts 34 # 34

// fizzbuzz の条件（より厳しい順に列挙）
// - 15 の倍数のとき fizzbuzz
// - 5 の倍数のとき buzz
// - 3 の倍数のとき fizz
// - otherwise その値
export const fizzbuzz = (n: number): string => {
  // ガード節: null、負の値、0、小数点を省略（条件が未定）

  if (n % 15 === 0) {
    return 'fizzbuzz';
  }

  if (n % 5 === 0) {
    return 'buzz';
  }

  if (n % 3 === 0) {
    return 'fizz';
  }

  return `${n}`;
}

const main = () => {
  const n = parseInt(process.argv[2]);

  console.log(fizzbuzz(n));
}

if (require.main === module) {
  main();
}
```

# まとめ

ガード節を使用することで、深いネストを改善できる。
また、不正な値や限定的な条件を先頭にまとめて明示することで、それらの返す値が分かりやすくなる。
最後に、より不正な値やより限定的な条件を順番に並べているので、どの部分がややこしい条件であるのか分かりやすい。

トレードオフは、ガード節の順番決めや break の代用など、追加のコストがかかることである。

# 参考

- [深いネストを減らすには？](https://qiita.com/nskydiving/items/1076c411b002b0a3aec9)
- [JavaScript うるう年を判定する](https://mebee.info/2020/09/29/post-18410/#outline__2)

## 脚注

[^1]: [すごい Haskell たのしく学ぼう！ | Amazon](https://amzn.to/3uM4H3j 'すごいHaskellたのしく学ぼう！')
