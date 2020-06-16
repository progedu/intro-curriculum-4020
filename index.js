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

// Promise（普通）
// getA, getB, getC を順次実行
getA().then(a => {
  return getB().then(b => {
      return a * b;
  }).then(num => {
      getC().then(c => {
          console.log('Promise（普通）', num * c);
      })
  })
});

// Promise.all() 
// getA, getB, getC の Promise すべてが同時に実行
Promise.all([getA(), getB(), getC()]).then(result => {
  console.log('Promise.all()', result[0] * result[1] * result[2]);
});

// async-await（普通）
// getA, getB, getC を順次実行
(async () => {
  const a = await getA();
  const b = await getB();
  const c = await getC();
  console.log('async-await（普通）', a * b * c);
})();

// async-await（並列）
// getA, getB, getC を同時に実行
(async () => {
  const [a, b, c] = await Promise.all([getA(), getB(), getC()]);
  console.log('async-await（並列）', a * b * c);
})();