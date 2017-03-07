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

getA().then((a) => {
  return getB().then((b) => { return Promise.all([a, b]); });
}).then((arr) => {
  return getC().then((c) => { arr.push(c); return Promise.all(arr); });
}).then((arr) => {
  console.log( arr.reduce((a,b) => {return a*b}) );
});