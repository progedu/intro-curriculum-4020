'use strict';

function getA() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(11); }, 1000);
  });
}

function getB() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(13); }, 1000);
  });
}

function getC() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(17); }, 1000);
  });
}

// TODO ここに getA, getB, getC で得られる結果をかけあわせた結果 2431 を標準出力するコードを記述する
// ただし Promise チェイン(then関数の結果に対するthen関数の呼び出し)を一度は用いて実装をすること

getA()
  .then(a => {
    return getB()
      .then(b => {
        return a * b;
      })
  })
  .then(result => {
    return getC()
      .then(c => {
        return console.log(result * c);
      });
  });

// 或いは, こっちのほうが速い
Promise.all([getA(), getB(), getC()]).then(a => {
  console.log('///Prmise.all///', a[0] * a[1] * a[2]);
});

// 或いは, await は async の中でのみ有効
// async は非同期で実行し、await は async が終わるまで待つ　多分。
getA().then(async a => {
  const b = await getB();
  const c = await getC();
  console.log('///await///', a * b * c);
});