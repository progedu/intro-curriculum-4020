'use strict';

import { get } from "http";

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

getA().then((a) => {
  return getB().then((b) => { return a * b; });
}).then((r) => {
  getC().then((c) => { console.log(r * c); });
});

// getA().then(async(a) => {
//   const b = await getB();
//   const c = await getC();
//   console.log(a * b * c);
// })

// Promise.all([getA(), getB(), getC()]).then((r) => {
//   console.log(r[0] * r[1] * r[2]);
// });

// TODO ここに getA, getB, getC で得られる結果をかけあわせた結果 2431 を標準出力するコードを記述する
// ただし Promise チェイン(then関数の結果に対するthen関数の呼び出し)を一度は用いて実装をすること
