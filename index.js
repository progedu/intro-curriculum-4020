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
  getC().then((c) => { console.log(result * c); });
});
 
/** 
// Promise.all関数の利用。こっちの方が速い（getA, getB, getC の Promise すべてが同時に開始される）
Promise.all([getA(), getB(), getC()]).then((results) => {
  console.log("test2="+results[0] * results[1] * results[2]);
});

// async/await という構文の利用（getA, getB, getC が順番に実行される）
getA().then(async(a) => {
  const b = await getB();
  const c = await getC();
  console.log("test3="+a * b * c);
});

*/

