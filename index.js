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

function getD() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(10); }, 1000);
  });
}

getA().then((a) => {
  return getB().then((b) => { return a * b; });
}).then((result) => {
  return getC().then((c) => { return result * c; });
}).then((result) => {
  getD().then((d) => { console.log(result * d)});
});