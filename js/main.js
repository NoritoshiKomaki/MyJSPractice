'use strict';

{
  // 定数timerにid="timer"の要素を代入
  const timer = document.getElementById('timer');
  // 定数startにid="start"の要素を代入
  const start = document.getElementById('start');
  // 定数stopにid="stop"の要素を代入
  const stop = document.getElementById('stop');
  // 定数resetにid="reset"の要素を代入
  const reset = document.getElementById('reset');

  // 変数startTimeを定義
  let startTime;
  // setTimeoutを止めるための変数timeoutIdを定義
  let timeoutId;
  // 経過時間を保持するためのelapsedTimeを定義し、0を代入
  let elapsedTime = 0;

  function countUp() {
    // 定数dに現在時刻からstartをクリックした時刻を引いた時刻を代入(クリックしてからの秒数)
    const d = new Date(Date.now() - startTime + elapsedTime);
    // 定数dから分を取得し、mに代入 Stringで文字列化している
    // padStart(表示したい桁数, '桁の中身が空の時に表示する文字列')
    const m = String(d.getMinutes()).padStart(2, '0');
    // 定数dから秒を取得し、sに代入
    const s = String(d.getSeconds()).padStart(2, '0');
    // 定数dからミリ秒を取得し、msに代入
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    // 定数timerのテキストにm, s, msを表示
    timer.textContent = `${m}:${s}.${ms}`;

    // 10ミリ秒毎に関数countUpを繰り返す
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  // スタート前のinactiveclassを設定
  function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  // スタート後のinactiveclassを設定
  function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  // ストップ時のinactiveclassを設定
  function setButtonStateStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  // 関数setButtonStateInitialを実行
  setButtonStateInitial()

  // 定数startをクリックするとイベント発火
  start.addEventListener('click', () => {
    // 定数startの要素がinactiveclassを持っていたらreturnを返す
    if (start.classList.contains('inactive') === true) {
      return;
    }
    // 関数setButtonStateRunningを実行
    setButtonStateRunning()
    // 現在時刻をstartTimeに代入
    startTime = Date.now();
    // 関数countUpを実行
    countUp();
  });

  // 定数stopをクリックするとイベント発火
  stop.addEventListener('click', () => {
    // 定数stopの要素がinactiveclassを持っていたらreturnを返す
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    // 関数setButtonStateStoppedを実行
    setButtonStateStopped()
    // 変数timeoutIdを用いてsetTimeoutを停止
    clearTimeout(timeoutId);
    // 変数elapsedTimeに現在時刻からstartTimeを引いた時刻を代入
    elapsedTime += Date.now() - startTime;
  });

  // 定数resetをクリックするとイベント発火
  reset.addEventListener('click', () => {
    // 定数resetの要素がinactiveclassを持っていたらreturnを返す
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    // 関数setButtonStateInitialを実行
    setButtonStateInitial()
    // 定数timerのテキストを以下に設定する
    timer.textContent = '00:00.000';
    // 変数elapsedTimeを初期化する
    elapsedTime = 0;
  });
}