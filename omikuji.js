'use strict';
//methodを追加できる関数を作る
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};
//Array.prototypeにreduceという名前のメソッド追加
Array.method('reduce', function(f, value){
  var i;
  for(i = 0; i < this.length; i += 1){
      value = f(this[i], value);
  }
  return value;
});
  //2つの値の乗算を返す関数
  var mult = function(a, b){
    return a * b;
  }

function timerPromisefy(delay) {
  return new Promise(function (resolve) {
      setTimeout(() => {
          resolve(delay);
      },1000);
  });
}

// 全てがresolveされたら終了
Promise.all([
  timerPromisefy(11),
  timerPromisefy(13),
  timerPromisefy(17)
]).then(function (values) {
  console.log(values); //配列が表示される

  //配列にメソッド追加
values.mult = function(){
  return this.reduce(mult, 1);
}
//検証
mult = values.mult();
console.log(mult);  //2431

});