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

// Promiseチェインを用いた、getA, getB, getCの掛け算処理
getA()
  .then((a) => {
    return getB().then((b) => { return a * b; });
  })
  .then((b) => {
    return getC().then((c) => { return b * c; });
  })
  .then((c) => { console.log(c); });