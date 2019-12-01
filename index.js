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

var ans = 1;
getA().then((a) => {
  ans *= a;
  return getB();
}).then((b) => {
  ans *= b;
  return getC();
}).then((c) => {
  ans *= c;
  console.log(ans);
});
