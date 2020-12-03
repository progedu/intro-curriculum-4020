'use strict';

function getA() {
  return new Promise(resolve => {
    setTimeout(() => {resolve(11)}, 1000);
  });
};

function getB() {
  return new Promise(resolve => {
    setTimeout(() => {resolve(13)}, 1000);
  });
};

function getC() {
  return new Promise(resolve => {
    setTimeout(() => {resolve(17)}, 1000);
  });
};

// async()・await() を使って記述

async function results() {
  const a = await getA();
  const b = await getB();
  const c = await getC();

  console.log(a * b * c);
};

results();