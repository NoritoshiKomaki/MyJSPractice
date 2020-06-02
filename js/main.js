'use strict';

{
  const scores = [80, 90, 40, 70];
  
  // 配列の中身を繰り返し処理する
  scores.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`)
  });

  const prices = [180, 190, 200]

  // 配列の内容を書き換える
  const updatedPrices = prices.map(price => price + 20);
  console.log(updatedPrices);
}