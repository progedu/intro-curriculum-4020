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

// getA と getB をかけた答えから作られる Promise オブジェクトの then 関数を呼び出し、 その結果と getC 関数で得られる答えをかけあわせたものを console.log で出力
getA().then((a) => {
  return getB().then((b) => { return a * b; });
}).then((ab) => {
  getC().then((c) => { console.log(ab * c); });
});

// Promise.all を使うと getA(),getB(),getC()の Promise すべてが同時に開始されるので上より高速
Promise.all([getA(), getB(), getC()]).then((results) => {
    console.log(results[0] * results[1] * results[2] + "  Promise.all を使用");
});