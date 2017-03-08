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
getA().then((a) => { // 11
  return getB().then((b) => { return a * b; }); // 11 * 13 = 143
}).then((result) => {
  return getC().then((c) => { return result * c });  // 143 * 17 = 2431
}).then((result) => { console.log(result); });  //  結果出力
