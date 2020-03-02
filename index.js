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
console.time('直列実行');
getA().then((a) => {
  return getB().then((b) => a * b);
}).then((ab) => {
  return getC().then((c) => ab * c);
}).then((abc) => {
  console.log(abc);
  console.timeEnd('直列実行');
});


// 以下では同じ結果が得られるがgetA, getB, getCが独立して並行に実行される
console.time('並列実行');
Promise.all([getA(), getB(), getC()]).then((abc) => {
  console.log(abc.reduce((acc, val) => acc * val));
  console.timeEnd('並列実行');
});
