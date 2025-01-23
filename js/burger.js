
const burger = document.getElementById('burger');
const menu = document.querySelector('.menu2');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
