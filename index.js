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

//return無しバージョン、ひとつのスコープ内なので以前の関数の結果がずっと残る。最後にまとめて計算
getA().then((result_a) => {//getA()が終わったら
  getB().then((result_b) => {//getB()を実行、終わったら
    getC().then((result_c) => {////getC()を実行、終わったら
      console.log('without return:' + result_a * result_b * result_c);//計算してコンソール出力
    });
  });
});

//returnを使ったバージョン、スコープの関係で前の関数の結果は消える。毎回計算して結果をreturnで渡していく
getA().then((result_a) => {
  return getB().then((result_b) => {　//無名関数の結果をgetB().then()の結果としてreturn
    return result_a * result_b; //無名関数の結果をreturn
  });
}).then((result_a_x_b) => {//result_a_x_bにgetB().then()の結果が入ってる
  return getC().then((result_c) => {//無名関数の結果をgetC().then()の結果としてreturn
    return result_a_x_b * result_c;//無名関数の結果をreturn
  });
}).then((result_a_x_b_x_c) => {//getC().then()の結果が入ってる
  console.log('with return:' + result_a_x_b_x_c);
});
