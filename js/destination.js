const moon = document.getElementById('moon_btn');
const mars = document.getElementById('mars_btn');
const europa = document.getElementById('europa_btn');
const titan = document.getElementById('titan_btn');

const moon_des = document.querySelector('.moon');
const mars_des = document.querySelector('.mars');
const europa_des = document.querySelector('.europa');
const titan_des = document.querySelector('.titan');

mars.addEventListener('click', () => {
  moon_des.classList.add('notactivated');

  mars_des.classList.add('actived');
  europa_des.classList.remove('actived');
  titan_des.classList.remove('actived');
});

europa.addEventListener('click', () => {
  mars_des.classList.remove('actived');
  europa_des.classList.add('actived');
  titan_des.classList.remove('actived');
});
titan.addEventListener('click', () => {
  europa_des.classList.remove('actived');
  mars_des.classList.remove('actived');
  titan_des.classList.add('actived');
});
