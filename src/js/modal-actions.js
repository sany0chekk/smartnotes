'use strict';

export function openModal(element) {
  element.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeModal(element) {
  element.classList.remove('active');
  document.body.style.overflow = null;
}
