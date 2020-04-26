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
}).then((ab) => {
  return getC().then((c) => { return ab * c; });
}).then((abc) => {
  console.log(abc);
});
