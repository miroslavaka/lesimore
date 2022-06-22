let currYear = document.querySelector('.year');
currYear.innerHTML = new Date().getFullYear();

const hamburger = document.querySelector('.menu__hamburger');
const menu = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});
document.querySelectorAll('.menu__link').forEach((link) =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    hamburger.classList.remove('active');
  }),
);

document.querySelectorAll('.menu__link').forEach((link) =>
  link.addEventListener('click', () => {
    link.classList.toggle('menu-selected');
  }),
);
