'use strict';

{
  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // }

  // const intervalId = setInterval(showTime, 1000);

  let i = 0;
  function showTime() {
    console.log(new Date());
    const timeoutId = setTimeout(showTime, 1000);
    i++;
    if (i > 2) {
      clearTimeout(timeoutId);
    }
  }

  showTime();

}