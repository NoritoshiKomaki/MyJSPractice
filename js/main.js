'use strict';

{
  // 定数wordsに複数の単語を配列で代入
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
  ]
  // 変数wordにwordsをランダムで代入
  let word;
  // 変数locに0を代入
  let loc;
  // 変数scoreに0を代入
  let score;
  // 変数missに0を代入
  let miss;
  // 定数timeLimitに3*1000ミリ秒を代入
  const timeLimit = 3 * 1000;
  // 変数startTimeを定義
  let startTime;
  // 変数isPlayingを定義しfalseを代入
  let isPlaying = false;

  // 定数targetにid="target"の要素を代入
  const target = document.getElementById('target');
  // 定数scoreLabelにid="score"の要素を代入
  const scoreLabel = document.getElementById('score');
  // 定数missLabelにid="miss"の要素を代入
  const missLabel = document.getElementById('miss');
  // 定数timerLabelにid="timer"の要素を代入
  const timerLabel = document.getElementById('timer');
  

  function updateTarget() {
    // 変数placeholderに空文字を代入
    let placeholder = '';
    // locが増える毎にplaceholderに_を足していく
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    // targetのテキストにplaceholderとまだ入力していないwordを代入
    target.textContent = placeholder + word.substring(loc);
  }

  function updateTimer() {
    // 定数timeLeftを定義し変数startTimeと定数timeLimitを足した数値から現在時刻を引く
    const timeLeft = startTime + timeLimit - Date.now();
    // timerLabelのテキストにtimeLeft / 1000の小数2桁までを表示
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    // 10ミリ秒毎にupdateTimer繰り返す
    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 10);

    timeLeftが0を切ったら
    if (timeLeft < 0) {
      isPlaying = false;
      // updateTimerの繰り返し終了
      clearTimeout(timeoutId);
      // timerLabelを0.00に書き換え（誤差修正のため）
      timerLabel.textContent = '0.00';
      // showResultを100ms後に実行（誤差修正のため）
      setTimeout(() => {
        showResult();
      }, 100);
      // targetのテキストを以下に変更
      target.textContent = 'click to replay';
    }
  }

  function showResult() {
    // 定数accuracyに正解率の式を代入
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    // アラートでscore, miss, accuracyを表示
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
  }

  // 画面をクリックするとイベント発火
  window.addEventListener('click', () => {
    // isPlayingがtrueだったらreturnを返す
    if (isPlaying === true) {
      return;
    }
    // isPlayingをtrueに切り替え
    isPlaying = true;
    // スタート時に画面をクリックするとtargetのテキストがwordに切り替わる

    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  })

  // キーボードを押すとイベントが発火
  window.addEventListener('keydown', e => {
    if (isPlaying !== true) {
      return;
    }
    // 押したキーと定数wordの文字が一致するとscoreを表示
    if (e.key === word[loc]) {
      console.log('score');
      // 変数locを+1して次の文字に移動する
      loc++
      // locがword.lengthと同じ数になったらwordを次の文字に置き換え+locを初期化する
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      // 関数updateTargetを実行
      updateTarget();
      // scoreに1足していく
      score++;
      // scoreLabelのテキストにscoreを代入
      scoreLabel.textContent = score;
      // それ外はmissを表示
    } else {
      console.log('miss')
      // missを足していく
      miss++;
      // missLabelのテキストにmissを代入
      missLabel.textContent = miss;
    }
  });
}