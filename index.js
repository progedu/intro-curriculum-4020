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
/*
// 入れ子で
new Promise((resolve) => {
  setTimeout(() => { resolve(11) }, 1000);
}).then((a) => {
  new Promise((resolve) => {
    setTimeout(() => { resolve(a* 13) }, 1000);
  }).then((b) => {
    new Promise((resolve) => {
      setTimeout(() => { resolve(b * 17) }, 1000);
    }).then((c) => {
      console.log(c);
    });
  });
});
// return を使って
new Promise((resolve) => {
  setTimeout(() => { resolve(11)}, 1000);
}).then((a) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(a * 13)}, 1000);
  });
}).then((b) => {
  return new Promise((resolve) =>{
    setTimeout(() => { resolve(b * 17)}, 1000);
  });
}).then((c) => {
 console.log(c);
});
// 掛け算を次に
new Promise((resolve) => {
  setTimeout(() => { resolve(11) }, 1000);
}).then((a) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(13) }, 1000)
  }).then((b) => { return a * b; });
}).then((ab) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(17) }, 1000)
  }).then((c) => { console.log(ab * c ); });
});
*/
// 関数を使って（完成）
getA().then((a) => {
  return getB().then((b) => { return a * b; });
}).then((ab) => {
  getC().then((c) => { console.log(ab * c); });
});