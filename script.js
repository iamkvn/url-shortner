const navMenu = document.querySelector('.js-nav__menu');
const navList = document.querySelector('.js-nav__list');

navMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});
