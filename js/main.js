'use strict';

{
  const scores = [10, 3, 9];

  let sum = 0;

  scores.forEach(score => {
    sum += score;
  });

  const avg = sum / scores.length;

  // console.log(sum);
  console.log(Math.floor(avg)); // 小数点切り捨て
  console.log(Math.ceil(avg)); // 小数点切り上げ
  console.log(Math.round(avg)); // 小数点四捨五入
  console.log(avg.toFixed(3)); // 小数点の桁を指定

  console.log(Math.random()); // 0〜1の間のrandomな数値を返す
}