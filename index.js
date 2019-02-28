'use strict';
/**【エリア①】------------------------------------------------配列の全要素に対して何らかの処理を行うためのメソッドを作る */
//関数のプロトタイプオブジェクトにmethod(第一引数：メソッドの名前 , 第二引数：配列の要素全てを扱う関数)を追加
Function.prototype.method = function (name, func) {
  this.prototype[name] = func; //このおかげで、配列.name(実行関数,初期値)で計算が可能になる
  return this;
};
//配列のプロトタイプオブジェクトに、「allarray」という名前のメソッドを追加
Array.method('allarray', function (f, value) {
  var i;               // ↑第一引数：関数　第二引数：計算の際にふさわしい初期値
  for (i = 0; i < this.length; i += 1) {
    value = f(this[i], value); //第一引数：配列の要素　第二引数：計算の際にふさわしい初期値
  }
  return value;
});

/**【エリア②】------------------------------------------------配列の全要素（≒ a:配列要素 , b:初期値）に対して実行したい関数 */
//乗算
var mult = function (a, b) {
  return a * b;
}
//加算
var sum = function (a, b) {
  return a + b;
}

/**【エリア③】---------------------------------計算したい数値（≒実行して得られる結果）を、Promise.allを用いて配列にして、実行 */
function timerPromisefy(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, 1000);
  });
}
// 計算したい値を増やしたい時に簡単です。全てがresolveされたら終了
Promise.all([
  timerPromisefy(11),
  timerPromisefy(13),
  timerPromisefy(17)
]).then((values) => {
  //配列にメソッド追加
  values.mult = function () {
    return this.allarray(mult, 1);
  }
  values.sum = function () {
    return this.allarray(sum, 0);
  }
  //検証
  console.log("全て足し合わせると" + values.sum());   //41
  console.log("全てかけ合わせると" + values.mult());  //2431
});
