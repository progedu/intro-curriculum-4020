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
getA().then((a) => {
  console.log("★a★" + a + "★★★");
  getB().then((b) => {
    console.log("★b★" + b + "★★★");
    console.log("★a*b★" + a * b + "★★★");
    getC().then((c) => {
      console.log("★c★" + c + "★★★");
      console.log("★a*b*c★" + a * b * c + "★★★");
    })
  })
});
*/

/*
getA().then((a) => {
  console.log("★a★" + a + "★★★");
  return getB().then((b) => {
    console.log("★b★" + b + "★★★");
    console.log("★a*b★" + a * b + "★★★");
    return a * b;
  });
}).then((ab) => {
  getC().then((c) => {
    console.log("★c★" + c + "★★★");
    console.log("★a*b*c★" + ab * c + "★★★");
  });
});
*/

Promise.all([getA(), getB(), getC()]).then((results) => {
  console.log("getA():" + results[0]);
  console.log("getB():" + results[1]);
  console.log("getC():" + results[2]);
  console.log("getA()*getB()*getC():" + (results[0] * results[1] * results[2]));
})