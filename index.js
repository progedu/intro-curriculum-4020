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

getA()
  .then(a => {
    return getB().then(b => {
      return a * b;
    });
  })
  .then( result => {
    getC().then(c => {
      console.log(result * c);
    });
  }); 

Promise.all([getA(),getB(),getC()]).then(results => {
  console.log(results[0] * results[1] * results[2]);
});

getA().then(async a => {
  const b = await getB();
  const c = await getC();
  console.log(a * b * c);
});