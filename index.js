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

getA().then((result_getA) => {
  return getB().then((result_getB) => { return result_getA * result_getB });
}).then((result_getA_x_getB) => {
  return getC().then((result_getC) => { return result_getA_x_getB * result_getC });
}).then((result_getA_x_getB_x_getC) => {
  console.log(result_getA_x_getB_x_getC);
});
