'use strict';

function getA() {
  return new Promise(resolove => {
    setTimeout(() => {resolove(11)}, 1000);
  });
};

function getB() {
  return new Promise(resolove => {
    setTimeout(() => {resolove(13)}, 1000);
  });
};

function getC() {
  return new Promise(resolove => {
    setTimeout(() => {resolove(17)}, 1000);
  });
};

// PromiseAll()を使って記述
Promise.all([getA(), getB(), getC()]).then(results => {
  console.log(results[0] * results[1] * results[2]);
});
