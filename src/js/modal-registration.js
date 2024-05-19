'use strict';

import { openModal, closeModal } from './modal-actions';

const regModalEl = document.querySelector('.reg');
const regForm = document.querySelector('.reg-form');
const openModalBtn = document.querySelectorAll('.js-reg-open');
const closeModalBtn = document.querySelector('.reg-dialog-close');

regForm.addEventListener('submit', event => {
  event.preventDefault();
});

openModalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(regModalEl);
  });
});

closeModalBtn.addEventListener('click', () => {
  closeModal(regModalEl);
});
