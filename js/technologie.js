const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const rocket = document.querySelector('.rocket');
const bomb = document.querySelector('.bomb');
const capsule = document.querySelector('.capsule');

btn1.addEventListener('click', () => {
  rocket.classList.remove('not_act');
  bomb.classList.add('not_act');
  capsule.classList.add('not_act');
});
btn2.addEventListener('click', () => {
  rocket.classList.add('not_act');
  bomb.classList.remove('not_act');
  capsule.classList.add('not_act');
});
btn3.addEventListener('click', () => {
  rocket.classList.add('not_act');
  bomb.classList.add('not_act');
  capsule.classList.remove('not_act');
});
