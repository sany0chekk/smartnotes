'use strict';

import { openModal, closeModal } from './modal-actions';

const regModalEl = document.querySelector('.reg');
const regWarningEl = document.querySelector('.reg-warning');
const closeWarningBtn = document.querySelector('.reg-warning-close');
const regForm = document.querySelector('.reg-form');
const openModalBtn = document.querySelectorAll('.js-reg-open');
const closeModalBtn = document.querySelector('.reg-dialog-close');

regForm.addEventListener('submit', event => {
  event.preventDefault();
  regModalEl.classList.remove('active');
  regWarningEl.classList.add('active');
});

openModalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(regModalEl);
  });
});

closeWarningBtn.addEventListener('click', () => {
  closeModal(regWarningEl);
});

closeModalBtn.addEventListener('click', () => {
  closeModal(regModalEl);
});
