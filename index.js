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

// const p1 = getA();
// // console.log(p1);
// // p1.then(console.log);
// p1.then(function(result){
//   console.log(result)
// })
// console.log('main thread');

// const p1 = getA();
// const p2 = p1.then((p1result) => {
//   console.log(p1result);
//   return getB();
// })
// const p3 = p2.then((p2result) => {
//   console.log(p2result);
//   return getC();
// })
// const p4 = p3.then((p3result) => {
//   console.log(p3result);
//   return getA();
// })
// p4.then((p4result) => {
//   console.log(p4result);
// })

// getA()
//   .then(console.log)
//   .then(getB)
//   .then(console.log)
//   .then(getC)
//   .then(console.log)
//   .then(getA)
//   .then(console.log)
//   .then(getB)
//   .then(console.log)
//   .then(getC)
//   .then(console.log)
//   .then(getA)
//   .then(console.log)

getA()
  .then((a) => {
    return getB().then((b) => { return a * b});
  })
  .then((ab) => {
    return getC().then((c) => { return ab * c })
  })
  .then(console.log)
    
    

// Promise.all([getA(), getB(), getC()]).then((results) => {
//   console.log(results[0] * results[1] * results[2]);
// });


// getA().then(async(a) => {
//   const b = await getB();
//   const c = await getC();
//   console.log(a * b * c);
// });

// console.log(p1);
// p1.then(afterp1);
// function afterp1(p1result){
//   // p1の結果を使った処理をここに書く
//   console.log(p1result);
// }
// p1.then((p1result) => { 
//   console.log(p1result); 
//   const p2 = getB();
//   p2.then((p2result) => {
//     console.log(p2result);
//     const p3 = getC();
//     p3.then((p3result) => {
//       console.log(p3result);
//       const p4 = getA();
//       p4.then((p4result) => {
//         console.log(p4result);
//       });
//     });
//   });
// // })



// const p2 = getB();
// p2.then(afterp2);
// function afterp2(p2result){
//   console.log(p2result);
// }
// // console.log(p2);

// const p3 = getC();
// p3.then(afterp3);
// function afterp3(p3result){
//   console.log(p3result);
// }
// console.log(p3);

// new Promise((resolve) => {
//   resolve(11);
// }).then(getA() => {
//   return new Promise((resolve) => {
//     resolve(getA() * 13);
//   });
// }).then((first) => {
//   return new Promise((resolve) => {
//     resolve(first * getC());
//   });
// }).then((second) => {
//   console.log(second);
// });


// new Promise(resolve => {
//   setTimeout(() => {
//     console.log(getA());
//     resolve();
//   }, 1000);
// })
// .then(() => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(getB())
//       resolve();
//     }, 1000);
//   })
// .then(() => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(getC())
//       resolve();
//     }, 1000);
//   })
// })
// })

// const promisMaker = multi => {
//   return new Promise(resolve => {
//     setTimeout() => {
//       console.log(multi);
//       resolve();
//     }, 1000);
//   });
// };

// promisMaker(getA())
//   .then(() => promisMaker(getB()))
//   .then(() => promisMaker(getC()));

