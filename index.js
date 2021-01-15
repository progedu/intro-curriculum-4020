'use strict';

function getA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(11);
    }, 1000);
  });
}

function getB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(13);
    }, 1000);
  });
}

function getC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(17);
    }, 1000);
  });
}

// TODO ここに getA, getB, getC で得られる結果をかけあわせた結果 2431 を標準出力するコードを記述する
// ただし Promise チェイン(then関数の結果に対するthen関数の呼び出し)を一度は用いて実装をすること

// 1. Promiseチェイン
getA()
  .then((a) => {
    return getB().then((b) => {
      return a * b;
    });
  })
  .then((result) => {
    getC().then((c) => {
      console.log(result * c);
    });
  });

// 2. Promise.all関数
Promise.all([getA(), getB(), getC()]).then((results) => {
  const answer = results[0] * results[1] * results[2];
  console.log(answer);
});

// 3. async/await構文
getA().then(async (a) => {
  const b = await getB();
  const c = await getC();
  console.log(a * b * c);
});
