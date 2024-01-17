const vector = document.querySelector('.vector');
const douglas = document.querySelector('.douglas');
const mark = document.querySelector('.mark');
const anousha = document.querySelector('.anousha');

const btn1 = document.querySelector('.div1');
const btn2 = document.querySelector('.div2');
const btn3 = document.querySelector('.div3');

const btn4 = document.querySelector('.div4');

btn2.addEventListener('click', () => {
  douglas.classList.remove('not_activation');
  anousha.classList.add('not_activation');

  mark.classList.add('not_activation');
  vector.classList.add('not_activation');
});

btn3.addEventListener('click', () => {
  mark.classList.remove('not_activation');
  anousha.classList.add('not_activation');
  douglas.classList.add('not_activation');

  vector.classList.add('not_activation');
});
btn4.addEventListener('click', () => {
  vector.classList.remove('not_activation');
  anousha.classList.add('not_activation');
  douglas.classList.add('not_activation');

  mark.classList.add('not_activation');
});
