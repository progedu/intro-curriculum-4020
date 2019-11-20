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
//new Promise((resolve)=>{
// getA().then((test1)=>{
//   return test1*getB();
// }).then((test2)=>{
//   return test2*getC();
// }).then((test3)=>{
//   console.log('Promiseチェイン結果:'+ test3.toString());
// });

getA().then((a)=>{
  return getB().then((b)=>{return a*b});
}).then((ab)=>{
  return getC().then((c)=>{ return c*ab});
}).then((abc)=>{
  console.log('Promiseチェイン結果 : '+abc);
});