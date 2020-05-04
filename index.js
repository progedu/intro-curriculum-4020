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

// 以下、練習問題の実装
let numberA;
let numberB;
let numberC;

const number = getA().then((a) => {
  numberA = a;
  return getB();
}).then((b) => {
  numberB = b;
  return getC();
}).then((c) => {
  numberC = c;
  console.log(numberA * numberB * numberC);
})
