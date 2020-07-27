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
getA()
  .then(result_a => getB().then(result_b => result_a * result_b))
  .then(result_ab => getC().then(result_c => result_ab * result_c))
  .then(result_abc => testFunction(result_abc));

function testFunction(result) {
  console.log("expected=" + 2431);
  console.log(`tobe=${result}`);
  if (result === 2431) {
    console.log('pass');
  } else {
    console.log('fail');
  };
}

