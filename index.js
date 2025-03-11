const openBurgerEl = document.querySelector('.header__burger');
const menuNavEl = document.querySelector('.header');


openBurgerEl.onclick = function () {
    menuNavEl.classList.toggle('header--open');
}