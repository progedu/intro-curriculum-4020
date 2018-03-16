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

// 各メソッドのpromiseを作成して配列として登録する
const promises = [getA(), getB(), getC()];
// promisesがすべてfullfiledになれば
// then()の第一引数のCB関数(onfulfilled())が実行される
// 各promiseがresolve()に引数として与えた値は
// onfulfilled()の仮引数から利用できる
Promise.all(promises).then((values)=>{
  // console.dir(values);
  // values = [ 11, 13, 17 ]
  let ans = 1;
  values.forEach((value) => {
    ans *= value;
  });
  console.log(ans);
});

// ↓さいしょにかんがえたやつ
// promiseを作成する
// getA().then(
//   (value) => {
//     // value = 11
//     const valueA = value;
//     console.log(value);
//     getB()
//       .then((value) => {
//         // value = 13
//         const valueB = value;
//         console.log(value);
//         getC()
//           .then((value) => {
//             //value = 17;
//             const valueC = value;
//             console.log(value);
//             return new Promise((resolve) => {
//               resolve(valueA * valueB * valueC);
//             });
//           })
//           .then((value) => {
//             console.log(value);
//           });
//       });
//   }
// );



