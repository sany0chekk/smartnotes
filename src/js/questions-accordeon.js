'use strict';

const questionItem = document.querySelectorAll('.questions-item');

questionItem.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
