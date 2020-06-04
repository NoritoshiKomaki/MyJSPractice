'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    // 定数colorsにinputを配列で代入
    const colors = document.querySelectorAll('input');
    // 変数selectedColorを定義
    let selectedColor;

    colors.forEach(color => {
      if (color.checked === true) {
        selectedColor = color.value;
      }
    });

    const li = document.createElement('li');
    li.textContent = selectedColor;
    document.querySelector('body').appendChild(li);
  });
}