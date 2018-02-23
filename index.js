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

getA().then((a) => {
  return getB().then((b) => { return a * b; });
}).then((result) => {
  getC().then((c) => { console.info('計算結果をreturnしてチェイン: ' + result * c); });
});

let product = 1;
getA().then((a) => {
  product *= a;
  return getB();
}).then((b) => {
  product *= b;
  return getC();
}).then((c) => {
  product *= c;
  console.info('全部チェイン: ' + product);
});

Promise.all([ getA(), getB(), getC() ]).then((values) => {
  console.info('Promise.all: ' + values.reduce((prev, value) => {
    return prev * value;
  }));
});