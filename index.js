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
let storeda = null;
let storedab = null;
getA().then(a => {
  storeda = a;
  const promises = getB();
  return promises;
}).then(b=>{
  storedab = storeda * b;
  const promises  =  getC();
  return promises;
}).then(c =>{
  console.log(storedab*c)
});

