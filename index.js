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
  return getB().then((b) => { return a * b});
}).then((ab) => {
  getC().then((c) => {
    console.log(ab * c);
  });
});

// このほうが処理は早い
// Promise.all([getA(), getB(), getC()]).then((results) => {
//   console.log(results[0] * results[1] * results[2]);
// });

//これは分かりやすいけど効率良くない
//.thenは終わるまで違う処理してて、終わったら取り組む
//awaitは終わるまで何もせず待ってて、終わったら取り組む
// getA().then(async(a) => {
//   const b = await getB();
//   const c = await getC();
//   console.log(a * b * c);
// });