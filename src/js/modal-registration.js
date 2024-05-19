'use strict';

import { openModal, closeModal } from './modal-actions';

const regModalEl = document.querySelector('.reg');
const regForm = document.querySelector('.reg-form');
const openModalBtn = document.querySelector('.header-btn');
const closeModalBtn = document.querySelector('.reg-dialog-close');

regForm.addEventListener('submit', event => {
  event.preventDefault();
});

openModalBtn.addEventListener('click', () => {
  openModal(regModalEl);
});

closeModalBtn.addEventListener('click', () => {
  closeModal(regModalEl);
});
