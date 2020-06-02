'use strict';

{
  const d = new Date(2019, 10);
  d.setHours(10, 20, 30)
  d.setDate(31);
  d.setDate(d.getDate() + 3);
  console.log(d);

  // console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`)
}