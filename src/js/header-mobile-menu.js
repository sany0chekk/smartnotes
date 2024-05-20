'use strict';

const menuEl = document.querySelector('.header-mobile');
const openMenuBtn = document.querySelector('.header-mobile-open');
const closeMenuBtn = menuEl.querySelector('.header-mobile-close');

openMenuBtn.addEventListener('click', onOpenMenu);
menuEl.addEventListener('click', onCloseMenu);

function onOpenMenu() {
  menuEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function onCloseMenu(event) {
  if (event.target !== event.currentTarget) {
    menuEl.classList.remove('active');
    document.body.style.overflow = null;
  }
}
